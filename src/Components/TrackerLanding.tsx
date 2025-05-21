import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PieChart from "./PieChart";
import TotalExpences from "./TotalExpences";
import WalletBalance from "./WalletBalance";
import RecentTrans from "./RecentTrans";

function TrackerLanding() {
  const storedExpenses = localStorage.getItem("expenses");
  const expenses: any = storedExpenses ? JSON.parse(storedExpenses) : [];
  const [netBalance, setNetBalance] = useState<number>(0);
  const [categoryTotal, setCategoryTotal] = useState<any>({});
  const [transitionList, setTransactionList] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const totals: { [key: string]: number } = {};
    expenses.forEach((item: any) => {
      const category = item.category;
      const price = Number(item.price);
      if (totals[category]) {
        totals[category] += price;
      } else {
        totals[category] = price;
      }
    });
    setCategoryTotal(totals);
  }, []);

  useEffect(() => {
    setTransactionList(expenses);
  }, [transitionList]);

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
          <WalletBalance
            netBalance={netBalance}
            setNetBalance={setNetBalance}
          />
        </Grid>

        <Grid size={{ lg: 4, md: 6, sm: 12, xs: 12 }}>
          <TotalExpences
            netBalanc={netBalance}
            setNetBalance={setNetBalance}
            categoryTotal={categoryTotal}
            setCategoryTotal={setCategoryTotal}
            total={total}
            setTotal={setTotal}
          />
        </Grid>
        <Grid size={{ lg: 4, md: 6, sm: 12, xs: 12 }} sx={{ height: "15rem" }}>
          <PieChart categoryTotal={categoryTotal} />
        </Grid>
      </Grid>
      <Grid mt={2} sx={{ width: "100%", gap: 2 }} container>
        <Grid size={{ lg: 7, md: 5, sm: 12, xs: 12 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: "32px", fontWeight: 700, color: "#ffff" }}
          >
            Recent Transactions
          </Typography>
          <RecentTrans
            transitionList={transitionList}
            setNetBalance={setNetBalance}
            setCategoryTotal={setCategoryTotal}
            total={total}
            setTotal={setTotal}
          />
        </Grid>

        <Grid size={{ lg: 4, md: 5, sm: 12, xs: 12 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: "32px", fontWeight: 700, color: "#ffff" }}
          >
            Top Expenses
          </Typography>
          {/* <RecentTrans /> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TrackerLanding;
