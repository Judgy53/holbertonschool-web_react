import React from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import Notifications from './Notifications';

export class NotificationsContainer extends React.Component {
  componentDidMount() {
    const { fetchNotifications } = this.props;
    fetchNotifications();
  }

  render() {
    return (
      <Notifications {...this.props} />
    );
  }
}

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
  setNotificationFilter
}

function mapStateToProps(state) {
  return {
    listNotifications: getUnreadNotificationsByType(state.notifications)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
