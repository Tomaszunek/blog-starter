import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import ArticleSinglePageComp from './articleSinglePageComp'
import { IArticleModel } from 'src/models';

describe('Error Page', () => {
    describe('Component should render right', () => {
        let app:any;
        const testMatch:any = {
            path: '',
            params: {},
            url: ''
        };
        const article:IArticleModel = {
            id: 1,
            type: "ability",
            articleType: "ability",
            body: "body",
            createdAt: new Date(1545167325 *1000),
            image: "images/placeholder/abc.jpg",
            name: "woda",
            slug: "woda",
            updatedAt: new Date(1545167325 *1000)
        }
        beforeEach(() => {
            app = mount(<ArticleSinglePageComp article={article} match={testMatch}/>);
        })
        it('render correctly snapshot component', () => {
            const tree = renderer
            .create(<ArticleSinglePageComp article={article} match={testMatch}/>)
            .toJSON();
            expect(tree).toMatchSnapshot();
        })
        it('component should contains compoments', () => {
            expect(app.find('.breadcrumbs').length).toEqual(1);
            expect(app.find('.fullScreenCont').length).toEqual(1);
        })
        it('should have proper props', () => {
            expect(app.instance().props.article).toBe(article);
            expect(app.instance().props.match).toBe(testMatch);
        })
        
    });
  });