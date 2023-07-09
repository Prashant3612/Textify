import React ,{useState} from 'react'

export default function TextGenerator(props) {


  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#161616" : "#f5f5f5",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };

const Reverse=()=>{
 
    let newText="";
    for(var i=0;i<texts.length;i++){
        newText=texts.charAt(i)+newText;
    }
          
        setText(newText);
}

    

    const CizerCipher=()=>{
        let newText="";
        for(var i=0;i<texts.length;i++){
          {
            let char = texts[i];
            if (char.toUpperCase(texts[i]))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) + 13-65) % 26 + 65);
                newText += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + 13-97) % 26 + 97);
                newText += ch;
            }
        }
      }setText(newText);
          
       
       
    }

    const Ascii=()=>{
        let newText="";
        for(var i=0;i<texts.length;i++){
            newText=newText+texts.charCodeAt(i)
        //   console.log(newText);
          
        }setText(newText);
    }

    const Copy=()=>{
      navigator.clipboard.writeText(text);
        
    }

    const clear=()=>{
      let newText="";
      setText(newText);
      setText2(newText);
    }
    
    const handleOnChange = (event) => {
        //This enables us to change the text in textarea.
        setText2(event.target.value);
        
      };
    

    const[text,setText]=useState("");
    const[texts,setText2]=useState("");
    
 
  return (
    <>
    <div className="row" >
        <h1 className="mb-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>Text-Generator</h1>
      <div className="form-group col-lg-6 "style={{margin:"20px 0 0 0"}}>
      {/* <label for="exampleFormControlSelect2">Input</label> */}
      <textarea className="form-control" id="exampleFormControlTextarea1" value={texts} onChange={handleOnChange} rows="8"  style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
            border: "1px solid",
            borderColor: props.mode === "dark" ? "white" : "black",}}
          ></textarea>

          <div style={{margin:"30px 20px 0 0"}}>
      <button className='btn-primary 'onClick={Reverse} style={myStyle}> Reverse</button>
   
    <button className='btn-primary mx-3' onClick={CizerCipher} style={myStyle} disabled={texts.length === 0}>Cizer Cipher</button>

    <button className='btn-primary ' onClick={Ascii} style={myStyle} disabled={texts.length === 0} >Convert to ASCII</button>
    </div>
      </div>
      <div className="form-group col-lg-6 " style={{margin:"20px 0px 0 0"}}>
      {/* <label for="exampleFormControlSelect2">Output</label> */}
      <textarea className="form-control"  id="exampleFormControlTextarea1" value={text} rows="8"  style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
            border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
          }} ></textarea>
      <div style={{margin:"30px 20px 0 0"}}>
      <button className='btn-primary ' onClick={clear} style={myStyle} disabled={texts.length === 0}>Clear Text</button>
    <button className='btn-primary mx-3 ' onClick={Copy} style={myStyle} disabled={texts.length === 0}>Copy to Clipboard</button>
    </div>
    
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <p>{texts.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {texts.length} characters
        </p>
      </div>
      
    </div>
    
    </>
  )
}
