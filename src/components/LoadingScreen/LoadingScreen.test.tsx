import * as React from 'react';
import { mount } from 'enzyme';
import LoadingIndicator from './LoadingScreen'

describe('LoadingIndicator', () => {
  describe('when isLoading is false', () => {
    it('should render children', () => {
      const wrapper = mount(
        <LoadingIndicator/>       
      );
      expect(wrapper.html()).toEqual('<div class=\"loadingScreen\">LoadingScreen</div>');
      wrapper.unmount();
    });
  });
});