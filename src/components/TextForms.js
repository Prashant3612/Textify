import React, { useState } from "react";
import Alert from "./Alert";

export default function TextForms(props) {

  
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#161616" : "#f5f5f5",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const reverseCase=()=>{
    let newText="";
    var sentence = text.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
        if(sentence[i].length!==0){
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
         
      }
   newText=sentence.join(" ");
    setText(newText);
  }

  const alternatingCase=()=>{
    let newText="";
    for(var i=0;i<text.length;i++){
      if(i%2===0){
        newText=newText+text.charAt(i).toLowerCase();
      }else{
        newText=newText+text.charAt(i).toUpperCase();
      }
      
    }setText(newText);
  }

  const clear=()=>{
    let newText="";
    setText(newText);
  }

  const copyClipboard = () => {
    navigator.clipboard.writeText(text);
    showAlert("Coppied to clipboard", "success");
  };


   

  const handleOnChange = (event) => {
    //This enables us to change the text in textarea.
    setText(event.target.value);
  };


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <textarea
          className="form-control "
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
            border: "1px solid",
            borderColor: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <Alert alert={alert} />
        <button style={myStyle}
          disabled={text.length === 0}
          className="mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button style={myStyle}
          disabled={text.length === 0}
          className="mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>

        <button style={myStyle}
          disabled={text.length === 0}
          className="mx-2 my-2"
          onClick={reverseCase}
        >
          Title Case
        </button>

        <button style={myStyle}
          disabled={text.length === 0}
          className="mx-2 my-2"
          onClick={alternatingCase}
        >
          aLtErNaTiNg cAsE
        </button>
        
        

        <button style={myStyle}
          disabled={text.length === 0}
          className="mx-2 my-2"
          onClick={copyClipboard}
        >
          Copy to Clipboard
          
        </button>
        

        <button style={myStyle}
          disabled={text.length === 0}
          className="mx-2 my-2"
          onClick={clear}
        >
          Clear
        </button>
        
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>
      </div>
    </>
  );
}
