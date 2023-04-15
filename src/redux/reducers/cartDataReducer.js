const initialState = {
    data: [] // empty array denotes the empty cart instead of using null
}

export const cartDataReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_CART_DATA":
            return {...state, ...payload};
        default:
            return {...state};
    }
}