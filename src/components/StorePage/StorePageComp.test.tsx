import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import StorePageComp from './StorePageComp'
import { IProductModel } from 'src/models';

describe('ProjectPage', () => {
  describe('Component should render right', () => {
    let app:any;
    const testMatch:any = {
      path: '',
      params: {},
      url: ''
    };
    const products:Array<IProductModel> = [{
        id: 1,
        type: "ability",
        body: "body",
        createdAt: new Date(1545167325 *1000),
        image: "images/placeholder/abc.jpg",
        name: "woda",
        slug: "woda",
        updatedAt: new Date(1545167325 *1000),
        productType: "type"
    }]         
    beforeEach(() => {
      app = mount( 
        <StorePageComp products={products} match={testMatch}/>
      )
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<StorePageComp products={products} match={testMatch}/>)
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
      expect(app.instance().props.products).toEqual(products)
      expect(app.instance().props.match).toEqual(testMatch) 
    })   
  });
}); 