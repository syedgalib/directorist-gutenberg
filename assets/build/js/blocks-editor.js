(()=>{var e={62945:e=>{e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),o=Object.keys(t);if(s.length!==o.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var l=s[c];if(!a(l))return!1;var u=e[l],d=t[l];if(!1===(i=r?r.call(n,u,d,l):void 0)||void 0===i&&u!==d)return!1}return!0}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;globalThis.importScripts&&(e=globalThis.location+"");var t=globalThis.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),r.nc=void 0,(()=>{"use strict";const e=window.wp.domReady;var t=r.n(e);const n=window.wp.element,i=window.wp.components,s=window.wp.i18n,o=window.React;var a=r.n(o),c=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],l={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"};function u(e,t,r){const n=[...e].map((e,n)=>p(e,{...r,index:n,level:t+1})).filter(Boolean);return n.length?n:null}function d(e,t={}){return"string"==typeof e?function(e,t={}){if(!e||"string"!=typeof e)return null;const{includeAllNodes:r=!1,nodeOnly:n=!1,selector:i="body > *",type:s="text/html"}=t;try{const o=(new DOMParser).parseFromString(e,s);if(r){const{childNodes:e}=o.body;return n?e:[...e].map(e=>p(e,t))}const a=o.querySelector(i)||o.body.childNodes[0];if(!(a instanceof Node))throw new TypeError("Error parsing input");return n?a:p(a,t)}catch(e){}return null}(e,t):e instanceof Node?p(e,t):null}function p(e,t={}){if(!(e&&e instanceof Node))return null;const{actions:r=[],index:n=0,level:i=0,randomKey:s}=t;let a=e,d=`${i}-${n}`;const p=[];return s&&0===i&&(d=`${function(e=6){let t="";for(let r=e;r>0;--r)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.round(61*Math.random())];return t}()}-${d}`),Array.isArray(r)&&r.forEach(t=>{t.condition(a,d,i)&&("function"==typeof t.pre&&(a=t.pre(a,d,i),a instanceof Node||(a=e)),"function"==typeof t.post&&p.push(t.post(a,d,i)))}),p.length?p:function(e,t){const{key:r,level:n,...i}=t;switch(e.nodeType){case 1:return o.createElement((s=e.nodeName,/[a-z]+[A-Z]+[a-z]+/.test(s)?s:s.toLowerCase()),function(e,t){const r={key:t};if(e instanceof Element){const t=e.getAttribute("class");t&&(r.className=t),[...e.attributes].forEach(e=>{switch(e.name){case"class":break;case"style":r[e.name]="string"!=typeof(t=e.value)?{}:t.split(/ ?; ?/).reduce((e,t)=>{const[r,n]=t.split(/ ?: ?/).map((e,t)=>0===t?e.replace(/\s+/g,""):e.trim());if(r&&n){const t=r.replace(/(\w)-(\w)/g,(e,t,r)=>`${t}${r.toUpperCase()}`);let i=n.trim();Number.isNaN(Number(n))||(i=Number(n)),e[r.startsWith("-")?r:t]=i}return e},{});break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":r[l[e.name]||e.name]=!0;break;default:r[l[e.name]||e.name]=e.value}var t})}return r}(e,r),u(e.childNodes,n,i));case 3:{const t=e.nodeValue?.toString()??"";if(!i.allowWhiteSpaces&&/^\s+$/.test(t)&&!/[\u00A0\u202F]/.test(t))return null;if(!e.parentNode)return t;const r=e.parentNode.nodeName.toLowerCase();return c.includes(r)?(/\S/.test(t)&&console.warn(`A textNode is not allowed inside '${r}'. Your text "${t}" will be ignored`),null):t}case 8:default:return null;case 11:return u(e.childNodes,n,t)}var s}(a,{key:d,level:i,...t})}var g=Object.defineProperty,h=(e,t,r)=>((e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!=typeof t?t+"":t,r),f="react-inlinesvg",m={IDLE:"idle",LOADING:"loading",LOADED:"loaded",FAILED:"failed",READY:"ready",UNSUPPORTED:"unsupported"};function b(e){return e[Math.floor(Math.random()*e.length)]}function x(){return!("undefined"==typeof window||!window.document?.createElement)}async function y(e,t){const r=await fetch(e,t),n=r.headers.get("content-type"),[i]=(n??"").split(/ ?; ?/);if(r.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some(e=>i.includes(e)))throw new Error(`Content type isn't valid: ${i}`);return r.text()}function v(e=1){return new Promise(t=>{setTimeout(t,1e3*e)})}var w,k=class{constructor(){h(this,"cacheApi"),h(this,"cacheStore"),h(this,"subscribers",[]),h(this,"isReady",!1),this.cacheStore=new Map;let e=f,t=!1;x()&&(e=window.REACT_INLINESVG_CACHE_NAME??f,t=!!window.REACT_INLINESVG_PERSISTENT_CACHE&&"caches"in window),t?caches.open(e).then(e=>{this.cacheApi=e}).catch(e=>{console.error(`Failed to open cache: ${e.message}`),this.cacheApi=void 0}).finally(()=>{this.isReady=!0;const e=[...this.subscribers];this.subscribers.length=0,e.forEach(e=>{try{e()}catch(e){console.error(`Error in CacheStore subscriber callback: ${e.message}`)}})}):this.isReady=!0}onReady(e){this.isReady?e():this.subscribers.push(e)}async get(e,t){return await(this.cacheApi?this.fetchAndAddToPersistentCache(e,t):this.fetchAndAddToInternalCache(e,t)),this.cacheStore.get(e)?.content??""}set(e,t){this.cacheStore.set(e,t)}isCached(e){return this.cacheStore.get(e)?.status===m.LOADED}async fetchAndAddToInternalCache(e,t){const r=this.cacheStore.get(e);if(r?.status!==m.LOADING){if(!r?.content){this.cacheStore.set(e,{content:"",status:m.LOADING});try{const r=await y(e,t);this.cacheStore.set(e,{content:r,status:m.LOADED})}catch(t){throw this.cacheStore.set(e,{content:"",status:m.FAILED}),t}}}else await this.handleLoading(e,async()=>{this.cacheStore.set(e,{content:"",status:m.IDLE}),await this.fetchAndAddToInternalCache(e,t)})}async fetchAndAddToPersistentCache(e,t){const r=this.cacheStore.get(e);if(r?.status===m.LOADED)return;if(r?.status===m.LOADING)return void await this.handleLoading(e,async()=>{this.cacheStore.set(e,{content:"",status:m.IDLE}),await this.fetchAndAddToPersistentCache(e,t)});this.cacheStore.set(e,{content:"",status:m.LOADING});const n=await(this.cacheApi?.match(e));if(n){const t=await n.text();return void this.cacheStore.set(e,{content:t,status:m.LOADED})}try{await(this.cacheApi?.add(new Request(e,t)));const r=await(this.cacheApi?.match(e)),n=await(r?.text())??"";this.cacheStore.set(e,{content:n,status:m.LOADED})}catch(t){throw this.cacheStore.set(e,{content:"",status:m.FAILED}),t}}async handleLoading(e,t){for(let t=0;t<10;t++){if(this.cacheStore.get(e)?.status!==m.LOADING)return;await v(.1)}await t()}keys(){return[...this.cacheStore.keys()]}data(){return[...this.cacheStore.entries()].map(([e,t])=>({[e]:t}))}async delete(e){this.cacheApi&&await this.cacheApi.delete(e),this.cacheStore.delete(e)}async clear(){if(this.cacheApi){const e=await this.cacheApi.keys();await Promise.allSettled(e.map(e=>this.cacheApi.delete(e)))}this.cacheStore.clear()}};function S(e){const t=(0,o.useRef)(void 0);return(0,o.useEffect)(()=>{t.current=e}),t.current}function E(e){const{baseURL:t,content:r,description:n,handleError:i,hash:s,preProcessor:o,title:a,uniquifyIDs:c=!1}=e;try{const e=function(e,t){return t?t(e):e}(r,o),i=d(e,{nodeOnly:!0});if(!(i&&i instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");const l=C(i,{baseURL:t,hash:s,uniquifyIDs:c});if(n){const e=l.querySelector("desc");e?.parentNode&&e.parentNode.removeChild(e);const t=document.createElementNS("http://www.w3.org/2000/svg","desc");t.innerHTML=n,l.prepend(t)}if(void 0!==a){const e=l.querySelector("title");if(e?.parentNode&&e.parentNode.removeChild(e),a){const e=document.createElementNS("http://www.w3.org/2000/svg","title");e.innerHTML=a,l.prepend(e)}}return l}catch(e){return i(e)}}function C(e,t){const{baseURL:r="",hash:n,uniquifyIDs:i}=t,s=["id","href","xlink:href","xlink:role","xlink:arcrole"],o=["href","xlink:href"];return i?([...e.children].forEach(e=>{if(e.attributes?.length){const t=Object.values(e.attributes).map(e=>{const t=e,i=/url\((.*?)\)/.exec(e.value);return i?.[1]&&(t.value=e.value.replace(i[0],`url(${r}${i[1]}__${n})`)),t});s.forEach(e=>{const r=t.find(t=>t.name===e);var i,s;r&&(i=e,s=r.value,!o.includes(i)||!s||s.includes("#"))&&(r.value=`${r.value}__${n}`)})}return e.children.length?C(e,t):e}),e):e}function A(e){const{cacheRequests:t=!0,children:r=null,description:n,fetchOptions:i,innerRef:s,loader:a=null,onError:c,onLoad:l,src:u,title:p,uniqueHash:g}=e,[h,f]=(0,o.useReducer)((e,t)=>({...e,...t}),{content:"",element:null,isCached:t&&w.isCached(e.src),status:m.IDLE}),{content:v,element:k,isCached:C,status:A}=h,_=S(e),j=S(h),I=(0,o.useRef)(g??function(){const e="abcdefghijklmnopqrstuvwxyz",t=`${e}${e.toUpperCase()}1234567890`;let r="";for(let e=0;e<8;e++)r+=b(t);return r}()),N=(0,o.useRef)(!1),D=(0,o.useRef)(!1),R=(0,o.useCallback)(e=>{N.current&&(f({status:"Browser does not support SVG"===e.message?m.UNSUPPORTED:m.FAILED}),c?.(e))},[c]),O=(0,o.useCallback)((e,t=!1)=>{N.current&&f({content:e,isCached:t,status:m.LOADED})},[]),P=(0,o.useCallback)(async()=>{const e=await y(u,i);O(e)},[i,O,u]),T=(0,o.useCallback)(()=>{try{const t=d(E({...e,handleError:R,hash:I.current,content:v}));if(!t||!(0,o.isValidElement)(t))throw new Error("Could not convert the src to a React element");f({element:t,status:m.READY})}catch(e){R(e)}},[v,R,e]),F=(0,o.useCallback)(async()=>{const e=/^data:image\/svg[^,]*?(;base64)?,(.*)/u.exec(u);let r;if(e?r=e[1]?window.atob(e[2]):decodeURIComponent(e[2]):u.includes("<svg")&&(r=u),r)O(r);else try{if(t){const e=await w.get(u,i);O(e,!0)}else await P()}catch(e){R(e)}},[t,P,i,R,O,u]),$=(0,o.useCallback)(async()=>{N.current&&f({content:"",element:null,isCached:!1,status:m.LOADING})},[]);(0,o.useEffect)(()=>{if(N.current=!0,x()&&!D.current){try{if(A===m.IDLE){if(!function(){if(!document)return!1;const e=document.createElement("div");e.innerHTML="<svg />";const t=e.firstChild;return!!t&&"http://www.w3.org/2000/svg"===t.namespaceURI}()||"undefined"==typeof window||null===window)throw new Error("Browser does not support SVG");if(!u)throw new Error("Missing src");$()}}catch(e){R(e)}return D.current=!0,()=>{N.current=!1}}},[]),(0,o.useEffect)(()=>{if(x()&&_&&_.src!==u){if(!u)return void R(new Error("Missing src"));$()}},[R,$,_,u]),(0,o.useEffect)(()=>{A===m.LOADED&&T()},[A,T]),(0,o.useEffect)(()=>{x()&&_&&_.src===u&&(_.title===p&&_.description===n||T())},[n,T,_,u,p]),(0,o.useEffect)(()=>{if(j)switch(A){case m.LOADING:j.status!==m.LOADING&&F();break;case m.LOADED:j.status!==m.LOADED&&T();break;case m.READY:j.status!==m.READY&&l?.(u,C)}},[F,T,C,l,j,u,A]);const M=function(e,...t){const r={};for(const n in e)({}).hasOwnProperty.call(e,n)&&(t.includes(n)||(r[n]=e[n]));return r}(e,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return x()?k?(0,o.cloneElement)(k,{ref:s,...M}):[m.UNSUPPORTED,m.FAILED].includes(A)?r:a:a}function _(e){w||(w=new k);const{loader:t}=e,[r,n]=(0,o.useState)(w.isReady);return(0,o.useEffect)(()=>{r||w.onReady(()=>{n(!0)})},[r]),r?o.createElement(A,{...e}):t}function j(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=j(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}const I=function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=j(e))&&(n&&(n+=" "),n+=t);return n},N=()=>window.directorist_gutenberg_block_data||{},D=(e,t=null)=>((e,t,r=null)=>void 0!==e[t]?e[t]:r)(N(),e,t),R=r.p+"icons/chevron-down.svg",O=r.p+"icons/check-solid.svg",P=r.p+"icons/grid.svg",T=window.ReactJSXRuntime;function F(){const e=D("template_links")||[],t=e.find(e=>!0===e.is_current),r=t?t.title:(0,s.__)("View","directorist-gutenberg");return(0,T.jsx)(i.Dropdown,{className:"directorist-gutenberg-toggle-views-dropdown",contentClassName:"directorist-gutenberg-toggle-views-dropdown-content",popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:t})=>(0,T.jsxs)(i.Button,{variant:"tertiary",onClick:t,"aria-expanded":e,children:[(0,T.jsx)(_,{src:P}),(0,T.jsx)("span",{children:(0,s.sprintf)((0,s.__)("Edit %s","directorist-gutenberg"),r)}),(0,T.jsx)(_,{src:R})]}),renderContent:()=>(0,T.jsx)("div",{children:e.map(e=>(0,T.jsxs)("a",{href:e.url,className:I("directorist-gutenberg-toggle-views-dropdown-item",{"directorist-gutenberg-toggle-views-dropdown-item-current":e.is_current}),children:[(0,T.jsx)("span",{children:e.title}),e.is_current&&(0,T.jsx)(_,{src:O})]},e.id))})})}const $=r.p+"icons/ai-star.svg";function M(){return(0,T.jsxs)(i.Button,{className:"directorist-gutenberg-ai-assistant-toggle",onClick:()=>{window.dispatchEvent(new CustomEvent("directorist-ai-assistant-toggle"))},children:[(0,T.jsx)(_,{width:24,height:24,src:$}),(0,T.jsx)("span",{children:(0,s.__)("AI Assistant","directorist-gutenberg")})]})}const L=window.wp.data,z=r.p+"icons/ai-star-alt.svg",B=r.p+"icons/ai-credit.svg";var G=function(){return G=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},G.apply(this,arguments)};function H(e,t,r){if(r||2===arguments.length)for(var n,i=0,s=t.length;i<s;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var q=r(62945),U=r.n(q),Y="-ms-",W="-moz-",V="-webkit-",X="comm",K="rule",J="decl",Z="@keyframes",Q=Math.abs,ee=String.fromCharCode,te=Object.assign;function re(e){return e.trim()}function ne(e,t){return(e=t.exec(e))?e[0]:e}function ie(e,t,r){return e.replace(t,r)}function se(e,t,r){return e.indexOf(t,r)}function oe(e,t){return 0|e.charCodeAt(t)}function ae(e,t,r){return e.slice(t,r)}function ce(e){return e.length}function le(e){return e.length}function ue(e,t){return t.push(e),e}function de(e,t){return e.filter(function(e){return!ne(e,t)})}var pe=1,ge=1,he=0,fe=0,me=0,be="";function xe(e,t,r,n,i,s,o,a){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:pe,column:ge,length:o,return:"",siblings:a}}function ye(e,t){return te(xe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ve(e){for(;e.root;)e=ye(e.root,{children:[e]});ue(e,e.siblings)}function we(){return me=fe>0?oe(be,--fe):0,ge--,10===me&&(ge=1,pe--),me}function ke(){return me=fe<he?oe(be,fe++):0,ge++,10===me&&(ge=1,pe++),me}function Se(){return oe(be,fe)}function Ee(){return fe}function Ce(e,t){return ae(be,e,t)}function Ae(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _e(e){return re(Ce(fe-1,Ne(91===e?e+2:40===e?e+1:e)))}function je(e){for(;(me=Se())&&me<33;)ke();return Ae(e)>2||Ae(me)>3?"":" "}function Ie(e,t){for(;--t&&ke()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return Ce(e,Ee()+(t<6&&32==Se()&&32==ke()))}function Ne(e){for(;ke();)switch(me){case e:return fe;case 34:case 39:34!==e&&39!==e&&Ne(me);break;case 40:41===e&&Ne(e);break;case 92:ke()}return fe}function De(e,t){for(;ke()&&e+me!==57&&(e+me!==84||47!==Se()););return"/*"+Ce(t,fe-1)+"*"+ee(47===e?e:ke())}function Re(e){for(;!Ae(Se());)ke();return Ce(e,fe)}function Oe(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Pe(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case J:return e.return=e.return||e.value;case X:return"";case Z:return e.return=e.value+"{"+Oe(e.children,n)+"}";case K:if(!ce(e.value=e.props.join(",")))return""}return ce(r=Oe(e.children,n))?e.return=e.value+"{"+r+"}":""}function Te(e,t,r){switch(function(e,t){return 45^oe(e,0)?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+W+e+Y+e+e;case 5936:switch(oe(e,t+11)){case 114:return V+e+Y+ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+Y+ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+Y+ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+Y+e+e;case 6165:return V+e+Y+"flex-"+e+e;case 5187:return V+e+ie(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return V+e+Y+"flex-item-"+ie(e,/flex-|-self/g,"")+(ne(e,/flex-|baseline/)?"":Y+"grid-row-"+ie(e,/flex-|-self/g,""))+e;case 4675:return V+e+Y+"flex-line-pack"+ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+Y+ie(e,"shrink","negative")+e;case 5292:return V+e+Y+ie(e,"basis","preferred-size")+e;case 6060:return V+"box-"+ie(e,"-grow","")+V+e+Y+ie(e,"grow","positive")+e;case 4554:return V+ie(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return ie(ie(ie(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return ie(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return ie(ie(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!ne(e,/flex-|baseline/))return Y+"grid-column-align"+ae(e,t)+e;break;case 2592:case 3360:return Y+ie(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,ne(e.props,/grid-\w+-end/)})?~se(e+(r=r[t].value),"span",0)?e:Y+ie(e,"-start","")+e+Y+"grid-row-span:"+(~se(r,"span",0)?ne(r,/\d+/):+ne(r,/\d+/)-+ne(e,/\d+/))+";":Y+ie(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return ne(e.props,/grid-\w+-start/)})?e:Y+ie(ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ie(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ce(e)-1-t>6)switch(oe(e,t+1)){case 109:if(45!==oe(e,t+4))break;case 102:return ie(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+W+(108==oe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~se(e,"stretch",0)?Te(ie(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,i,s,o,a){return Y+r+":"+n+a+(i?Y+r+"-span:"+(s?o:+o-+n)+a:"")+e});case 4949:if(121===oe(e,t+6))return ie(e,":",":"+V)+e;break;case 6444:switch(oe(e,45===oe(e,14)?18:11)){case 120:return ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(45===oe(e,14)?"inline-":"")+"box$3$1"+V+"$2$3$1"+Y+"$2box$3")+e;case 100:return ie(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(e,"scroll-","scroll-snap-")+e}return e}function Fe(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case J:return void(e.return=Te(e.value,e.length,r));case Z:return Oe([ye(e,{value:ie(e.value,"@","@"+V)})],n);case K:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(ne(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ve(ye(e,{props:[ie(t,/:(read-\w+)/,":-moz-$1")]})),ve(ye(e,{props:[t]})),te(e,{props:de(r,n)});break;case"::placeholder":ve(ye(e,{props:[ie(t,/:(plac\w+)/,":"+V+"input-$1")]})),ve(ye(e,{props:[ie(t,/:(plac\w+)/,":-moz-$1")]})),ve(ye(e,{props:[ie(t,/:(plac\w+)/,Y+"input-$1")]})),ve(ye(e,{props:[t]})),te(e,{props:de(r,n)})}return""})}}function $e(e){return function(e){return be="",e}(Me("",null,null,null,[""],e=function(e){return pe=ge=1,he=ce(be=e),fe=0,[]}(e),0,[0],e))}function Me(e,t,r,n,i,s,o,a,c){for(var l=0,u=0,d=o,p=0,g=0,h=0,f=1,m=1,b=1,x=0,y="",v=i,w=s,k=n,S=y;m;)switch(h=x,x=ke()){case 40:if(108!=h&&58==oe(S,d-1)){-1!=se(S+=ie(_e(x),"&","&\f"),"&\f",Q(l?a[l-1]:0))&&(b=-1);break}case 34:case 39:case 91:S+=_e(x);break;case 9:case 10:case 13:case 32:S+=je(h);break;case 92:S+=Ie(Ee()-1,7);continue;case 47:switch(Se()){case 42:case 47:ue(ze(De(ke(),Ee()),t,r,c),c);break;default:S+="/"}break;case 123*f:a[l++]=ce(S)*b;case 125*f:case 59:case 0:switch(x){case 0:case 125:m=0;case 59+u:-1==b&&(S=ie(S,/\f/g,"")),g>0&&ce(S)-d&&ue(g>32?Be(S+";",n,r,d-1,c):Be(ie(S," ","")+";",n,r,d-2,c),c);break;case 59:S+=";";default:if(ue(k=Le(S,t,r,l,u,i,a,y,v=[],w=[],d,s),s),123===x)if(0===u)Me(S,t,k,k,v,s,d,a,w);else switch(99===p&&110===oe(S,3)?100:p){case 100:case 108:case 109:case 115:Me(e,k,k,n&&ue(Le(e,k,k,0,0,i,a,y,i,v=[],d,w),w),i,w,d,a,n?v:w);break;default:Me(S,k,k,k,[""],w,0,a,w)}}l=u=g=0,f=b=1,y=S="",d=o;break;case 58:d=1+ce(S),g=h;default:if(f<1)if(123==x)--f;else if(125==x&&0==f++&&125==we())continue;switch(S+=ee(x),x*f){case 38:b=u>0?1:(S+="\f",-1);break;case 44:a[l++]=(ce(S)-1)*b,b=1;break;case 64:45===Se()&&(S+=_e(ke())),p=Se(),u=d=ce(y=S+=Re(Ee())),x++;break;case 45:45===h&&2==ce(S)&&(f=0)}}return s}function Le(e,t,r,n,i,s,o,a,c,l,u,d){for(var p=i-1,g=0===i?s:[""],h=le(g),f=0,m=0,b=0;f<n;++f)for(var x=0,y=ae(e,p+1,p=Q(m=o[f])),v=e;x<h;++x)(v=re(m>0?g[x]+" "+y:ie(y,/&\f/g,g[x])))&&(c[b++]=v);return xe(e,t,r,0===i?K:a,c,l,u,d)}function ze(e,t,r,n){return xe(e,t,r,X,ee(me),ae(e,2,-2),0,n)}function Be(e,t,r,n,i){return xe(e,t,r,J,ae(e,0,n),ae(e,n+1,-1),n,i)}var Ge={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},He="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",qe="active",Ue="data-styled-version",Ye="6.1.19",We="/*!sc*/\n",Ve="undefined"!=typeof window&&"undefined"!=typeof document,Xe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),Ke=(new Set,Object.freeze([])),Je=Object.freeze({});var Ze=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,et=/(^-|-$)/g;function tt(e){return e.replace(Qe,"-").replace(et,"")}var rt=/(a)(d)/gi,nt=function(e){return String.fromCharCode(e+(e>25?39:97))};function it(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=nt(t%52)+r;return(nt(t%52)+r).replace(rt,"$1-$2")}var st,ot=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},at=function(e){return ot(5381,e)};function ct(e){return"string"==typeof e&&!0}var lt="function"==typeof Symbol&&Symbol.for,ut=lt?Symbol.for("react.memo"):60115,dt=lt?Symbol.for("react.forward_ref"):60112,pt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ht={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ft=((st={})[dt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},st[ut]=ht,st);function mt(e){return("type"in(t=e)&&t.type.$$typeof)===ut?ht:"$$typeof"in e?ft[e.$$typeof]:pt;var t}var bt=Object.defineProperty,xt=Object.getOwnPropertyNames,yt=Object.getOwnPropertySymbols,vt=Object.getOwnPropertyDescriptor,wt=Object.getPrototypeOf,kt=Object.prototype;function St(e,t,r){if("string"!=typeof t){if(kt){var n=wt(t);n&&n!==kt&&St(e,n,r)}var i=xt(t);yt&&(i=i.concat(yt(t)));for(var s=mt(e),o=mt(t),a=0;a<i.length;++a){var c=i[a];if(!(c in gt||r&&r[c]||o&&c in o||s&&c in s)){var l=vt(t,c);try{bt(e,c,l)}catch(e){}}}}return e}function Et(e){return"function"==typeof e}function Ct(e){return"object"==typeof e&&"styledComponentId"in e}function At(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function _t(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function jt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function It(e,t,r){if(void 0===r&&(r=!1),!r&&!jt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=It(e[n],t[n]);else if(jt(t))for(var n in t)e[n]=It(e[n],t[n]);return e}function Nt(e,t){Object.defineProperty(e,"toString",{value:t})}function Dt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Rt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw Dt(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=n;s<i;s++)this.groupSizes[s]=0}for(var o=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,s=n;s<i;s++)t+="".concat(this.tag.getRule(s)).concat(We);return t},e}(),Ot=new Map,Pt=new Map,Tt=1,Ft=function(e){if(Ot.has(e))return Ot.get(e);for(;Pt.has(Tt);)Tt++;var t=Tt++;return Ot.set(e,t),Pt.set(t,e),t},$t=function(e,t){Tt=t+1,Ot.set(e,t),Pt.set(t,e)},Mt="style[".concat(He,"][").concat(Ue,'="').concat(Ye,'"]'),Lt=new RegExp("^".concat(He,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zt=function(e,t,r){for(var n,i=r.split(","),s=0,o=i.length;s<o;s++)(n=i[s])&&e.registerName(t,n)},Bt=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(We),i=[],s=0,o=n.length;s<o;s++){var a=n[s].trim();if(a){var c=a.match(Lt);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&($t(u,l),zt(e,u,c[3]),e.getTag().insertRules(l,i)),i.length=0}else i.push(a)}}},Gt=function(e){for(var t=document.querySelectorAll(Mt),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(He)!==qe&&(Bt(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ht(){return r.nc}var qt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(He,"]")));return t[t.length-1]}(r),s=void 0!==i?i.nextSibling:null;n.setAttribute(He,qe),n.setAttribute(Ue,Ye);var o=Ht();return o&&n.setAttribute("nonce",o),r.insertBefore(n,s),n},Ut=function(){function e(e){this.element=qt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}throw Dt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Yt=function(){function e(e){this.element=qt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Wt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Vt=Ve,Xt={isServer:!Ve,useCSSOMInjection:!Xe},Kt=function(){function e(e,t,r){void 0===e&&(e=Je),void 0===t&&(t={});var n=this;this.options=G(G({},Xt),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ve&&Vt&&(Vt=!1,Gt(this)),Nt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=function(r){var i=function(e){return Pt.get(e)}(r);if(void 0===i)return"continue";var s=e.names.get(i),o=t.getGroup(r);if(void 0===s||!s.size||0===o.length)return"continue";var a="".concat(He,".g").concat(r,'[id="').concat(i,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),n+="".concat(o).concat(a,'{content:"').concat(c,'"}').concat(We)},s=0;s<r;s++)i(s);return n}(n)})}return e.registerId=function(e){return Ft(e)},e.prototype.rehydrate=function(){!this.server&&Ve&&Gt(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(G(G({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new Wt(r):t?new Ut(r):new Yt(r)}(this.options),new Rt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Ft(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Ft(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Ft(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Jt=/&/g,Zt=/^\s*\/\/.*$/gm;function Qt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Qt(e.children,t)),e})}function er(e){var t,r,n,i=void 0===e?Je:e,s=i.options,o=void 0===s?Je:s,a=i.plugins,c=void 0===a?Ke:a,l=function(e,n,i){return i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===K&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Jt,r).replace(n,l))}),o.prefix&&u.push(Fe),u.push(Pe);var d=function(e,i,s,a){void 0===i&&(i=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,r=i,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(Zt,""),l=$e(s||i?"".concat(s," ").concat(i," { ").concat(c," }"):c);o.namespace&&(l=Qt(l,o.namespace));var d,p,g,h=[];return Oe(l,(d=u.concat((g=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&g(e)})),p=le(d),function(e,t,r,n){for(var i="",s=0;s<p;s++)i+=d[s](e,t,r,n)||"";return i})),h};return d.hash=c.length?c.reduce(function(e,t){return t.name||Dt(15),ot(e,t.name)},5381).toString():"",d}var tr=new Kt,rr=er(),nr=a().createContext({shouldForwardProp:void 0,styleSheet:tr,stylis:rr}),ir=(nr.Consumer,a().createContext(void 0));function sr(){return(0,o.useContext)(nr)}function or(e){var t=(0,o.useState)(e.stylisPlugins),r=t[0],n=t[1],i=sr().styleSheet,s=(0,o.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),c=(0,o.useMemo)(function(){return er({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,o.useEffect)(function(){U()(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,o.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:s,stylis:c}},[e.shouldForwardProp,s,c]);return a().createElement(nr.Provider,{value:l},a().createElement(ir.Provider,{value:c},e.children))}var ar=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=rr);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Nt(this,function(){throw Dt(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=rr),this.name+e.hash},e}(),cr=function(e){return e>="A"&&e<="Z"};function lr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;cr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var ur=function(e){return null==e||!1===e||""===e},dr=function(e){var t,r,n=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!ur(s)&&(Array.isArray(s)&&s.isCss||Et(s)?n.push("".concat(lr(i),":"),s,";"):jt(s)?n.push.apply(n,H(H(["".concat(i," {")],dr(s),!1),["}"],!1)):n.push("".concat(lr(i),": ").concat((t=i,null==(r=s)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in Ge||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function pr(e,t,r,n){return ur(e)?[]:Ct(e)?[".".concat(e.styledComponentId)]:Et(e)?!Et(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:pr(e(t),t,r,n):e instanceof ar?r?(e.inject(r,n),[e.getName(n)]):[e]:jt(e)?dr(e):Array.isArray(e)?Array.prototype.concat.apply(Ke,e.map(function(e){return pr(e,t,r,n)})):[e.toString()];var i}function gr(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Et(r)&&!Ct(r))return!1}return!0}var hr=at(Ye),fr=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&gr(e),this.componentId=t,this.baseHash=ot(hr,t),this.baseStyle=r,Kt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=At(n,this.staticRulesId);else{var i=_t(pr(this.rules,e,t,r)),s=it(ot(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,s)){var o=r(i,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,o)}n=At(n,s),this.staticRulesId=s}else{for(var a=ot(this.baseHash,r.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u;else if(u){var d=_t(pr(u,e,t,r));a=ot(a,d+l),c+=d}}if(c){var p=it(a>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=At(n,p)}}return n},e}(),mr=a().createContext(void 0);mr.Consumer;var br={};function xr(e,t,r){var n=Ct(e),i=e,s=!ct(e),c=t.attrs,l=void 0===c?Ke:c,u=t.componentId,d=void 0===u?function(e,t){var r="string"!=typeof e?"sc":tt(e);br[r]=(br[r]||0)+1;var n="".concat(r,"-").concat(function(e){return it(at(e)>>>0)}(Ye+r+br[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):u,p=t.displayName,g=void 0===p?function(e){return ct(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e):p,h=t.displayName&&t.componentId?"".concat(tt(t.displayName),"-").concat(t.componentId):t.componentId||d,f=n&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(n&&i.shouldForwardProp){var b=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;m=function(e,t){return b(e,t)&&x(e,t)}}else m=b}var y=new fr(r,h,n?i.componentStyle:void 0);function v(e,t){return function(e,t,r){var n=e.attrs,i=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.styledComponentId,u=e.target,d=a().useContext(mr),p=sr(),g=e.shouldForwardProp||p.shouldForwardProp,h=function(e,t,r){return void 0===r&&(r=Je),e.theme!==r.theme&&e.theme||t||r.theme}(t,d,s)||Je,f=function(e,t,r){for(var n,i=G(G({},t),{className:void 0,theme:r}),s=0;s<e.length;s+=1){var o=Et(n=e[s])?n(i):n;for(var a in o)i[a]="className"===a?At(i[a],o[a]):"style"===a?G(G({},i[a]),o[a]):o[a]}return t.className&&(i.className=At(i.className,t.className)),i}(n,t,h),m=f.as||u,b={};for(var x in f)void 0===f[x]||"$"===x[0]||"as"===x||"theme"===x&&f.theme===h||("forwardedAs"===x?b.as=f.forwardedAs:g&&!g(x,m)||(b[x]=f[x]));var y=function(e,t){var r=sr();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(i,f),v=At(c,l);return y&&(v+=" "+y),f.className&&(v+=" "+f.className),b[ct(m)&&!Ze.has(m)?"class":"className"]=v,r&&(b.ref=r),(0,o.createElement)(m,b)}(w,e,t)}v.displayName=g;var w=a().forwardRef(v);return w.attrs=f,w.componentStyle=y,w.displayName=g,w.shouldForwardProp=m,w.foldedComponentIds=n?At(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=n?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=n?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,i=t;n<i.length;n++)It(e,i[n],!0);return e}({},i.defaultProps,e):e}}),Nt(w,function(){return".".concat(w.styledComponentId)}),s&&St(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function yr(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}new Set;var vr=function(e){return Object.assign(e,{isCss:!0})};function wr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Et(e)||jt(e))return vr(pr(yr(Ke,H([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?pr(n):vr(pr(yr(n,t)))}function kr(e,t,r){if(void 0===r&&(r=Je),!t)throw Dt(1,t);var n=function(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,wr.apply(void 0,H([n],i,!1)))};return n.attrs=function(n){return kr(e,t,G(G({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return kr(e,t,G(G({},r),n))},n}var Sr=function(e){return kr(xr,e)},Er=Sr;Ze.forEach(function(e){Er[e]=Sr(e)}),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=gr(e),Kt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var i=n(_t(pr(this.rules,t,r,n)),""),s=this.componentId+e;r.insertRules(s,s,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&Kt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=Ht(),n=_t([r&&'nonce="'.concat(r,'"'),"".concat(He,'="true"'),"".concat(Ue,'="').concat(Ye,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Dt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Dt(2);var r=e.instance.toString();if(!r)return[];var n=((t={})[He]="",t[Ue]=Ye,t.dangerouslySetInnerHTML={__html:r},t),i=Ht();return i&&(n.nonce=i),[a().createElement("style",G({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Kt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Dt(2);return a().createElement(or,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Dt(3)}}(),"__sc-".concat(He,"__"),Er.div`
    margin-bottom: 16px;

    .directorist-gutenberg-control-label {
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 13px;
        color: #1e1e1e;
    }

    .directorist-gutenberg-icon-picker-preview {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .directorist-gutenberg-icon-picker-preview-content {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        background: #f0f0f1;
        border-radius: 4px;
    }
    .directorist-gutenberg-icon-picker-preview-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        svg {
            width: 100%;
            height: 100%;
            fill: currentColor;
        }
    }

    .directorist-gutenberg-icon-picker-preview-name {
        flex: 1;
        font-size: 13px;
        color: #1e1e1e;
    }

    .directorist-gutenberg-icon-picker-preview-empty {
        padding: 12px;
        color: #757575;
        font-size: 13px;
        background: #f0f0f1;
        border-radius: 4px;
        display: flex;
        gap: 5px;
        align-items: center;
        span{
            display: block;
        }
        .directorist-gutenberg-icon-picker-change{
            margin-left: auto;
        }
    }
    .directorist-gutenberg-icon-picker-reset{
        cursor: pointer;
        svg{
            width: 12px;
            height: 12px;
            fill: var(--directorist-color-dark);
            transition: fill 0.3s ease;
        }
        &:hover{
            svg{
                fill: var(--directorist-color-danger);
            }
        }
    }
    .directorist-gutenberg-icon-picker-change{
        cursor: pointer;
        padding: 3px 5px;
        font-size: 12px;
        background: #fefefe;
        border: 1px solid var(--wp-admin-theme-color, #3858e9);
        color: var(--wp-admin-theme-color, #3858e9);
    }
`;const Cr=Er.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100000;

    .directorist-gutenberg-ai-assistant-chat-panel-content {
        width: 420px;
        background: #fff;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        animation: slideUp 0.3s ease-out;
        border-radius: 20px;
        border: 1px solid #E5E5E5;
        background: #FFF;
        box-shadow: 0 8px 16px 0 rgba(16, 24, 40, 0.10), 0 6px 8px 2px rgba(16, 24, 40, 0.04);
    }
    .directorist-gutenberg-ai-assistant-chat-content {
        max-height: 500px;
        overflow-y: auto;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes zoomInOut {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    .directorist-gutenberg-ai-assistant-chat-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid #E0E0E0;
        cursor: move;
        user-select: none;
        -webkit-user-select: none;
    }

    .directorist-gutenberg-ai-assistant-chat-header-left {
        display: flex;
        align-items: center;
        gap: 12px;
        pointer-events: auto;

        button {
            pointer-events: auto;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-close,
    .directorist-gutenberg-ai-assistant-chat-minimize {
        background: none;
        border: none;
        padding: 4px;
        cursor: pointer;
        color: #757575;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: auto;
        width: 24px;
        height: 24px;

        &:hover {
            color: #1E1E1E;
            background: #f0f0f0;
            border-radius: 4px;
        }

        svg {
            width: 16px;
            height: 16px;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-title {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 600;
        color: #1E1E1E;
        line-height: 1.2;
    }

    .directorist-gutenberg-ai-assistant-chat-greeting {
        padding: 20px;
    }

    .directorist-gutenberg-ai-assistant-chat-greeting-icon {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #F0F3FF;
        border-radius: 8px;
        color:#3E62F5;
        margin-bottom: 16px;
        svg {
            width: 24px;
            height: 24px;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-greeting-text {
        flex: 1;
    }

    .directorist-gutenberg-ai-assistant-chat-greeting-title {
        margin: 0 0 8px 0;
        padding: 0;
        font-size: 16px;
        font-weight: 600;
        color: #141921;
        line-height: 1.2;
        letter-spacing: -0.32px;
    }

    .directorist-gutenberg-ai-assistant-chat-greeting-description {
        margin: 0;
        padding: 0;
        color: #747C89;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.07px;
    }

    .directorist-gutenberg-ai-assistant-chat-conversation-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }

    .directorist-gutenberg-ai-assistant-chat-conversation-area-item {
        display: flex;
        gap: 12px;
        align-items: flex-start;
    }
    .directorist-gutenberg-ai-assistant-chat-user-message{
        margin-left: auto;
        .directorist-gutenberg-ai-assistant-chat-text-content{
            padding: 10px 15px;
            background: #F5F6F7;
            border-radius: 8px;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-icon {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #F0F3FF;
        border-radius: 8px;
        color: #3E62F5;

        svg {
            width: 20px;
            height: 20px;
            color: #3E62F5;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .directorist-gutenberg-ai-assistant-chat-text-role {
        font-size: 14px;
        font-weight: 500;
        color: #141921;
        line-height: 1.2;
    }

    .directorist-gutenberg-ai-assistant-chat-text-content {
        font-size: 14px;
        font-weight: 400;
        color: #141921;
        line-height: 1.6;
        word-wrap: break-word;
        white-space: pre-wrap;
    }

    .directorist-gutenberg-ai-assistant-chat-error-message {
        .directorist-gutenberg-ai-assistant-chat-text-content {
            color: #D92D20;
        }

        .directorist-gutenberg-ai-assistant-chat-icon {
            background: #FEE4E2;
            color: #D92D20;

            svg {
                color: #D92D20;
            }
        }
    }

    .directorist-gutenberg-ai-assistant-chat-error-actions {
        margin-top: 8px;
        display: flex;
        gap: 8px;

        button {
            font-size: 12px;
            height: 28px;
            line-height: 26px;
            padding: 0 12px;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-suggestions {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 8px;
        padding: 16px 20px;
        max-height: 280px;
        overflow-y: auto;
        align-items: flex-start;
    }

    .directorist-gutenberg-ai-assistant-chat-suggestion-button {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        padding: 6px 12px;
        background: #F0F3FF;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        text-align: left;
        transition: all 0.2s ease;
        height: auto;
        border-radius: 25px;
        width: auto;

        &:hover {
            background: #E0E8FF;
        }

        &:focus {
            box-shadow: 0 0 0 2px rgba(62, 98, 245, 0.2);
        }
    }

    .directorist-gutenberg-ai-assistant-chat-suggestion-icon {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3E62F5;
        svg{
            fill: none;
            width: 16px;
            height: 16px;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-suggestion-label {
        flex: 1;
        font-size: 14px;
        font-weight: 400;
        color: #1E1E1E;
        line-height: 1.4;
    }

    .directorist-gutenberg-ai-assistant-chat-input-wrapper {
        margin: 16px 20px;
        position: relative;
        border: 1px solid #E5E7EB;
        box-sizing: border-box;
        border-radius: 8px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10);
    }

    .directorist-gutenberg-ai-assistant-chat-input {
        width: 100%;
        padding-bottom: 50px;
        border-radius: 8px;

        textarea {
            width: 100%;
            padding: 12px 16px;
            font-size: 14px;
            font-family: inherit;
            resize: none;
            min-height: 120px;
            line-height: 1.5;
            border: none;
            outline: none;
            box-shadow: none;
            border-radius: 8px;
            &:focus {
                outline: none;
            }

            &::placeholder {
                color: #9E9E9E;
            }
        }
    }

    .directorist-gutenberg-ai-assistant-chat-input-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

    .directorist-gutenberg-ai-assistant-chat-attach,
    .directorist-gutenberg-ai-assistant-chat-send {
        padding: 8px;
        cursor: pointer;
        color: #757575;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: auto;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        transition: all 0.2s ease;
        border: 1px solid #E5E7EB;
        background: #fff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

        &:hover {
            background: #f0f0f0;
            color: #1E1E1E;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;

            &:hover {
                background: none;
            }
        }

        svg {
            width: 16px;
            height: 16px;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-send {
        background: #3E62F5;
        color: #fff;
        border-color: #3E62F5;

        &:hover:not(:disabled) {
            background: #2C4FD4;
            color: #fff;
            border-color: #2C4FD4;
        }

        &:disabled {
            background: #E0E0E0;
            color: #9E9E9E;
            border-color: #E0E0E0;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px 20px;
        background: #FAFAFA;
    }

    .directorist-gutenberg-ai-assistant-chat-footer-text {
        font-size: 12px;
        font-weight: 400;
        color: #757575;
    }

    .directorist-gutenberg-ai-assistant-chat-footer-credits {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        font-weight: 500;
        color: #757575;

        svg {
            width: 16px;
            height: 16px;
            color: #757575;
        }
    }

    .directorist-gutenberg-ai-assistant-chat-loader,
    .directorist-gutenberg-ai-assistant-chat-loader-more {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
        color: #3E62F5;
    }

    .directorist-gutenberg-ai-assistant-chat-loader-more {
        padding: 20px 0;
    }

    .directorist-gutenberg-ai-assistant-user-avatar {
        width: 24px;
        height: 24px;
        background: #3E62F5;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
    }

    .directorist-gutenberg-ai-assistant-typing-indicator {
        display: flex;
        gap: 4px;
        padding: 8px 0;

        span {
            width: 6px;
            height: 6px;
            background: #3E62F5;
            border-radius: 50%;
            animation: typing 1.4s infinite ease-in-out both;
            opacity: 0.6;

            &:nth-child(1) {
                animation-delay: -0.32s;
            }

            &:nth-child(2) {
                animation-delay: -0.16s;
            }
        }
    }

    @keyframes typing {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }

    .directorist-gutenberg-ai-assistant-chat-retry {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        padding: 0 0 0 44px;

        p {
            margin: 0;
            color: #D92D20;
            font-size: 13px;
        }

        button {
            font-size: 12px;
            height: 28px;
            line-height: 26px;
            padding: 0 12px;
        }
    }
`,Ar=Er.div`
    position: fixed !important;
    bottom: 24px;
    right: 24px;
    z-index: 100001;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #3E62F5;
    background: #3E62F5;
    width: 48px;
    height: 48px;
    box-shadow: 0 4px 8px 0 rgba(16, 24, 40, 0.08);
    animation: zoomInOut 1.5s ease-in-out infinite;
    padding: 0;
    min-width: 48px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;

    svg {
        width: 24px;
        height: 24px;
        color: #fff;
        pointer-events: none;
    }

    &:hover {
        animation-play-state: paused;
    }

    &:active {
        cursor: grabbing;
    }
    button{
        cursor: move;
    }
`;function _r({defaultX:e,defaultY:t,elementWidth:r,elementHeight:i,spacing:s=24}){const[o,a]=(0,n.useState)({x:null,y:null}),[c,l]=(0,n.useState)(!1),[u,d]=(0,n.useState)({x:0,y:0}),p=(0,n.useRef)(null);return(0,n.useEffect)(()=>{null===o.x&&null===o.y&&null!==e&&null!==t&&a({x:e,y:t})},[e,t]),(0,n.useEffect)(()=>{if(!c)return;const e=e=>{const t=e.clientX-u.x,n=e.clientY-u.y,o=window.innerWidth||document.documentElement.clientWidth,c=window.innerHeight||document.documentElement.clientHeight,l=document.getElementById("wpadminbar")?.offsetHeight||0,d=Math.max(s,l+s),p=o-r-s,g=c-i-s,h=Math.max(s,Math.min(t,p)),f=Math.max(d,Math.min(n,g));a({x:h,y:f})},t=()=>{l(!1)};return document.addEventListener("mousemove",e),document.addEventListener("mouseup",t),()=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)}},[c,u,r,i,s]),{position:o,setPosition:a,isDragging:c,elementRef:p,handleMouseDown:e=>{if(0!==e.button)return;l(!0);const t=p.current?.getBoundingClientRect();t&&d({x:e.clientX-t.left,y:e.clientY-t.top}),e.preventDefault()},resetPosition:()=>{a({x:null,y:null})}}}const jr=window.wp.apiFetch;var Ir=r.n(jr);const Nr=window.wp.blocks;function Dr(e){return e.map(e=>({name:e.name,attributes:e.attributes||{},innerBlocks:Dr(e.innerBlocks||[])}))}function Rr(e){return e&&Array.isArray(e)?e.map(e=>{const{name:t,attributes:r={},innerBlocks:n=[]}=e,i=Rr(n);return(0,Nr.createBlock)(t,r,i)}):[]}const Or=[{id:"hover-shadow",label:(0,s.__)("Add subtle hover shadow","directorist-gutenberg"),icon:"cube"},{id:"cards-per-row",label:(0,s.__)("Make cards 3 per row with rounded corners","directorist-gutenberg"),icon:"grid"},{id:"title-on-hover",label:(0,s.__)("Show listing titles on hover","directorist-gutenberg"),icon:"document"},{id:"price-above-rating",label:(0,s.__)("Move price above rating","directorist-gutenberg"),icon:"star"}],Pr={"listings-archive":[{id:"add-search-form",label:(0,s.__)("Add search form","directorist-gutenberg"),icon:"star"},{id:"add-listing-filters",label:(0,s.__)("Add listing filters","directorist-gutenberg"),icon:"star"},{id:"make-3-columns-per-row",label:(0,s.__)("Make 3 columns per row","directorist-gutenberg"),icon:"star"}],"listings-archive-grid-view":Or,"listings-archive-list-view":Or},Tr={checkbox:"listing-card-custom-text",date:"listing-card-custom-date",number:"listing-card-custom-number",radio:"listing-card-custom-radio",select:"listing-card-custom-select",text:"listing-card-custom-text",textarea:"listing-card-custom-textarea",time:"listing-card-custom-time",url:"listing-card-custom-url"},Fr=["listings-archive","listings-archive-grid-view","listings-archive-list-view"],$r=r.p+"icons/times.svg",Mr=r.p+"icons/minus.svg";function Lr({onClose:e,onMouseDown:t,isDragging:r}){return(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-header",onMouseDown:t,style:{cursor:r?"grabbing":"move"},children:[(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-header-left",children:[(0,T.jsx)(i.Button,{className:"directorist-gutenberg-ai-assistant-chat-close",onClick:e,"aria-label":(0,s.__)("Close","directorist-gutenberg"),children:(0,T.jsx)(_,{width:16,height:16,src:$r})}),(0,T.jsx)("h3",{className:"directorist-gutenberg-ai-assistant-chat-title",children:(0,s.__)("AI Assistant","directorist-gutenberg")})]}),(0,T.jsx)(i.Button,{className:"directorist-gutenberg-ai-assistant-chat-minimize",onClick:e,"aria-label":(0,s.__)("Minimize","directorist-gutenberg"),children:(0,T.jsx)(_,{width:16,height:16,src:Mr})})]})}const zr=r.p+"icons/ai-feel.svg",Br=r.p+"icons/cube.svg",Gr=r.p+"icons/grid-bar.svg",Hr=r.p+"icons/document-text.svg",qr=r.p+"icons/star.svg";function Ur({icon:e}){const t={cube:Br,grid:Gr,document:Hr,star:qr}[e]||qr;return(0,T.jsx)("span",{className:"directorist-gutenberg-ai-assistant-chat-suggestion-icon",children:(0,T.jsx)(_,{width:20,height:20,src:t})})}function Yr({suggestedActions:e,onSuggestionClick:t}){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-greeting",children:[(0,T.jsx)("div",{className:"directorist-gutenberg-ai-assistant-chat-greeting-icon",children:(0,T.jsx)(_,{width:48,height:48,src:zr})}),(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-greeting-text",children:[(0,T.jsx)("h4",{className:"directorist-gutenberg-ai-assistant-chat-greeting-title",children:(0,s.__)("Hi, I'm your AI Design Assistant","directorist-gutenberg")}),(0,T.jsx)("p",{className:"directorist-gutenberg-ai-assistant-chat-greeting-description",children:(0,s.__)("Tell me what you want your All Listings to look. You can attach a screenshot for vives.","directorist-gutenberg")})]})]}),(0,T.jsx)("div",{className:"directorist-gutenberg-ai-assistant-chat-suggestions",children:e.map(e=>(0,T.jsxs)("span",{className:"directorist-gutenberg-ai-assistant-chat-suggestion-button",onClick:()=>t(e.label),children:[(0,T.jsx)(Ur,{icon:e.icon}),(0,T.jsx)("span",{className:"directorist-gutenberg-ai-assistant-chat-suggestion-label",children:e.label})]},e.id))})]})}function Wr({messages:e,isSending:t,isGenerating:r}){return(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-conversation-area",children:[e.map(e=>(0,T.jsxs)("div",{className:`directorist-gutenberg-ai-assistant-chat-conversation-area-item directorist-gutenberg-ai-assistant-chat-${e.role}-message ${e.isError?"directorist-gutenberg-ai-assistant-chat-error-message":""}`,children:["assistant"===e.role&&(0,T.jsx)("div",{className:"directorist-gutenberg-ai-assistant-chat-icon",children:(0,T.jsx)(_,{width:20,height:20,src:zr})}),(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-text",children:[(0,T.jsx)("span",{className:"directorist-gutenberg-ai-assistant-chat-text-role",children:"assistant"===e.role?"Ai Assistant":""}),(0,T.jsx)("span",{className:"directorist-gutenberg-ai-assistant-chat-text-content",children:e.isError?(0,s.__)("I could not process your request, please try again.","directorist-gutenberg"):e.message}),e.isError&&e.retryAction&&(0,T.jsx)("div",{className:"directorist-gutenberg-ai-assistant-chat-error-actions",children:(0,T.jsx)(i.Button,{variant:"secondary",onClick:e.retryAction,size:"small",children:(0,s.__)("Try Again","directorist-gutenberg")})})]})]},e.id)),(t||r)&&(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-conversation-area-item",children:[(0,T.jsx)("div",{className:"directorist-gutenberg-ai-assistant-chat-icon",children:(0,T.jsx)(_,{width:20,height:20,src:zr})}),(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-text",children:[(0,T.jsx)("span",{className:"directorist-gutenberg-ai-assistant-chat-text-role",children:"Ai Assistant"}),(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-typing-indicator",children:[(0,T.jsx)("span",{}),(0,T.jsx)("span",{}),(0,T.jsx)("span",{})]})]})]})]})}function Vr({isLoading:e,messages:t,isSending:r,isGenerating:n,suggestedActions:s,onSuggestionClick:o,chatContentRef:a,onScroll:c,isFetchingMore:l}){return e?(0,T.jsx)("div",{className:"directorist-gutenberg-ai-assistant-chat-loader",children:(0,T.jsx)(i.Spinner,{})}):(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-content",onScroll:c,ref:a,children:[l&&(0,T.jsx)("div",{className:"directorist-gutenberg-ai-assistant-chat-loader-more",children:(0,T.jsx)(i.Spinner,{})}),0===t.length?(0,T.jsx)(Yr,{suggestedActions:s,onSuggestionClick:o}):(0,T.jsx)(Wr,{messages:t,isSending:r,isGenerating:n})]})}const Xr=r.p+"icons/arrow-right.svg";function Kr({inputValue:e,setInputValue:t,onSend:r,isSending:n,isGenerating:o}){return(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-input-wrapper",children:[(0,T.jsx)(i.TextareaControl,{className:"directorist-gutenberg-ai-assistant-chat-input",value:e,onChange:t,placeholder:(0,s.__)("Ask for changes","directorist-gutenberg"),rows:3,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),r())}}),(0,T.jsx)("div",{className:"directorist-gutenberg-ai-assistant-chat-input-actions",children:(0,T.jsx)(i.Button,{className:"directorist-gutenberg-ai-assistant-chat-send","aria-label":(0,s.__)("Send","directorist-gutenberg"),onClick:r,disabled:!e.trim()||n||o,children:n||o?(0,T.jsx)(i.Spinner,{}):(0,T.jsx)(_,{width:20,height:20,src:Xr})})})]})}function Jr(){var e,t;const r=N(),o=parseInt(r?.directory_type_id)||0,a=null!==(e=r?.template_type)&&void 0!==e?e:"",c=null!==(t=r?.wax_intelligent?.api_base_url)&&void 0!==t?t:"",{getCustomFields:l}=(()=>{const{directory_type_id:e}=N(),t=(()=>{const e=N();return e&&e.submission_form_fields&&e.submission_form_fields.fields?e.submission_form_fields.fields:{}})();function r(e,r,n){for(const i of Object.values(t))if(i.widget_group===e&&i.widget_name===r&&(void 0===n||i.field_key===n))return i;return null}return{directoryTypeId:e?parseInt(e):null,fields:t,getField:r,getCustomFields:function(){const e=[];for(const r of Object.values(t))"custom"===r.widget_group&&e.push(r);return e},doesPresetFieldExist:function(e){return null!==r("preset",e)},doesCustomFieldExist:function(e,t){return null!==r("custom",e,t)},getFieldsOptions:function(e,r){const n=[{value:"",label:(0,s.__)("Select...","directorist-gutenberg")}];for(const i of Object.values(t))i.widget_group===e&&i.widget_name===r&&n.push({value:i.field_key,label:i.label});return n}}})(),u=l(),{resetBlocks:d}=(0,L.useDispatch)("core/block-editor"),{getBlocks:p}=(0,L.useSelect)(e=>e("core/block-editor")),g=(0,L.useSelect)(e=>e("core/editor").getCurrentPostId(),[]);if(!Fr.includes(a))return null;const h=u.filter(e=>Tr.hasOwnProperty(e.type)).map(e=>({block_name:Tr[e.type],meta_key:e.field_key,label:e.label})),[f,m]=(0,n.useState)(!1),[b,x]=(0,n.useState)(""),[y,v]=(0,n.useState)(!1),[w,k]=(0,n.useState)(!1),S="undefined"!=typeof window?window.innerWidth-48-24:0,E="undefined"!=typeof window?window.innerHeight-48-24:0,{position:C,isDragging:A,elementRef:j,handleMouseDown:I}=_r({defaultX:S,defaultY:E,elementWidth:48,elementHeight:48}),D=(0,n.useRef)(null),R=(0,n.useRef)(!1),{position:O,setPosition:P,isDragging:F,elementRef:$,handleMouseDown:M,resetPosition:G}=_r({defaultX:null,defaultY:null,elementWidth:420,elementHeight:500}),{messages:H,addMessage:q,removeMessage:U,isLoading:Y,isFetchingMore:W,hasMore:V,chatContentRef:X,handleScroll:K,storeMessage:J,scrollToBottom:Z}=function(e,t){const[r,i]=(0,n.useState)([]),[s,o]=(0,n.useState)(!1),[a,c]=(0,n.useState)(1),[l,u]=(0,n.useState)(!0),[d,p]=(0,n.useState)(!1),g=(0,n.useRef)(null),h=(0,n.useRef)(0),f=()=>{g.current&&(g.current.scrollTop=g.current.scrollHeight)},m=async(t=1)=>{const r=1===t;r?o(!0):p(!0);try{const n=await Ir()({path:`/directorist-gutenberg/admin/templates/${e}/ai-chats?page=${t}&per_page=10`,method:"GET"});if(n&&n.items){const e=n.items.reverse();i(t=>r?e:[...e,...t]),u(10*t<n.total)}}catch(e){console.error("Error fetching messages:",e)}finally{if(r)o(!1),setTimeout(()=>f(),100);else if(p(!1),g.current){const e=g.current.scrollHeight-h.current;g.current.scrollTop=e}}};return(0,n.useEffect)(()=>{t&&e&&(i([]),c(1),u(!0),m(1))},[t,e]),(0,n.useEffect)(()=>{!t||d||s||setTimeout(()=>f(),100)},[r,t,d,s]),{messages:r,setMessages:i,addMessage:e=>{i(t=>[...t,e])},removeMessage:e=>{i(t=>t.filter(t=>t.id!==e))},isLoading:s,isFetchingMore:d,hasMore:l,chatContentRef:g,handleScroll:e=>{const t=g.current||e.target;if(t&&t.scrollTop<=5&&l&&!d&&!s){h.current=t.scrollHeight;const e=a+1;c(e),m(e)}},storeMessage:async(t,r)=>await Ir()({path:`/directorist-gutenberg/admin/templates/${e}/ai-chats`,method:"POST",data:{role:t,message:r}}),scrollToBottom:f}}(g,f),Q=function(e,t){return(0,n.useMemo)(()=>e?null===t.x||null===t.y?{right:"20px",bottom:"20px",left:"auto",top:"auto"}:{left:`${t.x}px`,top:`${t.y}px`,right:"auto",bottom:"auto"}:{},[e,t])}(f,O);(0,n.useEffect)(()=>{if(!A&&null!==D.current){C.x===D.current.x&&C.y===D.current.y||(R.current=!0);const e=setTimeout(()=>{D.current=null,R.current=!1},100);return()=>clearTimeout(e)}},[A,C]);const ee=e=>{A||F||R.current||(f&&G(),m(!f))};(0,n.useEffect)(()=>{const e=()=>{m(e=>!e)};return window.addEventListener("directorist-ai-assistant-toggle",e),()=>{window.removeEventListener("directorist-ai-assistant-toggle",e)}},[]),(0,n.useEffect)(()=>{f&&w&&setTimeout(()=>Z(),100)},[w,f]);const te=async e=>{k(!0);try{const t=function(e,t){const r=`${t}/directorist/template/gutenberg/generate`,n=`${r}/listings-archive-item`;return{"listings-archive":`${r}/listings-archive`,"listings-archive-grid-view":n,"listings-archive-list-view":n}[e]||r}(a,c),r=Dr(p()),n=function(e){return e.map(e=>({role:e.role,message:e.message}))}(H).slice(0,10),i=function({templateType:e,instruction:t,currentTemplate:r,directoryTypeId:n,templateId:i,history:s,availableCustomFields:o=[]}){const a={template_type:e,instruction:t,current_template:r,dynamic_identifiers:{directory_type_id:n,template_id:i},history:s};return["listings-archive-grid-view","listings-archive-list-view"].includes(e)&&(a.directory_type_id=n,a.available_custom_fields=o,a.view_type="listings-archive-grid-view"===e?"grid_view":"list_view"),a}({templateType:a,instruction:e,currentTemplate:JSON.stringify(r),directoryTypeId:o,templateId:g,history:n,availableCustomFields:h}),l=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok){const e=await l.text();throw new Error(e||(0,s.__)("API generation failed","directorist-gutenberg"))}const u=await l.json(),d=u?.template;let f=u?.message||(0,s.__)("Here is your updated design.","directorist-gutenberg");if(!d)return console.warn("No template content returned from the AI Assistant API."),void(f&&(await J("assistant",f),q({id:Date.now(),role:"assistant",message:f}),setTimeout(()=>Z(),100)));await J("assistant",f),q({id:Date.now(),role:"assistant",message:f}),setTimeout(()=>Z(),100),re(d)}catch(t){console.error("Error generating response:",t);const r=t.message||(0,s.__)("Something went wrong. Please try again.","directorist-gutenberg"),n=Date.now();q({id:n,role:"assistant",message:r,isError:!0,retryAction:()=>{U(n),te(e)}}),setTimeout(()=>Z(),100)}finally{k(!1)}},re=e=>{try{d(Rr(e))}catch(e){console.error("Unable to replace blocks with AI template",e)}},ne=async()=>{if(!b.trim())return;const e=b;x(""),v(!0);const t=Date.now();q({id:t,role:"user",message:e}),setTimeout(()=>Z(),50);try{await J("user",e),await te(e)}catch(r){console.error("Error sending message:",r),U(t);const n=r.message||(0,s.__)("Failed to send message. Please try again.","directorist-gutenberg"),i=Date.now();q({id:i,role:"assistant",message:n,isError:!0,retryAction:()=>{U(i),x(e),ne()}}),setTimeout(()=>Z(),100),x(e)}finally{v(!1)}},ie=Pr[a]||[],se=null!==C.x&&null!==C.y?{left:`${C.x}px`,top:`${C.y}px`,right:"auto",bottom:"auto"}:{};return(0,T.jsxs)(T.Fragment,{children:[!f&&(0,T.jsx)(Ar,{ref:j,style:se,children:(0,T.jsx)(i.Button,{className:"directorist-gutenberg-ai-assistant-chat-toggle",onClick:ee,onMouseDown:e=>{D.current={...C},R.current=!1,I(e)},"aria-label":(0,s.__)("Open AI Assistant","directorist-gutenberg"),children:(0,T.jsx)(_,{width:24,height:24,src:z})})}),f&&(0,T.jsx)(Cr,{ref:$,className:"directorist-gutenberg-ai-assistant-chat-panel",style:Q,children:(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-panel-content",children:[(0,T.jsx)(Lr,{onClose:ee,onMouseDown:e=>{const t=e.target,r=e.currentTarget;t.closest("button")||t.closest("textarea")||t.closest("input")||t.closest("a")||(t===r||r.contains(t))&&M(e)},isDragging:F}),(0,T.jsx)(Vr,{isLoading:Y,messages:H,isSending:y,isGenerating:w,suggestedActions:ie,onSuggestionClick:e=>{x(e)},chatContentRef:X,onScroll:K,isFetchingMore:W}),(0,T.jsx)(Kr,{inputValue:b,setInputValue:x,onSend:ne,isSending:y,isGenerating:w}),(0,T.jsxs)("div",{className:"directorist-gutenberg-ai-assistant-chat-footer",children:[(0,T.jsx)("span",{className:"directorist-gutenberg-ai-assistant-chat-footer-text",children:(0,s.__)("Generation:","directorist-gutenberg")}),(0,T.jsxs)("span",{className:"directorist-gutenberg-ai-assistant-chat-footer-credits",children:[(0,T.jsx)(_,{width:16,height:16,src:B}),(0,T.jsxs)("span",{children:["0 ",(0,s.__)("credits","directorist-gutenberg")]})]})]})]})})]})}t()(()=>{const e=()=>{let t=document.querySelector(".editor-header__settings")||document.querySelector(".edit-post-header__settings")||document.querySelector(".interface-complementary-area-header__actions")||document.querySelector('[class*="header"][class*="settings"]'),r=document.querySelector(".post-type-directorist_gbt");if(!t||!r)return void setTimeout(e,500);if(document.getElementById("directorist-toggle-views-container")&&document.getElementById("directorist-ai-assistant-chat-button-wrapper"))return;let i=document.createElement("div");i.id="directorist-toggle-views-container",t.insertBefore(i,t.firstChild);let s=document.createElement("div");s.id="directorist-ai-assistant-chat-button-wrapper",r.insertBefore(s,r.firstChild),n.createRoot?(0,n.createRoot)(i).render((0,T.jsxs)("div",{className:"directorist-gutenberg-toolbar-actions",children:[(0,T.jsx)(F,{})," ",(0,T.jsx)(M,{})]})):render((0,T.jsxs)("div",{className:"directorist-gutenberg-toolbar-actions",children:[(0,T.jsx)(F,{})," ",(0,T.jsx)(M,{})]}),i),n.createRoot?(0,n.createRoot)(s).render((0,T.jsx)(Jr,{})):render((0,T.jsx)(Jr,{}),s)};setTimeout(e,100)}),t()(()=>{const e=D("all_templates_url"),t=()=>{const t=document.querySelector(".edit-post-fullscreen-mode-close");t&&t.getAttribute("href")!==e&&t.setAttribute("href",e)};t();const r=new MutationObserver(()=>{t()}),n=document.querySelector(".interface-interface-skeleton")||document.body;n&&r.observe(n,{childList:!0,subtree:!0})});const Zr=window.wp.hooks,Qr=window.wp.blockEditor,en=window.wp.compose;function tn({label:e,color:t,defaultColor:r,onChange:n,isOpen:s,onToggle:o}){return(0,T.jsxs)("div",{className:"directorist-gutenberg-color-picker-container",children:[(0,T.jsx)("label",{className:"directorist-gutenberg-color-picker-label",children:e}),(0,T.jsxs)("div",{className:"directorist-gutenberg-color-picker-wrapper",children:[(0,T.jsx)(i.Button,{onClick:o,style:{backgroundColor:t||r}}),s&&(0,T.jsx)(i.Popover,{onClose:o,placement:"left-start",offset:20,children:(0,T.jsx)(i.ColorPicker,{color:t||r,onChangeComplete:e=>{n((e=>e.rgb?`rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`:e.hex||"")(e))},enableAlpha:!0})})]})]})}function rn({attributes:e,setAttributes:t,attrName:r="drop_shadow",label:o=(0,s.__)("Custom Drop Shadow","directorist-gutenberg"),initialOpen:a=!1}){const c=e[r]||"",[l,u]=(0,n.useState)(!1),d=(0,n.useMemo)(()=>function(e){if(!e||"string"!=typeof e)return{x:0,y:0,blur:0,spread:0,color:"rgba(0, 0, 0, 0.3)"};const t=e.trim().replace(/;\s*$/,"").split(/\s+/);return{x:parseInt(t[0]?.replace("px","")||"0",10),y:parseInt(t[1]?.replace("px","")||"0",10),blur:parseInt(t[2]?.replace("px","")||"0",10),spread:parseInt(t[3]?.replace("px","")||"0",10),color:t.slice(4).join(" ").replace(/;\s*$/,"")||"rgba(0, 0, 0, 0.3)"}}(c),[c]),p=(e,n)=>{const i=function({x:e,y:t,blur:r,spread:n,color:i}){return`${e}px ${t}px ${r}px ${n}px ${i}`}({...d,[e]:n});t({[r]:i})};return(0,T.jsxs)(i.PanelBody,{title:o,initialOpen:a,children:[(0,T.jsx)(tn,{label:(0,s.__)("Shadow Color","directorist-gutenberg"),color:d.color,onChange:e=>p("color",e),isOpen:l,onToggle:()=>u(!l)}),(0,T.jsx)(i.RangeControl,{label:(0,s.__)("Horizontal Offset (X)","directorist-gutenberg"),value:d.x,onChange:e=>p("x",e||0),min:-100,max:100}),(0,T.jsx)(i.RangeControl,{label:(0,s.__)("Vertical Offset (Y)","directorist-gutenberg"),value:d.y,onChange:e=>p("y",e||0),min:-100,max:100}),(0,T.jsx)(i.RangeControl,{label:(0,s.__)("Blur Radius","directorist-gutenberg"),value:d.blur,onChange:e=>p("blur",e||0),min:0,max:100}),(0,T.jsx)(i.RangeControl,{label:(0,s.__)("Spread Radius","directorist-gutenberg"),value:d.spread,onChange:e=>p("spread",e||0),min:-100,max:100}),c&&(0,T.jsx)(i.Button,{variant:"secondary",size:"small",onClick:()=>{t({[r]:""})},style:{marginTop:"12px"},children:(0,s.__)("Reset Shadow","directorist-gutenberg")})]})}const nn=["core/group","core/column","core/columns","core/row","core/stack","core/grid"],sn="0px 0px 0px 0px rgba(0, 0, 0, 0)",on=e=>{if(!e||e===sn)return!1;const t=e.match(/^(\d+px|0)\s+(\d+px|0)\s+(\d+px|0)\s+(\d+px|0)/);if(t){const[,e,r,n,i]=t;if(!("0"!==e&&"0px"!==e||"0"!==r&&"0px"!==r||"0"!==n&&"0px"!==n||"0"!==i&&"0px"!==i))return!1}return!0};(0,Zr.addFilter)("blocks.registerBlockType","directorist-gutenberg/add-drop-shadow-attribute",(e,t)=>nn.includes(t)?{...e,attributes:{...e.attributes,drop_shadow:{type:"string",default:sn}}}:e);const an=(0,en.createHigherOrderComponent)(e=>t=>{const{name:r,attributes:n,setAttributes:i}=t;return nn.includes(r)?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(e,{...t}),(0,T.jsx)(Qr.InspectorControls,{children:(0,T.jsx)(rn,{attributes:n,setAttributes:i,attrName:"drop_shadow",label:"Custom Drop Shadow",initialOpen:!1})})]}):(0,T.jsx)(e,{...t})},"withShadowControl");(0,Zr.addFilter)("editor.BlockEdit","directorist-gutenberg/add-shadow-control",an),(0,Zr.addFilter)("blocks.getSaveContent.extraProps","directorist-gutenberg/apply-shadow-styles",(e,t,r)=>{if(!nn.includes(t.name))return e;if(r.drop_shadow&&on(r.drop_shadow)){const t=e.style||{};return{...e,style:{...t,boxShadow:r.drop_shadow}}}return e}),(0,Zr.addFilter)("editor.BlockListBlock","directorist-gutenberg/apply-shadow-styles-editor",e=>t=>{const{name:r,attributes:n}=t;if(!nn.includes(r)||!n.drop_shadow||!on(n.drop_shadow))return(0,T.jsx)(e,{...t});const i=t.wrapperProps||{},s=i.style||{},o={...i,style:{...s,boxShadow:n.drop_shadow}};return(0,T.jsx)(e,{...t,wrapperProps:o})})})()})();