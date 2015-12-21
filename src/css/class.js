import each from '../dom/each'

export function setClass (els, className) {
  each(els, el => {
    el.className = className
  })
}

export function addClass (els, className) {
  each(els, el => {
    if (el.classList) {
      el.classList.add(className)
    } else {
      el.className += ' ' + className
    }
  })
}

export function removeClass (els, className) {
  each(els, el => {
    if (el.classList) {
      el.classList.remove(className)
    } else{
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }
  })
}

export function toggleClass (els, className) {
  each(els, el => {
    if (el.classList) {
      const classes = className.split(' ')
      for (let i = 0; i < classes.length; i++) {
        el.classList.toggle(classes[i])
      }
    } else {
      const classes = el.className.split(' ')
      const existingIndex = classes.indexOf(className)
      if (existingIndex >= 0) {
        classes.splice(existingIndex, 1)
      } else {
        classes.push(className)
      }
      el.className = classes.join(' ')
    }
  })
}
