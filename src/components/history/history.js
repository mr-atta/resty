//

function History(props) {
  // onClick
  function handleResult(data) {
    // console.log(data);
    props.historyfun(data);
  }

  console.log(props.history);

  return (
    <>
      <ul>
        {props.history.map((ele, i) => {
          return (
            <li key={i}>
              <div>
                <span>Method: {ele.method} </span>
                <br />
                <span>URL: {ele.url} </span>

                <button onClick={() => handleResult(ele)}>Show Request</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default History;
