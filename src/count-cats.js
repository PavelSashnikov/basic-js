module.exports = function countCats(matrix) {
  const flat = matrix.flat(2);
  return flat.reduce((counts, el) => {
    if (el === "^^")++counts;
    return counts;
  }, 0)
};
