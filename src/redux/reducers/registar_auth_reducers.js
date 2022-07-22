const INITIAL_REGISTRATION_STATE ={
    step:0,
    phone:"",
    error:null
}

// reset to fit the changes coming from Content.

export default function (state=INITIAL_REGISTRATION_STATE,action){
    
    switch(action.type){
        case 'REGISTER_USER':
            return{...state, ...action.payload}
        case 'REGISTER_STEP_BACK':
            return{...state, 
            step:  state.step - 1}
        case 'REGISTER_MILITARY_YES':
            return{...state, 
            step:  state.step + 1}  
        default:
            return state
    };
};