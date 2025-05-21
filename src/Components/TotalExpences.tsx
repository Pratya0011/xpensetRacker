import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

interface IState {
  title: string;
  price: any;
  category: any;
  date: any;
}

const options = ["Food", "Entertainment", "Travel"];

function TotalExpences() {
  const storedExpenses = localStorage.getItem("expenses");
  const balance: any = storedExpenses ? JSON.parse(storedExpenses) : [];
  const [total, setTotal] = useState<number>(0);
  const [state, setState] = useState<IState[]>([]);
  const [formData, setFormData] = useState<IState>({
    title: "",
    price: null,
    category: "",
    date: null,
  });
  const [open, setOpen] = useState<boolean>(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#EFEFEFD9",
    boxShadow: 24,
    borderRadius: "15px",
    p: 2,
  };

  useEffect(() => {
    if (balance?.length > 0) {
      const totalExpense = balance.reduce(
        (acc: any, item: any) => acc + Number(item.price),
        0
      );
      setTotal(totalExpense);
    }
  }, [balance]);

  const handleClose = () => {
    setOpen(false);
  };

  const addExpense = (e: any) => {
    e.preventDefault();
    const data = [...state, formData];
    setState(data);
    localStorage.setItem("expenses", JSON.stringify(data));
    setFormData({
      title: "",
      price: null,
      category: "",
      date: null,
    });
    handleClose();
  };
  return (
    <Grid
      sx={{
        backgroundColor: "#9B9B9B",
        py: "3.25rem",
        px: "1.5rem",
        maxWidth: "22rem",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        <Typography variant="h5" sx={{ color: "#ffff", mr: 1 }}>
          Expenses:
        </Typography>
        <Typography variant="h5" sx={{ color: "#F4BB4A" }}>
          ₹{total || 0}
        </Typography>
      </Box>
      <Button
        // startIcon={<AddIcon />}
        sx={{
          background:
            "linear-gradient(90deg, #FF9595 15%, #FF4747 60%, #FF3838 100%)",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "15px",
          fontSize: "10px",
          px: "25px",
          py: "10px",
        }}
        onClick={() => setOpen(true)}
      >
        + Add Expense
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5">
            Add Expenses
          </Typography>
          <form
            onSubmit={(e) => {
              addExpense(e);
            }}
          >
            <Grid container mt={2} gap={2}>
              <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
                <TextField
                  label="Title"
                  placeholder="Title"
                  required
                  fullWidth
                  size="small"
                  sx={{ border: "none" }}
                  value={formData?.title}
                  onChange={(e: any) =>
                    setFormData((prev: IState) => {
                      return {
                        ...prev,
                        title: e.target.value,
                      };
                    })
                  }
                />
              </Grid>
              <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
                <TextField
                  label="Price"
                  placeholder="Price"
                  required
                  fullWidth
                  type="number"
                  size="small"
                  sx={{ border: "none" }}
                  value={formData?.price}
                  onChange={(e: any) =>
                    setFormData((prev: IState) => {
                      return {
                        ...prev,
                        price: e.target.value,
                      };
                    })
                  }
                />
              </Grid>
              <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
                <Autocomplete
                  disablePortal
                  disableClearable
                  options={options}
                  sx={{ border: "none" }}
                  fullWidth
                  size="small"
                  value={formData?.category}
                  onChange={(e: any, value: any) =>
                    setFormData((prev: IState) => {
                      return {
                        ...prev,
                        category: value,
                      };
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      label="Select Category"
                      placeholder="Select Category"
                    />
                  )}
                />
              </Grid>
              <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
                <TextField
                  label="dd/mm/yyyy"
                  placeholder="dd/mm/yyyy"
                  required
                  fullWidth
                  type="date"
                  size="small"
                  sx={{ border: "none" }}
                  value={formData?.date}
                  onChange={(e: any) =>
                    setFormData((prev: IState) => {
                      return {
                        ...prev,
                        date: e.target.value,
                      };
                    })
                  }
                />
              </Grid>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#F4BB4A", borderRadius: "15px" }}
                type="submit"
              >
                Add Balance
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#E3E3E3",
                  borderRadius: "15px",
                  color: "#000",
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
          </form>
        </Box>
      </Modal>
    </Grid>
  );
}

export default TotalExpences;
