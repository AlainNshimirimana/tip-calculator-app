import React from "react";
import DollarSign from "./images/icon-dollar.svg";
import PersonIcon from "./images/icon-person.svg";
import "../css/Form.css";


const Form = ({bill, setBill, tip, setTip, people, setPeople, tipAmount, totalPerPerson}) => {
    var tipAmount = ((Number(setBill) * (Number(setTip)/100)) / Number(setPeople)).toFixed(2);
    var totalPerPerson = ((Number(setBill) / Number(setPeople)) + Number(tipAmount)).toFixed(2);
   return(
       <form className="form">
           <div className="form-container">
                <div className="form-input">
                    <label>Bill</label><br/>
                    <img src={DollarSign} alt="dollar-sign"/>
                    <input type="number" placeholder="0" value={bill} onChange={(e) => setBill(e.target.value)}/>
                </div>

                <div className="form-tip">
                    <label>Select Tip %</label><br/>
                    <button value={5} onClick={(e) => setTip(e.target.value)}>5%</button>
                    <button value={10} onClick={(e) => setTip(e.target.value)}>10%</button>
                    <button value={15} onClick={(e) => setTip(e.target.value)}>15%</button>
                    <button value={25} onClick={(e) => setTip(e.target.value)}>25%</button>
                    <button value={50} onClick={(e) => setTip(e.target.value)}>50%</button>
                    <input type="number" placeholder="Custom" value={tip} onChange={(e) => setTip(e.target.value)}/>
                </div>

                <div className="form-input">
                    <label>Number of People</label><br/>
                    <img src={PersonIcon} alt="person-icon"/>
                    <input type="number" placeholder="0" value={people} onChange={(e) => setPeople(e.target.value)}/>
                </div>
           </div>

           <div className="output-container">
                <div className="output">
                        <div className="output-text">
                            <p>Tip Amount</p>
                            <p className="output-subtext">/ person</p>
                            <h2>${tipAmount}</h2>
                        </div>
                    </div>
                    <div className="output">
                        <div className="output-text">
                            <p>Total</p>
                            <p className="output-subtext">/ person</p>
                            <h2 placeholder="0.00">${bill !== "" && people !== "" && people !== "0" ? totalPerPerson  : "0.00"}</h2>
                        </div>
                    </div>

                    <button>Reset</button>
           </div>
       </form>
   )
}

export default Form;