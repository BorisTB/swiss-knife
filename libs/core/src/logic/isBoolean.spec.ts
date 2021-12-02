import { testData, TestParam } from '../testData'
import { isBoolean } from './isBoolean'

const { BooleanTrue, BooleanFalse, ...restData } = testData

const testParams: TestParam[] = [
  { ...BooleanTrue, expected: true },
  { ...BooleanFalse, expected: true },
  ...Object.values(restData)
]

describe('isBoolean', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isBoolean(value)).toBe(expected)
  })
})
