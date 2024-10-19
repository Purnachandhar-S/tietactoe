import React from "react";
function AppointmentItem() {}

function Appointments() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Add Appointment</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" />
        <label>Date</label>
        <input
          type="date"
          onChange={(event) => console.log(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default Appointments;
