import React from "react";
import DollarSign from "./images/icon-dollar.svg";
import PersonIcon from "./images/icon-person.svg";


const Form = ({bill, setBill, tip, setTip, people, setPeople}) => {
   return(
       <form className="form">
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
       </form>
   )
}

export default Form;