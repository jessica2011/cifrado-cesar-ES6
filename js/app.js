const textArea = document.querySelector('#textArea');
const btnCipher = document.querySelector('#btn-cifrar');
const btnDecipher = document.querySelector('#btn-descifrar');
const messageCipher = document.querySelector('#messageCifrado');
const messageDecipher = document.querySelector('#messageDescifrado');
const boxCipher = document.querySelector('#boxCipher');
const boxDecipher = document.querySelector('#boxDecipher');
const regExp = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

btnCipher.addEventListener('click', () => {
  let word = textArea.value;
  if (regExp.test(word)) {
    let stringCipher = '';
    for (let letter of word) {
      let numberCodeAscii = letter.charCodeAt();
      if (numberCodeAscii >= 65 && numberCodeAscii <= 90) {
        let formuleCipher = (numberCodeAscii - 65 + 33) % 26 + 65;
        let newWord = String.fromCharCode(formuleCipher);
        stringCipher += newWord;
      } else if (numberCodeAscii >= 97 && numberCodeAscii <= 122) {
        let formuleCipher = (numberCodeAscii - 97 + 33) % 26 + 97;
        let newWord = String.fromCharCode(formuleCipher);
        stringCipher += newWord;
      } else if (numberCodeAscii === 32) {
        let space = ' ';
        stringCipher += space;
      }
    }
    messageCipher.textContent = stringCipher;
    boxCipher.classList.remove('hidden');
    boxDecipher.classList.add('hidden');
  }
  reset();
});

btnDecipher.addEventListener('click', () => {
  let word = textArea.value;
  if (regExp.test(word)) {
    let stringDecipher = '';
    for (let letter of word) {
      let numberCodeAscii = letter.charCodeAt();
      if (numberCodeAscii >= 65 && numberCodeAscii <= 90) {
        let formuleDecipher = (numberCodeAscii + 65 - 33) % 26 + 65;
        let newWord = String.fromCharCode(formuleDecipher);
        stringDecipher += newWord;
      } else if (numberCodeAscii >= 97 && numberCodeAscii <= 122) {
        let formuleDecipher = (numberCodeAscii + 97 - 45) % 26 + 97;
        let newWord = String.fromCharCode(formuleDecipher);
        stringDecipher += newWord;
      } else if (numberCodeAscii === 32) {
        let space = ' ';
        stringDecipher += space;
      }
    }
    messageDecipher.textContent = stringDecipher;
    boxDecipher.classList.remove('hidden');
    boxCipher.classList.add('hidden');
  }
  reset();
});


let reset = ()=>{
  textArea.value = '';
};  


