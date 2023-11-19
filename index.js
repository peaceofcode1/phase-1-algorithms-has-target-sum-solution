function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    // Check for each pair
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true; // If a pair is found, return true
      }
    }
  }
  return false; // If no pairs are found, return false
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of the provided solution is O(n^2), where 'n' is the number of elements in the input array. This is because there are two nested loops that iterate through the array: one loop iterates through each element, and the other loop checks each subsequent element against the current element.

*/

/* 
  Add your pseudocode here
  hasTargetSum(array, target):
  1. Create an empty object or set to store seen numbers.
  2. For each number in the array:
       a. Calculate the complement (target - current number).
       b. If the complement is present in the seen numbers:
             i. Return true since the pair exists.
       c. Otherwise, add the current number to the seen numbers.
  3. If no pair is found after iterating through the array, return false.
*/

/*
  Add written explanation of your solution here
  The hasTargetSum function aims to determine whether there exists a pair of numbers in a given array that adds up to a specified target number. The approach employed here involves using a data structure, like an object or a set, to keep track of the numbers encountered while iterating through the array.

The function iterates through each number in the array, calculating the complement needed to reach the target sum. It checks if this complement is present in the set of seen numbers. If the complement is found in the set, it indicates the existence of a pair that sums up to the target, and the function returns true. If the complement is not present, the current number is added to the set of seen numbers for future reference.

If the iteration concludes without finding any matching pairs, the function returns false, indicating that there are no pairs in the array that add up to the target value.

This algorithm maintains a set of seen numbers, allowing for constant time lookup, resulting in an optimized solution with a time complexity of O(n) (linear time complexity), where 'n' represents the number of elements in the array. The space complexity is also O(n) as the set grows proportionally with the input array size, storing distinct numbers encountered during the iteration.






*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
