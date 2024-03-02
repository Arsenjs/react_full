const QuizScore = ({ data, rightAnswersCount }) => {
  return (
    <div className="quiz-score">
      <h1>
       {rightAnswersCount}/{data.length}
      </h1>
    </div>
  );
};

export default QuizScore;
