const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" ||
      position > this.chain.length - 1 ||
      position <= 0) {
      this.chain = [];
      throw new Error('wrong position');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.reduce((acc, el, i) => {
      acc += `( ${el} )`;
      if (i < this.chain.length - 1) acc += '~~';
      return acc;
    }, '')
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
