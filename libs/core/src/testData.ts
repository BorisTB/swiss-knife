export interface TestParam {
  value: any
  expected: boolean
  name: string
}

export const testData = {
  ArrowFunction: { value: () => 23, expected: false, name: 'arrow function' },
  Function: {
    value: function foo() {
      return 'foo'
    },
    expected: false,
    name: 'function'
  },
  NumberZero: { value: 0, expected: false, name: 'number zero' },
  NumberPositive: { value: 5, expected: false, name: 'positive number' },
  NumberNegative: { value: -5, expected: false, name: 'negative number' },
  StringNonEmpty: { value: 'hello', expected: false, name: 'non-empty string' },
  StringEmpty: { value: '', expected: false, name: 'empty string' },
  Null: { value: null, expected: false, name: 'null' },
  ObjectEmpty: { value: {}, expected: false, name: 'empty object' },
  ArrayEmpty: { value: [], expected: false, name: 'empty array' },
  Undefined: { value: undefined, expected: false, name: 'undefined' },
  HTMLElement: { value: document.createElement('div'), expected: false, name: 'HTML element' }
}
