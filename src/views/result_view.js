const PubSub = require('../../helpers/pub_sub.js');
const WordChecker = require('../models/letter_counter.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordChecker:result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
  })
};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result')
  if (result){
  resultElement.textContent = `The text has ${result} words!`;
}
};

module.exports = ResultView;
