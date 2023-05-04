import React from 'react'
import './trainers.css'
import {trainers} from '../../data'
import Header from '../../components/Header'
import HeaderImage from '../../assests/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import Trainer from '../../components/Trainer'
const Trainers = () => {
  return (
   <>
   <Header title="Our Trainers" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore
     error soluta exercitationem voluptatibus reiciendis id, ea minima labore rerum.
   </Header>
   <section className="trainers">
    <div className="container trainers__container">
      {
        trainers.map(({id, image, name, job, socials})=>{
         return <Trainer key={id} image={image} name={name} job={job} socials={
            [
              {icon: <AiFillInstagram/>, link: socials[0]},
              {icon: <AiOutlineTwitter/>, link: socials[1]},
              {icon: <FaFacebook/>, link: socials[2]},
            ]
          }/>

         
        })
      }
    </div>
   </section>
   </>
  )
}

export default Trainers