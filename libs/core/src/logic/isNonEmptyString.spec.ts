import { testData, TestParam } from '../testData'
import { isNonEmptyString } from './isNonEmptyString'

const { StringNonEmpty, ...restData } = testData

const testParams: TestParam[] = [{ ...StringNonEmpty, expected: true }, ...Object.values(restData)]

describe('isNonEmptyString', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isNonEmptyString(value)).toBe(expected)
  })
})
