import axios from 'axios'
import * as MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as sinon from 'sinon'

import * as reportActions from '../../src/actions/reports'

let reportDto = {
  date: new Date() + '',
  mac: '',
  name: 'Hello',
  path: 'C:\\',
  type: 1 + ''
}

let report = {
  date: new Date(),
  mac: '',
  name: 'Hello',
  path: 'C:\\',
  type: 1
}

const mockStore = configureMockStore([ thunk ])

describe('counter', function () {

  let sandbox, server
  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    server = sandbox.useFakeServer()
  })

  afterEach(function () {
    server.restore()
    sandbox.restore()
  })

  it('should return FETCHED_REPORTS type', function () {

    // nock('http://localhost:1337/')
    //   .get('/report')
    //   .reply(200, { data: [ reportDto ] })

    setTimeout(() => server.respond([200, { 'Content-Type': 'application/json' }, '[]']), 0)

    const expectedActions = [
      { type: 'FETCHED_REPORTS', payload: { reports: [ report ] } }
    ]

    const store = mockStore({ reports: [] })

    return store.dispatch(reportActions.updateReports())
      .then(() => {
        chai.expect(store.getActions()).to.equal(expectedActions)
      })
  })
})