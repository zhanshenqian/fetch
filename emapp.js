import { IS_IOS } from './useragent'

/*
获取登录相关信息
*/
export const GET_LOGIN_INFO = (str) => {
  let strCB = '{"callbackname":"' + str + '"}'
  try {
    if (IS_IOS) {
    } else {
    }
  } catch (e) {
  }
}

/*
获取设备相关信息
*/
export const GET_DEVICE_INFO = (str) => {
  let strCB = '{"callbackname":"' + str + '"}'
  try {
    if (IS_IOS) {
    } else {
    }
  } catch (e) {
  }
}


/*
显示分享
*/
export const UPLOAD_FILE = ({url, autoCamera, succ}) => {
  try {
    if (IS_IOS) {
    } else {
      window.uploadCallBack = function (json) {
        json = JSON.parse(json)
        console.log(json)
        succ(json)
      }
      var params = '{"uploadurl":"' + url + '","autoCamera":"' + autoCamera + '","callback":"uploadCallBack"}'
    }
  } catch (e) {
  }
}

/* eslint-disable */

function eventOpenLive(s, a) {
  if (IS_IOS) {
    var iosstr = '{"callbackname":"callbackOpen","appname":"","scheme":"' + s + '"}'
  } else {

    var bytes = a.split('params=')
    bytes[1] = encodeURIComponent(base64encode(bytes[1]))
    var userAgent = navigator.userAgent.toLowerCase()
    var appname = ''
    // if (userAgent.indexOf("") != -1 || userAgent.indexOf("") != -1) {
    //   appname = ""
    // } else if (userAgent.indexOf("") != -1) {
    //   appname = ""
    // }
    // else if (userAgent.indexOf("") != -1) {
    //   appname = ""
    // }
    // else if (userAgent.indexOf("") != -1 || userAgent.indexOf("") != -1) {
    //   appname = ""
    // }
    var androidstr = '{"callbackname":"callbackOpen","appname":"' + appname + '","scheme":"' + bytes[0] + 'params=' + bytes[1] + '","isLocal":"false"}';
  }
}




var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(
 -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
 -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
 -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
 -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
 -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function base64encode(str) {
  var out, i, len;
  var c1, c2, c3;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
      out += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
    out += base64EncodeChars.charAt(c3 & 0x3F);
  }
  return out;
}


window.callbackOpen = function (returnValue){
  var str = JSON.parse(returnValue)
  if (str.code != "0") {
    if (IS_IOS) {

    } else {
      window.location.href=''
    }
  }
}



