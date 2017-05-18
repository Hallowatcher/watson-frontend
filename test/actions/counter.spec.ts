
import * as counterActions from '../../src/actions/counter'

describe('counter', function () {
  it('should return INCREMENT_COUNTER type', function () {
    const expectedType = 'INCREMENT_COUNTER'
    expect(counterActions.incrementCounter().type).toEqual(expectedType)
  })

  it('should return DECREMENT_COUNTER type', function () {
    const expectedType = 'DECREMENT_COUNTER'
    expect(counterActions.decrementCounter().type).toEqual(expectedType)
  })
})