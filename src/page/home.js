import React from "react";
import Cssbaseline from "@material-ui/core/CssBaseline";
import Header from "../component/header";
import Bio from "../component/bio";
import BigFoot from "../component/BigFoot";

export default function home() {
  return (
    <React.Fragment>
      <Cssbaseline />
      <Header />
      <Bio />
      <BigFoot />
    </React.Fragment>
  );
}
