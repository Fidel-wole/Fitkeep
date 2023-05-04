import React from 'react'
import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import Logo from '../assests/logo.jpg'
import {links} from '../data'
import {VscThreeBars} from 'react-icons/vsc'
import {MdOutlineClose} from 'react-icons/md'
const Navbar = () => {
    const [isNavshowing, setIsNavShowing] = useState(false);
  return (
<nav>
    <div className="container nav__container">
        <h2>FITKEEP</h2>
       <ul className={`nav__links ${isNavshowing ? 'show__nav' : 'hide__nav'}`}>
            {
                links.map(({name, path}, index)=>{
                    return(
                        <li key={index}>
                           <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ""} onClick={()=> setIsNavShowing(prev => !prev)}>{name}</NavLink>
                        </li>
                    )
                })
            }
       </ul>
       <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(prev => !prev)}>
         {
          isNavshowing ? <MdOutlineClose/> : <VscThreeBars/>
         }
       </button>
    </div>
</nav>
  )
}

export default Navbar