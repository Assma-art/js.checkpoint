function reverseStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// task 2 : number of characters :
// str = "welcome" =>
function charNbr(str) {
  return str.length;
}

function capitalizeFirstWord(str) {
  let strArr = str.split(" ");
  let m = "";
  for (const i in strArr) {
    m = m + strArr[i][0].toUpperCase() + strArr[i].substr(1) + " ";
  }
  return m;
}

function maxMin(arr) {
  let min = arr[0];
  let max = arr[0];
  for (const element of arr) {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  return [min, max];
}

function totalSum(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
}

function totalSum(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
}

function filterOutNumbers(arr) {
  let tab = [];
  for (const element of arr) {
    if (element > 10) {
      tab.push(element);
    }
  }
  return tab;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let x = 1;
  let i = 1;
  while (i <= n) {
    x *= i;
    i++;
  }
  return x;
}

function isPrime(n) {
  let r = 0;
  if (n == 0) {
    return "not defined";
  }
  if (n === 1) {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i !== 0) {
      continue;
    }
    r = r + i;
  }
  return r === n + 1;
}
function fibonacciSequence(n) {
  let tab = [0, 1];
  for (let i = 1; i < n; i++) {
    tab[i + 1] = tab[i - 1] + tab[i];
  }
  return tab;
}
