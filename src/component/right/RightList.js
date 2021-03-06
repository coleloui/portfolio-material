import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import RocketList from "../Photo/RocketList.png";

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

export default function RightList() {
  const classes = useStyles();
  return (
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
      <div title="RocketList" className={classes.size}>
        <FullscreenIcon className={classes.noshow} />
      </div>
    </Grid>
  );
}
