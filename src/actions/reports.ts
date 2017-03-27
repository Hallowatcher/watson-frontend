
import axios from 'axios'
import { Report } from '../models/report'

const apiUrl = 'http://localhost:1337/report'

export function updateReports() {
  return (dispatch: any) => {
    axios
      .get(apiUrl, { params: { limit: 0 } })
      .then(result => {

        // Convert JSON response to type
        let reportData = result.data.map(report => {
          return <Report>{
            name: report.name,
            date: new Date(report.date),
            mac: report.mac,
            path: report.path,
            type: parseInt(report.type)
          }
        })

        // Dispatch done
        dispatch(fetchedReports(reportData))
      })
      .catch(reason => {
        console.error(reason)
      })
  }
}

function fetchedReports(reports: Array<Report>) {
  return {
    type: 'FETCHED_REPORTS',
    payload: { reports }
  }
}
