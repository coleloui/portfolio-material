const MapleValleyRight = (state = true, action) => {
  switch (action.type) {
    case "MAPLEVALLEY":
      return !state;
    case "RESET":
      return (state = true);
    default:
      return state;
  }
};

export default MapleValleyRight;
