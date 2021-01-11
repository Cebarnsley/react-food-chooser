import React from 'react';
// import { useState } from 'react';
import './list.css';

function List () {

	// const [listItems, setListItems] = useState(["Chinese", "Indian", "Pizza", "Italian", "Burgers", "Nando's"])
	
	return(
		<div className="list" >
			
		
			<p>heeeeeyo</p>
			<div className="inputArea">
			<input type="text" placeholder="Add new items to the list" className="inputTextArea" />
			<button type="submit" className="submitButton">Add</button>
			</div>
		</div>
		);
}

export default List;