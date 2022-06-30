import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./Calender.css";

const Calander = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
        <Helmet>
            <title>Calender</title>
        </Helmet>
      <div className="w-full min-h-screen flex justify-center items-center mt-10 lg:mt-0">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Calander;
