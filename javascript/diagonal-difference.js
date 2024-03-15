// Diagnal Difference
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x

const diagonalDifference = arr => {
    let l = arr.length, d1 = 0, d2 = 0

    // i will traverse through main diagonal, j will traverse through counter diagonal
    for (let i = 0, j = l - 1; i < l; i++, j--) {
        // the main diagonal contain elements where index i and j are the same ([0,0], [1,1]...etc) - this is why we sumed here
        d1 += arr[i][i]
        // the counter diagonal goes right to left, so i starts at 0 and increases by 1 and j starts at 2 (length of array minus 1) it decreases by one
        // this will always start at the far right decrement down to the left
        d2 += arr[i][j]
    }

    return Math.abs(d1 - d2)
    
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]))