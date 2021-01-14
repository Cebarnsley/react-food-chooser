import React from 'react';
import  './logo.css';
import '../Logo/foodChooserLogo.png';

const Logo = () => {

 	return(
		<div className="logoContainer" >
			<img className="mainLogo" alt='food-chooser-logo' src={'https://cebarnsley.github.io/react-food-chooser2/images/foodChooserLogo.png'} />
		</div>
		);
}

export default Logo;