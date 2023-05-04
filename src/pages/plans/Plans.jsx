import React from 'react'
import './plans.css'
import {plans} from '../../data'
import Card from '../../UI/Card'
import Header from '../../components/Header'
import HeaderImage from '../../assests/gallery (2).jpg'
const Plans = () => {
  return (
  <>
  <Header title="Membership Plans" image={HeaderImage}>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi nam repellendus quasi commodi magnam, ullam 
   cupiditate expedita, consequatur blanditiis tempora quia dolor delectus aspernatur?
  </Header>
  <section className="plans">
    <div className="container plans__container">
      {
        plans.map(({id, name, desc, price, features})=>{
          return <Card key={id} className='plan'>
            <h3>{name}</h3>
            <small>{desc}</small>
            <h1>{`$${price}`}</h1><h2>/mo</h2>
            <h4>Features</h4>
            {
              features.map(({feature, available}, index)=>{
                return <p  key={index} className={!available ? 'disabled' : ''}>{feature}</p>
              
              })
              
            }
              <button className='btn lg'>Choose Plan</button>
          </Card>
        })
      }
    </div>
  </section>
  </>
  )
}

export default Plans