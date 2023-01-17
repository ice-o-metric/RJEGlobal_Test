const er = require('./ErrorRow')
const css = require('./InlineCSS')

function ShowErrors(errorList) {
  let message = '';
  if (!Array.isArray(errorList)) {
    if ((typeof(errorList) == 'object') && (errorList !== null)) {
      message = '<h3 class="ErrList">1 Error detected</h3><table class="ErrList">' + er.ErrorRow(errorList) + '</table>'
    } else {
      message = '<p class="ErrList">Invalid ErrorList sent.</p>'
    }
  } else {
    message = '<h3 class="ErrList">' + errorList.length + ' errors detected</h3><table class="ErrList">';
    for (count = 0; count < errorList.length; count++) {
      message += er.ErrorRow(errorList[count])
    }
    message += '</table>'
  }
  //return '<p>' + message + '</p>'
  let temp = '<html><body>' + css.GetInline();
  temp += message + '</body></html>';
  return temp;
}

module.exports = {
  ShowErrors
}