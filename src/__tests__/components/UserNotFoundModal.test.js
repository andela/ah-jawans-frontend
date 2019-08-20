import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import UserNotFoundModal from '../../components/UserNotFoundModal';

describe('<UserNotFoundModal />', () => {
  test('renders without crashing', () => {
    const component = shallow(<UserNotFoundModal />);
    expect(component).toHaveLength(1);
  });
});
