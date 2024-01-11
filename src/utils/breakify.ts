import chemElements from '../constants'

export const breakify = (str: string): string[] => {
  let result: string[] = []
  Array.from(str).some((char, i) => {
    const oneChar = char.toUpperCase()
    const twoChar = `${oneChar}${str[i + 1]}`

    if (chemElements.includes(twoChar)) {
      result = [str.slice(0, i), twoChar, str.slice(i + 2)]
      return true
    }

    if (chemElements.includes(oneChar)) {
      result = [str.slice(0, i), oneChar, str.slice(i + 1)]
      return true
    }

    return null
  })

  return result.length ? result : [str, '', '']
}
