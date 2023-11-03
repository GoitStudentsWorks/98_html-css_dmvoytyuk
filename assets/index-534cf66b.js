(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))f(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&f(a)}).observe(document,{childList:!0,subtree:!0});function Q(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function f(i){if(i.ep)return;i.ep=!0;const l=Q(i);fetch(i.href,l)}})();document.documentElement.classList.remove("no-js");const U=document.getElementById("menu-close-button"),_=document.getElementById("menu-open-button"),c=document.getElementById("mobile-menu-id"),R=document.getElementsByClassName("mobile-nav-links-item"),u=document.getElementsByTagName("body");console.log(u);for(let d of R)d.addEventListener("click",()=>{console.log("clicked link"),c.classList.remove("is-open"),u[0].classList.remove("no-scroll"),console.log(c),console.log(u)});_.addEventListener("click",()=>{console.log("clicked open button"),c.classList.add("is-open"),u[0].classList.add("no-scroll"),console.log(u),console.log(c)});U.addEventListener("click",()=>{console.log("clicked close button"),c.classList.remove("is-open"),u[0].classList.remove("no-scroll"),console.log(c),console.log(u)});document.addEventListener("click",d=>{!c.contains(d.target)&&!_.contains(d.target)&&(console.log("clicked outside menu"),c.classList.remove("is-open"),u[0].classList.remove("no-scroll"),console.log(c),console.log(u))});(function(d,p,Q){function f(n,e){return typeof n===e}function i(){var n,e,s,t,A,v,r;for(var g in h)if(h.hasOwnProperty(g)){if(n=[],e=h[g],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(t=f(e.fn,"function")?e.fn():e.fn,A=0;A<n.length;A++)v=n[A],r=v.split("."),r.length===1?o[r[0]]=t:(!o[r[0]]||o[r[0]]instanceof Boolean||(o[r[0]]=new Boolean(o[r[0]])),o[r[0]][r[1]]=t),L.push((t?"":"no-")+r.join("-"))}}function l(n){var e=b.className,s=o._config.classPrefix||"";if(E&&(e=e.baseVal),o._config.enableJSClass){var t=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(t,"$1"+s+"js$2")}o._config.enableClasses&&(e+=" "+s+n.join(" "+s),E?b.className.baseVal=e:b.className=e)}function a(n,e){if(typeof n=="object")for(var s in n)k(n,s)&&a(s,n[s]);else{n=n.toLowerCase();var t=n.split("."),A=o[t[0]];if(t.length==2&&(A=A[t[1]]),typeof A<"u")return o;e=typeof e=="function"?e():e,t.length==1?o[t[0]]=e:(!o[t[0]]||o[t[0]]instanceof Boolean||(o[t[0]]=new Boolean(o[t[0]])),o[t[0]][t[1]]=e),l([(e&&e!=0?"":"no-")+t.join("-")]),o._trigger(n,e)}return o}var L=[],b=p.documentElement,h=[],m={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){h.push({name:n,fn:e,options:s})},addAsyncTest:function(n){h.push({name:null,fn:n})}},o=function(){};o.prototype=m,o=new o;var k,E=b.nodeName.toLowerCase()==="svg";(function(){var n={}.hasOwnProperty;k=f(n,"undefined")||f(n.call,"undefined")?function(e,s){return s in e&&f(e.constructor.prototype[s],"undefined")}:function(e,s){return n.call(e,s)}})(),m._l={},m.on=function(n,e){this._l[n]||(this._l[n]=[]),this._l[n].push(e),o.hasOwnProperty(n)&&setTimeout(function(){o._trigger(n,o[n])},0)},m._trigger=function(n,e){if(this._l[n]){var s=this._l[n];setTimeout(function(){var t;for(t=0;t<s.length;t++)s[t](e)},0),delete this._l[n]}},o._q.push(function(){m.addTest=a}),o.addAsyncTest(function(){var n=new Image;n.onerror=function(){a("webpalpha",!1)},n.onload=function(){a("webpalpha",n.width==1)},n.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),o.addAsyncTest(function(){function n(t,A,v){function r(B){var y=B&&B.type==="load"?g.width==1:!1,D=t==="webp";a(t,D&&y?new Boolean(y):y),v&&v(B)}var g=new Image;g.onerror=r,g.onload=r,g.src=A}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],s=e.shift();n(s.name,s.uri,function(t){if(t&&t.type==="load")for(var A=0;A<e.length;A++)n(e[A].name,e[A].uri)})}),i(),l(L),delete m.addTest,delete m.addAsyncTest;for(var w=0;w<o._q.length;w++)o._q[w]();d.Modernizr=o})(window,document);