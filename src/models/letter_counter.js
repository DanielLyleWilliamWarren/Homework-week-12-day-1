const PubSub = require('../../helpers/pub_sub.js');

const WordChecker = function () {

};

WordChecker.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:word-inputted', (evt) =>{
    const inputtedWord = evt.detail;
    const result = this.getWordLength(inputtedWord);
    PubSub.publish('WordChecker:result', result);
  });
};

WordChecker.prototype.getWordLength = function (word) {
    return word.length;
};

module.exports = WordChecker;
