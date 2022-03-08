import * as t from "./actionsTypes";

export const setLoginState = (payload) => (dispatch) => {
  dispatch({
    type: t.SET_LOGIN_STATE,
    payload,
  });
};

export const setUserData = (payload) => (dispatch) => {
  dispatch({
    type: t.SET_USER,
    payload,
  });
};
export const setRefreshdata = (payload) => (dispatch) => {
  dispatch({
    type: t.SET_REFRESH,
    payload,
  });
};
