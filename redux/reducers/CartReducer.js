export function CartReducer(State={CartList:[]},action) {
    switch (action.type) {
        case "Cart_LIST_REQUEST":
            return{loading: true};
     
        case "Cart_LIST_SUCCESS":
            return{loading: false,CartList:action.payload};
         
        case "Cart_LIST_FAIL":
            return{loading: false,error:action.payload};
     
        default :
        return State;
         
    }
}