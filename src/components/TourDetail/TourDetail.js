import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import data from '../../data/db.json'
  import { useState } from "react";
  import Header from "../Header/Header";

  const TourDetail = (props)=>{
let { id } = useParams();

const TourData = ()=>{
  let tdata= data;

  const datatour=tdata.filter((data)=>data.id === id)
  return datatour;
}

const datatour= TourData();
const [readMore,setReadMore]=useState(false);

return(
 
<div className="tourDetails">
<Header/>
<article>
<h2>{datatour[0].name}</h2>
<p style={{color:"red"}}>
  {readMore
  ? datatour[0].info
  : `${datatour[0].info.substring(0,200)}...`}
  <button onClick={()=>setReadMore(!readMore)}>
{readMore ? "showLess"  :"read more"}
  </button>
</p>
<div className="image">
<img src={datatour[0].image} style={{borderRadius:300}} />

</div>
<div>
  Price :{datatour[0].price} $$$
</div>
</article>

</div>


)
  }

  export default TourDetail;