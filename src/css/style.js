import each from '../dom/each'

export function getStyle (el) {
  const win = el.ownerDocument.defaultView
  // null means not return pseudo styles
  return win.getComputedStyle(el, null)
}

export function setStyle (els, name, value) {
  each(els, el => {
    el.style[name] = value
  })
}
