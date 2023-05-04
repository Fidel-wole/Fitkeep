import React from 'react'
import {useState} from 'react'
import {AiOutlinePlus} from'react-icons/ai'
import {AiOutlineMinus} from'react-icons/ai'
const FAQ = ({question, answer}) => {
    const [isAnserShowing, SetIsAnswerShowing]= useState(false);
  return (
    <article className="faq" onClick={()=>SetIsAnswerShowing(prev => !prev)}>
        <div><h4>{question}</h4>
        <button className="faq__icon" >
            {
                isAnserShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
            }
        </button>
        </div>
        <p>
            {isAnserShowing && <p>{answer}</p>}
        </p>
    </article>
  )
  
}

export default FAQ