import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer({ user }) {
  return (
    <div>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.object
}

Footer.defaultProps = {
  user: {}
}

function mapStateToProps(state) {
  return {
    user: state.get('user')
  }
}

export default connect(mapStateToProps)(Footer);
