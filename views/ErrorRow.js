function ErrorRow(error) {
  if ((typeof(error) == 'object') && (error !== null)) {
    let message = '<tr><td class="ErrLine">';
    if (error.line == "N/A") {
      message += '&nbsp;'
    } else {
      message += 'Line ' + error.line;
    }
    message += '</td>'
    if (error.value == "N/A") {
      message += '<td colspan="2" class="ErrMessage">' + error.message
    } else {
      message += '<td>' + error.message + '</td><td class="ErrValue">' + error.value
    }
    message += '</td></tr>'
    return message
  } else {
    return '<tr><td colspan="10" class="ErrMessage">Invalid Error provided</td></tr>'
  }
}

module.exports = {
  ErrorRow
}