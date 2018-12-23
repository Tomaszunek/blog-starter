import * as React from 'react';
import { mount, shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import BurgerMenu from './BurgerMenu'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Burger Menu', () => {
  describe('Component should render right', () => {
    let app:any;             
    beforeEach(() => {
      app = mount( 
      <Router>
        <BurgerMenu />
      </Router>);
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create( 
      <Router>
        <BurgerMenu />
      </Router>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it('should contain burgerMenu containar', () => {
      expect(app.find('.burgerMenu').length).toEqual(1);
      expect(app.find('.burgerLinksWraper').length).toEqual(1);        
    })
    it('should contain elements', () => {
      expect(app.find('.bar1').length).toEqual(1);
      expect(app.find('.bar2').length).toEqual(1);
      expect(app.find('.bar3').length).toEqual(1);
    })
    it('should have proper state', () => {
      app = shallow(
        <BurgerMenu />
      )
      expect(app.state().showBurgerMenu).toBe(false);
      const burgerWrapper = app.find('.burgerMenu');
      burgerWrapper.simulate('click');
      expect(app.state().showBurgerMenu).toBe(true);
    })
  });
}); 