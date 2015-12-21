import { getStyle, setStyle } from '../../src/css/style'
import createElements from '../helpers/create-elements'
import each from '../../src/dom/each'

beforeEach(done => {
  createElements()
  done()
})

describe('style', () => {
  it('set style', done => {
    setStyle('.item', 'display', 'flex')
    each('.item', el => {
      expect(
        el.style.display
      ).to.equal('flex')
      done()
    })
  })
  it('get style', done => {
    const { display } = getStyle('.wrap')
    expect(display).to.equal('block')
    done()
  })
})
