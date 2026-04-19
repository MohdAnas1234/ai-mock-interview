import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // Receive answers from Interview page
  const answers = location.state?.answers || [];

  return (
    <div className="container mt-5">
      <div className="glass-card p-4">

        <h2 className="text-center mb-4 fw-bold">
          🎉 Interview Completed
        </h2>



 


        {answers.length === 0 ? (
          <p className="text-center text-muted">
            No answers found. Please take the interview first.
          </p>
        ) : (
          <>
            <h5 className="mb-3">Your Answers:</h5>

            {answers.map((ans, index) => (
              <div key={index} className="glass-card p-3 mb-3">
                <strong>Question {index + 1}:</strong>
                <p className="mb-0">{ans || "No answer provided"}</p>
              </div>
            ))}

            <div className="text-center mt-4">
              <button
                className="btn btn-olive me-3"
                onClick={() => navigate("/")}
              >
                Go Home
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={() => navigate("/interview")}
              >
                Retake Interview
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Result;