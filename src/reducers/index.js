import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

//  dummy reducer
// export default combineReducers({
//   replaceMe: () => "dummy reducer",
// });

export default combineReducers({
  posts: postsReducer,
});
