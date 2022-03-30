import React from "react";
import DollarSign from "./images/icon-dollar.svg";
import PersonIcon from "./images/icon-person.svg";

const Form = ({bill, setBill, tip, setTip, people, setPeople}) => {
   return(
       <form className="form">
           <div className="form-input">
               <label>Bill</label><br/>
               <img src={DollarSign}/>
               <input type="number" placeholder="0" value={bill} onChange={(e) => setBill(e.target.value)}/>
           </div>

           <div className="form-tip">
               
           </div>

           <div className="form-input">
               <label>Bill</label><br/>
               <img src={PersonIcon}/>
               <input type="number" placeholder="0" value={people} onChange={(e) => setPeople(e.target.value)}/>
           </div>
       </form>
   )
}

export default Form;