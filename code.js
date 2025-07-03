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

function betterThanAverage(classpoints, yourpoints){
    let tot = 0;
    for(let i = 0; i < classpoints.length; i++){
        tot += classpoints[i]
    }
    let avg = tot/classpoints.length;
    return yourpoints > avg
        
    
}
console.log(betterThanAverage([20,50,60,40,70],90))