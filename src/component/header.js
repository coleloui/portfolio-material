import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Header() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" color="primary">
        Louis Coleman
      </Typography>
      <Typography variant="h5" color="initial">
        Full Stack Web Developer
      </Typography>
    </Container>
  );
}
