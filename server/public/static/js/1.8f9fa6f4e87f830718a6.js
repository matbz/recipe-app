webpackJsonp([1],{"/KFX":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("AHJT"),i=n("cM92"),s=n("VU/8"),c=s(r.a,i.a,!1,null,null,null);e.default=c.exports},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},AHJT:function(t,e,n){"use strict";function r(){return!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}var i=n("fZjL"),s=n.n(i),c=n("Dd8w"),o=n.n(c),a=n("IcnI"),u=n("NYxO"),l=n("Z9ZI");e.a={components:{RecipeListItem:l.a},beforeRouteEnter:function(t,e,n){0===a.a.getters.recipesFull.length?a.a.dispatch("getRecipesFull").then(function(t){return n()}):n()},data:function(){return{recipeList:[],msearchString:"",foundRecipeIds:[]}},computed:o()({},Object(u.b)(["recipes","steps","ingredients","ingredientGroups","recipesFull","searchString","scrollSearch"]),{content2:function(){return r()?"content2d":"content2"},header:function(){return r()?"headerd":"header"},footer:function(){return r()?"footerd":"footer"}}),methods:{goTo:function(t){this.$router.push({name:t})},searchAction:function(){this.$store.dispatch("setSearchString",this.msearchString),this.search()},search:function(){var t=this;this.foundRecipeIds=[];var e=this.searchString.split(/[\s, ]+/);if(e=e.map(function(t){return t.toLowerCase()}),e=e.filter(function(t){return t.length>2}),e.length<1)return void(this.recipeList=[]);var n=[],r=0;this.recipesFull.forEach(function(i){var c=[];if(r!==i.id){r=i.id,n=t.recipesFull.filter(function(t){return t.id===r}),n.forEach(function(t){s()(t).forEach(function(e){var n=t[e];("string"==typeof n||n instanceof String)&&!1===c.includes(n.toLowerCase())&&c.push(n.toLowerCase())})});var o=null;e.forEach(function(t){c.some(function(e){return!0===e.includes(t)})?!1!==o&&(o=!0):o=!1}),!0===o&&t.foundRecipeIds.push(r)}}),this.recipeList=this.recipes.filter(function(e){return t.foundRecipeIds.includes(e.id)})},searchAndClose:function(t){this.searchAction(),this.search(),t.target.blur()},clear:function(){this.msearchString="",this.$store.dispatch("setSearchString",""),this.search()},handleScroll:function(t){this.$store.dispatch("setScrollSearch",t.target.scrollTop)}},created:function(){this.msearchString=this.searchString,this.search(),this.$store.dispatch("setScrollRecipe",0),this.$store.dispatch("setScrollCategory",0)},mounted:function(){this.$el.querySelector(".content2").scrollTop=this.scrollSearch}}},Cdx3:function(t,e,n){var r=n("sB3e"),i=n("lktj");n("uqUo")("keys",function(){return function(t){return i(r(t))}})},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var r=n("woOf"),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},DxdT:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pure-u-1 rlitem",on:{click:function(e){return t.goToRecipe(t.item.id)}}},[n("div",{staticClass:"rlimg",style:{backgroundImage:"url("+t.item.imgpath+")"}}),t._v(" "),n("div",[t._v(t._s(t.item.name))])])},i=[],s={render:r,staticRenderFns:i};e.a=s},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},To3L:function(t,e,n){"use strict";var r=n("+E39"),i=n("lktj"),s=n("1kS7"),c=n("NpIQ"),o=n("sB3e"),a=n("MU5D"),u=Object.assign;t.exports=!u||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=o(t),u=arguments.length,l=1,f=s.f,h=c.f;u>l;)for(var d,p=a(arguments[l++]),v=f?i(p).concat(f(p)):i(p),g=v.length,m=0;g>m;)d=v[m++],r&&!h.call(p,d)||(n[d]=p[d]);return n}:u},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},Z9ZI:function(t,e,n){"use strict";var r=n("rCGl"),i=n("DxdT"),s=n("VU/8"),c=s(r.a,i.a,!1,null,null,null);e.a=c.exports},cM92:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"pure-g",class:t.header},[n("div",{staticClass:"search"},[n("div",{staticClass:"input-icons"},[n("i",{staticClass:"fa fa-search icon"}),t._v(" "),""!==this.searchString?n("i",{staticClass:"fa fa-times icon2",on:{click:t.clear}}):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.msearchString,expression:"msearchString"}],staticClass:"input-field",attrs:{autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",type:"text",placeholder:"Suche nach Zutaten, Rezepte, usw."},domProps:{value:t.msearchString},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchAndClose(e)},function(e){return t.searchAction()}],input:function(e){e.target.composing||(t.msearchString=e.target.value)}}})])])]),t._v(" "),n("div",{class:t.content2,on:{"&scroll":function(e){return t.handleScroll(e)}}},[n("div",{staticClass:"pure-g add-list"},[n("div",{staticStyle:{width:"100%",height:"100%"}},[t.recipeList.length>0?n("div",{staticClass:"pure-u-1 stext"},[t._v(t._s(this.recipeList.length)+" Treffer")]):t._e(),t._v(" "),0===t.recipeList.length?n("div",{staticClass:"searchText"},[n("p",[t._v("Mindestens 3 Zeichen.")]),t._v(" "),n("p",[t._v("Trenne die Suchbegriffe mit einem Leerzeichen oder Komma.")])]):n("div",{staticClass:"recipes"},t._l(t.recipeList,function(t){return n("recipe-list-item",{key:t.id,attrs:{item:t}})}),1)])])]),t._v(" "),n("div",{staticClass:"pure-g",class:t.footer},[n("button",{staticClass:"pure-u-1-3",on:{click:function(e){return t.$router.back()}}},[t._m(0),t._v(" "),n("div",{staticClass:"footer-text"},[t._v("Zurück")])]),t._v(" "),n("button",{staticClass:"pure-u-1-3",on:{click:function(e){return t.goTo("categories")}}},[t._m(1),t._v(" "),n("div",{staticClass:"footer-text"},[t._v("Kategorien")])]),t._v(" "),n("button",{staticClass:"pure-u-1-3 active",on:{click:function(e){return t.goTo("search")}}},[t._m(2),t._v(" "),n("div",{staticClass:"footer-text"},[t._v("Suchen")])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-arrow-left footer-icon thin"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-clone footer-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-search footer-icon thin"})])}],s={render:r,staticRenderFns:i};e.a=s},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},rCGl:function(t,e,n){"use strict";e.a={props:["item"],methods:{goToRecipe:function(t){this.$router.push({name:"recipe",params:{id:t}})}}}},uqUo:function(t,e,n){var r=n("kM2E"),i=n("FeBl"),s=n("S82l");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*s(function(){n(1)}),"Object",c)}},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}}});