import jsonPlaceholder from "../apis/jsonPlaceholder";

//          totally fine
// export const fetchPosts = async () => {
//   return async (dispatch) => {
//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({ type: "FETCH_POSTS", payload: response });
//   };
// };

//          same code above cleaned up w es6
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("./posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
