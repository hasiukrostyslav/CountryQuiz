import { createContext, useContext, useEffect, useReducer } from 'react';

import { getQuestions } from '../helper';

const CountriesContext = createContext();

const initialState = {
  countries: [],
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  correctAnswers: 0,
  bestResult: 0,
  secondsRemaining: null,
};

function CountriesProvider({ children }) {
  const [
    {
      questions,
      status,
      index,
      answer,
      correctAnswers,
      bestResult,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchingCountries() {
      try {
        const res = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,unMember,flags,region',
          {
            signal,
          }
        );
        if (!res.ok) throw new Error();

        const data = await res.json();

        const questions = getQuestions(data);

        dispatch({
          type: 'data/received',
          payload: { countries: data, questions },
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          dispatch({ type: 'data/failed' });
        }
      }
    }

    fetchingCountries();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        correctAnswers,
        bestResult,
        secondsRemaining,
        dispatch,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountriesContext);

  if (context === undefined)
    throw new Error(
      'CountriesContext was used outside of the CountriesProvider'
    );

  return context;
}

function reducer(state, action) {
  switch (action.type) {
    case 'data/received':
      return {
        ...state,
        countries: action.payload.countries,
        questions: action.payload.questions,
        status: 'ready',
      };
    case 'data/failed':
      return { ...state, status: 'error' };
    case 'quiz/start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: 30,
      };
    case 'quiz/newAnswer':
      return {
        ...state,
        answer: action.payload,
        correctAnswers:
          action.payload === state.questions.at(state.index).countryName
            ? state.correctAnswers + 1
            : state.correctAnswers,
      };
    case 'quiz/nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        secondsRemaining: 30,
      };
    case 'quiz/finished':
      return {
        ...state,
        status: 'finished',
        answer: null,
        bestResult:
          state.correctAnswers > state.bestResult
            ? state.correctAnswers
            : state.bestResult,
      };
    case 'quiz/restart':
      return {
        ...state,
        status: 'ready',
        questions: getQuestions(state.countries),
        index: 0,
        answer: null,
        correctAnswers: 0,
        secondsRemaining: null,
      };

    case 'quiz/timer':
      return {
        ...state,
        secondsRemaining:
          state.secondsRemaining < 1 ? 0 : state.secondsRemaining - 1,
        answer: state.secondsRemaining === 1 ? ' ' : state.answer,
      };

    default:
      throw new Error('Unknown action');
  }
}

export { CountriesProvider, useCountries };
