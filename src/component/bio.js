import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Container, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  top: {
    marginTop: "10px",
    flexGrow: 1,
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
    <Container className={classes.top} maxWidth="lg">
      <Grid container space={3}>
        <Grid item sm={1}>
          <Avatar
            className={classes.img}
            alt="Louis Coleman"
            src="./photo/louis.jpg"
          />
        </Grid>
        <Grid item sm={6} className={classes.bio}>
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
