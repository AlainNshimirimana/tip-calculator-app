import React from "react";

const Output = ({tip, people, bill, resetCalc, reset}) => {
    return (
        <div className="output-container">
            <div className="output">
                <div className="output-text">
                    <p>Tip Amount</p>
                    <p className="output-subtext">/ person</p>
                </div>
                <h2>${tip}</h2>
            </div>

            <div className="output">
                <div className="output-text">
                    <p>Total</p>
                    <p className="output-subtext">/ person</p>
                </div>
                <h2>${bill}</h2>
            </div>

            <button>Reset</button>
        </div>
    )
}

export default Output;