import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import ProductSinglePageComp from './productSinglePageComp'
import { IProductModel } from 'src/models';

describe('Burger Menu', () => {
  describe('Component should render right', () => {
    let app:any;
    const testMatch:any = {
      path: '',
      params: {},
      url: ''
    };
    const product:IProductModel = {
        id: 1,
        type: "ability",
        body: "body",
        createdAt: new Date(1545167325 *1000),
        image: "images/placeholder/abc.jpg",
        name: "woda",
        slug: "woda",
        updatedAt: new Date(1545167325 *1000),
        productType: "type"
    }         
    beforeEach(() => {
      app = mount( 
        <ProductSinglePageComp product={product} match={testMatch}/>
      )
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<ProductSinglePageComp product={product} match={testMatch}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it('should contain productSinglePage containar', () => {      
      expect(app.find('.articleSinglePage').length).toEqual(1)               
    })
    it('should contain elements', () => {
      expect(app.find('.headerPhoto').length).toEqual(1) 
      expect(app.find('.headerPhotoInfo').length).toEqual(1) 
      expect(app.find('.breadcrumbs').length).toEqual(1)
    })
    it('should have proper props', () => {
      expect(app.instance().props.product).toEqual(product)
      expect(app.instance().props.match).toEqual(testMatch) 
    })   
  });
}); 