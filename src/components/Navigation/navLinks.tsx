import * as React from 'react';
import { NavLink }  from 'react-router-dom';

const Links: React.SFC = () => {
 return (
    <ul>
        <li className="login">
            <NavLink to="/login">login</NavLink>
        </li>
        <li>
            <NavLink to="/technology">technology</NavLink>
        </li>
        <li>
            <NavLink to="/psychology">psychology</NavLink>
        </li>
        <li>
            <NavLink to="/motivation">motivation</NavLink>
        </li>
        <li>
            <NavLink to="/spiritual">spiritual</NavLink>
        </li>
        <li>
            <NavLink to="/products">store</NavLink>
        </li>

        {/* <li className="login">
            <NavLink to="/login">login</NavLink>
        </li>
        <li>
            <NavLink to="/news">news</NavLink>
        </li>
        <li>
            <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
            <NavLink to="/abilities">abilities</NavLink>
        </li>
        <li>
            <NavLink to="/store">store</NavLink>
        </li>
        <li>
            <NavLink to="/about">about</NavLink>
        </li>      */}
    </ul>
 )
}

export default Links;