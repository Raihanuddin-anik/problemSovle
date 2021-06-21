function rotLeft(arr, rotate) {
    const rotatedArray = arr.concat();
    for (let i = 0; i < rotate; i++) {
      const frontItem = rotatedArray.shift();
      rotatedArray.push(frontItem);
    }
    return rotatedArray;
  }
  
  const num = 4;
  const Arr = [1, 2, 3, 4, 5];
  
console.log(rotLeft(Arr, num));