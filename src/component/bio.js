import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  top: {
    marginTop: "10px",
    flexGrow: 1,
  },
}));

export default function Bio() {
  const classes = useStyles();
  return (
    <Container className={classes.top} maxWidth="lg">
      <Grid container space={3}>
        <Grid item sm={6}>
          <Typography variant="p" color="initial">
            Minim eiusmod elit ut qui aliqua veniam dolore incididunt est ex
            irure. Adipisicing ad ullamco eu Lorem ut ea do incididunt aliquip
            nostrud. Ipsum veniam enim et dolor ut. Incididunt cillum occaecat
            excepteur veniam eu. Deserunt culpa qui id ex eiusmod minim.
            Exercitation commodo incididunt tempor minim sit voluptate laboris
            duis sit.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="p" color="initial">
            Minim eiusmod elit ut qui aliqua veniam dolore incididunt est ex
            irure. Adipisicing ad ullamco eu Lorem ut ea do incididunt aliquip
            nostrud. Ipsum veniam enim et dolor ut. Incididunt cillum occaecat
            excepteur veniam eu. Deserunt culpa qui id ex eiusmod minim.
            Exercitation commodo incididunt tempor minim sit voluptate laboris
            duis sit.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
