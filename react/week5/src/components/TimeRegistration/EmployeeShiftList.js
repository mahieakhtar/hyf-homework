import React from 'react';

var firebase = require("firebase/app");
require("firebase/auth");

function EmployeeShiftList({Employeename ,Starttime ,Endtime}){

return(
        <div className='employee-list'>

            <p>Employee Name:{Employeename}</p>
            <p>Start Time:{Starttime}</p>
            <p>End Time:{Endtime}</p>

    </div>
);
}
export default EmployeeShiftList;