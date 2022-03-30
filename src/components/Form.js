import React from "react";

const Form = ({bill, setBill, tip, setTip, people, setPeople}) => {
   return(
       <form className="form">
           <div className="form-input">
               <label>Bill</label><br/>
               <img src="./images/icon-dollar.svg" alt="dollar-sign"/>
               <input type="number" placeholder="0" value={bill} onChange={(e) => setBill(e.target.value)}/>
           </div>

           <div className="form-tip">
               
           </div>

           <div className="form-input">
               <label>Number of People</label><br/>
               <img src="./images/icon-person.svg" alt="person-icon"/>
               <input type="number" placeholder="0" value={people} onChange={(e) => setPeople(e.target.value)}/>
           </div>
       </form>
   )
}

export default Form;