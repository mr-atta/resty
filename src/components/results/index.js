import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

function Results(props) {
  console.log(props.data);
  return (
    <section>
      {props.data ? (
        <pre>
          {" "}
          {props.data ? (
            <JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty>
          ) : null}
          {props.data ? (
            <JSONPretty id="json-pretty" data={props.data.data}></JSONPretty>
          ) : null}
        </pre>
      ) : (
        <p>Loding</p>
      )}
    </section>
  );
}

export default Results;
