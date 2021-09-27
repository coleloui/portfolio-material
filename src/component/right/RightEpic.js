import React from "react";
import { makeStyles, Grid, Typography, Grow } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import EpicPT from "../Photo/epic-pt.jpg";
import { MAPLEVALLEY, BIO, ROCKETLIST, EPIC } from "../../actions";

const useStyles = makeStyles((theme) => ({
  size: {
    [theme.breakpoints.up("sm")]: {
      height: theme.spacing(25),
      width: theme.spacing(55),
    },
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))",
    borderRadius: "15px",
    backgroundImage: `url(${EpicPT})`,
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

export default function RightEpic() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const BioRight = useSelector((state) => state.BioRight);
  const RocketListRight = useSelector((state) => state.RocketListRight);
  const MapleValleyRight = useSelector((state) => state.MapleValleyRight);
  const EpicRight = useSelector((state) => state.EpicRight);
  // const PokeGoDexRight = useSelector((state) => state.PokeGoDexRight);

  const moveEpic = () => {
    if (MapleValleyRight === false) {
      dispatch(MAPLEVALLEY());
      dispatch(EPIC());
    } else if (RocketListRight === false) {
      dispatch(ROCKETLIST());
      dispatch(EPIC());
    } else if (BioRight === false) {
      dispatch(BIO());
      dispatch(EPIC());
    } else dispatch(EPIC());
  };

  return (
    <Grow in={EpicRight}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.walls}
      >
        {" "}
        <Typography variant="h4" className={classes.looks}>
          EPIC-PT
        </Typography>
        <div
          title="EPIC"
          className={classes.size}
          onClick={() => {
            moveEpic();
          }}
        >
          <FullscreenIcon className={classes.noshow} />
        </div>
      </Grid>
    </Grow>
  );
}
