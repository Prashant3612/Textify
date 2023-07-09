import React from "react";

export default function About(props) {
  //     const [myStyle,setStyle]=useState({
  //         color:'black',
  //         backgroundColor:'white'
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "dark",
   
  };
  // const [setBtnText,btnStyle]=useState("Enable Dark Mode");

  //     const darkMode=()=>{
  //         if(myStyle.color==='black'){
  //             setStyle({
  //                 color:'white',
  //                 backgroundColor:'black'
  //             })
  //             btnStyle("Enable Light Mode");
  //         }else{
  //             setStyle({
  //                 color:'black',
  //                 backgroundColor:'white'
  //             })
  //             btnStyle("Enable Dark Mode");
  //         }
  //     }

  return (
    <>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}

            >
             <strong>Textify: About</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textify is a handy web application that enables you to change the text case of any given text. Simply copy and paste the text into the text area below and click the required text case. It also allows copy your text. So, why not give it a try and test yourself.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Enter The Dark Side</strong> 
                      </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textify has a built-in dark mode. When you turn on the Dark mode or Dark theme in Textify, all the buttons, navbar,etc will appear in black. To enable the dark mode: click on the slider on the top right corner of the webpage. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>An Easy Way To Manipulate The Text</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
              <li>Upper Case To Lower Case Converter: Converts all your text to lower case.</li>
              <li>Lower Case To Upper Case Converter: Converts all your text to Upper case.</li>
              <li>Title Case Converter: Converts all your text to Title case i.e makes the first letter of every word capital.</li>
              <li>Alternating Case Converter: Converts all your text to Alternating case.</li>
              <li>Reverse: Reverse all your text.</li>
              <li>Cizer Cipher Converter: Encodes your text into Cizer Cipher. Here the the number of shifts is taken as 13.</li>
              <li>Ascii Converter: Encodes your text into ASCII.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className='container my-3'>
    <button onClick={darkMode} className="btn btn-primary">{setBtnText}</button>
  </div> */}
      </div>
      
    </>
  );
}
