import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Tours from './components/tours/Tours';
import {Routes, Route} from 'react-router-dom';

function App() {
 
  return (
    <>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/city/:id"  element={<Tours/>} />
</Routes>
    </>
  
  );
}

export default App;
