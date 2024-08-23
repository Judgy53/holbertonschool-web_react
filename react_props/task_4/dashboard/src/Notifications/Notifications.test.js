import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  describe('displayDrawer=false', () => {
    it('renders menuItem', () => {
      const notifications = shallow(<Notifications displayDrawer={false} />);
      expect(notifications.find('.menuItem')).toHaveLength(1);
    });

    it('does not render div.Notifications', () => {
      const notifications = shallow(<Notifications displayDrawer={false} />);
      expect(notifications.find('div.Notifications')).toHaveLength(0);
    });
  });

  describe('displayDrawer=true', () => {
    it('renders three NotificationItems', () => {
      const notifications = shallow(<Notifications displayDrawer={true} />);
      expect(notifications.find('NotificationItem')).toHaveLength(3);
    });

    it('renders the text `Here is the list of notifications`', () => {
      const notifications = shallow(<Notifications displayDrawer={true} />);
      expect(notifications.find({ children: 'Here is the list of notifications' })).toHaveLength(1);
    });

    it('renders the right html for the first item', () => {
      const notifications = shallow(<Notifications displayDrawer={true} />);
      expect(notifications.find('NotificationItem').first().html()).toEqual('<li data-notification-type="default">New course available</li>');
    });

    it('renders menuItem', () => {
      const notifications = shallow(<Notifications displayDrawer={true} />);
      expect(notifications.find('.menuItem')).toHaveLength(1);
    });

    it('does render div.Notifications', () => {
      const notifications = shallow(<Notifications displayDrawer={true} />);
      expect(notifications.find('div.Notifications')).toHaveLength(1);
    });
  });
});
