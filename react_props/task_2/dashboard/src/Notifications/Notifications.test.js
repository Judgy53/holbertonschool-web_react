import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three NotificationItems', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('NotificationItem')).toHaveLength(3);
  });

  it('renders the text `Here is the list of notifications`', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find({children: 'Here is the list of notifications'})).toHaveLength(1);
  });

  it('renders the right html for the first item', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('NotificationItem').first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});
