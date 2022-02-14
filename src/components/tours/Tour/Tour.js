import toursData from '../../../data/db.json'


  
function Tour(){
    

    return(
        <>
        {
            toursData.map((tour ,index)=>{

                return(
                    <>
                   <p>{tour.name}</p>
                    <img src={tour.image}></img>
                    
                    

                    </>



                );
            })
        }
          
        </>
        
            
    );
}
export default Tour;