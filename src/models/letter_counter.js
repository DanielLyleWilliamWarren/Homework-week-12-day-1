const PubSub = require('../../helpers/pub_sub.js');

const WordChecker = function () {

};

WordChecker.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-inputted', (evt) =>{
    const inputtedWord = evt.detail;
    const result = this.getWordLength(inputtedWord);
    PubSub.publish('WordChecker:result', result);
  });
};

WordChecker.prototype.getWordLength = function (text) {
  text = text.replace(/(^\s*)|(\s*$)/gi,"");
  text = text.replace(/[ ]{2,}/gi," ");
  text = text.replace(/\n /,"\n");
  return text.split(" ").length;
}

module.exports = WordChecker;
