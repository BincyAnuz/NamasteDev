const EcommerceCard = (props) => {
  const { cardData } = props;
  const { 
     images,
     title,
     price,
     discountPercentage
,    rating, 
     
      } =
  cardData;
  return (
    <div className="ecommerce-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="card-image" src={images[0]}>
      </img>
      <h3 style={{marginTop:"10px"}}>{title}</h3>
      <h5>{price}</h5>
      <h5>{discountPercentage}</h5>
      <h5>{rating} </h5>
    </div>
  )
}

export default EcommerceCard