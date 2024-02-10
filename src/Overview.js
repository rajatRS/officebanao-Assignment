import React, { useState } from 'react';
import './Overview.css';

function Overview() {
    const [selectAll, setSelectAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState([
    { id: 1, checked: false, data: ["Civil 1", "567.80", "₹ 29,86,792","+"] },
    { id: 2, checked: false, data: ["Civil 2", "567.80", "₹ 29,86,792","+"] },
    { id: 3, checked: false, data: ["Civil 3", "567.80", "₹ 29,86,792","+"] },
    { id: 4, checked: false, data: ["Civil 4", "567.80", "₹ 29,86,792","+"] },
    { id: 5, checked: false, data: ["Civil 5", "567.80", "₹ 29,86,792","+"] },
    ]);

    const handleCheckboxChange = (id) => {
        const updateCheckboxes = checkboxes.map(checkbox => checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox);
        setCheckboxes(updateCheckboxes);
        setSelectAll(updateCheckboxes.every(checkbox => checkbox.checked));
    };

    const handleSelectAllChange = () => {
        const updateCheckboxes = checkboxes.map(checkbox => ({ ...checkbox, checked: !selectAll }));
        setCheckboxes(updateCheckboxes);
        setSelectAll(!selectAll);
    }

    return (
        <div className="overview">
        <div className="overviewTable">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input
                                    type="checkbox"
                                    className="overviewTableInput"
                                checked={selectAll}
                                onChange={handleSelectAllChange}
                            />
                        </th>
                        <th>Packages</th>
                        <th>Rate</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {checkboxes.map(checkbox => (
                        <tr key={checkbox.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={checkbox.checked}
                                    className="overviewTableInput"
                                    onChange={() => handleCheckboxChange(checkbox.id)}
                                />
                            </td>
                            {checkbox.data.map((cellData, index) => (
                                <td key={index}>{cellData}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Overview