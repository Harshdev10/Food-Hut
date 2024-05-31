import React, { useState } from "react";
import { Link } from "react-router-dom";


const loggedInUser = () => {
  return true;
}

const Title = () => (
  <a href="/">
    <img
      className="Logo"
      src="https://play-lh.googleusercontent.com/E1bdAU-41fa09Si4VnBlcAtacg9J6Y5cvuM8OMa3fpPg66TXNovAA9XGx5lOrcyO1Q"
      alt="Zomato"
    ></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
         <li><Link to= "/"> Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (<button className="login" onClick={() => setIsLoggedIn(false)}>Login</button>
       ) : (
       <button className="logout" onClick={() => setIsLoggedIn(true)}> Logout</button>) } 
    </div>
  );
};

export default Header;
