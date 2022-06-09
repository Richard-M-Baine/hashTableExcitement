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
  let newArray = []
  let set = new Set()
  for (let i = 0; i < arr1.length; i ++){
    set.add(arr1[i])
  }
  for (let i = 0; i < arr2.length; i ++){
    if (set.has(arr2[i])){
      newArray.push(arr2[i])
    }
  }
  return newArray
}


function duplicate(arr) {
  let set = new Set()

  for (let i = 0; i < arr.length; i ++){
    let size1 = set.size
    set.add(arr[i])
    let size2 = set.size
    if (size1 === size2){return arr[i]}
  }
}


function twoSum(nums, target) {
let set = new Set()
// for (let i = 0; i < nums.length; i ++){
//   set.add(nums[i])
// }

// for (let i = 0; i < nums.length; i ++){
// let iterator = set.entries()
//   for (let banana in iterator){
//     if ((set[0] + nums[i] === target) && set[0] !== nums[i]){return true}
//   }
for (let i = 0; i<nums.length; i++){
  if (set.has(target-nums[i]) /*&& (nums[i] !== target-nums[i])*/){
    return true
  }
  else {
    set.add(nums[i])
  }
}
return false

}

// }
function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
