import React from 'react'
import MainProp from '../../../components/MainProps/MainProp'

function Fourth() {
	return (
		<div>
		  <section className="fourth-heghlight-wrapper">
		  <div className="container-fluid">
			  <div className="row">
				  <div className="left-side-wrapper col-sm-12 col-md-6">
					  <div className="left-side-container">
						  <MainProp black="title-wraper" 
						  Title="iPhone 11" 
						  des="Just the right amount of everything." 
						  price="From $18.70/mo. or $499 with trade‑in." 
						  num="1"
						  more="Learn more" 
						  buy="Apply now"
						  alert="display"
						  logo="display"
						  />
					  </div>
				  </div>
				  
				  <div className="right-side-wrapper col-sm-12 col-md-6">
					  <div className="right-side-container">
						  <div className="title-wraper white">
							  Get the latest CDC response to COVID-19. 
						  </div> 
  
						  <div className="links-wrapper white">
							  <ul>
								  <li><a href="">Watch the PSA</a></li>
							  </ul> 
						  </div>
					  </div>
				  </div>					
			  </div>
		  </div> 
	  </section>
		</div>
	  )
}

export default Fourth

