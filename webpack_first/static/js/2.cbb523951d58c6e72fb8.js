webpackJsonp([2,3],{83:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,".container[data-v-1328d134]{font-family:Microsoft Yahei;padding:.266667rem}button[data-v-1328d134]{width:6.666667rem;margin:.133333rem auto;display:block;line-height:1.2rem}","",{version:3,sources:["/./src/views/test.vue"],names:[],mappings:"AAAA,4BACE,4BAA+B,AAC/B,kBAAqB,CACtB,AAED,wBACE,kBAAmB,AACnB,uBAAyB,AACzB,cAAe,AACf,kBAAoB,CACrB",file:"test.vue",sourcesContent:['.container[data-v-1328d134] {\n  font-family: "Microsoft Yahei";\n  padding: 0.266667rem;\n}\n\nbutton[data-v-1328d134] {\n  width: 6.666667rem;\n  margin: 0.133333rem auto;\n  display: block;\n  line-height: 1.2rem;\n}'],sourceRoot:"webpack://"}])},109:function(e,t,n){var o=n(83);"string"==typeof o&&(o=[[e.id,o,""]]);n(15)(o,{});o.locals&&(e.exports=o.locals)},178:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(50),i=o(a),r="1.3.0",s="iphone",u="Wifi";t.default={data:function(){return{deviceId:"Nef81GNjMTE4MGM3MWYwYmNkM2Q4MWRiYjFhMDg5YTA0N2V8fDk0NDg1NjEzMDU2OTA2OA=efcc=",ctoken:"HI32A8zGsAAH7x6PoYmsAUNKnzA8oPsngUQ8HVVS4f-dwIM_nl5BwwBf-0GpVvhyZ4OuWI2OLhzQ_OixZLOehNCWVc5a_29RiuFIXiTvKYEyqoKtpvWttvJg4CLFJNaKztP5meyAiU8tE1CXMv5W1vDqKuPo70NYofC9WBgnohM",utoken:"s3wlV4neEHtHExgM6CbFlavsQEo8_rD2V2g7IIVpYZOQt1KOUkVzaLY5vS17xZJFXUR5qm6LFv8msJIFWUXBLb86JlkTErfS4iKGZ9Iifijr0WIGIWhSH3frmQKjBBD3OIpgB2e2qRJN3oBlYnoQpDxdQLBsJT7sULA1NRpK2lM9T-uhGAaEK3LNsR1waKsChWB_nJ-ObRQV3P8sSnUXrXWlf-IzIFTQz7eYyX-Zfb7gsmSFDnwaDxxUEh4nASh8-731zv0jtTJF5H4WuhejhYhcVqBr8F7Vajho9C0NaWF7-f4N_1PG1fDZJ-qHDDpFXJnxm0folNmDhhlaQOwxAsjaQVQMXfLJ"}},methods:{login:function(){var e=this;(0,i.default)("device_id",e.deviceId,{path:"/"}),(0,i.default)("ctoken",e.ctoken,{path:"/"}),(0,i.default)("utoken",e.utoken,{path:"/"}),(0,i.default)("version",r,{path:"/"}),(0,i.default)("plat",s,{path:"/"}),(0,i.default)("network",u,{path:"/"})},summary2016:function(){this.$router.push({path:"/act/summary2016"})}}}},192:function(e,t,n){var o,a;n(109),o=n(178);var i=n(194);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-1328d134",e.exports=o},194:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"container"},[t("label",[e._v("请输入deviceId:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.deviceId,expression:"deviceId"}],attrs:{type:"text",placeholder:"请输入deviceId"},domProps:{value:e._s(e.deviceId)},on:{input:function(t){t.target.composing||(e.deviceId=t.target.value)}}}),e._v(" "),t("label",[e._v("请输入ctoken:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ctoken,expression:"ctoken"}],attrs:{type:"text",placeholder:"请输入ctoken"},domProps:{value:e._s(e.ctoken)},on:{input:function(t){t.target.composing||(e.ctoken=t.target.value)}}}),e._v(" "),t("label",[e._v("请输入utoken:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.utoken,expression:"utoken"}],attrs:{type:"text",placeholder:"请输入utoken"},domProps:{value:e._s(e.utoken)},on:{input:function(t){t.target.composing||(e.utoken=t.target.value)}}}),e._v(" "),t("button",{on:{click:e.login}},[e._v("模拟登录")]),e._v(" "),t("button",{on:{click:e.summary2016}},[e._v("浪客故事")])])},staticRenderFns:[]}}});
//# sourceMappingURL=2.cbb523951d58c6e72fb8.js.map