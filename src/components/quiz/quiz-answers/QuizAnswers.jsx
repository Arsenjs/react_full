const QuizAnswers = ({
  setEnd,
  data,
  currentQuestion,
  setCuerrentQuestion,
  isClicked,
  rightAnswersCount,
}) => {
  return (
    <div className="quiz-answers">
      {data[currentQuestion].tarberakner.map(({ id, title, isCorrect }) => {
        return (
          <div
            key={id}
            className="quiz-answers-item"
            onClick={(e) => {
              if (isClicked.current == false) {
                isClicked.current = true;
                if (isCorrect) {
                  e.target.style.backgroundColor = "green";
                  rightAnswersCount.current++;
                } else {
                  e.target.style.backgroundColor = "red";
                }
                if (currentQuestion < data.length - 1) {
                  setTimeout(() => {
                    e.target.style.backgroundColor = "bisque";
                   
                    setCuerrentQuestion((prev) => prev + 1);
                    isClicked.current = false;
                  }, 1000);
                } else {
                  setEnd(true);
                }
              }
            }}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default QuizAnswers;
