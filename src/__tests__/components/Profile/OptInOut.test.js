import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import OptInOut from '../../../components/Profile/Notifications/Opt/optInOut';
import { mockWindow } from '../../../__mocks__/window';
import { TestScheduler } from '@jest/core';

describe('<OptInOut />', () => {
  test('renders without crashing', () => {
    const component = shallow(<OptInOut opts={{inapp: 'string'}}/>);
  });
  test('renders the checked',() => {
    const component =shallow(<OptInOut opts= {{inapp: 'undefined'}}/>);
  });
});
