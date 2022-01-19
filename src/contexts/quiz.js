import { createContext, useReducer } from 'react';
import questions from '../data';
import { shuffleAnswers } from '../helper';

const initialState = {
  questions: questions,
  currentQuestionIndex: 0,
  showResults: false,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: '',
  correctAnswerCount: 0,
};

const reducer = (state, action) => {
  // console.log('reduser', state, action);

  switch (action.type) {

    case 'select_answer': {
      // console.log(state.questions[state.currentQuestionIndex].correctAnswer);
      // console.log(action.payload);
      const correctAnswerCount =
        action.payload === state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount
      };
    }

    case 'restart': {
      return initialState;
    }

    case 'next_question': {
      const showResults = state.currentQuestionIndex === state.questions.length - 1; // will true when index = array.length
      const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
      const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: ''
      }
    }

    default: return state;
  }

}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
