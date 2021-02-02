import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';

ReactDOM.createPortal = jest.fn(modal => modal);

it('expect to render modal component', () => {
    expect(shallow(<Modal />)).toMatchSnapshot();
})


