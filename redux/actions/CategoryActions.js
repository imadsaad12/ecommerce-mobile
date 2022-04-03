import axios from 'axios';
export const ListCategory=()=> async (dispatch)=>{
    try {
        dispatch({type: "Category_LIST_REQUEST"});
        const { data } = await axios.get("http://192.168.0.133:4000/home");
        dispatch({type:"Category_LIST_SUCCESS",payload:data});
    } catch (error) {
        dispatch({type:"Category_LIST_FAIL",payload:error.message});
    }
}