const concat = function concat(...args) {
  return `${this}${args.join('')}`;
};

module.exports = concat;
