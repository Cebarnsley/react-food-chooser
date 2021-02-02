import React from 'react';
import { shallow } from 'enzyme';

import  App  from './App';





describe ("App", () => {
  let wrapper;
  wrapper = shallow(<App />);



  it("renders App without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });


 it("changes showModal state", () => {
  expect(wrapper.find('#modal').exists()).toEqual(false);
  expect(wrapper.find('.editButton').exists()).toEqual(true);
  wrapper.find(".editButton").simulate('click');
  expect(wrapper.find('#modal').exists()).toEqual(true);
  
  

 });

 it("displays initial list items", () => {
  expect(wrapper.find('#modal').exists()).toEqual(true);
  
  expect(wrapper.find(".itemName")).toHaveLength(6);
  

 });

 it("adds item to list items", () => {
  expect(wrapper.find('#modal').exists()).toEqual(true);
  wrapper.find(".inputTextArea").simulate('change', { target: { value: 'apples' } });
  wrapper.find("#submitButton").simulate('click');
  expect(wrapper.find(".itemName").length).toEqual(7);
  
 });

 it("removes an item from the list", () => {
  const attrs = {name: "Chinese", value: "Chinese"};
  const event = {target: { getAttribute: name => attrs[name], ...attrs }};
  expect(wrapper.find('#modal').exists()).toEqual(true);
  wrapper.find(".deleteButton").at(0).simulate('click', event);
  expect(wrapper.find(".itemName").length).toEqual(6);
  
 });

 
  
});




