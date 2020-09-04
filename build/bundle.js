var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function c(t){t.forEach(n)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function $(t,e,n,r){if(t){const c=l(t,e,n,r);return t[0](c)}}function l(t,n,r,c){return t[1]&&c?e(r.ctx.slice(),t[1](c(n))):r.ctx}function a(t,e,n,r,c,o,s){const $=function(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(void 0===e.dirty)return c;if("object"==typeof c){const t=[],n=Math.max(e.dirty.length,c.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|c[r];return t}return e.dirty|c}return e.dirty}(e,r,c,o);if($){const c=l(e,n,r,s);t.p(c,$)}}function i(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let v;function b(t){v=t}const y=[],z=[],M=[],_=[],k=Promise.resolve();let V=!1;function B(t){M.push(t)}let H=!1;const C=new Set;function L(){if(!H){H=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];b(e),S(e.$$)}for(y.length=0;z.length;)z.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];C.has(e)||(C.add(e),e())}M.length=0}while(y.length);for(;_.length;)_.pop()();V=!1,H=!1,C.clear()}}function S(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const E=new Set;function j(t,e){t&&t.i&&(E.delete(t),t.i(e))}function A(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),undefined.c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function N(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const s=t[o],$=e[o];if($){for(const t in s)t in $||(r[t]=1);for(const t in $)c[t]||(n[t]=$[t],c[t]=1);t[o]=$}else for(const t in s)c[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function T(t){return"object"==typeof t&&null!==t?t:{}}function I(t){t&&t.c()}function O(t,e,r){const{fragment:s,on_mount:$,on_destroy:l,after_update:a}=t.$$;s&&s.m(e,r),B(()=>{const e=$.map(n).filter(o);l?l.push(...e):c(e),t.$$.on_mount=[]}),a.forEach(B)}function G(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(y.push(t),V||(V=!0,k.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,n,o,s,$,l,a=[-1]){const i=v;b(e);const f=n.props||{},u=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:$,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:a,skip_bound:!1};let d=!1;if(u.ctx=o?o(e,f,(t,n,...r)=>{const c=r.length?r[0]:n;return u.ctx&&$(u.ctx[t],u.ctx[t]=c)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](c),d&&R(e,t)),n}):[],u.update(),d=!0,c(u.before_update),u.fragment=!!s&&s(u.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);u.fragment&&u.fragment.l(t),t.forEach(m)}else u.fragment&&u.fragment.c();n.intro&&j(e.$$.fragment),O(e,n.target,n.anchor),L()}b(i)}class D{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(e){let n,r,c,o,s,$,l,a,i=(new Date).getFullYear()+"";return{c(){n=d("footer"),r=d("p"),c=d("a"),c.textContent="Snake Game |",o=g(),s=d("a"),s.textContent="MIT License",$=h("\n    | Copyright (c) "),l=h(i),a=h(" Mohamed Shadab"),x(c,"href","https://statebait.github.io/snake-game/"),x(c,"class","lg:inline hidden"),x(c,"aria-label","Snake game link"),x(s,"target","_blank"),x(s,"rel","noopener"),x(s,"href","https://github.com/statebait/statebait.github.io/blob/master/LICENSE.md"),x(s,"aria-label","License link"),x(n,"class","text-primary fixed bottom-0 w-full text-center text-sm my-3")},m(t,e){u(t,n,e),f(n,r),f(r,c),f(r,o),f(r,s),f(r,$),f(r,l),f(r,a)},p:t,i:t,o:t,d(t){t&&m(n)}}}class P extends D{constructor(t){super(),q(this,t,null,F,s,{})}}function Y(t){let e,n;return{c(){e=p("title"),n=h(t[0])},m(t,r){u(t,e,r),f(e,n)},p(t,e){1&e&&w(n,t[0])},d(t){t&&m(e)}}}function J(t){let e,n,r,c=t[0]&&Y(t);const o=t[3].default,s=$(o,t,t[2],null);return{c(){e=p("svg"),c&&c.c(),n=h(""),s&&s.c(),x(e,"xmlns","http://www.w3.org/2000/svg"),x(e,"viewBox",t[1]),x(e,"class","svelte-c8tyih")},m(t,o){u(t,e,o),c&&c.m(e,null),f(e,n),s&&s.m(e,null),r=!0},p(t,[$]){t[0]?c?c.p(t,$):(c=Y(t),c.c(),c.m(e,n)):c&&(c.d(1),c=null),s&&s.p&&4&$&&a(s,o,t,t[2],$,null,null),(!r||2&$)&&x(e,"viewBox",t[1])},i(t){r||(j(s,t),r=!0)},o(t){A(s,t),r=!1},d(t){t&&m(e),c&&c.d(),s&&s.d(t)}}}function K(t,e,n){let{title:r=null}=e,{viewBox:c}=e,{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"title"in t&&n(0,r=t.title),"viewBox"in t&&n(1,c=t.viewBox),"$$scope"in t&&n(2,s=t.$$scope)},[r,c,s,o]}class Q extends D{constructor(t){super(),q(this,t,K,J,s,{title:0,viewBox:1})}}function U(t){let e;return{c(){e=p("path"),x(e,"d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function W(t){let n,r;const c=[{viewBox:"0 0 496 512"},t[0]];let o={$$slots:{default:[U]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new Q({props:o}),{c(){I(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p(t,[e]){const r=1&e?N(c,[c[0],T(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(j(n.$$.fragment,t),r=!0)},o(t){A(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function X(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class Z extends D{constructor(t){super(),q(this,t,X,W,s,{})}}function tt(t){let e;return{c(){e=p("path"),x(e,"d","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function et(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[tt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new Q({props:o}),{c(){I(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p(t,[e]){const r=1&e?N(c,[c[0],T(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(j(n.$$.fragment,t),r=!0)},o(t){A(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function nt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class rt extends D{constructor(t){super(),q(this,t,nt,et,s,{})}}function ct(t){let e;return{c(){e=p("path"),x(e,"d","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function ot(t){let n,r;const c=[{viewBox:"0 0 448 512"},t[0]];let o={$$slots:{default:[ct]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new Q({props:o}),{c(){I(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p(t,[e]){const r=1&e?N(c,[c[0],T(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(j(n.$$.fragment,t),r=!0)},o(t){A(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function st(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class $t extends D{constructor(t){super(),q(this,t,st,ot,s,{})}}function lt(t){let e;return{c(){e=p("path"),x(e,"d","M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function at(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[lt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new Q({props:o}),{c(){I(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p(t,[e]){const r=1&e?N(c,[c[0],T(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(j(n.$$.fragment,t),r=!0)},o(t){A(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function it(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class ft extends D{constructor(t){super(),q(this,t,it,at,s,{})}}function ut(t){let e;return{c(){e=p("path"),x(e,"d","M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function mt(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[ut]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new Q({props:o}),{c(){I(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p(t,[e]){const r=1&e?N(c,[c[0],T(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(j(n.$$.fragment,t),r=!0)},o(t){A(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function dt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class pt extends D{constructor(t){super(),q(this,t,dt,mt,s,{})}}function ht(t){let e;return{c(){e=p("path"),x(e,"d","M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function gt(t){let n,r;const c=[{viewBox:"0 0 448 512"},t[0]];let o={$$slots:{default:[ht]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new Q({props:o}),{c(){I(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p(t,[e]){const r=1&e?N(c,[c[0],T(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(j(n.$$.fragment,t),r=!0)},o(t){A(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function xt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class wt extends D{constructor(t){super(),q(this,t,xt,gt,s,{})}}function vt(t){let e;return{c(){e=p("path"),x(e,"d","M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function bt(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new Q({props:o}),{c(){I(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p(t,[e]){const r=1&e?N(c,[c[0],T(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(j(n.$$.fragment,t),r=!0)},o(t){A(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function yt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class zt extends D{constructor(t){super(),q(this,t,yt,bt,s,{})}}function Mt(t){let e;return{c(){e=p("path"),x(e,"d","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function _t(t){let n,r;const c=[{viewBox:"0 0 384 512"},t[0]];let o={$$slots:{default:[Mt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new Q({props:o}),{c(){I(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p(t,[e]){const r=1&e?N(c,[c[0],T(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(j(n.$$.fragment,t),r=!0)},o(t){A(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function kt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class Vt extends D{constructor(t){super(),q(this,t,kt,_t,s,{})}}function Bt(t){let e,n,r,c,o,s;const l=t[3].default,i=$(l,t,t[2],null);return{c(){e=d("a"),i&&i.c(),n=g(),r=d("div"),c=h(t[1]),x(r,"class","tooltiptext"),x(e,"href",t[0]),x(e,"target","_blank"),x(e,"rel","noopener"),x(e,"class","w-8 h-8 block m-3 tooltip"),x(e,"aria-label",o=t[1]+" link")},m(t,o){u(t,e,o),i&&i.m(e,null),f(e,n),f(e,r),f(r,c),s=!0},p(t,[n]){i&&i.p&&4&n&&a(i,l,t,t[2],n,null,null),(!s||2&n)&&w(c,t[1]),(!s||1&n)&&x(e,"href",t[0]),(!s||2&n&&o!==(o=t[1]+" link"))&&x(e,"aria-label",o)},i(t){s||(j(i,t),s=!0)},o(t){A(i,t),s=!1},d(t){t&&m(e),i&&i.d(t)}}}function Ht(t,e,n){let{href:r}=e,{name:c}=e,{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"href"in t&&n(0,r=t.href),"name"in t&&n(1,c=t.name),"$$scope"in t&&n(2,s=t.$$scope)},[r,c,s,o]}class Ct extends D{constructor(t){super(),q(this,t,Ht,Bt,s,{href:0,name:1})}}function Lt(t){let e,n;return e=new Z({}),{c(){I(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function St(t){let e,n;return e=new rt({}),{c(){I(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Et(t){let e,n;return e=new $t({}),{c(){I(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function jt(t){let e,n;return e=new ft({}),{c(){I(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function At(t){let e,n;return e=new pt({}),{c(){I(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Nt(t){let e,n;return e=new wt({}),{c(){I(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Tt(t){let e,n;return e=new zt({}),{c(){I(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function It(t){let e,n;return e=new Vt({}),{c(){I(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Ot(t){let e,n,r,c,o,s,$,l,a,i,p,h,w,v,b,y,z;return n=new Ct({props:{href:"https://github.com/statebait",name:"GitHub",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),c=new Ct({props:{href:"https://twitter.com/statebait",name:"Twitter",$$slots:{default:[St]},$$scope:{ctx:t}}}),s=new Ct({props:{href:"https://www.linkedin.com/in/mohamedshadab/",name:"LinkedIn",$$slots:{default:[Et]},$$scope:{ctx:t}}}),l=new Ct({props:{href:"https://medium.com/@mohamedshadab78",name:"Medium",$$slots:{default:[jt]},$$scope:{ctx:t}}}),i=new Ct({props:{href:"/blog",name:"Blog",$$slots:{default:[At]},$$scope:{ctx:t}}}),h=new Ct({props:{href:"https://dev.to/statebait",name:"dev.to",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),v=new Ct({props:{href:"https://sourcerer.io/statebait",name:"sourcerer.io",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),y=new Ct({props:{href:"/assets/Mohamed_Shadab_Resume.pdf",name:"Resume",$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){e=d("div"),I(n.$$.fragment),r=g(),I(c.$$.fragment),o=g(),I(s.$$.fragment),$=g(),I(l.$$.fragment),a=g(),I(i.$$.fragment),p=g(),I(h.$$.fragment),w=g(),I(v.$$.fragment),b=g(),I(y.$$.fragment),x(e,"class","container mx-auto text-primary flex space-x-8 justify-center mt-6\n  flex-wrap")},m(t,m){u(t,e,m),O(n,e,null),f(e,r),O(c,e,null),f(e,o),O(s,e,null),f(e,$),O(l,e,null),f(e,a),O(i,e,null),f(e,p),O(h,e,null),f(e,w),O(v,e,null),f(e,b),O(y,e,null),z=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const $={};1&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),l.$set(a);const f={};1&e&&(f.$$scope={dirty:e,ctx:t}),i.$set(f);const u={};1&e&&(u.$$scope={dirty:e,ctx:t}),h.$set(u);const m={};1&e&&(m.$$scope={dirty:e,ctx:t}),v.$set(m);const d={};1&e&&(d.$$scope={dirty:e,ctx:t}),y.$set(d)},i(t){z||(j(n.$$.fragment,t),j(c.$$.fragment,t),j(s.$$.fragment,t),j(l.$$.fragment,t),j(i.$$.fragment,t),j(h.$$.fragment,t),j(v.$$.fragment,t),j(y.$$.fragment,t),z=!0)},o(t){A(n.$$.fragment,t),A(c.$$.fragment,t),A(s.$$.fragment,t),A(l.$$.fragment,t),A(i.$$.fragment,t),A(h.$$.fragment,t),A(v.$$.fragment,t),A(y.$$.fragment,t),z=!1},d(t){t&&m(e),G(n),G(c),G(s),G(l),G(i),G(h),G(v),G(y)}}}class Gt extends D{constructor(t){super(),q(this,t,null,Ot,s,{})}}function Rt(e){let n;return{c(){n=d("picture"),n.innerHTML='<source type="image/webp" srcset="/assets/mainpic.webp"> \n  <img class="rounded-full shadow-2xl" width="200" height="200" src="/assets/mainpic.png" alt="mohamed shadab">'},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class qt extends D{constructor(t){super(),q(this,t,null,Rt,s,{})}}function Dt(t){let e;return{c(){e=p("path"),x(e,"d","M505.05 19.1a15.89 15.89 0 0 0-12.2-12.2C460.65 0 435.46 0 410.36 0c-103.2 0-165.1 55.2-211.29 128H94.87A48 48 0 0 0 52 154.49l-49.42 98.8A24 24 0 0 0 24.07 288h103.77l-22.47 22.47a32 32 0 0 0 0 45.25l50.9 50.91a32 32 0 0 0 45.26 0L224 384.16V488a24 24 0 0 0 34.7 21.49l98.7-49.39a47.91 47.91 0 0 0 26.5-42.9V312.79c72.59-46.3 128-108.4 128-211.09.1-25.2.1-50.4-6.85-82.6zM384 168a40 40 0 1 1 40-40 40 40 0 0 1-40 40z")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function Ft(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[Dt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new Q({props:o}),{c(){I(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p(t,[e]){const r=1&e?N(c,[c[0],T(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(j(n.$$.fragment,t),r=!0)},o(t){A(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function Pt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class Yt extends D{constructor(t){super(),q(this,t,Pt,Ft,s,{})}}function Jt(e){let n,r,c,o,s,$,l,a,i;return $=new Yt({}),{c(){n=d("div"),r=d("h1"),r.textContent="Mohamed Shadab",c=g(),o=d("div"),s=d("div"),I($.$$.fragment),l=g(),a=d("div"),a.textContent="Software Engineer",x(r,"class","text-3xl sm:text-4xl montserrat font-effect-anaglyph text-bold\n      text-primary mt-5"),x(s,"class","w-5 h-5"),x(o,"class","text-2xl text-primary flex space-x-3 items-center font-semibold\n      justify-center mt-5"),x(n,"class","text-center")},m(t,e){u(t,n,e),f(n,r),f(n,c),f(n,o),f(o,s),O($,s,null),f(o,l),f(o,a),i=!0},p:t,i(t){i||(j($.$$.fragment,t),i=!0)},o(t){A($.$$.fragment,t),i=!1},d(t){t&&m(n),G($)}}}class Kt extends D{constructor(t){super(),q(this,t,null,Jt,s,{})}}function Qt(e){let n,r,c,o,s,$,l,a,i;return r=new qt({}),o=new Kt({}),$=new Gt({}),a=new P({}),{c(){n=d("div"),I(r.$$.fragment),c=g(),I(o.$$.fragment),s=g(),I($.$$.fragment),l=g(),I(a.$$.fragment),x(n,"class","flex flex-col items-center mt-24")},m(t,e){u(t,n,e),O(r,n,null),f(n,c),O(o,n,null),f(n,s),O($,n,null),u(t,l,e),O(a,t,e),i=!0},p:t,i(t){i||(j(r.$$.fragment,t),j(o.$$.fragment,t),j($.$$.fragment,t),j(a.$$.fragment,t),i=!0)},o(t){A(r.$$.fragment,t),A(o.$$.fragment,t),A($.$$.fragment,t),A(a.$$.fragment,t),i=!1},d(t){t&&m(n),G(r),G(o),G($),t&&m(l),G(a,t)}}}return new class extends D{constructor(t){super(),q(this,t,null,Qt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map