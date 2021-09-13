const Epic = (state = true, action) => {
    switch (action.type) {
      case "Epic":
        return !state;
      case "RESET":
        return (state = true);
      default:
        return state;
    }
  };

  export default Epic;
