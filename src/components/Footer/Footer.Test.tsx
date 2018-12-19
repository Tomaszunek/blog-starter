import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import Footer from './Footer'

describe('Footer Page', () => {
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
    it('should contain links', () => {
      expect(app.find('a').length).toEqual(12);
    })
    it('should contain links containar', () => {
      expect(app.find('.links').length).toEqual(1);      
    })
    it('should contain links', () => {
      expect(app.find('.facebook').length).toEqual(1);
      expect(app.find('.linkedin').length).toEqual(1);
      expect(app.find('.patronite').length).toEqual(1);
      expect(app.find('.twitter').length).toEqual(1);
      expect(app.find('.twitch').length).toEqual(1);
      expect(app.find('.youtube').length).toEqual(1);
    })
    it('should contain copyright', () => {      
      expect(app.contains(<span>&copy; Created in 2018 by Tomasz Pawłowski. All rights reserved.</span>)).toBeTruthy();
    })
    it('should contain contact form', () => {      
      expect(app.find('form').length).toEqual(1);
      expect(app.find('button[type="submit"]').length).toEqual(1);
    })
  });
}); 