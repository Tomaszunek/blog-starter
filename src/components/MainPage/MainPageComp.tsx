import * as React from 'react';
import './mainpage.scss'
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import SliderPhoto from '../template/photoSlider/sliderPhoto';
import ArticleContainer from 'src/components/ArticlePage/articleContainer/articleContainer';
import { IArticleModel, IProductModel } from 'src/models';


export default class MainPageComp extends React.Component<IMainPageCompProps, any> {    
  public render() {
    const { articles, products, slides } = this.props 
    return (
      <main>
        <FullScreenCont>
          <SliderPhoto slides={slides}/> 
        </FullScreenCont>
        <FullScreenCont>
          <ArticleContainer articles={articles} type="articles" structure={[3,4,5,4,4]}/>
          <ArticleContainer products={products} type="articles" structure={[3,4,5,4,4]}/>    
        </FullScreenCont>         
      </main>
    );
  }
}

interface IMainPageCompProps {
  articles?: Array<IArticleModel>
  slides?: Array<IArticleModel>
  products?: Array<IProductModel>
}
