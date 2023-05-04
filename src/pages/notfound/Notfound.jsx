import React from 'react'
import {Link} from 'react-router-dom'
const notfound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page not Found</h2>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default notfound