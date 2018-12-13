import * as React from 'react';
import './contentBodyDisplay.scss'

export default class ContentBodyDisplay extends React.Component<IContentBodyDisplayProps, any> {
  constructor(props: any) {
    super(props)    
  }

  public render() {
    const { body } = this.props;
    return (
      <div className="contentBody">
        <div className="body" dangerouslySetInnerHTML={{__html: body}} />
      </div>
    );
  }  
}

interface IContentBodyDisplayProps {
  body: string  
}