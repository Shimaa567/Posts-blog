import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

// import { combineReducers } from "redux";

// export default combineReducers({
//   dummy: () => "Dummy text",
// });
