import React from 'react';
import  './logo.css';
import foodChooserLogo from './foodChooserLogo.png'

const Logo = () => {

 	return(
		<div className="logoContainer" >
			<img className="mainLogo" alt='food-chooser-logo' src={foodChooserLogo} />
		</div>
		);
}

export default Logo;