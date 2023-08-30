import React from 'react'
import MainProp from '../../../components/MainProps/MainProp'

function Second() {
	return (
		<div>
		  <section className="second-hightlight-wrapper">
		  <div className="container">
			  <MainProp  black="title-wraper bold black"
						  blue="description-wrapper black" 
						  Title="MacBook Air" 
						  des="Twice the speed. Twice the storage."
						  des2=""
						  des3="" 
						  price="From $999." 
						  more="Learn more"
						  buy="Buy"
						  new="New"
						  logo="display"
						  alert="new-alert"
						  priceclass="price-wrapper grey"
			  />
		  </div>
	  </section>
		</div>
	  )
}

export default Second
