//Happy Coding=========>>>>>
function litres(time) {
  let wtrNeeded = 0.5* time;
  let roundedLtr = Math.floor(wtrNeeded);
  return roundedLtr
}
console.log(litres(6.5))

function sumStr(a,b) {
  const sum =  Number(a) + Number(b)
  return sum.toString()
}
console.log(sumStr("4","5"))

function paperWork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
}
console.log(paperWork(2,6))

function addLength(str) {
  let result = [];
  str.split(' ').forEach((elem)=> result.push(`${elem} ${elem.length}`));
  return result;
}
console.log(addLength(["apple", "ban"]))

function repeatStr (n, s) {
  let result = '';
  for (let i = 0; i < n; i++){
    result += s;
  }
  return result;
}
console.log(repeatStr(3, "*"))