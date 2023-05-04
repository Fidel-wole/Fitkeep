import React from 'react'
import Header from '../../components/Header'
import HeaderImager from '../../assests/gym3.jpg'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsMessenger} from 'react-icons/bs'
import './contact.css'
const contact = () => {
  return (
    <>
  
    <Header title="Get In Touch" image={HeaderImager}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolore temporibus aperiam illum 
      laborum qui quam ipsum cumque, quo eveniet suscipit? Officia enim natus est minus?
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href='mailto:adewoyeadedayo10@gmail.com' target='_blank' rel='nonreferrer noopener'><MdEmail/></a>
          <a href='http://m.me/fidelwole' target='_blank' rel='nonreferrer noopener'><BsMessenger/></a>
          <a href='https://api.whatsapp.com/send?phone=+2347057586871' target='_blank' rel='nonreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default contact