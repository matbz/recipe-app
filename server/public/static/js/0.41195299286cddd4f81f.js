webpackJsonp([0],{"/Gwl":function(t,e,i){"use strict";var n=i("Gu7T"),r=i.n(n),s=i("Dd8w"),a=i.n(s),o=i("NYxO"),u=i("Cv46");e.a={components:{Ingredient:u.a},props:["item","pfactor"],data:function(){return{test:null}},computed:a()({},Object(o.b)(["ingredients"]),{iList:function(){var t=this,e=[].concat(r()(this.ingredients)).map(function(t){return a()({},t)}),i=e.filter(function(e){return e.ingredientgroup_id===t.item.id});return i.forEach(function(t){var e=i.filter(function(e){return e.name===t.name&&e.measurement===t.measurement}),n=0;e.forEach(function(t){n+=Number(t.quantity)}),t.quantity=n,e.forEach(function(t,e){e>0&&(i=i.filter(function(e){return e.position!==t.position}))})}),console.log(this.ingredients),i}}),methods:{goTo:function(t){this.$router.push({name:t})}},created:function(){}}},"/s9i":function(t,e,i){"use strict";var n=i("Dd8w"),r=i.n(n),s=i("NYxO"),a=i("hXdY");e.a={props:["item","pfactor"],computed:r()({},Object(s.b)(["ingredients"]),{text:function(){var t=this,e=this.ingredients.filter(function(e){return e.recipe_id===t.item.recipe_id}),i={},n={},r=0;return e.forEach(function(e){r=a.parse(e.quantity*t.pfactor).toQuantityOf(2,3,4,8),e.measurement&&e.measurement.length>0?(i["%"+e.identifier+"%"]="("+r.toLocaleString()+" "+e.measurement+")",n["§"+e.identifier+"§"]=e.name+" ("+r.toLocaleString()+" "+e.measurement+")"):(i["%"+e.identifier+"%"]="("+r.toLocaleString()+")",n["§"+e.identifier+"§"]=e.name+" ("+r.toLocaleString()+")")}),this.item.step.replace(/%\w+%/g,function(t){return i[t]||t}).replace(/§\w+§/g,function(t){return n[t]||t})}}),methods:{},created:function(){}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"5zde":function(t,e,i){i("zQR9"),i("qyJz"),t.exports=i("FeBl").Array.from},A5jS:function(t,e,i){"use strict";var n=i("/Gwl"),r=i("BO8Q"),s=i("VU/8"),a=s(n.a,r.a,!1,null,null,null);e.a=a.exports},BO8Q:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pure-g iggroup"},[i("div",{staticClass:"pure-u-1 igheader"},[t._v(t._s(t.item.name))]),t._v(" "),t._l(t.iList,function(e){return i("ingredient",{key:e.id,attrs:{item:e,pfactor:t.pfactor}})})],2)},r=[],s={render:n,staticRenderFns:r};e.a=s},Cv46:function(t,e,i){"use strict";var n=i("WklH"),r=i("bHWE"),s=i("VU/8"),a=s(n.a,r.a,!1,null,null,null);e.a=a.exports},Dd8w:function(t,e,i){"use strict";e.__esModule=!0;var n=i("woOf"),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}},Gu7T:function(t,e,i){"use strict";e.__esModule=!0;var n=i("c/Tr"),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return(0,r.default)(t)}},JSV7:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pure-g step"},[i("div",{staticClass:"pure-u-1 stepheader"},[t._v("Schritt "+t._s(t.item.position))]),t._v(" "),i("div",{staticClass:"pure-u-1-1 steptext"},[t._v(t._s(t.text))])])},r=[],s={render:n,staticRenderFns:r};e.a=s},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,i){var n=i("kM2E");n(n.S+n.F,"Object",{assign:i("To3L")})},RJXE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("kKLC"),r=i("rqOt"),s=i("VU/8"),a=s(n.a,r.a,!1,null,null,null);e.default=a.exports},To3L:function(t,e,i){"use strict";var n=i("+E39"),r=i("lktj"),s=i("1kS7"),a=i("NpIQ"),o=i("sB3e"),u=i("MU5D"),c=Object.assign;t.exports=!c||i("S82l")(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[i]||Object.keys(c({},e)).join("")!=n})?function(t,e){for(var i=o(t),c=arguments.length,f=1,l=s.f,d=a.f;c>f;)for(var h,p=u(arguments[f++]),_=l?r(p).concat(l(p)):r(p),v=_.length,g=0;v>g;)h=_[g++],n&&!d.call(p,h)||(i[h]=p[h]);return i}:c},V3tA:function(t,e,i){i("R4wc"),t.exports=i("FeBl").Object.assign},WklH:function(t,e,i){"use strict";var n=i("Dd8w"),r=i.n(n),s=i("NYxO"),a=i("hXdY");e.a={props:["item","pfactor"],computed:r()({},Object(s.b)([]),{quantity:function(){return this.item.quantity>0?a.parse(this.item.quantity*this.pfactor).toQuantityOf(2,3,4,8).toLocaleString():""}}),methods:{}}},bHWE:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pure-g ig"},[i("div",{staticClass:"pure-u-1-2 igr igm"},[t._v(t._s(t.quantity)+" "+t._s(t.item.measurement))]),t._v(" "),i("div",{staticClass:"pure-u-1-2 igr ign"},[t._v(t._s(t.item.name))])])},r=[],s={render:n,staticRenderFns:r};e.a=s},"c/Tr":function(t,e,i){t.exports={default:i("5zde"),__esModule:!0}},fBQ2:function(t,e,i){"use strict";var n=i("evD5"),r=i("X8DO");t.exports=function(t,e,i){e in t?n.f(t,e,r(0,i)):t[e]=i}},hXdY:function(t,e,i){var n=function(){"use strict";var t=function(e,i,n){if(!(this instanceof t))return new t(e,i,n);this.divSign="/",this.alwaysReduce=!!n;var r=t.getStandardRatioArray(e,i,this.alwaysReduce);return this._n=r[0],this._d=r[1],this};return t.MAX_PRECISION=(1/3).toString().length-2,t.MAX_VALUE=Math.pow(2,53),t.MIN_VALUE=-Math.pow(2,53),t.regex={divSignCheck:/(\d|Infinity)\s*\//,divSignSplit:/\//,cleanFormat:/^\d+\.\d+$/,mixedNumbers:/(\S+)\s+(\S[\w\W]*)/,repeatingDecimals:/[^\.]+\.\d*(\d{2,})+(?:\1)$/,repeatingNumbers:/^(\d+)(?:\1)$/},t.VERSION="0.4.1",t.isNumeric=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},t.getValueIfDefined=function(t,e){return void 0!==e&&null!==e?e:t},t.gcd=function(t,e){if(arguments.length<2)return t;var i;if(t=+t,e=+e,t!==t||e!==e)return NaN;if(t===1/0||t===-1/0||e===1/0||e===-1/0)return 1/0;if(t%1!=0||e%1!=0)throw new Error("Can only operate on integers");for(;e;)i=t%e,t=e,e=i;return 0<t?t:-t},t.getNumeratorWithSign=function(t,e){var i=+t*(+e||1)<0?-1:1;return Math.abs(+t)*i},t.guessType=function(e){var i="NaN";return e instanceof t?i="Ratio":isNaN(e)?t.regex.divSignCheck.test(e)&&(i=/\d\s+[+\-]?\d/.test(e)?"mixed":"fraction"):(i="number",-1<(+e).toString().indexOf("e")?i="e":e%1&&(i="decimal")),i},t.parseToArray=function(e){var i,n,r,s=[],a=[];switch(t.guessType(e)){case"mixed":s=e.match(t.regex.mixedNumbers),a=t.parseToArray(s[2]),i=+s[1]<0||+a[0]<0?-1:1,a[0]=i*(Math.abs(a[0])+Math.abs(s[1]*a[1]));break;case"fraction":s=e.split(t.regex.divSignSplit),a[0]=t.getNumeratorWithSign(s[0],s[1]),a[1]=Math.abs(+s[1]);break;case"decimal":s=(+e).toString().split("."),a[1]=Math.pow(10,s[1].length),a[0]=Math.abs(s[0])*a[1]+ +s[1],a[0]=-1<s[0].indexOf("-")?-a[0]:a[0];break;case"number":a=[+e,1];break;case"e":s=(+e).toString().split(/e/i),r=t.parseToArray(s[0]),n=Math.abs(+e)<1?[0,1]:[1,0],a[n[0]]=r[n[0]],a[n[1]]=Number(r[n[1]]+"e"+Math.abs(+s[1]));break;case"Ratio":a=[e._n,e._d];break;default:a=[NaN,1]}return a},t.parse=function(e,i){var n,r=t.parseToArray(e);return r.length&&void 0!==i&&null!==i&&(n=t.parseToArray(i),r[0]*=n[1],r[1]*=n[0]),new t(r[0],r[1])},t.simplify=function(e,i){e=t.parse(e,i);var n,r=e._n,s=r||!e._d?e._d:1,a=t.getRepeatProps(r/s);return a.length&&(r=Number(a.join(""))-Number(a[0]+String(a[1])),s=Math.pow(10,a[1].length)*(Math.pow(10,a[2].length)-1)),n=t.gcd(r,s),[r/n,s/n]},t.getRepeatProps=function(e){e=String(e||"");var i,n=[],r=t.regex.repeatingDecimals.exec(e),s=t.regex.repeatingNumbers;return r||(e=e.replace(/\d$/,""),r=t.regex.repeatingDecimals.exec(e)),r&&1<r.length&&/\.\d{10}/.test(r[0])&&(r[1]=s.test(r[1])?s.exec(r[1])[1]:r[1],i=new RegExp("("+r[1]+")+$"),n=e.split(/\./).concat(r[1]),n[1]=n[1].replace(i,"")),n},t.getPrimeFactors=function(t){t=Math.floor(t);for(var e,i,n=[],r=Math.sqrt,s=1<t&&isFinite(t);s;){if(e=r(t),i=2,t%i)for(i=3;t%i&&(i+=2)<e;);i=e<i?t:i,n.push(i),s=i!==t,t/=i}return n},t.getCleanENotation=function(t){if(t=(+t||0).toString(),/\.\d+(0|9){8,}\d?e/.test(t)){t=(+t).toPrecision(t.match(/(?:\d+\.)(\d+)(?:e[\w\W]*)/)[1].replace(/(0|9)+\d$/,"").length+1).toString()}return t},t.simplifyENotation=function(t,e){var i=t/e,n=/[eE]/;if(!isNaN(i)&&n.test(t)&&n.test(e)){var r=t.toString().split("e"),s=e.toString().split("e");Number(s[1])<Number(r[1])?(r[1]=Number(r[1])+-1*s[1],s[1]=0):(s[1]=Number(s[1])+-1*r[1],r[1]=0),t=Number(r.join("e")),e=Number(s.join("e"))}return[t,e]},t.getCombinedRatio=function(e,i){return e instanceof t&&void 0===i||(e=t.parse(e,i)),e},t.random=function(){var e=Math.random().toFixed(Math.floor(16*Math.random()));return t.parse(e).simplify()},t.getStandardRatioArray=function(e,i,n){void 0===i&&(i=1,void 0===e&&(e=0));var r=+Math.abs(i),s=t.getNumeratorWithSign(e,i||1),a=[s,r];return a[1]&&n&&(a=t.simplify(a[0],a[1])),a},t.prototype={constructor:t,numerator:function(e){return void 0!==e&&(this._n=t.parse(e).valueOf()),this._n},denominator:function(e){return void 0!==e&&(this._d=t.parse(e).valueOf(),this.correctRatio()),this._d},correctRatio:function(){var e=t.getStandardRatioArray(this._n,this._d,this.alwaysReduce);return this._n=e[0],this._d=e[1],this},toArray:function(){return[this._n,this._d]},valueOf:function(){var e=t.simplifyENotation(this._n,this._d);return e[0]/e[1]},toLocaleString:function(){var t,e,i=this.valueOf();return isNaN(i)?e="NaN":i%1!=0&&1!==this._d&&isFinite(i%1)?1<Math.abs(i)?(t=parseInt(i,10),e=t+" "+Math.abs(this._n%this._d)+String(this.divSign)+this._d):e=this._n+String(this.divSign)+this._d:e=String(i),e},toString:function(){return String(this._n+this.divSign+this._d)},clone:function(e,i,n){var r=t.getValueIfDefined;return e=r(this._n,e),i=r(this._d,i),n=r(this.alwaysReduce,n),new t(e,i,n)},isNaN:function(){return!t.isNumeric(this.valueOf())},simplify:function(){var e=t.simplify(this._n,this._d);return this.clone(e[0],e[1])},add:function(e,i){e=t.getCombinedRatio(e,i);var n,r,s;return this._d===e._d?(r=this._n+e._n,s=this._d):(n=t.gcd(this._d,e._d),r=(this._n*e._d+this._d*e._n)/n,s=this._d*e._d/n),this.clone(r,s)},divide:function(e,i){return e=t.getCombinedRatio(e,i),this.clone(this._n*e._d,this._d*e._n)},equals:function(e){var i=t.isNumeric(e)||e instanceof t?e.valueOf():t.parse(e).valueOf();return this._n/this._d==+i},deepEquals:function(e){return e instanceof t&&this._n===e._n&&this._d===e._d&&this.divSign===e.divSign&&this.alwaysReduce===e.alwaysReduce},multiply:function(e,i){return e=t.getCombinedRatio(e,i),this.clone(this._n*e._n,this._d*e._d)},subtract:function(e,i){e=t.getCombinedRatio(e,i);var n,r,s;return this._d===e._d?(r=this._n-e._n,s=this._d):(n=t.gcd(this._d,e._d),r=(this._n*e._d-this._d*e._n)/n,s=this._d*e._d/n),this.clone(r,s)},descale:function(e,i){var n=t.getCombinedRatio(e,i);return this.clone(this._n/n,this._d/n)},pow:function(e,i){var n=t.getCombinedRatio(e,i);return this.clone(Math.pow(this._n,+n),Math.pow(this._d,+n))},scale:function(e,i){var n=t.getCombinedRatio(e,i);return this.clone(this._n*+n,this._d*+n)},cleanFormat:function(){var e,i=t.regex.cleanFormat;return i.test(this._n)||i.test(this._d)?t.parse(this._n,this._d):(e=this.clone(),e._n=t.getCleanENotation(e._n),e._d=t.getCleanENotation(e._d),e)},abs:function(){return this.clone(Math.abs(this._n))},mod:function(){return this.clone(this._n%this._d,1)},negate:function(){return this.clone(-this._n)},isProper:function(){return Math.abs(this._n)<this._d},findX:function(e){var i=String(e).split("/");return 2!==i.length||!isNaN(i[0])&&!isNaN(i[1])?null:isNaN(i[0])?new t(i[1]).multiply(this):new t(i[0]).divide(this)},reciprocal:function(){return this.clone(this._d,this._n)},toQuantityOf:function(){var t,e,i,n=this.valueOf(),r=1/0,s=arguments.length;for(i=0;i<s;i+=1)(e=Math.abs(Math.round(n*arguments[i])/arguments[i]-n))<r&&(t=arguments[i],r=e);return this.clone(Math.round(n*t),t)},floor:function(){return this.clone(Math.floor(this.valueOf()),1)},ceil:function(){return this.clone(Math.ceil(this.valueOf()),1)},makeProper:function(){return this.clone(this._n%this._d,this._d)}},t}();void 0!==t&&t.exports&&(e=t.exports=n),e.Ratio=n},kKLC:function(t,e,i){"use strict";var n=i("Dd8w"),r=i.n(n),s=i("IcnI"),a=i("NYxO"),o=i("A5jS"),u=i("nopX");e.a={components:{IngredientGroup:o.a,Step:u.a},props:["id"],beforeRouteEnter:function(t,e,i){0===s.a.getters.recipes.length?s.a.dispatch("load").then(function(t){return i(function(t){t.from=e})}):i(function(t){t.from=e})},data:function(){return{recipe:null,portions:null,from:null}},computed:r()({},Object(a.b)(["recipes","steps","ingredientGroups","ingredients"]),{portionString:function(){return this.portions>1?"Portionen":"Portion"},stepList:function(){var t=this,e=[];return this.steps.filter(function(e){return e.recipe_id===Number(t.id)}).forEach(function(t,i){e.push({id:t.id,step:t.step,position:i+1,recipe_id:t.recipe_id})}),e},igList:function(){var t=this;return this.ingredientGroups.filter(function(e){return e.recipe_id===Number(t.id)})},iList:function(){var t=this;return this.igList.length>0?this.ingredients.filter(function(e){return e.ingredientgroup_id===t.igList[0].id}):[]},pFactor:function(){return this.portions/this.recipe.portions},isRecipeActive:function(){return null!=this.from&&"recipes"===this.from.name},isSearchActive:function(){return null!=this.from&&"search"===this.from.name}}),methods:{goTo:function(t){this.$router.push({name:t})},adjustPortions:function(t){this.portions+t>=1&&(this.portions+=t)}},created:function(){var t=this;this.recipe=this.recipes.filter(function(e){return e.id===Number(t.id)})[0],this.portions=this.recipe.portions}}},nopX:function(t,e,i){"use strict";var n=i("/s9i"),r=i("JSV7"),s=i("VU/8"),a=s(n.a,r.a,!1,null,null,null);e.a=a.exports},qyJz:function(t,e,i){"use strict";var n=i("+ZMJ"),r=i("kM2E"),s=i("sB3e"),a=i("msXi"),o=i("Mhyx"),u=i("QRG4"),c=i("fBQ2"),f=i("3fs2");r(r.S+r.F*!i("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,r,l,d=s(t),h="function"==typeof this?this:Array,p=arguments.length,_=p>1?arguments[1]:void 0,v=void 0!==_,g=0,m=f(d);if(v&&(_=n(_,p>2?arguments[2]:void 0,2)),void 0==m||h==Array&&o(m))for(e=u(d.length),i=new h(e);e>g;g++)c(i,g,v?_(d[g],g):d[g]);else for(l=m.call(d),i=new h;!(r=l.next()).done;g++)c(i,g,v?a(l,_,[r.value,g],!0):r.value);return i.length=g,i}})},rqOt:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"contents3"},[i("div",{staticClass:"rimg",style:{backgroundImage:"url("+t.recipe.imgpath+")"}}),t._v(" "),i("div",{staticClass:"pure-g"},[i("div",{staticClass:"recipe",staticStyle:{width:"100%",height:"100%"}},[i("div",{staticClass:"pure-u-1 recipeh_text"},[t._v(t._s(t.recipe.name))]),t._v(" "),t.iList.length>0?i("div",{staticClass:"pure-u-1 recipe_text"},[t._v("Zutaten")]):i("div",{staticClass:"pure-u-1 recipe_text"},[t._v("Keine Zutaten angegeben")]),t._v(" "),t.iList.length>0?i("div",{staticClass:"pure-g portions"},[i("div",{staticClass:"pure-u-1-3"},[i("i",{staticClass:"fa fa-minus-circle pbutton",on:{click:function(e){return t.adjustPortions(-1)}}})]),t._v(" "),i("div",{staticClass:"pure-u-1-3"},[i("span",{staticClass:"portionnumber"},[t._v(t._s(this.portions))]),t._v(t._s(t.portionString))]),t._v(" "),i("div",{staticClass:"pure-u-1-3"},[i("i",{staticClass:"fa fa-plus-circle pbutton",on:{click:function(e){return t.adjustPortions(1)}}})])]):t._e(),t._v(" "),t.iList.length>0?i("div",t._l(t.igList,function(e){return i("ingredient-group",{key:e.id,attrs:{item:e,pfactor:t.pFactor}})}),1):t._e(),t._v(" "),t.stepList.length>0?i("div",{staticClass:"pure-u-1 recipe_text2"},[t._v("Zubereitung")]):i("div",{staticClass:"pure-u-1 recipe_text2"},[t._v("Keine Zubereitungsschritte angegeben")]),t._v(" "),t._l(t.stepList,function(e){return i("step",{key:e.name,attrs:{item:e,pfactor:t.pFactor}})})],2)])]),t._v(" "),i("div",{staticClass:"pure-g footer"},[i("button",{staticClass:"pure-u-1-3",on:{click:function(e){return t.$router.back()}}},[t._m(0),t._v(" "),i("div",{staticClass:"footer-text"},[t._v("Zurück")])]),t._v(" "),i("button",{staticClass:"pure-u-1-3",class:{active:t.isRecipeActive},on:{click:function(e){return t.goTo("categories")}}},[t._m(1),t._v(" "),i("div",{staticClass:"footer-text"},[t._v("Kategorien")])]),t._v(" "),i("button",{staticClass:"pure-u-1-3",class:{active:t.isSearchActive},on:{click:function(e){return t.goTo("search")}}},[t._m(2),t._v(" "),i("div",{staticClass:"footer-text"},[t._v("Suchen")])])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fa fa-arrow-left footer-icon thin"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fa fa-clone footer-icon"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fa fa-search footer-icon thin"})])}],s={render:n,staticRenderFns:r};e.a=s},woOf:function(t,e,i){t.exports={default:i("V3tA"),__esModule:!0}}});