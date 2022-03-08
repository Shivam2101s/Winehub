import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export const Checkout = () => {
  const [form, setForm] = useState([]);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (
      form.nam === undefined ||
      form.email === undefined ||
      form.contact === undefined ||
      form.address === undefined 
    ) {
      alert("Please fill all the details !!");
    } else {
      alert("Order Placed successfully !!");
      navigate("/");
    }
  };
  
  return (
    <div id="checkDiv">
      <div>
        <h1 id="check_head">Checkout</h1>
        <p id="check_sec_head">The Royal Taste</p>
      </div>

      <div id="customer_details">
        <label htmlFor="nam">Name</label>
        <input
          type="text"
          name="nam"
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="contact">Contact No.</label>
        <input
          type="number"
          name="contact"
          placeholder="Contact No."
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
      </div>
      <div id="check_bottom">
        <button id="check_btn" onClick={handleClick}>
          Place Order 
        </button>
      </div>
    </div>
  );
};
