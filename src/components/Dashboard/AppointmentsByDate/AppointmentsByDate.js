import React from 'react';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h4>Appointments: {appointments.length}</h4>
            {
                appointments.map(app => <li key = {app._id}>{app.name}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;