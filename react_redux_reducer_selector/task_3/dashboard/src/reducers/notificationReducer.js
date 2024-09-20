import * as ActionTypes from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: ActionTypes.NotificationTypeFilters.DEFAULT
}

export default function notificationReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case ActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map(n => ({
          ...n,
          isRead: false
        }))
      }
    case ActionTypes.MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map(notif => notif.id === action.index ? {
          ...n,
          isRead: true
        } : notif)
      }
    case ActionTypes.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state;
  }
}
