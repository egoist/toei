export default function () {
  document.body.innerHTML = ''
  const div = document.createElement('div')
  div.className = 'wrap'
  div.innerHTML = '<div class="item"></div>'.repeat(4)
  document.body.appendChild(div)
}
