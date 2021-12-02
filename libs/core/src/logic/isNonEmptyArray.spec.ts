import { testData, TestParam } from '../testData'
import { isNonEmptyArray } from './isNonEmptyArray'

const { ArrayNonEmpty, ...restData } = testData

const testParams: TestParam[] = [{ ...ArrayNonEmpty, expected: true }, ...Object.values(restData)]

describe('isNonEmptyArray', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isNonEmptyArray(value)).toBe(expected)
  })
})
