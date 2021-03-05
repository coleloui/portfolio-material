import React from "react";
import Cssbaseline from "@material-ui/core/CssBaseline";
import Header from "../component/header";
import Center from "../component/center";
import BigFoot from "../component/BigFoot";

export default function home() {
  return (
    <React.Fragment>
      <Cssbaseline />
      <Header />
      <Center />
      <BigFoot />
    </React.Fragment>
  );
}
