import { testData, TestParam } from '../testData'
import { isNumber } from './isNumber'

const { NumberNegative, NumberPositive, NumberZero, ...restData } = testData

const testParams: TestParam[] = [
  { ...NumberNegative, expected: true },
  { ...NumberPositive, expected: true },
  { ...NumberZero, expected: true },
  ...Object.values(restData)
]

describe('isNumber', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isNumber(value)).toBe(expected)
  })
})
