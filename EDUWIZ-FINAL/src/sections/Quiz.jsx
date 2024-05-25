import React, { useState } from 'react';

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 4;

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
    }
    
    setTimeout(() => {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        endTest();
      }
    }, 1000);
  };

  const endTest = () => {
    alert(`Test Over! Your final score is: ${score}`);
    window.location.href = 'http://localhost:5173/';
  };

  return (
    <div className="flex items-center justify-around min-h-screen bg-gradient-to-r from-black via-gray-800 to-black text-white">
      <div className="w-96 p-6 bg-gray-900 shadow-lg rounded-3xl">
        <div className="bg-green-500 text-white flex justify-between p-4 rounded-t-3xl text-lg">
          <span>Score: {score}</span>
        </div>
        <div className="qa_body text-white">
          {currentQuestion === 1 && (
            <div className="qa_set block">
              <h4 className="mb-4 text-lg text-gray-300">Que1: What does HTML stand for?</h4>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(false)}>
                <input type="radio" name="a1" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">Hyper Tool Markup Language</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(true)}>
                <input type="radio" name="a1" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">Hypertext Markup Language</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(false)}>
                <input type="radio" name="a1" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">Home Text Markup Language</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(false)}>
                <input type="radio" name="a1" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">Cascading Style Sheet</span>
              </div>
            </div>
          )}

          {currentQuestion === 2 && (
            <div className="qa_set block">
              <h4 className="mb-4 text-lg text-gray-300">Que2: What does WWW stand for?</h4>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(false)}>
                <input type="radio" name="a2" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">World Wind Web</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(true)}>
                <input type="radio" name="a2" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">World Wide Web</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(false)}>
                <input type="radio" name="a2" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">World W Web</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(false)}>
                <input type="radio" name="a2" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">Cascading Style Sheet</span>
              </div>
            </div>
          )}

          {currentQuestion === 3 && (
            <div className="qa_set block">
              <h4 className="mb-4 text-lg text-gray-300">Que3: What does CSS stand for?</h4>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(true)}>
                <input type="radio" name="a3" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">Cascading Style Sheets</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(false)}>
                <input type="radio" name="a3" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">Computer Style Sheets</span>
              </div>
            </div>
          )}

          {currentQuestion === 4 && (
            <div className="qa_set block">
              <h4 className="mb-4 text-lg text-gray-300">Que4: What is the capital of France?</h4>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(false)}>
                <input type="radio" name="a4" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">London</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(false)}>
                <input type="radio" name="a4" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">Berlin</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => handleAnswer(true)}>
                <input type="radio" name="a4" className="hidden" />
                <span className="block p-2 bg-gray-800 rounded-lg border-2 border-gray-700 hover:bg-gray-700">Paris</span>
              </div>
            </div>
          )}
        </div>
        <div className="qa_footer text-center mt-4">
          <a href='http://localhost:5173/' className="btn1 inline-block p-2 bg-green-500 rounded-lg text-white hover:bg-green-700">Start Again</a>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
