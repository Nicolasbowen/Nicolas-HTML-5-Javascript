function showCurrentTime () {
  var now = new Date()
  // 获取当前的时间 小时分钟秒
  var hour = now.getHours()
  var minute = now.getMinutes()
  var second = now.getSeconds()

  // 获取元素中表示时间的p标签
  // 根据标签的id获取标签
  var pTime = document.getElementById('time')
  // 设置的内容为普通的文本内容
  // pTime.innerText = '<b>sss</b>'
  // 设置的内容为html文本内容，解析html文本内容
  // pTime.innerHTML = "<b>14:59</b>"
  // hour = hour< 10 ? "0"+hour : hour
  pTime.innerHTML = double(hour) + ':' +
                    double(minute) + ':' +
                    double(second)



  // 获取当前的年份
  var year = now.getFullYear()
  // 获取当前的月份
  var month = now.getMonth() + 1
  // 获取当前的日期
  var date = now.getDate()
  // 获取当前是星期几 0到6 （0是周日）
  var week = now.getDay()

  var pDate = document.getElementById('date')
  pDate.innerHTML = year + '年' +
                    month + '月' +
                    date + '日' + ' ' +
                    getWeek(week)
}
showCurrentTime()
setInterval(showCurrentTime, 1000)


/**
 * 封装方法：实现使单位的时间数字转换为两位
 */
function double (time) {
  return time < 10 ? '0' + time : time
}

/**
 * 封装方法：实现将数字表示的周几转换为汉字内容
 */
function getWeek (week) {
  switch (week) {
    case 0:
      return '星期日'
    case 1:
      return '星期一'
    case 2:
      return '星期二'
    case 3:
      return '星期三'
    case 4:
      return '星期四'
    case 5:
      return '星期五'
    case 6:
      return '星期六'

    default:
      break
  }
}
