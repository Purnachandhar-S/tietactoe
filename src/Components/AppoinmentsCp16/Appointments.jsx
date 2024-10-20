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

  // Split the date string to construct a Date object
  const [year, month, day] = date.split("-");
  const parsedDate = new Date(`${year}-${month}-${day}`);

  // Format the date using Intl.DateTimeFormat
  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const weekdayOptions = { weekday: "long" };

  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    parsedDate
  );
  const formattedWeekday = new Intl.DateTimeFormat(
    "en-US",
    weekdayOptions
  ).format(parsedDate);

  const finalFormattedDate = `${formattedDate}, ${formattedWeekday}`;

  return (
    <li key={id} className="appointment-item">
      <div>
        <p>{title}</p>
        <p>{finalFormattedDate}</p>
      </div>
      <button type="button" data-testid="star" onClick={onClickFavoriteIcon}>
        <img src={starImgUrl} alt="star" />
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

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
    };

    if (title !== "" && date !== "") {
      const newArray = [...appList, newAppointment];
      setAppList(newArray);
      setDate("");
      setTitle("");
    } else {
      return console.error("Please enter both title and date");
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
    const staredArray = appList.filter((each) => each.isFavorite === true);
    setStaredList(staredArray);
    setStared(!stared);
  };

  return (
    <div>
      <h1>Add Appointment</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          onChange={(event) => setDate(event.target.value)}
          value={date}
        />
        <button type="submit">Add</button>
      </form>
      <hr />
      <h1>Appointments</h1>
      <button onClick={getStared}>Starred</button>
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
