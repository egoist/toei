import * as simple from '../src/simple'

describe('selector', () => {
  it('selects single dom element', done => {
    expect(
      simple.$('body')
    ).to.equal(document.body)
    done()
  })
})
