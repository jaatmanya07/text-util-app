import React, { useState } from 'react'

export default function TextForm(props) {
    const[text, Settext]=useState("");
    const clickuphandler=(()=>{
        let newText=text.toUpperCase();
        Settext(newText)
        props.alert("UpperCase is Done", "success");
    })
    const clicklowhandler=(()=>{
        let newText=text.toLowerCase();
        Settext(newText)
        props.alert("LowerCase is Done", "success");
    })

    const clickclearhandler=(()=>{
        Settext("")
        props.alert("Cleaning is Done", "success");
    })

    const clicktitlehandler=(()=>{
        let newtext=text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        Settext(newtext)
        props.alert("TitleCase is Done", "success");

    })
    
    const clickCopyhandler=(()=>{
        navigator.clipboard.writeText(text);
        props.alert("Copy is Done", "success");

    })
    
    const clickremovehandler=(()=>{
        let newText =text.split(/[ ]+/);
        Settext(newText.join(" "))
        props.alert("Remove is Done", "success");
    })

    const clickarea=((event)=>{
        Settext(event.target.value)
    })
    return (
        <>
            <div className='container' style={{color: props.mode==='light'? 'black': 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"  style={{backgroundColor: props.mode==='dark'? 'rgb(27 84 136)': 'white', color: props.mode==='light'? 'black': 'white'}} value={text} onChange={clickarea} id="textArea" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={clickuphandler}>Convert to Upper Case</button>
                
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clicklowhandler}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clicktitlehandler}>Title Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickCopyhandler}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickremovehandler}>Remove Extra Space</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickclearhandler}>Clear Text</button>
                
            </div>
            <div className="constiner2 my-3" style={{color: props.mode==='light'? 'black': 'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length } Word and {text.length} Character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview here"}</p>
            </div>
        </>
        
    )
}
