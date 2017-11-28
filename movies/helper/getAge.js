module.exports = function(birth, release) {
  let now = 2017
  let age = now - birth
  let movie = now - release
  let result = age - movie
  return result
}
