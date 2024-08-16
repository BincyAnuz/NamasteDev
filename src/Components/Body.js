import EcommerceCard from "./EcommerceCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  const [listOfShops, setListOfShops] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [searchText, setSearchText] = useState("")
  const [isFiltering, setIsFiltering] = useState(false);
  
useEffect(() => {
  fetchData();
}, [])  


const fetchData = async () => {
  const data = await fetch("https://dummyjson.com/products")

  const json = await data.json();
 
  setListOfShops(
    json?.products
  );
  setFilteredList(
    json?.products
  );
}
const handleCardClick = (id) => {
  console.log(id)
  navigate(`/item/${id}`);
};

  console.log(listOfShops)
  return !listOfShops || listOfShops.length === 0 ? (<Shimmer/>) :
    (<div className="body">
       <div className="filter">
        <div className="search">
          <input 
          type="text" className="search-box" 
          value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value);
          }}/>

          <button onClick={() => {
            
           
            const filteredList = listOfShops.filter((shop)=> {
              return shop.title.toLowerCase().includes(searchText.toLowerCase()) });
              console.log(filteredList)
              setFilteredList(filteredList);
              setIsFiltering(true);
          }}>Search</button>
        </div>

        <button className="filter-btn"
        onClick={() => {
          setIsFiltering(false);
          const filteredList = listOfShops.filter((shop) => shop.rating >4)
          setListOfShops(filteredList)
        }}
        >Top Rated</button>
       </div>
       
       <div className="card-container">
        {isFiltering
          ? filteredList.length > 0
            ? filteredList.map((shop) => (
                <EcommerceCard
                  key={shop.id}
                  cardData={shop}
                  onClick={() => handleCardClick(shop.id)}
                />
              ))
            : <p>No shops match your criteria.</p>
          : listOfShops.map((shop) => (
              <EcommerceCard
                key={shop.id}
                cardData={shop}
                onClick={() => handleCardClick(shop.id)}
              />
            ))}
      </div>
    </div>
  );
};

      

export default Body