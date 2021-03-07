const RightSide = (state = true, action) => {
  switch (action.type) {
    case "SHOW":
      return !state;
    case "RESET":
      return (state = true);
    default:
      return state;
  }
};

export default RightSide;
