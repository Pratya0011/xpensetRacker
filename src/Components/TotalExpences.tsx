import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function TotalExpences() {
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
          Expenses:
        </Typography>
        <Typography variant="h5" sx={{ color: "#F4BB4A" }}>
          ₹4500
        </Typography>
      </Box>
      <Button
        startIcon={<AddIcon />}
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
      >
        Add Expense
      </Button>
    </Grid>
  );
}

export default TotalExpences;
