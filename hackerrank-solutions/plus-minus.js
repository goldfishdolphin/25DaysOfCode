function plusMinus(arr) {
    // Write your code here
let countPositive=0;
let countNegative=0;
let countZero=0;
for(let i=0;i<arr.length ;i++)
if (arr[i]>0){
    countPositive++;
}else if(arr[i]<0){
    countNegative++;
}else{
    countZero++
}
console.log((countPositive/arr.length).toFixed(6));
console.log((countNegative/arr.length).toFixed(6));
console.log((countZero/arr.length).toFixed(6));
}
