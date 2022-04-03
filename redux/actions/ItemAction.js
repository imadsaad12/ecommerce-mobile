import axios from "axios";
export const ListItem = (parentcategory, grandcategory) => async (dispatch) => {
  dispatch({ type: "Item_LIST_REQUEST" });
  axios
    .get("http://192.168.0.133:4000/subsubcategories", {
      params: {
        parentcategory: parentcategory,
        grandcategory: grandcategory,
      },
    })
    .then((res) => {
      dispatch({ type: "Item_LIST_SUCCESS", payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: "Item_LIST_FAIL", payload: error.message });
    });
};
