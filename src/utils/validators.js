const require = value => {
  if (value) return undefined;
  return 'Field is required';
};

const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined
}

export {
  require,
  maxLengthCreator
}
