
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import SignupForm from "./components/SignupForm";
import { HomePage } from "./components/HomePage";
import { WishList } from "./components/WishList";
import { Fashion } from "./components/Fasion";
import { Food } from "./components/Food";
import {Home} from "./components/Home";
import Footer from "./components/footer";



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/Fashion" element={<Fashion />} /> 
        <Route path="/Food" element={<Food />} /> 
        <Route path="/Home" element={<Home />} /> 
      </Routes>
    <Footer/>

    </Router>
 
  );
}

export default App;
