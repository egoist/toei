import each from '../dom/each'
import { $ } from '../simple'

export function getStyle (el) {
  el = $(el)
  // null means not return pseudo styles
  return window.getComputedStyle(el, null)
}

export function setStyle (els, name, value) {
  each(els, el => {
    el.style[name] = value
  })
}
