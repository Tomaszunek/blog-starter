import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import ArticlePageComp from './ArticlePageComp'
import { IArticleModel } from 'src/models';

describe('Error Page', () => {
  describe('Component should render right', () => {
    let app:any;
    const testMatch:any = {
      path: '',
      params: {},
      url: ''
    };  
    const articles:Array<IArticleModel> = [{
      id: 1,
      type: "ability",
      articleType: "ability",
      body: "body",
      createdAt: new Date(),
      image: "images/placeholder/abc.jpg",
      name: "woda",
      slug: "woda",
      updatedAt: new Date(),
    },{
      id: 2,
      type: "ability",
      articleType: "ability",
      body: "body",
      createdAt: new Date(),
      image: "images/placeholder/abc.jpg",
      name: "woda",
      slug: "woda",
      updatedAt: new Date(),
    }]
    beforeEach(() => {
      app = mount(<ArticlePageComp  articles={articles} match={testMatch}/>);
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<ArticlePageComp articles={articles} match={testMatch}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })
    it('expect two rendered tile', () => {
      expect(app.find('.articleTile').length).toEqual(2);
    })
    it('expect component elements', () => {
      expect(app.find('.articleConteiner').length).toEqual(1);
      expect(app.find('.grid.grid-four').length).toEqual(1);
    })
    it('component should contains compoments', () => {
      expect(app.exists('.breadcrumbs')).toBeTruthy();
      expect(app.exists('.fullScreenCont')).toBeTruthy();
    })
    it('it renders props correctly', () => {
      expect(app.instance().props.articles).toBe(articles)
      expect(app.instance().props.match).toBe(testMatch)
    })
  });
});