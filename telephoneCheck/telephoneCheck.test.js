import { describe, expect, it } from "vitest";
 
import { telephoneCheck } from "./telephoneCheck";

describe('telephoneCheck', ()=> {
  it('should be a function', () => {
    expect(typeof telephoneCheck).toBe('function');
  })
  it('should return a boolean', () => {
    expect(typeof telephoneCheck('2')).toBe('boolean');
  })
  it('should return false if format is incorrect', () => {
    expect(telephoneCheck('asf2314a')).toBe(false);
  })
   it('should accept this format: 5555555555', () => {
    expect(telephoneCheck('5555555555')).toBe(true);
    expect(telephoneCheck('8615294912')).toBe(true)
  }) 
  it('should accept this format: 1 555555555', () => {
    expect(telephoneCheck('1 5555555555')).toBe(true);
    expect(telephoneCheck('1 8615294912')).toBe(true)
  }) 
  it('should only accept 1 as country code', () => {
    expect(telephoneCheck('2 (555)5555555')).toBe(false);
    expect(telephoneCheck('3 8615294912')).toBe(false)
  }) 
  it('should accept this format: 555-555-5555 / 555555-5555', () => {
    expect(telephoneCheck('1 555-555-5555')).toBe(true);
    expect(telephoneCheck('555-555-5555')).toBe(true);
    expect(telephoneCheck('1 555-55-555-5')).toBe(false);
    expect(telephoneCheck('1 555555-555-5')).toBe(false);
    expect(telephoneCheck('55-5555-5555')).toBe(false);

  }) 
  it('should accept this format: (555)5555555', () => {
    expect(telephoneCheck('1 (555) 555-5555')).toBe(true);
    expect(telephoneCheck('(555)555-5555')).toBe(true);
    expect(telephoneCheck('(5555555555')).toBe(false);
    expect(telephoneCheck('555)5555555')).toBe(false);
    expect(telephoneCheck('(55555)55555')).toBe(false);

  })
  it('should not accept any other symbols', () => {
    expect(telephoneCheck('(555)5(55?)-5555')).toBe(false);
  }) 
})