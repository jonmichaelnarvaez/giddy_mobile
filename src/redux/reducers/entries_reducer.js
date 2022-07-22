const INITIAL_REGISTRATION_STATE ={
    entries:[],
    entriesHaveLoaded:false,
    filteredEntries:[],
    loadedEntries:false,
    categories:[]
}

export default function (state=INITIAL_REGISTRATION_STATE,action){
    
    switch(action.type){
        case 'GET_ALL_ENTRIES':
            return{...state, ...action.payload}
        case 'FILTER_ENTRIES':
            return{...state, ...action.payload}
        case 'LOAD_ENTRIES':
            return{...state, ...action.payload}
        case 'LOAD_CATEGORIES':
            return{...state, ...action.payload}    
        default:
            return state
    };
};