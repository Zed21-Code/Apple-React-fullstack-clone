import React from 'react'
import MainProp from '../../../components/MainProps/MainProp'

function First() {
	return (
		<div>
		  <section className="first-hightlight-wrapper">
		  <div className="container">
			  <MainProp  black="title-wraper bold black" 
						  Title="iPad Pro"   
						  buy="Order"
						  more="Learn more"
						  new="New"
						  blue="display"
						  logo="display"
						  alert="new-alert"
			  />
			  <div className="ipod-caption row">
				  <div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
				  <div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
			  </div>
		  </div>
	  </section>
		</div>
	  )
}

export default First


