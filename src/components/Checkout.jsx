import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export const Checkout = () => {
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let res = JSON.parse(localStorage.getItem("cart_total"));
    setTotal(res);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  
  const handleClick = () => {
      if(form.nam ===undefined  || form.time ===undefined  || form.contact ===undefined  || form.vehicle ===undefined ){
             alert("Please fill all the details !!")
      }else{ 
     localStorage.setItem("punctured_booking",JSON.stringify(form));
      alert("Appointment booked successfully !!")
      navigate("/success");
         
      }
   
  };
  console.log("Booking : ",form)

  return (
    <div id="checkDiv">
      <div>
        <h1 id="check_head">Checkout</h1>
        <p id="check_sec_head">Your vehicle, Our responsibility</p>
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
        <label htmlFor="time">Time</label>
        <input type="time" name="time" onChange={handleChange} />
        <label htmlFor="vehicle">Vehicle</label>
        <input
          type="text"
          name="vehicle"
          placeholder="Vehicle Type"
          onChange={handleChange}
        />
      </div>
      <div id="check_bottom">
        <p id="check_total">
          <b>Total :</b> ₹ {total} including GST and services charges.
        </p>
        <button id="check_btn" onClick={handleClick}>
          Book Appointment
        </button>
      </div>
    </div>
  );
};
