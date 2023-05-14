import { describe, expect, it } from 'vitest'

import { convertToRoman } from './convertToRoman'

describe('convertToRoman', () => {
  it('should be a function', () => {
    expect(typeof convertToRoman).toBe('function')
  })
  it('should return a string', () => {
    expect(typeof convertToRoman(1)).toBe('string')
    expect(typeof convertToRoman('caca')).toBe('string')
  })
  it('should work properly with units', () => {
    expect(convertToRoman(1)).toBe('I')
    expect(convertToRoman(2)).toBe('II')
    expect(convertToRoman(3)).toBe('III')
    expect(convertToRoman(4)).toBe('IV')
    expect(convertToRoman(5)).toBe('V')
    expect(convertToRoman(6)).toBe('VI')
    expect(convertToRoman(7)).toBe('VII')
    expect(convertToRoman(8)).toBe('VIII')
    expect(convertToRoman(9)).toBe('IX')
  })
  it('should work properly with tens', () => {
    expect(convertToRoman(10)).toBe('X')
    expect(convertToRoman(20)).toBe('XX')
    expect(convertToRoman(30)).toBe('XXX')
    expect(convertToRoman(40)).toBe('XL')
    expect(convertToRoman(50)).toBe('L')
    expect(convertToRoman(60)).toBe('LX')
    expect(convertToRoman(70)).toBe('LXX')
    expect(convertToRoman(80)).toBe('LXXX')
    expect(convertToRoman(90)).toBe('XC')
  })
  it('should work properly with tens and units combined', () => {
    expect(convertToRoman(15)).toBe('XV')
    expect(convertToRoman(32)).toBe('XXXII')
    expect(convertToRoman(63)).toBe('LXIII')
    expect(convertToRoman(81)).toBe('LXXXI')
    expect(convertToRoman(48)).toBe('XLVIII')
  })
  it('should work properly with hundreds', () => {
    expect(convertToRoman(100)).toBe('C')
    expect(convertToRoman(200)).toBe('CC')
    expect(convertToRoman(300)).toBe('CCC')
    expect(convertToRoman(400)).toBe('CD')
    expect(convertToRoman(500)).toBe('D')
    expect(convertToRoman(600)).toBe('DC')
    expect(convertToRoman(700)).toBe('DCC')
    expect(convertToRoman(800)).toBe('DCCC')
    expect(convertToRoman(900)).toBe('CM')
  })
  it('should work properly with combined hundres, tens and units', () => {
    expect(convertToRoman(142)).toBe('CXLII')
    expect(convertToRoman(281)).toBe('CCLXXXI')
    expect(convertToRoman(690)).toBe('DCXC')
  })
  it('should work properly with thousands', () => {
    expect(convertToRoman(1000)).toBe('M')
    expect(convertToRoman(2000)).toBe('MM')
    expect(convertToRoman(3000)).toBe('MMM')
  })
  it('should work properly', () => {
    expect(convertToRoman(1004)).toBe('MIV')
    expect(convertToRoman(2014)).toBe('MMXIV')
    expect(convertToRoman(4000)).toBe('MMMM')
  })
})
