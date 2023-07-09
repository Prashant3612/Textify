import React from 'react'
import './styles.css';

export default function footer(props) {
  return (
<div className="container " >
        
      <p style={{
           
            color: props.mode === "dark" ? "white" : "black",
            
          }}className="footer">
          Made with ❤ in 2023.</p>
      
    </div>
  )
}
