
import Header from './components/Header/header';
import Logo from './components/Logo/logo';
import Results from './components/Results/results';
import EditButton from './components/EditButton/editButton';
import GoButton from './components/GoButton/goButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Logo />
        <Results />
          <div className="editGoButtons"> 
            <EditButton />
            <GoButton />
          </div>
      </div>
    </div>
  );
}

export default App;
