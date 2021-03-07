const PokeGoDexRight = (state = true, action) => {
  switch (action.type) {
    case "POKEGODEX":
      return !state;
    case "RESET":
      return (state = true);
    default:
      return state;
  }
};

export default PokeGoDexRight;
