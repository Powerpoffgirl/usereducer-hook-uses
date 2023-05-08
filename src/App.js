import "./App.css";
import { useState } from "react";
// import { useReducer } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return { ...state, count: state.count + 1 };
  //     case "toggleShowText":
  //       return { ...state, showText: !state.showText };
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });

  return (
    <div className="App">
      {/* <h1>{state.count}</h1> */}
      <h1>{count}</h1>
      <button
        // onClick={() => {
        //   dispatch({ type: "INCREMENT" });
        //   dispatch({ type: "toggleShowText" });
        // }}
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>
      {/* {state.showText && <p>This is a text.</p>} */}
      {showText && <p>This is a text.</p>}
    </div>
  );
}

export default App;
