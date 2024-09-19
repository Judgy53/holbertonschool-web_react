import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';

describe('login()', () => {
  it('returns the correct action when passed email and password', () => {
    const email = 'a@a.com';
    const password = 'azerty1234';
    const expectedResult = { type: LOGIN, user: { email, password } };

    expect(login(email, password)).toEqual(expectedResult);
  });
});

describe('logout()', () => {
  it('returns the correct action', () => {
    const expectedResult = { type: LOGOUT };

    expect(logout()).toEqual(expectedResult);
  });
});

describe('displayNotificationDrawer()', () => {
  it('returns the correct action', () => {
    const expectedResult = { type: DISPLAY_NOTIFICATION_DRAWER };

    expect(displayNotificationDrawer()).toEqual(expectedResult);
  });
});

describe('hideNotificationDrawer()', () => {
  it('returns the correct action', () => {
    const expectedResult = { type: HIDE_NOTIFICATION_DRAWER };

    expect(hideNotificationDrawer()).toEqual(expectedResult);
  });
});
