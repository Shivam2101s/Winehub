import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  let [data, setData] = useState([]);
  let [discount,setDiscount] = useState(0);
  let [promo,setPromo] = useState("");
    const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      fetch("http://localhost:3500/cart")
        .then((d) => d.json())
        .then((res) => {
          console.log("Cart Data", res);
          setData(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleClick = (e) => {
    try {
      fetch(`http://localhost:3500/cart/${e.id}`, {
        method: "Delete",
      })
        .then((d) => d.json())
        .then((res) => {
          console.log("White:", res);
          alert("Removed from cart !!");
          getData();
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

const changePromo = (e) => {
setPromo(e.target.value);  
}
const applyPromo = () => {
if(promo==="NEW30"){
setDiscount(data.length*1500*0.3)  
}else if(promo === "NEW10"){
  setDiscount(data.length*1500*0.1)  
}else{
  alert("Invalid Promo Code !!")
}
}

const checkout = () => {
  navigate("/checkout")
}

  return (
    <div id="cartDiv">
      <div id="cartList">
        <h1 id="cart_main_head">Cart</h1>
        {data.map((e, i) => (
          <div key={i} className="cartDiv">
            <img src={e.image} alt="NA" />

            <div className="cartDetailDiv">
              <div>
                {" "}
                <h3 className="cart_name">{e.wine}</h3>
                <p className="cart_location">{e.winery}</p>
              </div>
            </div>
            <div className="cartRating">{e.rating.average}⭐</div>
            <button className="cart_remove_btn" onClick={() => handleClick(e)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div id="cart_right_div">
      <h1 id="cart_main_head">Billing Details</h1>
        <div id="right_sec_div">
        <p><b>Items in cart : </b> {data.length}</p>
        <p><b>Price per item : </b>₹ 1500</p>
         <p><b>Total : </b>₹ {data.length*1500}</p>
         <p><b>Discount : </b>{discount}</p> 
         <hr />
         <p><b>Amount to be Paid : </b>₹ {data.length*1500-discount}</p>
         <div id="promo_div">
            <input type="text" placeholder="Enter Promo" onChange={changePromo}/>
          <button id="promo_btn" onClick={applyPromo}>Apply</button>
          <p id="promo_code">*use promo NEW30 or NEW10</p>
           </div>
          
         </div>
         <button id="cart_check_btn" onClick={checkout}>Proceed to Checkout</button> 
        </div>
    </div>
  );
};
