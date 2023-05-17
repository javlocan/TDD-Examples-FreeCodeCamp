
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
  return result
}

convertToRoman(30)
