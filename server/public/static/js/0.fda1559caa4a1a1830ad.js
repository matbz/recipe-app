webpackJsonp([0],{"/Gwl":function(t,e,i){"use strict";var n=i("Dd8w"),r=i.n(n),s=i("NYxO"),c=i("Cv46");e.a={components:{Ingredient:c.a},props:["item","pfactor"],data:function(){return{test:null}},computed:r()({},Object(s.b)(["ingredients"]),{iList:function(){var t=this;return this.ingredients.filter(function(e){return e.ingredientgroup_id===t.item.id})}}),methods:{goTo:function(t){this.$router.push({name:t})}},created:function(){}}},"/s9i":function(t,e,i){"use strict";var n=i("Dd8w"),r=i.n(n),s=i("NYxO");e.a={props:["item","pfactor"],computed:r()({},Object(s.b)(["ingredients"]),{text:function(){var t=this,e={},i=0;return this.ingredients.forEach(function(n){i=n.quantity*t.pfactor,e["%"+n.identifier+"%"]="("+Number(i).toLocaleString()+" "+n.measurement+")"}),this.item.step.replace(/%\w+%/g,function(t){return e[t]||t})}}),methods:{},created:function(){}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"1uPK":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("div",{staticClass:"contents3"},[i("div",{staticClass:"rimg",style:{backgroundImage:"url("+t.recipe.imgpath+")"}}),t._v(" "),i("div",{staticClass:"pure-g"},[i("div",{staticClass:"recipe",staticStyle:{width:"100%",height:"100%"}},[i("div",{staticClass:"pure-u-1 recipeh_text"},[t._v(t._s(t.recipe.name))]),t._v(" "),t.igList.length>0?i("div",{staticClass:"pure-u-1 recipe_text"},[t._v("Zutaten")]):i("div",{staticClass:"pure-u-1 recipe_text"},[t._v("Keine Zutaten angegeben")]),t._v(" "),t.igList.length>0?i("div",{staticClass:"pure-g portions"},[i("div",{staticClass:"pure-u-1-3"},[i("i",{staticClass:"fa fa-minus-circle pbutton",on:{click:function(e){return t.adjustPortions(-1)}}})]),t._v(" "),i("div",{staticClass:"pure-u-1-3"},[i("span",{staticClass:"portionnumber"},[t._v(t._s(this.portions))]),t._v("Portionen")]),t._v(" "),i("div",{staticClass:"pure-u-1-3"},[i("i",{staticClass:"fa fa-plus-circle pbutton",on:{click:function(e){return t.adjustPortions(1)}}})])]):t._e(),t._v(" "),t._l(t.igList,function(e){return i("ingredient-group",{key:e.id,attrs:{item:e,pfactor:t.pFactor}})}),t._v(" "),t.stepList.length>0?i("div",{staticClass:"pure-u-1 recipe_text2"},[t._v("Zubereitung")]):i("div",{staticClass:"pure-u-1 recipe_text2"},[t._v("Keine Zubereitungsschritte angegeben")]),t._v(" "),t._l(t.stepList,function(e){return i("step",{key:e.name,attrs:{item:e,pfactor:t.pFactor}})})],2)])]),t._v(" "),i("div",{staticClass:"pure-g footer"},[i("button",{staticClass:"pure-u-1-3",on:{click:function(e){return t.$router.back()}}},[t._m(0),t._v(" "),i("div",{staticClass:"footer-text"},[t._v("Zurück")])]),t._v(" "),i("button",{staticClass:"pure-u-1-3",class:{active:t.isRecipeActive},on:{click:function(e){return t.goTo("categories")}}},[t._m(1),t._v(" "),i("div",{staticClass:"footer-text"},[t._v("Kategorien")])]),t._v(" "),i("button",{staticClass:"pure-u-1-3",class:{active:t.isSearchActive},on:{click:function(e){return t.goTo("search")}}},[t._m(2),t._v(" "),i("div",{staticClass:"footer-text"},[t._v("Suchen")])])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fa fa-arrow-left footer-icon thin"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fa fa-clone footer-icon"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fa fa-search footer-icon thin"})])}],s={render:n,staticRenderFns:r};e.a=s},A5jS:function(t,e,i){"use strict";var n=i("/Gwl"),r=i("yitn"),s=i("VU/8"),c=s(n.a,r.a,!1,null,null,null);e.a=c.exports},Cv46:function(t,e,i){"use strict";var n=i("WklH"),r=i("ScAZ"),s=i("VU/8"),c=s(n.a,r.a,!1,null,null,null);e.a=c.exports},Dd8w:function(t,e,i){"use strict";e.__esModule=!0;var n=i("woOf"),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,i){var n=i("kM2E");n(n.S+n.F,"Object",{assign:i("To3L")})},RJXE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("kKLC"),r=i("1uPK"),s=i("VU/8"),c=s(n.a,r.a,!1,null,null,null);e.default=c.exports},ScAZ:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pure-g ig"},[i("div",{staticClass:"pure-u-1-2 igr igm"},[t._v(t._s(Number(t.quantity).toLocaleString())+" "+t._s(t.item.measurement))]),t._v(" "),i("div",{staticClass:"pure-u-1-2 igr"},[t._v(t._s(t.item.name))])])},r=[],s={render:n,staticRenderFns:r};e.a=s},To3L:function(t,e,i){"use strict";var n=i("+E39"),r=i("lktj"),s=i("1kS7"),c=i("NpIQ"),u=i("sB3e"),a=i("MU5D"),o=Object.assign;t.exports=!o||i("S82l")(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=o({},t)[i]||Object.keys(o({},e)).join("")!=n})?function(t,e){for(var i=u(t),o=arguments.length,l=1,f=s.f,p=c.f;o>l;)for(var v,d=a(arguments[l++]),_=f?r(d).concat(f(d)):r(d),h=_.length,m=0;h>m;)v=_[m++],n&&!p.call(d,v)||(i[v]=d[v]);return i}:o},V3tA:function(t,e,i){i("R4wc"),t.exports=i("FeBl").Object.assign},WklH:function(t,e,i){"use strict";var n=i("Dd8w"),r=i.n(n),s=i("NYxO");e.a={props:["item","pfactor"],computed:r()({},Object(s.b)([]),{quantity:function(){return this.item.quantity*this.pfactor}}),methods:{}}},kKLC:function(t,e,i){"use strict";var n=i("Dd8w"),r=i.n(n),s=i("IcnI"),c=i("NYxO"),u=i("A5jS"),a=i("nopX");e.a={components:{IngredientGroup:u.a,Step:a.a},props:["id"],beforeRouteEnter:function(t,e,i){0===s.a.getters.recipes.length?s.a.dispatch("load").then(function(t){return i(function(t){t.from=e})}):i(function(t){t.from=e})},data:function(){return{recipe:null,portions:null,from:null}},computed:r()({},Object(c.b)(["recipes","steps","ingredientGroups"]),{stepList:function(){var t=this,e=[];return this.steps.filter(function(e){return e.recipe_id===Number(t.id)}).forEach(function(t,i){e.push({id:t.id,step:t.step,position:i+1,recipe_id:t.recipe_id})}),e},igList:function(){var t=this;return this.ingredientGroups.filter(function(e){return e.recipe_id===Number(t.id)})},pFactor:function(){return this.portions/this.recipe.portions},isRecipeActive:function(){return null!=this.from&&"recipes"===this.from.name},isSearchActive:function(){return null!=this.from&&"search"===this.from.name}}),methods:{goTo:function(t){this.$router.push({name:t})},adjustPortions:function(t){this.portions+t>=1&&(this.portions+=t)}},created:function(){var t=this;this.recipe=this.recipes.filter(function(e){return e.id===Number(t.id)})[0],this.portions=this.recipe.portions}}},nopX:function(t,e,i){"use strict";var n=i("/s9i"),r=i("u7O8"),s=i("VU/8"),c=s(n.a,r.a,!1,null,null,null);e.a=c.exports},u7O8:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pure-g step"},[i("div",{staticClass:"pure-u-1 stepheader"},[t._v("Schritt "+t._s(t.item.position))]),t._v(" "),i("div",{staticClass:"pure-u-1-1 steptext"},[t._v(t._s(t.text))])])},r=[],s={render:n,staticRenderFns:r};e.a=s},woOf:function(t,e,i){t.exports={default:i("V3tA"),__esModule:!0}},yitn:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pure-g iggroup"},[i("div",{staticClass:"pure-u-1 igheader"},[t._v(t._s(t.item.name))]),t._v(" "),t._l(t.iList,function(e){return i("ingredient",{key:e.id,attrs:{item:e,pfactor:t.pfactor}})})],2)},r=[],s={render:n,staticRenderFns:r};e.a=s}});