function helloNpm() {
  return "hello NPM";
}

function filterItem(array, item) {
  return array.filter((i) => i !== item);
}

module.exports = { helloNpm, filterItem };
