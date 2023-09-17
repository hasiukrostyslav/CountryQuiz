const QUESTIONS_COUNT = 30;
const WRONG_OPTIONS = 3;

export function getQuestions(data) {
  const countries = data.slice();

  const questions = Array.from({ length: QUESTIONS_COUNT }).map((e, i) => {
    const country = countries
      .splice(Math.floor(Math.random() * countries.length), 1)
      .at(0);

    const options = getOptions(data, country.name.common);

    return {
      countryName: country.name.common,
      countryFlag: country.flags.png,
      options,
    };
  });

  return questions;
}

function getOptions(data, correctAnswer) {
  // console.log(correctAnswer);
  const filteredData = data.filter(
    (country) => country.name.common !== correctAnswer
  );

  const optionsWrong = Array.from({ length: WRONG_OPTIONS }).map(
    (el, i, arr) => {
      if (
        !arr.includes(
          filteredData.at(Math.floor(Math.random() * filteredData.length)).name
            .common
        )
      )
        return filteredData.at(Math.floor(Math.random() * filteredData.length))
          .name?.common;
      return filteredData.at(
        Math.floor(Math.random() * filteredData.length) - 1
      );
    }
  );

  const options = shuffleOptions([correctAnswer, ...optionsWrong]);

  return options;
}

function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
}

function countdownTimer() {}
