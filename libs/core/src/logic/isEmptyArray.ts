import { isArray } from './isArray'

export function isEmptyArray(value: unknown): value is [] {
  return isArray(value) && value.length === 0
}
