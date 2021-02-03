import React from "react";
import Cssbaseline from "@material-ui/core/CssBaseline";
import Header from "../component/header";
import Bio from "../component/bio";

export default function home() {
  return (
    <React.Fragment>
      <Cssbaseline />
      <Header />
      <Bio />
    </React.Fragment>
  );
}
