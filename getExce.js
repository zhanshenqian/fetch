/**
 * Set Date to string
 * @param {JSONData} json
 * @param {ReportTitle} title
 * @param {TableHeader} header
 */
/* eslint-disable */
export const JsonToCSV = (JSONData, ReportTitle, TableHeader) => {
  let arrData = typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData
  let CSV = TableHeader ? TableHeader.replace(/[，]/g, ',') + '\r\n' : ''
  for (let i = 0; i < arrData.length; i++) {
    let row = ''
    for (let index in arrData[i]) {
      row += '"' + arrData[i][index] + '",'
    }
    row.slice(0, row.length - 1)
    CSV += row + '\r\n'
  }
  if (CSV === '') {
    alert('Invalid data')
    return
  }
  let filename = ReportTitle ? ReportTitle.replace(/[ ]/g, '_') : 'Report'
  let link = document.createElement('a')
  document.body.appendChild(link)
  let csv = "\ufeff" + CSV
  let blob = new Blob([csv], { type: 'text/csv,charset=utf-8' })
  let csvUrl = window.URL.createObjectURL(blob)
  link.download = filename + '.csv'
  link.href = csvUrl
  link.click()
  document.body.removeChild(link)
}
