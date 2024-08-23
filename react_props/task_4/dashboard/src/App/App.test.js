import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const app = shallow(<App />);
    expect(app.find('Notifications')).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const app = shallow(<App />);
    expect(app.find('Header')).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const app = shallow(<App />);
    expect(app.find('Login')).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const app = shallow(<App />);
    expect(app.find('Footer')).toHaveLength(1);
  });

  it('does not render CourseList', () => {
    const app = shallow(<App />);
    expect(app.find('CourseList')).toHaveLength(0);
  });

  describe('isLoggedIn=true', () => {
    it('does not render Login', () => {
      const app = shallow(<App isLoggedIn={true}/>);
      expect(app.find('Login')).toHaveLength(0);
    });

    it('does render CourseList', () => {
      const app = shallow(<App isLoggedIn={true}/>);
      expect(app.find('CourseList')).toHaveLength(1);
    });
  });
});
