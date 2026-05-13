/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T} the first element of the array
 */
export function getFirst(array) {
  return array[0];
}

/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T} the last element of the array
 */
export function getLast(array) {
  return array[array.length - 1];
}

/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T[]} an array containing the first and last elements
 */
export function getFirstLast(array) {
  if (array.length <= 1) return array;
  return [array[0], array[array.length - 1]];
}

/**
 * @param {string} str1 - the first string
 * @param {string} str2 - the second string
 * @returns {boolean} whether the first letters of both strings match
 */
export function sharesFirstLetter(str1, str2) {
  if (str1.length === 0 || str2.length === 0) return false;
  return str1[0] === str2[0];
}

/**
 * @param {number[]} numbers - an array of numbers
 * @returns {number[]} a new array with each number multiplied by 5
 */
export function quintuple(numbers) {
  return numbers.map((num) => num * 5);
}

/**
 * @param {string[]} words - an array of singular nouns
 * @returns {string[]} an array of the plural forms
 */
export function pluralize(words) {
  return words.map((word) => {
    if (word.endsWith("s")) {
      return word + "es";
    }
    return word + "s";
  });
}

/**
 * @param {boolean[]} attendance - true = present, false = absent
 * @returns {number} the number of students present
 */
export function countAttendance(attendance) {
  return attendance.filter((isPresent) => isPresent === true).length;
}

/**
 * @param {string[]} sentence - an array of words
 * @returns {string|null} the first longest word or null if empty
 */
export function getLongestWord(sentence) {
  if (sentence.length === 0) return null;

  let longest = sentence[0];
  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i].length > longest.length) {
      longest = sentence[i];
    }
  }
  return longest;
}

/**
 * @param {string[]} playlist - an array of song titles
 * @param {string} song - the name of a song to find
 * @returns {number} the index of the song or -1
 */
export function findSong(playlist, song) {
  return playlist.indexOf(song);
}

/**
 * @param {string[][]} map - a 2D array
 * @returns {number[]|null} the [x,y] coordinates of the "spy" or null
 */
export function findSpy(map) {
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (map[x][y] === "spy") {
        return [x, y];
      }
    }
  }
  return null;
}
