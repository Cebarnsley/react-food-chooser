import React, {   useState } from "react";
import Header from './components/Header/header';
import Logo from './components/Logo/logo';
import ToggleContent from './components/ToggleContent/toggleContent';
import Modal from './components/Modal/modal';
import './App.css';

function App() {

  const initialList = [
		{ name: "Chinese"},
		{ name: "Indian"},
		{ name: "Pizza"},
		{ name: "Burgers"},
		{ name: "Nando's"},
		{ name: "Italian"}
	];

  const [items, setItems] = useState(initialList);
  const [inputValue, setInputValue] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);
  const [result, setResult] = useState('You should eat...');

  const handleAddButtonClick = () => {
		const newItem = {
			name: inputValue,
		};
	
		const newItems = [...items, newItem];
	
		setItems(newItems);
		setInputValue('');
	};

	
	
	const handleRemoveItem = e => {
		const name = e.target.getAttribute("name")
    	setItems(items.filter(item => item.name !== name));
	};


  function GenerateRandomNumber () {
    
   if (items.length >= 1) {
      const random = Math.floor(Math.random() * items.length);
          
          
      setRandomNumber(random);
      setResult(items[randomNumber].name);

    } else {
        return null;
    }
            
  };

  
  

  

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Logo />
        <p className="resultsText">{result}</p>

          <div className="editGoButtons"> 
            
            <ToggleContent
            toggle={show => <button className="editButton" onClick={show}>Edit</button>}
            content={hide => (


              <Modal>
                <div className="listModal">
                  <button className="closeWindowButton" onClick={hide}>&times;</button>
                
                  
                  <div className="list" >
                      {items.map((item) => {

                        return (
                        
                          <div className='itemName'>
                            <p>{item.name}</p>
                            <button className="deleteButton" name={item.name} onClick={handleRemoveItem}>&times;</button>
                          </div>
                          
                        )
                      }
                  )}
                      
                    <div className="inputArea">
                      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}   type="text" placeholder="Add more food..." className="inputTextArea" />
                      <button type="submit" className="submitButton"  onClick={() => handleAddButtonClick()}>Add</button>
                    </div>

                    </div>

                </div>
              </Modal>

              
            )}
          />
         
            
            <button className="goButton" onClick={GenerateRandomNumber}>Go!</button>
            

          </div>
      </div>
    </div>
  );
}

export default App;
