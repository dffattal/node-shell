console.log(Object.keys(process))

var currentDate = new Date()

var day = currentDate.getDate()
var month = currentDate.getMonth()
var year = currentDate.getFullYear()

if (month < 10) {
  month = Number('0' + month)
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

month = months[month]

if (day < 10) {
  day = '0' + day
}

var dayName = currentDate.getUTCDay()

console.log(Object.keys(currentDate))

console.log(dayName, day, month, year)

console.log(currentDate.toString())
