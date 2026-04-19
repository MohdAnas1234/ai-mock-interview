import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">

      {/* Hero */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">
          Prepare Smarter. Perform Better.
        </h1>
        <p className="lead text-muted">
          AI-powered mock interviews designed to boost your confidence.
        </p>

        <button 
          className="btn btn-olive btn-lg mt-3"
          onClick={() => navigate("/interview")}
        >
          Start Interview
        </button>
      </div>

      {/* Feature Cards */}
      <div className="row mt-5 text-center">
        <div className="col-md-4 mb-4">
          <div className="glass-card p-4 h-100">
            <h5>⏱ Real-time Timer</h5>
            <p>Experience real interview pressure.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="glass-card p-4 h-100">
            <h5>🤖 AI Evaluation</h5>
            <p>Instant scoring & feedback analysis.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="glass-card p-4 h-100">
            <h5>📊 Performance Reports</h5>
            <p>Track improvement over time.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;