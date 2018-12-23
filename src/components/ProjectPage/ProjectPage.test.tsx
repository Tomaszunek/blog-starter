import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import ProjectPage from './ProjectPage'
import { IArticleModel } from 'src/models';

describe('ProjectPage', () => {
  describe('Component should render right', () => {
    let app:any;
    const testMatch:any = {
      path: '',
      params: {},
      url: ''
    };
    const projects:Array<IArticleModel> = [{
        id: 1,
        type: "ability",
        body: "body",
        createdAt: new Date(1545167325 *1000),
        image: "images/placeholder/abc.jpg",
        name: "woda",
        slug: "woda",
        updatedAt: new Date(1545167325 *1000),
        articleType: "type"
    }]         
    beforeEach(() => {
      app = mount( 
        <ProjectPage projects={projects} match={testMatch}/>
      )
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<ProjectPage projects={projects} match={testMatch}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it('should contain project containar', () => {      
      expect(app.find('main').length).toEqual(1)               
    })
    it('should contain elements', () => {
      expect(app.find('.headerImage').length).toEqual(1) 
      expect(app.find('.breadcrumbs').length).toEqual(1)
    })
    it('should have proper props', () => {
      expect(app.instance().props.projects).toEqual(projects)
      expect(app.instance().props.match).toEqual(testMatch) 
    })   
  });
}); 