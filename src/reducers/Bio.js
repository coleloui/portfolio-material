const Bio = (state = true, action) => {
  switch (action.type) {
    case "BIO":
      return !state;
    case "RESET":
      return (state = true);
    default:
      return state;
  }
};

export default Bio;
