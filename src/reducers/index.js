import { combineReducers } from "redux";
import Bio from "./Bio";
import BioRight from "./BioRight";
import RocketList from "./RocketList";
import RocketListRight from "./RocketListRight";
import MapleValley from "./MapleValley";
import MapleValleyRight from "./MapleValleyRight";
import PokeGoDex from "./PokeGoDex";
import PokeGoDexRight from "./PokeGoDexRight";

const allReducer = combineReducers({
  Bio,
  BioRight,
  RocketList,
  RocketListRight,
  MapleValley,
  MapleValleyRight,
  PokeGoDex,
  PokeGoDexRight,
});

export default allReducer;
