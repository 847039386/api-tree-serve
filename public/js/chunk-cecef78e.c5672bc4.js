(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cecef78e"],{"5bb5":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-component-print-template"},[t.mock?a("div",t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"boxx"},[a("span",{ref:"key",refInFor:!0,staticClass:"key"},[t._v(t._s(e.key)+"：")]),e.children?a("div",[a("v-print-template",{attrs:{value:e.children,note:t.note,aone:t.aone,udata:t.udata,idata:t.idata,mock:t.mock,unote:t.unote,odata:t.odata}})],1):a("div",{staticClass:"value",staticStyle:{width:"700px"}},[a("div",{staticClass:"ml10 mb10 text-blue-grey"},[a("q-option-group",{attrs:{options:t.mock_mode,color:"primary",inline:"",dense:""},model:{value:e.mock_mode,callback:function(a){t.$set(e,"mock_mode",a)},expression:"item.mock_mode"}})],1),a("div",{staticClass:"ml10 mb10 mock_defaultmenu"},["default"==e.mock_mode?a("v-selectmenu",{staticStyle:{width:"200px"},attrs:{data:t.getMockMenu(),title:"随机数据",width:500,"key-field":"mock","show-field":"title"},scopedSlots:t._u([{key:"row",fn:function(e){var i=e.row;return[a("span",[a("span",{staticClass:"text-green",staticStyle:{"font-weight":"bold"},domProps:{innerHTML:t._s(i.title)}}),a("span",{staticClass:"inlineBlock",staticStyle:{margin:"0 10px"}},[t._v("-")]),a("span",{staticClass:"text-grey "},[t._v("例：")]),a("span",{staticClass:"text-grey",domProps:{innerHTML:t._s(i.desc)}})])]}}],null,!0),model:{value:e.mock_random,callback:function(a){t.$set(e,"mock_random",a)},expression:"item.mock_random"}}):a("div",{staticClass:"aux-input ml5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mock_rule,expression:"item.mock_rule"}],staticClass:"input-control",staticStyle:{width:"150px"},attrs:{placeholder:"规则",type:"text"},domProps:{value:e.mock_rule},on:{input:function(a){a.target.composing||t.$set(e,"mock_rule",a.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mock_value,expression:"item.mock_value"}],staticClass:"input-control",staticStyle:{width:"150px"},attrs:{placeholder:"值",type:"text"},domProps:{value:e.mock_value},on:{input:function(a){a.target.composing||t.$set(e,"mock_value",a.target.value)}}}),a("div",{staticClass:"mt10"},[a("div",{staticStyle:{color:"#D32F2F"}},[a("span",{staticClass:"text-blue-grey"},[t._v("规则：")]),t._v(t._s(e.mock_rule||"无"))]),a("div",[a("span",{staticClass:"text-blue-grey"},[t._v("```值：")]),t._v(t._s(e.mock_value||"无"))])])])],1)])])})),0):a("div",t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"boxx"},[a("span",{ref:"key",refInFor:!0,staticClass:"key",on:{click:function(a){return t.tapKey(e)}}},[t._v(t._s(e.key)+"：")]),e.children?a("div",[a("v-print-template",{attrs:{value:e.children,note:t.note,aone:t.aone,udata:t.udata,idata:t.idata,mock:t.mock,unote:t.unote,odata:t.odata},on:{tapKey:function(a){return t.tapKey(e)}}})],1):a("span",{staticClass:"value ml5"},["Array"==e.type?a("span",[t.udata?a("span",[e.data.length>0?a("span",[a("span",[t._v("[")]),a("br"),t._l(e.data,(function(i,s){return a("span",{key:s},[t.udata?a("div",{staticClass:"aux-input mb5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data[s],expression:"item.data[i]"}],staticClass:"input-control",attrs:{placeholder:"值",type:"text"},domProps:{value:e.data[s]},on:{input:function(a){a.target.composing||t.$set(e.data,s,a.target.value)}}})]):a("span",[t._v(t._s(i))]),a("br")])})),a("span",[t._v("]")])],2):a("span",[t._v("[ ]")])]):t._e(),t.unote?a("div",{staticClass:"aux-input ml5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.note,expression:"item.note"}],staticClass:"input-control",attrs:{placeholder:"注解",type:"text"},domProps:{value:e.note},on:{input:function(a){a.target.composing||t.$set(e,"note",a.target.value)}}})]):t._e(),t.idata&&!t.overflow?a("span",[e.data.length>0?a("span",{style:t.getDataStatusStyle(e.data_status)},[a("span",[t._v("[")]),a("br"),t._l(e.data,(function(e,i){return a("span",{key:i,staticStyle:{"text-indent":"20px",display:"block",height:"20px","line-height":"20px"}},[a("span",[t._v(t._s(e))]),a("br")])})),a("span",[t._v("]")])],2):a("span",[t._v("[ ]")])]):a("span",{staticClass:"ml5",class:t.overflow?"aux-overflow":""},[t._v(" [ Array ...... ] ")]),t.odata?a("div",{staticClass:"ml10 text-blue-grey"},[a("q-option-group",{attrs:{options:t.data_status,color:"primary",inline:"",dense:""},model:{value:e.data_status,callback:function(a){t.$set(e,"data_status",a)},expression:"item.data_status"}})],1):t._e(),t.note?a("span",{staticClass:"aux-note ml10"},[a("span",{staticClass:"a-overflow"},[t._v("// "+t._s(e.note))])]):t._e()]):a("span",[t.udata?a("span",{staticClass:"inlineBlock"},[a("div",{staticClass:"aux-input ml5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data,expression:"item.data"}],staticClass:"input-control",attrs:{placeholder:"值",type:"text"},domProps:{value:e.data},on:{input:function(a){a.target.composing||t.$set(e,"data",a.target.value)}}})])]):t._e(),t.unote?a("div",{staticClass:"aux-input ml5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.note,expression:"item.note"}],staticClass:"input-control",attrs:{placeholder:"注解",type:"text"},domProps:{value:e.note},on:{input:function(a){a.target.composing||t.$set(e,"note",a.target.value)}}})]):t._e(),t.idata?a("span",{staticClass:"ml5"},[a("span",{staticClass:"auxdata",class:t.overflow?"aux-overflow":"",style:t.getDataStatusStyle(e.data_status)},[t._v(t._s(e.data))])]):t._e(),t.odata?a("div",{staticClass:"ml10 text-blue-grey"},[a("q-option-group",{attrs:{options:t.data_status,color:"primary",inline:"",dense:""},model:{value:e.data_status,callback:function(a){t.$set(e,"data_status",a)},expression:"item.data_status"}})],1):t._e(),t.note?a("span",{staticClass:"aux-note ml10"},[e.note?a("span",{staticClass:"a-overflow"},[t._v("// "+t._s(e.note))]):t._e()]):t._e()])])])})),0)])},s=[],n=a("83c5"),o=a("e048"),r={name:"VPrintTemplate",components:{VPrintTemplate:u},props:{value:{type:[Object,Array]},note:{type:[Boolean],default:!1},unote:{type:[Boolean],default:!1},aone:{type:[Boolean],default:!1},udata:{type:[Boolean],default:!1},idata:{type:[Boolean],default:!0},odata:{type:[Boolean],default:!1},mock:{type:[Boolean],default:!1},overflow:{type:[Boolean],default:!0}},data:function(){return{list:[],parent:{},mock_mode:[{label:"普通模式",value:"default"},{label:"高级模式",value:"high"}],data_status:[{label:"必填",value:"default"},{label:"选填",value:"optional"},{label:"不填",value:"not"}]}},created:function(){this.list=this.value.list||[],this.parent=this.value.parent,this.aone&&(this.list=o["a"].aone(this.list))},methods:{getMockMenu:function(){return o["a"].mockRandom()},getDataStatusStyle:function(t){var e={};switch(t){case"optional":e={color:"#027BE3"};break;case"not":e={color:"#9e9e9e",textDecoration:"line-through"};break;default:e={color:"#0b7500"};break}return e},tapKey:function(t){n["a"].$emit("tapKey",JSON.parse(JSON.stringify(t)))}}},l=r,c=(a("6715"),a("2877")),p=a("fe09"),d=Object(c["a"])(l,i,s,!1,null,null,null),u=e["a"]=d.exports;d.options.components=Object.assign({QOptionGroup:p["t"]},d.options.components||{})},"5fc5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-stepper",{ref:"stepper",attrs:{"header-nav":"",color:"primary",animated:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("q-step",{attrs:{name:1,title:"填写API",icon:"settings",done:t.step>1,"header-nav":t.step>1}},[a("div",{staticClass:"caui-step scroll"},[a("div"),a("div",{staticStyle:{width:"1000px",margin:"20px auto","max-width":"100%"}},[a("div",{staticClass:"text-h4",staticStyle:{"margin-bottom":"20px"}},[t._v(" "+t._s(t.MProject.defaultProject.cname||"无")+" "),a("q-badge",{attrs:{transparent:"",color:"primary"}},[t._v(" 域名："+t._s(t.MProject.defaultProject.domain||"无")+" ")])],1),a("q-select",{attrs:{filled:"",options:t.apiTypeOptions,label:"请求类型"},model:{value:t.apiType,callback:function(e){t.apiType=e},expression:"apiType"}}),a("q-radio",{attrs:{val:"default",label:"普通模式"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}}),a("q-radio",{attrs:{val:"high",label:"高级模式"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}}),"default"==t.mode?a("div",[a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{filled:"",label:"填写URL"},model:{value:t.mainUrl,callback:function(e){t.mainUrl=e},expression:"mainUrl"}})],1):a("div",[a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{filled:"",label:"Api地址必填：(如：/api/xxx/xxx/xxx)"},model:{value:t.api,callback:function(e){t.api=e},expression:"api"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{filled:"",label:"参数名选填请以英文逗号为分隔符：(如：aaa,bbb,ccc)"},model:{value:t.pramas,callback:function(e){t.pramas=e},expression:"pramas"}})],1),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{filled:"",type:"textarea",label:"api描述"},model:{value:t.describe,callback:function(e){t.describe=e},expression:"describe"}})],1)]),a("q-separator"),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"下一步"},on:{click:t.createMainUrl}})],1)],1),a("q-step",{attrs:{name:2,title:"填写参数",icon:"create_new_folder",done:t.step>2,"header-nav":t.step>2}},[a("div",{staticClass:"caui-step scroll"},[a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v("请求API接口："),a("span",{staticClass:"text-green"},[t._v(t._s(t.CAResult.url))])]),t.args.list?a("print-template",{attrs:{value:t.args,unote:"",udata:"",idata:!1}}):a("div",{staticClass:"caui-step scroll"},[t._v("无参数")])],1),a("q-separator"),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"下一步"},on:{click:t.getResponse}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"上一步"},on:{click:function(e){t.step=1}}})],1)],1),a("q-step",{attrs:{name:3,title:"返回API数据",icon:"create_new_folder",done:t.step>3,"header-nav":t.step>3}},[a("div",{staticClass:"caui-step scroll"},[a("print-template",{attrs:{value:t.response,unote:"",aone:""}})],1),a("q-separator"),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"下一步"},on:{click:function(){t.step=4}}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"上一步"},on:{click:function(e){t.step=2}}})],1)],1),a("q-step",{attrs:{name:4,title:"生成数据",icon:"add_comment",done:t.step>4,"header-nav":t.step>4}},[a("div",{staticClass:"caui-step scroll"},[a("q-timeline",{attrs:{color:"secondary"}},[a("q-timeline-entry",{attrs:{heading:"",body:"生成数据"}}),a("q-timeline-entry",{attrs:{title:"参数注释",subtitle:"parame note"}},[a("print-template",{attrs:{value:t.args,note:""}})],1),a("q-timeline-entry",{attrs:{title:"返回值注释",subtitle:"results note"}},[a("print-template",{attrs:{value:t.response,note:""}})],1)],1)],1),a("q-separator"),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:"完成创建"},on:{click:t.createApi}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"上一步"},on:{click:function(e){t.step=3}}})],1)],1)],1)],1)},s=[],n=(a("a4d3"),a("e01a"),a("d28b"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("ade3")),o=a("e048"),r=a("5bb5"),l=a("c695"),c=a.n(l),p=a("2f62");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={components:{printTemplate:r["a"]},data:function(){var t=this.$q.localStorage.getItem("createApiDefaultMode")||"default";return{step:1,args:{},response:{},CAResult:{},describe:"",pramas:"",api:"",apiType:"GET",apiTypeOptions:["GET","POST"],mode:t,mainUrl:""}},computed:u({},Object(p["b"])({MProject:function(t){return t.Project},MVapi:function(t){return t.Vapi}})),watch:{"MVapi.create.loading":function(t){t?this.$q.loading.show({message:"创建中"}):this.$q.loading.hide()},mode:function(t){this.$q.localStorage.set("createApiDefaultMode",t)},"MVapi.reptile.loading":function(t){t?this.$q.loading.show({message:"请求API中"}):this.$q.loading.hide()}},methods:{resetData:function(){this.step=1,this.args={},this.response={},this.CAResult={},this.describe="",this.pramas="",this.api=""},getResponse:function(){var t=this,e=JSON.parse(JSON.stringify(t.args)),a=o["a"].inverse(e.list),i=this.CAResult.url;this.$store.dispatch("Cmd/send",{content:"请求Api：".concat(i)}),this.$store.dispatch("Vapi/getResponse",{url:i,type:t.apiType,req:JSON.stringify(a),success:function(e){t.response=o["a"].getParent(e),t.step=3},fail:function(){t.$q.dialog({title:"错误提示",message:"请求Api：".concat(i," 请求失败")})}})},createApi:function(){var t=this,e={project_id:this.CAResult.project._id,api:this.CAResult.api,type:this.apiType,describe:this.describe,req:JSON.stringify(this.args),res:JSON.stringify(this.response)};this.$store.dispatch("Vapi/create",{result:e,success:function(){t.$q.notify({position:"top-right",icon:"ion-add",message:"创建API：".concat(t.CAResult.url," 成功"),timeout:2e3,closeBtn:"关闭"}),t.$store.dispatch("Cmd/send",{content:"创建API：".concat(t.CAResult.url," 成功"),color:"text-green"}),t.resetData(),t.$router.push("/")}})},distinct:function(t){var e=[],a={},i=!0,s=!1,n=void 0;try{for(var o,r=t[Symbol.iterator]();!(i=(o=r.next()).done);i=!0){var l=o.value;a[l]||(e.push(l),a[l]=1)}}catch(c){s=!0,n=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw n}}return e},createMainUrl:function(){var t=this.MProject.defaultProject,e=this.mode,a=this.api,i=this.pramas,s=this.mainUrl,n=this.checkMode(e,a,i,s,t);n.success?(this.args=o["a"].getParent(n.queryKey),this.CAResult=n,this.step=2):this.$q.dialog({title:"错误提示",message:n.msg})},checkDefaultMode:function(t,e){var a=!0,i="",s=c.a.parseUrl(t),n=c.a.parseUrl(e.domain),o=s.origin,r=n.origin;return o!=r&&(i="你当前添加的api并不是当前项目的域名。",a=!1),a?{success:a,url:e.domain+s.pathname,api:s.pathname,project:e,queryKey:s.searchQuery}:{success:a,msg:i}},checkHighMode:function(t,e,a){var i={};if(e){var s=e.split(",");s=this.distinct(s);for(var n=0;n<s.length;n++)s[n]&&(i[s[n]]="")}return{success:!0,url:a.domain+t,api:t,project:a,queryKey:i}},checkMode:function(t,e,a,i,s){var n={};if(s._id)switch(t){case"high":n=this.checkHighMode(e,a,s);break;default:n=this.checkDefaultMode(i,s),console.log(n);break}else n={success:!1,msg:"必须设置默认项目才允许添加API"};return n}}},v=m,f=(a("88f5"),a("2877")),h=a("fe09"),y=Object(f["a"])(v,i,s,!1,null,null,null);e["default"]=y.exports;y.options.components=Object.assign({QBtn:h["d"],QStepper:h["D"],QStep:h["C"],QBadge:h["b"],QSelect:h["y"],QRadio:h["w"],QInput:h["n"],QSeparator:h["z"],QStepperNavigation:h["E"],QTimeline:h["J"],QTimelineEntry:h["K"]},y.options.components||{})},6715:function(t,e,a){"use strict";var i=a("f212"),s=a.n(i);s.a},"673d":function(t,e,a){},"83c5":function(t,e,a){"use strict";var i=a("2b0e");e["a"]=new i["default"]},"88f5":function(t,e,a){"use strict";var i=a("673d"),s=a.n(i);s.a},e048:function(t,e,a){"use strict";a("fb6a"),a("a9e3"),a("d3b7"),a("25f0"),a("159b");var i=[{title:"文章类",list:[{id:1,title:"姓名",mock:"@cname",desc:"张三"},{id:2,title:"标题",mock:"@ctitle",desc:"这是一列标题"},{id:3,title:"图片",mock:"@image()",desc:"data:image/png;base64,iVBORw0KMg"},{id:4,title:"内容",mock:"@cparagraph",desc:"这是内容"},{id:5,title:"时间",mock:"@now",desc:"2017-10-25 17:57:38"},{id:6,title:"email",mock:"@email",desc:"xxxxxx@xx.com"},{id:7,title:"url",mock:"@url",desc:"mid://hykgdjwnf.za/anv"},{id:8,title:"ip",mock:"@ip",desc:"147.189.148.79"},{id:9,title:"身份证",mock:"@id",desc:"220000201703080628"},{id:10,title:"GUID",mock:"@guid",desc:"5954Ff50C92-B2F8-2BAF-3Bd1-571Cf7eDBd07488"}]},{title:"区域类",list:[{id:11,title:"邮政编码",mock:"@zip",desc:"595488"},{id:12,title:"区域",mock:"@region",desc:"华东"},{id:13,title:"省",mock:"@province",desc:"台湾"},{id:14,title:"市",mock:"@city",desc:"忻州市"},{id:15,title:"区",mock:"@county",desc:"岳普湖县"},{id:16,title:"省市区",mock:"@county(true)",desc:"重庆 重庆市 渝中区"}]},{title:"颜色",list:[{id:17,title:"hex",mock:"@hex",desc:"#RRGGBB"},{id:18,title:"rgb",mock:"@rgb",desc:"rgb(r, g, b)"},{id:19,title:"rgba",mock:"@rgba",desc:"rgb(r, g, b,a)"},{id:20,title:"hsl",mock:"@hsl",desc:"hsl(h, s, l)"}]}];e["a"]={getParent:function(t,e,a,i,s){s=s||null,i=i||null,e=e||0,a=a||0;var n=[];for(var o in t){++e;var r={id:e,pid:a,key:o},l=this.initAnalysis(t[o]);if(r.type=l.type,r.ptype=i,r.parent=s,r.note="",r.mock_random="",r.mock_mode="default",r.data_status="default",r.mock_rule="",r.mock_value="",l.isChild){var c={};c.key=r.key,c.id=r.id,c.ptype=r.ptype,c.pid=r.pid,c.type=r.type,r.children=this.getParent(t[o],e,e,l.type,c)}else r.data=t[o];n.push(r)}return{list:n,parent:s}},initAnalysis:function(t){var e=Object.prototype.toString.call(t),a=!1,i="String";switch(e){case"[object Object]":a=!0,i="Object";break;case"[object Array]":"[object Object]"==Object.prototype.toString.call(t[0])?(a=!0,i="ArrayObject"):(a=!1,i="Array");break;case"[object String]":a=!1,i="String";break;case"[object Number]":a=!1,i="Number";break;case"[object Boolean]":a=!1,i="Boolean";break}return{type:i,isChild:a}},clear:function(t){for(var e in t){var a=this.initAnalysis(t[e]);"data"==e&&(t["data"]=""),a.isChild&&this.clear(t[e])}return t},aone:function(t){for(var e in t){var a=this.initAnalysis(t[e]);"ArrayObject"==t["type"]&&t["children"]&&t["children"].list&&(t["children"].list=t["children"].list.slice(0,1)),a.isChild&&this.aone(t[e])}return t},inverseCompilation:function(t,e,a){var i={},s=[];if(a)for(var n in t){var o=t[n]["children"]["list"];for(var r in o){var l=o[r],c=l["children"],p=l[e.key],d=l[e.data];c?"ArrayObject"==l["type"]?i[p]=this.inverseCompilation(c["list"],e,!0):i[p]=this.inverseCompilation(c["list"],e):i[p]=this.conversion(d)}s.push(i),i={}}else for(var u=0;u<t.length;u++){var m=t[u],v=m["children"],f=m[e.key],h=m[e.data];v?"ArrayObject"==m["type"]?i[f]=this.inverseCompilation(v["list"],e,!0):i[f]=this.inverseCompilation(v["list"],e):i[f]=this.conversion(h)}return a?s:i},inverse:function(t){return this.inverseCompilation(t,{key:"key",data:"data"})},mock:function(t,e){var a={},i=[],s="",n="",o="key",r="mock_rule",l="mock_mode",c="mock_value",p="mock_random";if(e)for(var d in t){var u=t[d]["children"]["list"];for(var m in u){var v=u[m],f=v["children"];"default"!==v[l]?(s=v[o]+"|"+v[r],n=v[c]):(s=v[o],n=v[p]),f?"ArrayObject"==v["type"]?a[s]=this.mock(f["list"],!0):a[s]=this.mock(f["list"]):a[s]=this.conversion(n)}i.push(a),a={}}else for(var h=0;h<t.length;h++){var y=t[h],b=y["children"];"default"!==y[l]?(s=y[o]+"|"+y[r],n=y[c]):(s=y[o],n=y[p]),b?"ArrayObject"==y["type"]?a[s]=this.mock(b["list"],!0):a[s]=this.mock(b["list"]):a[s]=this.conversion(n)}return e?i:a},mockRandom:function(){return i},conversion:function(t){var e=t;if("string"===typeof t)try{e=JSON.parse(t)}catch(i){if("true"==t)t=!0;else if("false"==t)t=!1;else{var a=Number(t);isNaN(a)||(t=a)}}return e},getParentTree:function(t,e){var a=this;return e=e||[],t.list&&t.list.forEach((function(t){t.children?(a.getParentTree(t.children,e),delete t.children,e.push(t)):e.push(t)})),e}}},f212:function(t,e,a){}}]);
//# sourceMappingURL=chunk-cecef78e.c5672bc4.js.map