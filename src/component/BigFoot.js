import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Resume from "./File/LouisColemanResume.pdf";
import Louis from "./Photo/Louis.jpg";
import Contact from "./contact";

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
    fontSize: 75,
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
    <Grid container alignItems="center" space={2} direction="row">
      <Grid item sm={5}>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="flex-start"
        >
          <Grid item>
            <Grid container justify="flex-start" alignItems="center">
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/coleloui"
                    >
                      {" "}
                      <GitHubIcon className={classes.center} />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/louis-coleman/"
                    >
                      {" "}
                      <LinkedInIcon className={classes.center} />
                    </a>
                  </Grid>
                  <Grid item>
                    <a download href={Resume}>
                      {" "}
                      <DescriptionIcon className={classes.center} />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Avatar
                  alt="Louis Coleman"
                  src={Louis}
                  className={classes.large}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item size={5}>
        <Grid container direction="row">
          <Grid item>
            <Contact />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
