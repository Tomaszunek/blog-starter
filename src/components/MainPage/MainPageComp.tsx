import * as React from 'react';
import './mainpage.scss'
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import image from 'src/logo.svg'


export default class MainPageComp extends React.Component {    
  public render() {
    return (
      <main>
        <FullScreenCont>          
          <img src={image} alt=""/>
          <img src="./images/logos/greenBlack.png" alt=""/>
        </FullScreenCont>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
        Next things <br/>
      </main>
    );
  }
}


