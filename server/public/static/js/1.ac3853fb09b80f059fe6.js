webpackJsonp([1],{"/KFX":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("AHJT"),r=n("wRCu"),s=n("VU/8"),c=s(i.a,r.a,!1,null,null,null);e.default=c.exports},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},AHJT:function(t,e,n){"use strict";function i(){return!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}var r=n("Xxa5"),s=n.n(r),c=n("exGp"),a=n.n(c),o=n("fZjL"),u=n.n(o),l=n("Dd8w"),f=n.n(l),d=n("IcnI"),h=n("NYxO"),p=n("Z9ZI");e.a={components:{RecipeListItem:p.a},data:function(){return{recipeList:[],msearchString:"",foundRecipeIds:[],loading:!1}},computed:f()({},Object(h.b)(["recipes","steps","ingredients","ingredientGroups","recipesFull","searchString","scrollSearch"]),{content2:function(){return i()?"content2d":"content2"},header:function(){return i()?"headerd":"header"},footer:function(){return i()?"footerd":"footer"}}),beforeRouteEnter:function(t,e,n){localStorage.setItem("scroll",0),localStorage.setItem("recipe",null),d.a.dispatch("setwe",0),n()},methods:{gback:function(){this.deleteR(),this.$router.back()},goTo:function(t){this.deleteR(),this.$router.push({name:t})},searchAction:function(){this.$store.dispatch("setSearchString",this.msearchString),this.search()},deleteR:function(){localStorage.setItem("scroll",0),localStorage.setItem("recipe",null),this.$store.dispatch("setwe",0)},search:function(){var t=this;this.foundRecipeIds=[];var e=this.searchString.split(/[\s, ]+/);if(e=e.map(function(t){return t.toLowerCase()}),e=e.filter(function(t){return t.length>2}),e.length<1)return void(this.recipeList=[]);var n=[],i=0;this.recipesFull.forEach(function(r){var s=[];if(i!==r.id){i=r.id,n=t.recipesFull.filter(function(t){return t.id===i}),n.forEach(function(t){u()(t).forEach(function(e){var n=t[e];("string"==typeof n||n instanceof String)&&!1===s.includes(n.toLowerCase())&&s.push(n.toLowerCase())})});var c=null;e.forEach(function(t){s.some(function(e){return!0===e.includes(t)})?!1!==c&&(c=!0):c=!1}),!0===c&&t.foundRecipeIds.push(i)}}),this.recipeList=this.recipes.filter(function(e){return t.foundRecipeIds.includes(e.id)})},searchAndClose:function(t){this.searchAction(),this.search(),t.target.blur()},clear:function(){this.msearchString="",this.$store.dispatch("setSearchString",""),this.search()},handleScroll:function(t){this.$store.dispatch("setScrollSearch",t.target.scrollTop)}},created:function(){var t=this;return a()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.recipesFull.length){e.next=7;break}return t.loading=!0,e.next=4,t.$store.dispatch("getRecipesFull");case 4:t.loading=!1,e.next=8;break;case 7:t.loading=!1;case 8:t.msearchString=t.searchString,t.search(),t.$store.dispatch("setScrollRecipe",0),t.$store.dispatch("setScrollCategory",0);case 12:case"end":return e.stop()}},e,t)}))()},mounted:function(){this.$el.querySelector(".content2").scrollTop=this.scrollSearch}}},Cdx3:function(t,e,n){var i=n("sB3e"),r=n("lktj");n("uqUo")("keys",function(){return function(t){return r(i(t))}})},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var i=n("woOf"),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},DxdT:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pure-u-1 rlitem",on:{click:function(e){return t.goToRecipe(t.item.id)}}},[n("div",{staticClass:"rlimg",style:{backgroundImage:"url("+t.item.imgpath+")"}}),t._v(" "),n("div",[t._v(t._s(t.item.name))])])},r=[],s={render:i,staticRenderFns:r};e.a=s},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,n){var i=n("kM2E");i(i.S+i.F,"Object",{assign:n("To3L")})},To3L:function(t,e,n){"use strict";var i=n("+E39"),r=n("lktj"),s=n("1kS7"),c=n("NpIQ"),a=n("sB3e"),o=n("MU5D"),u=Object.assign;t.exports=!u||n("S82l")(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=i})?function(t,e){for(var n=a(t),u=arguments.length,l=1,f=s.f,d=c.f;u>l;)for(var h,p=o(arguments[l++]),v=f?r(p).concat(f(p)):r(p),g=v.length,m=0;g>m;)h=v[m++],i&&!d.call(p,h)||(n[h]=p[h]);return n}:u},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},Z9ZI:function(t,e,n){"use strict";var i=n("rCGl"),r=n("DxdT"),s=n("VU/8"),c=s(i.a,r.a,!1,null,null,null);e.a=c.exports},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},rCGl:function(t,e,n){"use strict";e.a={props:["item"],methods:{goToRecipe:function(t){this.$router.push({name:"recipe",params:{id:t}})}}}},uqUo:function(t,e,n){var i=n("kM2E"),r=n("FeBl"),s=n("S82l");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],c={};c[t]=e(n),i(i.S+i.F*s(function(){n(1)}),"Object",c)}},wRCu:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"pure-g",class:t.header},[n("div",{staticClass:"search"},[n("div",{staticClass:"input-icons"},[n("i",{staticClass:"fa fa-search icon"}),t._v(" "),""!==this.searchString?n("i",{staticClass:"fa fa-times icon2",on:{click:t.clear}}):t._e(),t._v(" "),t.loading?n("input",{staticClass:"input-field",attrs:{autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",type:"text",placeholder:"Lade Daten...",disabled:""}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.msearchString,expression:"msearchString"}],staticClass:"input-field",attrs:{autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",type:"text",placeholder:"Suche nach Zutaten, Rezepte, usw."},domProps:{value:t.msearchString},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchAndClose(e)},function(e){return t.searchAction()}],input:function(e){e.target.composing||(t.msearchString=e.target.value)}}})])])]),t._v(" "),n("div",{class:t.content2,on:{"&scroll":function(e){return t.handleScroll(e)}}},[n("div",{staticClass:"pure-g add-list"},[t.loading?n("div",{staticStyle:{width:"100%",height:"100%"}},[t._m(0)]):n("div",{staticStyle:{width:"100%",height:"100%"}},[t.recipeList.length>0?n("div",{staticClass:"pure-u-1 stext"},[t._v(t._s(this.recipeList.length)+" Treffer")]):t._e(),t._v(" "),0===t.recipeList.length?n("div",{staticClass:"searchText"},[n("p",[t._v("Mindestens 3 Zeichen.")]),t._v(" "),n("p",[t._v("Trenne die Suchbegriffe mit einem Leerzeichen oder Komma.")])]):n("div",{staticClass:"recipes"},t._l(t.recipeList,function(t){return n("recipe-list-item",{key:t.id,attrs:{item:t}})}),1)])])]),t._v(" "),n("div",{staticClass:"pure-g",class:t.footer},[n("button",{staticClass:"pure-u-1-3",on:{click:function(e){return t.gback()}}},[t._m(1),t._v(" "),n("div",{staticClass:"footer-text"},[t._v("Zurück")])]),t._v(" "),n("button",{staticClass:"pure-u-1-3",on:{click:function(e){return t.goTo("categories")}}},[t._m(2),t._v(" "),n("div",{staticClass:"footer-text"},[t._v("Kategorien")])]),t._v(" "),n("button",{staticClass:"pure-u-1-3 active",on:{click:function(e){return t.goTo("search")}}},[t._m(3),t._v(" "),n("div",{staticClass:"footer-text"},[t._v("Suchen")])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loadingstext"},[n("p",{staticClass:"loadingdots"},[t._v("Lade Daten")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-arrow-left footer-icon thin"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-clone footer-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-search footer-icon thin"})])}],s={render:i,staticRenderFns:r};e.a=s},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}}});