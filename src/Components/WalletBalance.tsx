import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function WalletBalance() {
  const [state, setState] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  const storedIncome = localStorage.getItem("balance");
  const balance: any = storedIncome ? JSON.parse(storedIncome) : 0;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#EFEFEFD9",
    boxShadow: 24,
    borderRadius: "15px",
    p: 3,
  };

  useEffect(() => {
    const data = 5000;
    localStorage.setItem("balance", JSON.stringify(data));
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const addIncome = (e: any) => {
    e.preventDefault();
    if (state) {
      const data = balance ? Number(balance) + Number(state) : Number(state);
      localStorage.setItem("balance", JSON.stringify(data));
    }
    setState(null);
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
          Wallet Balance:
        </Typography>
        <Typography variant="h5" sx={{ color: "#9DFF5B" }}>
          ₹{balance || 0}
        </Typography>
      </Box>
      <Button
        // startIcon={<AddIcon />}
        sx={{
          background: "linear-gradient(90deg, #B5DC52 0%, #89E148 100%)",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "15px",
          fontSize: "10px",
          px: "25px",
          py: "10px",
        }}
        onClick={() => setOpen(true)}
      >
        + Add Income
      </Button>

      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5">
            Add Balance
          </Typography>
          <form
            onSubmit={(e: any) => {
              addIncome(e);
            }}
          >
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <TextField
                name="Income Amount"
                label="Income Amount"
                placeholder="Income Amount"
                required
                type="number"
                size="small"
                sx={{ border: "none" }}
                value={state}
                onChange={(e: any) => setState(e.target.value)}
              />
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
            </Box>
          </form>
        </Box>
      </Modal>
    </Grid>
  );
}

export default WalletBalance;
