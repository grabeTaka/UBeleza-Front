(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-808882d0"],{9306:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",{staticClass:"grey lighten-3"},[n("div",{attrs:{id:"core-view"}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)])},i=[],o={name:"CoreView",metaInfo(){return{title:"Vue Material Dashboard by CreativeTim"}}},s=o,r=n("2877"),d=n("6544"),u=n.n(d),c=n("a75b"),l=n("0789"),p=Object(r["a"])(s,a,i,!1,null,null,null);e["default"]=p.exports;u()(p,{VContent:c["a"],VFadeTransition:l["c"]})},a75b:function(t,e,n){"use strict";n("daaf");var a=n("d10f");e["a"]=a["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:a,insetFooter:i,bottom:o,left:s}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${n}px`,paddingBottom:`${a+i+o}px`,paddingLeft:`${s}px`}}},render(t){const e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})},d10f:function(t,e,n){"use strict";var a=n("2b0e");e["a"]=a["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},daaf:function(t,e,n){}}]);
//# sourceMappingURL=chunk-808882d0.db9fce2d.js.map