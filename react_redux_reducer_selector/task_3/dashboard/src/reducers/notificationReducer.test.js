import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import notificationReducer, { initialState } from './notificationReducer';

describe('notificationReducer()', () => {
  it('returns the default state when no action is passed', () => {
    expect(notificationReducer()).toEqual(initialState);
  });

  it('returns the action data when action `FETCH_NOTIFICATIONS_SUCCESS` is passed', () => {
    const data = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" }
    ]
    const expected = { ...initialState, notifications: data.map(d => ({ ...d, isRead: false })) };
    expect(notificationReducer(initialState, { type: FETCH_NOTIFICATIONS_SUCCESS, data })).toEqual(expected);
  });

  it('returns the correct data when action `MARK_AS_READ` is passed', () => {
    const state = {
      notifications: [
        { id: 1, name: 'ES6', credit: 60, isRead: false },
        { id: 2, name: 'Webpack', credit: 20, isRead: false },
        { id: 3, name: 'React', credit: 40, isRead: false }
      ],
      filter: NotificationTypeFilters.DEFAULT
    }
    const expected = { ...state, notifications: state.notifications.map(d => ({ ...d, isRead: d.id == 2 })) };
    expect(notificationReducer(state, { type: MARK_AS_READ, index: 2 })).toEqual(expected);
  });

  it('returns the correct data when action `SET_TYPE_FILTER` is passed', () => {
    const state = {
      notifications: [
        { id: 1, name: 'ES6', credit: 60, isRead: false },
        { id: 2, name: 'Webpack', credit: 20, isRead: false },
        { id: 3, name: 'React', credit: 40, isRead: false }
      ],
      filter: NotificationTypeFilters.DEFAULT
    }
    const expected = { ...state, filter: NotificationTypeFilters.URGENT }
    expect(notificationReducer(state, { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT })).toEqual(expected);
  });
});
