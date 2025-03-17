// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.2-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.2-esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-cauchy@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function v(c,g,b){var x,y,R,w,P;if(!d(c)||o(c))throw new TypeError(f("0pR6v",c));if(!p(g))throw new TypeError(f("0pR72",g));if(arguments.length>2){if(!m(b))throw new TypeError(f("0pR2V",b));if(x=i({},b),h(x,"iter")){if(!l(x.iter))throw new TypeError(f("0pR2t","iter",x.iter))}else x.iter=j;R=a(c,g,x),void 0===x.prng&&!1!==x.copy&&(x.state=R.state)}else R=a(c,g),x={iter:j,state:R.state};return P=0,e(y={},"next",(function(){if(P+=1,w||P>x.iter)return{done:!0};return{value:R(),done:!1}})),e(y,"return",(function(e){if(w=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),x&&x.prng?(e(y,"seed",null),e(y,"seedLength",null),s(y,"state",n(null),r),e(y,"stateLength",null),e(y,"byteLength",null)):(t(y,"seed",(function(){return R.PRNG.seed})),t(y,"seedLength",(function(){return R.PRNG.seedLength})),s(y,"state",(function(){return R.PRNG.state}),(function(e){R.PRNG.state=e})),t(y,"stateLength",(function(){return R.PRNG.stateLength})),t(y,"byteLength",(function(){return R.PRNG.byteLength}))),e(y,"PRNG",R.PRNG),u&&e(y,u,(function(){return v(c,g,x)})),y}export{v as default};
//# sourceMappingURL=index.mjs.map
