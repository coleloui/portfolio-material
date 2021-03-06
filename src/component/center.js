import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Bio from "./center/Bio";
// import RocketList from "./center/RocketList";
// import MapleValley from "./center/MapleValley";
// import PokeGoDex from "./center/PokeGoDex";

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
