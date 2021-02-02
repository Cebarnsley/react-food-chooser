import { shallow } from 'enzyme';
import React from 'react';
import Logo from './logo';

it('expect to render logo component', () => {
    expect(shallow(<Logo />)).toMatchSnapshot();
})