import React from "react";
import { Grid } from "@material-ui/core";
import Center from "../component/Center";
import Header from "../component/Header";
import BigFoot from "../component/BigFoot";
import Right from "../component/Right";

export default function Home() {
  return (
    <Grid container direction="row" space={1}>
      <Grid item sm={9}>
        <Header />
        <Center />
        <BigFoot />
      </Grid>
      <Grid item sm={1} />
      <Grid item sm={1}>
        <Right />
      </Grid>
    </Grid>
  );
}
