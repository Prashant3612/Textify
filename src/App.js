
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import TextGenerator from "./components/TextGenerator";
import Footer from "./components/FooterFile";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#161616";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
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

  return (
    <>
      {" "}
      <Router>
        {/* <div className="container my-8 "style={{Margin:"0 0 0 0"}}> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        {/* </div> */}
        <Alert alert={alert} />
        <div className="container my-3">
          

          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForms
                  heading="Try Textify- Control the text, the way you want"
                  mode={mode}
                />
              }
            />
            <Route exact path="/About" element={<About mode={mode} />} />
            {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
<Route exact path="/TextGenerator" element={<TextGenerator mode={mode}/>}/>
          
          </Routes>

          {/* <About/> */}
        </div>
        <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App;
