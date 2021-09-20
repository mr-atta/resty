import React from "react";
import { useState } from "react";
import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...

// What is pretty print in JSON?
// Pretty printing is a form of stylistic formatting including indentation and colouring.
// var str = JSON.stringify(obj, null, 2); // spacing level = 2

import axios from "axios";

import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

function App() {
  //
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  //

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }

  const callApi = async (requestParams) => {
    // // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     { name: "fake thing 1", url: "http://fakethings.com/1" },
    //     { name: "fake thing 2", url: "http://fakethings.com/2" },
    //   ],
    // };
    // this.setState({ data, requestParams });

    // let str = JSON.stringify(obj, null, 2); // spacing level = 2

    console.log(requestParams.method);
    try {
      if (requestParams.method == "get") {
        await axios.get(`${requestParams.url}`).then((res) => {
          setData(res);
          // console.log(data);
          setRequestParams(requestParams);
        });
      }
    } catch (error) {
      setData(error);
    }

    try {
      if (requestParams.method == "post") {
        await axios.post(`${requestParams.url}`).then((res) => {
          setData(res);
          setRequestParams(requestParams);
        });
      }
    } catch (error) {
      setData(error);
    }

    try {
      if (requestParams.method == "put") {
        await axios.put(`${requestParams.url}`).then((res) => {
          setData(res);
          setRequestParams(requestParams);
        });
      }
    } catch (error) {
      setData(error);
    }

    try {
      if (requestParams.method == "delete") {
        await axios.delete(`${requestParams.url}`).then((res) => {
          setData(res);
          setRequestParams(requestParams);
        });
      }
    } catch (error) {
      setData(error);
    }

    //
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <div>INFO : {requestParams.info}</div>

      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
