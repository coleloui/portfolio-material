import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import RightValley from "./right/RightValley";
import RightList from "./right/RightList";
import RightGoDex from "./right/RightGoDex";
import RightBio from "./right/RightBio";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { SHOW } from "../actions";

const useStyles = makeStyles((theme) => ({
  show: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    display: "block",
    color: "#482880",
    margin: "auto",
  },
  projects: {
    textAlign: "center",
    fontSize: 25,
  },
}));

export default function Right() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const RocketListRight = useSelector((state) => state.RocketListRight);
  const MapleValleyRight = useSelector((state) => state.MapleValleyRight);
  const PokeGoDexRight = useSelector((state) => state.PokeGoDexRight);
  const RightSide = useSelector((state) => state.RightSide);

  const ripBrain = () => {
    if (RocketListRight && PokeGoDexRight === true) {
      return (
        <Grid item>
          <RightBio />
        </Grid>
      );
    }
    if (MapleValleyRight && PokeGoDexRight === true) {
      return (
        <Grid item>
          <RightBio />
        </Grid>
      );
    }
    if (MapleValleyRight && RocketListRight === true) {
      return (
        <Grid item>
          <RightBio />
        </Grid>
      );
    }
  };

  return (
    <Grid container diretion="column" justify="center">
      {RightSide ? (
        <Grid item>
          <h2 className={classes.projects}>
            Check out my projects
            <ExpandMoreIcon
              className={classes.show}
              onClick={() => {
                dispatch(SHOW());
              }}
            />
          </h2>
        </Grid>
      ) : (
        ""
      )}
      {RightSide ? (
        ""
      ) : (
        <Grid item>
          <ExpandLessIcon
            className={classes.show}
            onClick={() => {
              dispatch(SHOW());
            }}
          />
        </Grid>
      )}
      {RightSide ? (
        ""
      ) : RocketListRight ? (
        <Grid item>
          <RightList />
        </Grid>
      ) : (
        ripBrain()
      )}
      {RightSide ? (
        ""
      ) : MapleValleyRight ? (
        <Grid item>
          <RightValley />
        </Grid>
      ) : (
        ripBrain()
      )}
      {RightSide ? (
        ""
      ) : PokeGoDexRight ? (
        <Grid item>
          <RightGoDex />
        </Grid>
      ) : (
        ripBrain()
      )}
    </Grid>
  );
}
