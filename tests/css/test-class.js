import { getStyle, setStyle } from '../../src/css/style'
import { addClass, removeClass, toggleClass, setClass } from '../../src/css/class'
import createElements from '../helpers/createElements'
import each from '../../src/dom/each'
import { $ } from '../../src/simple'

beforeEach(done => {
  createElements()
  done()
})

describe('class', () => {
  it('add class', done => {
    addClass('.wrap', 'foo')
    expect(
      $('.wrap').className
    ).to.contains('foo')
    done()
  })

  it('remove class', done => {
    addClass('.wrap', 'foo')
    removeClass('.wrap', 'wrap')
    expect(
      $('.foo').className
    ).to.not.contains('wrap')
    done()
  })

  it('toggle class', done => {
    addClass('.wrap', 'foo')
    toggleClass('.wrap', 'foo bar')
    expect(
      $('.wrap').className
    ).to.contains('bar')
    expect(
      $('.wrap').className
    ).to.not.contains('foo')
    done()
  })

  it('set class', done => {
    setClass('.wrap', 'wrap foo bar')
    expect(
      $('.wrap').className
    ).to.contains('bar')
    expect(
      $('.wrap').className
    ).to.contains('foo')
    done()
  })
})
