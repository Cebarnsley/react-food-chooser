import React, {  useState } from "react";
import Header from './components/Header/header';
import Logo from './components/Logo/logo';
import ToggleContent from './components/ToggleContent/toggleContent';
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
  const [randomItem, setRandomItem] = useState(function generateRandomInteger(){
    return Math.floor(Math.random() * items.length);
 })
  const [result, setResult] = useState('You should eat...');

  

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
  
  // onKeyPress={(e) => {
  //   if (e.charCode === 13) {
  //     alert("yooo");
  //   }
  // }}

 const handleKeyPress = e => {
    // We pass the new value of the text when calling onAccept
    if (e.key === "Enter") {
      handleAddButtonClick();
    }
  }
	
	const handleRemoveItem = e => {
		const name = e.target.getAttribute("name")
    	setItems(items.filter(item => item.name !== name));
	};


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

              
            )}
          />
         
            
            <button className="goButton" onClick={generateRandomNumber}>Go!</button>
            

          </div>
      </div>
    </div>
  );
}

export default App;
