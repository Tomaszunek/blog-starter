import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import Navigation from './Navigation'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Burger Menu', () => {
  describe('Component should render right', () => {
    let app:any;             
    beforeEach(() => {
      app = mount( 
      <Router>
        <Navigation />
      </Router>);
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create( 
      <Router>
        <Navigation />
      </Router>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it('should contain nav containar', () => {      
      expect(app.find('nav').length).toEqual(1)        
    })
    it('should contain elements', () => {
      expect(app.find('.burgerMenu').length).toEqual(1);
      expect(app.find('.burgerLinksWraper').length).toEqual(1);      
    })    
  });
}); 