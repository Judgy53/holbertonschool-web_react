import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, markAsRead }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead()}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  markAsRead: PropTypes.func
}

NotificationItem.defaultProps = {
  type: 'default',
  value: null,
  markAsRead: () => { }
}

export default NotificationItem;
