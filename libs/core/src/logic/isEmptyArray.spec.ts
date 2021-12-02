import { testData, TestParam } from '../testData'
import { isEmptyArray } from './isEmptyArray'

const { ArrayEmpty, ...restData } = testData

const testParams: TestParam[] = [{ ...ArrayEmpty, expected: true }, ...Object.values(restData)]

describe('isEmptyArray', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isEmptyArray(value)).toBe(expected)
  })
})
