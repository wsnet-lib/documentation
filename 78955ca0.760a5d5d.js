(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),c=(t(0),t(84)),a=["components"],i={id:"connection",title:"Connection handling",sidebar_label:"Connection"},l={unversionedId:"api/connection",id:"api/connection",isDocsHomePage:!1,title:"Connection handling",description:"Connect the player to the server, by specifying the address and the port:",source:"@site/docs\\api\\connection.md",slug:"/api/connection",permalink:"/documentation/api/connection",editUrl:"https://github.com/wsnet-lib/documentation/docs/api/connection.md",version:"current",sidebar_label:"Connection",sidebar:"default",previous:{title:"Deploy",permalink:"/documentation/guide/deploy/heroku"},next:{title:"Lobbies",permalink:"/documentation/api/lobbies"}},p=[],u={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Connect the player to the server, by specifying the address and the port:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'net_connect("localhost", 8080, noone);\n')),Object(c.b)("p",null,"You can pass a function to the third argument, if you want to do something when the connection is established."),Object(c.b)("p",null,"Example 1 (Regular function):"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'function on_connection(connected) {\n  if (!connected) show_error("Not connected", false);\n}\nnet_connect("yourserver.com", 80, on_connection);\n')),Object(c.b)("p",null,"Example 2 (Anonymous function):"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'net_connect("yourserver.com", 80, function (connected) {\n  if (!connected) show_error("Not connected", false);\n});\n')),Object(c.b)("hr",null),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Disconnect from the server:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"net_disconnect();\n")))}s.isMDXComponent=!0},84:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,f=s["".concat(a,".").concat(d)]||s[d]||b[d]||c;return t?o.a.createElement(f,i(i({ref:n},p),{},{components:t})):o.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);