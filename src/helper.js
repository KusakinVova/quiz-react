export const shuffleAnswers = question => {
  const unshuffleAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers
  ]

  return unshuffleAnswers
    .map( (unshuffleAnswers) => ({
      sort: Math.random(),
      value: unshuffleAnswers
    }))
    .sort((a,b) => a.sort - b.sort)
    .map( (a) => a.value );
}
