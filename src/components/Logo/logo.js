import React from 'react';
import  './logo.css';

const Logo = () => {

 	return(
		<div className="logoContainer" >
			<img className="mainLogo" alt='food-chooser-logo' src={'${process.env.PUBLIC_URL}/images/foodChooserLogo.png'} />
		</div>
		);
}

export default Logo;