import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
const CardDetails = () => {
  const [itemInfo, setItemInfo] = useState(null);
  const { itemId } = useParams()
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await fetch(`https://dummyjson.com/products/${itemId}`);
    const json = await response.json();
    setItemInfo(json); // Directly setting the json data
  };

  if (itemInfo === null) {
    return <Shimmer />; // Conditional rendering
  }

  const { title, description, price, rating, availabilityStatus, shippingInformation, thumbnail } = itemInfo;

  return (
    <div className="details">
      <div className="image-card">
        <img src={thumbnail} alt={title} className="product-image" />
      </div>
      <div className="info">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <h5>Price: ${price}</h5>
        <h5>Rating: {rating} / 5</h5>
        <h5>Status: {availabilityStatus ? 'Available' : 'Out of Stock'}</h5>
        <h5>Shipping Info: {shippingInformation}</h5>
      </div>
    </div>
  );
};

export default CardDetails;
