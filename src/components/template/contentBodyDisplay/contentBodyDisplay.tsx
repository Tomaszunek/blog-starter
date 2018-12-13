import * as React from 'react';
import './contentBodyDisplay.scss'

export default class ContentBodyDisplay extends React.Component<IContentBodyDisplayProps, any> {
  constructor(props: any) {
    super(props)    
  }

  public render() {
    const { body } = this.props;
    const paragraphs = body.split('</p>');
    return (
      <div className="contentBody">        
        {
          paragraphs.map((p, ind) => {
            return <div className="body" key={ind}>
              <div dangerouslySetInnerHTML={{__html: p +  "</p>"}} />
              {this.getImage(ind)}
            </div>
          })
        }
      </div>
    );
  }
  private getImage = (ind: number) => {
    return this.props.images && this.props.images.filter((img, index) => 
      ind === index
    ).map((item, index) => 
      <img key={index} src={'/images/placeholders/' + item.image} alt=""/>
    )
  }
}

interface IContentBodyDisplayProps {
  body: string,
  images?: Array<any>
  models?: Array<any>
}