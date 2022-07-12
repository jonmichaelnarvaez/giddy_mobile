const INITIAL_REGISTRATION_STATE ={
    profileImage:"",
    firstName:"",
    lastName:"",
    userName:"",
    dob:"",
    gender:"",
    state:"",
    phone:"",
    tracker: [],
    error:null
}

export default function (state=INITIAL_REGISTRATION_STATE,action){
    
    switch(action.type){
        case 'GET_USER':
            return{...state, ...action.payload}
            
        default:
            return state
    };
}