(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1715ac2"],{"1a8d":function(t,e,a){},"2a7f":function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s});var i=a("71d9"),o=a("80d2");const s=Object(o["h"])("v-toolbar__title"),n=Object(o["h"])("v-toolbar__items");i["a"]},"2fa4":function(t,e,a){"use strict";a("20f6");var i=a("80d2");e["a"]=Object(i["h"])("spacer","div","v-spacer")},d10f:function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},d7e1:function(t,e,a){"use strict";var i=a("1a8d"),o=a.n(i);o.a},dc21:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{id:"core-app-bar",absolute:"",app:"",color:"transparent",flat:"",height:"88"}},[a("v-toolbar-title",{staticClass:"tertiary--text font-weight-light align-self-center"},[t.responsive?a("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[a("v-icon",[t._v("mdi-view-list")])],1):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),a("v-spacer"),a("v-toolbar-items",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-text-field",{staticClass:"mr-4 purple-input",attrs:{color:"purple",label:"Search...","hide-details":""}}),a("v-btn",{attrs:{icon:"",to:"admin/dashboard"}},[a("v-icon",{attrs:{color:"tertiary"}},[t._v("\n          mdi-view-dashboard\n        ")])],1),a("v-menu",{attrs:{bottom:"",left:"","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.attrs,o=e.on;return[a("v-btn",t._g(t._b({staticClass:"toolbar-items",attrs:{icon:"",to:"/notifications"}},"v-btn",i,!1),o),[a("v-badge",{attrs:{color:"error",overlap:""}},[a("template",{slot:"badge"},[t._v("\n                "+t._s(t.notifications.length)+"\n              ")]),a("v-icon",{attrs:{color:"tertiary"}},[t._v("\n                mdi-bell\n              ")])],2)],1)]}}])},[a("v-card",[a("v-list",{attrs:{dense:""}},t._l(t.notifications,function(e){return a("v-list-item",{key:e,on:{click:t.onClick}},[a("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)}),1)],1)],1),a("v-btn",{attrs:{to:"/user-profile",icon:""}},[a("v-icon",{attrs:{color:"tertiary"}},[t._v("\n          mdi-account\n        ")])],1)],1)],1)],1)},o=[],s=a("2f62"),n={data:()=>({notifications:["Mike, John responded to your email","You have 5 new tasks","You're now a friend with Andrew","Another Notification","Another One"],title:null,responsive:!1}),watch:{$route(t){this.title=t.name}},mounted(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:{...Object(s["b"])("app",["setDrawer","toggleDrawer"]),onClick(){this.setDrawer(!this.$store.state.app.drawer)},onResponsiveInverted(){window.innerWidth<991?this.responsive=!0:this.responsive=!1}}},r=n,l=(a("d7e1"),a("2877")),d=a("6544"),c=a.n(d),v=a("40dc"),u=(a("ff44"),a("a9ad")),b=a("f2e7"),p=a("fe6c"),f=a("f40d"),h=a("58df"),m=Object(h["a"])(u["a"],b["a"],Object(p["b"])(["left","bottom"]),f["a"]).extend({name:"v-badge",props:{color:{type:String,default:"primary"},overlap:Boolean,transition:{type:String,default:"fab-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--bottom":this.bottom,"v-badge--left":this.left,"v-badge--overlap":this.overlap}}},render(t){const e=this.$slots.badge&&[t("span",this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",attrs:this.$attrs,directives:[{name:"show",value:this.isActive}]}),this.$slots.badge)];return t("span",{staticClass:"v-badge",class:this.classes},[this.$slots.default,this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},e):e])}}),w=a("8336"),g=a("b0af"),_=a("132d"),k=a("8860"),V=a("da13"),y=a("5d23"),C=a("e449"),x=a("0fd9"),I=a("2fa4"),O=a("8654"),$=a("2a7f"),j=Object(l["a"])(r,i,o,!1,null,null,null);e["default"]=j.exports;c()(j,{VAppBar:v["a"],VBadge:m,VBtn:w["a"],VCard:g["a"],VIcon:_["a"],VList:k["a"],VListItem:V["a"],VListItemTitle:y["b"],VMenu:C["a"],VRow:x["a"],VSpacer:I["a"],VTextField:O["a"],VToolbarItems:$["a"],VToolbarTitle:$["b"]})},ff44:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a1715ac2.dbd74336.js.map