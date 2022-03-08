import './App.css';
import {Routes,Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Red} from './components/Red'
import {White} from './components/White'
import {Cart} from './components/Cart'
import {Checkout} from './components/Checkout'
import {Home} from './components/Home'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/red" element={<Red />}></Route>
        <Route path="/white" element={<White />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
