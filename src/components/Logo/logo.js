import React from 'react';
import  './logo.css';
import foodChooserLogo from '../Logo/foodChooserLogo';

const Logo = () => {

 	return(
		<div className="logoContainer" >
			<img className="mainLogo" alt='food-chooser-logo' src={foodChooserLogo} />
		</div>
		);
}

export default Logo;