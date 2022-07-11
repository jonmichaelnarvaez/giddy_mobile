const INITIAL_THEME_STATE = {};

export default function (state = INITIAL_REGISTRATION_STATE, action) {
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