import { Grid, Typography } from "@mui/material";
import React from "react";

function TrackerLanding() {
  return (
    <Grid sx={{ minHeight: "100vh", px: "32px", pt: 2 }}>
      <Typography
        variant="h1"
        sx={{ fontSize: "32px", fontWeight: 700, color: "#ffff" }}
      >
        Expense Tracker
      </Typography>
    </Grid>
  );
}

export default TrackerLanding;
