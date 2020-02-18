module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('not an array');
  if (arr.length < 1) return [];
  
  const transormedArr = [];

  for (let i = 0, length = arr.length; i < length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        transormedArr.length !== 0 ? transormedArr.pop() : null;
        break;
      case '--double-next':
        i < length - 1 ? transormedArr.push(arr[i + 1]) : null;
        break;
      case '--double-prev':
        i >= 1 ? transormedArr.push(arr[i - 1]) : null;
        break;
      default:
        transormedArr.push(arr[i]);
    }
  }
  return transormedArr;
};
