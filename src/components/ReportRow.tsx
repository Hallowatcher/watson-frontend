
import * as React from 'react'
import { Report } from '../models/Report';

export default class ReportRow extends React.Component<{report: Report}, any> {
  render() {
    return (
      <tr>
        <td>{this.props.report.name}</td>
        <td>{this.props.report.path}</td>
        <td>{this.props.report.mac}</td>
        <td>{this.props.report.date.toLocaleString()}</td>
      </tr>
    )
  }
}
