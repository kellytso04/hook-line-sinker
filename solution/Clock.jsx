import React, { useState, useEffect } from 'react';

const Clock = (props) => {
  // For each element of state, we'll create a state variable and a setter method
  const [date, setDate] = useState(new Date().toLocaleDateString(undefined, {weekday: 'long', month: 'long', day: 'numeric'}));
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // On app mount, we want to immediately start our clock and have it update every second
  // When useEffect returns a function, the hook will execute that function just like `componentWillUnmount` would
  useEffect(() => {
    const intervalID = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(intervalID);
    }
  }, []);

  tick() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div>Hi! Today is {date} and it is currently {time}</div>
  )
}

export default Clock;