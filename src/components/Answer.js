const Answer = ({answerText, onSelectAnswer, index, correctAnswer, currentAnswer}) => {
  // console.log(answerText);
  const letterArray = ['A','B','C','D'];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
  const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';
  const disabledClass = currentAnswer ? 'disabled-answer' : '';

  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={()=> onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letterArray[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
