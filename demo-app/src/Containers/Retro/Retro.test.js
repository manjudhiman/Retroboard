import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Retro from './Retro';
import Well from './Well'

configure({adapter: new Adapter()});

describe('<Retro />' , () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Retro />)
    expect(wrapper.find(Well));
  // const tree = renderer
  //   .create(<Retro />)
  //   .toJSON();
  // expect(tree).toMatchSnapshot();
});
});
