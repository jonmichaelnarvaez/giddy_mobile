const INITIAL_THEME_STATE = {
    primary: "#0b2b50",
    secondary: "#bce6e9",
    tertiary: "#f5f5f5",
};

export default function (state = INITIAL_THEME_STATE, action) {
    switch (action.type) {
        case 'DEFAULT_THEME':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};