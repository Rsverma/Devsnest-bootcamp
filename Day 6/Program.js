function is_array(obj) {
  return Array.isArray(obj); // The function returns the product of p1 and p2
}
//console.log(is_array([1]));

function array_Clone(arr) {
  const clone = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      clone[i] = array_Clone(arr[i]);
    } else {
      clone[i] = arr[i];
    }
  }
  return clone;
}

// console.log(array_Clone([1, 2, [4, 0]]));

function first(arr, count = 1) {
  if (arr.length < count) return null;
  return arr.slice(arr.length - count, arr.length);
}
// console.log(first([1, 2, 3]));

function join(arr) {
  return arr.join(",");
}
// console.log(join([1, 2, 3]));

function mostFrequent(arr) {
  if (arr.length == 0) return null;
  arr = arr.sort();
  let maxCount = 1;
  let currentCount = 2;
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxElement = arr[i];
      }
    } else {
      currentCount = 1;
    }
  }
  return maxElement;
}

// console.log(mostFrequent([1, 2, 2, "a", 2, "a", 3, "a", "b", "a"]));
