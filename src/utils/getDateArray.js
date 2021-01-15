function getDateArray(start, end) {
  const arr = []
  let dt = new Date(start)

  while (dt <= end) {
    arr.push(formatDate(dt))
    dt.setDate(dt.getDate() + 1)
  }
  return arr
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('')
}

module.exports = getDateArray
