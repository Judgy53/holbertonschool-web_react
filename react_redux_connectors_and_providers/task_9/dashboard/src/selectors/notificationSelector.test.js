import { Map } from 'immutable';
import { setNotificationFilter } from '../actions/notificationActionCreators';
import notificationReducer from '../reducers/notificationReducer';
import { filterTypeSelected, getNotifications, getUnreadNotificationsByType } from './notificationSelector';

const initialState = new Map({
  filter: 'default',
  notifications: new Map({
    'messages': {
      '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    }
  }),
});

describe('filterTypeSelected()', () => {
  it('returns the value of the filter in the state', () => {
    const action = setNotificationFilter('URGENT');
    const state = notificationReducer(initialState, action);

    expect(filterTypeSelected(state)).toEqual('URGENT');
  });
});

describe('getNotifications()', () => {
  it('returns the list of notifications in the state', () => {
    const expected = new Map(initialState.get('notifications').get('messages'));
    expect(getNotifications(initialState)).toEqual(expected);
  });
});

describe('getUnreadNotificationsByType()', () => {
  it('returns the list of unread notifications in the state', () => {
    const expected = getNotifications(initialState).filter(n => n.isRead === false);
    expect(getUnreadNotificationsByType(initialState)).toEqual(expected);
  });

  it('returns the list of unread notifications with type URGENT in the state', () => {
    const urgentState = initialState.set('filter', 'urgent');
    const expected = getNotifications(urgentState).filter(n => n.isRead === false && n.type === 'urgent');
    expect(getUnreadNotificationsByType(urgentState)).toEqual(expected);
  });
});
