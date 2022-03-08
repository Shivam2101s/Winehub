import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  let [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let arr = [];
    let res = JSON.parse(localStorage.getItem("service_cart"));
    console.log("res:", res);
    for (let key in res) {
      if (res[key]) {
        arr.push(key);
      }
    }
    setData(arr);
  };
  console.log("Data outside: ", data);

  const handleClick = () => {
    localStorage.setItem("cart_total", JSON.stringify(data.length * 700));
    navigate("/checkout");
  };

  return (
    <div id="cartDiv">
      <div>
        <h1 id="cart_head">Services Choosed</h1>
        <p id="cart_sec_head">We provide you best in class facilities</p>
      </div>

    {data.length>0 ? <> <div id="service_div">
        {data.map((e, i) => (
          <p>
            {i + 1}. {e}
          </p>
        ))}
      </div>
      <div id="cart_bottom">
        <p id="cart_total">
          <b>Total Charges :</b> ₹ {data.length * 700} including GST and
          services charges.
        </p>
        <button id="check_btn" onClick={handleClick}>
          Proceed to Checkout
        </button>
      </div> </> : <div id="service_div2">Cart is Empty</div>   }  
      


    </div>
  );
};
