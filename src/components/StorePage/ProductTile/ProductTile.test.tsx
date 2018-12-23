import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import ProductTile from './ProductTile'
import { IProductModel } from 'src/models';

describe('ProjectPage', () => {
  describe('Component should render right', () => {
    let app:any;    
    const product:IProductModel ={
        id: 1,
        type: "ability",
        body: "body",
        createdAt: new Date(1545167325 *1000),
        image: "images/placeholder/abc.jpg",
        name: "woda",
        slug: "woda",
        updatedAt: new Date(1545167325 *1000),
        productType: "type", 
        AppContentCategories: [
            {id: 1, name: "category", type: "type"}, 
            {id: 2, name: "category", type: "type"}
        ]
    }        
    beforeEach(() => {
      app = mount( 
        <ProductTile product={product}/>
      )
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<ProductTile product={product}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it('should contain project containar', () => {      
        expect(app.find('.articleTile').length).toEqual(1)               
    })
    it('should contain elements', () => {
        expect(app.find('img').length).toEqual(1)
        expect(app.find('.categoryTagsCont').length).toEqual(1)
        expect(app.find('.category').length).toEqual(2)
        expect(app.find('a[href="/product/woda"]').length).toEqual(1)
    })
    it('should have proper props', () => {
      expect(app.instance().props.product).toEqual(product)
    })   
  });
}); 