import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import SignUp from './SignUp'
import Checkout from './Checkout';

function App() {
  
  return (
    <>
      <nav className='navigation'>
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </>
  );
}

export default App;
