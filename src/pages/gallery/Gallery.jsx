import React from 'react'
import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../assests/gym2.jpg'
const gallery = () => {
  const galleryLength = 3;
  const images = []
  for (let i = 1; i <= galleryLength; i++){
    images.push(require(`../../assests/gym${i}.jpg`))
  }
  return (
    <>
    <Header title ="Oue Gallery" image={HeaderImage}>
 Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
 Vel quo delectus doloremque officiis, error dicta aspernatur nam ullam aliquid quisquam.
      </Header>
   <section className="gallery">
    <div className="container gallery__container">
      {
        images.map((image, index)=>{
          return <article key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`}/>
          </article>
        })
      }
    </div>
   </section>
    </>
  )
}

export default gallery