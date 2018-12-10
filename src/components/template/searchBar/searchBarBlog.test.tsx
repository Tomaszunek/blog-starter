import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import SearchBarBlog, { AricleTypes, SearchContentType} from './searchBarBlog'

describe('Search Bar', () => {
  describe('Search Bar should render', () => {
    let app:any;
    beforeEach(() => {
      app = mount(<SearchBarBlog searchContentType={SearchContentType.article} articleType={AricleTypes.motivation} />);
    })
    it('render correctly date component', () => {
      const tree = renderer
        .create(<SearchBarBlog searchContentType={SearchContentType.article} articleType={AricleTypes.motivation} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it('should receive content type (article or products)', () => {
      expect(app.find('.contentType').instance().value).toEqual("article");
    });    
    it('should have categories in form', () => {
      expect(app.find('.categoryCont').exists()).toBe(true);
    });
    it('should have form', () => {
      expect(app.find('form').exists()).toBe(true);
    });
    it('should have submit button', () => {
      expect(app.find('button').exists()).toBe(true);
    }); 
  });

  describe('Search Bar function should correct works', () => {    
    it('should handle change content type select', () => {
      // 
    // it('should handle change main type', () => {})
    // it('should handle change article type', () => {})     
    // it('should handle change categories select', () => {})    
    // it('should return correct json on submit', () => {});
  });
});