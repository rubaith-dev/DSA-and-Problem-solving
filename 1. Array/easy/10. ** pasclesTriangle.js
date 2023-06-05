// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }

    let res = [[1]];

    for (let i = 1; i < numRows; i++) {
        let prevRow = res[i - 1];
        let newRow = [];
        newRow[0] = 1;

        for (let j = 1; j < i; j++) {
            newRow[j] = prevRow[j - 1] + prevRow[j];
        }

        newRow[i] = 1;
        res.push(newRow);
    }

    return res;
};