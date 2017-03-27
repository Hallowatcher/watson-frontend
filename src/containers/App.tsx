
import * as React from 'react';
import { connect } from 'react-redux';
import { updateReports } from '../actions/reports';
import { Report } from '../models/report';
import ReportRow from '../components/ReportRow';
import { Table } from 'react-bootstrap';

type StoreProps = {
  reports: Array<Report>
}

type DispatchProps = {
  updateReports()
}

class App extends React.Component<StoreProps & DispatchProps, any> {
  componentDidMount() {
    this.props.updateReports();
  }

  render() {

    let lastCrashReport = null;
    let rows = null;
    if (this.props.reports.length > 0) {
      let sortedReports = this.props.reports.sort((a, b) => {
        return a.date>b.date ? -1 : a.date<b.date ? 1 : 0;
      });

      let lastCrash = new Date(sortedReports[0].date);
      lastCrashReport = <div><b>Last crash report: </b><span>{lastCrash.toLocaleDateString()}</span></div>

      rows = sortedReports.map(report =>
        <ReportRow report={report} />
      )
    }

    return (
      <div style={{ padding: '0 30px' }}>
        <div><b>Number of crash reports: </b><span>{this.props.reports.length}</span></div>
        {lastCrashReport}
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Path</th>
              <th>MAC Address</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    )
  }
}

function storeToProps(store: any) {
  return {
    reports: store.get('reports')
  }
}

function dispatchToProps(dispatch: any) {
  return {
    updateReports: () => { dispatch( updateReports() ) }
  }
}

export default connect(
  storeToProps,
  dispatchToProps
)(App);
