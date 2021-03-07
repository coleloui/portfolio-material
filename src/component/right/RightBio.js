import React from "react";
import { makeStyles, Grid, Typography, Grow } from "@material-ui/core";
import { useSelector } from "react-redux";
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
  },
  looks: {
    fontWeight: "bold",
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))",
  },
  walls: {
    marginTop: theme.spacing(7),
    marginRight: theme.spacing(5),
    "&:hover": {
      opacity: 0.5,
    },
    "&:hover svg": {
      visibility: "visible",
    },
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

  const BioRight = useSelector((state) => state.BioRight);

  return (
    <Grow in={BioRight}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.walls}
      >
        <Typography variant="h4" className={classes.looks}>
          About Me
        </Typography>
        <div title="Louis & Niko" className={classes.size}>
          <FullscreenIcon className={classes.noshow} />
        </div>
      </Grid>
    </Grow>
  );
}
