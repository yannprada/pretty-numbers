
const numberNames = new Map();
numberNames.set(1e33, 'decillion');
numberNames.set(1e30, 'nonillion');
numberNames.set(1e27, 'octillion');
numberNames.set(1e24, 'septillion');
numberNames.set(1e21, 'sextillion');
numberNames.set(1e18, 'quintillion');
numberNames.set(1e15, 'quadrillion');
numberNames.set(1e12, 'trillion');
numberNames.set(1e9, 'billion');
numberNames.set(1e6, 'million');

// function roundZeroPad(number, digits) {
//   const factor = 10 ** digits;
//   number = Math.round(number * factor) / factor;
//
//   return number == Math.round(number) ? String(number) : number.toFixed(digits);
// }

function roundZeroPad(number, digits) {
  const fixed = number.toFixed(digits);
  if (fixed.endsWith('0'.repeat(digits))) {
    return Math.round(number).toString();
  }
  return fixed;
}

function prettify(number) {
  for (let [treshold, name] of numberNames) {
    if (number >= treshold) {
      number /= treshold;
      number = roundZeroPad(number, 3);
      return `${number} ${name}`;
    }
  }
  return roundZeroPad(number, 3);
}
