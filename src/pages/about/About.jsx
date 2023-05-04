import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../assests/cathy-pham-3jAN9InapQI-unsplash.jpg'
import StoryImage from '../../assests/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'
import VisionImage from '../../assests/gym2.jpg'
import MissionImage from '../../assests/gym3.jpg'
import './about.css'
const about = () => {
  return (
    <>
    <Header title = "About Us" image={HeaderImage}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Assumenda praesentium delectus laboriosam, ea incidunt autem.
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt='Our Story Image'/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam 
            deleniti veniam libero impedit ab vero earum assumenda accusantium, corporis esse!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Tenetur incidunt deserunt obcaecati modi, magnam aspernatur?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, similique!</p>
        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
       
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam 
            deleniti veniam libero impedit ab vero earum assumenda accusantium, corporis esse!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Tenetur incidunt deserunt obcaecati modi, magnam aspernatur?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, similique!</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt='Our Vision Image'/>
        </div>
      </div>
      
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
      <div className="about__section-image">
          <img src={MissionImage} alt='Our Mission Image'/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam 
            deleniti veniam libero impedit ab vero earum assumenda accusantium, corporis esse!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Tenetur incidunt deserunt obcaecati modi, magnam aspernatur?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, similique!</p>
        </div>
        
      </div>
      
    </section>
    </>
  )
}

export default about