const InputView = require('./views/input_view.js');
const WordChecker = require('./models/letter_checker.js')
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const InputView = new InputView();
  inputView.bindEvents();

  const WordChecker = new WordChecker();
  primeChecker.bindEvents();

  const result_view = new ResultView();
  result_view.bindEvents();
});
