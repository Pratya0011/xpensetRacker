import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

function WalletBalance() {
  return (
    <Grid
      sx={{
        backgroundColor: "#9B9B9B",
        py: "3.25rem",
        px: "1.5rem",
        width: "22rem",
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
          ₹4500
        </Typography>
      </Box>
      <Button
        startIcon={<AddIcon />}
        sx={{
          background: "linear-gradient(90deg, #B5DC52 0%, #89E148 100%)",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "15px",
          fontSize: "10px",
          px: "25px",
          py: "10px",
        }}
      >
        Add Income
      </Button>
    </Grid>
  );
}

export default WalletBalance;
