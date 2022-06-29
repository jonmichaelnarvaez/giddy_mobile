const INITIAL_USER_STATE ={
    profileImage:"",
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    shareData:"",
    bio:"",
    credentials:"",
    dob:"",
    gender:"",
    state:"",
    phone:"",
    token:[],
    isAuth: false,
    isLoading: false,
    error:null,
    loginStep:0
}

export default function(state=INITIAL_USER_STATE,action){
    
    switch(action.type){
        case 'AUTH_USER':
            return{...state, ...action.payload}
        case 'UPDATE_USER':
            return{...state, 
                isLoading: true}
        case 'REGISTER_TOS_SIGNATURE':
            return{...state, 
                isAuth: true}
        default:
            return state
    }
}