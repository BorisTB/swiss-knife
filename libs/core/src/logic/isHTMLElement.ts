import { getWindowFromElement } from '../dom'
import { isNil } from './isNil'

export function isHTMLElement(value: unknown): value is HTMLElement {
  return !isNil(value) && value instanceof getWindowFromElement(value as HTMLElement)?.HTMLElement
}
