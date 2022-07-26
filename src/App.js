import './App.css';
import NavBar from './components/navBar';
import itemCount from './components/itemCount';

function App() {
  return (
    <div className='appContainer'>
      <NavBar />
     <itemListContainer section="Saludos" /> 
     <itemListContainer section="Planeta" /> 
     <itemListContainer section="Tierra" /> 
     <itemCount />
    </div>
  );
}

export default App;
