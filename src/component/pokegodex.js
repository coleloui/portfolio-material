import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import PokeGoDexPic from "./Photo/pogodex.png";
import GitHubIcon from "@material-ui/icons/GitHub";

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
  middle: {
    fontWeight: "bold",
  },
  large: {
    marginTop: "20px",
    marginRight: "10px",
    width: theme.spacing(75),
    height: "auto",
    boxShadow: theme.shadows[10],
    marginBottom: "10px",
    borderRadius: "15px",
  },
  link: {
    color: "#482880",
    textDecoration: "none",
    "&:hover": {
      color: "gray",
      textDecoration: "underline",
    },
  },
  center: {
    color: "#482880",
    marginRight: "10px",
    fontSize: 50,
    "&:hover": {
      color: "gray",
    },
  },
}));

export default function MapleValley() {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item sm={1} />
      <Grid item>
        <a
          href="https://dionleung14.github.io/Pokemon-GO-Virtual-Dex/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={PokeGoDexPic}
            alt="maple valley camp"
            className={classes.large}
          />
        </a>
      </Grid>
      <Grid item sm={4}>
        <Grid container direction="column" className={classes.divider}>
          <Grid item>
            <Typography
              style={{ fontWeight: "bold", marginLeft: "10px" }}
              variant="h3"
            >
              Pok&eacute;GoDex{" "}
              <a
                href="https://github.com/dionleung14/Pokemon-GO-Virtual-Dex"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className={classes.center} />
              </a>
            </Typography>
            <p className={classes.lines}>
              is an application that pulls from two different API's which then
              compares the arrays that they receive. You can filter through a
              list of all Pok&eacute;mon and grab specific information about
              them. The stats that you receive are the name, type, generation,
              and the Pokédex entry. The filtered list allows you to see which
              Pok&eacute;mon are available in the mobile game Pok&eacute;mon GO.
            </p>
          </Grid>
          <Grid item className={classes.tech}>
            <Typography variant="h4" className={classes.middle}>
              Built Using:
            </Typography>
            <a
              rel="noopener noreferrer"
              className={classes.link}
              target="_blank"
              href="https://github.com/pokeapi"
            >
              Pok&eacute;API
            </a>
            ,{" "}
            <a
              rel="noopener noreferrer"
              className={classes.link}
              target="_blank"
              href="https://rapidapi.com/user/brianiswu"
            >
              Pok&eacute;mon Go
            </a>
            , and{" "}
            <a
              rel="noopener noreferrer"
              className={classes.link}
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API#Extensions_to_other_interfaces"
            >
              Web Animations API
            </a>
            , and{" "}
            <a
              rel="noopener noreferrer"
              className={classes.link}
              target="_blank"
              href="https://bulma.io/"
            >
              Bulma.
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
