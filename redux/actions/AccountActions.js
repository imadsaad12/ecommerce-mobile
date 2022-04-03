import axios from "axios";
export const GetTotal = (userId) => async (dispatch) => {
  try {
    dispatch({ type: "Total_LIST_REQUEST" });
    const { data } = await axios.get("http://192.168.0.133:4000/account", {
      params: { userId: userId },
    });
    dispatch({ type: "Total_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "Total_LIST_FAIL", payload: error.message });
  }
};
export const GetFav = (userId) => async (dispatch) => {
  try {
    dispatch({ type: "Fav_LIST_REQUEST" });
    const { data } = await axios.get("http://192.168.0.133:4000/Fav", {
      params: { userId: userId },
    });
    dispatch({ type: "Fav_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "Fav_LIST_FAIL", payload: error.message });
  }
};
export const GetOrders = (userId) => async (dispatch) => {
  try {
    dispatch({ type: "Orders_LIST_REQUEST" });
    const { data } = await axios.get("http://192.168.0.133:4000/orders", {
      params: { userId: userId },
    });
    dispatch({ type: "Orders_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "Orders_LIST_FAIL", payload: error.message });
  }
};

