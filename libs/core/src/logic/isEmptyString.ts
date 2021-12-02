import { isString } from './isString'

export function isEmptyString(value: unknown): value is string {
  return isString(value) && value.length === 0
}
