import React, {useState}  from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking","success");
      }
    const handleMyCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied","success");
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
    }
    const keepbtnprimary = (word) => {
        if (word === 'light' || word === 'dark') {
            return "primary";
        }
        else{
            return props.mode;
        }
    }
    return (
        <div>
            <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h4>Enter Text Here</h4>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#3d3d3d':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
                <button disabled={text.length===0} type="button" className={`btn btn-${keepbtnprimary(props.mode)} my-3 mx-2`} onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.length===0} type="button" className={`btn btn-${keepbtnprimary(props.mode)} my-3 mx-2`} onClick={handleLoClick}>Convert To LowerCase</button>
                <button disabled={text.length===0} type="button" className={`btn btn-${keepbtnprimary(props.mode)} my-3 mx-2`} onClick={handleClClick}>Clear Text</button>
                <button disabled={text.length===0} type="submit" onClick={speak} className={`btn btn-${keepbtnprimary(props.mode)} mx-2 my-2`}>Speak</button>
                <button disabled={text.length===0} type="button" className={`btn btn-${keepbtnprimary(props.mode)} my-3 mx-2`} onClick={handleMyCopy}>Copy Text</button>
                <button disabled={text.length===0} type="button" className={`btn btn-${keepbtnprimary(props.mode)} my-3 mx-2`} onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summery</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } Words and {text.length} Characters</p>
                <p>This text is readable in {text.lenght=== '0'?'0':0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to Preview'}</p>
            </div>
        </div>
    )
}
