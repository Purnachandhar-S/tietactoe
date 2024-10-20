import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AppointmentItem(props) {
  const { appointmentDetails, toggleIsFavorite } = props;
  const { title, date, isFavorite, id } = appointmentDetails;

  const starImgUrl = isFavorite
    ? "https://assets.ccbp.in/frontend/react-js/filled-star-img.png"
    : "https://assets.ccbp.in/frontend/react-js/star-img.png";
  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id);
  };
  const [day, month, year] = date.split("-");
  const parsedDate = new Date(`${year}-${month}-${day}`);

  // Use Intl.DateTimeFormat for specific components (date and weekday separately)
  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const weekdayOptions = { weekday: "long" };

  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    parsedDate
  );
  const formattedWeekday = new Intl.DateTimeFormat(
    "en-US",
    weekdayOptions
  ).format(parsedDate);

  // Combine date and weekday in the desired order
  const finalFormattedDate = `${formattedDate}, ${formattedWeekday}`;

  return (
    <li>
      <div>
        <p>{title}</p>
        <p>{finalFormattedDate}</p>
      </div>
      <button type="button" onClick={onClickFavoriteIcon}>
        <img src={starImgUrl} alt="star" />{" "}
      </button>
    </li>
  );
}

function Appointments() {
  const [appList, setAppList] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [stared, setStared] = useState(false);
  const [staredList, setStaredList] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, date);
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
    };
    console.log(newAppointment);
    if (title !== "" && date !== "") {
      // setAppList((prevState) => [...prevState, newAppointment]);
      // setTitle("");
      // setDate("");
      const newArray = [...appList, newAppointment];
      setAppList(newArray);
      setDate("");
      setTitle("");
    } else {
      return console.error("enter data");
    }
  };

  const toggleIsFavorite = (id) => {
    const newArray = appList.map((each) => {
      if (id === each.id) {
        return { ...each, isFavorite: !each.isFavorite };
      }
      return each;
    });
    setAppList(newArray);
  };
  const getStared = () => {
    // showing only stared appoinements
    // we get stared by filtering
    const staredArray = appList.filter((each) => each.isFavorite === true);
    console.log(staredArray);
    // we show the list when we click button
    // toggle the button true false
    setStaredList(staredArray);
    setStared(!stared);
  };
  return (
    <div>
      <div>
        <h1>Add Appointment</h1>
        <form onSubmit={onSubmit}>
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <label htmlFor="Date">Date</label>
          <input
            type="Date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
            id="Date"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
          alt="appointments"
        />
      </div>

      <hr />
      <h1>Appointments</h1>
      <button onClick={getStared}>starred</button>
      <ul>
        {stared
          ? staredList.map((eachApp) => (
              <AppointmentItem
                key={eachApp.id}
                appointmentDetails={eachApp}
                toggleIsFavorite={toggleIsFavorite}
              />
            ))
          : appList.map((eachApp) => (
              <AppointmentItem
                key={eachApp.id}
                appointmentDetails={eachApp}
                toggleIsFavorite={toggleIsFavorite}
              />
            ))}
      </ul>
    </div>
  );
}
export default Appointments;
