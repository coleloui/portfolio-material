import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Container, Hidden } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import Resume from "./File/LouisColemanResume.pdf";
import Louis from "./Photo/Louis.jpg";

const useStyles = makeStyles((theme) => ({
  large: {
    marginTop: "30px",
    marginLeft: "10px",
    width: theme.spacing(25),
    height: theme.spacing(25),
    boxShadow: theme.shadows[3],
    marginBottom: "10px",
  },

  center: {
    color: "#482880",
    marginLeft: "10px",
    marginRight: "10px",
    "&:hover": {
      color: "gray",
    },
  },
  heads: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

export default function BigFoot() {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" alignItems="center" direction="row">
      <Grid item>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <a
              className={classes.center}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/coleloui"
            >
              {" "}
              <GitHubIcon fontSize="large" />
            </a>
          </Grid>
          <Grid item>
            <a
              className={classes.center}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/louis-coleman/"
            >
              {" "}
              <LinkedInIcon fontSize="large" />
            </a>
          </Grid>
          <Grid item>
            <a className={classes.center} download href={Resume}>
              {" "}
              <DescriptionIcon fontSize="large" />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Avatar alt="Louis Coleman" src={Louis} className={classes.large} />
      </Grid>
    </Grid>
  );
}
