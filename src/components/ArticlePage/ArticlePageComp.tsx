import * as React from 'react';
import './articlepage.scss'
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import image from 'src/logo.svg'

export default class ArticlePageComp extends React.Component {    
  public render() {
    return (
      <main>
        <FullScreenCont>        
          <img src="./images/logos/greenBlack.png" alt=""/>  
          <img src={image} alt=""/>          
        </FullScreenCont>
      </main>
    );
  }
}


