// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    // Write your code here
    const sortedArray = arr.sort(function (a, b) { return a - b; });
    const minArray = sortedArray.slice(0, sortedArray.length - 1);
    const maxArray = sortedArray.slice(1 - sortedArray.length);
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < minArray.length; i++) {
        minSum += minArray[i];
    }
    for (let j = 0; j < maxArray.length; j++) {
        maxSum += maxArray[j];
    }
    console.log(`${minSum} ${maxSum}`);
}