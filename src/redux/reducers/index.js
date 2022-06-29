import { combineReducers } from "redux";
import auth from "./auth_reducers";
import authRegister from "./registar_auth_reducers";
import user from "./user_reducers";

const rootReducers = combineReducers({
    auth,
    authRegister,
    user
})

export default rootReducers;