import Redux from "redux";

const ratingReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_RATE":
      return Object.assign([], state, action.rate);
    default:
      return state;
  }
};
export default ratingReducer;
