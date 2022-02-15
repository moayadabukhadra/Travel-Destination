import {Link} from 'react-router-dom';

function Header(){
    return(
    <div className='Header' id='Header' style={{backgroundColor:"black"}}>
  
      <h1 id='h1' style={{color:"red"}}>Travel Destination</h1>
      <Link to="/" id='home' style={{fontSize:36}} >Home</Link>
      </div>
  
    
    );
  
  }

  export default Header;