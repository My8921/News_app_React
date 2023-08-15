import React, { Component } from 'react'
import  './nav.css'
import { Link } from "react-router-dom";
const Nav= ()=> {
  
    return (
      <header>

<nav>
    <ul>
        <li>News Web</li>
        <li><Link  to="/" >Home</Link ></li>
        <li><Link  to="/business">business</Link ></li>
        <li><Link  to="/entertainment">entertainment</Link></li>
        <li><Link  to="/general">general</Link ></li>
       
        <li><Link  to="/health">health</Link ></li>

      <li><Link  to="/technology">technology</Link ></li>
        <li><Link  to="/science">science</Link ></li>
        <li><Link  to="/sports">sports</Link ></li>

    </ul>
</nav>
      </header>
    )  
  }

export default Nav