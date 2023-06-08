import React, { useState } from 'react'


function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('Upeercase was clicked'+text)
        let newText = text.toUpperCase();
        setText(newText)
    }


    const handleOnChange = (e)=>{
        console.log('Upeercase was clicked')
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter Text here');
    // text = "newt text"; // Wrong way to change the state
    //setText ("new text");  //Correct way to change the state
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>

    )
}

export default TextForm
