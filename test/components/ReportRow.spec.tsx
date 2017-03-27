
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import * as chai from 'chai';

import ReportRow from '../../src/components/ReportRow';
import { Report } from '../../src/models/report';

describe('ReportRow', function () {
  let renderer: TestUtils.ShallowRenderer;


  beforeEach(function () {
    let report: Report = {
      date: new Date(2017, 1, 1),
      mac: '',
      name: 'Hello',
      path: 'C:\\',
      type: 1
    }
    renderer = TestUtils.createRenderer()
    renderer.render(<ReportRow report={report} />)
  })

  it('should match snapshot', function () {
    expect(renderer).toMatchSnapshot();
  })

})
