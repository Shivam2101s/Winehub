import "./White.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const White = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(0);
  const [value, setValue] = useState("0");
  const [filter, setFilter] = useState("0");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length > 0) {
      getData();
    }
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value);
   
  };

  const getData = () => {
    try {
      fetch(`https://api.sampleapis.com/wines/whites`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log("White wine :", res);
         
        });
    } catch (err) {
      console.log("Error:", err);

    }
  };

  const handleClick = (e) => {
   
    const payload = e; 
    try {
      fetch("http://localhost:3500/cart", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((d) => d.json())
        .then((res) => {
          console.log("White:", res);
          alert("Successfully added to cart !!");
        });
    } catch (err) {
       alert("Already in cart !!");
      console.log("Error:", err);
     
    }
    
  };

  return (
    <div id="whiteDivMain">
      <div id="white_sort_filter_div">
        <h1 id="white_sort_filter_div_head">Sort</h1>
        <div id="white_sortDiv">
          <select name="" className="white_filterBy" onChange={handleValue}>
            <option value="0">Ratings</option>
            <option value="1">Low</option>
            <option value="-1">High</option>
          </select>
          <div id="white_filterDiv">
            <h1 id="white_sort_filter_div_head">Filter</h1>
            <select name="" className="white_filterBy" onChange={handleFilter}>
              <option value="0">Reviews</option>
              <option value="">New</option>
              <option value="">Old</option>
            </select>
          </div>
        </div>
      </div>

      <div id="whiteList">
        {data.map((e, i) => (
          <div key={i} className="whiteDiv">
            <img src={e.image} alt="NA" />

            <div className="whiteDetailDiv">
              <div>
                {" "}
                <h3 className="white_name">{e.wine}</h3>
                <p className="white_location">{e.winery}</p>
                <button className="white_cart_btn" onClick={()=> handleClick(e)}>
                  Add to Cart
                </button>
              </div>

              <div className="whiteRating">{e.rating.average}⭐</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
