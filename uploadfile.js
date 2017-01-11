
import {IS_IOS, IS_EASTMONEY} from './useragent'
import {UPLOAD_FILE} from './emapp'
const debug = process.env.NODE_ENV !== 'production'
const baseUrl = debug ? '' : ''

export const uploadfile = ({url, data, succ}) => {
  var inputFile = document.querySelector('#uploadfile')
  var file = inputFile.files[0]
  var base64 = ''
  if (!IS_IOS && IS_EASTMONEY) {
    var _url = debug ? baseUrl + url : window.location.origin + url
    UPLOAD_FILE({
      url: _url,
      autoCamera: false,
      succ (json) {
        if (succ && json.msg === 'success') {
          succ({
            result: json.code,
            serverpath: json.data.fromserver.serverpath,
            path: json.data.fromserver.path
          }, json.data.base64)
        }
      }
    })
  } else {
    if (/\/(?:jpeg|jpg|png)/i.test(file.type)) {
      var reader = new window.FileReader()
      reader.onload = function () {
        base64 = this.result
      }
      reader.readAsDataURL(file)
      var fd = new window.FormData()
      fd.append('uploadfile', file)
      console.log('--浏览器调用传图--')
      $.ajax({
        url: baseUrl + url,
        data: fd,
        cache: false,
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',
        beforeSend () {
        },
        success (json) {
          if (succ) {
            succ(json, base64)
          }
        }
      })
    }
  }
}

export const other = ''
