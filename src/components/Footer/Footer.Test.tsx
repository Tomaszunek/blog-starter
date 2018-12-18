import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import Footer from './Footer'

describe('Error Page', () => {
  describe('Component should render right', () => {
    let app:any;             
    beforeEach(() => {
      app = mount(<Footer/>);
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<Footer/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })
    it.skip('should render proper count item', () => {
      console.log(app.debug())
    })
  });
}); 