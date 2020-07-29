(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"051b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"q-pa-md q-gutter-sm"},[r("q-breadcrumbs",{scopedSlots:e._u([{key:"separator",fn:function(){return[r("q-icon",{attrs:{size:"1.2em",name:"arrow_forward"}})]},proxy:!0}])},[r("q-breadcrumbs-el",{attrs:{label:"Users",icon:"fas fa-user"}}),r("q-breadcrumbs-el",{attrs:{label:"Accounts",icon:"fas fa-address-book"}})],1)],1),r("q-separator"),r("q-page-sticky",{staticStyle:{"z-index":"3000"},attrs:{position:"bottom-right",offset:[20,20]}},[r("q-btn",{attrs:{label:"Add User",fab:"",icon:"add"},on:{click:function(t){e.newUserDrawer=!0}}})],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 q-pa-md"},[r("q-input",{attrs:{label:"search"},model:{value:e.userFilter,callback:function(t){e.userFilter=t},expression:"userFilter"}})],1),r("div",{staticClass:"col-12 q-gutter-sm"},[r("q-markup-table",{attrs:{flast:""}},[r("tbody",e._l(e.usersFiltered,(function(t){return r("tr",{staticStyle:{cursor:"pointer"},on:{click:function(r){return e.$router.push("/user/"+t.email)}}},[r("td",[e._v(e._s(t.email))]),r("td",[e._v(e._s(t.name))]),r("td",[e._v(e._s(t.created_at.split(".")[0].split("T").join(" ")))]),r("td",[r("q-btn",{attrs:{flat:"",icon:"fas fa-wrench",color:"black"}})],1)])})),0)])],1)]),r("q-drawer",{attrs:{overlay:"","content-class":"bg-grey-3",width:500,side:"right"},model:{value:e.newUserDrawer,callback:function(t){e.newUserDrawer=t},expression:"newUserDrawer"}},[r("q-scroll-area",{staticClass:"fit row"},[r("div",{staticClass:"q-pa-md"},[r("span",{staticClass:"text-h6"},[e._v("Create user")]),r("q-form",{staticClass:"q-gutter-md"},[r("q-input",{attrs:{label:"Name"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),r("q-input",{attrs:{label:"Email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),r("q-input",{attrs:{label:"Password",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),r("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.createUser()}}},[e._v("Create")]),r("q-btn",{on:{click:function(t){e.newUserDrawer=!1}}},[e._v("Cancel")])],1)],1)])],1),e.showHelp?e._e():r("q-page-sticky",{attrs:{position:"top-right",offset:[0,0]}},[r("q-btn",{attrs:{flat:"",fab:"",icon:"fas fa-question"},on:{click:function(t){e.showHelp=!0}}})],1),r("q-drawer",{attrs:{overlay:"",width:400,side:"right"},model:{value:e.showHelp,callback:function(t){e.showHelp=t},expression:"showHelp"}},[r("q-scroll-area",{staticClass:"fit"},[r("help-page",{on:{closeHelp:function(t){e.showHelp=!1}},scopedSlots:e._u([{key:"help-content",fn:function(){return[r("q-markdown",{attrs:{src:"::: tip\nYou can add users to your instance here. You can also send the sign up link where users can signup themselves.\n:::"}})]},proxy:!0}])})],1)],1)],1)},s=[],n=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("7f7f"),r("c47a")),o=r.n(n),l=r("2f62");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={name:"TablePage",methods:i(i({createUser:function(){var e=this;console.log("new user",this.user),this.user.tableName="user_account",e.createRow(e.user).then((function(t){e.user={},e.$q.notify({message:"User created"}),e.refresh(),e.newUserDrawer=!1})).catch((function(t){t instanceof Array?e.$q.notify({message:t[0].title}):e.$q.notify({message:"Failed to create user"})}))}},Object(l["b"])(["loadData","getTableSchema","createRow"])),{},{refresh:function(){var e=this,t="user_account";this.loadData({tableName:t,params:{page:{size:500}}}).then((function(t){console.log("Loaded data",t),e.users=t.data}))}}),data:function(){return i({text:"",userFilter:null,user:{},showHelp:!1,newUserDrawer:!1,users:[],filter:null,columns:[{name:"email",field:"email",label:"Email",align:"left",sortable:!0},{name:"name",field:"name",label:"Name",align:"left"},{name:"",format:function(){return"<span>hi</span>"}}]},Object(l["d"])([]))},mounted:function(){this.refresh()},computed:i(i({usersFiltered:function(){var e=this;return null==this.userFilter?this.users:this.users.filter((function(t){return t.email.indexOf(e.userFilter)>-1||t.name.indexOf(e.userFilter)>-1}))}},Object(l["c"])(["selectedTable"])),Object(l["d"])([])),watch:{}},f=u,d=r("2877"),p=r("ead5"),b=r("0016"),m=r("079e"),w=r("eb85"),h=r("de5e"),q=r("9c40"),g=r("27f9"),v=r("2bb1"),y=r("9404"),k=r("4983"),O=r("0378"),_=r("eebe"),j=r.n(_),x=Object(d["a"])(f,a,s,!1,null,null,null);t["default"]=x.exports;j()(x,"components",{QBreadcrumbs:p["a"],QIcon:b["a"],QBreadcrumbsEl:m["a"],QSeparator:w["a"],QPageSticky:h["a"],QBtn:q["a"],QInput:g["a"],QMarkupTable:v["a"],QDrawer:y["a"],QScrollArea:k["a"],QForm:O["a"]})}}]);