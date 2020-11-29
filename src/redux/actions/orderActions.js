import orderTypes from "../types/orderTypes"

export const setDataFromFirestore = data => ({
    type : orderTypes.SET_DATA_FROM_FIRESTORE,
    dataCollections: data
})