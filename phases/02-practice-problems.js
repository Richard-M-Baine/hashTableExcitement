function anagrams(str1, str2) {
  let set = new Set();
  str1.split('');
  str2.split('');
  for (let i = 0; i<str1.length; i++){
    set.add(str1[i])
  }
  for (let j = 0; j<str2.length; j++){
    if(!set.has(str2[j])){
      return false;
    }
  }
  return true;

}


function commonElements(arr1, arr2) {
  // Your code here
}


function duplicate(arr) {
  // Your code here
}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
