const INITIAL_REGISTRATION_STATE ={
    entries: [],
    loadedEntries: false,
    loadedArticles:false,
    bookmarks:false,
    recommended:false,
    calendarLoaded:false,
    bookmarksArticles:[

    ],
    recommendedArticles:[
        
    ],
    calendar:[
        
    ]
}

export default function (state=INITIAL_REGISTRATION_STATE,action){
    
    switch(action.type){
        case 'GET_ENTRIES':
            return{...state, ...action.payload}
        case 'RELOAD_USER_EVENTS':
            return{...state, ...action.payload}
        case 'BOOKMARK':
            return state
        default:
            return state
    };
};