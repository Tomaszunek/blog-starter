import * as React from 'react';
import ProductSinglePageComp from 'src/components/ProductSinglePage/productSinglePageComp';

export default class ProductSinglePage extends React.Component<any> {    
  public render() {
    return (
      <ProductSinglePageComp match={this.props.match}/>
    );
  }
}


