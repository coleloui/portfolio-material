const RocketListRight = (state = true, action) => {
  switch (action.type) {
    case "ROCKETLIST":
      return !state;
    case "RESET":
      return (state = true);
    default:
      return state;
  }
};

export default RocketListRight;
