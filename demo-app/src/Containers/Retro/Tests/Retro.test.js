import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Retro from '../Retro';
import Notwell from '../../../Components/Notwell/Notwell';
import Well from '../../../Components/Well/Well';
import Improve from '../../../Components/Improve/Improve';
import Continue from '../../../Components/Continue/Continue';

configure({adapter: new Adapter()});

describe('<Retro />' , () => {
  it('renders correctly', () => {
  const tree = renderer
    .create(<Retro />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


describe('renders ', () => {
  const wrapper = mount(<Retro />)
  it('Well component', () => {
    expect(wrapper.find(Well)).toBeTruthy();
  })
  it('Didnt well component', () => {
    expect(wrapper.find(Notwell)).toBeTruthy();
  })
  it('Improve component', () => {
    expect(wrapper.find(Improve)).toBeTruthy();
  })
  it('Continue component', () => {
    expect(wrapper.find(Continue)).toBeTruthy();
  })
})

});
