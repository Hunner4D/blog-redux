import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

//  dummy reducer
// export default combineReducers({
//   replaceMe: () => "dummy reducer",
// });

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
