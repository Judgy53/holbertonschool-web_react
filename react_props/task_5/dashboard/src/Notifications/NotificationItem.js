import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  })
}

NotificationItem.defaultProps = {
  type: 'default',
  value: null
}

export default NotificationItem;
