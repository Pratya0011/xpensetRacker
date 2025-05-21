import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoPizzaOutline } from "react-icons/io5";
import { LuGift } from "react-icons/lu";
import { MdOutlineLuggage, MdOutlineModeEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
interface IState {
  title: string;
  price: any;
  category: any;
  date: any;
}

const options = ["Food", "Entertainment", "Travel"];

function RecentTrans({
  transitionList,
  setNetBalance,
  setCategoryTotal,
  setTotal,
}: any) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<IState>({
    title: "",
    price: null,
    category: "",
    date: null,
  });
  const [open, setOpen] = useState<boolean>(false);
  const storedIncome = localStorage.getItem("balance");
  const incomeBalance: any = storedIncome ? JSON.parse(storedIncome) : 0;
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(transitionList?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = transitionList?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = (index: number) => {
    setOpen(true);
    setEditIndex(index);
    setFormData({
      title: transitionList[index]?.title,
      date: transitionList[index]?.date,
      category: transitionList[index]?.category,
      price: transitionList[index]?.price,
    });
  };

  const addExpense = (e: any) => {
    e.preventDefault();
    const data = [...transitionList];

    if (editIndex !== null) {
      // Update existing entry
      data[editIndex] = formData;
    } else {
      // Add new entry
      data.unshift(formData);
    }

    const totals: { [key: string]: number } = {};
    localStorage.setItem("expenses", JSON.stringify(data));

    const totalExpense = data.reduce(
      (acc: any, item: any) => acc + Number(item.price),
      0
    );
    setTotal(totalExpense);
    const walletData = incomeBalance - totalExpense;
    setNetBalance(walletData);
    localStorage.setItem("balance", JSON.stringify(walletData));

    data.forEach((item) => {
      const category = item.category;
      const price = Number(item.price);
      if (totals[category]) {
        totals[category] += price;
      } else {
        totals[category] = price;
      }
    });
    setCategoryTotal(totals);

    // Reset
    setFormData({
      title: "",
      price: null,
      category: "",
      date: null,
    });
    setEditIndex(null); // exit edit mode
    handleClose();
  };

  return (
    <Grid
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        border: "1px solid #9B9B9B",
        borderRadius: "15px",
        pt: transitionList?.length ? "40px" : 0,
        px: "30px",
      }}
    >
      {transitionList?.length > 0 ? (
        <>
          {currentItems?.map((item: any, index: number) => (
            <Box key={index}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "9px",
                  mt: index > 0 ? 2 : 0,
                }}
              >
                <Grid sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {item?.category === "Food" ? (
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#dbdbdb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IoPizzaOutline />
                    </Box>
                  ) : item?.category === "Travel" ? (
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#dbdbdb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MdOutlineLuggage />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#dbdbdb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LuGift />
                    </Box>
                  )}
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body1" sx={{ fontWeight: 400 }}>
                      {item?.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 400, color: "#9B9B9B" }}
                    >
                      {item?.date}
                    </Typography>
                  </Box>
                </Grid>
                <Grid sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body1" sx={{ color: "#F4BB4A" }}>
                    ₹{item?.price}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "15px",
                        backgroundColor: "#fe4444",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TiDeleteOutline />
                    </Box>
                    <Box
                      onClick={() => handleEdit(index)}
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "15px",
                        backgroundColor: "#f4bb4a",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MdOutlineModeEdit />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Divider sx={{ width: "100%", color: "#000" }} />
            </Box>
          ))}

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              p: 2,
            }}
          >
            <Box
              onClick={handlePrev}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "15px",
                backgroundColor: "#F1F1F1",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentPage > 1 ? "pointer" : "not-allowed",
              }}
            >
              <FaArrowLeft />
            </Box>
            <Box
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "5px",
                backgroundColor: "#43967B",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {currentPage}
            </Box>
            <Box
              onClick={handleNext}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "15px",
                backgroundColor: "#F1F1F1",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentPage < totalPages ? "pointer" : "not-allowed",
              }}
            >
              <FaArrowRight />
            </Box>
          </Grid>
        </>
      ) : (
        <Box sx={{ m: 2 }}>
          <Typography>No Transactions!</Typography>
        </Box>
      )}

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
                  name="title"
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
                  name="price"
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
                <select
                  id="category-select"
                  name="category"
                  required
                  value={formData?.category}
                  onChange={(e: any) =>
                    setFormData((prev: IState) => {
                      return {
                        ...prev,
                        category: e.target.value,
                      };
                    })
                  }
                  style={{
                    height: 40,
                    width: "100%",
                    backgroundColor: "transparent",
                  }}
                >
                  <option value="">Select Category</option>
                  {options.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
                <TextField
                  name="date"
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
                Update Expense
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

export default RecentTrans;
