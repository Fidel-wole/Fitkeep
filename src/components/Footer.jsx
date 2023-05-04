import React from 'react'
import {Link} from'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
           <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <h2>FITKEEP</h2>
                </Link>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam 
                    sint nihil laborum necessitatibus enim iure libero minus veniam, optio debitis.
                </p>
                <div className="footer__socials">
                    <a href='https://linkedin.com/' target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href='https://facebook.com/' target="_blank" rel='noreferrer noopener'><FaFacebook/></a>
                    <a href='https://twitter.com/' target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href='https://instagram.com/' target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainer">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainer">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainer">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
     
           </div>
           <div className="footer__copyright">
            <small>2022 Fidel Wole &copy; All Rights Reserved</small>
           </div>
           </footer>    
  )
}

export default Footer