import {SET_PO_THEME} from "../actions/actions";

const initialState = {
    theme: "PO"
}

const themeReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SET_PO_THEME:
            return {
                ...state,
                theme: actions.theme
            };
        default:
            return state;
    }
}

    export default themeReducer;