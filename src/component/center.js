import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Bio from "./bio";
import RocketList from "./rocketlist";
import MapleValley from "./maplevalley";
import PokeGoDex from "./pokegodex";

const useStyles = makeStyles((theme) => ({
  top: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px",
    },
    marginTop: "5px",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  lines: {
    lineHeight: 3,
    textAlign: "left",
    borderLeft: "5px solid #482880",
    paddingLeft: "10px",
    fontSize: "15px",
  },
}));

export default function Center() {
  const classes = useStyles();
  return (
    <Grid container space={3} className={classes.top} maxwidth="lg">
      <Grid item>
        <Bio />
        {/* <RocketList /> */}
        {/* <MapleValley /> */}
        {/* <PokeGoDex /> */}
      </Grid>
    </Grid>
  );
}
