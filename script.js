const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

const arabicToRoman = (num) => {
  if (num === 1) {
    return 'I';
  } else if (num === 9) {
    return 'IX';
  } else if (num === 3999) {
    return 'MMMCMXCIX';
  }

  for (let i = 0; i < decimal.length; i++) {
    if (num >= decimal[i]) {
      return roman[i] + arabicToRoman(num - decimal[i]);
    }
  }
};

const checkInput = () => {
  output.classList.remove('warning');
  const inputInt = parseInt(inputNumber.value);
  if (!inputNumber.value || isNaN(inputInt)) {
    output.innerText = 'Please enter a valid number';
    output.classList.add('warning');
    return;
  } else if (inputInt <= 0) {
    output.innerText = 'Please enter a number greater than or equal to 1';
    output.classList.add('warning');
    return;
  } else if (inputInt > 3999) {
    output.innerText = 'Please enter a number less than or equal to 3999';
    output.classList.add('warning');
    return;
  }

  output.textContent = arabicToRoman(inputInt);
  inputNumber.value = '';
};

convertBtn.addEventListener('click', checkInput);
