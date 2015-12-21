import * as simple from '../src/simple'
import createElements from './helpers/create-elements'

beforeEach(done => {
  createElements()
  done()
})

describe('selector', () => {
  it('selects single dom element', done => {
    expect(
      simple.$('body')
    ).to.equal(document.body)
    done()
  })
  it('selects multi dom elements', done => {
    expect(
      simple.$$('.item').length
    ).to.equal(4)
    done()
  })
})
