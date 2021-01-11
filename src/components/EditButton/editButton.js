import React from 'react';
import { useState } from 'react';
import List from '../ListOptions/list';

import './editButton.css';

function EditButton () {
	const [isModalOpen, setIsModalOpen] = useState(false);
 	return(
		<div >
			<button className="editButton" onClick={() => setIsModalOpen(true)}>Edit</button>
			{isModalOpen &&  <List />}
		</div>
		);
}

export default EditButton;