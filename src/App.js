// import React, { useState } from "react";
import Header from './components/Header/header';
import Logo from './components/Logo/logo';
import Results from './components/Results/results';
import List from './components/ListOptions/list';
import GoButton from './components/GoButton/goButton';
import ToggleContent from './components/ToggleContent/toggleContent';
import Modal from './components/Modal/modal';
import './App.css';

function App() {

  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Logo />
        <Results />

          <div className="editGoButtons"> 
            
            <ToggleContent
            toggle={show => <button className="editButton" onClick={show}>Edit</button>}
            content={hide => (
              <Modal>
                <div className="listModal">
                <button className="closeWindowButton" onClick={hide}>&times;</button>
                <List />
                </div>
              </Modal>
            )}
          />
         
            <GoButton />
          </div>
      </div>
    </div>
  );
}

export default App;
