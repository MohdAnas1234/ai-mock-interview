import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



import React from 'react'

const Interview = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const [answer, setAnswer] = useState("");
const [answers, setAnswers] = useState([]);
const [time, setTime] = useState(30);

const navigate = useNavigate();
      const questions = [
          "What is useState in React",
    "What is virtual DOM",
    "Difference between var and let?"
];

const handleNext = () =>{
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if(currentIndex < questions.length - 1){
        setCurrentIndex(currentIndex + 1);
        setAnswer('');
        setTime(30);
    }else{
        // navigate to result page
        navigate("/result",{state:{answers:updatedAnswers}});

    }

};

useEffect(() => {
    if (time === 0) {
        handleNext();
        return;
    }
    const timer = setTimeout(() => {
        setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
}, [time]);


const progress = ((currentIndex + 1) / questions.length) * 100;

       return (
  <div className="container mt-5">
    <div className="card p-4 shadow">

      <h4>Question {currentIndex + 1}</h4>
      <h5>{questions[currentIndex]}</h5>

      <p className="text-danger">Time Left: {time}s</p>

      <div className="progress mb-3">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <textarea
        className="form-control mb-3"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer..."
      />

      <button className="btn btn-primary" onClick={handleNext}>
        {currentIndex === questions.length - 1 ? "Submit" : "Next"}
      </button>

    </div>
  </div>
);
}
export default Interview;



