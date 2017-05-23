
function getQueryString(key){
  var queryStr = window.location.search.substr(1);
  var queryArr = queryStr.split('&');
  for (var k in queryArr) {
    var queryBunch = queryArr[k];
    if (queryBunch.indexOf(key + '=') == 0) {
      return queryBunch.split('=')[1];
    }
  }
}
var debug = getQueryString("debug")

if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
  document.write("<script src='https://res.wx.qq.com/open/js/jweixin-1.0.0.js'><\/script>");
  document.write("<script src='./static/js/wxshare.js?v=1'><\/script>");
}
var _czc = _czc || [];
_czc.push(["_setAccount", "1260452286"]);
function alert(txt){
  mui.alert(txt)
}
;(function () { // 解决部分安卓机型rem 计算偏差问题
 if (!/(iPhone|iPod|iPad|iTouch|iOS)/i.test(navigator.userAgent)) {
  console.log('---')
  var html = document.getElementsByTagName('html')[0]
  var settedFs = parseInt(html.style.fontSize)
  var whileCount = 0
  var loop = setInterval(function () {
   var realFs = parseInt(window.getComputedStyle(html).fontSize)
   if (settedFs / realFs !== 1) {
     var settingFs = settedFs / realFs * settedFs
     html.setAttribute('style', 'font-size:' + settingFs + 'px!important')
   }
 }, 50)
  setTimeout(function () {
   window.clearInterval(loop)
 }, 1000)
}
})()
