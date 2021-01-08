import React from 'react';
// import foodChooserLogo from '/public/images/foodChooserLogo.png';
import './logo.css';

const Logo = () => {

 	return(
		<div className="logoContainer" >
			<img className="mainLogo" alt='food-chooser-logo' src={window.location.origin + '/images/foodChooserLogo.png'} />
		</div>
		);
}

export default Logo;