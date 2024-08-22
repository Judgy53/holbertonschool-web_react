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
});
