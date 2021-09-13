const EpicRight = (state = false, action) => {
    switch (action.type) {
      case "EPIC":
        return !state;
      case "RESET":
        return (state = false);
      // case "PHOTO":
      default:
        return state;
    }
  };

  export default EpicRight;
