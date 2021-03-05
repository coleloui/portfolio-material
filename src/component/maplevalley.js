import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import MapleValleyPic from "./Photo/MapleValley.png";
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
          href="https://protected-lowlands-08660.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={MapleValleyPic}
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
              Maple Valley{" "}
              <a
                href="https://github.com/coleloui/MapleValley"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className={classes.center} />
              </a>
            </Typography>
            <p className={classes.lines}>
              is an online registration system for volunteers and parents of
              campers attending the Girl Scouts Maple Valley Day Camp. This will
              replace paper registration and facilitate camp planning by
              allowing registration details to be easily shared to the camp
              planning committee.
            </p>
          </Grid>
          <Grid item className={classes.tech}>
            <Typography variant="h4" className={classes.middle}>
              Built Using:
            </Typography>
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
