import { expect, test, describe } from 'vitest'
import { convertToRoman } from "../utilities.js"

const errString = 'error'

describe('convertToRoman should', () => {
    test('return an error with bad input', () => {
        expect(convertToRoman('')).toBe(errString)
        expect(convertToRoman('hey')).toBe(errString)
        expect(convertToRoman(40000)).toBe(errString)
        expect(convertToRoman('4')).toBe(errString)
        expect(convertToRoman(0)).toBe(errString)
        expect(convertToRoman(-5)).toBe(errString)
        expect(convertToRoman(4.3)).toBe(errString)
        expect(convertToRoman(undefined)).toBe(errString)
    })

    test('return the right Roman Numeral String', () => {
        expect(convertToRoman(1)).toBe('I')
        expect(convertToRoman(5)).toBe('V')
        expect(convertToRoman(3888)).toBe('MMMDCCCLXXXVIII')
        expect(convertToRoman(449)).toBe('CDXLIX')
    })
})