webpackJsonp([3],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"3KQM":function(t,e,r){"use strict";var n=r("6qlc"),o=r("Gudf"),s=r("VU/8"),c=s(n.a,o.a,!1,null,null,null);e.a=c.exports},"6qlc":function(t,e,r){"use strict";var n=r("Dd8w"),o=r.n(n),s=r("NYxO");e.a={props:["item"],computed:o()({},Object(s.b)([]),{imgsrc:function(){return"../../../static/"+this.item.id+".svg"}}),methods:{goToRecipes:function(t){this.$router.push({name:"recipes",params:{id:t}})}}}},BT16:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"pure-g",class:t.header},[r("div",{staticClass:"pure-u-1-1 header-text"},[t._v("KATEGORIEN")])]),t._v(" "),r("div",{class:t.content2,on:{"&scroll":function(e){return t.handleScroll(e)}}},[r("div",{staticClass:"categories"},t._l(t.categories,function(t){return r("category",{key:t.id,attrs:{item:t}})}),1)]),t._v(" "),r("div",{staticClass:"pure-g",class:t.footer},[r("button",{staticClass:"pure-u-1-3",on:{click:function(e){return t.gback()}}},[t._m(0),t._v(" "),r("div",{staticClass:"footer-text"},[t._v("Zurück")])]),t._v(" "),r("button",{staticClass:"pure-u-1-3 active",on:{click:function(e){return t.goToCategories()}}},[t._m(1),t._v(" "),r("div",{staticClass:"footer-text"},[t._v("Kategorien")])]),t._v(" "),r("button",{staticClass:"pure-u-1-3",on:{click:function(e){return t.goTo("search")}}},[t._m(2),t._v(" "),r("div",{staticClass:"footer-text"},[t._v("Suchen")])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("i",{staticClass:"fa fa-arrow-left footer-icon thin"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("i",{staticClass:"fa fa-clone footer-icon"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("i",{staticClass:"fa fa-search footer-icon thin"})])}],s={render:n,staticRenderFns:o};e.a=s},Dd8w:function(t,e,r){"use strict";e.__esModule=!0;var n=r("woOf"),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}},Gudf:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category",on:{click:function(e){return t.goToRecipes(t.item.id)}}},[r("img",{staticClass:"cat_img",attrs:{src:t.imgsrc}}),t._v(" "),r("h1",[t._v(t._s(t.item.name.toUpperCase()))])])},o=[],s={render:n,staticRenderFns:o};e.a=s},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,r){var n=r("kM2E");n(n.S+n.F,"Object",{assign:r("To3L")})},To3L:function(t,e,r){"use strict";var n=r("+E39"),o=r("lktj"),s=r("1kS7"),c=r("NpIQ"),i=r("sB3e"),a=r("MU5D"),u=Object.assign;t.exports=!u||r("S82l")(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=u({},t)[r]||Object.keys(u({},e)).join("")!=n})?function(t,e){for(var r=i(t),u=arguments.length,l=1,f=s.f,d=c.f;u>l;)for(var h,v=a(arguments[l++]),g=f?o(v).concat(f(v)):o(v),p=g.length,m=0;p>m;)h=g[m++],n&&!d.call(v,h)||(r[h]=v[h]);return r}:u},V3tA:function(t,e,r){r("R4wc"),t.exports=r("FeBl").Object.assign},jmvG:function(t,e,r){"use strict";function n(){return!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}var o=r("Dd8w"),s=r.n(o),c=r("NYxO"),i=r("3KQM");e.a={components:{Category:i.a},computed:s()({},Object(c.b)(["categories","scrollCategory"]),{content2:function(){return n()?"content2d":"content2"},header:function(){return n()?"headerd":"header"},footer:function(){return n()?"footerd":"footer"}}),methods:{gback:function(){this.deleteR(),this.$router.back()},goTo:function(t){this.deleteR(),this.$router.push({name:t})},deleteR:function(){this.$store.dispatch("setScrollSearch",0),this.$store.dispatch("setScrollRecipe",0),localStorage.setItem("recipe",null),this.$store.dispatch("setwe",0)},goToCategories:function(){localStorage.setItem("recipe",null),this.$store.dispatch("setwe",0),this.$router.push({name:"categories"})},handleScroll:function(t){this.$store.dispatch("setScrollCategory",t.target.scrollTop)}},mounted:function(){this.$el.querySelector(".content2").scrollTop=this.scrollCategory},created:function(){var t=localStorage.getItem("recipe");t>0&&(window.location="https://rezepte.matbz.com/recipe/"+t),this.$store.dispatch("setScrollSearch",0),this.$store.dispatch("setScrollRecipe",0),this.$store.dispatch("setSearchString","")}}},rlI8:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("jmvG"),o=r("BT16"),s=r("VU/8"),c=s(n.a,o.a,!1,null,null,null);e.default=c.exports},woOf:function(t,e,r){t.exports={default:r("V3tA"),__esModule:!0}}});