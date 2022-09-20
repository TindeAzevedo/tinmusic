
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './Contacto';
import Letras from './Letras';
import Folklore from './Folklore';
import Nav from './Nav';
import Poprock from './Poprock';

function App() {
  return (
    <>
    <div className="App">
      <div className="imagen">
        <img src='../image/yo3.jpg' alt='imagen'/>
      </div>
      <div className='nombre'>
        <h1><i>Tin de Azevedo</i></h1>
      </div>
    </div>
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Poprock/>}/>
            <Route path='/pagina2' element={<Folklore/>}/>
            <Route path='/pagina3' element={<Contacto/>}/>
            <Route path='/letra/:video' element={<Letras/>}/>
        </Routes>
        </BrowserRouter>
    <footer>
    </footer>
    </>
  );
}

export default App;
