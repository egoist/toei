import each from './each'
import { $ } from '../simple'

export function remove(els) {
  each(els, el => {
    el.parentNode.removeChild(el)
  })
}

export function next (el) {
  return $(el).nextElementSibling
}

export function prev (el) {
  return $(el).previousElementSibling
}

export function append (el, html) {
  el = $(el)
  el.insertAdjacentHTML('beforeend', html)
}

export function prepend (el, html) {
  el = $(el)
  el.insertAdjacentHTML('afterbegin', html)
}
