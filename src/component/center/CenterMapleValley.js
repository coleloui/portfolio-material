import React from "react";
import { Typography, Grid, makeStyles, Slide } from "@material-ui/core";
import { useSelector } from "react-redux";
import MapleValleyPic from "../Photo/MapleValleyNew.png";
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
    marginLeft: "10px",
    fontSize: "15px",
  },
  jump: {
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.35))",
    fontWeight: "bold",
    marginLeft: "10px",
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
}));

export default function MapleValley() {
  const classes = useStyles();

  const MapleValley = useSelector((state) => state.MapleValley);

  return (
    <Slide direction="right" in={MapleValley} mountOnEnter unmountOnExit>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <a
            href="https://protected-lowlands-08660.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="maplevalleycamp"
              src={MapleValleyPic}
              className={classes.large}
            />
          </a>
        </Grid>
        <Grid item sm={5}>
          <Grid container direction="column" className={classes.divider}>
            <Grid item>
              <Typography className={classes.jump} variant="h3">
                Maple Valley{" "}
                <a
                  href="https://github.com/coleloui/MapleValley"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon className={classes.center} />
                </a>
                <a
                  href="https://protected-lowlands-08660.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LaunchIcon className={classes.center} />
                </a>
              </Typography>
              <p className={classes.lines}>
                Built to replace an outdated paper system, this online
                registration system will be utilized two fold. It will allow the
                volunteers and parents of campers attending the Girl Scouts
                Maple Valley Day Camp to register for camp and will facilitate
                camp planning by allowing registration details to be easily
                shared to the camp committee.
              </p>
            </Grid>
            <Grid item>
              <Typography variant="h4" className={classes.jump}>
                Built Using:
              </Typography>
              <p className={classes.tech}>
                <a
                  className={classes.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://expressjs.com/"
                >
                  express
                </a>
                ,{" "}
                <a
                  className={classes.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.npmjs.com/package/express-handlebars"
                >
                  express-handlebars
                </a>
                ,{" "}
                <a
                  className={classes.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.npmjs.com/package/express-session"
                >
                  express-session
                </a>
                ,{" "}
                <a
                  className={classes.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://sequelize.org/"
                >
                  sequelize
                </a>
                ,{" "}
                <a
                  rel="noopener noreferrer"
                  className={classes.link}
                  target="_blank"
                  href="https://www.npmjs.com/package/connect-session-sequelize"
                >
                  connect-session-sequelize
                </a>
                ,{" "}
                <a
                  rel="noopener noreferrer"
                  className={classes.link}
                  target="_blank"
                  href="https://www.npmjs.com/package/mysql2"
                >
                  mysql2
                </a>
                ,{" "}
                <a
                  rel="noopener noreferrer"
                  className={classes.link}
                  target="_blank"
                  href="https://www.npmjs.com/package/bcrypt"
                >
                  bcrypt
                </a>
                ,{" "}
                <a
                  rel="noopener noreferrer"
                  className={classes.link}
                  target="_blank"
                  href="https://nodemailer.com/about/"
                >
                  nodemailer
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
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Slide>
  );
}
