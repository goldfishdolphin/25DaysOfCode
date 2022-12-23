function breakingRecords(scores) {
    // Write your code here
    let maxScore = scores[0];
    let minScore = scores[0];
    let countMin = 0;
    let countMax = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            countMax++;
            maxScore = scores[i];
        }
        else if (scores[i] < minScore) {
            countMin++;
            minScore = scores[i];
        }
    }
    return [countMax, countMin];
}