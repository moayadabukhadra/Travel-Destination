
function Tours(props){
 
    return(
        <>
        {
            props.data.map(tour=>{
                return(
                    <>
                   <p>{tour.name}</p>
                    <img src={tour.image} />
                    
                    

                    </>



                );
            })
        }
          
        </>
        
            
    );
}
export default Tours;

