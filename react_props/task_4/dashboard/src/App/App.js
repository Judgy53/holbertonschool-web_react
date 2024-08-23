import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import './App.css';

function App({isLoggedIn}) {
  return (
    <>
      <Notifications></Notifications>
      <div className="App">
        <Header></Header>
        <div className="App-body">
          <p>
            Login to access the full dashboard
          </p>
          {isLoggedIn
            ? <CourseList />
            : <Login />
          }
        </div>
        <div className="App-footer">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
