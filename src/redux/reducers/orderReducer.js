import orderTypes from "../types/orderTypes"

const INITIAL_STATE = {
    dataCollections: [],
}

const orderReducer = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case orderTypes.SET_DATA_FROM_FIRESTORE:
            return{
                ...state,
                dataCollections : action.dataCollections,
            }
        default:
            return state;
    }
}

export default orderReducer