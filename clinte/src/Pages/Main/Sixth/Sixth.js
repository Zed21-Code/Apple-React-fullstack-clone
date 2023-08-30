import React from 'react'
import arcade from "../../../commonResource/images/icons/arcade.png"
import MainProp from '../../../components/MainProps/MainProp'

function Sixth() {
	return (
		<div>
		  <section className="sixth-heghlight-wrapper">
		  <div className="container-fluid">
			  <div className="row">
				  <div className="left-side-wrapper col-sm-12 col-md-6">
					  <div className="left-side-container">
						  <MainProp  
							  logo="top-logo-wrapper"
									  img={arcade}
									  blue="description-wraper white" 
									  black="display" 
									  des="Agent 8 is a small hero on a"
									  blue2="description-wraper white" 
									  des2="big mission." 
									  buy=" Learn about Apple Arcade"
									  more="Play now"
									  num2="2"
						  />	
					  </div>
				  </div>
				  <div className="right-side-wrapper col-sm-12 col-md-6">
					  <div className="right-side-container">
					  <MainProp  black="title-wraper"
								  blue="black" 
								  Title="Apple Card Monthly Installments" 
								  des="Pay for your next iPhone over" 
								  des2="time, interest-free with Apple"
								  des3="Card." 
								  more="Learn more"
								  buy="Apply now"
								  logo="display"
								  />
					  </div>
				  </div>					
			  </div>
		  </div> 
	  </section>
		</div>
	  )
}

export default Sixth







