const RocketList = (state = false, action) => {
  switch (action.type) {
    case "ROCKETLIST":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default RocketList;
