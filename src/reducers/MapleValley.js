const MapleValley = (state = false, action) => {
  switch (action.type) {
    case "MAPLEVALLEY":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default MapleValley;
