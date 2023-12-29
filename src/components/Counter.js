import React, { useState, useRef, useEffect } from "react";

function Counter() {
  const [num, setNum] = useState(0);
  const [user, setUser] = useState({});
  const prevNumRef = useRef();

  // ... your useEffect hooks

  function increase() {
    prevNumRef.current = num; // Save the previous value
    setNum((currentNum) => currentNum + 1);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/L0rdSaiyan")
      .then((res) => res.json())
      .then((json) => {
        setUser(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <h1>Current: {num}</h1>
      <h1>Previous: {prevNumRef.current !== undefined ? prevNumRef.current : 'N/A'}</h1>
      <button onClick={increase}>Increase</button>
      <h1>User Information</h1>
      {user.name && <p>Nome: {user.name}</p>}
      {user.avatar_url && <img src={user.avatar_url} alt="User Avatar" />}
    </>
  );
}

export default Counter;
