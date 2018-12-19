import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import LoadingIndicator from './LoadingScreen'

describe('LoadingIndicator', () => {
  describe('when isLoading is false', () => {
    let app:any;
    const showLoader = true;
    beforeEach(() => {
      app = mount(<LoadingIndicator showLoading={showLoader}/>);
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<LoadingIndicator showLoading={showLoader}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })
    it('should render children', () => {      
      expect(app.html()).toEqual('<div class=\"loadingScreen showLoading\"><div class=\"loadImage\"></div></div>');
      app.unmount();
    });
    it('should have components', () => {
      expect(app.find('.loadImage')).toHaveLength(1);
    });
    it('should having loading class', () => {      
      expect(app.find('.loadingScreen').hasClass('showLoading')).toBeTruthy();
    });
    it('shouldnt have loading class', () => {
      app = mount(<LoadingIndicator showLoading={false}/>);     
      expect(app.find('.loadingScreen').hasClass('showLoading')).toBeFalsy();
      expect(app.html()).toEqual('<div class=\"loadingScreen \"><div class=\"loadImage\"></div></div>');
    });  
    it('should have proper props', () => {      
      expect(app.instance().props.showLoading).toEqual(showLoader);
    });  
  });
});