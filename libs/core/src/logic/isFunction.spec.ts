import { testData, TestParam } from '../testData'
import { isFunction } from './isFunction'

const { ArrowFunction, Function, ...restData } = testData

const testParams: TestParam[] = [
  { ...Function, expected: true },
  { ...ArrowFunction, expected: true },
  ...Object.values(restData)
]

describe('isFunction', () => {
  it.each(testParams)('returns $expected for $value', ({ value, expected }) => {
    expect(isFunction(value)).toBe(expected)
  })
})
