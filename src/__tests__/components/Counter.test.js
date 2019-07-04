import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../components/counter/counter';

describe('Counter module', () => {
  it('is alive at application start', () => {
    // eslint-disable-next-line no-undef
    const app = shallow(<Counter />);

    expect(app.find('.count').text()).toBe('0');
  });

  it('can count up', () => {
    // eslint-disable-next-line no-undef
    const wrapper = mount(<Counter />);

    wrapper.find('.up').simulate('click');
    
    expect(wrapper.state('count')).toBe(1);

    wrapper.find('.up').simulate('click');

    expect(wrapper.state('count')).toBe(2);
  });

  it('can count down', () => {
    // eslint-disable-next-line no-undef
    const wrapper = mount(<Counter />);

    wrapper.find('.down').simulate('click');

    expect(wrapper.state('count')).toBe(-1);
  });
});

describe('<Counter/> snapshot test', () => {
  it('Renders correctly', () => {
    const component = renderer.create('<Counter/>');
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly (Up)', () => {
    // eslint-disable-next-line no-undef
    const wrapper = mount(<Counter />);
    
    wrapper.find('.up').simulate('click');
    const component = renderer.create('<Counter/>');
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly (Down)', () => {
    // eslint-disable-next-line no-undef
    const wrapper = mount(<Counter />);

    wrapper.find('.down').simulate('click');

    const component = renderer.create('<Counter/>');
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
