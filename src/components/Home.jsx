import "./Home.css"
import { useNavigate } from "react-router-dom";

export const Home = () =>{
    const navigate = useNavigate();
    const login = ()=>{
    navigate("/red")
    }

    return (<div id="homeMain">
        <div id="homeDiv_1">
        <h1 id="homeHead">Welcome to WineOne</h1>
        <p>A Wine for Everyone</p>
        <button onClick={login}>Lets Go..</button>
        </div>
        
    </div>)
}

