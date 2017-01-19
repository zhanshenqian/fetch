/**
 * Set Date to string
 * @param {value} Date
 * @param {number1} num
 * @param {number2} num
 * @return time
 *import formateDate from '../../utils/fomateDate'
 */

/* eslint-disable */
module.exports = function (value, number1, number2) {
  let year =  value.getFullYear()
  let month =  (value.getMonth() + 1) < 10 ? '0' + (value.getMonth() + 1) : (value.getMonth() + 1)
  let data =  value.getDate() < 10 ? '0' + value.getDate() : value.getDate()
  let hours = value.getHours() < 10 ? '0' + value.getHours() : value.getHours()
  let minutes = value.getMinutes() < 10 ? '0' + value.getMinutes() : value.getMinutes()
  let seconds = value.getSeconds() < 10 ? '0' + value.getSeconds() : value.getSeconds()
  let time = year + '-' + month + '-' + data + ' ' + hours + ':' + minutes + ':' + seconds
  switch (arguments.length) {
  	case 1: return time;
  	case 2: return time.substring(0, arguments[1]);
  	case 3: return time.substring(arguments[1], arguments[2])
  }
}