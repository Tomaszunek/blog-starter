import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import NavLinks from './navLinks'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Burger Menu', () => {
  describe('Component should render right', () => {
    let app:any;             
    beforeEach(() => {
      app = mount( 
      <Router>
        <NavLinks />
      </Router>);
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create( 
      <Router>
        <NavLinks />
      </Router>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it('should contain nav containar', () => {      
      expect(app.find('ul').length).toEqual(1)        
    })
    it('should contain elements', () => {
      if(process.env.SERVICE_TYPE === "games") {
        expect(app.find('.login').length).toEqual(1)
        expect(app.find('a[href="/articles/news"]').length).toEqual(1)
        expect(app.find('a[href="/projects"]').length).toEqual(1)
        expect(app.find('a[href="/abilities"]').length).toEqual(1)
        expect(app.find('a[href="/products"]').length).toEqual(1)
        expect(app.find('a[href="/about"]').length).toEqual(1)
      } else {
        expect(app.find('.login').length).toEqual(1)
        expect(app.find('a[href="/articles/technology"]').length).toEqual(1)
        expect(app.find('a[href="/articles/psychology"]').length).toEqual(1)
        expect(app.find('a[href="/articles/motivation"]').length).toEqual(1)
        expect(app.find('a[href="/articles/spiritual"]').length).toEqual(1)
        expect(app.find('a[href="/products"]').length).toEqual(1)
      } 
    })    
  });
}); 