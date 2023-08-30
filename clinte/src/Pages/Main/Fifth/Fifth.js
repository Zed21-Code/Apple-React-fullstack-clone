import React from 'react'
import appleTv from "../../../commonResource/images/icons/apple-tv-logo.png"
import banker from "../../../commonResource/images/home/banker.png"
import watch from "../../../commonResource/images/icons/watch-series5-logo.png"
import MainProp from '../../../components/MainProps/MainProp'

function Fifth() {
	return (
		<div>
		  <section className="fifth-heghlight-wrapper">
			  <div className="container-fluid">
			  <div className="row">
				  <div className="left-side-wrapper col-sm-12 col-md-6">
					  <div className="left-side-container">
						  <div className="top-logo-wrapper">
							  <div className="logo-wrapper">
								  <img src={appleTv} alt='' />
							  </div>
						  </div>
  
						  <div className="tvshow-logo-wraper">
							  <img src={banker} alt='' />
						  </div>
  
						  <div className="watch-more-wrapper">
							  <a href="#">Watch now on the Apple TV App</a>
						  </div>
					  </div>
				  </div>
				  <div className="right-side-wrapper col-sm-12 col-md-6">
					  <div className="right-side-container">
						  <MainProp img={watch} 
									 des="With the Always-On Retina display." 
									 des2="You’ve never seen a watch like this."
									 buy="Buy"
									 more="Learn more"
									 blue="description-wraper"
									 logo="top-logo-wrapper"
									 alert="display"
									 priceclass="display"
							  />
					  </div>
				  </div>					
			  </div>
			  </div> 
	  </section>
		</div>
	  )
}

export default Fifth
