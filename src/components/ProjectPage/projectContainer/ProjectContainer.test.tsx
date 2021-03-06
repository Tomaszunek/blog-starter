import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import ProjectContainer from './ProjectContainer'
import { IArticleModel } from 'src/models';

describe('ProjectPage', () => {
  describe('Component should render right', () => {
    let app:any;    
    const projects:Array<IArticleModel> =[{
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
        <ProjectContainer content={projects} contentType="ability"/>
      )
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<ProjectContainer content={projects} contentType="ability"/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it('should contain project containar', () => {      
      expect(app.find('.projectTile').length).toEqual(1)               
    })
    it('should contain elements', () => {
        expect(app.find('img').length).toEqual(1)
        expect(app.find('.categoryTile').length).toEqual(1)
    })
    it('should have proper props', () => {
      expect(app.instance().props.content).toEqual(projects)
      expect(app.instance().props.contentType).toEqual("ability")
    })   
  });
}); 