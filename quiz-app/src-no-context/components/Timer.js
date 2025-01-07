import { useEffect } from "react";

function Timer({ dispatch, secondesRemaning }) {
  const mins = Math.floor(secondesRemaning / 60);
  const secondes = Math.floor(secondesRemaning % 60);

  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: "tick" }), 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {" "}
      {mins < 10 && "0"}
      {mins} : {secondes < 10 && "0"}
      {secondes}{" "}
    </div>
  );
}

export default Timer;
