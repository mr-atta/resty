import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import './results.scss'

function Results(props) {
  console.log(props.data);
  return (
    <section>
      {props.data ? (
        <pre>
          {" "}
          {props.data ? (
            <div>
              <div className='titel'>Headers</div>
            <JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty>
            </div>
          ) : null}
          {props.data ? (
            <div>
              <div className='titel'>Data</div>
            <JSONPretty id="json-pretty" data={props.data.data}></JSONPretty>
            </div>
          ) : null}
        </pre>
      ) : (
        <div id='Loding'><span id='Loding-text'>Loding ...</span></div>
      )}
    </section>
  );
}

export default Results;
