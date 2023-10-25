import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div>
      <h2>Welcome to the React Quiz!</h2>
      <p>{numQuestions} question to test your React mastary</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
