import React from 'react';
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
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent" dangerouslySetInnerHTML={latestNotificationHtml}></li>
        </ul>
      </div>
    );
  }
}

export default Notifications;
