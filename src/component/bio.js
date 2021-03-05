import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    <p className={classes.lines}>
      I am a passionate Full Stack Web Developer from from Tampa, Florida
      currently living in Seattle, Washington. I have always had a huge
      fascination in computers with an emphasis on gaming which has evolved over
      time into a love of coding. Initially, it was something I lightly dabbled
      in during my spare time which then turned more serious as I recently
      graduated (May 2020) from the University of Washington Full Stack Coding
      Bootcamp where I became proficient in HTML5, CSS, JavaScript, jQuery,
      Java, Bootstrap, Tailwind CSS, Express.js, React.js, Node.js, Database
      Theory, MongoDB, MySQL, CLI, and Git.
    </p>
  );
}
