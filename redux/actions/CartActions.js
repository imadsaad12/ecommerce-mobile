export const GetCart = (userId) => async (dispatch) => {
    try {
      dispatch({ type: "Cart_LIST_REQUEST" });
      const { data } = await axios.get("http://192.168.0.133:4000/Cart", {
        params: { userId: userId },
      });
      console.log(data)
      dispatch({ type: "Cart_LIST_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "Cart_LIST_FAIL", payload: error.message });
    }
  };