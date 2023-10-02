import React from 'react'
import CardData from '../assets/js/WorkCards'
import '../styles/workcards.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function WorkCards() {

    
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
   
        
        {CardData.map((item, index) => (
             <div className='col-md-4'>
        <figure className="image-block" key={index}>
          <h1 className='h1'>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <figcaption>
            <h3>More Info</h3>
            <p>{item.description}</p>
          </figcaption>
        </figure>
         </div>
      ))}
     
      </div>
</div>
    </>
  )
}

export default WorkCards