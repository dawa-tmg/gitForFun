//Happy Coding=========>>>>>
function litres(time) {
  let wtrNeeded = 0.5* time;
  let roundedLtr = Math.floor(wtrNeeded);
  return roundedLtr
}
console.log(litres(6.5))

function paperwork(n, m) {
    if(n < 0 || m < 0){
        return 0;
    }
    return n * m;  
}
console.log(paperwork(2,10))

