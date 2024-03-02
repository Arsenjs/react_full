

const QuizQuestions = ({ x, currentQuestion }) => {
  return (
    <div className="quiz-question">
      <h1>{x.current[currentQuestion].questionText}</h1>
    </div>
  );
};

export default QuizQuestions;
