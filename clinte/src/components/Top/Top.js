import React from 'react'
import { Link } from 'react-router-dom'

function Top(props) {
  return (
    <>
		  <section className="big_color" >
			  <div className={props.bgcontainer}></div>
              
		<div className="container">

			<div className="new-alerts">
				{props.imgbg}
			</div>

			

			<div className={props.descclassname}>
				{props.description}
			</div>
				  <div className='text-center big_title'>
				  <div className={props.titleclassname}>
				{props.title}
					  </div>
					  <br/>
				  <div className={props.priceclassname}>
				{props.pricedesc}
					  </div>
					  <br />
					  <br/>
				  </div>
           
				  
		</div>
	</section>
    
    
    
    
    </>
  )
}

export default Top
