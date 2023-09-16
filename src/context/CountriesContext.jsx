import { createContext, useContext, useReducer } from 'react';

const CountriesContext = createContext();

const initialState = {
  countries: [],
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  correctAnswers: 0,
  highScore: 0,
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
      highScore,
      secondsRemaining,
    },
  ] = useReducer(reducer, initialState);

  return (
    <CountriesContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        correctAnswers,
        highScore,
        secondsRemaining,
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
      'CountriesContext was used outside of the CountriesContext'
    );

  return context;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case '':
      return { ...state };

    default:
      return state;
  }
}

export { CountriesProvider, useCountries };
