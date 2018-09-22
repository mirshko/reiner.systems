/*!
 * Remove duplicates from an array.
 * Adapted from https://stackoverflow.com/a/23263937
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr The array
 * @return {Array}     A new array without duplicates
 */
export const arrayUnique = function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) >= index;
  });
};

export const neons = [
  "mediumspringgreen",
  "hotpink",
  "cyan",
  "deepskyblue",
  "magenta",
  "mediumslateblue"
];
