import React from "react";
import { Typography, Container, Grid, Hidden } from "@material-ui/core";
// import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(45deg, #6ec2de 30%, #6448dc 90%)",
    borderRadius: "15px",
    marginTop: "15px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "25px",
    },
  },
  color: {
    color: "white",
  },
  heads: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
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
        <Typography variant="h3" color="initial" className={classes.heads}>
          Louis Coleman
        </Typography>
        <Typography variant="h5" color="initial">
          Full Stack Web Developer
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Hidden smDown>
          <Typography variant="h4" color="initial">
            About Me
          </Typography>
          <Typography variant="h4" color="initial">
            Projects
          </Typography>
          <Typography variant="h4">Contact</Typography>
        </Hidden>
      </Grid>
    </Container>
  );
}
