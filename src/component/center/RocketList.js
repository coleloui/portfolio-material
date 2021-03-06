import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import RocketListPic from "../Photo/RocketList.png";

const useStyles = makeStyles((theme) => ({
  lines: {
    lineHeight: 3,
    textAlign: "left",
    marginLeft: "10px",
    fontSize: "15px",
  },
  divider: {
    borderLeft: "5px solid #482880",
  },
  tech: {
    lineHeight: 2,
    textAlign: "left",
    paddingLeft: "10px",
    fontSize: "15px",
  },
  large: {
    marginTop: "20px",
    marginRight: "20px",
    marginLeft: theme.spacing(10),
    width: theme.spacing(75),
    height: "auto",
    boxShadow: theme.shadows[15],
    marginBottom: "10px",
    borderRadius: "15px",
  },
  link: {
    color: "#482880",
    textDecoration: "none",
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))",
    "&:hover": {
      color: "gray",
      textDecoration: "underline",
    },
  },
  center: {
    color: "#482880",
    marginLeft: "25px",
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.25))",
    fontSize: 50,
    "&:hover": {
      color: "gray",
    },
  },
  jump: {
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.35))",
    fontWeight: "bold",
    marginLeft: "10px",
  },
}));

export default function RocketList() {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://rocketlist.herokuapp.com/"
        >
          <img
            src={RocketListPic}
            alt="RocketList home"
            className={classes.large}
          />
        </a>
      </Grid>
      <Grid item sm={5}>
        <Grid container direction="column" className={classes.divider}>
          <Grid item>
            <Typography className={classes.jump} variant="h3">
              RocketList{" "}
              <a
                href="https://github.com/meganjacobs97/RocketList"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className={classes.center} />
              </a>
              <a
                href="http://rocketlist.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon className={classes.center} />
              </a>
            </Typography>
            <span></span>
            <p className={classes.lines}>
              is a React website built with inspiration from Craigslist, Yahoo
              Answers, and Reddit. It allows for different topics and for people
              to make a post where others can make comments. We also added a
              feature that allows users to join chat rooms within a specific
              post where they can discuss the topic at hand in more depth.
            </p>
          </Grid>
          <Grid item className={classes.tech}>
            <Typography variant="h4" className={classes.jump}>
              Built Using:
            </Typography>
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.apollographql.com/"
            >
              apollo/graphql
            </a>
            ,{" "}
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://react-redux.js.org/"
            >
              React Redux
            </a>
            ,{" "}
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/popper.js"
            >
              popper.js
            </a>
            ,{" "}
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/query-string"
            >
              query-string
            </a>
            ,{" "}
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/react"
            >
              react
            </a>
            ,{" "}
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/react-emoji"
            >
              react-emoji
            </a>
            ,{" "}
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/react-scroll-to-bottom"
            >
              react-scroll-to-bottom
            </a>
            ,{" "}
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/react-spinners"
            >
              react-spinners
            </a>
            ,{" "}
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/socket.io-client"
            >
              socket.io-client
            </a>
            , and{" "}
            <a
              className={classes.link}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/package/tailwindcss"
            >
              tailwindcss.
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
