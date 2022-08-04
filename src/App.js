import './App.css';
import NavBar from "./components/NavBar";
import itemCount from './components/itemCount';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <div className='appContainer'>
      <NavBar />
      <Routes>
        <Route path='/' element={
        <itemListContainer section="Saludos" /> 
     }/>
     <Route path='/item/:id' element={<ItemDetailContainer />}/>
     <Route path='/contacto' element={<h2>Telefonos de contacto</h2>}/>
      </Routes>
     <itemCount />
    </div>
    </BrowserRouter>
  );
}

export default App;
