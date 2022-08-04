import React from "react";
import "./index.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
const Header = () => {
  return (
    <nav className="nav-container shadow">
      <div className="form-control" id="search-container">
        <input placeholder="Type to search..." className="search-element" />
        <BsSearch />
      </div>
      <div className="nav-bar-right-section">
        <AiOutlineAppstore className="nav-icon" />
        <div className="notifiaction-container">
          <div className="notification-no">5</div>
        </div>
        <div className="notifiaction-container" id="message-container">
          <div className="notification-no">45</div>
        </div>
        <div className="profile-section">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKEPmWTK1pMyj4bnifzo4LqXp44RcR7kaKA&usqp=CAU"
            className="profile-pic"
            alt="profile-pic"
          />
          <div>
            <p className="person-name">Valpali Keerthana</p>
            <p className="person-designation">Web Designer</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
