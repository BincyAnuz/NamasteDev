import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer';

const CardDetails = () => {

  const[itemInfo, setitemInfo] = useState(null);

  useEffect(()=> {
    fetchDetails();
 },[])

 const fetchDetails = async() => {
  const data = await fetch("https://dummyjson.com/products");
  const json = await data.json();
  setitemInfo(json.data)
  
};

if(itemInfo === null) <Shimmer/>

const {title,description,price,rating,availabilityStatus,shippingInformation}= itemInfo;

   
   return
   (
    <div className='details'>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h5>{price}</h5>
      <h5>{rating}</h5>
      <h5>{availabilityStatus}</h5>
      <h5>{shippingInformation}</h5>
      
    </div>
  )
}

export default CardDetails
