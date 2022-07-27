import Button from "./Button.js";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(()=> {
    console.log("Created :)");
    return ()=>console.log("destroyed :(")//called "cleanup function"
  },[])
  return (<h1>Hello Luda</h1>);
}
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onChange2 = ()=>setShowing((prev) => !prev);

  
  console.log("i run all the time");
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(()=> {
      console.log("i run when keyword changes");
  }, [keyword]);
  useEffect(()=> {
      console.log("i run when counter changes");
  }, [counter]);
  useEffect(()=> {
      console.log("i run when counter && keyword change");
  }, [counter, keyword]);

  return (
    <div className="App">
      <h1 className={styles.title}>hello world</h1>
      <Button text="click me" />
      <h1>{counter}</h1>
      <button onClick={onClick}>higher</button>
      <br/><input
      onChange={onChange}
      value={keyword}
      type="text"
      ></input>
      <br/>
      {showing ? <Hello/>:null}
      <button onClick={onChange2}>{showing? "Hide":"Show"}</button>
    </div>
  );
}

export default App;
