
import React, { useState } from 'react'
import './components.css'

export default function TextForm(props){

const upClick= ()=>{
    console.log("Uppercase was Clicked ");
    let newText = text.toUpperCase();
    setText(newText)
    setTimeout(function(){
        alert(" Changed To UpperCase !..");
        },200);

}

const downClick= ()=>{
    console.log("downClick was Clicked ");
    let newText = text.toLowerCase();
    setText(newText)
    setTimeout(function(){
        alert(" Changed To LowerCase !..")
    },200)
}

const Capitalized=() =>{

    const arr = text.split(". ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
 
    }
    const str34=arr.join(". ");

    let newText=str34;
    setText(newText);

    setTimeout(function(){
        alert(" Capitalized Every starting word in Sentence !..")
    },300)
}

const Clear= ()=>{
    console.log("clear was Clicked ");
    let newText =("");
    setText(newText)
    setTimeout(function(){
        alert("Text Cleared!", "success")
    },200)
}


const handleCopy= ()=>{
    console.log("Copy button was Clicked ");
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    setTimeout(function(){
        alert(" Text Copied !..")
    },200)
}

const clearSpace= ()=>{
    console.log("Clear Space button was clicked...");
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    setTimeout(function(){
        alert(" Extra Space Cleared !..")
    },200)

}


const OnChange= (event)=>{
    console.log(" Para Changed ");
    setText(event.target.value);
}

const [text, setText]=useState("Type.....");


return (
<>
  <div className='container my-4' >
      <div className="TextForm-box" style={{color: props.mode==='dark'?'white': 'black'}}>
            <label for="exampleFormControlTextarea1">{props.heading}  </label><br />

            <textarea class="form-control my-3" id="myBox" value={text} onChange={OnChange} rows="9" ></textarea>
      </div>
          <button className="btn btn-primary" onClick={Clear}>Clear</button>
          <button className="btn btn-primary mx-3" onClick={upClick}>Convert to Upper Case</button>
          <button className="btn btn-primary" onClick={downClick}>Convert to Lower Case</button>
          <button className="btn btn-primary mx-3" onClick={Capitalized}>Capitalize First Letter</button>
          <button className="btn btn-primary mx" onClick={clearSpace}>Clear Extra Space</button>
          <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>

          <div class="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
            </button>
            <div class="dropdown-menu">
                <button className="btn btn-primary mx-3" onClick={Capitalized}>Capitalize First Letter</button>


            </div>
          </div>


          <br/><br/>
  </div>

  <div className="text-summary my-4" style={{color :props.mode==='dark'?'white' :'black'} } >
        <p>Your Text Summary : </p>
        <p>Words ={text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  &nbsp;&nbsp;&nbsp; Characters = { text.length }</p>
  </div>

</>
  )

}
