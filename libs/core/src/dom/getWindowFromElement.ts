export function getWindowFromElement(el: Element): typeof window {
  return el && el?.ownerDocument?.defaultView ? el.ownerDocument.defaultView : window
}
