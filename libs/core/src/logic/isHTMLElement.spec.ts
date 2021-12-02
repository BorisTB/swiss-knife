import { testData } from '../testData'
import { isHTMLElement } from './isHTMLElement'

const { HTMLElement, ...restData } = testData

const testParams: { value: any; expected: boolean }[] = [{ ...HTMLElement, expected: true }, ...Object.values(restData)]

describe('isHTMLElement', () => {
  it.each(testParams)('returns $expected for $name', ({ value, expected }) => {
    expect(isHTMLElement(value)).toBe(expected)
  })
})
