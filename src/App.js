import React, { useRef, useEffect, useState } from "react";
import Header from './components/Header/header';
import Logo from './components/Logo/logo';
import Modal from './components/Modal/modal';
import './App.css';

function App() {

  const initialList = [
		{ id: 1, name: "Chinese"},
		{ id: 2, name: "Indian"},
		{ id: 3, name: "Pizza"},
		{ id: 4, name: "Burgers"},
		{ id: 5, name: "Nando's"},
		{ id: 6, name: "Italian"}
	];

  const [items, setItems] = useState(initialList);
  const [inputValue, setInputValue] = useState('');
  const [randomItem, setRandomItem] = useState(function generateRandomInteger(){ return Math.floor(Math.random() * items.length);})
  const [result, setResult] = useState('You should eat...');
  const [showModal, setShowModal] = useState(false);
  const node = useRef();


  // toggle show/hide list array modal
  
  const toggleModal = () => {
    setShowModal(current => !current)
    console.log(showModal) 
  }

  // handle click outside modal to close it

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  const handleClickOutside = (e) => {
    if (node.current && node.current.contains(e.target)) {
      
      return;
    }
    setShowModal(false);
  };


  // button to submit new items to list array

  const handleAddButtonClick = () => {
    
    if ( inputValue.length >0) {
      const newItem = {
        id: items.length,
        name: inputValue
      };
    
      const newItems = [...items, newItem];
    
      setItems(newItems);
      setInputValue('');
    }
   
  };
  
  
  // uses Enter button keypress to run function to add new item to list array

 const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleAddButtonClick();
    }
  }

  // delete button to remove item from list array
	
	const handleRemoveItem = e => {
		const name = e.target.getAttribute("name")
    	setItems(items.filter(item => item.name !== name));
	};


  // generates random food item from list array

  function generateRandomNumber () {
   
      if (items.length >= 1) {

      const random = Math.floor(Math.random() * items.length);
    
        
      setRandomItem(random);
      setResult(items[randomItem].name);
      

    } else {
        return null;
    }
            
  };



  return (
    <div className="App" >
      <div className="container" >
        <Header />
        <Logo />
        <p className="resultsText">{result}</p>

          <div className="editGoButtons"> 
          <button className="editButton" onClick={toggleModal}>Edit</button>
          
          {showModal === true ? (
              <Modal >
                <div className="listModal" ref={node}>
                  <button className="closeWindowButton" onClick={toggleModal}>&times;</button>
                
                  
                  <div className="list">
                      {items.map((item, id) => {

                        return (
                        
                          <div className='itemName' key={id}>
                            <p>{item.name}</p>
                            <button className="deleteButton" name={item.name} onClick={handleRemoveItem}>&times;</button>
                          </div>
                          
                        )
                      }
                  )}
                      
                     

                    </div>
                    <div className="inputArea" >
                      <input value={inputValue} onKeyPress={handleKeyPress} onChange={(event) => setInputValue(event.target.value)}  type="text" placeholder="Add more options..." className="inputTextArea" />
                      <button type="submit" className="submitButton"  onClick={() => handleAddButtonClick()}>Add</button>
                    </div>
                </div>
              </Modal>

          ) : (
            null
            )}
            
            <button className="goButton" onClick={generateRandomNumber}>Go!</button>
            

          </div>
      </div>
    </div>
  );
}

export default App;
