import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

describe('<NotificationsContainer />', () => {
  it('fetches notifications on mount', () => {
    const props = {
      fetchNotifications: jest.fn()
    }

    shallow(<NotificationsContainer {...props} />);
    expect(props.fetchNotifications.mock.calls).toHaveLength(1);
  });
});
