import { getStyle, setStyle } from '../../src/css/style'
import createElements from '../helpers/createElements'
import each from '../../src/dom/each'

beforeEach(done => {
  createElements()
  done()
})

describe('style', () => {
  it('setStyle', done => {
    setStyle('.item', 'display', 'flex')
    each('.item', el => {
      expect(
        el.style.display
      ).to.equal('flex')
      done()
    })
  })
})
