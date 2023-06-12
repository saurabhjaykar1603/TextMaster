import React, { useState } from 'react'


function TextForm(props) {
    const handleUpClick = () => {
        console.log('Upeercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {

        setText('');
    }



    const handleOnChange = (e) => {
        console.log('Upeercase was clicked')
        setText(e.target.value)
    }

    // copy text func 
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // remove Extra Spaces 
    const handleExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    // text = "newt text"; // Wrong way to change the state
    //setText ("new text");  //Correct way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ baclgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'
                 }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters </p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in the textbox above to preview it'}</p>
            </div>
        </>


    )
}

export default TextForm
