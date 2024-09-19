import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
}

export function boundLogin(dispatch) {
  return bindActionCreators(login, dispatch);
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function boundLogout(dispatch) {
  return bindActionCreators(logout, dispatch);
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function boundDisplayNotificationDrawer(dispatch) {
  return bindActionCreators(displayNotificationDrawer, dispatch);
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function boundHideNotificationDrawer(dispatch) {
  return bindActionCreators(hideNotificationDrawer, dispatch);
}
