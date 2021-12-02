import { testData, TestParam } from '../testData'
import { isEmptyString } from './isEmptyString'

const { StringEmpty, ...restData } = testData

const testParams: TestParam[] = [{ ...StringEmpty, expected: true }, ...Object.values(restData)]

describe('isEmptyString', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isEmptyString(value)).toBe(expected)
  })
})
