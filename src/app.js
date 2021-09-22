import React from "react";
import { useState, useEffect, useReducer } from "react";
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
import History from "./components/history/history";

//
const initialState = [];

function reducer(history = initialState, action) {
  switch (action.type) {
    case "ADD_HISTORY":
      history = [...history, action.payload];
      return history;
    default:
      return history;
  }
}

function action(requestParams, data) {
  console.log("data................." + data);
  return {
    type: "ADD_HISTORY",
    payload: {
      method: requestParams.method,
      url: requestParams.url,
      info: requestParams.info,
      data: data,
    },
  };
}
//

function App() {
  //
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [history, dispatch] = useReducer(reducer, initialState);
  //

  useEffect(() => {
    const getData = async () => {
      if (requestParams.url) {
        try {
          if (requestParams.method == "get") {
            await axios.get(`${requestParams.url}`).then((res) => {
              setData(res);

              // setData(data); // re set the data

              dispatch(action(requestParams, res));

              //
              console.log(res.data);
              console.log(requestParams);
              //

              // setRequestParams(requestParams);
            });
          }
        } catch (error) {
          setData(error);
        }

        try {
          if (requestParams.method == "post") {
            await axios.post(`${requestParams.url}`).then((res) => {
              setData(res);
              // setRequestParams(requestParams);
            });
          }
        } catch (error) {
          setData(error);
        }

        try {
          if (requestParams.method == "put") {
            await axios.put(`${requestParams.url}`).then((res) => {
              setData(res);
              // setRequestParams(requestParams);
            });
          }
        } catch (error) {
          setData(error);
        }

        try {
          if (requestParams.method == "delete") {
            await axios.delete(`${requestParams.url}`).then((res) => {
              setData(res);
              // setRequestParams(requestParams);
            });
          }
        } catch (error) {
          setData(error);
        }

        //
      }
    };
    getData();
  }, [requestParams]);

  const callApi = async (requestParams) => {
    //

    // console.log(requestParams.method);

    setRequestParams(requestParams);

    // console.log(data);
  };
  function historyfun(result) {
    setData(result);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <div>Body : {requestParams.info}</div>

      <Form handleApiCall={callApi} />

      <div>The History </div>
      <History historyfun={historyfun} history={history} />

      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
