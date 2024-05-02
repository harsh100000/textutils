import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextForm = (props) => {

    const copynotify = () => {
        toast.success('Copied to clipboard', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }

    function changefunc(e) {
        settext(e.target.value)
    }

    function touppercase() {
        let inputtext = text
        let outputtext = inputtext.toUpperCase()
        settext(outputtext)
    }

    function tolowercase() {
        let inputtext = text
        let outputtext = inputtext.toLowerCase()
        settext(outputtext)
    }

    function clearText() {
        let outputtext = ""
        settext(outputtext)
    }

    function copyText() {
        try {
            navigator.clipboard.writeText(text)
        } catch (error) {
            alert("Failed to copy")
        }
    }

    function removeExtraSpaces() {
        let newText = text.split(/[ ]+/)
        settext(newText.join(" "))
    }

    const [text, settext] = useState("");

    return (
        <>
            <div className="container my-3">
                <h1>Try TextUtils - Word Counter | Character Counter</h1>
                <div className="mb-3" >
                    <textarea id='box' value={text} onChange={changefunc} className="form-control" rows="8" style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(29, 30, 66)',
                        color: props.mode === 'light' ? 'black' : 'white',
                    }} ></textarea>
                </div>
                <button disabled={text.length===0} onClick={touppercase} type="button" className="btn btn-primary btn-sm mx-2 my-2">Convert to UpperCase</button>
                <button disabled={text.length===0} onClick={tolowercase} type="button" className="btn btn-primary btn-sm mx-2 my-2">Convert to LowerCase</button>
                <button disabled={text.length===0} onClick={clearText} type="button" className="btn btn-primary btn-sm mx-2 my-2">Clear Text</button>
                <button disabled={text.length===0} onClick={() => [copyText(), copynotify()]} type="button" className="btn btn-primary btn-sm mx-2 my-2">Copy Text</button>
                <button disabled={text.length===0} onClick={removeExtraSpaces} type="button" className="btn btn-primary btn-sm mx-2 my-2">Remove Extra Spaces</button>
            </div>
            <div className="container my-2">
                <h2>Text Summary</h2>
                {}
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } Words and {text.length} Characters</p>
                <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008).toFixed(2)} Min read</p>
            </div>
            <ToastContainer />
        </>
    )
}

export default TextForm