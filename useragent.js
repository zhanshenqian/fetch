
/*
是否是浪客直播APP
*/
export const IS_LIVE = navigator.userAgent.toLowerCase().indexOf('eastmoney_live') !== -1 || navigator.userAgent.toLowerCase().indexOf('eastmoney_emlive') !== -1

/*
是否是东财APP
*/
export const IS_EASTMONEY = navigator.userAgent.toLowerCase().indexOf('eastmoney') !== -1

/*
是否是微信
*/
export const IS_WEIXIN = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1

/*
是否是IOS
*/
export const IS_IOS = /(iPhone|iPod|iPad|iTouch|iOS)/i.test(navigator.userAgent)
