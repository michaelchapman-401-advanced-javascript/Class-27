import React from 'react';
import Counter from '../../components/counter/counter';
import renderer from 'react-test-renderer';

describe('Counter module', () => {
  it('is alive at application start', () => {
    const app = shallow(<Counter />);

    expect(app.find('.count').text()).toBe('0');
  });

  it('can count up', () => {
    const wrapper = mount(<Counter />)

    wrapper.find('.up').simulate('click');

    expect(wrapper.state('count')).toBe(1)

    wrapper.find('.up').simulate('click');

    expect(wrapper.state('count')).toBe(2)
  });

  it('can count down', () => {
    const wrapper = mount(<Counter />)

    wrapper.find('.down').simulate('click');

    expect(wrapper.state('count')).toBe(-1)
  });
});

describe('<Counter/> snapshot test', () => {
  it('Renders correctly', () => {
    const component = renderer.create('<Counter/>');
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});