import * as React from 'react';
import Links from './navLinks';

export default class BurgerMenu extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {
            showBurgerMenu: false
        }
    }
      
  public render() {
    const { showBurgerMenu } = this.state;
    const style = {
        display: (showBurgerMenu ? " block" : "none")
    }
    return (
        <div className={"burgerMenu" + (showBurgerMenu ? " change" : "")} onClick={(this.toggleBurger)}>
            <div className="bar1"/>
            <div className="bar2"/>
            <div className="bar3"/>
            <div className="burgerLinksWraper" style={style}>
                <Links/>
            </div>            
        </div>
    );
  }

  private toggleBurger = () => {
    this.setState({
        showBurgerMenu: !this.state.showBurgerMenu
    })
  };  
}

interface IProps {
    someVrbl?: any
}
interface IState {
    showBurgerMenu: boolean
}
  