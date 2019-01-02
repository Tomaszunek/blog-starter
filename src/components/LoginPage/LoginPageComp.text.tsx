import * as React from 'react';
// import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import LoginPageComp from './LoginPageComp'

describe('LoginPage Comp', () => {
  describe('Component should render right', () => {    
    it.skip('render correctly snapshot component', () => {
      const tree = renderer
      .create(<LoginPageComp/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
  });
});