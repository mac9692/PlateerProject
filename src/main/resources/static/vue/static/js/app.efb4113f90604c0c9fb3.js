webpackJsonp([1],{"3nog":function(t,e,n){t.exports=n.p+"static/img/plateer_logo.9a9db81.jpeg"},HSQo:function(t,e){},HhVD:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[t._m(0),t._v(" "),n("div",{staticClass:"menuWrap"},[n("ul",{staticClass:"menu"},[n("li",[n("router-link",{attrs:{to:{name:"BoardList"}}},[t._v("게시판")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("a",{staticClass:"logo",attrs:{href:"/"}},[e("img",{attrs:{alt:"Vue logo",src:n("3nog"),width:"160"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("상품")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("로그인")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("회원가입")])])}]};var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("CopyRight@ Plateer EBI 1 Park Jin Seong")])])}]};var i={components:{Header:n("VU/8")({},a,!1,function(t){n("UTvB")},"data-v-0586ceaa",null).exports,Footer:n("VU/8")({},o,!1,function(t){n("HhVD")},"data-v-5bba96d6",null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var c=n("VU/8")(i,s,!1,function(t){n("wcGb")},null,null).exports,u=n("/ocq"),d={data:function(){return{boardList:[],boardCount:""}},mounted:function(){this.getBoardList(),this.getBoardCount()},methods:{getBoardList:function(){var t=this;this.$axios.get("http://localhost/api/board").then(function(e){t.boardList=e.data}).catch(function(t){console.log(t)})},getBoardCount:function(){var t=this;this.$axios.get("http://localhost/api/board/count").then(function(e){t.boardCount=e.data}).catch(function(t){console.log(t)})},functionView:function(t){this.$router.push({name:"BoardView",params:{boardId:t}})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boardList"},[n("h3",[t._v("게시판 목록("+t._s(t.boardCount)+")")]),t._v(" "),n("table",[t._m(0),t._v(" "),n("tbody",t._l(t.boardList,function(e){return n("tr",{key:e.boardId},[n("td",[t._v(t._s(e.boardId))]),t._v(" "),n("td",[t._v(t._s(e.writer))]),t._v(" "),n("td",[n("a",{attrs:{href:"javascript:"},on:{click:function(n){return t.functionView(""+e.boardId)}}},[t._v(t._s(e.title))])]),t._v(" "),n("td",[t._v(t._s(e.content))]),t._v(" "),n("td",[t._v(t._s(e.registerDate))]),t._v(" "),n("td",[t._v(t._s(e.updateDate))])])}),0)]),t._v(" "),n("button",{attrs:{type:"button"}},[n("router-link",{attrs:{to:{name:"BoardInsert"}}},[t._v("게시물작성")])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("번호")]),t._v(" "),n("th",[t._v("작성자")]),t._v(" "),n("th",[t._v("제목")]),t._v(" "),n("th",[t._v("내용")]),t._v(" "),n("th",[t._v("작성일")]),t._v(" "),n("th",[t._v("수정일")])])])}]};var l=n("VU/8")(d,v,!1,function(t){n("n7lb")},"data-v-7ac1a1d3",null).exports,_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.msg))]),t._v(" "),n("p",[t._v("스프링부트 2.5.2")]),t._v(" "),n("p",[t._v("Oracle JDK 1.8.0_231")]),t._v(" "),n("p",[t._v("PostgreSQL 12.10")]),t._v(" "),n("p",[t._v("Vue.js")])])},staticRenderFns:[]};var p=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"박진성 개인과제"}}},_,!1,function(t){n("HSQo")},"data-v-d47b2428",null).exports,h={methods:{functionList:function(){this.$router.push({name:"BoardList",query:this.body})},submitForm:function(){var t=this;if(!this.title)return alert("제목을 기입해주세요."),void this.$refs.title.focus();var e=new FormData;e.append("writer",this.writer),e.append("title",this.title),e.append("content",this.content),this.$axios.post("http://localhost/api/board",e).then(function(e){alert("등록되었습니다."),console.log(e),t.functionList()}).catch(function(t){console.log(t)})}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("게시물 등록")]),t._v(" "),n("div",{staticClass:"insertWrap"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("table",{staticClass:"tableInsert"},[n("tr",[n("th",[t._v("작성자")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.writer,expression:"writer"}],ref:"writer",attrs:{type:"text"},domProps:{value:t.writer},on:{input:function(e){e.target.composing||(t.writer=e.target.value)}}})])]),t._v(" "),n("tr",[n("th",[t._v("제목")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],ref:"title",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),n("tr",[n("th",[t._v("내용")]),t._v(" "),n("td",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"content",domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),t._v(" "),n("tr",[t._m(0),t._v(" "),n("td",[n("button",{attrs:{type:"button"},on:{click:t.functionList}},[t._v("게시물목록")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("button",{attrs:{type:"submit"}},[this._v("등록하기")])])}]};var m=n("VU/8")(h,f,!1,function(t){n("pjvb")},"data-v-4c4b5996",null).exports,b={data:function(){return{boardId:"",writer:"",title:"",content:"",registerDate:"",updateDate:""}},mounted:function(){this.functionView()},methods:{functionList:function(){delete this.boardId,this.$router.push({name:"BoardList"})},functionUpdate:function(t){this.$router.push({name:"BoardUpdate",params:{boardId:t}})},functionView:function(){var t=this;this.$axios.get("http://localhost/api/board/"+this.$route.params.boardId).then(function(e){t.boardId=e.data.boardId,t.writer=e.data.writer,t.title=e.data.title,t.content=e.data.content,t.registerDate=e.data.registerDate,t.updateDate=e.data.updateDate}).catch(function(t){console.log(t)})},functionDelete:function(t){var e=this;this.$axios.delete("http://localhost/api/board/"+this.$route.params.boardId).then(function(t){alert("삭제되었습니다."),e.functionList()}).catch(function(t){console.log(t)})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boardView"},[n("h3",[t._v("게시물 상세화면")]),t._v(" "),n("table",[t._m(0),t._v(" "),n("tbody",[n("tr",[n("td",[t._v(t._s(t.boardId))]),t._v(" "),n("td",[t._v(t._s(t.writer))]),t._v(" "),n("td",[t._v(t._s(t.title))]),t._v(" "),n("td",[t._v(t._s(t.content))]),t._v(" "),n("td",[t._v(t._s(t.registerDate))]),t._v(" "),n("td",[t._v(t._s(t.updateDate))])])])]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.functionUpdate(t.boardId)}}},[t._v("게시물수정")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.functionDelete(t.boardId)}}},[t._v("삭제하기")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.functionList}},[t._v("게시물목록")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("번호")]),t._v(" "),n("th",[t._v("작성자")]),t._v(" "),n("th",[t._v("제목")]),t._v(" "),n("th",[t._v("내용")]),t._v(" "),n("th",[t._v("작성일")]),t._v(" "),n("th",[t._v("수정일")])])])}]};var w=n("VU/8")(b,g,!1,function(t){n("zSgb")},"data-v-15a86202",null).exports,$={data:function(){return{boardId:this.$route.params.boardId}},methods:{functionList:function(){this.$router.push({name:"BoardList",query:this.body})},submitForm:function(){var t=this;if(!this.title)return alert("제목을 기입해주세요."),void this.$refs.title.focus();var e="http://localhost/api/board/"+this.$route.params.boardId,n=new FormData;n.append("writer",this.writer),n.append("title",this.title),n.append("content",this.content),n.append("boardId",this.boardId),this.$axios.patch(e,n).then(function(e){alert("수정되었습니다."),console.log(e),t.functionList()}).catch(function(t){console.log(t)})}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("게시물 수정")]),t._v(" "),n("div",{staticClass:"updateWrap"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("table",{staticClass:"tableUpdate"},[n("tr",[n("th",[t._v("번호")]),t._v(" "),n("td",[t._v(t._s(t.boardId))])]),t._v(" "),n("tr",[n("th",[t._v("작성자")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.writer,expression:"writer"}],ref:"writer",attrs:{type:"text"},domProps:{value:t.writer},on:{input:function(e){e.target.composing||(t.writer=e.target.value)}}})])]),t._v(" "),n("tr",[n("th",[t._v("제목")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],ref:"title",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),n("tr",[n("th",[t._v("내용")]),t._v(" "),n("td",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"content",domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),t._v(" "),n("tr",[t._m(0),t._v(" "),n("td",[n("button",{attrs:{type:"button"},on:{click:t.functionList}},[t._v("게시물목록")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("button",{attrs:{type:"submit"}},[this._v("수정하기")])])}]};var I=n("VU/8")($,x,!1,function(t){n("qOTI")},"data-v-08022b92",null).exports;r.a.use(u.a);var y=new u.a({mode:"history",routes:[{path:"/",name:"BoardHelloWorld",component:p},{path:"/board",name:"BoardList",component:l},{path:"/board",name:"BoardInsert",component:m},{path:"/board/:boardId",name:"BoardView",component:w},{path:"/board",name:"BoardUpdate",component:I}]}),L=n("mtWM"),B=n.n(L);r.a.config.productionTip=!1,r.a.config.devtools=!0,r.a.prototype.$axios=B.a,new r.a({el:"#app",router:y,components:{App:c},template:"<App/>"}).$mount("#app")},UTvB:function(t,e){},n7lb:function(t,e){},pjvb:function(t,e){},qOTI:function(t,e){},wcGb:function(t,e){},zSgb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.efb4113f90604c0c9fb3.js.map