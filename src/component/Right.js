import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import RightValley from "./right/RightValley";
import RightList from "./right/RightList";
import RightGoDex from "./right/RightGoDex";
import RightBio from "./right/RightBio";

export default function Right() {
  const BioRight = useSelector((state) => state.BioRight);
  const RocketListRight = useSelector((state) => state.RocketListRight);
  const MapleValleyRight = useSelector((state) => state.MapleValleyRight);
  const PokeGoDexRight = useSelector((state) => state.PokeGoDexRight);

  return (
    <Grid container diretion="column" justify="center">
      {BioRight ? (
        <Grid item>
          <RightBio />
        </Grid>
      ) : (
        ""
      )}
      {RocketListRight ? (
        <Grid item>
          <RightList />
        </Grid>
      ) : (
        ""
      )}
      {MapleValleyRight ? (
        <Grid item>
          <RightValley />
        </Grid>
      ) : (
        ""
      )}
      {PokeGoDexRight ? (
        <Grid item>
          <RightGoDex />
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
}
