(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-drawer",{attrs:{"show-if-above":"",width:200,breakpoint:700,elevated:""}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[a("q-expansion-item",{attrs:{"expand-separator":"",icon:"fas fa-database",label:"Database"}},[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"inset-level":1,clickable:""},on:{click:function(t){return e.$router.push("/tables")}}},[a("q-item-section",[a("q-item-label",[a("q-icon",{attrs:{name:"fas fa-table"}}),e._v("\n                  Tables\n                ")],1)],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"inset-level":1,clickable:""},on:{click:function(t){return e.$router.push("/user/permissions")}}},[a("q-item-section",[a("q-item-label",[a("q-icon",{attrs:{name:"fas fa-lock"}}),e._v("\n                  Permissions\n                ")],1)],1)],1)],1)],1),a("q-expansion-item",{attrs:{"expand-separator":"",icon:"fas fa-user",label:"Users"}},[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"inset-level":1,clickable:""},on:{click:function(t){return e.$router.push("/user/accounts")}}},[a("q-item-section",[a("q-item-label",[a("q-icon",{attrs:{name:"fas fa-list"}}),e._v("\n                  Accounts\n                ")],1)],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"inset-level":1,clickable:""},on:{click:function(t){return e.$router.push("/user/groups")}}},[a("q-item-section",[a("q-item-label",[a("q-icon",{attrs:{name:"fas fa-users"}}),e._v("\n                  Groups\n                ")],1)],1)],1)],1)],1),a("q-space"),a("q-separator"),a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.logout()}}},[a("q-item-section",[a("q-item-label",[a("q-icon",{attrs:{name:"fas fa-power-off"}}),e._v("\n              Logout\n            ")],1)],1)],1)],1)],1)],1),e.loggedIn()?a("q-page-container",[a("router-view")],1):e._e()],1)},n=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),i=a.n(o),s=a("2f62");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={name:"MainLayout",components:{},data:function(){return l({},Object(s["c"])(["loggedIn","drawerLeft"]),{essentialLinks:[]})},mounted:function(){console.log("Mounted main layout")},methods:l({},Object(s["b"])(["load"]),{logout:function(){localStorage.removeItem("token"),localStorage.removeItem("user "),this.$router.push("/login")}})},p=u,m=a("2877"),b=a("eebe"),f=a.n(b),d=a("4d5a"),q=a("e359"),v=a("65c6"),w=a("9c40"),g=a("6ac5"),O=a("eb85"),k=a("2c91"),h=a("9404"),Q=a("4983"),y=a("1c1c"),j=a("3b73"),P=a("66e5"),I=a("4074"),L=a("0170"),S=a("0016"),_=a("09e3"),x=a("714f"),D=Object(m["a"])(p,r,n,!1,null,null,null);t["default"]=D.exports;f()(D,"components",{QLayout:d["a"],QHeader:q["a"],QToolbar:v["a"],QBtn:w["a"],QToolbarTitle:g["a"],QSeparator:O["a"],QSpace:k["a"],QDrawer:h["a"],QScrollArea:Q["a"],QList:y["a"],QExpansionItem:j["a"],QItem:P["a"],QItemSection:I["a"],QItemLabel:L["a"],QIcon:S["a"],QPageContainer:_["a"]}),f()(D,"directives",{Ripple:x["a"]})}}]);