import { Grid, Typography } from "@mui/material";
import PieChart from "./PieChart";
import TotalExpences from "./TotalExpences";
import WalletBalance from "./WalletBalance";

function TrackerLanding() {
  return (
    <Grid sx={{ minHeight: "100vh", px: "32px", pt: 2 }}>
      <Typography
        variant="h1"
        sx={{ fontSize: "32px", fontWeight: 700, color: "#ffff" }}
      >
        Expense Tracker
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          px: "42px",
          py: "58px",
          backgroundColor: "#626262",
          borderRadius: "10px",
          mt: 2,
        }}
        spacing={2}
      >
        <Grid size={{ lg: 4, md: 6, sm: 12, xs: 12 }}>
          <WalletBalance />
        </Grid>

        <Grid size={{ lg: 4, md: 6, sm: 12, xs: 12 }}>
          <TotalExpences />
        </Grid>
        <Grid size={{ lg: 4, md: 6, sm: 12, xs: 12 }} sx={{ height: "15rem" }}>
          <PieChart />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TrackerLanding;
