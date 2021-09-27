const Epic = (state = false, action) => {
    switch (action.type) {
      case "EPIC":
        return !state;
      case "RESET":
        return (state = true);
      default:
        return state;
    }
  };

  export default Epic;
