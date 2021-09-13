import { combineReducers } from "redux";
import Bio from "./Bio";
import BioRight from "./BioRight";
import RocketList from "./RocketList";
import RocketListRight from "./RocketListRight";
import MapleValley from "./MapleValley";
import MapleValleyRight from "./MapleValleyRight";
import PokeGoDex from "./PokeGoDex";
import PokeGoDexRight from "./PokeGoDexRight";
import RightSide from "./RightSide";
import Epic from './Epic'
import EpicRight from './EpicRight'

const allReducer = combineReducers({
  Bio,
  BioRight,
  RocketList,
  RocketListRight,
  MapleValley,
  MapleValleyRight,
  PokeGoDex,
  PokeGoDexRight,
  RightSide,
  Epic,
  EpicRight
});

export default allReducer;
