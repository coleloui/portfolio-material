import React from "react";
import { makeStyles, Grid, Typography, Grow } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { MAPLEVALLEY, BIO, ROCKETLIST, POKEGODEX } from "../../actions";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Niko from "../Photo/Niko.jpg";

const useStyles = makeStyles((theme) => ({
  size: {
    [theme.breakpoints.up("sm")]: {
      height: theme.spacing(25),
      width: theme.spacing(20),
    },
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))",
    borderRadius: "15px",
    backgroundImage: `url(${Niko})`,
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
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(5),
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

export default function RightBio() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const BioRight = useSelector((state) => state.BioRight);
  const RocketListRight = useSelector((state) => state.RocketListRight);
  const MapleValleyRight = useSelector((state) => state.MapleValleyRight);
  const PokeGoDexRight = useSelector((state) => state.PokeGoDexRight);

  const moveBio = () => {
    if (MapleValleyRight === false) {
      dispatch(MAPLEVALLEY());
      dispatch(BIO());
    } else if (RocketListRight === false) {
      dispatch(ROCKETLIST());
      dispatch(BIO());
    } else if (PokeGoDexRight === false) {
      dispatch(POKEGODEX());
      dispatch(BIO());
    } else dispatch(BIO());
  };

  return (
    <Grow in={BioRight} mountOnEnter unmountOnExit>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.walls}
      >
        <Typography variant="h4" className={classes.looks}>
          About Me
        </Typography>
        <div
          title="Louis & Niko"
          className={classes.size}
          onClick={() => {
            moveBio();
          }}
        >
          <FullscreenIcon className={classes.noshow} />
        </div>
      </Grid>
    </Grow>
  );
}
