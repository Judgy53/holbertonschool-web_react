import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Notifications></Notifications>
      <div className="App">
        <Header></Header>
        <div className="App-body">
          <p>
            Login to access the full dashboard
          </p>
          <Login></Login>
        </div>
        <div className="App-footer">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
