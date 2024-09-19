import *  as ActionTypes from '../actions/uiActionTypes';

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

export default function uiReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ActionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      };
    case ActionTypes.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true
      };
    case ActionTypes.LOGIN_FAILURE:
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false
      };
    default:
      return state;
  }
}
