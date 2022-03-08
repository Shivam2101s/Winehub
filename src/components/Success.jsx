import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";

export const Success = () => {
   const [data,setData] = useState([]); 
   const navigate = useNavigate();

     useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        let res = JSON.parse(localStorage.getItem("punctured_booking"));
        setData(res);
        console.log("Booking Details : ",res);
      };

    const handleClick = () => {
        localStorage.removeItem("punctured_booking");
        localStorage.removeItem("cart_total");
        localStorage.removeItem("service_cart");
        navigate("/")
    }  
     
  return (
    <div id="successDiv">
      <div>
        <h1 id="success_head">Appointment Booked</h1> 
        <p id="success_sec_head">We provide you best in class facilities</p>
      </div>
      <div id="success_middle">
      <h3>Booking Details</h3>
      <p><b>Name : </b> {data.nam}</p>
      <p><b>Contact : </b>+91 {data.contact}</p>
      <p><b>Vehicle : </b> {data.vehicle}</p>
      <p><b>Time : </b> {data.time}</p>
      </div>
     
        <button id="check_btn" onClick={handleClick}>
          Home
        </button>
      
    </div>
  );
};
