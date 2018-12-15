import * as React from 'react';
import { NavLink }  from 'react-router-dom';

const Links: React.SFC = () => {
 return (
    <ul>
        {/* <li className="login">
            <NavLink to="/login">login</NavLink>
        </li>
        <li>
            <NavLink to="/articles/technology">technology</NavLink>
        </li>
        <li>
            <NavLink to="/articles/psychology">psychology</NavLink>
        </li>
        <li>
            <NavLink to="/articles/motivation">motivation</NavLink>
        </li>
        <li>
            <NavLink to="/articles/spiritual">spiritual</NavLink>
        </li>
        <li>
            <NavLink to="/products">store</NavLink>
        </li> */}

        <li className="login">
            <NavLink to="/login">login</NavLink>
        </li>
        <li>
            <NavLink to="/articles/news">news</NavLink>
        </li>
        <li>
            <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
            <NavLink to="/abilities">abilities</NavLink>
        </li>
        <li>
            <NavLink to="/products">store</NavLink>
        </li>
        <li>
            <NavLink to="/about">about</NavLink>
        </li>     
    </ul>
 )
}

export default Links;