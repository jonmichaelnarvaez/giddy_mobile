import * as api from '../api'

export const registerUser = (values) =>(
    {
    type:'REGISTAR_USER',
    payload:api.registerUser(values)
    }
)
export const registerUserDetails = (values) =>(
    {
    type:'REGISTAR_USER',
    payload:api.registerUserMoreData(values)
    }
)
export const userPhoneCheck =(values) =>(
    {
        type:'REGISTAR_USER',
        payload:api.userPhoneCheck(values)
    }
)
export const userRegStepBack = () =>(
    {
    type:'REGISTAR_STEP_BACK',
    }
)
export const userRegMilStepYes = () =>(
    {
    type:'REGISTAR_MILITARY_YES',
    }
)
export const userRegMilStepNo = () =>(
    {
    type:'REGISTAR_MILITARY_NO',
    }
)
export const userRegTosSign = () =>(
    {
    type:'REGISTAR_TOS_SIGNITURE',
    payload:api.userRegTosSign()
    }
)
export const resendUserPhoneCheck =(values) =>(
    {
        type:'REGISTAR_USER',
        payload:api.resendUserPhoneCheck(values)
    }
)
export const userPhoneCodeCheck =(values) =>(
    {
        type:'AUTH_USER',
        payload:api.userPhoneCodeCheck(values)
    }
)
export const userRegPhoneCodeCheck =(values) =>(
    {
        type:'REGISTAR_USER',
        payload:api.userRegPhoneCodeCheck(values)
    }
)
export const userLogin = (values) =>(
    {
    type:'AUTH_USER',
    payload:api.userLogin(values)
    }
)
export const getUserData = () =>(
    {
    type:'AUTH_USER',
    payload:api.getUserData()
    }
)
export const userProfileImage = (image,step) =>(
    {
    type:'AUTH_USER',
    payload:api.userProfileImage(image,step)
    }
)
export const autoLogin = () =>(
    {
    type:'AUTH_USER',
    payload:api.autoLogin()
    }
)
export const userLogout = () =>(
    {
    type:'AUTH_USER',
    payload:api.userLogout()
    }
)
export const updateUserData = (values) =>(
    {
    type:'AUTH_USER',
    payload:api.updateUserData(values)
    }
)
export const militaryIdCheck = (values) =>(
    {
    type:'REGISTAR_USER',
    payload:api.militaryIdCheck(values)
    }
)
export const updateUserPassword = (values) =>(
    {
    type:'AUTH_USER',
    payload:api.updateUserPassword(values)
    }
)
export const updateUserDataLoading = () =>(
    {
    type:'UPDATE_USER',
    }
)
export const getUserOrderHistory = () =>(
    {
    type:'GET_ORDERS',
    payload:api.getUserOrderHistory()
    }
)
export const getUserEventHistory = () =>(
    {
    type:'GET_ORDERS',
    payload:api.getUserEventHistory()
    }
)
export const getUserEvents = () =>(
    {
    type:'GET_EVENTS',
    payload:api.getUserEvents()
    }
)
export const getUserCalendar = () =>(
    {
    type:'GET_EVENTS',
    payload:api.getUserCalendar()
    }
)
export const getUserBookmarked = () =>(
    {
    type:'GET_EVENTS',
    payload:api.getUserBookmarked()
    }
)
export const addEventBookmark = (purchasedSessions) =>(
    {
        type:'GET_EVENTS',
    payload:api.addEventBookmark(purchasedSessions)
    }
)
export const removeEventBookmark = (purchasedSessions) =>(
    {
        type:'GET_EVENTS',
    payload:api.removeEventBookmark(purchasedSessions)
    }
)
export const getAllCategories = (values) =>(
    {
        type:'LOAD_CATEGORIES',
    payload:api.getAllCategories(values)
    }
)
export const submitSuggestedGroup = (values) =>(
    {
        type:'AUTH_USER',
    payload:api.submitSuggestedGroup(values)
    }
)
export const getUserRecommended = () =>(
    {
    type:'GET_EVENTS',
    payload:api.getUserRecommended()
    }
)
export const getAllEvents = () =>(
    {
    type:'GET_ALL_EVENTS',
    payload:api.getAllEvents()
    }
)
export const filterEvents = (events) =>(
    {
    type:'FILTER_EVENTS',
    payload: {filteredEvents:events},
    }
)
export const getUsersThreads = () =>(
    {
    type:'GET_MESSAGES',
    payload:api.getUsersThreads()
    }
)
export const userReadThreads = (id) =>(
    {
    type:'GET_MESSAGES',
    payload:api.userReadThreads(id)
    }
)
export const purchaseSession = (purchasedSessions) =>(
    {
    type:'PURCHASE_SESSION',
    payload:api.purchaseSession(purchasedSessions)
    }
)
export const reloadEvents = (refresh) =>(
    {
    type:'LOAD_EVENTS',
    payload: {loadedEvents:refresh},
    }
)
export const reloadUserEvents = (refresh) =>(
    {
    type:'RELOAD_USER_EVENTS',
    payload: {loadedEvents:refresh},
    }
)
export const recommendedQuizAnswers = (values) =>(
    {
    type:'GET_EVENTS',
    payload:api.recommendedQuizAnswers(values)
    }
)
export const getAllModEvents = () =>(
    {
    type:'GET_EVENTS',
    payload:api.getAllModEvents()
    }
)
export const getModEvents = () =>(
    {
    type:'GET_ALL_EVENTS',
    payload:api.getModEvents()
    }
)