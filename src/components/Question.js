import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';
import Answer from "./Answer";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  // console.log('quizState', quizState);
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map( (answer, index) => (
          <Answer
            key = {index}
            index = {index}
            answerText = {answer}
            correctAnswer = {currentQuestion.correctAnswer}
            currentAnswer = {quizState.currentAnswer}
            onSelectAnswer = {(answerText) => dispatch({type: 'select_answer', payload: answerText})}
          />
        ))}
      </div>
    </div>
  )
};

export default Question;
