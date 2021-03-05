import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "20px",
      marginLeft: "10px",
    },
    display: "flex",
    justifyContent: "center",
  },
  big: {
    fontWeight: "bold",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.header}>
      <Typography variant="h1" className={classes.big}>
        Yo I'm Louis, welcome!
      </Typography>
    </Container>
  );
}
