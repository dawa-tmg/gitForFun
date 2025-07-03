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
