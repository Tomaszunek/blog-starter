import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import MainPageComp from './MainPageComp'

describe('Footer Page', () => {
  describe('Component should render right', () => {
    let app:any;             
    beforeEach(() => {
      app = mount(<MainPageComp/>);
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<MainPageComp/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it('should contain main containar', () => {
      expect(app.find('main').length).toEqual(1);      
    })
    it('should contain elements', () => {
      expect(app.find('.fullScreenCont').length).toEqual(2);
      expect(app.find('.sliderPhoto').length).toEqual(1);
      expect(app.find('.articleConteiner').length).toEqual(1);
      expect(app.find('.grid.grid-four').length).toEqual(2);      
    })
  });
}); 