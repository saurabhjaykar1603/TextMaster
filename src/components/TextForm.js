import React from 'react'

function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">

                <textarea class="form-control" id="myBox" rows="8"></textarea>
            </div>
        </div>

    )
}

export default TextForm
