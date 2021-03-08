import React from "react";
import { makeStyles, Grid, Typography, Grow } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import MapleValley from "../Photo/MapleValleyNew.png";
import { MAPLEVALLEY, BIO, ROCKETLIST, POKEGODEX } from "../../actions";

const useStyles = makeStyles((theme) => ({
  size: {
    [theme.breakpoints.up("sm")]: {
      height: theme.spacing(25),
      width: theme.spacing(55),
    },
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))",
    borderRadius: "15px",
    backgroundImage: `url(${MapleValley})`,
    backgroundSize: "cover",
    "&:hover": {
      opacity: 0.5,
    },
    "&:hover svg": {
      visibility: "visible",
    },
  },
  looks: {
    fontWeight: "bold",
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))",
  },
  walls: {
    marginBottom: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  noshow: {
    visibility: "hidden",
    height: theme.spacing(10),
    width: theme.spacing(10),
    display: "block",
    margin: "auto",
    marginTop: "50px",
    color: "#482880",
  },
}));

export default function RightValley() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const BioRight = useSelector((state) => state.BioRight);
  const RocketListRight = useSelector((state) => state.RocketListRight);
  const MapleValleyRight = useSelector((state) => state.MapleValleyRight);
  const PokeGoDexRight = useSelector((state) => state.PokeGoDexRight);

  const moveMapleValley = () => {
    if (BioRight === false) {
      dispatch(BIO());
      dispatch(MAPLEVALLEY());
    } else if (RocketListRight === false) {
      dispatch(ROCKETLIST());
      dispatch(MAPLEVALLEY());
    } else if (PokeGoDexRight === false) {
      dispatch(POKEGODEX());
      dispatch(MAPLEVALLEY());
    } else dispatch(MAPLEVALLEY());
  };

  return (
    <Grow in={MapleValleyRight}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.walls}
      >
        <Typography variant="h4" className={classes.looks}>
          Maple Valley
        </Typography>
        <div
          title="Maple Valley"
          className={classes.size}
          onClick={() => {
            moveMapleValley();
          }}
        >
          <FullscreenIcon className={classes.noshow} />
        </div>
      </Grid>
    </Grow>
  );
}
