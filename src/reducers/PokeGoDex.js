const PokeGoDex = (state = false, action) => {
  switch (action.type) {
    case "POKEGODEX":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default PokeGoDex;
