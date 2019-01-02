import * as React from 'react';
// import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import LoginForm from './LoginForm'

describe('LoginForm Comp', () => {
  describe('Component should render right', () => {    
    it.skip('render correctly snapshot component', () => {
      const tree = renderer
      .create(<LoginForm/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
  });
});