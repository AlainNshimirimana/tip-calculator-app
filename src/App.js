import React, {useState} from "react";
import Form from "./components/Form";
import Title from "./components/images/logo.svg";
import "./css/App.css";
import "./css/Form.css";

function App(){
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState(0);
    const [tipAmount] = useState(0);
    const [totalPerPerson] = useState(0);
    return <div className="app-container">
    <header><img src={Title}/></header>
        <div className="main-container">
            <div className="form-container">
            <Form setBill={setBill} setTip={setTip} setPeople={setPeople} tipAmount={tipAmount} totalPerPerson={totalPerPerson}/>
            </div>
        </div>
    </div>
}

export default App;