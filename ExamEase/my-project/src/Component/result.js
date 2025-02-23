import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const score = queryParams.get("score");
  const total = queryParams.get("total");

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold">Quiz Completed!</h2>
      <p className="text-xl mt-4">Your Score: {score} / {total}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Results;
