import { isEmptyString } from './isEmptyString'
import { isString } from './isString'

export function isNonEmptyString(value: unknown): value is string {
  return isString(value) && !isEmptyString(value)
}
