// function removeSmallest(numbers) {
//   const min = Math.min(...numbers);
//   return numbers.filter((num) => num != min);
// }
// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([]));

function removeSmallest(numbers) {
  let arr = [];
  const index = numbers.indexOf(Math.min(...numbers));
  console.log(index);
  for (let p = 0; p < numbers.length; p++) {
    if (p != index) {
      arr.push(numbers[p]);
    }
  }
  console.log(arr);
  return arr;
}
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([]));
