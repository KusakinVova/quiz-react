import Question from './Question';
import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  // console.log('quizState', quizState);
  return (
    <div className='quiz'>
      {quizState.showResults && (
        <div className='results'>
          <div className='congratulations'>Congratulations</div>
          <div className='results-info'>
            <div>You have complete the quiz.</div>
            <div>You've got {quizState.correctAnswerCount} of {quizState.questions.length}.</div>

          </div>
          <div
            className='next-button'
            onClick={() => dispatch({type: 'restart'})}
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className='score'>Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
          <Question />
          <div
            className='next-button'
            onClick={() => dispatch({type: 'next_question'})}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;
