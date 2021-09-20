import React from "react";
import { useState } from 'react';
import "./form.scss";

function Form(props) {

  const [methodSt, setMethodSt] = useState({});

    const handelMethods= async (e)=>{
     await setMethodSt(e.target.value);
      //  console.log(methodSt);
    } 

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      method: e.target.methods.value, 
      url: e.target.url.value,
      info:e.target.info.value,
    };
    //
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>

        {/* <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label> */}

        {/* converted to lest  */}
        <select name="methods" className="methods"  onClick={handelMethods} >
       
       <option value="get" id="get">GET</option>
       <option value="post" id="post">POST</option>
       <option value="put" id="put">PUT</option>
       <option value="delete" id="delete">DELETE</option>

        </select>

        <label>
          <span>INFO: </span>
          <input name="info" type='text'  id='info' defaultValue='{ add your info here }' />
        </label>

      </form>
    </>
  );
}

export default Form;
