export function CategoryListReducer(State={categories:[]},action) {
    switch (action.type) {
        case "Category_LIST_REQUEST":
            return{loading: true};
     
        case "Category_LIST_SUCCESS":
            return{loading: false,categories:action.payload};
         
        case "Category_LIST_FAIL":
            return{loading: false,error:action.payload};
     
        default :
        return State;
         
    }
}