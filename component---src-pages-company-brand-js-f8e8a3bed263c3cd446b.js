(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8584],{36392:function(e,t,n){"use strict";var r=n(69933),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=(0,r.Z)((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.Z=o},69933:function(e,t){"use strict";t.Z=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},28157:function(e,t,n){var r=n(15301).w_;e.exports.w=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"8 17 12 21 16 17"}},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"}},{tag:"path",attr:{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}}]})(e)}},40033:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,c=[],s=!1,m=-1;function u(){s&&l&&(s=!1,l.length?c=l.concat(c):m=-1,c.length&&d())}function d(){if(!s){var e=i(u);s=!0;for(var t=c.length;t;){for(l=c,c=[];++m<t;)l&&l[m].run();m=-1,t=c.length}l=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||s||i(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},51223:function(e,t,n){var r=n(5112),a=n(70030),o=n(3070).f,i=r("unscopables"),l=Array.prototype;null==l[i]&&o(l,i,{configurable:!0,value:a(null)}),e.exports=function(e){l[i][e]=!0}},77475:function(e,t,n){var r=n(43157),a=n(4411),o=n(70111),i=n(5112)("species"),l=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,(a(t)&&(t===l||r(t.prototype))||o(t)&&null===(t=t[i]))&&(t=void 0)),void 0===t?l:t}},65417:function(e,t,n){var r=n(77475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},70648:function(e,t,n){var r=n(51694),a=n(60614),o=n(84326),i=n(5112)("toStringTag"),l=Object,c="Arguments"==o(function(){return arguments}());e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=l(e),i))?n:c?o(t):"Object"==(r=o(t))&&a(t.callee)?"Arguments":r}},7207:function(e){var t=TypeError;e.exports=function(e){if(e>9007199254740991)throw t("Maximum allowed index exceeded");return e}},6790:function(e,t,n){"use strict";var r=n(43157),a=n(26244),o=n(7207),i=n(49974),l=function(e,t,n,c,s,m,u,d){for(var f,p,h=s,g=0,y=!!u&&i(u,d);g<c;)g in n&&(f=y?y(n[g],g,t):n[g],m>0&&r(f)?(p=a(f),h=l(e,t,f,p,h,m-1)-1):(o(h+1),e[h]=f),h++),g++;return h};e.exports=l},49974:function(e,t,n){var r=n(1702),a=n(19662),o=n(34374),i=r(r.bind);e.exports=function(e,t){return a(e),void 0===t?e:o?i(e,t):function(){return e.apply(t,arguments)}}},60490:function(e,t,n){var r=n(35005);e.exports=r("document","documentElement")},43157:function(e,t,n){var r=n(84326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4411:function(e,t,n){var r=n(1702),a=n(47293),o=n(60614),i=n(70648),l=n(35005),c=n(42788),s=function(){},m=[],u=l("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(s),h=function(e){if(!o(e))return!1;try{return u(s,m,e),!0}catch(t){return!1}},g=function(e){if(!o(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};g.sham=!0,e.exports=!u||a((function(){var e;return h(h.call)||!h(Object)||!h((function(){e=!0}))||e}))?g:h},70030:function(e,t,n){var r,a=n(19670),o=n(36048),i=n(80748),l=n(3501),c=n(60490),s=n(80317),m=n(6200),u=m("IE_PROTO"),d=function(){},f=function(e){return"<script>"+e+"</"+"script>"},p=function(e){e.write(f("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{r=new ActiveXObject("htmlfile")}catch(a){}var e,t;h="undefined"!=typeof document?document.domain&&r?p(r):((t=s("iframe")).style.display="none",c.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F):p(r);for(var n=i.length;n--;)delete h.prototype[i[n]];return h()};l[u]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(d.prototype=a(e),n=new d,d.prototype=null,n[u]=e):n=h(),void 0===t?n:o.f(n,t)}},36048:function(e,t,n){var r=n(19781),a=n(3353),o=n(3070),i=n(19670),l=n(45656),c=n(81956);t.f=r&&!a?Object.defineProperties:function(e,t){i(e);for(var n,r=l(t),a=c(t),s=a.length,m=0;s>m;)o.f(e,n=a[m++],r[n]);return e}},81956:function(e,t,n){var r=n(16324),a=n(80748);e.exports=Object.keys||function(e){return r(e,a)}},10365:function(e,t,n){"use strict";var r=n(53111).end,a=n(76091);e.exports=a("trimEnd")?function(){return r(this)}:"".trimEnd},76091:function(e,t,n){var r=n(76530).PROPER,a=n(47293),o=n(81361);e.exports=function(e){return a((function(){return!!o[e]()||"​᠎"!=="​᠎"[e]()||r&&o[e].name!==e}))}},33217:function(e,t,n){"use strict";var r=n(53111).start,a=n(76091);e.exports=a("trimStart")?function(){return r(this)}:"".trimStart},53111:function(e,t,n){var r=n(1702),a=n(84488),o=n(41340),i=n(81361),l=r("".replace),c="["+i+"]",s=RegExp("^"+c+c+"*"),m=RegExp(c+c+"*$"),u=function(e){return function(t){var n=o(a(t));return 1&e&&(n=l(n,s,"")),2&e&&(n=l(n,m,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},51694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},41340:function(e,t,n){var r=n(70648),a=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return a(e)}},81361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},86535:function(e,t,n){"use strict";var r=n(82109),a=n(6790),o=n(19662),i=n(47908),l=n(26244),c=n(65417);r({target:"Array",proto:!0},{flatMap:function(e){var t,n=i(this),r=l(n);return o(e),(t=c(n,0)).length=a(t,n,n,r,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},99244:function(e,t,n){n(51223)("flatMap")},35837:function(e,t,n){n(82109)({global:!0},{globalThis:n(17854)})},48702:function(e,t,n){n(83462);var r=n(82109),a=n(10365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==a},{trimEnd:a})},99967:function(e,t,n){var r=n(82109),a=n(33217);r({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==a},{trimLeft:a})},83462:function(e,t,n){var r=n(82109),a=n(10365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==a},{trimRight:a})},55674:function(e,t,n){n(99967);var r=n(82109),a=n(33217);r({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==a},{trimStart:a})},65743:function(e,t,n){n(35837)},81701:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67294),a=n(37242),o=n(64423).default.div.withConfig({displayName:"ColorBoxstyle__ColorBoxWrapper",componentId:"sc-84aeky-0"})(["\n         .PalletBox {\n           height: 16rem;\n           width: 16rem;\n           background-color: ",";\n           margin-bottom: 1rem;\n           padding: 1.5rem 2.5rem;\n           color: ",";\n           .color-name{\n             color: ",";\n             margin-bottom: 6.25rem;\n           }\n           .color-data{\n             font-size: 1.25rem;\n           }\n         }\n         @media (max-width:575px){\n          .PalletBox{\n              width: 9.5rem;\n              height: 9.5rem;\n              line-height: 2rem;\n              padding: 1rem 2rem;\n              .color-name{\n                font-size: 1.25rem;\n                margin-bottom: 1rem;\n              }\n              .color-data{\n                font-size: 1rem;\n              }\n          }\n      }\n       "],(function(e){return e.bgcolor?e.bgcolor:"red"}),(function(e){return e.dark?"black":"white"}),(function(e){return e.dark?"black":"white"})),i=function(e){var t=e.colorCode;return r.createElement(o,{bgcolor:t},r.createElement(a.JX,null,r.createElement("div",{className:"PalletBox"},r.createElement(a.X2,null,r.createElement("h4",{className:"color-name"}," ",e.name," ")),r.createElement("div",{className:"color-data"},r.createElement(a.X2,null,"RGB  ",e.R,",",e.G,",",e.B,r.createElement("br",null),e.CMY?e.K:t,r.createElement("br",null))))))}},33255:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r=n(67294),a=n(64423),o=n(26052),i=n(9357),l=n(63941),c=a.default.section.withConfig({displayName:"brandPagestyle__BrandPageWrapper",componentId:"sc-18b4kym-0"})(["\n\tposition: relative;\n\toverflow: visible;\n\tmargin-bottom: 2rem;\n\n\t.brandHeader {\n\t\tpadding: 6rem 0;\n\t\tbackground:",";\n\t\t\n\t\ttext-align: center;\n\t\th1{\n\t\t\tcolor: ",";\n\t\t}\n\t\tp{\n\t\t\tmargin: 1.5rem auto 4rem;\n\t\t\tmax-width: 60%;\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\n\t.bookmarks {\n\t\ttext-align: center;\n\n\t\timg {\n\t\t\twidth: 70%;\n\t\t}\n\t}\n\n\t.logo {\n\t\tbackground: ",";\n\t\tpadding: 0.95rem;\n\t}\n\n\t.brand-row {\n\t\tmargin: 0;\n\t}\n\n\t.brand-nav-col {\n\t\tpadding: 4rem 7rem 6rem;\n\t}\n\n\t.nav-fixed {\n\t\tposition: sticky;\n\t\ttop: 6rem;\n\t\tz-index: 1;\n\t}\n\n\t.header_link {\n\t\tdisplay: block;\n\t\tmargin: 0;\n\t\tposition: relative;\n\t\twidth: fit-content;\n\t\tcolor: ",";\n\t\tfont: 500 1.2rem/2.5rem 'Qanelas Soft', sans-serif;\n\t\ttransition: 0.2s border ease-in-out;\n\n\t\tspan::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 1px;\n\t\t\tbottom: 0;\n\t\t\tborder-bottom: 1px solid ",";\n\t\t\tmargin-bottom: -1px;\n\t\t\topacity: 0;\n\t\t}\n\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t\tcolor: ",";\n\n\t\t\tspan::before {\n\t\t\t\topacity: 1;\n\t\t\t\tanimation: flowin 0.5s ease-in;\n\t\t\t}\n\t\t}\n\t}\n\n\t.selected {\n\t\tborder-bottom: 1px solid ",";\n\t\tcolor: ",";\n\t}\n\n\t.post-content {\n\t\tmargin: 0rem 0rem 3rem 12rem;\n\t}\n\n\t.brand-section {\n\t\tpadding-top: 7rem;\n\t}\n\n\t.section + .section {\n\t\tmargin-top: -5rem;\n\t}\n\n\t@media screen and (max-width: 1800px) and (min-width: 1300px) {\n\t\t.post-content {\n\t\t\tmargin: 3rem 0rem 3rem 8rem;\n\t\t}\n\n\t\t.brand-nav-col {\n\t\t\tpadding: 4rem 3rem 6rem;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 1299px) and (min-width: 1024px) {\n\t\t.post-content {\n\t\t\tmargin: 3rem 0rem 3rem 3rem;\n\t\t}\n\t\t.brand-nav-col {\n\t\t\tpadding: 4rem 0.75rem 6rem;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 1023px) and (min-width: 768px) {\n\t\t.post-content {\n\t\t\tmargin: 3rem 0rem 3rem 1.5rem;\n\t\t}\n\t\t.brand-nav-col {\n\t\t\tpadding: 4rem 0.25rem 6rem;\n\t\t}\n\n\t\t.header_link {\n\t\t\tfont-size: 0.9rem;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 767px) {\n\t\t.brand-nav-col {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.post-content {\n\t\t\tmargin: 3rem auto 5rem;\n\t\t}\n\t}\n\n\t.download-button {\n\t\ttext-align: end;\n\t\tmargin: 0 0 1rem 0;\n\t}\n\t.ImgDiv, .color-code-wrapper {\n\t\twidth: 100%;\n\t\tmargin: auto;\n\t\tjustify-content: space-around;\n\t}\n\t.Layer5Logos {\n\t\tfont-style: italic;\n\t\ttext-align: center;\n\t\tmargin: auto;\n\t\t\n\t\timg.Layer5Icon {\n\t\t\twidth: auto;\n\t\t\theight: 50px;\n\t\t\tdisplay: block;\n\t\t\tmargin: auto;\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 575px) {\n\t\t.ImgDiv, .color-code-wrapper {\n\t\t\tmargin-left: 0px;\n\t\t}\n\t\timg.Layer5Icon {\n\t\t\twidth: auto;\n\t\t\theight: 80px;\n\t\t\tdisplay: block;\n\t\t\tmargin: auto;\n\t\t\tmargin-bottom: 1rem;\n\t\t\tmargin-top: 1rem;\n\t\t}\n\t}\n\n\t.layerH3 {\n\t\ttext-align: start;\n\t\tmargin-bottom: 1em;\n\t}\n\t.in{\n\t\tmargin-top: 2rem;\n\t}\n\n\t.blond-color-box, .white-color-box {\n\t\t.PalletBox {\n\t\t\tcolor: rgb(30, 33, 23);\n\t\t\t.color-name {\n\t\t\t\tcolor: rgb(30, 33, 23);\n\t\t\t}\n\t\t}\n\t}\n\n\t.white-color-box {\n\t\t.PalletBox {\n\t\t\tborder: 1px solid ",";\n\t\t}\n\t}\n\n\t@media screen and (max-width: 575px) {\n\t\t.download-button {\n\t\ttext-align: start;\n\t\t}\n\t}\n"],(function(e){return e.theme.DarkTheme?e.theme.elevationColor:e.theme.tertiaryColor}),(function(e){return e.theme.white}),(function(e){return e.theme.white}),(function(e){return e.theme.DarkTheme?"black":e.theme.primaryColor}),(function(e){return e.theme.DarkTheme?"rgba(255, 255, 255, 0.4)":"rgba(0, 0, 0, 0.4)"}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.tertiaryColor})),s=n(37242),m=n(1597),u=n(51500),d=n(63689),f=n(81701),p=n(28157),h=n(18156),g=n.p+"static/bookmarks-52d0accdfe4a0a4227b873c26ff73ff7.png",y=n.p+"static/bookmarks-3133e53640f6af6281d1e214f36172dc.pdf",E=n(20586),b=a.default.section.withConfig({displayName:"layer5__Layer5Wrapper",componentId:"sc-dg3hen-0"})(["\n    @media (max-width:575px){\n        .brandHeader{\n            padding: 3rem 0;\n        }\n    }\n"]),v=function(){return r.createElement(b,null,r.createElement("div",{className:"post-content"},r.createElement(s.X2,{className:"brand-section"},r.createElement(s.JX,{xs:12,sm:6},r.createElement("h1",{className:"layerH3"},"Layer5")),r.createElement(s.JX,{xs:12,sm:6,className:"download-button"},r.createElement("a",{href:"/brand/layer5-brand-kit.zip"},r.createElement(d.default,{primary:!0,title:"Download Logo Assets",external:!1},r.createElement(p.w,{size:21,className:"icon-left"})))),r.createElement(s.JX,null,r.createElement("p",null,"The Layer5 mark includes the Layer5 name & logo, and any word, phrase, image, or other designation that identifies the source or origin of any Layer5 projects. Please don’t modify the marks or use them in a confusing way, including suggesting sponsorship or endorsement by Layer5, or in a way that confuses Layer5 with another brand (including your own)."))),r.createElement(s.X2,null,r.createElement(s.JX,{xs:12},r.createElement("h2",{className:"layerH3 in"},"Logos")),r.createElement(u.Iv,null,r.createElement(s.X2,{Vcenter:!0,className:"Layer5Logos"},r.createElement(s.JX,{xs:12,sm:6},r.createElement("img",{src:h.Z,alt:"Layer5 Logo"}),"Primary Logo: broadly, and majorly applicable"),r.createElement(s.JX,{xs:12,sm:6},r.createElement("img",{src:E.Z,alt:"Layer5 Logo",className:"Layer5Icon"}),"Layer5 Icon: suited for square-shaped display")))),r.createElement(s.X2,null,r.createElement(s.JX,{xs:12},r.createElement("h2",{className:"layerH3 in"},"Colors")),r.createElement(s.JX,{xs:12},r.createElement("p",null,"Our community color palette consists of gray and green colors representing each of our projects. The Layer5 logo should be white when using project colors as the background.")),r.createElement(s.X2,{className:"color-code-wrapper"},r.createElement(f.Z,{name:"Keppel",R:"0",G:"179",B:"159",colorCode:"#00B39F"}),r.createElement(f.Z,{name:"Caribbean Green",R:"0",G:"211",B:"169",colorCode:"#00D3A9"}),r.createElement(f.Z,{name:"Saffron",R:"235",G:"192",B:"23",colorCode:"#EBC017"}),r.createElement("div",{className:"blond-color-box"},r.createElement(f.Z,{name:"Blond",R:"255",G:"243",B:"197",dark:!0,colorCode:"#FFF3C5"})),r.createElement(f.Z,{name:"Light Slate Gray",R:"122",G:"132",B:"142",colorCode:"#7A848E"}),r.createElement(f.Z,{name:"Dark Jungle Green",R:"30",G:"33",B:"23",colorCode:"#1E2117"}),r.createElement(f.Z,{name:"Teal Blue",R:"71",G:"126",B:"150",colorCode:"#477E96"}),r.createElement(f.Z,{name:"Casper",R:"177",G:"182",B:"184",colorCode:"#B1B6B8"}),r.createElement("div",{className:"white-color-box"},r.createElement(f.Z,{name:"White",R:"255",G:"255",B:"255",dark:!0,colorCode:"#FFFFFF"})))),r.createElement(s.X2,null,r.createElement(s.JX,{xs:12},r.createElement("h2",{className:"layerH3 in"},"Bookmarks")),r.createElement(s.JX,{xs:12},r.createElement("p",{className:"layerH3"},"Media available for print."),r.createElement(s.X2,{className:"bookmarks"},r.createElement(m.Link,{to:y},r.createElement("img",{className:"bookmarks",src:g,alt:"Layer5 and Meshery Bookmarks"})))))))},x=n.p+"static/meshery-logo-light-text-bae56b06a611ec26faffdfcdf4fc89a4.png",k=n.p+"static/meshery-logo-light-text-side-6d86be9e1f4485a1de538898b65580c1.png",w=n.p+"static/meshery-logo-dark-775afa3e35577965bbaf62e2d4e4b06d.png",A=function(){return r.createElement("div",{className:"post-content"},r.createElement(s.X2,{className:"brand-section"},r.createElement(s.JX,{xs:12,sm:6},r.createElement("h1",{className:"layerH3"},"Meshery")),r.createElement(s.JX,{xs:12,sm:6,className:"download-button"},r.createElement("a",{href:"/brand/meshery-brand-kit.zip"},r.createElement(d.default,{primary:!0,title:"Download Logo Assets",external:!0},r.createElement(p.w,{size:21,className:"icon-left"})))),r.createElement(s.JX,null,r.createElement("p",null,"The Meshery mark includes the Meshery name & logo, and any word, phrase, image, or other designation that identifies the source or origin of any Layer5 projects. Please don’t modify the marks or use them in a confusing way, including suggesting sponsorship or endorsement by Layer5, or in a way that confuses Layer5 with another brand (including your own)."))),r.createElement(s.X2,null,r.createElement(s.JX,null,r.createElement("h2",{className:"layerH3 in"},"Logos")),r.createElement(u.Iv,null,r.createElement(s.X2,{Vcenter:!0,className:"ImgDiv"},r.createElement(s.JX,{xs:12,sm:4},r.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA04AAABoCAMAAADxY1AFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAM1BMVEVtd3v////n6erP0tSepKd5goY8SU9UYGWSmZy2u73Dx8iFjpFIVFpha3Db3d+qsLL09PVlZrV6AAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAsSgAALEoBd3p0TQAAAAd0SU1FB+UCExYVBe1FRtkAAAfOSURBVHja7d3ZuqMqEAZQEcRZef+n7Ys+fb69EykKZNSf6ySYiiuWxWDXiVytl2rQjKbSH4rjCMZplllC8rvbgCP1alc/tSwa+RQnX7+s2+c333rryyf/ONrDpLp8nIQQQixr7ZxG1WeLBjilafOo2R3tMcL4tx06NycherVVzGmcc8YCnFI19fHdT7uBzS+KmyFk5uckhJlq5ZQXEzglPPk+lBDp3ukXxYUiXIKTEMdeJafJCHB6CCdhdm5Xg08QJyLVK8Xp+2JcAadtyR4FcEp5V7Ex0z3jke7thrwJK8VJLFtlnPZDgNOTOP3+blS6J/k3Tgd9gSjGyX4LWIbTbgQ4PYvTRxG8476QaCeZ6pXkZPVUhFMRTeCUuObFTfe41fLB9QkFOf0HugpOWxFN4JT1Dp1I93jV8tG4eirJSczVcDoEOD2QU8/ujlUtl84rQ1FOYq2E0ynA6YmcPpM44ndmVMuVu5+ynMxYBadiMQCnrNkele65q+U7o5uynMRSBacDnB7KaeH/cbqq5dSdl66Ek+gq4LQKcHooJ+mR1k+hk4t+pJSlOckKOPXg9BpOxDWGrpavrIyyNKeLy1PuH7XcxQmc8v9bE11S1XKiRv5zvKc4p6U4JwlOL+JEpXtEtfzgXdSKcxJbYU6jAKc3caLSvcF/ctHv4mF5TlNhThM4vYoT1amtWk5liLouTguLUy9jNmbFBpySRt5ymnYh3016VL9P32o5NQVtr4yTYHFSOlUz4FQo8qU4Uene5Fkj/4iOjVPkuI3Dabj1ybw/qvXWaRlGnbeBUx5OZI65+yzA/ZrFnYmT1nq0VdDWopw65lGB03M4Uened7V898CXj5P1GquKcpp4BwVOT+JEpXuf1XJiAe53bDJysl0I5qKcFLN8D04P4kSmex/V8pmf6uXlZJnNIyvkJDU4PZkTle79rpYPXvdZWTnN4AROdXCi0r2fbyImF11FJisnBU7gVAcnMt2bnJ97neqBEzi9lBO5Ant33FnbSurgBE4v5USle/+q5dQl7DIu4FQPp+6igVMqTqSV0y1Og1PdnJJzBSd2ujdoTU/n3GNyWi/nN57gBE7tcKIuPmaj15UqHZNT2EkITuBUEScy3ZPkxsCHBidwaoKTysaJTPemwzvVAydwejOnLXDXHaXByeeYiszZA6fcnAKXAx8anGxFFd68YnB6JKew7bR3cPL9f5rA6Q2cQtI94gBfz8m6GleuXazGPbkStwmcYqR7h26fUx9tu4/PlmWvCDmv7qXyokCTBSPv5LTyezKhnPzTvf0BnO40+qCy7WR0rFuLnNJF3slJxf16cdI9pcHJvxaRohm1gVNtnDzTvUODE/nvlPPsNQqcauPkl+7t4FRJtvf3320Hp8o4+aR7SoNTiqG88LaCU12cPM6AQ4OTK5q5n+80g1MuTguvzM5O93Zwcv6og6jDEzhF58Qcw+Kme86PAydd4AlPMzjl4cQeQY+S6oGT1preNjdNO8EpByfDnlXBSvd2cOJwKvCMpxWcMnDiz1fipHuMTwOnAsVyIYQZwSk5J+OxzMad7h0anJicqH3dM5zH4JSEk9dkWme6t4MTl1PwusyY6R44xeV0+GhyngEsm+D0b6FG7utTD05pORnPx911EWyCU7F8bwWnlJzMrj3beTfVA6dbK18iX57AKSKn3lsTme4xb8PA6ef0iLyPnR7AKRmnOWTvnO72bRg4/fp/UjlP5RmcEnGSgXu7n/dSPXD6qkic+a5QBpxScJJq1IGN+/hmcOKHdM02ha8DJ/LcHf/fNWYmLkS/WzAlIt3jV9xb4TSn30joh6hByRx1PtUCp5SR5+9kNPMLpLea5Nzkts8p5fZUidu29rybp/tXVv+Tt5mNwQ52RSc+pw6cqgJ1CM43ByeiQ/uwoP8AEzg1zUlvhlOLACeqw83k8AROLbSTE2VwIju0P2/p2MDpVZw6cLrNiRpl3cAJnMDJr0P7DqMLOIETOHl2OLFnmIATOIGTq0P78NMETuAETp4dLomHc8EJnF7EiViV1oETOIGTX4eJh3PBCZzexIkYfjIbOIETOPl1mHQ4F5zA6V2ciOGnA5xewWkAp3icCE8zOL2B0wxOETkRm+Sc4PR8TpZnCvTgFNhhstWE4NSAJoP1TnE5Ec8QWsGpIKexS93WmZmZgBO/w1TDTy/hNEc9w53HlKetLXBKFvlbnFKtJnwJp7itEk5jC5ySRd7GiVlNsA8/9Rs4vZDT567K4MQ6ixz1nXvDueDULKcTnO5wSrKaEJya5TSC0y1OKVYTglOrnL6iBU6enIjhJwVOL+PUgdNdTvGHc8GpUU7fwQInb07RVxOCU6OcdnC6zyn6cC44tcnpYnQFnPw5UasJR3B6C6eroRFwCuAUeTUhOLXI6TITAacQTra1ZCJoNSE4tcjp8iEq4BTEKepqQnBqkNN1FRecwjgRxz2D0/M5WcZEwCmQU8ThJ3BqjZO1ggtOoZzirSYEp8Y4SWu9CZyCORHDuTs4PZeTIbamB6dgTnrrvZMBcGqe00wNLYJTOKdYqwnBqRlOZqbH6cHpBqdIqwnBqQ1OZlldvyo43eFEDD/JfJx2edlch375pjPKu65fFbXl7U1KNXES+IDfwe//2xX8vJG3HJEM3nnSfvj88t559Xb+3dcfiLiUQQWJ1OgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDItMTlUMjI6MDU6MDcrMDA6MDCXYUVyAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAyLTE5VDIyOjA1OjA3KzAwOjAw5jz9zgAAAABJRU5ErkJggg==",alt:"MesheryDark Logo"})),r.createElement(s.JX,{xs:12,sm:4},r.createElement("img",{src:k,alt:"MesheryLightTextSide Logo"}))),r.createElement(s.X2,{Vcenter:!0,className:"ImgDiv"},r.createElement(s.JX,{xs:12,sm:4},r.createElement("img",{src:x,alt:"MesheryLightText Logo"})),r.createElement(s.JX,{xs:12,sm:4},r.createElement("img",{src:w,alt:"Meshery Logo"}))))),r.createElement(s.X2,null,r.createElement(s.JX,null,r.createElement("h2",{className:"layerH3 in"},"Colors")),r.createElement(s.JX,null,r.createElement("p",null,"The Meshery color palette consists of the primary Meshery color and additional shades. The Meshery logo should be white or monochrome tonal when using a color background.")),r.createElement(s.X2,{className:"color-code-wrapper"},r.createElement(f.Z,{name:"Charcoal",R:"60",G:"73",B:"79",colorCode:"#3C494F"}),r.createElement(f.Z,{name:"Keppel",R:"0",G:"179",B:"159",colorCode:"#00B39F"}),r.createElement(f.Z,{name:"Caribbean Green",R:"0",G:"211",B:"169",colorCode:"#00D3A9"}))))},T=n(40156),L=(0,T.ZP)((function(){return n.e(8643).then(n.bind(n,78643))})),M=(0,T.ZP)((function(){return n.e(1221).then(n.bind(n,91221))})),S=(0,T.ZP)((function(){return n.e(918).then(n.bind(n,70918))})),C=(0,T.ZP)((function(){return n.e(834).then(n.bind(n,70834))})),N=(0,T.ZP)((function(){return n.e(9787).then(n.bind(n,89787))})),I=(0,T.ZP)((function(){return Promise.resolve().then(n.bind(n,63689))})),P=(0,T.ZP)((function(){return Promise.all([n.e(7665),n.e(3545)]).then(n.bind(n,13545))})),B=(0,T.ZP)((function(){return n.e(9095).then(n.bind(n,99095))})),j=(0,T.ZP)((function(){return n.e(4779).then(n.bind(n,84779))})),R=(0,T.ZP)((function(){return n.e(5403).then(n.bind(n,85403))})),O=function(e){if(e){var t=e.getBoundingClientRect().height,n=e.offsetTop;return{height:t,offsetTop:n,offsetBottom:n+t}}return{dummyheight:0,dummyoffsetTop:0,dummyoffsetBottom:0}},X=function(e,t){void 0===t&&(t=2e3);var n=document.documentElement;if(0===n.scrollTop){var r=n.scrollTop;++n.scrollTop,n=r+1===n.scrollTop--?n:document.body}Z(n,n.scrollTop,e,t)},Z=function(e,t,n,r){r<=0||("object"==typeof t&&(t=t.offsetTop),"object"==typeof n&&(n=n.offsetTop+580),D(e,t,n,0,1/r,20,J))},D=function e(t,n,r,a,o,i,l){a<0||a>1||o<=0?t.scrollTop=r:(t.scrollTop=n-(n-r)*l(a),a+=o*i,setTimeout((function(){e(t,n,r,a,o,i,l)}),i))},J=function(e){return--e*e*e+1},F=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,r.useEffect)((function(){window.addEventListener("scroll",(function(){return window.pageYOffset>510?n(!0):n(!1)}))}),[]);var a=(0,r.useState)(),o=a[0],i=a[1],l=(0,r.useRef)(null),m=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useRef)(null),f=(0,r.useRef)(null),h=(0,r.useRef)(null),g=(0,r.useRef)(null),y=(0,r.useRef)(null),E=(0,r.useRef)(null),b=(0,r.useRef)(null),x=(0,r.useRef)(null),k=(0,r.useRef)(null),w=[{section:"Layer5",ref:m},{section:"Meshery",ref:u},{section:"MeshSync",ref:d},{section:"MesheryOperator",ref:f},{section:"ImageHub",ref:h},{section:"SMP",ref:y},{section:"MeshMark",ref:k},{section:"ServiceMeshPatterns",ref:E},{section:"NightHawk",ref:b},{section:"MeshMate",ref:x},{section:"MeshMaster",ref:g}];return(0,r.useEffect)((function(){var e=function(){var e=O(l.current).height,t=window.scrollY+e,n=w.find((function(e){var n=e.ref.current;if(n){var r=O(n),a=r.offsetBottom,o=r.offsetTop;return t>o&&t<a}}));n&&n.section!==o?i(n.section):!n&&o&&i(void 0)};return e(),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[o]),r.createElement(c,null,r.createElement("div",{className:"brandHeader",ref:l},r.createElement("h1",null,"Layer5 Brand Kits"),r.createElement("p",null,"We’ve created some guidelines to help you use our brand and assets, including our logo, content and trademarks, without having to negotiate legal agreements for each use. To make any use of our marks in a way not covered by these guidelines, please contact us and include a visual mockup of intended use."),r.createElement("a",{href:"/brand/brand-kit.zip"},r.createElement(I,{primary:!0,title:"Download Brand Kit"},r.createElement(p.w,{size:21,className:"icon-left"})))),r.createElement(s.X2,{className:"brand-row"},r.createElement(s.JX,{xs:12,md:9,className:"brand-col"},r.createElement("div",{className:"section",ref:m},r.createElement(v,null)),r.createElement("div",{className:"section",ref:u},r.createElement(A,null)),r.createElement("div",{className:"section",ref:d},r.createElement(L,null)),r.createElement("div",{className:"section",ref:f},r.createElement(M,null)),r.createElement("div",{className:"section",ref:h},r.createElement(S,null)),r.createElement("div",{className:"section",ref:y},r.createElement(C,null)),r.createElement("div",{className:"section",ref:k},r.createElement(R,null)),r.createElement("div",{className:"section",ref:E},r.createElement(B,null)),r.createElement("div",{className:"section",ref:b},r.createElement(P,null)),r.createElement("div",{className:"section",ref:x},r.createElement(N,null)),r.createElement("div",{className:"section",ref:g},r.createElement(j,null))),r.createElement(s.JX,{md:3,className:"brand-nav-col"},r.createElement("nav",{className:"brand-nav "+(t?"nav-fixed":"")},r.createElement("p",{className:"header_link "+("Layer5"===o?"selected":""),onClick:function(){X(m.current)}},r.createElement("span",null,"Layer5")),r.createElement("p",{className:"header_link "+("Meshery"===o?"selected":""),onClick:function(){X(u.current)}},r.createElement("span",null,"Meshery")),r.createElement("p",{className:"header_link "+("MeshSync"===o?"selected":""),onClick:function(){X(d.current)}},r.createElement("span",null,"MeshSync")),r.createElement("p",{className:"header_link "+("MesheryOperator"===o?"selected":""),onClick:function(){X(f.current)}},r.createElement("span",null,"Meshery Operator")),r.createElement("p",{className:"header_link "+("ImageHub"===o?"selected":""),onClick:function(){X(h.current)}},r.createElement("span",null,"Image Hub")),r.createElement("p",{className:"header_link "+("SMP"===o?"selected":""),onClick:function(){X(y.current)}},r.createElement("span",null,"Service Mesh Performance")),r.createElement("p",{className:"header_link "+("MeshMark"===o?"selected":""),onClick:function(){X(k.current)}},r.createElement("span",null,"MeshMark")),r.createElement("p",{className:"header_link "+("ServiceMeshPatterns"===o?"selected":""),onClick:function(){X(E.current)}},r.createElement("span",null,"Service Mesh Patterns")),r.createElement("p",{className:"header_link "+("NightHawk"===o?"selected":""),onClick:function(){X(b.current)}},r.createElement("span",null," NightHawk ")),r.createElement("p",{className:"header_link "+("MeshMate"===o?"selected":""),onClick:function(){X(x.current)}},r.createElement("span",null,"MeshMate")),r.createElement("p",{className:"header_link "+("MeshMaster"===o?"selected":""),onClick:function(){X(g.current)}},r.createElement("span",null," MeshMaster "))))))},z=n(42308),U=n(35085),G=n(38001),Y=function(){var e=(0,r.useState)(),t=e[0],n=e[1];return r.createElement(a.ThemeProvider,{theme:"dark"===t?G.k:G.Z},r.createElement(U.Z,null),r.createElement(o.Z,null,r.createElement(i.Z,{title:"Brand Kits",description:"Layer5 brand kits with logos, color schemes, and approved usage of Meshery, Image Hub, and other Layer5 projects"}),r.createElement(l.Z,{theme:t,themeSetter:function(e){n(e)}}),r.createElement(u.ZP,null,r.createElement(F,null)),r.createElement(z.default,null)))}},20586:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OC4xMSA5My43OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMGIzOWY7fS5jbHMtMntmaWxsOiMwMGQzYTk7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT41LWxpZ2h0LW5vLXRyaW08L3RpdGxlPjxyZWN0IGlkPSJfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iY2xzLTEiIHg9IjU3LjgzIiB3aWR0aD0iMzYuOTMiIGhlaWdodD0iMTcuNzkiLz48cGF0aCBpZD0iX1BhdGhfMiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGNsYXNzPSJjbHMtMSIgZD0iTTk4LjExLDU5LjkzVjUyLjU1YzAtOC40OC03LjE0LTE1LjM2LTE1Ljk0LTE1LjM2SDIyLjU3VjMyLjM0SC43NXYyMUg3Ni4yOXY2LjU3WiIvPjxwb2x5Z29uIGlkPSJfUGF0aF8zIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgY2xhc3M9ImNscy0yIiBwb2ludHM9IjIyLjU3IDI2LjUyIDIyLjU3IDE3Ljc5IDUxLjc5IDE3Ljc5IDUxLjc5IDAgMC43NSAwIDAuNzUgMjYuNTIgMjIuNTcgMjYuNTIiLz48cGF0aCBpZD0iX1BhdGhfNCIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGNsYXNzPSJjbHMtMiIgZD0iTTc2LjI5LDY1LjY0Vjc2SDQ3LjA3VjkzLjc4aDM2YzguMzEsMCwxNS02LjQ4LDE1LTE0LjQ4VjY1LjY0WiIvPjxwYXRoIGlkPSJfUGF0aF81IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgY2xhc3M9ImNscy0xIiBkPSJNMjAuODIsNjYuNjFWNzZINDFWOTMuNzhIMTVDNi43Myw5My43OCwwLDg3LjMsMCw3OS4zVjY2LjYxWiIvPjwvc3ZnPg=="},18156:function(e,t,n){"use strict";t.Z=n.p+"static/layer5-white-bg-f25da3105b4a3ac3326759316e786e96.png"}}]);
//# sourceMappingURL=component---src-pages-company-brand-js-f8e8a3bed263c3cd446b.js.map