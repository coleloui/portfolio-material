import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import RightValley from "./right/RightValley";
import RightList from "./right/RightList";
import RightGoDex from "./right/RightGoDex";
// import RightBio from "./right/RightBio";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { SHOW, BIO, ROCKETLIST, MAPLEVALLEY, POKEGODEX } from "../actions";

const useStyles = makeStyles((theme) => ({
  show: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    color: "#482880",
    display: "block",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function Right() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const MapleValleyRight = useSelector((state) => state.MapleValleyRight);
  const PokeGoDexRight = useSelector((state) => state.PokeGoDexRight);
  const RightSide = useSelector((state) => state.RightSide);

  const load = () => {
    dispatch(SHOW());
    dispatch(BIO());
    if (MapleValleyRight && PokeGoDexRight === true) {
      dispatch(ROCKETLIST());
    }
    if (MapleValleyRight === false) {
      dispatch(MAPLEVALLEY());
    }
    if (PokeGoDexRight === false) {
      dispatch(POKEGODEX());
    }
  };

  return (
    <Grid container diretion="column" justify="center">
      {RightSide ? (
        <Grid item>
          <h1>
            Projects
            <KeyboardArrowDownIcon
              className={classes.show}
              onClick={() => {
                load();
              }}
            />
          </h1>
        </Grid>
      ) : (
        ""
      )}
      {RightSide ? (
        ""
      ) : (
        <Grid item>
          <h1>
            About Me
            <KeyboardArrowUpIcon
              className={classes.show}
              onClick={() => {
                load();
              }}
            />
          </h1>
        </Grid>
      )}
      {RightSide ? (
        ""
      ) : MapleValleyRight ? (
        <Grid item>
          <RightValley />
        </Grid>
      ) : (
        <Grid item>
          <RightList />
        </Grid>
      )}
      {RightSide ? (
        ""
      ) : PokeGoDexRight ? (
        <Grid item>
          <RightGoDex />
        </Grid>
      ) : (
        <Grid item>
          <RightList />
        </Grid>
      )}
    </Grid>
  );
}
