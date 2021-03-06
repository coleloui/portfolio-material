import React from "react";
import { Grid } from "@material-ui/core";
import RightValley from "./right/RightValley";
import RightList from "./right/RightList";
import RightGoDex from "./right/RightGoDex";
import RightBio from "./right/RightBio";

export default function Right() {
  return (
    <Grid container diretion="column" justify="center">
      <Grid item>
        <RightBio />
      </Grid>
      {/* <Grid item>
        <RightList />
      </Grid> */}
      <Grid item>
        <RightValley />
      </Grid>
      <Grid item>
        <RightGoDex />
      </Grid>
    </Grid>
  );
}
