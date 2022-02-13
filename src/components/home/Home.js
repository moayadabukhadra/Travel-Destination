

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import toursData from '/home/moayad/travel-destination/src/data/db.json'
import Tours from '../tours/Tours';


function Home() {
    
  return (
    <>
<Header/>
<Tours data={toursData}/>
<Footer/>
    </>
  
  );
}

export default Home;