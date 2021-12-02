import { testData, TestParam } from '../testData'
import { isString } from './isString'

const { StringEmpty, StringNonEmpty, ...restData } = testData

const testParams: TestParam[] = [
  { ...StringEmpty, expected: true },
  { ...StringNonEmpty, expected: true },
  ...Object.values(restData)
]

describe('isString', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isString(value)).toBe(expected)
  })
})
