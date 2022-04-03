export function ItemListReducer(State={items:[]},action) {
    switch (action.type) {
        case "Item_LIST_REQUEST":
            return{loading: true};
     
        case "Item_LIST_SUCCESS":
            return{loading: false,items:action.payload};
         
        case "Item_LIST_FAIL":
            return{loading: false,error:action.payload};
     
        default :
        return State;
         
    }
}