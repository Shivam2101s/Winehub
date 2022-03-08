import "./Red.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Red = () => {
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
      fetch(`https://api.sampleapis.com/wines/reds`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log("Red wine :",res);
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
    <div id="redDivMain">
      <div id="sort_filter_div">
        <h1 id="sort_filter_div_head">Sort</h1>
        <div id="sortDiv">
          <select name="" className="filterBy" onChange={handleValue}>
            <option value="0">Ratings</option>
            <option value="1">Low</option>
            <option value="-1">High</option>
          </select>
          <div id="filterDiv">
            <h1 id="sort_filter_div_head">Filter</h1>
            <select name="" className="filterBy" onChange={handleFilter}>
              <option value="0">Reviews</option>
              <option value="">New</option>
              <option value="">Old</option>
            </select>
          </div>
        </div>
      </div>

      <div id="redList">
        {data.map((e, i) => (
          <div key={i} className="redDiv">
            <img src={e.image} alt="NA" />
            <div className="redDetailDiv">
              <div>
                {" "}
                <h3 className="red_name">{e.wine}</h3>
                <p className="red_location">{e.winery}</p>
                <button className="cart_btn" onClick={()=> handleClick(e)}>
                  Add to Cart
                </button>
              </div>

              <div className="redRating">{e.rating.average}⭐</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
