import { testData, TestParam } from '../testData'
import { isArray } from './isArray'

const { ArrayEmpty, ArrayNonEmpty, ...restData } = testData

const testParams: TestParam[] = [
  { ...ArrayEmpty, expected: true },
  { ...ArrayNonEmpty, expected: true },
  ...Object.values(restData)
]

describe('isArray', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isArray(value)).toBe(expected)
  })
})
