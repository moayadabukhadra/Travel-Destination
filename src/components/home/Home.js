import Tours from '../tours/Tours';
import data from '../../data/db.json'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Home() {
    
  return (
 <div className='home'>
<Header/>
   <Tours tours={data} title='All Blogs'/>
   <Footer/>
 </div>
  
  );
}

export default Home;