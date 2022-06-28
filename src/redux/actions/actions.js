export const SET_PO_THEME = "SET_PO_THEME";

export const setTheme = (theme) => (dispatch) => {
    dispatch({ type: SET_PO_THEME, payload: theme });
}