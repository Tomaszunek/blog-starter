import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import ProductSinglePageComp from './productSinglePageComp'
import { BrowserRouter as Router } from 'react-router-dom';
import { IProductModel } from 'src/models';

describe('Burger Menu', () => {
  describe('Component should render right', () => {
    let app:any;
    const testMatch:any = {
      path: '',
      params: {},
      url: ''
    };
    const article:IProductModel = {
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
        <ProductSinglePageComp product={article} match={testMatch}/>
      )
    })
    it('render correctly snapshot component', () => {
      const tree = renderer
      .create(<ProductSinglePageComp product={article} match={testMatch}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
    })    
    it.skip('should contain nav containar', () => {      
      expect(app.find('ul').length).toEqual(1)        
    })
    it.skip('should contain elements', () => {
      // 
    })    
  });
}); 