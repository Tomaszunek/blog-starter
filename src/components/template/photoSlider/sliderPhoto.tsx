import * as React from 'react';
import './sliderPhoto.scss'

export default class SliderPhoto extends React.Component<any, ISliderPhotoState> {
  private interval: any;
  constructor(props: any) {
    super(props)
    this.state = {
      photoIndex: 0,
      images: ['obraz10.jpg', 'obraz12.jpg', 'obraz13.jpg', 'obraz14.jpg', 'obraz15.jpg', 'obraz16.jpg']
    }
  }


  public render() {
    const { images, photoIndex } = this.state;
    return (
      <div className="sliderPhoto">
        {
          images.filter((item, index) => photoIndex === index)
          .map((item, index) => 
            <img key={index} src={"./images/placeholders/" + item} alt=""/> 
          )
        }
      </div>
    );
  }

  public componentDidMount() {
    this.interval = setInterval(() => this.changeSlide(), 3000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }


  private changeSlide = () => {
    let { photoIndex } = this.state;
    const { images } = this.state;
    this.setState({
      photoIndex: ((images.length === photoIndex + 1) ? 0 : ++photoIndex)
    });
}
}

interface ISliderPhotoState {
  photoIndex: number,
  images: Array<string>
}