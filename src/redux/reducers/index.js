import { combineReducers } from "redux";
import auth from "./auth_reducers";
import authRegister from "./registar_auth_reducers";
import user from "./user_reducers";
import theme from "./theme_reducers";

const rootReducers = combineReducers({
    theme,
    auth,
    authRegister,
    user
})

export default rootReducers;