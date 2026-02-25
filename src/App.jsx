import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'

function App() {
  
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </>
  );
}

export default App;
