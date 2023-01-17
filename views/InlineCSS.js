function GetInline(error) {
  let message = '';
  message += '<style>'
  message += '  table.ErrList {'
  message += '    border:1px solid black;'
  message += '  }'
  message += '  td.ErrLine {'
  message += '    font-weight: bold;'
  message += '  }'
  message += '  td.ErrValue {'
  message += '    font-style: italic;'
  message += '  }'
  message += '</style>'
  return message
}

module.exports = {
  GetInline
}