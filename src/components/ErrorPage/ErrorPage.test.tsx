import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import ErrorPage from './ErrorPage'


describe('Error Page', () => {
    describe('Component should render right', () => {
        let app:any;
        beforeEach(() => {
            app = mount(<ErrorPage/>);
        })
        it('render correctly snapshot component', () => {
            const tree = renderer
            .create(<ErrorPage/>)
            .toJSON();
            expect(tree).toMatchSnapshot();
        })  
        it('Component should render right', () => {      
            expect(app.find('h1')).toHaveLength(1);
            expect(app.find('h1').text()).toEqual("Its 404 Page :)")
            expect(app.find('p')).toHaveLength(2);
            expect(app.find('img')).toHaveLength(1);
        });
    });
  });