import { isArray } from './isArray'
import { isEmptyArray } from './isEmptyArray'

export function isNonEmptyArray(value: unknown): value is any[] {
  return isArray(value) && !isEmptyArray(value)
}
