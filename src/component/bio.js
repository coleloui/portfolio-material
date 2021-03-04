import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Container, Hidden } from "@material-ui/core";
import Louis from "./Photo/Louis.jpg";
// import linked from "./Photo/linked.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import Resume from "./File/LouisColemanResume.pdf";

const useStyles = makeStyles((theme) => ({
  top: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "50px",
      marginBottom: "50px",
    },
    marginTop: "5px",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  lines: {
    lineHeight: 3,
    textAlign: "left",
    borderLeft: "5px solid #482880",
    paddingLeft: "10px",
    fontSize: "15px",
  },
}));

export default function Bio() {
  const classes = useStyles();
  return (
    <Container className={classes.top} maxwidth="lg">
      <Grid container space={3} className={classes.top} maxwidth="lg">
        <Grid item sm={1} />
        <Grid item sm={6}>
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
      </Grid>
    </Container>
  );
}
