const initialState = {
    data: null
}

export const menuDataReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_MENU_DATA":
            return {...state, ...payload};
        default:
            return {...state};
    }
}