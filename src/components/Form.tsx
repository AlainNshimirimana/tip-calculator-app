import React, { useEffect, useState } from 'react';
import '../css/Form.css';
import DollarSign from './images/icon-dollar.svg';
import PersonIcon from './images/icon-person.svg';

interface FormProps{
  tipAmount: number;
  setTipAmount: any;
  totalPerPerson: number;
  setTotal: any;

}
function Form({ setTipAmount, setTotal, tipAmount, totalPerPerson } : FormProps) {
  const [bill, setBill] = useState("0");
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState("0");
  // set type to number

  const tipHandler = (e:any) => {
    e.preventDefault();
    setTip(e.target.value);
  };
  function newTipAmount() {
    const tipAmount =
      (Number(bill) * (Number(tip) / 100)) / Number(people);
    setTipAmount(tipAmount || 0);
  }
  function newTotal() {
      const totalPerPerson = Number(bill) / Number(people) + Number(tipAmount);
    setTotal(totalPerPerson || 0);
  }

  // Every time that anything that is on dependency array updates
  // It's gonna run
  useEffect(() => {
    newTipAmount();
    newTotal();
  }, [tip, bill, people, newTipAmount, newTotal]);

  return (
    <form className="form">
      <div className="form-container">
        <div className="form-input">
          <label>Bill</label>
          <div className="input-signs">
            <img alt="dollar-sign" src={DollarSign} />
            <input
              onChange={(e) => setBill(e.target.value)}
              placeholder="0"
              type="number"
              value={bill}
            />
          </div>
        </div>

        <div className="form-tip">
          <label>Select Tip %</label>
          <br />
          <button onClick={tipHandler} value={5} id="btn">
            5%
          </button>
          <button onClick={tipHandler} value={10} id="btn">
            10%
          </button>
          <button onClick={tipHandler} value={15} id="btn">
            15%
          </button>
          <button onClick={tipHandler} value={25} id="btn">
            25%
          </button>
          <button onClick={tipHandler} value={50} id="btn">
            50%
          </button>
          <input
            onChange={(e) => setTip(+e.target.value)}
            placeholder="Custom"
            type="number"
            value={tip}
          />
        </div>

        <div className="form-input">
          <label>Number of People</label>
          <div className="input-signs">
            <img alt="person-icon" src={PersonIcon} />
            <input
              onChange={(e) => setPeople(e.target.value)}
              placeholder="0"
              type="number"
              value={people}
            />
          </div>
        </div>
      </div>

      <div className="output-container">
        <div className="output">
          <div className="output-text">
            <p>Tip Amount</p>
            <p className="output-subtext">/ person</p>
            <h2>${tipAmount.toFixed(2)}</h2>
          </div>
        </div>
        <div className="output">
          <div className="output-text">
            <p>Total</p>
            <p className="output-subtext">/ person</p>
            <h2>${totalPerPerson.toFixed(2)}</h2>
          </div>
        </div>

        <button>Reset</button>
      </div>
    </form>
  );
}

export default Form;
