export const numberToFraction = amount => {
  if (parseFloat(amount) === parseInt(amount, 10)) {
    return amount;
  }

  const gcd = (a, b) => {
    if (b < 0.0000001) {
      return a;
    }
    return gcd(b, Math.floor(a % b));
  };
  const len = amount.toString().length - 2;
  let denominator = 10 ** len;
  let numerator = amount * denominator;
  const divisor = gcd(numerator, denominator);
  numerator /= divisor;
  denominator /= divisor;
  let base = 0;
  if (numerator > denominator) {
    base = Math.floor(numerator / denominator);
    numerator -= base * denominator;
  }
  let newAmount = `${Math.floor(numerator)}/${Math.floor(denominator)}`;
  if (base) {
    newAmount = `${base} ${amount}`;
  }
  return newAmount;
};
