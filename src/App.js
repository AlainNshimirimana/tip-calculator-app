import React, {useState} from "react";
import Form from "./components/Form";
import Title from "./components/images/logo.svg";
import "./css/App.css";
import "./css/Form.css";

function App(){
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalPerPerson, setTotal] = useState(0);
    return <div className="app-container">
    <header><img src={Title} alt="App Logo"/></header>
        <div className="main-container">
            <div className="form-container">
            <Form bill={bill} setBill={setBill} tip={tip} setTip={setTip} people={people} setPeople={setPeople}
             tipAmount={tipAmount} totalPerPerson={totalPerPerson} setTipAmount={setTipAmount} setTotal={setTotal}/>
            </div>
        </div>
    </div>
}

export default App;