import * as React from 'react';
import './mainpage.scss'
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import SliderPhoto from '../template/photoSlider/sliderPhoto';
import ArticleContainer from 'src/components/ArticlePage/articleContainer/articleContainer';
import { IArticleModel } from 'src/models';


export default class MainPageComp extends React.Component<IMainPageCompProps, any> {    
  public render() {
    return (
      <main>
        <FullScreenCont>
          <SliderPhoto/> 
        </FullScreenCont>
        <FullScreenCont>
          <ArticleContainer articles={this.props.articles} type="articles" structure={[3,4,5,4,4]}/>  
        </FullScreenCont>         
      </main>
    );
  }
}

interface IMainPageCompProps {
  articles?: Array<IArticleModel>
}
