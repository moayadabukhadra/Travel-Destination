import { Link } from 'react-router-dom';
import React from 'react';
import Tour from './Tour/Tour';

const Tours =({tours})=>{
    
    return(
        <div className='toursList'>
            {
        tours.map((tour)=>(
       <div className='tour-des' key={tour.id}>
           <Link to={`/city/${tour.id}`}>
       <Tour tour={tour}/> 
       </Link> 
        </div>

        ))
}
       </div>     
    )}

export default Tours;

