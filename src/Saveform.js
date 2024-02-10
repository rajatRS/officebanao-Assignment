import React from 'react';
import './Saveform.css';

function Saveform({onClose}) {
  return (
      <div className="saveform">
          <div className="saveformHeader">
              <h3>Workorder</h3>
              <button className="saveformClose" onClick={onClose}>X</button>
          </div>
          <div className="saveformInput">
            <div className="saveformInputClient">
                  <label htmlFor="input1">Client</label>
                  <br/>
                <input type="text" id="input1" placeholder="Client Name"/>
              </div>
            <div className="saveformInputCommencement">
                  <label htmlFor="input1">Date of Commencement</label>
                  <br/>
                <input type="text" id="input1" placeholder="dd/mm/yyyy"/>
              </div>
            <div className="saveformInputCompletion">
                  <label htmlFor="input1">Date of Completion</label>
                  <br></br>
                <input type="text" id="input1" placeholder="dd/mm/yyyy"/>
              </div>
            <div className="saveformInputRfqcode">
                  <label htmlFor="input1">RFQ Code</label>
                  <br></br>
                <input type="text" id="input1" placeholder="RFQ Code"/>
            </div>
          </div>
        <button className="saveformDone">Done</button>
    </div>
  )
}

export default Saveform