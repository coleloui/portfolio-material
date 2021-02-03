import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
// import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(45deg, #482880 30%, #00e676 90%)",
    borderRadius: "15px",
  },
  color: {
    color: "white",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.header}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="h3" className={classes.color}>
          Louis Coleman
        </Typography>
        <Typography variant="h5" color="initial">
          Full Stack Web Developer
        </Typography>
      </Grid>
    </Container>
  );
}
