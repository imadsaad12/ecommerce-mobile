export function AccountTotalReducer(State={total:0},action) {
    switch (action.type) {
        case "Total_LIST_REQUEST":
            return{loading: true};
     
        case "Total_LIST_SUCCESS":
            return{loading: false,total:action.payload};
         
        case "Total_LIST_FAIL":
            return{loading: false,error:action.payload};
     
        default :
        return State;
         
    }
}

export function AccountFavReducer(State={FavList:[]},action) {
    switch (action.type) {
        case "Fav_LIST_REQUEST":
            return{loading: true};
     
        case "Fav_LIST_SUCCESS":
            return{loading: false,FavList:action.payload};
         
        case "Fav_LIST_FAIL":
            return{loading: false,error:action.payload};
     
        default :
        return State;
         
    }
}
export function AccountOrdersReducer(State={OrdersList:[]},action) {
    switch (action.type) {
        case "Orders_LIST_REQUEST":
            return{loading: true};
     
        case "Orders_LIST_SUCCESS":
            return{loading: false,OrdersList:action.payload};
         
        case "Orders_LIST_FAIL":
            return{loading: false,error:action.payload};
     
        default :
        return State;
         
    }
}