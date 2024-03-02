import { useRef, useState, useEffect } from "react";
import QuizAnswers from "./quiz-answers/QuizAnswers";
import QuizQuestions from "./quiz-question/QuizQuestions";

import "./Quiz.scss";
import QuizScore from "./quiz-score/QuizScore";

const Quiz = () => {
  const [end, setEnd] = useState(false);
  const rightAnswersCount = useRef(0);
  const isClicked = useRef(false);
  const [currentQuestion, setCuerrentQuestion] = useState(0);
  const x = useRef([
    {
      id: 1,
      questionText: "vorn e Hayastani mayraqaxaqy",
      tarberakner: [
        { id: 1, title: "Moskva", isCorrect: false },
        { id: 2, title: "NewYork", isCorrect: false },
        { id: 3, title: "Erevan", isCorrect: true },
        { id: 4, title: "Vashington", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "vorn e Rusastani mayraqaxaqy",
      tarberakner: [
        { id: 1, title: "Erevan", isCorrect: false },
        { id: 2, title: "Vashington", isCorrect: false },
        { id: 3, title: "NewYork", isCorrect: false },
        { id: 4, title: "Moskva", isCorrect: true },
      ],
    },
    {
      id: 3,
      questionText: "vorn e amn-i mayraqaxaqy",
      tarberakner: [
        { id: 2, title: "Vashington", isCorrect: true },
        { id: 4, title: "Moskva", isCorrect: false },
        { id: 3, title: "NewYork", isCorrect: false },
        { id: 1, title: "Erevan", isCorrect: false },
      ],
    },
  ]);
  
  useEffect(() => {
    console.log(currentQuestion);
  }, [currentQuestion]);
  
  return (
    <div className="quiz">
      {end ? (
        <QuizScore data={x.current} rightAnswersCount={rightAnswersCount.current}/>
      ) : (
        <>
          <QuizQuestions x={x} currentQuestion={currentQuestion} />
          <QuizAnswers
            setEnd={setEnd}
            data={x.current}
            currentQuestion={currentQuestion}
            isClicked={isClicked}
            setCuerrentQuestion={setCuerrentQuestion}
            rightAnswersCount={rightAnswersCount}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
