import React from 'react';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

class Notifications extends React.Component {
  render() {
    const closeBtnStyle = {
      position: 'absolute',
      right: 0,
      background: 'none',
      border: 'none',
      fontWeight: 'bold',
      fontSize: '15pt',
      marginTop: '-1rem',
      cursor: 'pointer'
    };

    const latestNotificationHtml = {
      __html: getLatestNotification()
    };

    return (
      <div className="Notifications">
        <button type="button" aria-label="Close" style={closeBtnStyle} onClick={() => console.log('Close button has been clicked')}>
          x
        </button>
        <p>
          Here is the list of notifications
        </p>
        <ul>
          <NotificationItem type='default' value='New course available'></NotificationItem>
          <NotificationItem type='urgent' value='New resume available'></NotificationItem>
          <NotificationItem type='urgent' html={latestNotificationHtml}></NotificationItem>
        </ul>
      </div>
    );
  }
}

export default Notifications;
