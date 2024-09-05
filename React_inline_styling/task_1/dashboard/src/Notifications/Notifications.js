import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import './Notifications.css';

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const notificationItems = this.props.listNotifications.map(item =>
      <NotificationItem
        type={item.type}
        value={item.value}
        html={item.html}
        key={item.id}
        markAsRead={this.markAsRead.bind(this, item.id)}
      />
    );

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

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {this.props.displayDrawer &&
          <div className={css(styles.notifications)}>
            <button type="button" aria-label="Close" style={closeBtnStyle} onClick={() => console.log('Close button has been clicked')}>
              x
            </button>
            <ul>
              {notificationItems.length
                ? <><p>Here is the list of notifications</p>{notificationItems}</>
                : <NotificationItem type="default" value="No new notification for now" />
              }
            </ul>
          </div>
        }
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape))
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    right: '1rem',
  },
  notifications: {
    border: '2px dotted #e0354b',
    padding: '1rem .5rem',
    position: 'absolute',
    right: '1rem',
    top: '2rem',
    minWidth: '33vw',
  }
});

export default Notifications;
