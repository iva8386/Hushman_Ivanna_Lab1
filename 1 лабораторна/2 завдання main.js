let pTask2 = document.querySelector(".convertedP");
let buttonTask2 = document.querySelector(".convert-btn2");

buttonTask2.addEventListener("click", () =>{
    let inputTask2 = document.querySelector(".task2-input");

    if(inputTask2.value !== "" && inputTask2.value > 0) {
        console.log(inputTask2.value);
        let converted = convertNumber(inputTask2.value);
        pTask2.innerHTML = converted;
    }
    
})

function convertNumber(number) {
    const ones = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
    const tens = ['', 'десять', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];
    const teens = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
    const hundreds = ['', 'сто', 'двісті', 'триста', 'чотириста', 'п\'ятсот', 'шістсот', 'сімсот', 'вісімсот', 'дев\'ятсот'];
  
    let words = '';
  
    if (number == 0) {
      return 'нуль';
    }
  
    if (number < 0 || number > 999.99) {
      return 'введіть число < 1000';
    }
  
    const numArr = number.toString().split('.');
  
    let intPart = parseInt(numArr[0], 10);
    let decimalPart = numArr[1] ? parseInt(numArr[1], 10) : 0;
  
    if (intPart >= 100) {
      words += hundreds[Math.floor(intPart / 100)] + ' ';
      intPart %= 100;
    }
  
    if (intPart >= 10 && intPart < 20) {
      words += teens[intPart - 10] + ' ';
      intPart = 0;
    }

    else if (intPart >= 20) {
      words += tens[Math.floor(intPart / 10)] + ' ';
      intPart %= 10;
    }
  
    if (intPart > 0) {
      words += ones[intPart] + ' ';
    }
  
    if (decimalPart > 0) {
      words += ', ';
      if (decimalPart >= 10 && decimalPart < 20) {
        words += teens[decimalPart - 10] + ' ';
      } else if (decimalPart >= 20) {
        words += tens[Math.floor(decimalPart / 10)] + ' ';
        decimalPart %= 10;
      }
  
      if (decimalPart > 0) {
        words += ones[decimalPart] + ' ';
      }
    }
  
    return words;
  }
