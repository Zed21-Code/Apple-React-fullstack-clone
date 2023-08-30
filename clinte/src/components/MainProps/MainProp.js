	import React from 'react'

	function MainProp(props) {
		return (
			<div>
			<div className={props.logo}>
				<div className="logo-wrapper">
					<img src={props.img} alt='' />
					<br/>
			</div>
			</div>
			<div className={props.alert}>
					{props.new}
			</div>
			<div className={props.black}>
					{props.Title}
			</div> 
	
			<div className={props.blue}>
				{props.des}
			</div>
			<div className={props.blue2}>
				{props.des2}
			</div>
			<div className={props.blue3}>
				{props.des3}
			</div>
			
			<div className={props.priceclass}>
				{props.price}
				<sup>{props.num}</sup>
			</div>
			<div className="links-wrapper">
				<ul>
					<li><a href="">{props.more}<sup>{props.num2}</sup></a></li>
					<li><a href="">{props.buy}</a></li>
				</ul> 
			</div>
			</div>
		)
	}

	export default MainProp

