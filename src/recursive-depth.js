module.exports = class DepthCalculator {
  calculateDepth(arr, count = 0, countArr = []) {
    count++;
    countArr.push(count);

    for (let i = 0, lgth = arr.length; i < lgth; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], count, countArr)
      }
    }

    return Math.max(...countArr);
  }
}
