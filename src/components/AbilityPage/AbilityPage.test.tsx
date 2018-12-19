import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import AbilityPage from './AbilityPage'
import { IArticleModel } from 'src/models';

describe('Error Page', () => {
    describe('Component should render right', () => {
        let app:any;
        const testMatch:any = {
            path: '',
            params: {},
            url: ''
        };
        const abilities:Array<IArticleModel> = [{
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
            app = mount(<AbilityPage abilities={abilities} match={testMatch}/>);
        })
        it('render correctly snapshot component', () => {
            const tree = renderer
            .create(<AbilityPage abilities={abilities} match={testMatch}/>)
            .toJSON();
            expect(tree).toMatchSnapshot();
        })
        it('component should contains compoments', () => {
            expect(app.exists('.breadcrumbs')).toBeTruthy();
            expect(app.exists('.fullScreenCont')).toBeTruthy();
            expect(app.exists('.projectContainer')).toBeTruthy();
        })
        it('should render proper count item', () => {
            expect(app.find('.projectContainer').children()).toHaveLength(abilities.length);
        })
        
    });
  });