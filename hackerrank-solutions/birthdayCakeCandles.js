function birthdayCakeCandles(candles) {
    // Write your code here
let count =0;
const sortedCandles = candles.sort(function(a,b){return a-b});
for(let i=0; i<sortedCandles.length; i++){
    if(sortedCandles[i]===sortedCandles[sortedCandles.length-1]){
        count++;
    }
}
return count;
}
