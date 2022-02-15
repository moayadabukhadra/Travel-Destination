import './App.css';
import Navbar from './components/Navbar/Navbar'
import TourDetail from './components/TourDetail/TourDetail'
import Home from './components/home/Home'
import {Routes, Route , Link} from 'react-router-dom';

function App() {
 
  return (
    <>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/city/:id"  element={<TourDetail/>} />
</Routes>
    </>
  
  );
}

export default App;
