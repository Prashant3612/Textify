import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function Navbar(props) {
  let myStyle = {
    
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor:props.mode === "dark" ? "black" : "rgb(235 218 176)",
    
    
  };
  
    const [showNavbar, setShowNavbar] = useState(false);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
      
      
    }
    
  
  return (
    <>
      
      <nav className={`navbar navbar-expand-lg ` } style={myStyle}>
        <div className="container-fluid">
        
          <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={faBars } size="2x"/>
          
          {/* <span class="navbar-toggler-icon"> </span>
            
          </button> */}
          
          </div>
          <NavLink className="navbar-brand" to="/" style={{ color: props.mode === "dark" ? "white" : "black", }}>
            <strong>Textify</strong>
          </NavLink>
          <div className={`nav-elements  ${showNavbar && 'active'}`} style = {
    
        {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor:props.mode === "dark" ? "black" : "rgb(235 218 176)",}
    
    
  }>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="/" style={{ color: props.mode === "dark" ? "white" : "black", }} >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/TextGenerator" style={{ color: props.mode === "dark" ? "white" : "black", }}>
                
                  More Generators
                </NavLink>
                
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/About"style={{ color: props.mode === "dark" ? "white" : "black", }}>
                  About
                </NavLink>
              </li>
            </ul>
           
           </div>
           
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
          </div>
          

      </nav>
    </>
  )
}
