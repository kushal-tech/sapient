const initialState = {
    snackbar: {
        status: false,
        message: "",
        variant: "success"
    }
};

function rootReducer(state = initialState, action) {
    if (action.type == "SHOW_SNACKBAR") {
        return {
            ...state,
            snackbar: action.payload
        };
    }
    return state;
}

export default rootReducer;