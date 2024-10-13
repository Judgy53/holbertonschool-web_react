import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return Map(state.get('notifications').get('messages'));
}

export const getUnreadNotificationsByType = createSelector(
  [
    (state) => getNotifications(state),
    (state) => filterTypeSelected(state)
  ],
  (notifications, filter) => {
    const unread = notifications.filter(notification => notification.isRead === false);
    if (filter === NotificationTypeFilters.DEFAULT) {
      return unread;
    }
    return unread.filter(notification => notification.type === filter);
  }
);
