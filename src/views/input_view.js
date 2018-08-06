const PubSub = require('../../helpers/pub_sub.js');

const InputView = function (){

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#text');
  input.addEventListener('input', (evt) => {
    const inputWord = evt.target.value;
    PubSub.publish('InputView:text-inputted', inputWord);
  });
};

module.exports = InputView;
