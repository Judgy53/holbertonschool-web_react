import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import notificationReducer, { initialState } from './notificationReducer';

describe('notificationReducer()', () => {
  const notifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" },
  ];
  const normalizedUnreadNotifications = notificationsNormalizer(notifications.map(n => ({
    ...n,
    isRead: false
  })));
  const unreadNotifications = {};
  notifications.forEach(n => unreadNotifications[n.id] = { ...n, isRead: false });

  it('returns the default state when no action is passed', () => {
    expect(notificationReducer()).toEqual(initialState);
  });

  it('returns the correct state when action `FETCH_NOTIFICATIONS_SUCCESS` is passed', () => {
    const expected = {
      loading: false,
      filter: NotificationTypeFilters.DEFAULT,
      notifications: normalizedUnreadNotifications.entities,
    };
    expect(notificationReducer(initialState, { type: FETCH_NOTIFICATIONS_SUCCESS, notifications }).toJS()).toEqual(expected);
  });

  it('returns the correct state when action `MARK_AS_READ` is passed', () => {
    const state = initialState.set('notifications', new Map({
      messages: {
        '1': { id: 1, type: "default", value: "New course available", isRead: false },
        '2': { id: 2, type: "urgent", value: "New resume available", isRead: false },
        '3': { id: 3, type: "urgent", value: "New data available", isRead: false },
      }
    }));
    const expected = state.setIn(['notifications', 'messages', '2', 'isRead'], true)
    expect(notificationReducer(state, { type: MARK_AS_READ, index: 2 })).toEqual(expected);
  });

  it('returns the correct state when action `SET_TYPE_FILTER` is passed', () => {
    const expected = initialState.set('filter', NotificationTypeFilters.URGENT);
    expect(notificationReducer(initialState, { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT })).toEqual(expected);
  });
});
