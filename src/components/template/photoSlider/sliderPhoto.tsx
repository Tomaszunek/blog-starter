import * as React from 'react';
import './sliderPhoto.scss'
import { IArticleModel } from 'src/models';
import ArticleTile from 'src/components/ArticlePage/articleTile/articleTile';

export default class SliderPhoto extends React.Component<ISliderPhotoProps, ISliderPhotoState> {
  private interval: any;
  constructor(props: any) {
    super(props)
    this.state = {
      photoIndex: 0
    }
  }


  public render() {
    const { photoIndex } = this.state;
    const { slides } = this.props;
    return (
      <div className="sliderPhoto">
        {
          (slides ? (slides.filter((item, index) => photoIndex === index)
          .map((item, index) => 
            <ArticleTile key={index} article={item}/>
          )) : null)
        }
      </div>
    );
  }

  public componentDidMount() {
    this.interval = setInterval(() => this.changeSlide(), 5000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }


  private changeSlide = () => {
    let { photoIndex } = this.state;
    const { slides } = this.props;
    if(slides) {
      this.setState({
        photoIndex: ((slides.length === photoIndex + 1) ? 0 : ++photoIndex)
      });
    }
}
}

interface ISliderPhotoState {
  photoIndex: number
}

interface ISliderPhotoProps {
  slides?: Array<IArticleModel>
}