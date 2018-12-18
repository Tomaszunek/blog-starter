import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import ArticleTile from './articleTile'
import { IArticleModel } from 'src/models';

describe('Error Page', () => {
  describe('Component should render right', () => {
    let app:any;    
    const article:IArticleModel = {
      id: 1,
      type: "ability",
      articleType: "ability",
      body: "body",
      createdAt: new Date(),
      image: "images/placeholder/abc.jpg",
      name: "woda",
      slug: "woda",
      updatedAt: new Date(),
      AppContentCategories: [
        {id: 1, name: "category", type: "type"}, 
        {id: 2, name: "category", type: "type"}
      ]
    }
    beforeEach(() => {
      app = mount(<ArticleTile article={article}/>);
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<ArticleTile article={article}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })

    it('expect rendered elements', () => {
      expect(app.find('.articleTile').length).toEqual(1);
      expect(app.exists('a')).toBeTruthy();
      expect(app.exists('img')).toBeTruthy();
      expect(app.exists('span')).toBeTruthy();
    })

    it('should render category container', () => {     
      expect(app.find('div.categoryTagsCont.ability').length).toEqual(1);
      expect(app.find('p.category').length).toEqual(2);
    })

    it('it renders props correctly', () => {
      expect(app.instance().props.article).toBe(article)
    })
  });
});