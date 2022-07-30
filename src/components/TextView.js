import React, {useState} from 'react'

export default function TextView(props) {
const upperCaseClick = () =>
{
  console.log("Upper Case CLicked!");
  let newText = text.toUpperCase();
  setText(newText);
  props.showSetAlert("Upper Case Done!","primary");
}
const handlecChange = (event) =>
{
  console.log("State Changed");
  setText(event.target.value)
}
const lowerCaseClick = () =>
{
  console.log("Small clicked!");
  let newText = text.toLowerCase();
  setText(newText);
  props.showSetAlert("Small Case Done!","primary");
}
const reverseCaseClick = () =>
{
  console.log("Reverse clicked!");
  let newText = text.split("").reverse().join("");
  setText(newText);
  props.showSetAlert("Reverse Case Done!","primary");
}

const [text,setText] = useState('');

  return (

    <div className='container my-3' ><h1>{props.heading} </h1>
     <div className="form-group ">
    <textarea className="form-control" onChange={handlecChange}  value={text} style={{backgroundColor:props.modem=== 'dark' ? '#042743':'white', color:props.modem==='dark' ? 'white':'black' }} id="exampleFormControlTextarea1" rows="3"></textarea>
    <button className={`btn btn-${props.modem==='dark' ? 'primary':'secondary'} mx-3 my-3`} onClick={upperCaseClick}>Upper Case</button>
    <button className={`btn btn-${props.modem==='dark' ? 'primary':'secondary'} mx-3 my-3`} onClick={lowerCaseClick}>Lower Case</button>
    <button className={`btn btn-${props.modem==='dark' ? 'primary':'secondary'} mx-3 my-3`} onClick={reverseCaseClick}>Reverse Case</button>
  </div>
  <div><h3>Your Text Summary </h3>
<p>{text.length==0 ? "0" : text.split(" ").length} words and {text.length} characters</p>
<p>{0.08 * text.split(" ").length} minutes is required time to read the paragraph </p>
  <h3>Preview</h3>
  <p>{text.length>0? text: "Enter something to preview!"}</p>
  
  </div>
  </div>

  )
}
