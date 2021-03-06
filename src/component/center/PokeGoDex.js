import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import PokeGoDexPic from "../Photo/pogodex.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

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

export default function PokeGoDex() {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <a
          href="https://dionleung14.github.io/Pokemon-GO-Virtual-Dex/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={PokeGoDexPic}
            alt="pokegodex home"
            className={classes.large}
          />
        </a>
      </Grid>
      <Grid item sm={5}>
        <Grid container direction="column" className={classes.divider}>
          <Grid item>
            <Typography className={classes.jump} variant="h3">
              Pok&eacute;GoDex{" "}
              <a
                href="https://github.com/dionleung14/Pokemon-GO-Virtual-Dex"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className={classes.center} />
              </a>
              <a
                href="https://dionleung14.github.io/Pokemon-GO-Virtual-Dex/"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon className={classes.center} />
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
            <Typography variant="h4" className={classes.jump}>
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
