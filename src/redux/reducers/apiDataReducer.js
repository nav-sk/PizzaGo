const initialState = {
    data: null
}

export const apiDataReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_API_DATA":
            return {...state, ...payload};
        default:
            return {...state};
    }
}