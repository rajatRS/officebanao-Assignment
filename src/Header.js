import React, { useState } from 'react';
import Overview from './Overview';
import Others from './Others';
import Saveform from './Saveform';
import './Header.css';

function Header() {

    const [showOverview, setShowOverview] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleClickOverview = () => {
        setShowOverview(true);
        setShowOthers(false);
    }

    const handleClickOthers = () => {
        setShowOthers(true);
        setShowOverview(false);
    }

    const toggleForm = () => {
        setShowForm(!showForm);
        console.log("Clicked save");
    }

    const closeForm = () => {
    setShowForm(false);
  };


  return (
      <div className="header">
          <div className="headerDivison">
                <div className="headerTopRow">
                    <h2>Create Workorder</h2>
                    <button className="headerTopRowSave" onClick={toggleForm}>Save</button>
                </div>
                <div className="headerBottomRow">
                    <button className="headerBottomRowOverview" onClick={handleClickOverview}>Overview</button>
                    <button className="headerBottomRowOthers" onClick={handleClickOthers}>Others</button>
                </div>
          </div>
          <div className={`form-wrapper ${showForm ? 'show-form' : ''}`}>
                {showForm && <Saveform onClose={closeForm} />}
            </div>
        {showOverview && <Overview />}
        {showOthers && <Others />}
      </div>
  )
}

export default Header;