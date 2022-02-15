import React from "react";


  
const Tour = ({tour})=>{

    return(

        <div className="name" style={{backgroundColor:"blueviolet"}}>
<h2>
    {tour.name}
</h2>
       
        <div className="image">
            <img src={tour.image} style={{borderRadius:300}}/>

        </div>
        </div>
    )


}
    

export default Tour;