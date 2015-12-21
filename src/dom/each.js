import { $$ } from '../simple'

export default function (els, fn) {
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, scope) {
      for (var i = 0, len = this.length; i < len; ++i) {
        fn.call(scope, this[i], i, this)
      }
    }
  }
  els = $$(els)
  Array.prototype.forEach.call(els, fn)
}
