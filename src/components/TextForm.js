import React, { useState } from 'react'


function TextForm(props) {
    const handleUpClick = () => {
        console.log('Upeercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLoClick = () => {
        console.log('Upeercase was clicked' + text)
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }



    const handleOnChange = (e) => {
        console.log('Upeercase was clicked')
        setText(e.target.value)
    }

    const [text, setText] = useState('');
    // text = "newt text"; // Wrong way to change the state
    //setText ("new text");  //Correct way to change the state
    return (
        <>        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters </p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>


    )
}

export default TextForm
