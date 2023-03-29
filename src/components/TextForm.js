import React, { Component } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  // state
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    setText("you have clicked on uppercase button");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
    
  
  };

  const handleLoClick = () => {
    console.log("lowercase was clicked");
    setText("you have clicked on Lowercase button");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lppercase","success")
  };
  const handleClearText = () => {
    console.log("clear text was clicked");
    setText("you have clicked on Clear button");
    const newText = " ";
    setText(newText);
    props.showAlert("clear","success")
  };

  // CapitalizeFirstText 
  const handleCapitalizeFirstText = () => {
    console.log("Capitalize First Text was clicked");
    setText("you have clicked on UpperLower button");
    let lowercase=text.toLowerCase();
    let words= text.split(" ");
    let newWords= words.map((word)=>{
   
         return word.charAt(0).toUpperCase()+word.slice(1);

    }); 
    let newText = newWords.join(" ");

   // const newText = text.toLowerCase(); 
    setText(newText);
  };

  // extract e-mails

  let extractEmails = () => {
    let collectedEmail = text.match(/[\w\d.-]+@[\w\d.-]+[\w\d.-]/);
    console.log(collectedEmail);
    setText(collectedEmail);
  };  
 // replace words

//   const findValue=(event)=>
//   {
//     setText(event.target.value);
//   }
//   const replaceValue=(event)=>
//   {
//     setText(event.target.value);
//   }

   

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  
  
  const [text, setText] = useState("Enter text here");
 
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          {/* <label for="Textarea" className="form-label">Enter your Query</label> */}
          <h1>{props.heading}</h1>  
          {/* style={{backgroundColor:props.mode==='dark'?'blue':'white',color:props.mode==='light'?'pink':'blue'}}> */}

          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}    // here one curly brace is for js and the other is for objects
            style={{backgroundColor:props.mode==='dark'?'#042743':'',color:props.mode==='dark'?'':'#042743'}}
            id="myBox"
            rows="8"
           
          ></textarea>
          <button 
            type="button"
            className="btn btn-primary my-3"
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={handleLoClick}
          >
            Convert to lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={handleCapitalizeFirstText}
          >
           Capitalize First Text
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={extractEmails}
          >
           extract Email 
          </button>
        </div>
      </div>
      <div className="container text-light" >
        <h5 style={{color:props.mode==='dark'?'white':'black'}}>Your text summary</h5>
        <p style={{color:props.mode==='dark'?'white':'black'}}>
          {/* {text.split(" ").length} words and {text.length} characters       */}
          {text.trim().length === 0 ? 0 : text.trim().split(" ").length} words and {text.length} characters   
        </p>
        <h6 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h6>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter some text to preview here"}</p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
