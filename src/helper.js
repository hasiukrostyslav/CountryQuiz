const QUESTIONS_COUNT = 30;
const WRONG_OPTIONS_COUNT = 3;

function getDataCopy(data) {
  return data.filter((country) => country.unMember).slice();
}

export function getQuestions(data) {
  const countries = getDataCopy(data);

  const questions = Array.from({ length: QUESTIONS_COUNT }).map(() => {
    const country = countries
      .splice(Math.floor(Math.random() * countries.length), 1)
      .at(0);

    const options = getOptions(data, country);

    return {
      countryName: country.name.common,
      countryFlag: country.flags.png,
      region: country.region,
      options,
    };
  });

  return questions;
}

function getOptions(data, correctAnswer) {
  const {
    name: { common: correctCountry },
    region,
  } = correctAnswer;

  const filteredData = getDataCopy(data).filter(
    (country) =>
      country.name.common !== correctCountry && country.region === region
  );

  const wrongOptions = Array.from({ length: WRONG_OPTIONS_COUNT }).map(() => {
    const option = filteredData
      .splice(Math.floor(Math.random() * filteredData.length), 1)
      .at(0).name.common;
    return option;
  });

  const options = shuffleOptions([correctCountry, ...wrongOptions]);

  return options;
}

function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
}

// function countdownTimer(time) {
//   const interval = setInterval(() => console.log(time--), 1000);

//   clearInterval(interval);
// }

// countdownTimer(10);
