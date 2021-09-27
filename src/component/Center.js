import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import CenterBio from "./center/CenterBio";
import CenterRocketList from "./center/CenterRocketList";
import CenterMapleValley from "./center/CenterMapleValley";
// import CenterPokeGoDex from "./center/CenterPokeGoDex";
import CenterEpic from './center/CenterEpic'

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

export const Center = () => {
  const classes = useStyles();

  const Bio = useSelector((state) => state.Bio);
  const RocketList = useSelector((state) => state.RocketList);
  const MapleValley = useSelector((state) => state.MapleValley);
  // const PokeGoDex = useSelector((state) => state.PokeGoDex);
  const Epic = useSelector((state) => state.Epic);

  return (
    <Grid container space={3} className={classes.top} maxwidth="lg">
      <Grid item>
        {Bio ? <CenterBio /> : ""}
        {RocketList ? <CenterRocketList /> : ""}
        {MapleValley ? <CenterMapleValley /> : ""}
        {Epic ? <CenterEpic /> : ""}
        {/* {PokeGoDex ? <CenterPokeGoDex /> : ""} */}
      </Grid>
    </Grid>
  );
};
