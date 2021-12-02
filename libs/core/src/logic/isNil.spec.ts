import { testData, TestParam } from '../testData'
import { isNil } from './isNil'

const { Null, Undefined, ...restData } = testData

const testParams: TestParam[] = [
  { ...Null, expected: true },
  { ...Undefined, expected: true },
  ...Object.values(restData)
]

describe('isNil', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isNil(value)).toBe(expected)
  })
})
