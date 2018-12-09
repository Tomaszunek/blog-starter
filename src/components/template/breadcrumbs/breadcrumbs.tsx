import * as React from 'react';
import './breadcrumbs.scss'
import { match } from 'react-router';

export default class ProductSinglePage extends React.Component<IProps, any> {    
  public render() {
    const matchObj = this.props.match;
    const breadArray = {};
    const breadcrumbsArr = [];
    const breadcrumbs = matchObj.url.split('/');
    breadcrumbs.shift();
    for(let i = 0;i < breadcrumbs.length; i++) {
      let breadstring = '/' + breadcrumbs[0];
      for(let j = 1;j < breadcrumbs.length; j++) {
        if(i >= j) {
          breadstring += "/" + breadcrumbs[j];
        }
      }      
      breadArray[breadcrumbs[i]] = breadstring;
    }   
    const keys = Object.keys(breadArray);
    const lastKey = keys[keys.length - 1];
    delete breadArray[lastKey];
    for(const i in breadArray) {
      if(breadArray[i]) {
        breadcrumbsArr.push(<li className="" key={i}><a href={breadArray[i]}>{i}</a></li>)
      }
    }
    return (
      <ul className="breadcrumbs">
          <li className="home">
            <a href="/">Home</a>
          </li>
          {breadcrumbsArr}
          <li className="current">
            <a>{lastKey}</a>
          </li>
      </ul>
    );
  }
}


interface IProps {
  match: match<void>
}