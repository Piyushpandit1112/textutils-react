import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick  = () =>{
        // console.log("Upper Case was clicked"+text);
      
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLwrClick  = () =>{
        // console.log("Upper Case was clicked"+text);
      
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }

    const handleTrimClick = () =>{
      let newText=text.trim();
      setText(newText);
      props.showAlert("Text has been trimmed!","success");
    }
    

    const reverseString=()=>{
      let newText=text.split('').reverse().join('');
      setText(newText);
      props.showAlert("Text is reversed!","success");
    }

    const clearText  = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared!","success");
    }

    const copyText = () =>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied the text!","success");
    }

    //text are only written because of onchange
    const handleOnChange  = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const[text,setText]=useState("");
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>{props.heading}</h2>
          <div className="mb-3">
          <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'gray':'white' ,color:props.mode==='dark'?'white':'black'}} value= {text} onChange={handleOnChange} rows="8" placeholder="Enter your text"></textarea>
          </div>
          <div className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</div>
          <div className="btn btn-primary mx-3" onClick={handleLwrClick}>Convert to Lowercase</div>
          <div className="btn btn-primary mx-2" onClick={clearText}>Clear Text</div>
          <div className="btn btn-primary mx-2" onClick={handleTrimClick}>Trim Text</div>
          <div className="btn btn-primary mx-2" onClick={reverseString}>Reverse Text</div>
          <div className="btn btn-primary mx-2" onClick={copyText}>Copy Text</div>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p><strong>{text.split(" ").length} words and {text.length} characters</strong></p>
        <p><strong>{0.008 * text.split(" ").length} minutes to read</strong></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  )
}
