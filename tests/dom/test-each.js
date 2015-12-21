import each from '../../src/dom/each'
import { $$ } from '../../src/simple'
import createElements from '../helpers/create-elements'

beforeEach(done => {
  createElements()
  done()
})

describe('each', () => {
  it('set html for each element', done => {
    each('.item', el => {
      el.innerHTML = 'foo'
    })
    expect(
      $$('.item')[0].innerHTML
    ).to.equal('foo')
    done()
  })
})
