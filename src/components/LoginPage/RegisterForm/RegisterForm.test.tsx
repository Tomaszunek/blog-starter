import * as React from 'react';
// import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import RegisterForm from './RegisterForm'

describe('RegisterForm Comp', () => {
  describe('Component should render right', () => {    
    it.skip('render correctly snapshot component', () => {
      const tree = renderer
      .create(<RegisterForm/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
  });
});