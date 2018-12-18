import * as React from 'react';
import './footer.scss'

export default class Footer extends React.Component {    
  public render() {
    return (
      <footer className="footer">
        <div className="upperFooter">
          <div className="links">
            {this.displayLinksBasedOnEnv(1)}          
            <a className="linkedin" href="">LinkedIn</a>
            <a className="patronite" href="">Patronite</a>
            <a className="twitter" href="">Twitter</a>
            {this.displayLinksBasedOnEnv(2)}
            <a className="facebook" href="">Facebook</a>
            <a className="twitch" href="">Twitch</a>
            <a className="youtube" href="">Youtube</a>
          </div>
          <form action="">
            <input type="text"/>
            <textarea name="" id="" cols={30} rows={10} defaultValue=""/>
            <button type="submit">Send</button>
          </form>          
        </div>
        <span>&copy; Created in 2018 by Tomasz Pawłowski. All rights reserved.</span>
      </footer>
    );
  }

  private displayLinksBasedOnEnv = (num:number) => {
    if(process.env.serv_type === "blog") {
      if(num === 1) {
        return <>
            <a href="articles/tech">technology</a>
            <a href="articles/spiritual">spiritual</a>
            <a href="articles/psychology">psychology</a>
        </>
      } else {
        return <>
            <a href="store">store</a>
            <a href="articles/motivation">motivation</a>
            <a href="login">login</a>   
        </>
      }
    } else if(process.env.serv_type === "games") {
      if(num === 1) {
        return <>
            <a href="articles/news">news</a>
            <a href="projects">projects</a>
            <a href="abilities">abilities</a>   
        </>
      } else {
        return <>
            <a href="store">store</a>
            <a href="about">about</a>
            <a href="login">login</a>   
        </>
      }
    } else  {
      return <>
          <a href="">abc</a>
          <a href="">abc</a>
          <a href="">abc</a>   
      </>
    }
  }
}


