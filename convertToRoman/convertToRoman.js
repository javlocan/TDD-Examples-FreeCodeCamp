/* eslint-disable no-tabs */
// EXERCISE: Convert the given number into a roman numeral.
// Roman numerals	Arabic numerals
// M	1000
// CM	900
// ROMAN[n]	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.
export const convertToRoman = (num) => {
  console.log('running')
  const U = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX'
  }
  const D = {
    1: 'X',
    4: 'XL',
    5: 'L',
    9: 'XC'
  }
  const C = {
    1: 'C',
    4: 'CD',
    5: 'D',
    9: 'CM'
  }
  const M = {
    1: 'M'
  }
  const ROMAN = {
    0: U,
    1: D,
    2: C,
    3: M
  }

  const str = num.toString()

  let result = ''
  const arr = str.split('').reverse()

  for (let n = 3; n >= 0; n--) {
    const d = arr[n]
    if (ROMAN[n][d] !== undefined) {
      result = result + ROMAN[n][d]
    } else {
      for (let i = 1; i <= 3; i++) {
        if (ROMAN[n][d - i] !== undefined) {
          result = result + ROMAN[n][d - i]
          for (let j = 1; j <= i; j++) {
            result = result + ROMAN[n][1]
          }
          break
        }
      }
    }
  }
  console.log(arr, arr.length, result)
  return result
}

convertToRoman(30)
