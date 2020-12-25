export default (state = [], action) => {
  //The common syntax with reducers is Switch statement
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

// if (action.type === 'FETCH_POSTS') {
//     return action.payload
// }
//     return state
