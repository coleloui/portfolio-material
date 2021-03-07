import React from "react";
import { makeStyles, Grid, Typography, Grow } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import RocketList from "../Photo/RocketList.png";
import { MAPLEVALLEY, BIO, ROCKETLIST, POKEGODEX } from "../../actions";

const useStyles = makeStyles((theme) => ({
  size: {
    [theme.breakpoints.up("sm")]: {
      height: theme.spacing(25),
      width: theme.spacing(55),
    },
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))",
    borderRadius: "15px",
    backgroundImage: `url(${RocketList})`,
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
    marginBottom: theme.spacing(7),
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

export default function RightList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const BioRight = useSelector((state) => state.BioRight);
  const RocketListRight = useSelector((state) => state.RocketListRight);
  const MapleValleyRight = useSelector((state) => state.MapleValleyRight);
  const PokeGoDexRight = useSelector((state) => state.PokeGoDexRight);

  const moveRocketList = () => {
    if (BioRight === false) {
      dispatch(BIO());
      dispatch(ROCKETLIST());
    } else if (MapleValleyRight === false) {
      dispatch(MAPLEVALLEY());
      dispatch(ROCKETLIST());
    } else if (PokeGoDexRight === false) {
      dispatch(POKEGODEX());
      dispatch(ROCKETLIST());
    } else dispatch(ROCKETLIST());
  };

  return (
    <Grow in={RocketListRight}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.walls}
      >
        {" "}
        <Typography variant="h4" className={classes.looks}>
          RocketList
        </Typography>
        <div
          title="RocketList"
          className={classes.size}
          onClick={() => {
            moveRocketList();
          }}
        >
          <FullscreenIcon className={classes.noshow} />
        </div>
      </Grid>
    </Grow>
  );
}
