import React from "react";
import DollarSign from "./images/icon-dollar.svg";
import PersonIcon from "./images/icon-person.svg";
import "../css/Form.css";


const Form = ({bill, setBill, tip, setTip, people, setPeople, tipAmount, totalPerPerson, setTipAmount, setTotal}) => {
    //tipAmount = (Number(bill) * (Number(tip)/100)) / Number(people);
    //totalPerPerson = (Number(bill) / Number(people)) + Number(tipAmount);
    const tipHandler = (e) => {
        e.preventDefault();
        setTip(e.target.value)
    }
function newTipAmount(){
    setTipAmount((Number(bill) * (Number(tip)/100)) / Number(people));
}
function newTotal(){
    setTotal((Number(bill) / Number(people)) + Number(tipAmount));
}
   return(
       <form className="form">
           <div className="form-container">
                <div className="form-input">
                    <label>Bill</label>
                    <div className="input-signs">
                        <img src={DollarSign} alt="dollar-sign"/>
                        <input type="number" placeholder="0" value={bill} onChange={(e) => setBill(e.target.value)}/>
                    </div>
                </div>

                <div className="form-tip">
                    <label>Select Tip %</label><br/>
                    <button value={5} onClick={tipHandler}>5%</button>
                    <button value={10} onClick={tipHandler}>10%</button>
                    <button value={15} onClick={tipHandler}>15%</button>
                    <button value={25} onClick={tipHandler}>25%</button>
                    <button value={50} onClick={tipHandler}>50%</button>
                    <input type="number" placeholder="Custom" value={tip} onChange={(e) => setTip(e.target.value)}/>
                </div>

                <div className="form-input">
                    <label>Number of People</label>
                    <div className="input-signs">
                        <img src={PersonIcon} alt="person-icon"/>
                        <input type="number" placeholder="0" value={people} onChange={(e) => setPeople(e.target.value)}/>
                    </div>
                </div>
           </div>

           <div className="output-container">
                <div className="output">
                        <div className="output-text">
                            <p>Tip Amount</p>
                            <p className="output-subtext">/ person</p>
                            <h2 onChange={newTipAmount()}>${tipAmount.toFixed(2)}</h2>
                        </div>
                    </div>
                    <div className="output">
                        <div className="output-text">
                            <p>Total</p>
                            <p className="output-subtext">/ person</p>
                            <h2 onChange={newTotal()}>${totalPerPerson.toFixed(2)}</h2>
                        </div>
                    </div>

                    <button>Reset</button>
           </div>
       </form>
   )
}

export default Form;