const INITIAL_THEME_STATE = {
    defaultTheme: {
        PRIMARY_COLOR: '#737373',
        SECONDARY_COLOR: '#d6d6d7',
        TERTIARY: '#f5f5f5',
        LOGO: require('../assets/logos/Giddy_blue.png')
    },
    edTheme: {
        PRIMARY_COLOR: '#0B2B50',
        SECONDARY_COLOR: '#BCE6E9',
        TERTIARY: '#f5f5f5',
        LOGO: require('../assets/logos/Giddy_blue.png')
    },
    sexTheme: {
        PRIMARY_COLOR: '#D55015',
        SECONDARY_COLOR: '#FFE08F',
        TERTIARY: '#f5f5f5',
        LOGO: require('../assets/logo/Sexual_health.png')
    },
    fertilityTheme: {
        PRIMARY_COLOR: '#500b45',
        SECONDARY_COLOR: '#e9bcbe',
        TERTIARY: '#F5F5F5',
        LOGO: require('../assets/Period_tracker.png')
    }
};

export default function (state = INITIAL_THEME_STATE, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            if (state.theme == defaultTheme) {
                return {
                    ...state,
                    defaultTheme
                }
            }
        default:
            return state;
    }
};