const BioRight = (state = false, action) => {
  switch (action.type) {
    case "BIO":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default BioRight;
