class InputLang {

  constructor(id, callback = this.err, enableCyrillic = false) {
    if (!id) throw "Need 'id' of input element!";
    if (!callback) throw "Need callback function!";
    this.englishDictionary = [];
    this.cyrillicDictionary = [];
    this.ukraineDictionary = [1028, 1030, 1031, 1068, 1100, 1102, 1103, 1108, 1110, 1111, 1168, 1169];
    this.inputElement = document.getElementById(id);
    this.inputElement.addEventListener("input", this.main.bind(this))
    this.callback = callback;
    this.enableCyrillic = enableCyrillic;
    this.fillDictioner(65, 90, this.englishDictionary)
    this.fillDictioner(97, 122, this.englishDictionary)
    this.fillDictioner(1024, 1279, this.cyrillicDictionary)
    this.fillDictioner(1040, 1065, this.ukraineDictionary)
    this.fillDictioner(1070, 1097, this.ukraineDictionary)
  }

  fillDictioner(from, to, arr) {
    for (let i = from; i <= to; i++) {
      arr.push(i);
    }
  }

  getCharacterCode(inputElement) {
    const inputStringReverse = inputElement.value.split("").reverse().join("");
    const codeOfChar = inputStringReverse.charCodeAt();
    return codeOfChar;
  }

  getLangName(codeOfChar) {
    if (this.englishDictionary.includes(codeOfChar)) return "English";
    if (this.ukraineDictionary.includes(codeOfChar)) return "Ukraine";
    if (this.enableCyrillic && this.cyrillicDictionary.includes(codeOfChar)) return "Cyrillic";
    return "I don`t know!";
  }

  main() {
    const code = this.getCharacterCode(this.inputElement);
    const lang = this.getLangName(code);
    this.callback(lang);
  }

}

export default InputLang;