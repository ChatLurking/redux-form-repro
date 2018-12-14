export default min => {
  return function minimum(value) {
    return value && value < min ? `Must be at least ${min}` : undefined;
  };
};
