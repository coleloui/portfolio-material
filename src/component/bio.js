import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Container, Hidden } from "@material-ui/core";
import Louis from "./Photo/Louis.jpg";
// import linked from "./Photo/linked.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles((theme) => ({
  top: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "50px",
    },
    marginTop: "5px",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  lines: {
    lineHeight: 2.5,
    textAlign: "left",
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    float: "left",
    marginRight: "20px",
    boxShadow: theme.shadows[3],
  },
  up: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "25px",
    },
  },
  down: {
    [theme.breakpoints.up("sm")]: {
      marginBottom: "25px",
    },
  },
  img: {
    display: "flex",
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  bio: {
    borderLeft: "5px solid #482880",
    paddingLeft: "10px",
  },
}));

export default function Bio() {
  const classes = useStyles();
  return (
    <Container className={classes.top} maxwidth="lg">
      <Grid container space={3} className={classes.top} maxwidth="lg">
        <Grid item sm={1} />
        <Grid item sm={6}>
          <Avatar alt="Louis Coleman" src={Louis} className={classes.large} />
          <p className={classes.lines}>
            I am a passionate Full Stack Web Developer from from Tampa, Florida
            currently living in Seattle, Washington. I have always had a huge
            fascination in computers with an emphasis on gaming which has
            evolved over time into a love of coding. Initially, it was something
            I lightly dabbled in during my spare time which then turned more
            serious as I recently graduated (May 2020) from the University of
            Washington Full Stack Coding Bootcamp where I became proficient in
            HTML5, CSS, JavaScript, jQuery, Java, Bootstrap, Tailwind CSS,
            Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, CLI,
            and Git.
          </p>
        </Grid>
        <Grid item sm={3} />
        <Hidden smDown>
          <Grid item sm={2} container direction="column">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/louis-coleman/"
            >
              {" "}
              <LinkedInIcon
                fontSize="large"
                color="primary"
                className={classes.down}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/coleloui"
            >
              {" "}
              <GitHubIcon
                fontSize="large"
                color="primary"
                className={classes.up}
              />
            </a>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item sm={3} container direction="row" justify="space-around">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/louis-coleman/"
            >
              {" "}
              <LinkedInIcon
                fontSize="large"
                color="primary"
                className={classes.down}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/coleloui"
            >
              {" "}
              <GitHubIcon
                fontSize="large"
                color="primary"
                className={classes.up}
              />
            </a>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}
