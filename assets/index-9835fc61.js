(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function pr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yu={exports:{}},fr={},vu={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),xd=Symbol.for("react.fragment"),Rd=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),zd=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),Qd=Symbol.for("react.memo"),Zd=Symbol.for("react.lazy"),na=Symbol.iterator;function Yd(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var wu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ku=Object.assign,_u={};function mn(e,t,n){this.props=e,this.context=t,this.refs=_u,this.updater=n||wu}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Su(){}Su.prototype=mn.prototype;function ul(e,t,n){this.props=e,this.context=t,this.refs=_u,this.updater=n||wu}var sl=ul.prototype=new Su;sl.constructor=ul;ku(sl,mn.prototype);sl.isPureReactComponent=!0;var ia=Array.isArray,Eu=Object.prototype.hasOwnProperty,dl={current:null},Iu={key:!0,ref:!0,__self:!0,__source:!0};function Tu(e,t,n){var i,r={},o=null,l=null;if(t!=null)for(i in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Eu.call(t,i)&&!Iu.hasOwnProperty(i)&&(r[i]=t[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ai,type:e,key:o,ref:l,props:r,_owner:dl.current}}function Hd(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function Jd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Dr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jd(""+e.key):t.toString(36)}function Mi(e,t,n,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ai:case Ld:l=!0}}if(l)return l=e,r=r(l),e=i===""?"."+Dr(l,0):i,ia(r)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),Mi(r,t,n,"",function(s){return s})):r!=null&&(cl(r)&&(r=Hd(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(ra,"$&/")+"/")+e)),t.push(r)),1;if(l=0,i=i===""?".":i+":",ia(e))for(var a=0;a<e.length;a++){o=e[a];var u=i+Dr(o,a);l+=Mi(o,t,n,u,r)}else if(u=Yd(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=i+Dr(o,a++),l+=Mi(o,t,n,u,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hi(e,t,n){if(e==null)return e;var i=[],r=0;return Mi(e,i,"","",function(o){return t.call(n,o,r++)}),i}function Kd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Di={transition:null},Bd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Di,ReactCurrentOwner:dl};j.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=mn;j.Fragment=xd;j.Profiler=Ud;j.PureComponent=ul;j.StrictMode=Rd;j.Suspense=Wd;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=ku({},e.props),r=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=dl.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Eu.call(t,u)&&!Iu.hasOwnProperty(u)&&(i[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}return{$$typeof:ai,type:e.type,key:r,ref:o,props:i,_owner:l}};j.createContext=function(e){return e={$$typeof:zd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vd,_context:e},e.Consumer=e};j.createElement=Tu;j.createFactory=function(e){var t=Tu.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:Fd,render:e}};j.isValidElement=cl;j.lazy=function(e){return{$$typeof:Zd,_payload:{_status:-1,_result:e},_init:Kd}};j.memo=function(e,t){return{$$typeof:Qd,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Di.transition;Di.transition={};try{e()}finally{Di.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return pe.current.useCallback(e,t)};j.useContext=function(e){return pe.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};j.useEffect=function(e,t){return pe.current.useEffect(e,t)};j.useId=function(){return pe.current.useId()};j.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return pe.current.useMemo(e,t)};j.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};j.useRef=function(e){return pe.current.useRef(e)};j.useState=function(e){return pe.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return pe.current.useTransition()};j.version="18.2.0";vu.exports=j;var en=vu.exports;const ne=pr(en);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=en,Gd=Symbol.for("react.element"),qd=Symbol.for("react.fragment"),Xd=Object.prototype.hasOwnProperty,$d=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ec={key:!0,ref:!0,__self:!0,__source:!0};function Au(e,t,n){var i,r={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(i in t)Xd.call(t,i)&&!ec.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:Gd,type:e,key:o,ref:l,props:r,_owner:$d.current}}fr.Fragment=qd;fr.jsx=Au;fr.jsxs=Au;yu.exports=fr;var E=yu.exports,io={},Cu={exports:{}},Te={},Ou={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,N){var D=S.length;S.push(N);e:for(;0<D;){var O=D-1>>>1,R=S[O];if(0<r(R,N))S[O]=N,S[D]=R,D=O;else break e}}function n(S){return S.length===0?null:S[0]}function i(S){if(S.length===0)return null;var N=S[0],D=S.pop();if(D!==N){S[0]=D;e:for(var O=0,R=S.length,ee=R>>>1;O<ee;){var me=2*(O+1)-1,vn=S[me],Je=me+1,Ft=S[Je];if(0>r(vn,D))Je<R&&0>r(Ft,vn)?(S[O]=Ft,S[Je]=D,O=Je):(S[O]=vn,S[me]=D,O=me);else if(Je<R&&0>r(Ft,D))S[O]=Ft,S[Je]=D,O=Je;else break e}}return N}function r(S,N){var D=S.sortIndex-N.sortIndex;return D!==0?D:S.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],f=1,p=null,m=3,v=!1,y=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(S){for(var N=n(s);N!==null;){if(N.callback===null)i(s);else if(N.startTime<=S)i(s),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(s)}}function g(S){if(k=!1,h(S),!y)if(n(u)!==null)y=!0,it(_);else{var N=n(s);N!==null&&It(g,N.startTime-S)}}function _(S,N){y=!1,k&&(k=!1,c(A),A=-1),v=!0;var D=m;try{for(h(N),p=n(u);p!==null&&(!(p.expirationTime>N)||S&&!Q());){var O=p.callback;if(typeof O=="function"){p.callback=null,m=p.priorityLevel;var R=O(p.expirationTime<=N);N=e.unstable_now(),typeof R=="function"?p.callback=R:p===n(u)&&i(u),h(N)}else i(u);p=n(u)}if(p!==null)var ee=!0;else{var me=n(s);me!==null&&It(g,me.startTime-N),ee=!1}return ee}finally{p=null,m=D,v=!1}}var C=!1,I=null,A=-1,x=5,M=-1;function Q(){return!(e.unstable_now()-M<x)}function b(){if(I!==null){var S=e.unstable_now();M=S;var N=!0;try{N=I(!0,S)}finally{N?de():(C=!1,I=null)}}else C=!1}var de;if(typeof d=="function")de=function(){d(b)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,zt=Fe.port2;Fe.port1.onmessage=b,de=function(){zt.postMessage(null)}}else de=function(){P(b,0)};function it(S){I=S,C||(C=!0,de())}function It(S,N){A=P(function(){S(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,it(_))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var D=m;m=N;try{return S()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,N){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var D=m;m=S;try{return N()}finally{m=D}},e.unstable_scheduleCallback=function(S,N,D){var O=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?O+D:O):D=O,S){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=D+R,S={id:f++,callback:N,priorityLevel:S,startTime:D,expirationTime:R,sortIndex:-1},D>O?(S.sortIndex=D,t(s,S),n(u)===null&&S===n(s)&&(k?(c(A),A=-1):k=!0,It(g,D-O))):(S.sortIndex=R,t(u,S),y||v||(y=!0,it(_))),S},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(S){var N=m;return function(){var D=m;m=N;try{return S.apply(this,arguments)}finally{m=D}}}})(Nu);Ou.exports=Nu;var tc=Ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu=en,Ie=tc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Du=new Set,Fn={};function Ut(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Fn[e]=t,e=0;e<t.length;e++)Du.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=Object.prototype.hasOwnProperty,nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oa={},la={};function ic(e){return ro.call(la,e)?!0:ro.call(oa,e)?!1:nc.test(e)?la[e]=!0:(oa[e]=!0,!1)}function rc(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oc(e,t,n,i){if(t===null||typeof t>"u"||rc(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,i,r,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var hl=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hl,pl);oe[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hl,pl);oe[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hl,pl);oe[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function fl(e,t,n,i){var r=oe.hasOwnProperty(t)?oe[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(oc(t,n,r,i)&&(n=null),i||r===null?ic(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var nt=Mu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pi=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),ml=Symbol.for("react.strict_mode"),oo=Symbol.for("react.profiler"),Pu=Symbol.for("react.provider"),ju=Symbol.for("react.context"),gl=Symbol.for("react.forward_ref"),lo=Symbol.for("react.suspense"),ao=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),Lu=Symbol.for("react.offscreen"),aa=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Pr;function Cn(e){if(Pr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pr=t&&t[1]||""}return`
`+Pr+e}var jr=!1;function Lr(e,t){if(!e||jr)return"";jr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var i=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){i=s}e.call(t.prototype)}else{try{throw Error()}catch(s){i=s}e()}}catch(s){if(s&&i&&typeof s.stack=="string"){for(var r=s.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,a=o.length-1;1<=l&&0<=a&&r[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(r[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||r[l]!==o[a]){var u=`
`+r[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{jr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function lc(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Lr(e.type,!1),e;case 11:return e=Lr(e.type.render,!1),e;case 1:return e=Lr(e.type,!0),e;default:return""}}function uo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Qt:return"Portal";case oo:return"Profiler";case ml:return"StrictMode";case lo:return"Suspense";case ao:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ju:return(e.displayName||"Context")+".Consumer";case Pu:return(e._context.displayName||"Context")+".Provider";case gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yl:return t=e.displayName||null,t!==null?t:uo(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return uo(e(t))}catch{}}return null}function ac(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uo(t);case 8:return t===ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uc(e){var t=xu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=uc(e))}function Ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=xu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function so(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uu(e,t){t=t.checked,t!=null&&fl(e,"checked",t,!1)}function co(e,t){Uu(e,t);var n=wt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&ho(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ho(e,t,n){(t!=="number"||Zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function tn(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function po(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(On(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function Vu(e,t){var n=wt(t.value),i=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,Fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sc=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){sc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Wu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Qu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wu(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var dc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mo(e,t){if(t){if(dc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vo=null,nn=null,rn=null;function ha(e){if(e=di(e)){if(typeof vo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=wr(t),vo(e.stateNode,e.type,t))}}function Zu(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Yu(){if(nn){var e=nn,t=rn;if(rn=nn=null,ha(e),t)for(e=0;e<t.length;e++)ha(t[e])}}function Hu(e,t){return e(t)}function Ju(){}var xr=!1;function Ku(e,t,n){if(xr)return e(t,n);xr=!0;try{return Hu(e,t,n)}finally{xr=!1,(nn!==null||rn!==null)&&(Ju(),Yu())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var i=wr(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var wo=!1;if(Xe)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){wo=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{wo=!1}function cc(e,t,n,i,r,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(f){this.onError(f)}}var Pn=!1,Yi=null,Hi=!1,ko=null,hc={onError:function(e){Pn=!0,Yi=e}};function pc(e,t,n,i,r,o,l,a,u){Pn=!1,Yi=null,cc.apply(hc,arguments)}function fc(e,t,n,i,r,o,l,a,u){if(pc.apply(this,arguments),Pn){if(Pn){var s=Yi;Pn=!1,Yi=null}else throw Error(w(198));Hi||(Hi=!0,ko=s)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pa(e){if(Vt(e)!==e)throw Error(w(188))}function mc(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return pa(r),e;if(o===i)return pa(r),t;o=o.sibling}throw Error(w(188))}if(n.return!==i.return)n=r,i=o;else{for(var l=!1,a=r.child;a;){if(a===n){l=!0,n=r,i=o;break}if(a===i){l=!0,i=r,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,i=r;break}if(a===i){l=!0,i=o,n=r;break}a=a.sibling}if(!l)throw Error(w(189))}}if(n.alternate!==i)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function bu(e){return e=mc(e),e!==null?Gu(e):null}function Gu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gu(e);if(t!==null)return t;e=e.sibling}return null}var qu=Ie.unstable_scheduleCallback,fa=Ie.unstable_cancelCallback,gc=Ie.unstable_shouldYield,yc=Ie.unstable_requestPaint,K=Ie.unstable_now,vc=Ie.unstable_getCurrentPriorityLevel,wl=Ie.unstable_ImmediatePriority,Xu=Ie.unstable_UserBlockingPriority,Ji=Ie.unstable_NormalPriority,wc=Ie.unstable_LowPriority,$u=Ie.unstable_IdlePriority,mr=null,Ye=null;function kc(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(mr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Ec,_c=Math.log,Sc=Math.LN2;function Ec(e){return e>>>=0,e===0?32:31-(_c(e)/Sc|0)|0}var gi=64,yi=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~r;a!==0?i=Nn(a):(o&=l,o!==0&&(i=Nn(o)))}else l=n&~r,l!==0?i=Nn(l):o!==0&&(i=Nn(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Ue(t),r=1<<n,i|=e[n],t&=~r;return i}function Ic(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tc(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ue(o),a=1<<l,u=r[l];u===-1?(!(a&n)||a&i)&&(r[l]=Ic(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function _o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function es(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function Rr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function Ac(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Ue(n),o=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~o}}function kl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ue(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var U=0;function ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ns,_l,is,rs,os,So=!1,vi=[],ct=null,ht=null,pt=null,Zn=new Map,Yn=new Map,at=[],Cc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function _n(e,t,n,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},t!==null&&(t=di(t),t!==null&&_l(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Oc(e,t,n,i,r){switch(t){case"focusin":return ct=_n(ct,e,t,n,i,r),!0;case"dragenter":return ht=_n(ht,e,t,n,i,r),!0;case"mouseover":return pt=_n(pt,e,t,n,i,r),!0;case"pointerover":var o=r.pointerId;return Zn.set(o,_n(Zn.get(o)||null,e,t,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Yn.set(o,_n(Yn.get(o)||null,e,t,n,i,r)),!0}return!1}function ls(e){var t=Ct(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=Bu(n),t!==null){e.blockedOn=t,os(e.priority,function(){is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);yo=i,n.target.dispatchEvent(i),yo=null}else return t=di(n),t!==null&&_l(t),e.blockedOn=n,!1;t.shift()}return!0}function ga(e,t,n){Pi(e)&&n.delete(t)}function Nc(){So=!1,ct!==null&&Pi(ct)&&(ct=null),ht!==null&&Pi(ht)&&(ht=null),pt!==null&&Pi(pt)&&(pt=null),Zn.forEach(ga),Yn.forEach(ga)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,So||(So=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Nc)))}function Hn(e){function t(r){return Sn(r,e)}if(0<vi.length){Sn(vi[0],e);for(var n=1;n<vi.length;n++){var i=vi[n];i.blockedOn===e&&(i.blockedOn=null)}}for(ct!==null&&Sn(ct,e),ht!==null&&Sn(ht,e),pt!==null&&Sn(pt,e),Zn.forEach(t),Yn.forEach(t),n=0;n<at.length;n++)i=at[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)ls(n),n.blockedOn===null&&at.shift()}var on=nt.ReactCurrentBatchConfig,Bi=!0;function Mc(e,t,n,i){var r=U,o=on.transition;on.transition=null;try{U=1,Sl(e,t,n,i)}finally{U=r,on.transition=o}}function Dc(e,t,n,i){var r=U,o=on.transition;on.transition=null;try{U=4,Sl(e,t,n,i)}finally{U=r,on.transition=o}}function Sl(e,t,n,i){if(Bi){var r=Eo(e,t,n,i);if(r===null)Jr(e,t,i,bi,n),ma(e,i);else if(Oc(r,e,t,n,i))i.stopPropagation();else if(ma(e,i),t&4&&-1<Cc.indexOf(e)){for(;r!==null;){var o=di(r);if(o!==null&&ns(o),o=Eo(e,t,n,i),o===null&&Jr(e,t,i,bi,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Jr(e,t,i,null,n)}}var bi=null;function Eo(e,t,n,i){if(bi=null,e=vl(i),e=Ct(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bi=e,null}function as(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vc()){case wl:return 1;case Xu:return 4;case Ji:case wc:return 16;case $u:return 536870912;default:return 16}default:return 16}}var st=null,El=null,ji=null;function us(){if(ji)return ji;var e,t=El,n=t.length,i,r="value"in st?st.value:st.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var l=n-e;for(i=1;i<=l&&t[n-i]===r[o-i];i++);return ji=r.slice(e,1<i?1-i:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function ya(){return!1}function Ae(e){function t(n,i,r,o,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:ya,this.isPropagationStopped=ya,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Ae(gn),si=H({},gn,{view:0,detail:0}),Pc=Ae(si),Ur,Vr,En,gr=H({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Ur=e.screenX-En.screenX,Vr=e.screenY-En.screenY):Vr=Ur=0,En=e),Ur)},movementY:function(e){return"movementY"in e?e.movementY:Vr}}),va=Ae(gr),jc=H({},gr,{dataTransfer:0}),Lc=Ae(jc),xc=H({},si,{relatedTarget:0}),zr=Ae(xc),Rc=H({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Uc=Ae(Rc),Vc=H({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zc=Ae(Vc),Fc=H({},gn,{data:0}),wa=Ae(Fc),Wc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zc[e])?!!t[e]:!1}function Tl(){return Yc}var Hc=H({},si,{key:function(e){if(e.key){var t=Wc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jc=Ae(Hc),Kc=H({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ka=Ae(Kc),Bc=H({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),bc=Ae(Bc),Gc=H({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qc=Ae(Gc),Xc=H({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$c=Ae(Xc),eh=[9,13,27,32],Al=Xe&&"CompositionEvent"in window,jn=null;Xe&&"documentMode"in document&&(jn=document.documentMode);var th=Xe&&"TextEvent"in window&&!jn,ss=Xe&&(!Al||jn&&8<jn&&11>=jn),_a=String.fromCharCode(32),Sa=!1;function ds(e,t){switch(e){case"keyup":return eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function nh(e,t){switch(e){case"compositionend":return cs(t);case"keypress":return t.which!==32?null:(Sa=!0,_a);case"textInput":return e=t.data,e===_a&&Sa?null:e;default:return null}}function ih(e,t){if(Yt)return e==="compositionend"||!Al&&ds(e,t)?(e=us(),ji=El=st=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ss&&t.locale!=="ko"?null:t.data;default:return null}}var rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rh[e.type]:t==="textarea"}function hs(e,t,n,i){Zu(i),t=Gi(t,"onChange"),0<t.length&&(n=new Il("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ln=null,Jn=null;function oh(e){Es(e,0)}function yr(e){var t=Kt(e);if(Ru(t))return e}function lh(e,t){if(e==="change")return t}var ps=!1;if(Xe){var Fr;if(Xe){var Wr="oninput"in document;if(!Wr){var Ia=document.createElement("div");Ia.setAttribute("oninput","return;"),Wr=typeof Ia.oninput=="function"}Fr=Wr}else Fr=!1;ps=Fr&&(!document.documentMode||9<document.documentMode)}function Ta(){Ln&&(Ln.detachEvent("onpropertychange",fs),Jn=Ln=null)}function fs(e){if(e.propertyName==="value"&&yr(Jn)){var t=[];hs(t,Jn,e,vl(e)),Ku(oh,t)}}function ah(e,t,n){e==="focusin"?(Ta(),Ln=t,Jn=n,Ln.attachEvent("onpropertychange",fs)):e==="focusout"&&Ta()}function uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yr(Jn)}function sh(e,t){if(e==="click")return yr(t)}function dh(e,t){if(e==="input"||e==="change")return yr(t)}function ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:ch;function Kn(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ro.call(t,r)||!ze(e[r],t[r]))return!1}return!0}function Aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Aa(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aa(n)}}function ms(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ms(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gs(){for(var e=window,t=Zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function Cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hh(e){var t=gs(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ms(n.ownerDocument.documentElement,n)){if(i!==null&&Cl(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=Ca(n,o);var l=Ca(n,i);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ph=Xe&&"documentMode"in document&&11>=document.documentMode,Ht=null,Io=null,xn=null,To=!1;function Oa(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;To||Ht==null||Ht!==Zi(i)||(i=Ht,"selectionStart"in i&&Cl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xn&&Kn(xn,i)||(xn=i,i=Gi(Io,"onSelect"),0<i.length&&(t=new Il("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ht)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Qr={},ys={};Xe&&(ys=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function vr(e){if(Qr[e])return Qr[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ys)return Qr[e]=t[n];return e}var vs=vr("animationend"),ws=vr("animationiteration"),ks=vr("animationstart"),_s=vr("transitionend"),Ss=new Map,Na="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Ss.set(e,t),Ut(t,[e])}for(var Zr=0;Zr<Na.length;Zr++){var Yr=Na[Zr],fh=Yr.toLowerCase(),mh=Yr[0].toUpperCase()+Yr.slice(1);_t(fh,"on"+mh)}_t(vs,"onAnimationEnd");_t(ws,"onAnimationIteration");_t(ks,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(_s,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function Ma(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,fc(i,t,void 0,e),e.currentTarget=null}function Es(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var l=i.length-1;0<=l;l--){var a=i[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&r.isPropagationStopped())break e;Ma(r,a,s),o=u}else for(l=0;l<i.length;l++){if(a=i[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&r.isPropagationStopped())break e;Ma(r,a,s),o=u}}}if(Hi)throw e=ko,Hi=!1,ko=null,e}function z(e,t){var n=t[Mo];n===void 0&&(n=t[Mo]=new Set);var i=e+"__bubble";n.has(i)||(Is(t,e,2,!1),n.add(i))}function Hr(e,t,n){var i=0;t&&(i|=4),Is(n,e,i,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[_i]){e[_i]=!0,Du.forEach(function(n){n!=="selectionchange"&&(gh.has(n)||Hr(n,!1,e),Hr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,Hr("selectionchange",!1,t))}}function Is(e,t,n,i){switch(as(t)){case 1:var r=Mc;break;case 4:r=Dc;break;default:r=Sl}n=r.bind(null,t,n,e),r=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Jr(e,t,n,i,r){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;l=l.return}for(;a!==null;){if(l=Ct(a),l===null)return;if(u=l.tag,u===5||u===6){i=o=l;continue e}a=a.parentNode}}i=i.return}Ku(function(){var s=o,f=vl(n),p=[];e:{var m=Ss.get(e);if(m!==void 0){var v=Il,y=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":v=Jc;break;case"focusin":y="focus",v=zr;break;case"focusout":y="blur",v=zr;break;case"beforeblur":case"afterblur":v=zr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Lc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=bc;break;case vs:case ws:case ks:v=Uc;break;case _s:v=qc;break;case"scroll":v=Pc;break;case"wheel":v=$c;break;case"copy":case"cut":case"paste":v=zc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ka}var k=(t&4)!==0,P=!k&&e==="scroll",c=k?m!==null?m+"Capture":null:m;k=[];for(var d=s,h;d!==null;){h=d;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,c!==null&&(g=Qn(d,c),g!=null&&k.push(bn(d,g,h)))),P)break;d=d.return}0<k.length&&(m=new v(m,y,null,n,f),p.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==yo&&(y=n.relatedTarget||n.fromElement)&&(Ct(y)||y[$e]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=s,y=y?Ct(y):null,y!==null&&(P=Vt(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=s),v!==y)){if(k=va,g="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=ka,g="onPointerLeave",c="onPointerEnter",d="pointer"),P=v==null?m:Kt(v),h=y==null?m:Kt(y),m=new k(g,d+"leave",v,n,f),m.target=P,m.relatedTarget=h,g=null,Ct(f)===s&&(k=new k(c,d+"enter",y,n,f),k.target=h,k.relatedTarget=P,g=k),P=g,v&&y)t:{for(k=v,c=y,d=0,h=k;h;h=Wt(h))d++;for(h=0,g=c;g;g=Wt(g))h++;for(;0<d-h;)k=Wt(k),d--;for(;0<h-d;)c=Wt(c),h--;for(;d--;){if(k===c||c!==null&&k===c.alternate)break t;k=Wt(k),c=Wt(c)}k=null}else k=null;v!==null&&Da(p,m,v,k,!1),y!==null&&P!==null&&Da(p,P,y,k,!0)}}e:{if(m=s?Kt(s):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var _=lh;else if(Ea(m))if(ps)_=dh;else{_=uh;var C=ah}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=sh);if(_&&(_=_(e,s))){hs(p,_,n,f);break e}C&&C(e,m,s),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ho(m,"number",m.value)}switch(C=s?Kt(s):window,e){case"focusin":(Ea(C)||C.contentEditable==="true")&&(Ht=C,Io=s,xn=null);break;case"focusout":xn=Io=Ht=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,Oa(p,n,f);break;case"selectionchange":if(ph)break;case"keydown":case"keyup":Oa(p,n,f)}var I;if(Al)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Yt?ds(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(ss&&n.locale!=="ko"&&(Yt||A!=="onCompositionStart"?A==="onCompositionEnd"&&Yt&&(I=us()):(st=f,El="value"in st?st.value:st.textContent,Yt=!0)),C=Gi(s,A),0<C.length&&(A=new wa(A,e,null,n,f),p.push({event:A,listeners:C}),I?A.data=I:(I=cs(n),I!==null&&(A.data=I)))),(I=th?nh(e,n):ih(e,n))&&(s=Gi(s,"onBeforeInput"),0<s.length&&(f=new wa("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:s}),f.data=I))}Es(p,t)})}function bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Qn(e,n),o!=null&&i.unshift(bn(e,o,r)),o=Qn(e,t),o!=null&&i.push(bn(e,o,r))),e=e.return}return i}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Da(e,t,n,i,r){for(var o=t._reactName,l=[];n!==null&&n!==i;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===i)break;a.tag===5&&s!==null&&(a=s,r?(u=Qn(n,o),u!=null&&l.unshift(bn(n,u,a))):r||(u=Qn(n,o),u!=null&&l.push(bn(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var yh=/\r\n?/g,vh=/\u0000|\uFFFD/g;function Pa(e){return(typeof e=="string"?e:""+e).replace(yh,`
`).replace(vh,"")}function Si(e,t,n){if(t=Pa(t),Pa(e)!==t&&n)throw Error(w(425))}function qi(){}var Ao=null,Co=null;function Oo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var No=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,ja=typeof Promise=="function"?Promise:void 0,kh=typeof queueMicrotask=="function"?queueMicrotask:typeof ja<"u"?function(e){return ja.resolve(null).then(e).catch(_h)}:No;function _h(e){setTimeout(function(){throw e})}function Kr(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Hn(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Hn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+yn,Gn="__reactProps$"+yn,$e="__reactContainer$"+yn,Mo="__reactEvents$"+yn,Sh="__reactListeners$"+yn,Eh="__reactHandles$"+yn;function Ct(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$e]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=La(e);e!==null;){if(n=e[Ze])return n;e=La(e)}return t}e=n,n=e.parentNode}return null}function di(e){return e=e[Ze]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function wr(e){return e[Gn]||null}var Do=[],Bt=-1;function St(e){return{current:e}}function F(e){0>Bt||(e.current=Do[Bt],Do[Bt]=null,Bt--)}function V(e,t){Bt++,Do[Bt]=e.current,e.current=t}var kt={},se=St(kt),ve=St(!1),Pt=kt;function sn(e,t){var n=e.type.contextTypes;if(!n)return kt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function we(e){return e=e.childContextTypes,e!=null}function Xi(){F(ve),F(se)}function xa(e,t,n){if(se.current!==kt)throw Error(w(168));V(se,t),V(ve,n)}function Ts(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(w(108,ac(e)||"Unknown",r));return H({},n,i)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Pt=se.current,V(se,e),V(ve,ve.current),!0}function Ra(e,t,n){var i=e.stateNode;if(!i)throw Error(w(169));n?(e=Ts(e,t,Pt),i.__reactInternalMemoizedMergedChildContext=e,F(ve),F(se),V(se,e)):F(ve),V(ve,n)}var Be=null,kr=!1,Br=!1;function As(e){Be===null?Be=[e]:Be.push(e)}function Ih(e){kr=!0,As(e)}function Et(){if(!Br&&Be!==null){Br=!0;var e=0,t=U;try{var n=Be;for(U=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Be=null,kr=!1}catch(r){throw Be!==null&&(Be=Be.slice(e+1)),qu(wl,Et),r}finally{U=t,Br=!1}}return null}var bt=[],Gt=0,er=null,tr=0,Ce=[],Oe=0,jt=null,be=1,Ge="";function Tt(e,t){bt[Gt++]=tr,bt[Gt++]=er,er=e,tr=t}function Cs(e,t,n){Ce[Oe++]=be,Ce[Oe++]=Ge,Ce[Oe++]=jt,jt=e;var i=be;e=Ge;var r=32-Ue(i)-1;i&=~(1<<r),n+=1;var o=32-Ue(t)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,be=1<<32-Ue(t)+r|n<<r|i,Ge=o+e}else be=1<<o|n<<r|i,Ge=e}function Ol(e){e.return!==null&&(Tt(e,1),Cs(e,1,0))}function Nl(e){for(;e===er;)er=bt[--Gt],bt[Gt]=null,tr=bt[--Gt],bt[Gt]=null;for(;e===jt;)jt=Ce[--Oe],Ce[Oe]=null,Ge=Ce[--Oe],Ce[Oe]=null,be=Ce[--Oe],Ce[Oe]=null}var Ee=null,Se=null,W=!1,Re=null;function Os(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ua(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Se=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:be,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Se=null,!0):!1;default:return!1}}function Po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(W){var t=Se;if(t){var n=t;if(!Ua(e,t)){if(Po(e))throw Error(w(418));t=ft(n.nextSibling);var i=Ee;t&&Ua(e,t)?Os(i,n):(e.flags=e.flags&-4097|2,W=!1,Ee=e)}}else{if(Po(e))throw Error(w(418));e.flags=e.flags&-4097|2,W=!1,Ee=e}}}function Va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Ei(e){if(e!==Ee)return!1;if(!W)return Va(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oo(e.type,e.memoizedProps)),t&&(t=Se)){if(Po(e))throw Ns(),Error(w(418));for(;t;)Os(e,t),t=ft(t.nextSibling)}if(Va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ee?ft(e.stateNode.nextSibling):null;return!0}function Ns(){for(var e=Se;e;)e=ft(e.nextSibling)}function dn(){Se=Ee=null,W=!1}function Ml(e){Re===null?Re=[e]:Re.push(e)}var Th=nt.ReactCurrentBatchConfig;function Le(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var nr=St(null),ir=null,qt=null,Dl=null;function Pl(){Dl=qt=ir=null}function jl(e){var t=nr.current;F(nr),e._currentValue=t}function Lo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){ir=e,Dl=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Dl!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(ir===null)throw Error(w(308));qt=e,ir.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var Ot=null;function Ll(e){Ot===null?Ot=[e]:Ot.push(e)}function Ms(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,Ll(t)):(n.next=r.next,r.next=n),t.interleaved=n,et(e,i)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ds(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,L&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,et(e,n)}return r=i.interleaved,r===null?(t.next=t,Ll(i)):(t.next=r.next,r.next=t),i.interleaved=t,et(e,n)}function xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,kl(e,n)}}function za(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rr(e,t,n,i){var r=e.updateQueue;lt=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=s:a.next=s,f.lastBaseUpdate=u))}if(o!==null){var p=r.baseState;l=0,f=s=u=null,a=o;do{var m=a.lane,v=a.eventTime;if((i&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,k=a;switch(m=t,v=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){p=y.call(v,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,m=typeof y=="function"?y.call(v,p,m):y,m==null)break e;p=H({},p,m);break e;case 2:lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(s=f=v,u=p):f=f.next=v,l|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(1);if(f===null&&(u=p),r.baseState=u,r.firstBaseUpdate=s,r.lastBaseUpdate=f,t=r.shared.interleaved,t!==null){r=t;do l|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);xt|=l,e.lanes=l,e.memoizedState=p}}function Fa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(w(191,r));r.call(i)}}}var Ps=new Mu.Component().refs;function xo(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _r={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=he(),r=yt(e),o=qe(i,r);o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,r),t!==null&&(Ve(t,e,r,i),xi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=he(),r=yt(e),o=qe(i,r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,r),t!==null&&(Ve(t,e,r,i),xi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),i=yt(e),r=qe(n,i);r.tag=2,t!=null&&(r.callback=t),t=mt(e,r,i),t!==null&&(Ve(t,e,i,n),xi(t,e,i))}};function Wa(e,t,n,i,r,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,l):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,i)||!Kn(r,o):!0}function js(e,t,n){var i=!1,r=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(r=we(t)?Pt:se.current,i=t.contextTypes,o=(i=i!=null)?sn(e,r):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_r,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function Qa(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&_r.enqueueReplaceState(t,t.state,null)}function Ro(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=Ps,xl(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=De(o):(o=we(t)?Pt:se.current,r.context=sn(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(xo(e,t,o,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&_r.enqueueReplaceState(r,r.state,null),rr(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var i=n.stateNode}if(!i)throw Error(w(147,e));var r=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=r.refs;a===Ps&&(a=r.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Za(e){var t=e._init;return t(e._payload)}function Ls(e){function t(c,d){if(e){var h=c.deletions;h===null?(c.deletions=[d],c.flags|=16):h.push(d)}}function n(c,d){if(!e)return null;for(;d!==null;)t(c,d),d=d.sibling;return null}function i(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function r(c,d){return c=vt(c,d),c.index=0,c.sibling=null,c}function o(c,d,h){return c.index=h,e?(h=c.alternate,h!==null?(h=h.index,h<d?(c.flags|=2,d):h):(c.flags|=2,d)):(c.flags|=1048576,d)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,d,h,g){return d===null||d.tag!==6?(d=to(h,c.mode,g),d.return=c,d):(d=r(d,h),d.return=c,d)}function u(c,d,h,g){var _=h.type;return _===Zt?f(c,d,h.props.children,g,h.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ot&&Za(_)===d.type)?(g=r(d,h.props),g.ref=In(c,d,h),g.return=c,g):(g=Wi(h.type,h.key,h.props,null,c.mode,g),g.ref=In(c,d,h),g.return=c,g)}function s(c,d,h,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=no(h,c.mode,g),d.return=c,d):(d=r(d,h.children||[]),d.return=c,d)}function f(c,d,h,g,_){return d===null||d.tag!==7?(d=Dt(h,c.mode,g,_),d.return=c,d):(d=r(d,h),d.return=c,d)}function p(c,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=to(""+d,c.mode,h),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pi:return h=Wi(d.type,d.key,d.props,null,c.mode,h),h.ref=In(c,null,d),h.return=c,h;case Qt:return d=no(d,c.mode,h),d.return=c,d;case ot:var g=d._init;return p(c,g(d._payload),h)}if(On(d)||wn(d))return d=Dt(d,c.mode,h,null),d.return=c,d;Ii(c,d)}return null}function m(c,d,h,g){var _=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:a(c,d,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case pi:return h.key===_?u(c,d,h,g):null;case Qt:return h.key===_?s(c,d,h,g):null;case ot:return _=h._init,m(c,d,_(h._payload),g)}if(On(h)||wn(h))return _!==null?null:f(c,d,h,g,null);Ii(c,h)}return null}function v(c,d,h,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(h)||null,a(d,c,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pi:return c=c.get(g.key===null?h:g.key)||null,u(d,c,g,_);case Qt:return c=c.get(g.key===null?h:g.key)||null,s(d,c,g,_);case ot:var C=g._init;return v(c,d,h,C(g._payload),_)}if(On(g)||wn(g))return c=c.get(h)||null,f(d,c,g,_,null);Ii(d,g)}return null}function y(c,d,h,g){for(var _=null,C=null,I=d,A=d=0,x=null;I!==null&&A<h.length;A++){I.index>A?(x=I,I=null):x=I.sibling;var M=m(c,I,h[A],g);if(M===null){I===null&&(I=x);break}e&&I&&M.alternate===null&&t(c,I),d=o(M,d,A),C===null?_=M:C.sibling=M,C=M,I=x}if(A===h.length)return n(c,I),W&&Tt(c,A),_;if(I===null){for(;A<h.length;A++)I=p(c,h[A],g),I!==null&&(d=o(I,d,A),C===null?_=I:C.sibling=I,C=I);return W&&Tt(c,A),_}for(I=i(c,I);A<h.length;A++)x=v(I,c,A,h[A],g),x!==null&&(e&&x.alternate!==null&&I.delete(x.key===null?A:x.key),d=o(x,d,A),C===null?_=x:C.sibling=x,C=x);return e&&I.forEach(function(Q){return t(c,Q)}),W&&Tt(c,A),_}function k(c,d,h,g){var _=wn(h);if(typeof _!="function")throw Error(w(150));if(h=_.call(h),h==null)throw Error(w(151));for(var C=_=null,I=d,A=d=0,x=null,M=h.next();I!==null&&!M.done;A++,M=h.next()){I.index>A?(x=I,I=null):x=I.sibling;var Q=m(c,I,M.value,g);if(Q===null){I===null&&(I=x);break}e&&I&&Q.alternate===null&&t(c,I),d=o(Q,d,A),C===null?_=Q:C.sibling=Q,C=Q,I=x}if(M.done)return n(c,I),W&&Tt(c,A),_;if(I===null){for(;!M.done;A++,M=h.next())M=p(c,M.value,g),M!==null&&(d=o(M,d,A),C===null?_=M:C.sibling=M,C=M);return W&&Tt(c,A),_}for(I=i(c,I);!M.done;A++,M=h.next())M=v(I,c,A,M.value,g),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?A:M.key),d=o(M,d,A),C===null?_=M:C.sibling=M,C=M);return e&&I.forEach(function(b){return t(c,b)}),W&&Tt(c,A),_}function P(c,d,h,g){if(typeof h=="object"&&h!==null&&h.type===Zt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case pi:e:{for(var _=h.key,C=d;C!==null;){if(C.key===_){if(_=h.type,_===Zt){if(C.tag===7){n(c,C.sibling),d=r(C,h.props.children),d.return=c,c=d;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ot&&Za(_)===C.type){n(c,C.sibling),d=r(C,h.props),d.ref=In(c,C,h),d.return=c,c=d;break e}n(c,C);break}else t(c,C);C=C.sibling}h.type===Zt?(d=Dt(h.props.children,c.mode,g,h.key),d.return=c,c=d):(g=Wi(h.type,h.key,h.props,null,c.mode,g),g.ref=In(c,d,h),g.return=c,c=g)}return l(c);case Qt:e:{for(C=h.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(c,d.sibling),d=r(d,h.children||[]),d.return=c,c=d;break e}else{n(c,d);break}else t(c,d);d=d.sibling}d=no(h,c.mode,g),d.return=c,c=d}return l(c);case ot:return C=h._init,P(c,d,C(h._payload),g)}if(On(h))return y(c,d,h,g);if(wn(h))return k(c,d,h,g);Ii(c,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(c,d.sibling),d=r(d,h),d.return=c,c=d):(n(c,d),d=to(h,c.mode,g),d.return=c,c=d),l(c)):n(c,d)}return P}var cn=Ls(!0),xs=Ls(!1),ci={},He=St(ci),qn=St(ci),Xn=St(ci);function Nt(e){if(e===ci)throw Error(w(174));return e}function Rl(e,t){switch(V(Xn,t),V(qn,e),V(He,ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fo(t,e)}F(He),V(He,t)}function hn(){F(He),F(qn),F(Xn)}function Rs(e){Nt(Xn.current);var t=Nt(He.current),n=fo(t,e.type);t!==n&&(V(qn,e),V(He,n))}function Ul(e){qn.current===e&&(F(He),F(qn))}var Z=St(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var br=[];function Vl(){for(var e=0;e<br.length;e++)br[e]._workInProgressVersionPrimary=null;br.length=0}var Ri=nt.ReactCurrentDispatcher,Gr=nt.ReactCurrentBatchConfig,Lt=0,Y=null,G=null,X=null,lr=!1,Rn=!1,$n=0,Ah=0;function le(){throw Error(w(321))}function zl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ze(e[n],t[n]))return!1;return!0}function Fl(e,t,n,i,r,o){if(Lt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Mh:Dh,e=n(i,r),Rn){o=0;do{if(Rn=!1,$n=0,25<=o)throw Error(w(301));o+=1,X=G=null,t.updateQueue=null,Ri.current=Ph,e=n(i,r)}while(Rn)}if(Ri.current=ar,t=G!==null&&G.next!==null,Lt=0,X=G=Y=null,lr=!1,t)throw Error(w(300));return e}function Wl(){var e=$n!==0;return $n=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?Y.memoizedState=X=e:X=X.next=e,X}function Pe(){if(G===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=X===null?Y.memoizedState:X.next;if(t!==null)X=t,G=e;else{if(e===null)throw Error(w(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},X===null?Y.memoizedState=X=e:X=X.next=e}return X}function ei(e,t){return typeof t=="function"?t(e):t}function qr(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var i=G,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=l=null,u=null,s=o;do{var f=s.lane;if((Lt&f)===f)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),i=s.hasEagerState?s.eagerState:e(i,s.action);else{var p={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=p,l=i):u=u.next=p,Y.lanes|=f,xt|=f}s=s.next}while(s!==null&&s!==o);u===null?l=i:u.next=a,ze(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseState=l,t.baseQueue=u,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do o=r.lane,Y.lanes|=o,xt|=o,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xr(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do o=e(o,l.action),l=l.next;while(l!==r);ze(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Us(){}function Vs(e,t){var n=Y,i=Pe(),r=t(),o=!ze(i.memoizedState,r);if(o&&(i.memoizedState=r,ye=!0),i=i.queue,Ql(Ws.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,ti(9,Fs.bind(null,n,i,r,t),void 0,null),$===null)throw Error(w(349));Lt&30||zs(n,t,r)}return r}function zs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fs(e,t,n,i){t.value=n,t.getSnapshot=i,Qs(t)&&Zs(e)}function Ws(e,t,n){return n(function(){Qs(t)&&Zs(e)})}function Qs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ze(e,n)}catch{return!0}}function Zs(e){var t=et(e,1);t!==null&&Ve(t,e,1,-1)}function Ya(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},t.queue=e,e=e.dispatch=Nh.bind(null,Y,e),[t.memoizedState,e]}function ti(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Ys(){return Pe().memoizedState}function Ui(e,t,n,i){var r=Qe();Y.flags|=e,r.memoizedState=ti(1|t,n,void 0,i===void 0?null:i)}function Sr(e,t,n,i){var r=Pe();i=i===void 0?null:i;var o=void 0;if(G!==null){var l=G.memoizedState;if(o=l.destroy,i!==null&&zl(i,l.deps)){r.memoizedState=ti(t,n,o,i);return}}Y.flags|=e,r.memoizedState=ti(1|t,n,o,i)}function Ha(e,t){return Ui(8390656,8,e,t)}function Ql(e,t){return Sr(2048,8,e,t)}function Hs(e,t){return Sr(4,2,e,t)}function Js(e,t){return Sr(4,4,e,t)}function Ks(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bs(e,t,n){return n=n!=null?n.concat([e]):null,Sr(4,4,Ks.bind(null,t,e),n)}function Zl(){}function bs(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&zl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Gs(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&zl(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function qs(e,t,n){return Lt&21?(ze(n,t)||(n=es(),Y.lanes|=n,xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Ch(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var i=Gr.transition;Gr.transition={};try{e(!1),t()}finally{U=n,Gr.transition=i}}function Xs(){return Pe().memoizedState}function Oh(e,t,n){var i=yt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$s(e))ed(t,n);else if(n=Ms(e,t,n,i),n!==null){var r=he();Ve(n,e,i,r),td(n,t,i)}}function Nh(e,t,n){var i=yt(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($s(e))ed(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(r.hasEagerState=!0,r.eagerState=a,ze(a,l)){var u=t.interleaved;u===null?(r.next=r,Ll(t)):(r.next=u.next,u.next=r),t.interleaved=r;return}}catch{}finally{}n=Ms(e,t,r,i),n!==null&&(r=he(),Ve(n,e,i,r),td(n,t,i))}}function $s(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function ed(e,t){Rn=lr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function td(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,kl(e,n)}}var ar={readContext:De,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Mh={readContext:De,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ha,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4194308,4,Ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Qe();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Oh.bind(null,Y,e),[i.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:Ya,useDebugValue:Zl,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Ya(!1),t=e[0];return e=Ch.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Y,r=Qe();if(W){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),$===null)throw Error(w(349));Lt&30||zs(i,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Ha(Ws.bind(null,i,o,e),[e]),i.flags|=2048,ti(9,Fs.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Qe(),t=$.identifierPrefix;if(W){var n=Ge,i=be;n=(i&~(1<<32-Ue(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=$n++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ah++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dh={readContext:De,useCallback:bs,useContext:De,useEffect:Ql,useImperativeHandle:Bs,useInsertionEffect:Hs,useLayoutEffect:Js,useMemo:Gs,useReducer:qr,useRef:Ys,useState:function(){return qr(ei)},useDebugValue:Zl,useDeferredValue:function(e){var t=Pe();return qs(t,G.memoizedState,e)},useTransition:function(){var e=qr(ei)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Us,useSyncExternalStore:Vs,useId:Xs,unstable_isNewReconciler:!1},Ph={readContext:De,useCallback:bs,useContext:De,useEffect:Ql,useImperativeHandle:Bs,useInsertionEffect:Hs,useLayoutEffect:Js,useMemo:Gs,useReducer:Xr,useRef:Ys,useState:function(){return Xr(ei)},useDebugValue:Zl,useDeferredValue:function(e){var t=Pe();return G===null?t.memoizedState=e:qs(t,G.memoizedState,e)},useTransition:function(){var e=Xr(ei)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Us,useSyncExternalStore:Vs,useId:Xs,unstable_isNewReconciler:!1};function pn(e,t){try{var n="",i=t;do n+=lc(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function $r(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jh=typeof WeakMap=="function"?WeakMap:Map;function nd(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){sr||(sr=!0,Ko=i),Uo(e,t)},n}function id(e,t,n){n=qe(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){Uo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t),typeof i!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ja(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new jh;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=Kh.bind(null,e,t,n),t.then(e,e))}function Ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ba(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var Lh=nt.ReactCurrentOwner,ye=!1;function ce(e,t,n,i){t.child=e===null?xs(t,null,n,i):cn(t,e.child,n,i)}function ba(e,t,n,i,r){n=n.render;var o=t.ref;return ln(t,r),i=Fl(e,t,n,i,o,r),n=Wl(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,tt(e,t,r)):(W&&n&&Ol(t),t.flags|=1,ce(e,t,i,r),t.child)}function Ga(e,t,n,i,r){if(e===null){var o=n.type;return typeof o=="function"&&!ql(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,rd(e,t,o,i,r)):(e=Wi(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(l,i)&&e.ref===t.ref)return tt(e,t,r)}return t.flags|=1,e=vt(o,i),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,n,i,r){if(e!==null){var o=e.memoizedProps;if(Kn(o,i)&&e.ref===t.ref)if(ye=!1,t.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,tt(e,t,r)}return Vo(e,t,n,i,r)}function od(e,t,n){var i=t.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V($t,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V($t,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,V($t,_e),_e|=i}else o!==null?(i=o.baseLanes|n,t.memoizedState=null):i=n,V($t,_e),_e|=i;return ce(e,t,r,n),t.child}function ld(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vo(e,t,n,i,r){var o=we(n)?Pt:se.current;return o=sn(t,o),ln(t,r),n=Fl(e,t,n,i,o,r),i=Wl(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,tt(e,t,r)):(W&&i&&Ol(t),t.flags|=1,ce(e,t,n,r),t.child)}function qa(e,t,n,i,r){if(we(n)){var o=!0;$i(t)}else o=!1;if(ln(t,r),t.stateNode===null)Vi(e,t),js(t,n,i),Ro(t,n,i,r),i=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=De(s):(s=we(n)?Pt:se.current,s=sn(t,s));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==i||u!==s)&&Qa(t,l,i,s),lt=!1;var m=t.memoizedState;l.state=m,rr(t,i,l,r),u=t.memoizedState,a!==i||m!==u||ve.current||lt?(typeof f=="function"&&(xo(t,n,f,i),u=t.memoizedState),(a=lt||Wa(t,n,a,i,m,u,s))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=u),l.props=i,l.state=u,l.context=s,i=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,Ds(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:Le(t.type,a),l.props=s,p=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=we(n)?Pt:se.current,u=sn(t,u));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==u)&&Qa(t,l,i,u),lt=!1,m=t.memoizedState,l.state=m,rr(t,i,l,r);var y=t.memoizedState;a!==p||m!==y||ve.current||lt?(typeof v=="function"&&(xo(t,n,v,i),y=t.memoizedState),(s=lt||Wa(t,n,s,i,m,y,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=y),l.props=i,l.state=y,l.context=u,i=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),i=!1)}return zo(e,t,n,i,o,r)}function zo(e,t,n,i,r,o){ld(e,t);var l=(t.flags&128)!==0;if(!i&&!l)return r&&Ra(t,n,!1),tt(e,t,o);i=t.stateNode,Lh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&l?(t.child=cn(t,e.child,null,o),t.child=cn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=i.state,r&&Ra(t,n,!0),t.child}function ad(e){var t=e.stateNode;t.pendingContext?xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xa(e,t.context,!1),Rl(e,t.containerInfo)}function Xa(e,t,n,i,r){return dn(),Ml(r),t.flags|=256,ce(e,t,n,i),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0};function Wo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ud(e,t,n){var i=t.pendingProps,r=Z.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),V(Z,r&1),e===null)return jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=i.children,e=i.fallback,o?(i=t.mode,o=t.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Tr(l,i,0,null),e=Dt(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Wo(n),t.memoizedState=Fo,e):Yl(t,l));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return xh(e,t,l,i,a,r,n);if(o){o=i.fallback,l=t.mode,r=e.child,a=r.sibling;var u={mode:"hidden",children:i.children};return!(l&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=u,t.deletions=null):(i=vt(r,u),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=vt(a,o):(o=Dt(o,l,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,l=e.child.memoizedState,l=l===null?Wo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Fo,i}return o=e.child,e=o.sibling,i=vt(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Yl(e,t){return t=Tr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ti(e,t,n,i){return i!==null&&Ml(i),cn(t,e.child,null,n),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xh(e,t,n,i,r,o,l){if(n)return t.flags&256?(t.flags&=-257,i=$r(Error(w(422))),Ti(e,t,l,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=Tr({mode:"visible",children:i.children},r,0,null),o=Dt(o,r,l,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&cn(t,e.child,null,l),t.child.memoizedState=Wo(l),t.memoizedState=Fo,o);if(!(t.mode&1))return Ti(e,t,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(w(419)),i=$r(o,i,void 0),Ti(e,t,l,i)}if(a=(l&e.childLanes)!==0,ye||a){if(i=$,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,et(e,r),Ve(i,e,r,-1))}return Gl(),i=$r(Error(w(421))),Ti(e,t,l,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Bh.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,Se=ft(r.nextSibling),Ee=t,W=!0,Re=null,e!==null&&(Ce[Oe++]=be,Ce[Oe++]=Ge,Ce[Oe++]=jt,be=e.id,Ge=e.overflow,jt=t),t=Yl(t,i.children),t.flags|=4096,t)}function $a(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Lo(e.return,t,n)}function eo(e,t,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function sd(e,t,n){var i=t.pendingProps,r=i.revealOrder,o=i.tail;if(ce(e,t,i.children,n),i=Z.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$a(e,n,t);else if(e.tag===19)$a(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(V(Z,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&or(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),eo(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&or(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}eo(t,!0,n,null,o);break;case"together":eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rh(e,t,n){switch(t.tag){case 3:ad(t),dn();break;case 5:Rs(t);break;case 1:we(t.type)&&$i(t);break;case 4:Rl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;V(nr,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(V(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?ud(e,t,n):(V(Z,Z.current&1),e=tt(e,t,n),e!==null?e.sibling:null);V(Z,Z.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return sd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),V(Z,Z.current),i)break;return null;case 22:case 23:return t.lanes=0,od(e,t,n)}return tt(e,t,n)}var dd,Qo,cd,hd;dd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qo=function(){};cd=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Nt(He.current);var o=null;switch(n){case"input":r=so(e,r),i=so(e,i),o=[];break;case"select":r=H({},r,{value:void 0}),i=H({},i,{value:void 0}),o=[];break;case"textarea":r=po(e,r),i=po(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=qi)}mo(n,i);var l;n=null;for(s in r)if(!i.hasOwnProperty(s)&&r.hasOwnProperty(s)&&r[s]!=null)if(s==="style"){var a=r[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fn.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in i){var u=i[s];if(a=r!=null?r[s]:void 0,i.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&z("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}n&&(o=o||[]).push("style",n);var s=o;(t.updateQueue=s)&&(t.flags|=4)}};hd=function(e,t,n,i){n!==i&&(t.flags|=4)};function Tn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Uh(e,t,n){var i=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return we(t.type)&&Xi(),ae(t),null;case 3:return i=t.stateNode,hn(),F(ve),F(se),Vl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Go(Re),Re=null))),Qo(e,t),ae(t),null;case 5:Ul(t);var r=Nt(Xn.current);if(n=t.type,e!==null&&t.stateNode!=null)cd(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=Nt(He.current),Ei(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[Ze]=t,i[Gn]=o,e=(t.mode&1)!==0,n){case"dialog":z("cancel",i),z("close",i);break;case"iframe":case"object":case"embed":z("load",i);break;case"video":case"audio":for(r=0;r<Mn.length;r++)z(Mn[r],i);break;case"source":z("error",i);break;case"img":case"image":case"link":z("error",i),z("load",i);break;case"details":z("toggle",i);break;case"input":ua(i,o),z("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},z("invalid",i);break;case"textarea":da(i,o),z("invalid",i)}mo(n,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Si(i.textContent,a,e),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Si(i.textContent,a,e),r=["children",""+a]):Fn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&z("scroll",i)}switch(n){case"input":fi(i),sa(i,o,!0);break;case"textarea":fi(i),ca(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=qi)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=l.createElement(n,{is:i.is}):(e=l.createElement(n),n==="select"&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,n),e[Ze]=t,e[Gn]=i,dd(e,t,!1,!1),t.stateNode=e;e:{switch(l=go(n,i),n){case"dialog":z("cancel",e),z("close",e),r=i;break;case"iframe":case"object":case"embed":z("load",e),r=i;break;case"video":case"audio":for(r=0;r<Mn.length;r++)z(Mn[r],e);r=i;break;case"source":z("error",e),r=i;break;case"img":case"image":case"link":z("error",e),z("load",e),r=i;break;case"details":z("toggle",e),r=i;break;case"input":ua(e,i),r=so(e,i),z("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=H({},i,{value:void 0}),z("invalid",e);break;case"textarea":da(e,i),r=po(e,i),z("invalid",e);break;default:r=i}mo(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Qu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wn(e,u):typeof u=="number"&&Wn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&z("scroll",e):u!=null&&fl(e,o,u,l))}switch(n){case"input":fi(e),sa(e,i,!1);break;case"textarea":fi(e),ca(e);break;case"option":i.value!=null&&e.setAttribute("value",""+wt(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?tn(e,!!i.multiple,o,!1):i.defaultValue!=null&&tn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=qi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)hd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(w(166));if(n=Nt(Xn.current),Nt(He.current),Ei(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ze]=t,(o=i.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:Si(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(i.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ze]=t,t.stateNode=i}return ae(t),null;case 13:if(F(Z),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Se!==null&&t.mode&1&&!(t.flags&128))Ns(),dn(),t.flags|=98560,o=!1;else if(o=Ei(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ze]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else Re!==null&&(Go(Re),Re=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?q===0&&(q=3):Gl())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return hn(),Qo(e,t),e===null&&Bn(t.stateNode.containerInfo),ae(t),null;case 10:return jl(t.type._context),ae(t),null;case 17:return we(t.type)&&Xi(),ae(t),null;case 19:if(F(Z),o=t.memoizedState,o===null)return ae(t),null;if(i=(t.flags&128)!==0,l=o.rendering,l===null)if(i)Tn(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=or(e),l!==null){for(t.flags|=128,Tn(o,!1),i=l.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)o=n,e=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>fn&&(t.flags|=128,i=!0,Tn(o,!1),t.lanes=4194304)}else{if(!i)if(e=or(l),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!W)return ae(t),null}else 2*K()-o.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,i=!0,Tn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=Z.current,V(Z,i?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return bl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?_e&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Vh(e,t){switch(Nl(t),t.tag){case 1:return we(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),F(ve),F(se),Vl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ul(t),null;case 13:if(F(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(Z),null;case 4:return hn(),null;case 10:return jl(t.type._context),null;case 22:case 23:return bl(),null;case 24:return null;default:return null}}var Ai=!1,ue=!1,zh=typeof WeakSet=="function"?WeakSet:Set,T=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){J(e,t,i)}else n.current=null}function Zo(e,t,n){try{n()}catch(i){J(e,t,i)}}var eu=!1;function Fh(e,t){if(Ao=Bi,e=gs(),Cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,f=0,p=e,m=null;t:for(;;){for(var v;p!==n||r!==0&&p.nodeType!==3||(a=l+r),p!==o||i!==0&&p.nodeType!==3||(u=l+i),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++s===r&&(a=l),m===o&&++f===i&&(u=l),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Co={focusedElem:e,selectionRange:n},Bi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,P=y.memoizedState,c=t.stateNode,d=c.getSnapshotBeforeUpdate(t.elementType===t.type?k:Le(t.type,k),P);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){J(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return y=eu,eu=!1,y}function Un(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&Zo(t,n,o)}r=r.next}while(r!==i)}}function Er(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Yo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pd(e){var t=e.alternate;t!==null&&(e.alternate=null,pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[Gn],delete t[Mo],delete t[Sh],delete t[Eh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fd(e){return e.tag===5||e.tag===3||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(i!==4&&(e=e.child,e!==null))for(Ho(e,t,n),e=e.sibling;e!==null;)Ho(e,t,n),e=e.sibling}function Jo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Jo(e,t,n),e=e.sibling;e!==null;)Jo(e,t,n),e=e.sibling}var ie=null,xe=!1;function rt(e,t,n){for(n=n.child;n!==null;)md(e,t,n),n=n.sibling}function md(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(mr,n)}catch{}switch(n.tag){case 5:ue||Xt(n,t);case 6:var i=ie,r=xe;ie=null,rt(e,t,n),ie=i,xe=r,ie!==null&&(xe?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(xe?(e=ie,n=n.stateNode,e.nodeType===8?Kr(e.parentNode,n):e.nodeType===1&&Kr(e,n),Hn(e)):Kr(ie,n.stateNode));break;case 4:i=ie,r=xe,ie=n.stateNode.containerInfo,xe=!0,rt(e,t,n),ie=i,xe=r;break;case 0:case 11:case 14:case 15:if(!ue&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Zo(n,t,l),r=r.next}while(r!==i)}rt(e,t,n);break;case 1:if(!ue&&(Xt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){J(n,t,a)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(ue=(i=ue)||n.memoizedState!==null,rt(e,t,n),ue=i):rt(e,t,n);break;default:rt(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zh),t.forEach(function(i){var r=bh.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function je(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,xe=!1;break e;case 3:ie=a.stateNode.containerInfo,xe=!0;break e;case 4:ie=a.stateNode.containerInfo,xe=!0;break e}a=a.return}if(ie===null)throw Error(w(160));md(o,l,r),ie=null,xe=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(s){J(r,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gd(t,e),t=t.sibling}function gd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(t,e),We(e),i&4){try{Un(3,e,e.return),Er(3,e)}catch(k){J(e,e.return,k)}try{Un(5,e,e.return)}catch(k){J(e,e.return,k)}}break;case 1:je(t,e),We(e),i&512&&n!==null&&Xt(n,n.return);break;case 5:if(je(t,e),We(e),i&512&&n!==null&&Xt(n,n.return),e.flags&32){var r=e.stateNode;try{Wn(r,"")}catch(k){J(e,e.return,k)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Uu(r,o),go(a,l);var s=go(a,o);for(l=0;l<u.length;l+=2){var f=u[l],p=u[l+1];f==="style"?Qu(r,p):f==="dangerouslySetInnerHTML"?Fu(r,p):f==="children"?Wn(r,p):fl(r,f,p,s)}switch(a){case"input":co(r,o);break;case"textarea":Vu(r,o);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?tn(r,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?tn(r,!!o.multiple,o.defaultValue,!0):tn(r,!!o.multiple,o.multiple?[]:"",!1))}r[Gn]=o}catch(k){J(e,e.return,k)}}break;case 6:if(je(t,e),We(e),i&4){if(e.stateNode===null)throw Error(w(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(k){J(e,e.return,k)}}break;case 3:if(je(t,e),We(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(k){J(e,e.return,k)}break;case 4:je(t,e),We(e);break;case 13:je(t,e),We(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Kl=K())),i&4&&nu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(s=ue)||f,je(t,e),ue=s):je(t,e),We(e),i&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(p=T=f;T!==null;){switch(m=T,v=m.child,m.tag){case 0:case 11:case 14:case 15:Un(4,m,m.return);break;case 1:Xt(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){i=m,n=m.return;try{t=i,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){J(i,n,k)}}break;case 5:Xt(m,m.return);break;case 22:if(m.memoizedState!==null){ru(p);continue}}v!==null?(v.return=m,T=v):ru(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,s?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Wu("display",l))}catch(k){J(e,e.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(k){J(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:je(t,e),We(e),i&4&&nu(e);break;case 21:break;default:je(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fd(n)){var i=n;break e}n=n.return}throw Error(w(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wn(r,""),i.flags&=-33);var o=tu(e);Jo(e,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,a=tu(e);Ho(e,a,l);break;default:throw Error(w(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wh(e,t,n){T=e,yd(e)}function yd(e,t,n){for(var i=(e.mode&1)!==0;T!==null;){var r=T,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||Ai;if(!l){var a=r.alternate,u=a!==null&&a.memoizedState!==null||ue;a=Ai;var s=ue;if(Ai=l,(ue=u)&&!s)for(T=r;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?ou(r):u!==null?(u.return=l,T=u):ou(r);for(;o!==null;)T=o,yd(o),o=o.sibling;T=r,Ai=a,ue=s}iu(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,T=o):iu(e)}}function iu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Er(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ue)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fa(t,o,i);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fa(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Hn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ue||t.flags&512&&Yo(t)}catch(m){J(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ru(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function ou(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Er(4,t)}catch(u){J(t,n,u)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(u){J(t,r,u)}}var o=t.return;try{Yo(t)}catch(u){J(t,o,u)}break;case 5:var l=t.return;try{Yo(t)}catch(u){J(t,l,u)}}}catch(u){J(t,t.return,u)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var Qh=Math.ceil,ur=nt.ReactCurrentDispatcher,Hl=nt.ReactCurrentOwner,Me=nt.ReactCurrentBatchConfig,L=0,$=null,B=null,re=0,_e=0,$t=St(0),q=0,ni=null,xt=0,Ir=0,Jl=0,Vn=null,ge=null,Kl=0,fn=1/0,Ke=null,sr=!1,Ko=null,gt=null,Ci=!1,dt=null,dr=0,zn=0,Bo=null,zi=-1,Fi=0;function he(){return L&6?K():zi!==-1?zi:zi=K()}function yt(e){return e.mode&1?L&2&&re!==0?re&-re:Th.transition!==null?(Fi===0&&(Fi=es()),Fi):(e=U,e!==0||(e=window.event,e=e===void 0?16:as(e.type)),e):1}function Ve(e,t,n,i){if(50<zn)throw zn=0,Bo=null,Error(w(185));ui(e,n,i),(!(L&2)||e!==$)&&(e===$&&(!(L&2)&&(Ir|=n),q===4&&ut(e,re)),ke(e,i),n===1&&L===0&&!(t.mode&1)&&(fn=K()+500,kr&&Et()))}function ke(e,t){var n=e.callbackNode;Tc(e,t);var i=Ki(e,e===$?re:0);if(i===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Ih(lu.bind(null,e)):As(lu.bind(null,e)),kh(function(){!(L&6)&&Et()}),n=null;else{switch(ts(i)){case 1:n=wl;break;case 4:n=Xu;break;case 16:n=Ji;break;case 536870912:n=$u;break;default:n=Ji}n=Td(n,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vd(e,t){if(zi=-1,Fi=0,L&6)throw Error(w(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var i=Ki(e,e===$?re:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=cr(e,i);else{t=i;var r=L;L|=2;var o=kd();($!==e||re!==t)&&(Ke=null,fn=K()+500,Mt(e,t));do try{Hh();break}catch(a){wd(e,a)}while(1);Pl(),ur.current=o,L=r,B!==null?t=0:($=null,re=0,t=q)}if(t!==0){if(t===2&&(r=_o(e),r!==0&&(i=r,t=bo(e,r))),t===1)throw n=ni,Mt(e,0),ut(e,i),ke(e,K()),n;if(t===6)ut(e,i);else{if(r=e.current.alternate,!(i&30)&&!Zh(r)&&(t=cr(e,i),t===2&&(o=_o(e),o!==0&&(i=o,t=bo(e,o))),t===1))throw n=ni,Mt(e,0),ut(e,i),ke(e,K()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(w(345));case 2:At(e,ge,Ke);break;case 3:if(ut(e,i),(i&130023424)===i&&(t=Kl+500-K(),10<t)){if(Ki(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){he(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=No(At.bind(null,e,ge,Ke),t);break}At(e,ge,Ke);break;case 4:if(ut(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var l=31-Ue(i);o=1<<l,l=t[l],l>r&&(r=l),i&=~o}if(i=r,i=K()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Qh(i/1960))-i,10<i){e.timeoutHandle=No(At.bind(null,e,ge,Ke),i);break}At(e,ge,Ke);break;case 5:At(e,ge,Ke);break;default:throw Error(w(329))}}}return ke(e,K()),e.callbackNode===n?vd.bind(null,e):null}function bo(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=cr(e,t),e!==2&&(t=ge,ge=n,t!==null&&Go(t)),e}function Go(e){ge===null?ge=e:ge.push.apply(ge,e)}function Zh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ze(o(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~Jl,t&=~Ir,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),i=1<<n;e[n]=-1,t&=~i}}function lu(e){if(L&6)throw Error(w(327));an();var t=Ki(e,0);if(!(t&1))return ke(e,K()),null;var n=cr(e,t);if(e.tag!==0&&n===2){var i=_o(e);i!==0&&(t=i,n=bo(e,i))}if(n===1)throw n=ni,Mt(e,0),ut(e,t),ke(e,K()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,ge,Ke),ke(e,K()),null}function Bl(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(fn=K()+500,kr&&Et())}}function Rt(e){dt!==null&&dt.tag===0&&!(L&6)&&an();var t=L;L|=1;var n=Me.transition,i=U;try{if(Me.transition=null,U=1,e)return e()}finally{U=i,Me.transition=n,L=t,!(L&6)&&Et()}}function bl(){_e=$t.current,F($t)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wh(n)),B!==null)for(n=B.return;n!==null;){var i=n;switch(Nl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xi();break;case 3:hn(),F(ve),F(se),Vl();break;case 5:Ul(i);break;case 4:hn();break;case 13:F(Z);break;case 19:F(Z);break;case 10:jl(i.type._context);break;case 22:case 23:bl()}n=n.return}if($=e,B=e=vt(e.current,null),re=_e=t,q=0,ni=null,Jl=Ir=xt=0,ge=Vn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}n.pending=i}Ot=null}return e}function wd(e,t){do{var n=B;try{if(Pl(),Ri.current=ar,lr){for(var i=Y.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lr=!1}if(Lt=0,X=G=Y=null,Rn=!1,$n=0,Hl.current=null,n===null||n.return===null){q=1,ni=t,B=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=re,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ka(l);if(v!==null){v.flags&=-257,Ba(v,l,a,o,t),v.mode&1&&Ja(o,s,t),t=v,u=s;var y=t.updateQueue;if(y===null){var k=new Set;k.add(u),t.updateQueue=k}else y.add(u);break e}else{if(!(t&1)){Ja(o,s,t),Gl();break e}u=Error(w(426))}}else if(W&&a.mode&1){var P=Ka(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ba(P,l,a,o,t),Ml(pn(u,a));break e}}o=u=pn(u,a),q!==4&&(q=2),Vn===null?Vn=[o]:Vn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var c=nd(o,u,t);za(o,c);break e;case 1:a=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(gt===null||!gt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=id(o,a,t);za(o,g);break e}}o=o.return}while(o!==null)}Sd(n)}catch(_){t=_,B===n&&n!==null&&(B=n=n.return);continue}break}while(1)}function kd(){var e=ur.current;return ur.current=ar,e===null?ar:e}function Gl(){(q===0||q===3||q===2)&&(q=4),$===null||!(xt&268435455)&&!(Ir&268435455)||ut($,re)}function cr(e,t){var n=L;L|=2;var i=kd();($!==e||re!==t)&&(Ke=null,Mt(e,t));do try{Yh();break}catch(r){wd(e,r)}while(1);if(Pl(),L=n,ur.current=i,B!==null)throw Error(w(261));return $=null,re=0,q}function Yh(){for(;B!==null;)_d(B)}function Hh(){for(;B!==null&&!gc();)_d(B)}function _d(e){var t=Id(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Sd(e):B=t,Hl.current=null}function Sd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vh(n,t),n!==null){n.flags&=32767,B=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,B=null;return}}else if(n=Uh(n,t,_e),n!==null){B=n;return}if(t=t.sibling,t!==null){B=t;return}B=t=e}while(t!==null);q===0&&(q=5)}function At(e,t,n){var i=U,r=Me.transition;try{Me.transition=null,U=1,Jh(e,t,n,i)}finally{Me.transition=r,U=i}return null}function Jh(e,t,n,i){do an();while(dt!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ac(e,o),e===$&&(B=$=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,Td(Ji,function(){return an(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var l=U;U=1;var a=L;L|=4,Hl.current=null,Fh(e,n),gd(n,e),hh(Co),Bi=!!Ao,Co=Ao=null,e.current=n,Wh(n),yc(),L=a,U=l,Me.transition=o}else e.current=n;if(Ci&&(Ci=!1,dt=e,dr=r),o=e.pendingLanes,o===0&&(gt=null),kc(n.stateNode),ke(e,K()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(sr)throw sr=!1,e=Ko,Ko=null,e;return dr&1&&e.tag!==0&&an(),o=e.pendingLanes,o&1?e===Bo?zn++:(zn=0,Bo=e):zn=0,Et(),null}function an(){if(dt!==null){var e=ts(dr),t=Me.transition,n=U;try{if(Me.transition=null,U=16>e?16:e,dt===null)var i=!1;else{if(e=dt,dt=null,dr=0,L&6)throw Error(w(331));var r=L;for(L|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(T=s;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:Un(8,f,o)}var p=f.child;if(p!==null)p.return=f,T=p;else for(;T!==null;){f=T;var m=f.sibling,v=f.return;if(pd(f),f===s){T=null;break}if(m!==null){m.return=v,T=m;break}T=v}}}var y=o.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Un(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,T=c;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){l=T;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,T=h;else e:for(l=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Er(9,a)}}catch(_){J(a,a.return,_)}if(a===l){T=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,T=g;break e}T=a.return}}if(L=r,Et(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(mr,e)}catch{}i=!0}return i}finally{U=n,Me.transition=t}}return!1}function au(e,t,n){t=pn(n,t),t=nd(e,t,1),e=mt(e,t,1),t=he(),e!==null&&(ui(e,1,t),ke(e,t))}function J(e,t,n){if(e.tag===3)au(e,e,n);else for(;t!==null;){if(t.tag===3){au(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gt===null||!gt.has(i))){e=pn(n,e),e=id(t,e,1),t=mt(t,e,1),e=he(),t!==null&&(ui(t,1,e),ke(t,e));break}}t=t.return}}function Kh(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,$===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>K()-Kl?Mt(e,0):Jl|=n),ke(e,t)}function Ed(e,t){t===0&&(e.mode&1?(t=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):t=1);var n=he();e=et(e,t),e!==null&&(ui(e,t,n),ke(e,n))}function Bh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ed(e,n)}function bh(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(w(314))}i!==null&&i.delete(t),Ed(e,n)}var Id;Id=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Rh(e,t,n);ye=!!(e.flags&131072)}else ye=!1,W&&t.flags&1048576&&Cs(t,tr,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Vi(e,t),e=t.pendingProps;var r=sn(t,se.current);ln(t,n),r=Fl(null,t,i,e,r,n);var o=Wl();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(i)?(o=!0,$i(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xl(t),r.updater=_r,t.stateNode=r,r._reactInternals=t,Ro(t,i,e,n),t=zo(null,t,i,!0,o,n)):(t.tag=0,W&&o&&Ol(t),ce(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=qh(i),e=Le(i,e),r){case 0:t=Vo(null,t,i,e,n);break e;case 1:t=qa(null,t,i,e,n);break e;case 11:t=ba(null,t,i,e,n);break e;case 14:t=Ga(null,t,i,Le(i.type,e),n);break e}throw Error(w(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Le(i,r),Vo(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Le(i,r),qa(e,t,i,r,n);case 3:e:{if(ad(t),e===null)throw Error(w(387));i=t.pendingProps,o=t.memoizedState,r=o.element,Ds(e,t),rr(t,i,null,n);var l=t.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=pn(Error(w(423)),t),t=Xa(e,t,i,n,r);break e}else if(i!==r){r=pn(Error(w(424)),t),t=Xa(e,t,i,n,r);break e}else for(Se=ft(t.stateNode.containerInfo.firstChild),Ee=t,W=!0,Re=null,n=xs(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),i===r){t=tt(e,t,n);break e}ce(e,t,i,n)}t=t.child}return t;case 5:return Rs(t),e===null&&jo(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,Oo(i,r)?l=null:o!==null&&Oo(i,o)&&(t.flags|=32),ld(e,t),ce(e,t,l,n),t.child;case 6:return e===null&&jo(t),null;case 13:return ud(e,t,n);case 4:return Rl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=cn(t,null,i,n):ce(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Le(i,r),ba(e,t,i,r,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,l=r.value,V(nr,i._currentValue),i._currentValue=l,o!==null)if(ze(o.value,l)){if(o.children===r.children&&!ve.current){t=tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===i){if(o.tag===1){u=qe(-1,n&-n),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?u.next=u:(u.next=f.next,f.next=u),s.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Lo(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(w(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Lo(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ce(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,ln(t,n),r=De(r),i=i(r),t.flags|=1,ce(e,t,i,n),t.child;case 14:return i=t.type,r=Le(i,t.pendingProps),r=Le(i.type,r),Ga(e,t,i,r,n);case 15:return rd(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Le(i,r),Vi(e,t),t.tag=1,we(i)?(e=!0,$i(t)):e=!1,ln(t,n),js(t,i,r),Ro(t,i,r,n),zo(null,t,i,!0,e,n);case 19:return sd(e,t,n);case 22:return od(e,t,n)}throw Error(w(156,t.tag))};function Td(e,t){return qu(e,t)}function Gh(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,i){return new Gh(e,t,n,i)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qh(e){if(typeof e=="function")return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gl)return 11;if(e===yl)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wi(e,t,n,i,r,o){var l=2;if(i=e,typeof e=="function")ql(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Zt:return Dt(n.children,r,o,t);case ml:l=8,r|=8;break;case oo:return e=Ne(12,n,t,r|2),e.elementType=oo,e.lanes=o,e;case lo:return e=Ne(13,n,t,r),e.elementType=lo,e.lanes=o,e;case ao:return e=Ne(19,n,t,r),e.elementType=ao,e.lanes=o,e;case Lu:return Tr(n,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pu:l=10;break e;case ju:l=9;break e;case gl:l=11;break e;case yl:l=14;break e;case ot:l=16,i=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ne(l,n,t,r),t.elementType=e,t.type=i,t.lanes=o,t}function Dt(e,t,n,i){return e=Ne(7,e,i,t),e.lanes=n,e}function Tr(e,t,n,i){return e=Ne(22,e,i,t),e.elementType=Lu,e.lanes=n,e.stateNode={isHidden:!1},e}function to(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function no(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xh(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rr(0),this.expirationTimes=Rr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xl(e,t,n,i,r,o,l,a,u){return e=new Xh(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(o),e}function $h(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Ad(e){if(!e)return kt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(we(n))return Ts(e,n,t)}return t}function Cd(e,t,n,i,r,o,l,a,u){return e=Xl(n,i,!0,e,r,o,l,a,u),e.context=Ad(null),n=e.current,i=he(),r=yt(n),o=qe(i,r),o.callback=t??null,mt(n,o,r),e.current.lanes=r,ui(e,r,i),ke(e,i),e}function Ar(e,t,n,i){var r=t.current,o=he(),l=yt(r);return n=Ad(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(o,l),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=mt(r,t,l),e!==null&&(Ve(e,r,l,o),xi(e,r,l)),l}function hr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $l(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function ep(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function ea(e){this._internalRoot=e}Cr.prototype.render=ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Ar(e,t,null,null)};Cr.prototype.unmount=ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){Ar(null,e,null,null)}),t[$e]=null}};function Cr(e){this._internalRoot=e}Cr.prototype.unstable_scheduleHydration=function(e){if(e){var t=rs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&ls(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Or(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function su(){}function tp(e,t,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var s=hr(l);o.call(s)}}var l=Cd(t,i,e,0,null,!1,!1,"",su);return e._reactRootContainer=l,e[$e]=l.current,Bn(e.nodeType===8?e.parentNode:e),Rt(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var s=hr(u);a.call(s)}}var u=Xl(e,0,!1,null,null,!1,!1,"",su);return e._reactRootContainer=u,e[$e]=u.current,Bn(e.nodeType===8?e.parentNode:e),Rt(function(){Ar(t,u,n,i)}),u}function Nr(e,t,n,i,r){var o=n._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var a=r;r=function(){var u=hr(l);a.call(u)}}Ar(t,l,e,r)}else l=tp(n,t,e,r,i);return hr(l)}ns=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(kl(t,n|1),ke(t,K()),!(L&6)&&(fn=K()+500,Et()))}break;case 13:Rt(function(){var i=et(e,1);if(i!==null){var r=he();Ve(i,e,1,r)}}),$l(e,1)}};_l=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=he();Ve(t,e,134217728,n)}$l(e,134217728)}};is=function(e){if(e.tag===13){var t=yt(e),n=et(e,t);if(n!==null){var i=he();Ve(n,e,t,i)}$l(e,t)}};rs=function(){return U};os=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};vo=function(e,t,n){switch(t){case"input":if(co(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=wr(i);if(!r)throw Error(w(90));Ru(i),co(i,r)}}}break;case"textarea":Vu(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};Hu=Bl;Ju=Rt;var np={usingClientEntryPoint:!1,Events:[di,Kt,wr,Zu,Yu,Bl]},An={findFiberByHostInstance:Ct,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ip={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bu(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||ep,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{mr=Oi.inject(ip),Ye=Oi}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=np;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(t))throw Error(w(200));return $h(e,t,null,n)};Te.createRoot=function(e,t){if(!ta(e))throw Error(w(299));var n=!1,i="",r=Od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Xl(e,1,!1,null,null,n,!1,i,r),e[$e]=t.current,Bn(e.nodeType===8?e.parentNode:e),new ea(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=bu(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Rt(e)};Te.hydrate=function(e,t,n){if(!Or(t))throw Error(w(200));return Nr(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!ta(e))throw Error(w(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",l=Od;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Cd(t,null,e,1,n??null,r,!1,o,l),e[$e]=t.current,Bn(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Cr(t)};Te.render=function(e,t,n){if(!Or(t))throw Error(w(200));return Nr(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Or(e))throw Error(w(40));return e._reactRootContainer?(Rt(function(){Nr(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};Te.unstable_batchedUpdates=Bl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Or(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Nr(e,t,n,!1,i)};Te.version="18.2.0-next-9e3b772b8-20220608";function Nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nd)}catch(e){console.error(e)}}Nd(),Cu.exports=Te;var rp=Cu.exports,du=rp;io.createRoot=du.createRoot,io.hydrateRoot=du.hydrateRoot;const op="youtube#playlistItemListResponse",lp="afDe9f-4cl-RUARtNHYjDYJjGYA",ap="EAAaBlBUOkNESQ",up=[{kind:"youtube#playlistItem",etag:"GGyDdL4Fvow4Fs-FAqy4zHFSQbk",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS41NkI0NEY2RDEwNTU3Q0M2",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Miss Kobayashi's Dragon Maid Opening 2 FULL",description:"the second season is amazing!",thumbnails:{default:{url:"https://i.ytimg.com/vi/e-n41UJb19s/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/e-n41UJb19s/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/e-n41UJb19s/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/e-n41UJb19s/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/e-n41UJb19s/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:0,resourceId:{kind:"youtube#video",videoId:"e-n41UJb19s"},videoOwnerChannelTitle:"fhilippe marcel",videoOwnerChannelId:"UCod1zkJNSH1KFVNzoWeoF3Q"}},{kind:"youtube#playlistItem",etag:"_RqTR2nPavuMVQtaukRaaJ1qM_M",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4yODlGNEE0NkRGMEEzMEQy",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:'Kobayashi San Chi no Maid Dragon S Season 2 - OP / Opening 720p HD "Ai no Supreme" by fhána',description:`Música del Video / Vídeo Music:
"Ai no Supreme" by fhána

Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/ztQwb8fXgA0/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/ztQwb8fXgA0/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/ztQwb8fXgA0/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/ztQwb8fXgA0/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/ztQwb8fXgA0/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:1,resourceId:{kind:"youtube#video",videoId:"ztQwb8fXgA0"},videoOwnerChannelTitle:"FateMurillo7w7",videoOwnerChannelId:"UCYYQbN9Gfp8TxhbXbjyem_g"}},{kind:"youtube#playlistItem",etag:"E4GyeSQSxi8Jkg4fjSyVJeQOv-4",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4wMTcyMDhGQUE4NTIzM0Y5",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"【AIきりたん】高音厨音域テスト【NEUTRINO】",description:`合格
ろりっこの声じゃないのは気のせいです。

~原曲(本家様)~
https://youtu.be/f91sM4rI76w
https://nico.ms/sm21647485

Respect Original
□Original
木村わいP様@kimura_yp

□きりたん立ち絵：アルタウ様@arutau51
□調教：きりたんv0.100
□編集＆映像：

*No copyright infringement intended.*
※この動画から一切収益を受け取っておりません。
※I haven’t received any revenue from this video.

~イラスト~
https://seiga.nicovideo.jp/seiga/im8046973
~NEUTRINO~
https://n3utrino.work

---追記---
「ピッチ補正してるんじゃないか」とのコメントがあったので補足。
結論から言うと、後から別ソフトでのピッチ補正はしてません。
NEUTRINO側で設定できる項目を変えました。
「高音厨音域テスト」と一番相性の良かった組み合わせは
・楽譜のキーを-5
・PitchShift=1.3348398541
・FormantShift=1.0
※「NEUTRINO ver 0.102」の場合


#AIきりたん #NEUTRINO  #木村わいP #高音厨音域テスト`,thumbnails:{default:{url:"https://i.ytimg.com/vi/bmNaKW1JI58/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/bmNaKW1JI58/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/bmNaKW1JI58/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/bmNaKW1JI58/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/bmNaKW1JI58/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:2,resourceId:{kind:"youtube#video",videoId:"bmNaKW1JI58"},videoOwnerChannelTitle:"fostdin@",videoOwnerChannelId:"UCdoIuYI2-MJRJX06157aJoA"}},{kind:"youtube#playlistItem",etag:"gkqssyKOZ4D-sYsh4kiYXTvhDs4",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS41MjE1MkI0OTQ2QzJGNzNG",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Official髭男dism - イエスタデイ［Official Video］",description:`LISTEN & DL
https://lnk.to/TravelerID

映画『HELLO WORLD』主題歌

MORE INFO
https://officialhigedandism.ponycanyon.co.jp/

FOLLOW "HIGEDAN"
Website: http://higedan.com/
Instagram: https://www.instagram.com/officialhigedandism/?hl=ja
Twitter: https://twitter.com/officialhige
LINE: https://line.me/ti/p/%40higedan

MUSIC CREDIT
Words & Music: Satoshi Fujihara
Vocal & Piano: Satoshi Fujihara
Guitar & Chorus: Daisuke Ozasa
Bass & Chorus: Makoto Narazaki
Drums & Chorus: Masaki Matsuura
Arrangement: Koichi Tsutaya (agehasprings) & OFFICIAL HIGE DANDISM
Programming & All Other Instruments: Koichi Tsutaya (agehasprings)
Produced by Koichi Tsutaya (agehasprings)
Co-Operation: Kako Sekiguchi (agehasprings)
Strings: Daisuke Kadowaki Strings
Instrument Technician: Shota Kinebuchi (SOUND CREW)
Rec & Mix: Yasuhisa Kataoka
Mastered by Ted Jensen (STERLING SOUND)

VIDEO CREDIT
Director: Hidenobu Tanabe
Cinematographer: Yoshitaka Murakami
Lighting director: Motoki Tanaka
Grip: Takuma Yuki (Fine Films)
Special Effect: Hirokazu Uetake (GRIFFITH)
Marine Coordinator: Masaru Nakamura (TOTAL  AQUATIC'S)
Cast: Yoko Mukae / Mao Ito / Shino Miwa / Natsumi Iwade / Marino Ido / Toshio Ohara /  Sumire Segawa / Kei Sato / Kanon Takeshita
Production Assistant: Koki Yoshino (amidus / FIRSTORDER)
Producer: Kota Noguchi (amidus / FIRSTORDER)`,thumbnails:{default:{url:"https://i.ytimg.com/vi/DuMqFknYHBs/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/DuMqFknYHBs/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/DuMqFknYHBs/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/DuMqFknYHBs/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/DuMqFknYHBs/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:3,resourceId:{kind:"youtube#video",videoId:"DuMqFknYHBs"},videoOwnerChannelTitle:"Official髭男dism",videoOwnerChannelId:"UC3vg17IZ1IV73xx069jG44w"}},{kind:"youtube#playlistItem",etag:"VQs8ezu2Io4gSq9rzPo4K9noCEg",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4wOTA3OTZBNzVEMTUzOTMy",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Japanese soft song • Nandemonaiya - Mone Kamishiraishi (Mitsuha) | Lyrics Video",description:`Nandemonaiya - RADWIMPS•Mone Kamishiraishi (Mitsuha) Version | Lyrics

Don't forget to like & subscribe 😃


•Song                 : Nandemonaiya
•Original Artist     : RADWIMPS
•Cover                : Mone Kamishiraishi as Mitsuha

•Stream on Spotify : https://open.spotify.com/artist/68TWc4rraWK3C522KFdt0b?si=EGDj0g7RQ0-D8FJ1t7vXaQ

•Art :
https://wallpaperaccess.com/download/5120x2880-1693465


Follow Arwicial Vibes on :
   
   Spotify                      : https://spoti.fi/3AjYbUi
   Facebook                 : https://bit.ly/3oPhAr5
   Instagram                : https://bit.ly/3egXgKv
   TikTok                      : https://vt.tiktok.com/ZSxghR1n/

Donation :  https://ko-fi.com/arwicialvibes

⚠️Disclaimer : I do not own any song on my videos. I only promote the song on my videos.

© Copyright : This channel only for promotional purpose (Non profit). All content belongs to the original creators.

Tag : #Nandemonaiya #MoneKamishiraishi #Mitsuha #KimiNoNawa #Taki

Nandemonaiya
Nandemonaiya lyrics
Nandemonaiya Mitsuha
RADWIMPS
lyrics Nandemonaiya
Nandemonaiya cover
kimi no nawa
Mone Kamishiraishi`,thumbnails:{default:{url:"https://i.ytimg.com/vi/MD-RIcD_OFQ/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/MD-RIcD_OFQ/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/MD-RIcD_OFQ/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/MD-RIcD_OFQ/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/MD-RIcD_OFQ/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:4,resourceId:{kind:"youtube#video",videoId:"MD-RIcD_OFQ"},videoOwnerChannelTitle:"Arwicial Vibes",videoOwnerChannelId:"UCtQiXAWyLKt-xgW6qZGnFlQ"}},{kind:"youtube#playlistItem",etag:"K9dknnwzQkFRCBUygkJ77rtivkM",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4xMkVGQjNCMUM1N0RFNEUx",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"YOASOBI「たぶん」Official Music  Video",description:`ダウンロード＆ストリーミング配信中：https://orcd.co/adbvzwj
原作：『たぶん』(しなの 著)：https://monogatary.com/story/48324
--
原作小説集「夜に駆ける YOASOBI小説集」(双葉社)：https://www.amazon.co.jp/dp/4575243213/
--

Twitter:https://twitter.com/YOASOBI_staff

Music : Ayase (https://twitter.com/ayase_0404)
Vocal : ikura (https://twitter.com/ikutalilas)

Gt.：Rockwell(https://twitter.com/69l_rockwell)

Movie : 南條沙歩(https://twitter.com/south_jyooo)

★インスト音源はこちら
https://piapro.jp/yoasobi_staff
--
涙流すことすら無いまま
過ごした⽇々の痕⼀つも残さずに
さよならだ

⼀⼈で迎えた朝に
鳴り響く誰かの⾳
⼆⼈で過ごした部屋で
⽬を閉じたまま考えてた

悪いのは誰だ
分かんないよ
誰のせいでもない
たぶん

僕らは何回だってきっと
そう何年だってきっと
さよならと共に終わるだけなんだ
仕⽅がないよきっと
「おかえり」
思わず零れた⾔葉は
違うな

⼀⼈で迎えた朝に
ふと想う誰かのこと
⼆⼈で過ごした⽇々の
当たり前がまだ残っている

悪いのは君だ
そうだっけ
悪いのは僕だ
たぶん

これも⼤衆的恋愛でしょ
それは最終的な答えだよ
僕らだんだんとズレていったの
それもただよくある聴き慣れたストーリーだ
あんなに輝いていた⽇々にすら
埃は積もっていくんだ

僕らは何回だってきっと
そう何年だってきっと
さよならに続く道を歩くんだ
仕⽅がないよきっと
「おかえり」
いつもの様に
零れ落ちた

分かり合えないことなんてさ
幾らでもあるんだきっと
全てを許し合えるわけじゃないから
ただ、優しさの⽇々を
⾟い⽇々と感じてしまったのなら
戻れないから

僕らは何回だってきっと

僕らは何回だってきっと
そう何年だってきっと
さよならと共に終わるだけなんだ
仕⽅がないよきっと
「おかえり」
思わず零れた⾔葉は
違うな

それでも何回だってきっと
そう何年だってきっと
始まりに戻ることが出来たなら
なんて、思ってしまうよ
「おかえり」
届かず零れた⾔葉に
笑った

少し冷えた朝だ

--
#たぶん #Ayase #YOASOBI`,thumbnails:{default:{url:"https://i.ytimg.com/vi/8iuLXODzL04/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/8iuLXODzL04/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/8iuLXODzL04/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/8iuLXODzL04/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/8iuLXODzL04/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:5,resourceId:{kind:"youtube#video",videoId:"8iuLXODzL04"},videoOwnerChannelTitle:"Ayase / YOASOBI",videoOwnerChannelId:"UCvpredjG93ifbCP1Y77JyFA"}},{kind:"youtube#playlistItem",etag:"KXkZC0u4kTbPmtxoqo_mY-jguMI",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS41MzJCQjBCNDIyRkJDN0VD",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Yoasobi - Tabun たぶん | Lyrics",description:`Tabun - Yoasobi | Lyrics

🎧USE HEADPHONE FOR BETTER EXPERIENCE🎧


• Song             : Tabun
• Band             : Yoasobi
• Official MV   : https://youtu.be/8iuLXODzL04

• Stream "Tabun"
https://open.spotify.com/track/62Lv9WcrfzJqhvYDbilJy3?si=sBv6stcPSSizcnVztWnK4Q&utm_source=copy-link

• YOASOBI
   Youtube https://youtube.com/c/Ayase0404
   Spotify https://spoti.fi/2Kf6CM


Follow Arwicial Vibes on :
   
   Spotify                      : https://spoti.fi/3AjYbUi
   Facebook                 : https://bit.ly/3oPhAr5
   Instagram                : https://bit.ly/3egXgKv
   TikTok                      : https://vt.tiktok.com/ZSxghR1n/

Donation :  https://ko-fi.com/arwicialvibes

⚠️Disclaimer : I do not own any song on my videos. I only promote the song on my videos.

© Copyright : This channel only for promotional purpose (Non profit). All content belongs to the original creators.

-LYRICS-

Namida nagasu koto sura nai mama
Sugoshita hibi no ato hitotsu mo nokosazu ni
Sayonara da

Hitori de mukaeta asa ni
Narihibiku dareka no oto
Futari de sugoshita heya de
Me wo tojita mama kangaeteta

Warui no wa dare da
Wakannai yo
Dare no sei demo nai
Tabun

Bokura wa nankai datte kitto
Sou nannen datte kitto
Sayonara to tomo ni owaru dake nan da
Shikata ga nai yo kitto
"Okaeri"
Omowazu koboreta kotoba wa
Chigau na

Hitori de mukaeta asa ni
Futo omou dareka no koto
Futari de sugoshita hibi no
Atarimae ga mada nokotteiru

Warui no wa kimi da
Sou dakke
Warui no wa boku da
Tabun

Kore mo taishuuteki renai desho
Sore wa saishuuteki na kotae da yo
Bokura dandan to zurete itta no
Sore mo tada yoku arukiki nareta sutoorii da
Anna ni kagayaiteita hibi ni sura
Hokori wa tsumotte ikun da

Bokura wa nankai datte kitto
Sou nannen datte kitto
Sayonara ni tsuzuku michi wo arukun da
Shikata ga nai yo kitto
“Okaeri”
Itsumo no you ni
Koboreochita

Wakariaenai koto nante sa
Ikura demo arun da kitto
Subete wo yurushiaeru wake janai kara
Tada, yasashisa no hibi wo
Tsurai hibi to kanjite shimatta no nara
Modorenai kara

Bokura wa nankai datte kitto

Bokura wa nankai datte kitto
Sou nannen datte kitto
Sayonara to tomo ni owaru dake nan da
Shikata ga nai yo kitto
"Okaeri"
Omowazu koboreta kotoba wa
Chigau na

Sore demo nankai datte kitto
Sou nannen datte kitto
Hajimari ni modoru koto ga dekita nara
Nante, omotte shimau yo
“Okaeri”
Todokazu koboreta kotoba ni
Waratta
Sukoshi hieta asa da

Tag : #Yoasobi #Tabun #Ayase`,thumbnails:{default:{url:"https://i.ytimg.com/vi/aeI77nTNFfs/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/aeI77nTNFfs/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/aeI77nTNFfs/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/aeI77nTNFfs/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/aeI77nTNFfs/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:6,resourceId:{kind:"youtube#video",videoId:"aeI77nTNFfs"},videoOwnerChannelTitle:"Arwicial Vibes",videoOwnerChannelId:"UCtQiXAWyLKt-xgW6qZGnFlQ"}},{kind:"youtube#playlistItem",etag:"vggQBMG--wU_RY3Em_HBjusd3Sw",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5DQUNERDQ2NkIzRUQxNTY1",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Lagu Jepang Mellow | 天ノ弱 / Amanojaku (Lirik + Terjemahan Indonesia)",description:`Salah satu lagu yang bisa membuat kamu baper :')

_____________________________________________

Track Info :

♪ Judul lagu :  天ノ弱 / Amanojaku

♫ Original Artist : GUMI

♫ Tipe : Vocaloid Original Song

♫ Produser : 164 (music, lyrics), Takumi Torigoe (illust)

♫  Cover by : Akie秋绘

_____________________________________________

Judulnya bisa dibaca dengan dua cara. Kalau dibaca Ama no jaku (terpisah) maka artinya Heaven's Weakness. Tapi kalau judulnya dibaca Amanojaku (digabung) maka artinya A Born Coward.

_____________________________________________

Source :

⌕ Gambar : 
https://www.wallpapersbyte.com/wp-content/uploads/2015/06/Anime-Rain-Girl-Manga-Window-Reflection-Brown-Hair-WallpapersByte-com-1920x1080.jpg

⌕ Lirik :
abbigailkuu.blogspot.com

_____________________________________________

▶ Jika menurut kalian bagus makasih

▶ Jika ada kritik dan saran tolong disampaikan jangan sungkan

▶ Kalo punya lagu bagus komen dunk

_____________________________________________

© Copyrightst
I do not own the original song.This Channel is only for promotion purpose. All music belongs to the original creators.

_____________________________________________

Thanks for watching (^^)

#Akie秋绘 #Vocaloid #GUMI`,thumbnails:{default:{url:"https://i.ytimg.com/vi/RIddpBthe5s/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/RIddpBthe5s/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/RIddpBthe5s/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/RIddpBthe5s/sddefault.jpg",width:640,height:480}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:7,resourceId:{kind:"youtube#video",videoId:"RIddpBthe5s"},videoOwnerChannelTitle:"Kankusubs",videoOwnerChannelId:"UC5_mbC67fbAcpicYDjTD3lg"}},{kind:"youtube#playlistItem",etag:"93lzA9VPOusrsQXQw78Ox1tMJ48",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS45NDk1REZENzhEMzU5MDQz",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Lagu Jepang Yang Enak Didengar ~ YELL【Sub Indonesia】",description:`★❋ Website  :► https://animecuk.com/
► Lagu Jepang Yang Enak Didengar ~ YELL【Sub Indonesia】
► Download This Video / Mp3 : https://bit.ly/2yhfurq

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

►Song : YELL
►Artist : Ikimono Gakari
►Lyrics : -

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
★Nanas S.T.K★

★❋ Subscribe  :► https://www.youtube.com/nanasstk
★❋ Follow our Facebook :► https://www.facebook.com/Kenichi.Masaaki
Website : https://dewabatch.com/


▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
★COPYRIGHT / LICENSING★

►Feel free to contact me if anything is wrong: (anas.tanjul123@gmail.com)
- Request to remove a video
- Adding any kind of information which belongs to the video (audio OR visual - Illustrator, Composer, Publisher, purchase-links...)
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
►Don't Forget To Click Like, Share & Subsribe.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/vN-lhpyPBpc/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/vN-lhpyPBpc/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/vN-lhpyPBpc/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/vN-lhpyPBpc/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/vN-lhpyPBpc/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:8,resourceId:{kind:"youtube#video",videoId:"vN-lhpyPBpc"},videoOwnerChannelTitle:"Nanas S.T.K",videoOwnerChannelId:"UCh12YP46ysFcLHJBs1Wpljg"}},{kind:"youtube#playlistItem",etag:"IquCTYzOUrL3vIMY6W9psxQni6I",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5GNjNDRDREMDQxOThCMDQ2",snippet:{publishedAt:"2021-10-08T02:13:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Orange by 7!! - Shigatsu wa Kimi no Uso ED 2 - Lyrics",description:`Thanks for watching :)
Sorry if there are some mistakes in the lyrics/translation (・_・;)

Song: Orange
Artist: 7!!
https://www.youtube.com/watch?v=nf-L5R8U-Q0

Anime:
Shigatsu wa Kimi no Uso
Your Lie in April
https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso

Lyrics from:
http://www.animelyrics.com/anime/kimiuso/orenji.htm

DISCLAIMER: 
No copyright infringement intended, song and pics belong to the rightful owners.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/JdSpuTi9d8A/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/JdSpuTi9d8A/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/JdSpuTi9d8A/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/JdSpuTi9d8A/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/JdSpuTi9d8A/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:9,resourceId:{kind:"youtube#video",videoId:"JdSpuTi9d8A"},videoOwnerChannelTitle:"Cytharia",videoOwnerChannelId:"UCR44GBWJ8cFcpM1tGDcnUjQ"}},{kind:"youtube#playlistItem",etag:"xw68ABHMveBSXn1cB9cz3fkxnc0",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS40NzZCMERDMjVEN0RFRThB",snippet:{publishedAt:"2021-10-08T02:16:23Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"【オリジナルPV】 小さな恋のうた ／ MONGOL800(cover) by天月",description:`ニコニコ動画から転載 / From Nico Nico Douga
http://www.nicovideo.jp/watch/sm28889526

Original :MONGOL800
Covered Vocal : Amatsuki
----------------------------------------------------------------------------

MONGOL800さんの「小さな恋のうた」をアレンジして歌わせていただきました。 

◆Music：MONGOL800

●Arrange：fu-rin（mylist/33366589)
●Piano：うぃんぐ：（mylist/21779896)
●Mix：たると（mylist/33425615)
●Illust：みっ君（mylist/38346019)
●Movie: ぽぷりか(mylist/23591346)
●Animation：まごつき、おはじき

mylist/16016171
http://twitter.com/_amatsuki_

#天月
#小さな恋のうた`,thumbnails:{default:{url:"https://i.ytimg.com/vi/Woorod1gJ_w/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/Woorod1gJ_w/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/Woorod1gJ_w/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/Woorod1gJ_w/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/Woorod1gJ_w/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:10,resourceId:{kind:"youtube#video",videoId:"Woorod1gJ_w"},videoOwnerChannelTitle:"天月-あまつき-YouTube Official Channel",videoOwnerChannelId:"UCKZRL75vTjqbgd0WVdqF3Qg"}},{kind:"youtube#playlistItem",etag:"1nhyLoi5xpdKiaTVw3_DkCg0FZk",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5EMEEwRUY5M0RDRTU3NDJC",snippet:{publishedAt:"2021-10-08T02:16:28Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"YOASOBI - Racing Into The Night Lyrics (JPN_ROM_ENG)",description:`夜に駆ける
Racing Into The Night Lyrics
YOASOBI

Artist: YOASOBI
Vocal: Ikura
Composition: Ayase

Original Video:
https://www.youtube.com/watch?v=x8VYWazR5mE

---------------------------------------------
Song and pictures are NOT mine,
All rights belongs to the original creators

NO COPYRIGHT INFRINGEMENT INTENDED`,thumbnails:{default:{url:"https://i.ytimg.com/vi/xtfXl7TZTac/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/xtfXl7TZTac/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/xtfXl7TZTac/hqdefault.jpg",width:480,height:360}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:11,resourceId:{kind:"youtube#video",videoId:"xtfXl7TZTac"},videoOwnerChannelTitle:"rin rin",videoOwnerChannelId:"UCSbJl31aPbpVlOukk_JTfrA"}},{kind:"youtube#playlistItem",etag:"8OhI5Mc2eGWxy7JyhCgepVc8QkY",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4zMDg5MkQ5MEVDMEM1NTg2",snippet:{publishedAt:"2021-10-08T02:16:41Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"いきものがかり 『ブルーバード』Music Video",description:`いきものがかり 10th SINGLE「ブルーバード」
2008年7月9日発売
(テレビ東京系アニメーション「NARUTO-ナルト- 疾風伝」オープニングテーマ)

作詞・作曲：水野良樹　編曲：江口亮
弦編曲：クラッシャー木村
MusicVideo　Director：河谷英夫 

CD ▶  https://erj.lnk.to/ikimonogakari_cdLY
ダウンロード・ストリーミング ▶ https://erj.lnk.to/7nhymY

★★★

【最新LIVE DVD＆Blu-ray】
◆2021年11月3日(水・祝)発売
「いきものがかりの みなさん、こんにつあー!! THE LIVE 2021!!!」　

●グラデュエイション!!!盤　【完全生産限定盤】 (2BD+2DVD+2CD)　\\10,000 +税
■完全生産限定盤のご予約はこちらから： https://erj.lnk.to/nrEnu9　　　 

●通常盤[BD]　\\5,800 +税 
■通常盤BDのご予約はこちらから： https://erj.lnk.to/vSNYWS　　　　

●通常盤[DVD]　\\5,800 +税 
■通常盤DVDのご予約はこちらから： https://erj.lnk.to/0RPQHm　　

★★★

●いきものがかり OFFICIAL WEB SITE ▶ https://ikimonogakari.com/　
●オフィシャルホームページ：https://ikimonogakari.com/　
●Twitter
├いきものがかり：@IKIMONOofficial　
└水野良樹：@mizunoyoshiki
●Instagram
├吉岡聖恵：@kiyoe_yoshioka_official
└水野良樹：@mizunoyoshiki_teke
●LINE
└いきものがかり：@ikimonogakari
●note
└いきものがかり：https://note.com/ikimono_gakari　

●YouTube
├いきものがかり：https://www.youtube.com/channel/UCflAJoghlGeSkdz5eNIl-sg
├吉岡聖恵の毎日がどうよう日：
https://www.youtube.com/channel/UCkYiXHC34bAcoABMnfvXFAg　
└吉岡聖恵 Official YouTube Channel：
https://www.youtube.com/channel/UCORsEn7EYP4RedWO5CX0uOg/featured`,thumbnails:{default:{url:"https://i.ytimg.com/vi/KpsJWFuVTdI/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/KpsJWFuVTdI/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/KpsJWFuVTdI/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/KpsJWFuVTdI/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/KpsJWFuVTdI/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:12,resourceId:{kind:"youtube#video",videoId:"KpsJWFuVTdI"},videoOwnerChannelTitle:"いきものがかり",videoOwnerChannelId:"UCpS1hrIQnrvEyyUApthDTtQ"}},{kind:"youtube#playlistItem",etag:"nkrIlair7MzneZ5Ga1rdqZTeQP4",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS41Mzk2QTAxMTkzNDk4MDhF",snippet:{publishedAt:"2021-10-08T02:16:47Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"DAOKO × 米津玄師『打上花火』MUSIC VIDEO",description:`DAOKO × 米津玄師『打上花火』MUSIC VIDEO
──────
▶NEW Single：Daoko「月の花」（劇場版「美少女戦士セーラームーンCosmos」主題歌）＞https://sailor.lnk.to/tnhYT
▶NEXT Daoko LIVE  ＞https://daoko.jp/live/
──────
DAOKO × 米津玄師『打上花火』配信中！
▽iTunes
https://itunes.apple.com/jp/album/id1263790414?l=ja&ls=1&app=itunes

DAOKO × 米津玄師『打上花火』アニメーションMUSIC VIDEO
映画『打ち上げ花火、下から見るか？横から見るか？』主題歌
　

DAOKO  3rdシングル「打上花火」
2017年8月16日（水）発売

初回限定盤［CD+DVD］TFCC-89631　¥1,620（税込）
　イラスト描き下ろしジャケット
　DAOKO 2016 ”青色主義” TOUR at 赤坂BLITZ 2016.09.22 ライブ映像収録
通常盤［CD］TFCC-89632　¥1,296（税込）

＜収録曲＞
映画『打ち上げ花火、下から見るか？横から見るか？』主題歌
01. 打上花火／DAOKO × 米津玄師
　作詞・作曲：米津玄師
　Produced by 米津玄師

映画『打ち上げ花火、下から見るか？横から見るか？』挿入歌
02. Forever Friends／DAOKO
　作詞・作曲：REMEDIOS　

※通常盤のみの収録　『神撃のバハムートVIRGIN SOUL』エンディングテーマ
3. Cinderella step／DAOKO
　作詞・作曲　DAOKO　編曲　江島啓一（サカナクション）


＜映画『打ち上げ花火、下から見るか？横から見るか？』情報＞

声の出演：広瀬すず　菅田将暉
　　　宮野真守 ／ 浅沼晋太郎　豊永利行　梶裕貴
　　　三木眞一郎　花澤香菜　櫻井孝宏　根谷美智子　飛田展男　宮本充　立木文彦 ／ 松たか子
原作： 岩井俊二 　脚本 ：大根仁  総監督 ：新房昭之　
企画・プロデュース：川村元気　 監督：武内宣之 　キャラクターデザイン：渡辺明夫　音楽：神前暁　
アニメーション制作： シャフト
©2017「打ち上げ花火、下から見るか？横から見るか？」製作委員会
公開日：2017年８月１８日（金）
公式ＨＰ：http://uchiagehanabi.jp/




◯ Daoko（ダヲコ）プロフィール
Daoko（ダヲコ）1997 年⽣まれ、東京都出⾝。
15 歳の時にニコニコ動画へ投稿した楽曲で注⽬をあつめ、2015 年『DAOKO』でメジャーデビュー。
その後も⽶津⽞師との「打上花⽕」、岡村靖幸との「ステップアップLOVE」など、実⼒派アーティストとの共作を⾏いつつ、ソロでの活動も続ける。
⼩説の執筆、絵画個展の開催、女優業など多様なクリエイティヴ表現を続け、国内外で注⽬を集めている。
2019 年に個⼈事務所“てふてふ”を設⽴し、2020年には4th アルバム『anima』を発表。
2023年6月に２部作連続で公開予定の劇場版「美少女戦士セーラームーンCosmos」の主題歌を担当。書き下ろし楽曲「月の花」が5月26日(金)に先行配信決定！
現在は自主レーベル“てふてふ”にて活動中!

◯Official HP　https://daoko.jp
◯Official Blog　https://daoko.life
◯Official Twitter
DAOKO ( https://twitter.com/Daok0 )
DAOKO staff ( https://twitter.com/DAOKO_staff )
◯Official Instagram　https://www.instagram.com/daoko_official/
◯Official Fun Club”ひだまり” 　https://hidamari.daoko.jp/`,thumbnails:{default:{url:"https://i.ytimg.com/vi/-tKVN2mAKRI/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/-tKVN2mAKRI/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/-tKVN2mAKRI/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/-tKVN2mAKRI/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/-tKVN2mAKRI/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:13,resourceId:{kind:"youtube#video",videoId:"-tKVN2mAKRI"},videoOwnerChannelTitle:"daoko_jp",videoOwnerChannelId:"UCIzc1_X3OAFquArF3EOVeWw"}},{kind:"youtube#playlistItem",etag:"JNXTQiRT2mJjieM2sVgJ1BAIqZc",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5EQUE1NTFDRjcwMDg0NEMz",snippet:{publishedAt:"2021-10-08T02:17:17Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"僕らまだアンダーグラウンド - Eve MV",description:`Eve - "We're Still Underground" Music Video
Eve - "僕らまだアンダーグラウンド" Music Video

♢ Eve New Album 「おとぎ」 2019.02.06 IN STORES
web：http://evAleofficial-otogi.com/

iTunes
https://itunes.apple.com/jp/album/1449549681?l=ja&ls=1&app=itunes

Apple Music 
https://itunes.apple.com/jp/artist/1080967231

Spotify
https://open.spotify.com/artist/58oPVy7oihAEXE0Ott6JOf

♦ CD 

- slumber
- トーキョーゲットー
- アウトサイダー
- 迷い子
- やどりぎ
- アンビバレント
- 楓
- ラストダンス
- 僕らまだアンダーグラウンド
- 君に世界
- dawn


♦ DVD(初回限定盤) - Animation
-アウトサイダー 
-トーキョーゲットー
-アンビバレント
-ラストダンス

～otogi tour 2019～
3月25日（月）なんばHatch (OSAKA)
3月28日（木）DIAMOND HALL (NAGOYA)
4月29日（月・祝）Zepp DiverCity (TOKYO)
※全公演SOLD OUT

Eve
HP：http://eveofficial.com/
twitter：https://twitter.com/oO0Eve0Oo
youtube channel：https://goo.gl/jiNQkz
mail：oo0eve0oo@yahoo.co.jp

ANIMATION STAFF Credit

Planning & Produce: Genki Kawamura

Director: Nobutaka Yoda (10GAUGE)
Character Design: Naoyuki Asano
Art Director: Yuji Kaneko
Animation Production: WIT STUDIO

Producer: Wakana Okamura, Maiko Okada
Executive Producer: George Wada

inst：https://piapro.jp/t/-8cM

歌詞

僕らまだアンダーグラウンド

僕だけでは
貴方を満たせる事など無理かもしれない

だけど

君だけでは
どうにもこうにもできない事があるとするならば

ああでもない　こうでもないと
言葉だけが宙を舞って
また今日も夜を超えてしまったんだ

頑張れ とか 君の為 とか
押しつけがましい事も愛せれば

あれはだめ これもだめ だから
いつまでも子供扱いの僕ら

単純な事もできないな 何処にも逃がしてくれないや
自分を見失ってしまうわ
　
ろくでもないバケモノなの 美しくはにかんだ
その口を僕が今結んであげるから

ダーリン ダーリン 愛しておくれ
あの日から 僕らは共犯者だった
そんなんで突っ立ってないで ワン・ツーの合図を待って
眠れない夜を踊るのさ

ダーリン ダーリン 示しておくれ 
バイバイ そうさ今がその時なんだ
最高の舞台にしようぜ 胸の高鳴る方へ
喜劇的な世界が幕を開ける

僕らまだアンダーグラウンド

優柔不断な僕等
焦燥に溺れた声が
この胸に響くことなど
最初から信じてはいないが

ずっとこうやってたいな
そう思えば楽になって
いつの間にか終わってしまうわ

救いようのないバケモノなの それでも信じたいんだ
ああしょうがないな　ほっとけない僕が嫌いなのさ

ダーリン ダーリン 愛しておくれ
夢にみた 日々は僕の証だった
冗談で言ったんじゃないと 皆嗤っていたんだ
こんな街からさようなら

ダーリン ダーリン 示しておくれ 
今夜だけ そうさ今がその時なんだ
最高の舞台にしようぜ 胸の高鳴る方へ
喜劇的な世界が幕を開ける

最終章の合図だ
後悔はないか　君の出番の時のようだ

再上映はないから だから行かなくちゃ
もう目を背ける事はないから

ちょっと先の未来を　君と話がしたいんだ
つらくて笑ったあの日も　言えずにしまった想いも

この先僕らはずっと　不完全なままだけど
思い出の中にもう帰らないように

ダーリン ダーリン 愛しておくれ
夢にみた 日々は僕の証だった
冗談で言ったんじゃないと 皆嗤っていたんだ
こんな街からさようなら

ダーリン ダーリン 愛しておくれ
あの日から 僕らは共犯者だった
そんなんで突っ立ってないで ワン・ツーの合図を待って
眠れない夜を踊るのさ

ダーリン ダーリン 示しておくれ 
バイバイ そうさ今がその時なんだ
最高の舞台にしようぜ 胸の高鳴る方へ
喜劇的な世界が幕を開け

手放したんだっていいさ　最低な夜を超えようぜ
まだ見ぬ世界を潜っていける

僕らまだアンダーグラウンド`,thumbnails:{default:{url:"https://i.ytimg.com/vi/nBteO-bU78Y/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/nBteO-bU78Y/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/nBteO-bU78Y/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/nBteO-bU78Y/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/nBteO-bU78Y/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:14,resourceId:{kind:"youtube#video",videoId:"nBteO-bU78Y"},videoOwnerChannelTitle:"Eve",videoOwnerChannelId:"UCUXfRsEIJ9xO1DT7TbEWksw"}},{kind:"youtube#playlistItem",etag:"LUwABvzvPRYpvIQ4fT3Mrvuy8wc",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS41QTY1Q0UxMTVCODczNThE",snippet:{publishedAt:"2021-10-09T03:38:20Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"ロクでなし魔術講師と禁忌教典 ED『Precious You☆』Full",description:`ロクでなし魔術講師と禁忌教典 ED『Precious You☆』Full

歌：システィーナ＝フィーベル (藤田茜)
       ルミア＝ティンジェル (宮本侑芽)
       リィエル＝レイフォード (小澤亜李)`,thumbnails:{default:{url:"https://i.ytimg.com/vi/h2U7t6Mzh90/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/h2U7t6Mzh90/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/h2U7t6Mzh90/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/h2U7t6Mzh90/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/h2U7t6Mzh90/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:15,resourceId:{kind:"youtube#video",videoId:"h2U7t6Mzh90"},videoOwnerChannelTitle:"おそやま",videoOwnerChannelId:"UCo4IDlGCwcEbPnj7jYgu14A"}},{kind:"youtube#playlistItem",etag:"kvleBWEhJw73HmcecUYdVBFS4Ps",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4yMUQyQTQzMjRDNzMyQTMy",snippet:{publishedAt:"2021-10-09T03:38:27Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Christmas Festa",description:`Provided to YouTube by NexTone Inc.

Christmas Festa · エレン (CV.熊田茜音)

TVアニメ『転生したらスライムだった件 転スラ日記』オリジナルサウンドトラック「転生したら日記の音楽だった件」

Released on: 2021-06-23

Auto-generated by YouTube.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/K_9ncA_gSDs/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/K_9ncA_gSDs/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/K_9ncA_gSDs/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/K_9ncA_gSDs/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/K_9ncA_gSDs/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:16,resourceId:{kind:"youtube#video",videoId:"K_9ncA_gSDs"},videoOwnerChannelTitle:"Various Artists - Topic",videoOwnerChannelId:"UCAkMM77O0SVmhJodrp0NgNg"}},{kind:"youtube#playlistItem",etag:"WOd-leEYqMoedy3oYKFio-tgkB0",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4yMDhBMkNBNjRDMjQxQTg1",snippet:{publishedAt:"2021-12-08T15:01:10Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"ずっと真夜中でいいのに。『秒針を噛む』MV",description:`はじめまして。”ずっと真夜中でいいのに。”のACAね です。
Twitter：https://twitter.com/zutomayo  作りました。フォロー喜びます。
これから動画アップしていきたいと思います。
アレンジは ぬゆりさん、映像はWabokuさんです。
2020.08.05 mini ALBUM『朗らかな皮膚とて不服』でました:)
CD https://lnk.to/ZTMY_HHTH
Streaming/DL https://lnk.to/HHTH_DL
*For people who live outside of Japan, you can buy at CDJapan.

ずっと真夜中でいいのに。
『秒針を噛む』
Lyrics & Vocal : ACAね
Music :  ACAね×ぬゆり
Arrangement : ぬゆり
Animation  : Waboku

オフボーカル こちらでDLできます
http://piapro.jp/t/B_hn

■ライブ情報
クリーニングライブ「定期連絡の業務」
会場：幕張メッセ幕張イベントホール
8月5日(水）OPEN 18:00 / START 19:00　　※5月5日（火・祝）の振替公演
8月6日(木）OPEN 18:00 / START 19:00　　※5月6日（水・振休）の振替公演
https://zutomayo.com/news/200407/

■商品情報
1st FULL ALBUM『潜潜話』HisoHisoBanashi
2019.10.30 RELEASE
CD https://lnk.to/1stfullal
DIGITAL https://lnk.to/ZTMY_HHB
◉初回生産限定盤α[2CD] ¥4,500+税 / UPCH-29344
◉初回生産限定盤β[CD] ¥4,500+税 / UPCH-29345
◉通常盤[CD] ¥3,000+税 / UPCH-20532
01. 脳裏上のクラッカー
02. 勘冴えて悔しいわ
03. 居眠り遠征隊
04. ハゼ馳せる果てるまで
05. 蹴っ飛ばした毛布
06. Dear. Mr「F」
07. こんなこと騒動
08. 眩しいDNAだけ
09. ヒューマノイド
10. グラスとラムレーズン
11. 正義
12. 優しくLAST SMILE
13. 秒針を噛む
※収録曲全形態共通


ずっと真夜中でいいのに。 'ZUTOMAYO'
"ACAね"Twitter：https://twitter.com/zutomayo
Official Twitter : https://twitter.com/zutomayo_staff
HP：https://zutomayo.com`,thumbnails:{default:{url:"https://i.ytimg.com/vi/GJI4Gv7NbmE/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/GJI4Gv7NbmE/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/GJI4Gv7NbmE/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/GJI4Gv7NbmE/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/GJI4Gv7NbmE/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:18,resourceId:{kind:"youtube#video",videoId:"GJI4Gv7NbmE"},videoOwnerChannelTitle:"ずっと真夜中でいいのに。 ZUTOMAYO",videoOwnerChannelId:"UCv6P5nsS9rP4tDtFlqLU_QQ"}},{kind:"youtube#playlistItem",etag:"o4r4tZuzQethSaUDsLRAraceRPg",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4zRjM0MkVCRTg0MkYyQTM0",snippet:{publishedAt:"2022-01-10T13:53:52Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Kokoronashi Acoustic Version (by Hikaru Station) | Lyrics Video",description:`Japanese sad song • Kokoronashi  - Acoustic | Lyrics Video

USE HEADPHONES FOR BETTER EXPERIENCE


•Song              : Kokoronashi
•Artist               : Cyoucyo P
•Cover by        : Hikaru Station
•Official Cover : https://youtu.be/BLDXKkeCyaA

Support Hikaru Station :
 
YouTube : https://www.youtube.com/c/hikarustation
 Spotify    : https://open.spotify.com/artist/43CwK7mj1NRZuXaC9SO6Zj?si=S1bAHWb5RVCK2MuxqPr6tw

Follow Arwicial Vibes on :
   
   Spotify                      : https://spoti.fi/3AjYbUi
   Facebook                 : https://bit.ly/3oPhAr5
   Instagram                : https://bit.ly/3egXgKv
   TikTok                      : https://vt.tiktok.com/ZSxghR1n/

Donation :  https://ko-fi.com/arwicialvibes

⚠️Disclaimer : I do not own any song on my videos. I only promote the song on my videos.

© Copyright : This channel only for promotional purpose (Non profit). All content belongs to the original creators.

-LYRICS-

Nee, moshimo subete nagesuteraretara
Waratte ikiru koto ga raku ni naru no?
Mata mune ga itakunaru kara
Mou nani mo iwanai de yo

Nee, moshimo subete wasurerareta nara
Nakanai de ikiru koto mo raku ni naru no?
Demo sonna koto dekinai kara
Mou nani mo misenai de yo

Kimi ni dore dake chikazuite mo
Boku no shinzou wa hitotsu dake

Hidoi yo hidoi yo, mou isso boku no karada wo
Kowashite hikisaite suki na youni shite yo
Sakende mogaite mabuta wo harashite mo
Mada kimi wa boku no koto wo dakishimete hanasanai
Mou ii yo

Nee, moshimo boku no negai ga kanau nara
Kimi to onaji mono ga hoshii nda
Demo boku ni wa sonzai shinai kara
Jaa semete koko ni kite yo

Kimi ni dore dake aisarete mo
Boku no shinzou wa hitotsu dake

Tag : #HikaruStation #Kokoronashi #心做し`,thumbnails:{default:{url:"https://i.ytimg.com/vi/fWpbsFA_Ouk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/fWpbsFA_Ouk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/fWpbsFA_Ouk/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/fWpbsFA_Ouk/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/fWpbsFA_Ouk/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:19,resourceId:{kind:"youtube#video",videoId:"fWpbsFA_Ouk"},videoOwnerChannelTitle:"Arwicial Vibes",videoOwnerChannelId:"UCtQiXAWyLKt-xgW6qZGnFlQ"}},{kind:"youtube#playlistItem",etag:"KK8UUmG6675qkmaqIAic_G_Gnqg",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS45NzUwQkI1M0UxNThBMkU0",snippet:{publishedAt:"2022-01-10T13:54:02Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"【fleurishana】 Juang (Courage) -Indonesian FULL ver-",description:`SC ver: https://goo.gl/55VApr
Unduh mp3: https://goo.gl/eYs5Da
FB: http://www.facebook.com/fleurism
Vocal Only: https://soundcloud.com/fleurishana-yg-tersakiti/acapella-ver-juang-courage-indonesian-full-ver

- JUANG -

✿ Penyanyi: fleurishana
✿ Pensyair: Akbar Anshori (http://www.facebook.com/kyua.akkun)
✿ Penala: iMochi (http://www.youtube.com/CherryEvez)
✿ Penyelaras: Chiyolate (https://www.youtube.com/user/chiyolate)
✿ Ilustrator: Utsuru (http://www.facebook.com/utsuruu)

(iMochi dan Chiyolate buka komisi untuk menala dan menyelaraskan suaramu! Ayo buka docsnya https://docs.google.com/document/d/1SK999HM0jDqmNgPA5FugfiavjtxLYXv5Bqie2beW9ck/edit) 


- COURAGE -
Lagu Pembuka / Opening Theme Sword Art Online II

✎ Vokalis: Tomatsu Haruka
✎ Lirikis: Nori
✎ Komponis: Nori
✎ Aransemenis: Furukawa Takahiro

We don’t have anything except my voices, Indonesian lyrics, and the illustration. The song belongs to the respective owners.
.
== ✎ ✿ ✎ ==
.

P: Kenapa “Juang” bukan “Keberanian”?
J: “Kalian ingat? lagu Digimon, 'Butter-fly', menjadi 'Mimpi Tiada Akhir'?” -Akbar Anshori

✿

Halooo! o v o)/
Wow! Tak terasa, udah dua tahun ya sejak versi TV rilis (kalau di Youtube tepat setahun) ahaha. Maaf baru bisa rilis versi fullnya sekarang ;u;. Jika alasannya perlu dijelaskan, akan memakan space deskripsi ini jadi aku hanya ingin bilang, terima kasih sudah dengan sangat sabar menunggu dan selalu mendukung saya selama ini! (___ ___)

Semoga penantian teman-teman terbalaskan dengan baik dan cover ini bisa dinikmati, ya! :')

Ah ya, dalam waktu dekat ini aku akan membuka sesi Questions & Answers (istilah lainnya, Voice Meme)! Jadi, kalian boleh menanyakan apa sajaa padaku (maksimal tiga, ya!) dan aku akan jawab via suara yang akan kuunggah di akun Soundcloudku. Mengenai hal ini akan aku umumkan lebih detail (cara submit pertanyaan dsbnya) di video selanjutnya jaadii, silakan siapkan pertanyaan-pertanyaan kalian dan stay tuned untuk sesi Q&A, ya!

Sekali lagi, terima kasih untuk dukungan serta dorongannya selama ini. hiks. Mohon maklumi saya yang juga ada kesibukan di Real Life (_ _). Tapi saya tetap coba update untuk hobi ini ehehe. Terima kasih, ya! Semangat! Salam #MariTerusBerjuang ! ( /'  v ')/

== ✎ ✿ ✎ ==`,thumbnails:{default:{url:"https://i.ytimg.com/vi/Zl0j6sZc90Y/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/Zl0j6sZc90Y/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/Zl0j6sZc90Y/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/Zl0j6sZc90Y/sddefault.jpg",width:640,height:480}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:20,resourceId:{kind:"youtube#video",videoId:"Zl0j6sZc90Y"},videoOwnerChannelTitle:"fleurishana",videoOwnerChannelId:"UCsPPrEg62rHWGPFNK_7OF3A"}},{kind:"youtube#playlistItem",etag:"knioAd48wOv3l2hzS5FDHwfGg4E",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5DNzE1RjZEMUZCMjA0RDBB",snippet:{publishedAt:"2022-01-10T13:54:09Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"YOASOBI「あの夢をなぞって」 Official Music Video",description:`ダウンロード/ストリーミング配信はこちら：https://orcd.co/yoasobi_anoyumewonazotte
原作小説「夢の雫と星の花」(いしき蒼太 著)：https://monogatary.com/story/38869
--
原作小説集「夜に駆ける YOASOBI小説集」(双葉社)発売中
https://www.amazon.co.jp/dp/4575243213/
--
マンガ版「夢の雫と星の花」(原作：いしき蒼太 / 漫画：kanco)が単行本化決定！
2021年2月14日より全国書店にて順次発売。
https://t.co/33mjxXR4o2?amp=1
--
ダイハツ「タフト」"きっといい風”篇CMソング
--
フジテレビ系「とくダネ！」2020年6月度お天気コーナーMONTHLY SONG
--
Twitter:https://twitter.com/YOASOBI_staff

Music : Ayase (https://twitter.com/ayase_0404)
Vocal : ikura (https://twitter.com/ikutalilas)

Gt.solo：Rockwell(https://twitter.com/69l_rockwell)

Animation : 頃之介古論 (https://twitter.com/koron5623)

インスト音源はこちら
https://piapro.jp/yoasobi_staff
--
『あの夢をなぞって』
夜の空を飾る綺麗な花
街の声をぎゅっと光が包み込む
音の無い二人だけの世界で聞こえた言葉は
「好きだよ」

夢の中で見えた未来のこと
夏の夜、君と、並ぶ影が二つ
最後の花火が空に昇って消えたら
それを合図に

いつも通りの朝に
いつも通りの君の姿
思わず目を逸らしてしまったのは
どうやったって忘れられない君の言葉
今もずっと響いてるから

夜を抜けて夢の先へ
辿り着きたい未来へ
本当に？あの夢に、本当に？って今も
不安になってしまうけどきっと

今を抜けて明日の先へ
二人だけの場所へ
もうちょっと
どうか変わらないで
もうちょっと
君からの言葉
あの未来で待っているよ

誰も知らない
二人だけの夜
待ち焦がれていた景色と重なる
夏の空に未来と今
繋がる様に開く花火
君とここでほらあの夢をなぞる

見上げた空を飾る光が今
照らした横顔
そうずっとこの景色のために
そうきっとほら二つの未来が
今重なり合う

夜の中で君と二人
辿り着いた未来で
大丈夫想いはきっと大丈夫伝わる
あの日見た夢の先へ

今を抜けて明日の先で
また出会えた君へ
もうちょっと
どうか終わらないで
もうちょっと
ほら最後の花火が今
二人を包む

音の無い世界に響いた
「好きだよ」
--
#あの夢をなぞって #Ayase #YOASOBI`,thumbnails:{default:{url:"https://i.ytimg.com/vi/sAuEeM_6zpk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/sAuEeM_6zpk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/sAuEeM_6zpk/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/sAuEeM_6zpk/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/sAuEeM_6zpk/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:21,resourceId:{kind:"youtube#video",videoId:"sAuEeM_6zpk"},videoOwnerChannelTitle:"Ayase / YOASOBI",videoOwnerChannelId:"UCvpredjG93ifbCP1Y77JyFA"}},{kind:"youtube#playlistItem",etag:"WD8Ba3NuveNM93UWAkx8Lw73M2c",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS43MTI1NDIwOTMwQjIxMzNG",snippet:{publishedAt:"2022-01-23T13:46:23Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Tamaru Yamada - Ever Be My Love",description:"From SukaSuka Original OST",thumbnails:{default:{url:"https://i.ytimg.com/vi/bSKEqcinWMw/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/bSKEqcinWMw/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/bSKEqcinWMw/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/bSKEqcinWMw/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/bSKEqcinWMw/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:22,resourceId:{kind:"youtube#video",videoId:"bSKEqcinWMw"},videoOwnerChannelTitle:"Ghostory",videoOwnerChannelId:"UC_UWzvVpn0m2s_FdzKo4FWw"}},{kind:"youtube#playlistItem",etag:"PA9TNAHunSj66ZKwseRP-DT7r8g",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5DQ0MyQ0Y4Mzg0M0VGOEYw",snippet:{publishedAt:"2022-02-04T08:37:37Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"田所あずさ / 6thSingle - DEAREST DROP -  Music Video",description:`TVアニメ『終末なにしてますか？ 忙しいですか？ 救ってもらっていいですか？』OP
田所あずさのミュージックビデオ、フルサイズがついに公開！！

過去、ショートver等でアップされていた田所あずさのミュージックビデオ9曲が、3/20（火）24時から毎日1曲ずつ、9日間連続で公開されます。

Twitter：https://twitter.com/azusatadokoro
Blog：https://ameblo.jp/azusa-tadokoro
Facebook：https://www.facebook.com/tadokoroazusaofficial/
Official HP：http://tadokoroazusa.com/`,thumbnails:{default:{url:"https://i.ytimg.com/vi/94W5nENM0iM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/94W5nENM0iM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/94W5nENM0iM/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/94W5nENM0iM/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/94W5nENM0iM/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:23,resourceId:{kind:"youtube#video",videoId:"94W5nENM0iM"},videoOwnerChannelTitle:"Lantis Channel",videoOwnerChannelId:"UCpRh2xmGtaVhFVuyCB271pw"}},{kind:"youtube#playlistItem",etag:"dV2ewW9PQsO7AVfJFRhfoJYTD_s",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5DMkU4NTY1QUFGQTYwMDE3",snippet:{publishedAt:"2022-03-11T14:01:12Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"IGNITE (Fairlane Remix) - SACRA BEATS Singles",description:`Provided to YouTube by Sony Music Labels Inc.

IGNITE (Fairlane Remix) - SACRA BEATS Singles · Eir Aoi · Fairlane

IGNITE (Fairlane Remix) - SACRA BEATS Singles

℗ 2021 Sony Music Labels Inc.

Released on: 2021-10-29

Associated  Performer: Eir Aoi, Fairlane
Lyricist: Eir
Composer, Lyricist: Tomoyuki Ogawa

Auto-generated by YouTube.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/E4mHTs8T_hE/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/E4mHTs8T_hE/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/E4mHTs8T_hE/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/E4mHTs8T_hE/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/E4mHTs8T_hE/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:24,resourceId:{kind:"youtube#video",videoId:"E4mHTs8T_hE"},videoOwnerChannelTitle:"Eir Aoi - Topic",videoOwnerChannelId:"UCG5E8GexF7f2u44J3Rjn0fw"}},{kind:"youtube#playlistItem",etag:"PsxstjcJlJWyhrqsOHBPTpxrfOU",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4yQUE2Q0JEMTk4NTM3RTZC",snippet:{publishedAt:"2022-02-18T11:02:03Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"YOASOBI - 優しい彗星  / THE FIRST TAKE",description:`「THE FIRST TAKE」は、一発撮りのパフォーマンスを鮮明に切り取るYouTubeチャンネル。
ONE TAKE ONLY, ONE LIFE ONLY. 一発撮りで、音楽と向き合う。

第99回は、YOASOBIからボーカル・ikuraが登場。
今回披露する楽曲は、TVアニメ『BEASTARS』第2期のエンディングテーマとなっている「優しい彗星」。
『BEASTARS』原作者の板垣巴留氏がYOASOBIのために書き下ろした小説『獅子座流星群のままに』をもとに制作された本楽曲を、今回のために作られたスペシャルアレンジにのせてikuraが優しくも力強い歌声で一発撮りで披露する。

STREAMING&DOWNLOAD：https://lnk.to/k7LtoLrd
INSTRUMENTAL DOWNLOAD：https://piapro.jp/t/NqQv

■YOASOBI SNS
Official Site：https://www.yoasobi-music.jp/
Twitter：https://twitter.com/yoasobi_staff
ikura Instagram：https://www.instagram.com/lilasikuta/
Ayase Instagram：https://www.instagram.com/ayase_0404/
YouTube：https://www.youtube.com/channel/UCvpredjG93ifbCP1Y77JyFA

■「THE FIRST TAKE」SNS 
Official site：https://www.thefirsttake.jp/
Instagram：https://www.instagram.com/the_firsttake/
Twitter：https://twitter.com/The_FirstTake   
Tiktok：https://www.tiktok.com/@the_first_take

—  

白いスタジオに置かれた一本のマイク。

ここでのルールはただ一つ。
一発撮りのパフォーマンスをすること。
それ以外は、何をしてもいい。

一度きりのテイクで、何をみせてくれるだろうか。

一発撮りで、音楽と向き合う。
THE FIRST TAKE


A microphone and a white studio.

And 1 rule.
You’ve got 1 TAKE.
Perform anything you like.

Show us everything you’ve got for that 1 moment.

ONE TAKE ONLY, ONE LIFE ONLY.
THE FIRST TAKE


ikura from YOASOBI returns in our episode 99.
1 TAKE performance of “Yasashii Suisei”, an ending theme song to the TV animation BEASTARS 2nd Season. 
“Yasashii Suisei” was turned into music by the novel specially written for YOASOBI, Shishiza Ryuseigun no Mamani written by Paru Itagaki the manga artist of BEASTARS.
A special arranged music with ikura’s soulful yet gentle voice, performs in one take only for THE FIRST TAKE.


CREDITS  

—   

Creative Director / Art Director: Keisuke Shimizu 
Art Director: Kana Takarada 
Copywriter: Hiroshi Yamazaki 
Director of Photography: Kazuki Nagayama 
Lighting Director：Kazuhide Toya 
Producer: Kentaro Kinoshita
Stylist: Daisuke Fujimoto
Hair&Make: YOUCA`,thumbnails:{default:{url:"https://i.ytimg.com/vi/EaA6NlH80wg/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/EaA6NlH80wg/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/EaA6NlH80wg/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/EaA6NlH80wg/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/EaA6NlH80wg/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:25,resourceId:{kind:"youtube#video",videoId:"EaA6NlH80wg"},videoOwnerChannelTitle:"THE FIRST TAKE",videoOwnerChannelId:"UC9zY_E8mcAo_Oq772LEZq8Q"}},{kind:"youtube#playlistItem",etag:"_Q5Zceam1rqAQ8S09wB0waL3pqc",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS44Mjc5REFBRUE2MTdFRDU0",snippet:{publishedAt:"2022-03-14T17:05:12Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Arknights EP - [Crystallize]",description:`[Crystallize], the latest image song of Arknights, is now officially released with the efforts of both Monster Siren Records and Singer Inori Minase on her solo album [Starlight Museum]. Available on Spotify, Apple Music, YouTube Music, and AmazonMusic!

[Crystallize]
Singer: Inori Minase
Lyrics/Composer/Arrangement: Shuhei Yanagidate

Official Discord Server:
https://discordapp.com/invite/arknights

Official Twitter Account:
https://twitter.com/ArknightsEN

Official Facebook Page:
https://www.facebook.com/ArknightsGlobal

Official Instagram:
https://www.instagram.com/arknights_messenger_official/

Game Download:
https://www.arknights.global/

Arknights is a strategic RPG mobile game with a fantasy theme.

#Arknights #Yostar`,thumbnails:{default:{url:"https://i.ytimg.com/vi/2b1BiBSLCqg/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/2b1BiBSLCqg/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/2b1BiBSLCqg/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/2b1BiBSLCqg/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/2b1BiBSLCqg/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:26,resourceId:{kind:"youtube#video",videoId:"2b1BiBSLCqg"},videoOwnerChannelTitle:"Arknights Official - Yostar",videoOwnerChannelId:"UCR0J2NYGuC8epsa1O4DMmXQ"}},{kind:"youtube#playlistItem",etag:"1t5ceTnughVmTx4k5qq05QDLEao",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS43NDhFRTgwOTRERTU4Rjg3",snippet:{publishedAt:"2022-04-16T15:35:27Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"『無職転生 ～異世界行ったら本気だす～』第2クールノンクレジットEDムービー／EDテーマ：「風と行く道」大原ゆい子",description:`毎週日曜放送中
TVアニメ『無職転生 ～異世界行ったら本気だす～』
第2クールノンクレジットEDムービー
EDテーマ：「風と行く道」大原ゆい子(TOHO animation RECORDS)

[TVアニメ放送中]
TOKYO MX、BS11、KBS京都 毎週日曜24:00／サンテレビ 毎週日曜24:30
／テレビ愛知 毎週日曜25:35／毎週月曜25:00 J:テレ／AT-X 毎週月曜22:00 ※リピート放送 毎週水曜10:00、毎週金曜16:00
dアニメストア・ニコニコにて地上波同時先行配信／他動画配信サービスも順次配信

【キャスト】
ルーデウス：内山夕実　前世の男：杉田智和 
ロキシー：小原好美　エリス：加隈亜衣 　ルイジェルド：浪川大輔 
エリナリーゼ：田中理恵　タルハンド：大塚芳忠
キシリカ：井口裕香　オルステッド：津田健次郎 
ヒトガミ：くじら 

【スタッフ】
原作：理不尽な孫の手（MFブックス／KADOKAWA刊）
キャラクター原案：シロタカ　原作企画：フロンティアワークス
監督・シリーズ構成：岡本 学　助監督：平野宏樹　キャラクターデザイン：杉山和隆／髙橋瑞紀　サブキャラクターデザイン：齊藤佳子　美術監督：三宅昌和　色彩設計：土居真紀子　撮影監督：頓所信二　編集：三嶋章紀　音響監督：明田川 仁　音響効果：上野 励　音楽：藤澤慶昌　テーマソングプロデュース・歌唱：大原ゆい子　プロデュース：EGG FIRM　制作：スタジオバインド

#無職転生 #大原ゆい子 #アニメ 

http://mushokutensei.jp
©理不尽な孫の手/MFブックス/「無職転生」製作委員会`,thumbnails:{default:{url:"https://i.ytimg.com/vi/PINgF6rCuME/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/PINgF6rCuME/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/PINgF6rCuME/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/PINgF6rCuME/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/PINgF6rCuME/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:27,resourceId:{kind:"youtube#video",videoId:"PINgF6rCuME"},videoOwnerChannelTitle:"TOHO animation チャンネル",videoOwnerChannelId:"UC14Yc2Qv92DMuyNRlHvpo2Q"}},{kind:"youtube#playlistItem",etag:"yzwHbSerWjIQdzsvfsV1pdA-Bfw",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4zRDBDOEZDOUM0MDY5NEEz",snippet:{publishedAt:"2022-06-22T14:14:34Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Nightcore - 夢と葉桜 // Yume To Hazakura「 ヲタみん // Wotamin Cover 」Original song by: 青木月光 // Aoki Gekkoh",description:`▬▬▬▬▬▬▬▬❖Detail Info❖▬▬▬▬▬▬▬▬▬

Nightcore Version
♫ Song/Track
☛ Title : 夢と葉桜 // Yume To Hazakura
☛ Cover : ヲタみん // Wotamin
☛ Lyrics : 青木月光 // Aoki Gekkoh
☛ Composer : 青木月光 // Aoki Gekkoh
☛ Arrangement : 青木月光 // Aoki Gekkoh
☛ Original Vocal : 初音ミク // Hatsune Miku
☛ Anime : -

♫ Listen Original Song on Here:
【初音ミク】夢と葉桜【オリジナル曲】
➥ https://www.nicovideo.jp/watch/sm15034898
Release Original Song on July 17 2011

♫ Listen Original Wotamin Cover Song on Here:
➥ https://www.nicovideo.jp/watch/sm20506281

❖ Follow:
青木月光 // Aoki Gekkoh
➥ https://www.nicovideo.jp/user/22601884
➥ https://twitter.com/aoki_gekkoh

ヲタみん // Wotamin
➥ https://www.youtube.com/user/wotaminxx
➥ https://twitter.com/wotamin25
➥ http://www.nicovideo.jp/user/4496935

✎ illustration by NoriZC
➥ https://www.pixiv.net/en/artworks/58898122

❖ Follow me
Fanpage (FB) 
➥ https://goo.gl/gfmJEk

❖ Program Used
☛ After Effect + Audacity 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

If you don't want the song or illustration to appear on this channel, 
please send me an email and i'll delete it from my channel. 
This channel only for promotion.

✉ Contact Me: dailyans07@gmail.com
➥ For copyright issues

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

♡ Keep Enjoying Guys ♡
Thanks For Watching (≧◡≦)

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Tags:
#ansnightcore #nightcore #ansnc #nightcorejmusic #music #song #nightcoremusic #japanesemusic

Other Tags:
ans nightcore j-music, ans nightcore, ans nc, ans gaming, daily ans, ans daily anime, daily mikki, mikki music`,thumbnails:{default:{url:"https://i.ytimg.com/vi/N5HxbW_OcJI/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/N5HxbW_OcJI/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/N5HxbW_OcJI/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/N5HxbW_OcJI/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/N5HxbW_OcJI/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:28,resourceId:{kind:"youtube#video",videoId:"N5HxbW_OcJI"},videoOwnerChannelTitle:"Daily AnS",videoOwnerChannelId:"UCa_G98Swt2hVmKlj8_yWLdg"}},{kind:"youtube#playlistItem",etag:"CRZTsY-dc0DwoQJG8IU5CF0Vhbs",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5CMEQ2Mjk5NTc3NDZFRUNB",snippet:{publishedAt:"2022-07-24T12:19:59Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Nishino Kana - Torisetsu (Jpn/Rom/Eng LYRICS)",description:"No copyright infringement intended. This song does not belong to me.",thumbnails:{default:{url:"https://i.ytimg.com/vi/_jtUll4ZrOw/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/_jtUll4ZrOw/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/_jtUll4ZrOw/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/_jtUll4ZrOw/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/_jtUll4ZrOw/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:29,resourceId:{kind:"youtube#video",videoId:"_jtUll4ZrOw"},videoOwnerChannelTitle:"Yuri",videoOwnerChannelId:"UCkmJuMh-wTzoXcw6oKytckg"}},{kind:"youtube#playlistItem",etag:"Ke_uNiFhtziaSOpOXELtoP3oUP8",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS42MTI4Njc2QjM1RjU1MjlG",snippet:{publishedAt:"2022-10-11T11:35:43Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"奏（かなで） [Kanade] - Sukima Switch (Lyrics) by 粉ミルク",description:`映画のタイトル: 一週間 フレンズ (Isshukan Furenzu/One Week Friends)

Kanade by Sukima Switch Lyrics w/ Guitar and Piano
One Week Friends You Official Movie Sound Track
Available Subtitles: Thai, Korean, Chinese (Taiwan)
No Copyright Intended.

Credits to the following sources: 
(Cover Song) - https://www.youtube.com/watch?v=RMQgikROUUs
(Piano Background) - https://www.youtube.com/watch?v=NZPADQzxoZs
Original Song By: Sukima Switch (スキマスイッチ)`,thumbnails:{default:{url:"https://i.ytimg.com/vi/sZaLaWLb9wY/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/sZaLaWLb9wY/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/sZaLaWLb9wY/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/sZaLaWLb9wY/sddefault.jpg",width:640,height:480}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:30,resourceId:{kind:"youtube#video",videoId:"sZaLaWLb9wY"},videoOwnerChannelTitle:"Haruki Takahashi",videoOwnerChannelId:"UCMPfsAFBTWLM2GN9wd3hJKA"}},{kind:"youtube#playlistItem",etag:"hswWp9ZxpBUUjGoxot3GSvKf55Y",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS45RjNFMDhGQ0Q2RkFCQTc1",snippet:{publishedAt:"2022-10-11T11:36:10Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Dear Teardrop",description:`Provided to YouTube by NexTone Inc.

Dear Teardrop · Mia REGINA

Dear Teardrop

Released on: 2018-02-28

Auto-generated by YouTube.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:31,resourceId:{kind:"youtube#video",videoId:"W5JeaUkUbO4"},videoOwnerChannelTitle:"Mia REGINA - Topic",videoOwnerChannelId:"UCpi5jFHHpAvPLMxhOkztbXQ"}},{kind:"youtube#playlistItem",etag:"Ny1y1WrOVBNYCN9Tci2QAq9cWOw",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS40QTA3NTU2RkM1QzlCMzYx",snippet:{publishedAt:"2022-10-11T11:36:16Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Dear Teardrop",description:`Provided to YouTube by NexTone Inc.

Dear Teardrop · Mia REGINA

Dear Teardrop

Released on: 2018-02-28

Auto-generated by YouTube.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/W5JeaUkUbO4/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:32,resourceId:{kind:"youtube#video",videoId:"W5JeaUkUbO4"},videoOwnerChannelTitle:"Mia REGINA - Topic",videoOwnerChannelId:"UCpi5jFHHpAvPLMxhOkztbXQ"}},{kind:"youtube#playlistItem",etag:"LaRmCG7_HalJ17jiFELmtZWCNPs",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5BRjJDODk5REM0NjkzMUIy",snippet:{publishedAt:"2022-12-01T10:08:27Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"DIALOGUE＋「僕らが愚かだなんて誰が言った」Music Video",description:`5th Single「僕らが愚かだなんて誰が言った」Music Video
Listen&Download!（各配信サイト）→ https://lnk.to/bokuoro

2022年4月13日発売 　CD予約は…
初回限定盤→https://lnk.to/dialogue5thS
通常盤→https://lnk.to/dialogue5thT

「僕らが愚かだなんて誰が言った」
Words & Music：田淵智也
Arrangement：kz(livetune)
Vocal Direction：田淵智也
Recording Engineer：黒田かおり
Mixing Engineer：藤巻兄将
Recording Studio： PONY CANYON代々木Studio
Mixing Studio：studioMSR

＜MUSIC VIDEO STAFF＞
Director: 安井塑宇
Cinematographer: ナカムラ ユーキ
Lighting Director: 田中心樹
Production Manager: 掃部関ゆい（SEP）
Choreographer: 沢口かなみ
Hair & Make up：AICON
Stylist：柏木作夢
Producer: 加藤雅士（SEP）
Production: SEP


＜DIALOGUE＋メンバー＞
内山悠里菜（うちやまゆりな）
稗田寧々（ひえだねね）
守屋亨香（もりやきょうか）
緒方佑奈（おがたゆうな）
鷹村彩花（たかむらあやか）
宮原颯希（みやはらさつき）
飯塚麻結（いいづかまゆ）
村上まなつ（むらかみまなつ）

▶︎公式サイト：https://dialogue-music.jp
▶︎公式Twitter：https://twitter.com/DIALOGUE_staff
▶︎公式Instagram：https://www.instagram.com/dialogue_staff
▶公式TiKToK：https://www.tiktok.com/@dialogue_official

#ダイアローグ`,thumbnails:{default:{url:"https://i.ytimg.com/vi/blgxfEUgvVU/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/blgxfEUgvVU/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/blgxfEUgvVU/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/blgxfEUgvVU/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/blgxfEUgvVU/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:33,resourceId:{kind:"youtube#video",videoId:"blgxfEUgvVU"},videoOwnerChannelTitle:"DIALOGUE＋Official Channel",videoOwnerChannelId:"UCHds7LkFqXgM7s2usAyzi7g"}},{kind:"youtube#playlistItem",etag:"eKssfU3xSkDRWrJdPmDweyCcESo",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4zQzFBN0RGNzNFREFCMjBE",snippet:{publishedAt:"2023-01-15T02:31:19Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Miss Kobayashi's Dragon Maid   Opening FULL",description:"",thumbnails:{default:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:34,resourceId:{kind:"youtube#video",videoId:"OURZGkHTWCw"},videoOwnerChannelTitle:"fhilippe marcel",videoOwnerChannelId:"UCod1zkJNSH1KFVNzoWeoF3Q"}},{kind:"youtube#playlistItem",etag:"6hzqmLGwz61dXkrkLJC78YZg7Rw",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS45NkVENTkxRDdCQUFBMDY4",snippet:{publishedAt:"2023-01-15T02:31:26Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Miss Kobayashi's Dragon Maid   Opening FULL",description:"",thumbnails:{default:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/OURZGkHTWCw/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:35,resourceId:{kind:"youtube#video",videoId:"OURZGkHTWCw"},videoOwnerChannelTitle:"fhilippe marcel",videoOwnerChannelId:"UCod1zkJNSH1KFVNzoWeoF3Q"}},{kind:"youtube#playlistItem",etag:"kIKZITakVxLQrPg0ffVcHrQTJ5o",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5DNkMwRUI2MkI4QkI4NDFG",snippet:{publishedAt:"2023-01-23T01:40:01Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Darling in the franxx Ending 5 | Escape - XX:me | Original Lyrics, English Lyrics & Sub. Español",description:`Si te ha gustado el vídeo, puedes dejar tu me gusta ¡Puedes suscribirte y unirte a la familiar Rainbow! ♥

♥ Puedes ayudar al canal a crecer desde Patreon & PayPal ♥
Patreon: https://www.patreon.com/RainbowHeads515 (Con beneficios extra) 
PayPal: https://paypal.me/RainbowHeads

♥ Playlist del canal: https://open.spotify.com/playlist/3zo2vBafq3ozMwF0bputHH

--------------------------------♥ REDES SOCIALES ♥--------------------------------

•Facebook: 
https://www.facebook.com/rainbowheads515

•Instagram: 
https://www.instagram.com/rainbowheadslyrics/

Twitter:
https://twitter.com/RainbowHeads515

--------------------------------♥ Información ♥--------------------------------

Original AMV: https://www.youtube.com/watch?v=5uRBGwjZyrk

--------------------------------♥ Data ♥--------------------------------
"Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair"`,thumbnails:{default:{url:"https://i.ytimg.com/vi/wPS_x6FiBx0/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/wPS_x6FiBx0/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/wPS_x6FiBx0/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/wPS_x6FiBx0/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/wPS_x6FiBx0/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:36,resourceId:{kind:"youtube#video",videoId:"wPS_x6FiBx0"},videoOwnerChannelTitle:"RainbowHeads ",videoOwnerChannelId:"UCpR9O4WRJUbBqyu5ZNe7CdQ"}},{kind:"youtube#playlistItem",etag:"10MHVrOBnfKvA7tc_H_s25nbWEI",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5DRUQwODMxQzUyRTlGRkY3",snippet:{publishedAt:"2023-02-01T13:51:07Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"雨宮天 - PARADOX / THE FIRST TAKE",description:`「THE FIRST TAKE」は、一発撮りのパフォーマンスを鮮明に切り取るYouTubeチャンネル。 ONE TAKE ONLY, ONE LIFE ONLY. 一発撮りで、音楽と向き合う。

第132回は、声優・アーティストとして活躍し、声優アーティストユニット「TrySail」に所属する雨宮天が初登場。アニメ『七つの大罪』エリザベス役などで人気で、ソロの歌手としても11枚のシングルと３枚のアルバムを出すなど勢力的に活動している。
テレビアニメ「理系が恋に落ちたので証明してみた。」という作品で氷室菖蒲役を演じており、そのオープニングテーマとして起用された「PARADOX」を選曲。
ピアノとカルテットの特別なアレンジにて一発撮りに挑戦している。

Piano：荒幡亮平
1st Violin：城元絢花　
2nd Violin：石橋尚子　
Viola：金孝珍　
Cello：村中俊之　


STREAMING&DOWNLOAD：https://mra.lnk.to/Ft2QP

■Podcast公開中
雨宮天 / THE FIRST TAKE MUSIC（Podcast）
https://lnk.to/8cR49Q8E

■雨宮天 SNS 
Official Site：https://www.sonymusic.co.jp/artist/amamiyasora/
Twitter：https://twitter.com/sora_haruyasumi
YouTube：https://www.youtube.com/channel/UCc4xpujLxnUBSI1XX-SdldQ

 ■「THE FIRST TAKE」SNS 
Official site：https://www.thefirsttake.jp/ 
Instagram：https://www.instagram.com/the_firsttake/ 
Twitter：https://twitter.com/The_FirstTake    
Tiktok：https://www.tiktok.com/@the_first_take 
―

白いスタジオに置かれた一本のマイク。 

 ここでのルールはただ一つ。
一発撮りのパフォーマンスをすること。 
それ以外は、何をしてもいい。  

一度きりのテイクで、何をみせてくれるだろうか。
  
一発撮りで、音楽と向き合う。 
THE FIRST TAKE


A microphone and a white studio.

And 1 rule.
You’ve got 1 TAKE.
Perform anything you like.

Show us everything you’ve got for that 1 moment.

ONE TAKE ONLY, ONE LIFE ONLY.
THE FIRST TAKE

Episode 132 welcomes, Sora Amamiya, who is a voice actress and is also a member of the voice actress girl group TrySail. Sora is known for the voice for Elizabeth for the anime Seven Deadly Sins. As a solo artist, she has released 11 singles and 3 albums.
1 TAKE performance of “PARADOX”, an opening theme song for the anime Rike ga Koi ni Ochita no de Shoumeishitemita where she did the voice for the character Himuro Ayame.
Performs with the special arrangement with the piano and strings quartet, in one take only for THE FIRST TAKE.

CREDITS    
―     
Director / Creative Director: Keisuke Shimizu
Art Director: Kana Takarada
Director of Photography: Kazuki Nagayama
Lighting Director: Kazuhide Toya
Copywriter: Hiroshi Yamazaki
Producer: Kentaro Kinoshita
Stylist: Yuka Tomura
Hair & Make: Mai Ozeki

#THEFIRSTTAKE #雨宮天`,thumbnails:{default:{url:"https://i.ytimg.com/vi/z0uDEu-QQYM/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/z0uDEu-QQYM/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/z0uDEu-QQYM/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/z0uDEu-QQYM/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/z0uDEu-QQYM/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:37,resourceId:{kind:"youtube#video",videoId:"z0uDEu-QQYM"},videoOwnerChannelTitle:"THE FIRST TAKE",videoOwnerChannelId:"UC9zY_E8mcAo_Oq772LEZq8Q"}},{kind:"youtube#playlistItem",etag:"zTKEUEp0ISTE4-1_MVhOTsfQlaQ",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS41MzY4MzcwOUFFRUU3QzEx",snippet:{publishedAt:"2023-03-21T09:10:34Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Eromanga sensei Full Opening  (ClariS - Hitorigoto)",description:`Eromanga-sensei Opening Song and ClariS Music Video
ClariS - Hitorigoto`,thumbnails:{default:{url:"https://i.ytimg.com/vi/cytrbbSw7ec/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/cytrbbSw7ec/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/cytrbbSw7ec/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/cytrbbSw7ec/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/cytrbbSw7ec/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:38,resourceId:{kind:"youtube#video",videoId:"cytrbbSw7ec"},videoOwnerChannelTitle:"heigl_000",videoOwnerChannelId:"UCMqKj65dz-N7N_O6IhJctNg"}},{kind:"youtube#playlistItem",etag:"yS3TOBVigfD0z7Mwq6PvHntqJEQ",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4yQjZFRkExQjFGODk3RUFD",snippet:{publishedAt:"2023-04-30T17:03:48Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"DIALOGUE＋「おもいでしりとり」Music Video",description:`2021年5月19日(水)発売 4th Single「おもいでしりとり」Music Video
TVアニメ「ひげを剃る。そして女子高生を拾う。」オープニングテーマ
https://lnk.to/OmoideShiritori

Words & Music：田淵智也
Arrangement & Sound Direction：睦月周平
Bass：田淵智也
Drums：山本真央樹
Strings：今野均ストリングス
Guitar & Programming：睦月周平
Vocal Direction：田淵智也
Recording Engineer：中村悠二（VERYGOO）、黒田かおり
Mixing Engineer：中村悠二（VERYGOO）
Recording Studio：ROKU-st、PONY CANYON代々木Studio
Mixing Studio：ROKU-st

MUSIC VIDEO STAFF
Director: 安井塑宇
Cinematographer: 豊納正俊（SPICE）
Lighting Director: 池田智之
Production Manager: 市倉あおい（SEP）
Production Producer: 加藤雅士、塩見俊貴（SEP）
Choreographer: 沢口かなみ
Hair & Make up：AICON


4th Single「おもいでしりとり」
2021.05.19 RELEASE
https://dialogue-music.jp/discography/08_omoide-shiritori/

初回限定盤（CD+Blu-ray）PCCG-02010 / 3,900円（税込）
【封入特典】
・フルカラーブックレット（12P）
・特典Blu-ray Disc
　「おもいでしりとり」ミュージックビデオ・メイキング映像収録、
　「DIALOGUE＋JAM Vol.2 Live Digest Movie」
  ユニバーページ/よいまちカンターレ/夏の花火と君と青
  さよならレディーメイド/METAMORISER/星のダイアローグ/ ロケット/ドラマチックマーケットライド/ゆりしゅらしゅしゅしゅ

通常盤（CD only）PCCG-02011 / 1,400円（税込）
【特典】
・描きおろしアニメイラストアナザージャケット

【収録内容】
・おもいでしりとり
　作詞・作曲：田淵智也(UNISON SQUARE GARDEN)
　編曲：睦月周平
・シュガーロケット
　作詞：古屋真　作曲：広川恵一（MONACA）　編曲：和田たけあき
　音楽プロデュース：田淵智也(UNISON SQUARE GARDEN)
・おもいでしりとり（TVサイズ）
・おもいでしりとり（Instrumental）
・シュガーロケット（Instrumental）


＜DIALOGUE＋メンバー＞
内山悠里菜（うちやまゆりな）
稗田寧々（ひえだねね）
守屋亨香（もりやきょうか）
緒方佑奈（おがたゆうな）
鷹村彩花（たかむらあやか）
宮原颯希（みやはらさつき）
飯塚麻結（いいづかまゆ）
村上まなつ（むらかみまなつ）

▶︎公式サイト：https://dialogue-music.jp
▶︎公式Twitter：https://twitter.com/DIALOGUE_staff
▶︎公式Instagram：https://www.instagram.com/dialogue_staff
☆TVアニメ「ひげを剃る。そして女子高生を拾う。」公式サイト：http://higehiro-anime.com/

＃ダイアローグ`,thumbnails:{default:{url:"https://i.ytimg.com/vi/1GMar6F_ovY/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/1GMar6F_ovY/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/1GMar6F_ovY/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/1GMar6F_ovY/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/1GMar6F_ovY/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:39,resourceId:{kind:"youtube#video",videoId:"1GMar6F_ovY"},videoOwnerChannelTitle:"DIALOGUE＋Official Channel",videoOwnerChannelId:"UCHds7LkFqXgM7s2usAyzi7g"}},{kind:"youtube#playlistItem",etag:"SS9E44oMtF9Xxzmjw482GHkS4vU",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4yQUJFNUVCMzVDNjcxRTlF",snippet:{publishedAt:"2023-04-30T17:03:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"秦 基博 - 「ひまわりの約束」 Music Video",description:`[NEW!]「ひまわりの約束」SPリリックビデオ(コエカタマリン Ver.)
https://youtu.be/6ZKlfeJSCmU

2014年8月6日（水）発売Single「ひまわりの約束」
映画『STAND BY ME ドラえもん』主題歌

◇OFFICIAL WEB SITE：http://www.office-augusta.com/hata/
◇OFFICIAL Twitter：https://twitter.com/hata_official
◇YouTube OFFICIAL CHANNEL：https://www.youtube.com/channel/UCQPhAtgmWcbBwsG6MHh6v_w
◇OFFICIAL FAN CLUB  “Home Ground”：http://www.home-ground.tv/`,thumbnails:{default:{url:"https://i.ytimg.com/vi/rKsQ-3N-Bks/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/rKsQ-3N-Bks/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/rKsQ-3N-Bks/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/rKsQ-3N-Bks/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/rKsQ-3N-Bks/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:40,resourceId:{kind:"youtube#video",videoId:"rKsQ-3N-Bks"},videoOwnerChannelTitle:"hatamotohiroVEVO",videoOwnerChannelId:"UCjdW-GWlxmXV41dPARvK6YQ"}},{kind:"youtube#playlistItem",etag:"h-4dHtCReYE0DaIzqMaoQ6IB3lU",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS40QzRDOEU0QUYwNUIxN0M1",snippet:{publishedAt:"2023-05-01T08:05:23Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"[official]トルコ行進曲 - オワタ＼(^o^)／ feat.オワタP(AIきりたん)",description:`ガルナ(オワタP)です。
巷で話題のAIきりたんに、ボクの楽曲をカバーしてもらいました。この子すごい。

music,movie:ガルナ(オワタP)
illustrator:96きつね
vocal:東北きりたん

※ニコニコ動画：https://www.nicovideo.jp/watch/sm36486531
※がるなん.com：https://garunan.com/
※オフボーカル - https://www.pixiv.net/fanbox/creator/207987/post/942740
※カラオケJOYSOUND、DAMにて好評配信中。

Prev - *** / Next - (パラジクロロベンゼン -SOFT MIX-) https://youtu.be/9l1OygsJLu8`,thumbnails:{default:{url:"https://i.ytimg.com/vi/1ZLDCZQAgYU/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/1ZLDCZQAgYU/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/1ZLDCZQAgYU/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/1ZLDCZQAgYU/sddefault.jpg",width:640,height:480}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:41,resourceId:{kind:"youtube#video",videoId:"1ZLDCZQAgYU"},videoOwnerChannelTitle:"ガルナ(オワタP)",videoOwnerChannelId:"UCfVQDynjGGBJQDpdbGy0ffQ"}},{kind:"youtube#playlistItem",etag:"-tLqdl1KrQbIr1Mfq2h7Z0g9Ahc",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS41RTNBREYwMkI5QzU3RkY2",snippet:{publishedAt:"2023-05-01T08:05:24Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"いきものがかり 『ラストシーン』Music Video",description:`いきものがかり 32nd SINGLE「ラストシーン / ぼくらのゆめ」
2016年8月24日発売
(映画「四月は君の嘘」主題歌)

作詞・作曲：水野良樹　編曲：島田昌典
MusicVideo　Director：大喜多正毅

CD ▶  https://erj.lnk.to/ikimonogakari_cdLY
ダウンロード・ストリーミング ▶ https://erj.lnk.to/q7v18G

★★★

【最新LIVE DVD＆Blu-ray】
◆2021年11月3日(水・祝)発売
「いきものがかりの みなさん、こんにつあー!! THE LIVE 2021!!!」　

●グラデュエイション!!!盤　【完全生産限定盤】 (2BD+2DVD+2CD)　\\10,000 +税
■完全生産限定盤のご予約はこちらから： https://erj.lnk.to/nrEnu9　　　 

●通常盤[BD]　\\5,800 +税 
■通常盤BDのご予約はこちらから： https://erj.lnk.to/vSNYWS　　　　

●通常盤[DVD]　\\5,800 +税 
■通常盤DVDのご予約はこちらから： https://erj.lnk.to/0RPQHm　　

★★★

●いきものがかり OFFICIAL WEB SITE ▶ https://ikimonogakari.com/　
●オフィシャルホームページ：https://ikimonogakari.com/　
●Twitter
├いきものがかり：@IKIMONOofficial　
└水野良樹：@mizunoyoshiki
●Instagram
├吉岡聖恵：@kiyoe_yoshioka_official
└水野良樹：@mizunoyoshiki_teke
●LINE
└いきものがかり：@ikimonogakari
●note
└いきものがかり：https://note.com/ikimono_gakari　

●YouTube
├いきものがかり：https://www.youtube.com/channel/UCflAJoghlGeSkdz5eNIl-sg
├吉岡聖恵の毎日がどうよう日：
https://www.youtube.com/channel/UCkYiXHC34bAcoABMnfvXFAg　
└吉岡聖恵 Official YouTube Channel：
https://www.youtube.com/channel/UCORsEn7EYP4RedWO5CX0uOg/featured`,thumbnails:{default:{url:"https://i.ytimg.com/vi/qxY5WFJGvUk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/qxY5WFJGvUk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/qxY5WFJGvUk/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/qxY5WFJGvUk/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/qxY5WFJGvUk/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:42,resourceId:{kind:"youtube#video",videoId:"qxY5WFJGvUk"},videoOwnerChannelTitle:"いきものがかり",videoOwnerChannelId:"UCpS1hrIQnrvEyyUApthDTtQ"}},{kind:"youtube#playlistItem",etag:"bpJCMagFVtcp_TX7wNv-FisTxrc",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS5ENjI1QUI0MDI5NEQzODFE",snippet:{publishedAt:"2023-05-01T08:12:59Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"いきものがかり 『熱情のスペクトラム』Music Video",description:`いきものがかり 28th SINGLE「熱情のスペクトラム / 涙がきえるなら」
2014年10月15日発売
(TVアニメ『七つの大罪』オープニングテーマ)

作詞・作曲：水野良樹　編曲：近藤隆史・田中ユウスケ
MusicVideo　Director：川村ケンスケ

CD ▶  https://erj.lnk.to/ikimonogakari_cdLY
ダウンロード・ストリーミング ▶ https://erj.lnk.to/xbYaxA

★★★

【最新LIVE DVD＆Blu-ray】
◆2021年11月3日(水・祝)発売
「いきものがかりの みなさん、こんにつあー!! THE LIVE 2021!!!」　

●グラデュエイション!!!盤　【完全生産限定盤】 (2BD+2DVD+2CD)　\\10,000 +税
■完全生産限定盤のご予約はこちらから： https://erj.lnk.to/nrEnu9　　　 

●通常盤[BD]　\\5,800 +税 
■通常盤BDのご予約はこちらから： https://erj.lnk.to/vSNYWS　　　　

●通常盤[DVD]　\\5,800 +税 
■通常盤DVDのご予約はこちらから： https://erj.lnk.to/0RPQHm　　

★★★

●いきものがかり OFFICIAL WEB SITE ▶ https://ikimonogakari.com/　
●オフィシャルホームページ：https://ikimonogakari.com/　
●Twitter
├いきものがかり：@IKIMONOofficial　
└水野良樹：@mizunoyoshiki
●Instagram
├吉岡聖恵：@kiyoe_yoshioka_official
└水野良樹：@mizunoyoshiki_teke
●LINE
└いきものがかり：@ikimonogakari
●note
└いきものがかり：https://note.com/ikimono_gakari　

●YouTube
├いきものがかり：https://www.youtube.com/channel/UCflAJoghlGeSkdz5eNIl-sg
├吉岡聖恵の毎日がどうよう日：
https://www.youtube.com/channel/UCkYiXHC34bAcoABMnfvXFAg　
└吉岡聖恵 Official YouTube Channel：
https://www.youtube.com/channel/UCORsEn7EYP4RedWO5CX0uOg/featured`,thumbnails:{default:{url:"https://i.ytimg.com/vi/FLs2faYqoNU/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/FLs2faYqoNU/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/FLs2faYqoNU/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/FLs2faYqoNU/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/FLs2faYqoNU/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:43,resourceId:{kind:"youtube#video",videoId:"FLs2faYqoNU"},videoOwnerChannelTitle:"いきものがかり",videoOwnerChannelId:"UCpS1hrIQnrvEyyUApthDTtQ"}},{kind:"youtube#playlistItem",etag:"SzCPIpHY1CTlROnZkrxtmUR6yeQ",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS44QzVGQUU2QjE2NDgxM0M4",snippet:{publishedAt:"2023-05-12T04:09:01Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Dear Bride  Kana Nishino",description:"This is not a formal channel.",thumbnails:{default:{url:"https://i.ytimg.com/vi/kokq0n1BptQ/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/kokq0n1BptQ/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/kokq0n1BptQ/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/kokq0n1BptQ/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/kokq0n1BptQ/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:44,resourceId:{kind:"youtube#video",videoId:"kokq0n1BptQ"},videoOwnerChannelTitle:"西野カナ",videoOwnerChannelId:"UC5WihI_JXHIFL0h6cC4W8dw"}},{kind:"youtube#playlistItem",etag:"12ToWh6nxmRPMoG55KLcSvEbqRI",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4xMzgwMzBERjQ4NjEzNUE5",snippet:{publishedAt:"2023-05-21T01:00:29Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"Official髭男dism - Pretender［Official Video］",description:`LISTEN & DL「Pretender」
https://lnk.to/Pretender_

映画『コンフィデンスマンJP ロマンス編』主題歌

MORE INFO
https://officialhigedandism.ponycanyon.co.jp

FOLLOW "HIGEDAN"
Website: http://higedan.com/
Instagram: https://www.instagram.com/officialhigedandism/
Twitter: https://twitter.com/officialhige
LINE: https://line.me/ti/p/%40higedan

MUSIC CREDIT
Words & music & programing: Satoshi Fujihara
Arrangement: Official髭男dism
Vocal & piano: Satoshi Fujihara
Guitar & chorus: Daisuke Ozasa
Bass & chorus: Makoto Narazaki
Drums & chorus: Masaki Matsuura
Guitar technician: Tatsuya Mochiduki (Innovator Associates Inc.) 
Drums technician: Genki Wada
Recorded & mixed by Masahito Komori
Mastered by Ted Jensen (STERLING SOUND)

VIDEO CREDIT
Director: Takuto Shimpo (SEP,inc.)
Director of Photography: Koretaka Kamiike
Camera Assistant: Ryosuke Komatsu
Still Cameraman: Seiya Uehara
Producer: Kota Noguchi (AIR NOTES)
Coordinator: Riki Ryu / Asae Kondo`,thumbnails:{default:{url:"https://i.ytimg.com/vi/TQ8WlA2GXbk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/TQ8WlA2GXbk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/TQ8WlA2GXbk/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/TQ8WlA2GXbk/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/TQ8WlA2GXbk/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:45,resourceId:{kind:"youtube#video",videoId:"TQ8WlA2GXbk"},videoOwnerChannelTitle:"Official髭男dism",videoOwnerChannelId:"UC3vg17IZ1IV73xx069jG44w"}},{kind:"youtube#playlistItem",etag:"2a-0livdcySSV1TkLA17blOyC1I",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS4zMEQ1MEIyRTFGNzhDQzFB",snippet:{publishedAt:"2023-05-21T01:00:32Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"the peggies「センチメートル」Music Video",description:`the peggies(ザ・ペギーズ)NEW SINGLE「センチメートル」
2020.8.26リリース！
2020.7.18より単曲先行配信決定！

TVアニメ「彼女、お借りします」オープニングテーマ

特設サイトはこちら→https://thepeggies.jp/2020/

【リリース情報】
TVアニメ『彼女、お借りします』
2020 年7 月10 日（金）深夜1:25 より、MBS・TBS 系全国28 局ネット“スーパーアニメイズム”枠にて放送中！

the peggies
NEW SINGLE「センチメートル」
大好評 先行配信中！
ダウンロード・サブスクリプションはこちら→https://erj.lnk.to/iFTJBU

CD発売日：2020年8月26日
通常盤/CDのみ：税込1,320円
期間生産限定盤（アニメ盤）/CD＋DVD）：税込1,870円


オフィシャルサイト：http://thepeggies.jp/
公式Twitter：https://twitter.com/the_peggies
公式Instagram：https://www.instagram.com/the_peggies/

TVアニメ「彼女、お借りします」公式サイト：https://kanokari-official.com/
TVアニメ公式ツイッター：@kanokari_anime

--------------------------------------------------------------------------
プロフィール
the peggies(ザ・ペギーズ)
北澤ゆうほ(Vo＆Gt) 石渡マキコ(Ba) 大貫みく(Dr)からなる3人組ガールズバンド。
中学校の同級生で結成し高校時代から都内ライブハウスを中心に本格的に活動を開始。
2017年5月10日に「ドリーミージャーニー」でメジャーデビュー。
--------------------------------------------------------------------------`,thumbnails:{default:{url:"https://i.ytimg.com/vi/I1hLZ2OchZ8/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/I1hLZ2OchZ8/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/I1hLZ2OchZ8/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/I1hLZ2OchZ8/sddefault.jpg",width:640,height:480}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:46,resourceId:{kind:"youtube#video",videoId:"I1hLZ2OchZ8"},videoOwnerChannelTitle:"the peggies",videoOwnerChannelId:"UClamc--avjWDbdeUfroMEAw"}},{kind:"youtube#playlistItem",etag:"k9bfuDnfSob5NNQhJc2YqIcyBEQ",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS42Qzk5MkEzQjVFQjYwRDA4",snippet:{publishedAt:"2023-05-21T01:00:35Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"米津玄師  - Lemon  Kenshi Yonezu",description:`TBS金曜ドラマ「アンナチュラル」主題歌

New Single 『 Lemon 』2018.3.14 RELEASE
http://reissuerecords.net/special/lemon/

1. Lemon
2. クランベリーとパンケーキ
3. Paper Flower

DVD（「映像盤」のみ）
[ LIVE I 米津玄師 2018 LIVE / Fogbound 1.10日本武道館]
1.砂の惑星　2.春雷　3.LOSER　4.ゴーゴー幽霊船　5.爱丽丝　6.ピースサイン　7.打上花火　8.灰色と青（＋菅田将暉）
[ Music Video ]
9.春雷　10.灰色と青（＋菅田将暉）

▼商品形態
レモン盤 /初回限定(CD+レターセット)¥2,000+税
映像盤     /初回限定(CD+DVD)                ¥1,900+税
通常盤                       (CD)                          ¥1,200+税 

▼ 初回特典（３形態すべて共通）
「米津玄師 2018 LIVE Flamingo」ライブ応募シリアルナンバー封入
申込期間：2018.3.13(火)12:00 - 3.18(日)23:59
___________________________________________________________________

"Lemon"

TBS drama series ‘Unnatural’ theme song
March 14, 2018 release
http://reissuerecords.net/special/lemon/

1. Lemon
2. Cranberry & Pancake
3. Paper Flower

DVD（Included in Video Edition only）
Kenshi Yonezu LIVE I 2018 Fogbound Tour, Live at the Nippon Budokan, January 10th
1. Suna No Wakusei　2. Shunrai 　3. LOSER　4. Go Go Yuureisen 　5. Alice　6. Peace Sign　7. Uchiagehanabi 　8. Haiirotoao ( + Masaki Suda ) 
Music Video 　9. Shunrai 　10. Haiirotoao ( + Masaki Suda )

FORMATS AND EDITIONS
■  Lemon Edition /First Press Limited Edition (CD＋Letter Set) 2,000 yen (+tax)
■  Video Edition /First Press Limited Edition (CD+DVD) 1,900 yen (+tax)
■  Regular Edition (CD) 1,200 yen (+tax) 

▼ Special First Press Bonus:
Kenshi Yonezu 2018 Flamingo Tour concert ticket lottery entry serial number included in all 3 versions of first press limited editions.
Lottery Registration Period: March 13. 2018 (Tues) to March 18 (Sun) 11:59 pm
Valid in Japan only

▼Lemon Official Website
http://reissuerecords.net/special/lemon/
_______________________________________________
米津玄師 5th Album「STRAY SHEEP」2020.8.5 
https://reissuerecords.net/straysheep/

Package: 　 https://lnk.to/STRAYSHEEP_CD
Listen here:  https://smej.lnk.to/3OXrrlCi
________________________________________________
STRAY SHEEP – 5th album by Kenshi Yonezu, released August 5, 2020
https://reissuerecords.net/straysheep/

CD              :  https://lnk.to/STRAYSHEEP_CD
Listen here:  https://smej.lnk.to/3OXrrlCi
_________________________________________________________________________

Music and Produced by Kenshi Yonezu

Starring _ Kenshi Yonezu

                Nao Yoshigai
　　　　Anna Yokota
                Elodie Lenda
                Heyley
                Pyote
                Andrew Stevens
                Nickel
                Zouhdi Wassim
                Burney
                Mohamed・A
                Kevin Kinno
                  
Director _  Tomokazu  Yamada

Camera _ Keisuke Imamura
Lighting _Makoto Oda    
Stylist _ Tatsuya  Simada
Hair & Make-up _  Jun Matsumoto
Choreographer _  Nao Ysohigai
Casting _ Nanako Okuyama（DELPHI）

Colorlist _ Naotaka Takahashi
MA _ Yasuhito Izutsu

Production  Manager _ Tomohiro Hirota,Ryo Onodera,Yui Murai,Hajime Hiroki

Producer _  Koji  Takayama
Production _ TETRAPOT FILMS

________________________________________________________________ 
Twitter 　　　 https://twitter.com/hachi_08 
Instagram 　   https://www.instagram.com/hachi_08/ 
TikTok              https://www.tiktok.com/@kenshiyonezu_08 
YouTube           https://www.youtube.com/c/KenshiYonezuHACHI 

HP　　　   　 http://reissuerecords.net 
Merch　 　 　https://shop.kenshiyonezu.jp 

Staff Twitter 　  https://twitter.com/reissuerecords 
Staff Instagram  https://www.instagram.com/reissue_records`,thumbnails:{default:{url:"https://i.ytimg.com/vi/SX_ViT4Ra7k/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/SX_ViT4Ra7k/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/SX_ViT4Ra7k/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/SX_ViT4Ra7k/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/SX_ViT4Ra7k/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:47,resourceId:{kind:"youtube#video",videoId:"SX_ViT4Ra7k"},videoOwnerChannelTitle:"Kenshi Yonezu  米津玄師",videoOwnerChannelId:"UCUCeZaZeJbEYAAzvMgrKOPQ"}},{kind:"youtube#playlistItem",etag:"MmZp2uhfV7GQER7I830_1YY5Rus",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS41NTZEOThBNThFOUVGQkVB",snippet:{publishedAt:"2023-05-21T01:00:51Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"鈴木このみ「Redo」（「Re:ゼロから始める異世界生活」ＯＰテーマ）",description:`ＴＶアニメ「Re:ゼロから始める異世界生活」ＯＰテーマ
鈴木このみ「Redo」ショートMV

10thシングル「Redo」
2016年5月11日(水) 発売！
＜DVD付き初回限定盤＞
オリジナルフォトジャケット仕様
品番：ZMCZ-10603  価格：1,800円（本体）+税

《CD 収録内容》　
①TVアニメ「Re:ゼロから始める異世界生活」OPテーマ「Redo」
②タイトル未定（新曲）
③タイトル未定　Ａ           Instrumental含む、全5曲予定

《DVD》　※初回限定盤のみ
・OPテーマ「Redo」Music Clip    ・上記メインキング映像
・鈴木このみ 1stLiveTour2015 ～Nice to Me CHU!!!～ 東京公演(2015.10.12 @zepp tokyo)

＜通常盤＞
アニメイラストジャケット仕様
品番：ZMCZ-10604   価格：1,300円（本体）+税

《CD 収録内容》
①TVアニメ「Re:ゼロから始める異世界生活」OPテーマ「Redo」
②タイトル未定（新曲）
③タイトル未定　Ｂ           Instrumental含む、全5曲予定

発売・販売：株式会社KADOKAWA

オフィシャルサイト　http://konomi-suzuki.net/`,thumbnails:{default:{url:"https://i.ytimg.com/vi/0L02Zsr9Quc/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/0L02Zsr9Quc/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/0L02Zsr9Quc/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/0L02Zsr9Quc/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/0L02Zsr9Quc/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:48,resourceId:{kind:"youtube#video",videoId:"0L02Zsr9Quc"},videoOwnerChannelTitle:"KADOKAWAanime",videoOwnerChannelId:"UCY5fcqgSrQItPAX_Z5Frmwg"}},{kind:"youtube#playlistItem",etag:"uIXdzTpotDl6oeFGpIVYDzq7vJ0",id:"UEw2dUZuTEVsSjZwODVhMWdWX24temJ3WDVQdDdKc3dMMS43NERCMDIzQzFBMERCMEE3",snippet:{publishedAt:"2023-05-28T08:56:28Z",channelId:"UCnIN_8AZa9h2-HcpyeqA7NA",title:"PARADOX",description:"",thumbnails:{default:{url:"https://i.ytimg.com/vi/h2-m40yOiDI/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/h2-m40yOiDI/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/h2-m40yOiDI/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/h2-m40yOiDI/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/h2-m40yOiDI/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Raka Okto Ramadhan",playlistId:"PL6uFnLElJ6p85a1gV_n-zbwX5Pt7JswL1",position:49,resourceId:{kind:"youtube#video",videoId:"h2-m40yOiDI"},videoOwnerChannelTitle:"雨宮天公式YouTubeチャンネル",videoOwnerChannelId:"UCc4xpujLxnUBSI1XX-SdldQ"}}],sp={totalResults:51,resultsPerPage:50},cu={kind:op,etag:lp,nextPageToken:ap,items:up,pageInfo:sp};var Md={exports:{}},dp="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cp=dp,hp=cp;function Dd(){}function Pd(){}Pd.resetWarningCache=Dd;var pp=function(){function e(i,r,o,l,a,u){if(u!==hp){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Pd,resetWarningCache:Dd};return n.PropTypes=n,n};Md.exports=pp();var fp=Md.exports;const te=pr(fp);var mp=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var i,r,o;if(Array.isArray(t)){if(i=t.length,i!=n.length)return!1;for(r=i;r--!==0;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(o=Object.keys(t),i=o.length,i!==Object.keys(n).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,o[r]))return!1;for(r=i;r--!==0;){var l=o[r];if(!e(t[l],n[l]))return!1}return!0}return t!==t&&n!==n};const gp=pr(mp);var qo={exports:{}},jd;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/jd=function(){var e={},t={};return e.on=function(n,i){var r={name:n,handler:i};return t[n]=t[n]||[],t[n].unshift(r),r},e.off=function(n){var i=t[n.name].indexOf(n);i!==-1&&t[n.name].splice(i,1)},e.trigger=function(n,i){var r=t[n],o;if(r)for(o=r.length;o--;)r[o].handler(i)},e};var yp=jd,Xo={exports:{}},vp=function(t,n,i){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof n=="function"&&(i=n,n={}),n=n||{},i=i||function(){},o.type=n.type||"text/javascript",o.charset=n.charset||"utf8",o.async="async"in n?!!n.async:!0,o.src=t,n.attrs&&wp(o,n.attrs),n.text&&(o.text=""+n.text);var l="onload"in o?hu:kp;l(o,i),o.onload||hu(o,i),r.appendChild(o)};function wp(e,t){for(var n in t)e.setAttribute(n,t[n])}function hu(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function kp(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=vp,i=r(n);function r(o){return o&&o.__esModule?o:{default:o}}t.default=function(o){var l=new Promise(function(a){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){a(window.YT);return}else{var u=window.location.protocol==="http:"?"http:":"https:";(0,i.default)(u+"//www.youtube.com/iframe_api",function(f){f&&o.trigger("error",f)})}var s=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){s&&s(),a(window.YT)}});return l},e.exports=t.default})(Xo,Xo.exports);var _p=Xo.exports,$o={exports:{}},el={exports:{}},tl={exports:{}},ii=1e3,ri=ii*60,oi=ri*60,li=oi*24,Sp=li*365.25,Ep=function(e,t){t=t||{};var n=typeof e;if(n==="string"&&e.length>0)return Ip(e);if(n==="number"&&isNaN(e)===!1)return t.long?Ap(e):Tp(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function Ip(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),i=(t[2]||"ms").toLowerCase();switch(i){case"years":case"year":case"yrs":case"yr":case"y":return n*Sp;case"days":case"day":case"d":return n*li;case"hours":case"hour":case"hrs":case"hr":case"h":return n*oi;case"minutes":case"minute":case"mins":case"min":case"m":return n*ri;case"seconds":case"second":case"secs":case"sec":case"s":return n*ii;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function Tp(e){return e>=li?Math.round(e/li)+"d":e>=oi?Math.round(e/oi)+"h":e>=ri?Math.round(e/ri)+"m":e>=ii?Math.round(e/ii)+"s":e+"ms"}function Ap(e){return Ni(e,li,"day")||Ni(e,oi,"hour")||Ni(e,ri,"minute")||Ni(e,ii,"second")||e+" ms"}function Ni(e,t,n){if(!(e<t))return e<t*1.5?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}(function(e,t){t=e.exports=r.debug=r.default=r,t.coerce=u,t.disable=l,t.enable=o,t.enabled=a,t.humanize=Ep,t.names=[],t.skips=[],t.formatters={};var n;function i(s){var f=0,p;for(p in s)f=(f<<5)-f+s.charCodeAt(p),f|=0;return t.colors[Math.abs(f)%t.colors.length]}function r(s){function f(){if(f.enabled){var p=f,m=+new Date,v=m-(n||m);p.diff=v,p.prev=n,p.curr=m,n=m;for(var y=new Array(arguments.length),k=0;k<y.length;k++)y[k]=arguments[k];y[0]=t.coerce(y[0]),typeof y[0]!="string"&&y.unshift("%O");var P=0;y[0]=y[0].replace(/%([a-zA-Z%])/g,function(d,h){if(d==="%%")return d;P++;var g=t.formatters[h];if(typeof g=="function"){var _=y[P];d=g.call(p,_),y.splice(P,1),P--}return d}),t.formatArgs.call(p,y);var c=f.log||t.log||console.log.bind(console);c.apply(p,y)}}return f.namespace=s,f.enabled=t.enabled(s),f.useColors=t.useColors(),f.color=i(s),typeof t.init=="function"&&t.init(f),f}function o(s){t.save(s),t.names=[],t.skips=[];for(var f=(typeof s=="string"?s:"").split(/[\s,]+/),p=f.length,m=0;m<p;m++)f[m]&&(s=f[m].replace(/\*/g,".*?"),s[0]==="-"?t.skips.push(new RegExp("^"+s.substr(1)+"$")):t.names.push(new RegExp("^"+s+"$")))}function l(){t.enable("")}function a(s){var f,p;for(f=0,p=t.skips.length;f<p;f++)if(t.skips[f].test(s))return!1;for(f=0,p=t.names.length;f<p;f++)if(t.names[f].test(s))return!0;return!1}function u(s){return s instanceof Error?s.stack||s.message:s}})(tl,tl.exports);var Cp=tl.exports;(function(e,t){t=e.exports=Cp,t.log=r,t.formatArgs=i,t.save=o,t.load=l,t.useColors=n,t.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:a(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function n(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}t.formatters.j=function(u){try{return JSON.stringify(u)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}};function i(u){var s=this.useColors;if(u[0]=(s?"%c":"")+this.namespace+(s?" %c":" ")+u[0]+(s?"%c ":" ")+"+"+t.humanize(this.diff),!!s){var f="color: "+this.color;u.splice(1,0,f,"color: inherit");var p=0,m=0;u[0].replace(/%[a-zA-Z%]/g,function(v){v!=="%%"&&(p++,v==="%c"&&(m=p))}),u.splice(m,0,f)}}function r(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function o(u){try{u==null?t.storage.removeItem("debug"):t.storage.debug=u}catch{}}function l(){var u;try{u=t.storage.debug}catch{}return!u&&typeof process<"u"&&"env"in process&&(u={}.DEBUG),u}t.enable(l());function a(){try{return window.localStorage}catch{}}})(el,el.exports);var Op=el.exports,nl={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default})(nl,nl.exports);var Np=nl.exports,il={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default})(il,il.exports);var Mp=il.exports,rl={exports:{}},ol={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default})(ol,ol.exports);var Dp=ol.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Dp,i=r(n);function r(o){return o&&o.__esModule?o:{default:o}}t.default={pauseVideo:{acceptableStates:[i.default.ENDED,i.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[i.default.ENDED,i.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[i.default.ENDED,i.default.PLAYING,i.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default})(rl,rl.exports);var Pp=rl.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Op,i=f(n),r=Np,o=f(r),l=Mp,a=f(l),u=Pp,s=f(u);function f(v){return v&&v.__esModule?v:{default:v}}var p=(0,i.default)("youtube-player"),m={};m.proxyEvents=function(v){var y={},k=function(I){var A="on"+I.slice(0,1).toUpperCase()+I.slice(1);y[A]=function(x){p('event "%s"',A,x),v.trigger(I,x)}},P=!0,c=!1,d=void 0;try{for(var h=a.default[Symbol.iterator](),g;!(P=(g=h.next()).done);P=!0){var _=g.value;k(_)}}catch(C){c=!0,d=C}finally{try{!P&&h.return&&h.return()}finally{if(c)throw d}}return y},m.promisifyPlayer=function(v){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,k={},P=function(A){y&&s.default[A]?k[A]=function(){for(var x=arguments.length,M=Array(x),Q=0;Q<x;Q++)M[Q]=arguments[Q];return v.then(function(b){var de=s.default[A],Fe=b.getPlayerState(),zt=b[A].apply(b,M);return de.stateChangeRequired||Array.isArray(de.acceptableStates)&&de.acceptableStates.indexOf(Fe)===-1?new Promise(function(it){var It=function S(){var N=b.getPlayerState(),D=void 0;typeof de.timeout=="number"&&(D=setTimeout(function(){b.removeEventListener("onStateChange",S),it()},de.timeout)),Array.isArray(de.acceptableStates)&&de.acceptableStates.indexOf(N)!==-1&&(b.removeEventListener("onStateChange",S),clearTimeout(D),it())};b.addEventListener("onStateChange",It)}).then(function(){return zt}):zt})}:k[A]=function(){for(var x=arguments.length,M=Array(x),Q=0;Q<x;Q++)M[Q]=arguments[Q];return v.then(function(b){return b[A].apply(b,M)})}},c=!0,d=!1,h=void 0;try{for(var g=o.default[Symbol.iterator](),_;!(c=(_=g.next()).done);c=!0){var C=_.value;P(C)}}catch(I){d=!0,h=I}finally{try{!c&&g.return&&g.return()}finally{if(d)throw h}}return k},t.default=m,e.exports=t.default})($o,$o.exports);var jp=$o.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},i=yp,r=s(i),o=_p,l=s(o),a=jp,u=s(a);function s(p){return p&&p.__esModule?p:{default:p}}var f=void 0;t.default=function(p){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,y=(0,r.default)();if(f||(f=(0,l.default)(y)),m.events)throw new Error("Event handlers cannot be overwritten.");if(typeof p=="string"&&!document.getElementById(p))throw new Error('Element "'+p+'" does not exist.');m.events=u.default.proxyEvents(y);var k=new Promise(function(c){if((typeof p>"u"?"undefined":n(p))==="object"&&p.playVideo instanceof Function){var d=p;c(d)}else f.then(function(h){var g=new h.Player(p,m);return y.on("ready",function(){c(g)}),null})}),P=u.default.promisifyPlayer(k,v);return P.on=y.on,P.off=y.off,P},e.exports=t.default})(qo,qo.exports);var Lp=qo.exports;const xp=pr(Lp);var Rp=Object.defineProperty,Up=Object.defineProperties,Vp=Object.getOwnPropertyDescriptors,pu=Object.getOwnPropertySymbols,zp=Object.prototype.hasOwnProperty,Fp=Object.prototype.propertyIsEnumerable,fu=(e,t,n)=>t in e?Rp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ll=(e,t)=>{for(var n in t||(t={}))zp.call(t,n)&&fu(e,n,t[n]);if(pu)for(var n of pu(t))Fp.call(t,n)&&fu(e,n,t[n]);return e},al=(e,t)=>Up(e,Vp(t)),Wp=(e,t,n)=>new Promise((i,r)=>{var o=u=>{try{a(n.next(u))}catch(s){r(s)}},l=u=>{try{a(n.throw(u))}catch(s){r(s)}},a=u=>u.done?i(u.value):Promise.resolve(u.value).then(o,l);a((n=n.apply(e,t)).next())});function Qp(e,t){var n,i;if(e.videoId!==t.videoId)return!0;const r=((n=e.opts)==null?void 0:n.playerVars)||{},o=((i=t.opts)==null?void 0:i.playerVars)||{};return r.start!==o.start||r.end!==o.end}function mu(e={}){return al(ll({},e),{height:0,width:0,playerVars:al(ll({},e.playerVars),{autoplay:0,start:0,end:0})})}function Zp(e,t){return e.videoId!==t.videoId||!gp(mu(e.opts),mu(t.opts))}function Yp(e,t){var n,i,r,o;return e.id!==t.id||e.className!==t.className||((n=e.opts)==null?void 0:n.width)!==((i=t.opts)==null?void 0:i.width)||((r=e.opts)==null?void 0:r.height)!==((o=t.opts)==null?void 0:o.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var Hp={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},Jp={videoId:te.string,id:te.string,className:te.string,iframeClassName:te.string,style:te.object,title:te.string,loading:te.oneOf(["lazy","eager"]),opts:te.objectOf(te.any),onReady:te.func,onError:te.func,onPlay:te.func,onPause:te.func,onEnd:te.func,onStateChange:te.func,onPlaybackRateChange:te.func,onPlaybackQualityChange:te.func},Qi=class extends ne.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=t=>{var n,i;return(i=(n=this.props).onReady)==null?void 0:i.call(n,t)},this.onPlayerError=t=>{var n,i;return(i=(n=this.props).onError)==null?void 0:i.call(n,t)},this.onPlayerStateChange=t=>{var n,i,r,o,l,a,u,s;switch((i=(n=this.props).onStateChange)==null||i.call(n,t),t.data){case Qi.PlayerState.ENDED:(o=(r=this.props).onEnd)==null||o.call(r,t);break;case Qi.PlayerState.PLAYING:(a=(l=this.props).onPlay)==null||a.call(l,t);break;case Qi.PlayerState.PAUSED:(s=(u=this.props).onPause)==null||s.call(u,t);break}},this.onPlayerPlaybackRateChange=t=>{var n,i;return(i=(n=this.props).onPlaybackRateChange)==null?void 0:i.call(n,t)},this.onPlayerPlaybackQualityChange=t=>{var n,i;return(i=(n=this.props).onPlaybackQualityChange)==null?void 0:i.call(n,t)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const t=al(ll({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=xp(this.container,t),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(n=>{this.props.title&&n.setAttribute("title",this.props.title),this.props.loading&&n.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var t;(t=this.internalPlayer)==null||t.getIframe().then(n=>{this.props.id?n.setAttribute("id",this.props.id):n.removeAttribute("id"),this.props.iframeClassName?n.setAttribute("class",this.props.iframeClassName):n.removeAttribute("class"),this.props.opts&&this.props.opts.width?n.setAttribute("width",this.props.opts.width.toString()):n.removeAttribute("width"),this.props.opts&&this.props.opts.height?n.setAttribute("height",this.props.opts.height.toString()):n.removeAttribute("height"),this.props.title?n.setAttribute("title",this.props.title):n.setAttribute("title","YouTube video player"),this.props.loading?n.setAttribute("loading",this.props.loading):n.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var t,n,i,r;if(typeof this.props.videoId>"u"||this.props.videoId===null){(t=this.internalPlayer)==null||t.stopVideo();return}let o=!1;const l={videoId:this.props.videoId};if((n=this.props.opts)!=null&&n.playerVars&&(o=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(l.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(l.endSeconds=this.props.opts.playerVars.end)),o){(i=this.internalPlayer)==null||i.loadVideoById(l);return}(r=this.internalPlayer)==null||r.cueVideoById(l)},this.refContainer=t=>{this.container=t},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return Wp(this,null,function*(){Yp(e,this.props)&&this.updatePlayer(),Zp(e,this.props)&&(yield this.resetPlayer()),Qp(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return ne.createElement("div",{className:this.props.className,style:this.props.style},ne.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},Mr=Qi;Mr.propTypes=Jp;Mr.defaultProps=Hp;Mr.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var gu=Mr;const Kp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC";function Bp(){const[e,t]=ne.useState("00:00"),[n,i]=ne.useState(0),[r,o]=ne.useState(null),[l,a]=ne.useState(0),[u,s]=ne.useState(!1),[f,p]=ne.useState(0),[m,v]=ne.useState(0),[y,k]=ne.useState(cu.items),[P,c]=ne.useState(!0),[d,h]=ne.useState(""),[g,_]=ne.useState(""),[C,I]=ne.useState(!1),[A,x]=ne.useState(!1);en.useEffect(()=>{const O=()=>{I(window.pageYOffset>500)};return window.addEventListener("scroll",O),()=>{window.removeEventListener("scroll",O)}},[]);const M=O=>{o(O.target),m==0&&(O.target.setVolume(50),v(50)),p(O.target.getDuration())},Q=O=>{if(O.data===gu.PlayerState.PLAYING){const R=setInterval(()=>{t(b(r.getCurrentTime())),i(Math.floor(r.getCurrentTime()))},1e3);a(R)}else clearInterval(l);Fe()},b=O=>{O=Number(O);var R=Math.floor(O/3600),ee=Math.floor(O%3600/60),me=Math.floor(O%3600%60),vn=R>0?R+":":"",Je=ee>=0?ee<10?"0"+ee+":":ee+":":"0:",Ft=me>=0?me<10?"0"+me:+me:"";return vn+Je+Ft},de=()=>{let O=!u;u?r.pauseVideo():r.playVideo(),s(O)};en.useEffect(()=>()=>clearInterval(l),[l]);const Fe=()=>{s(!0),i(0),t("00:00")},zt=O=>{x(!0),h(O),Fe()},it=()=>{let R=y.filter(ee=>ee.snippet.position===d.snippet.position+1);h(R[0]),Fe()},It=()=>{let R=y.filter(ee=>ee.snippet.position===d.snippet.position-1);h(R[0]),Fe()},S=O=>{g!=O?_(O):_("normal")},N=()=>{let O=y;if(g=="shuffle"){const R=Math.floor(Math.random()*50)+1;let ee=O.filter(me=>me.snippet.position===R);h(ee[0])}else if(g=="replay")r.seekTo(0);else if(g=="normal"){let R=O.filter(ee=>ee.snippet.position===d.snippet.position+1);h(R[0])}Fe()};en.useEffect(()=>{setTimeout(()=>{k(cu.items),c(!1)},2e3)},[]);const D={width:"560",height:"315",playerVars:{autoplay:1}};return P==!1?E.jsxs(E.Fragment,{children:[C&&E.jsx("div",{className:"bg-[rgba(255,255,255,0.2)] p-2 rounded text-2xl font-bold fixed bottom-4 right-4 cursor-pointer",onClick:()=>{window.scrollTo({top:0})},children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",children:E.jsx("path",{fill:"white",d:"M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"})})}),E.jsxs("div",{className:"bg-black rounded w-full p-4 text-white flex gap-4",children:[E.jsx(gu,{videoId:d.snippet.resourceId.videoId,opts:D,onReady:M,onStateChange:Q,onEnd:N}),E.jsxs("div",{className:`grow bg-[rgba(255,255,255,0.1)] p-2 rounded flex md:flex-row flex-col gap-4 sticky top-0 left-0 ${A?"flex":"hidden"}`,children:[E.jsx("div",{className:"shrink-0 flex md:justify-start justify-center",children:E.jsx("img",{src:d?d.snippet.thumbnails.high.url:Kp,alt:d?d.snippet.title:"Loading...",className:"h-[200px]"})}),E.jsxs("div",{className:"md:text-left text-center",children:[E.jsx("h3",{className:"font-bold text-2xl text-slate-300",children:d?d.snippet.title:"Loading..."}),E.jsx("p",{className:"text-sm my-2",children:d?d.snippet.videoOwnerChannelTitle:"Loading..."}),E.jsxs("div",{className:"flex items-center md:justify-start justify-center gap-12 my-4",children:[E.jsx("div",{className:"text-base cursor-pointer",onClick:()=>S("shuffle"),children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",children:E.jsx("path",{fill:`${g=="shuffle"?"rgb(14 165 233)":"white"}`,d:"M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"})})}),E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx("div",{className:"rotate-180 text-3xl hover:bg-[rgba(255,255,255,0.3)] w-10 h-10 flex items-center justify-center rounded cursor-pointer",onClick:()=>It(),children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512",children:E.jsx("path",{fill:"white",d:"M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"})})}),E.jsx("div",{className:"w-10 h-10 rounded flex items-center justify-center shrink-0 text-3xl cursor-pointer hover:bg-[rgba(255,255,255,0.3)]",onClick:()=>de(),id:"start-btn",children:u?E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512",children:E.jsx("path",{fill:"white",d:"M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"})}):E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512",children:E.jsx("path",{fill:"white",d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"})})}),E.jsx("div",{className:"text-3xl hover:bg-[rgba(255,255,255,0.3)] w-10 h-10 flex items-center justify-center rounded cursor-pointer",onClick:()=>it(),children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512",children:E.jsx("path",{fill:"white",d:"M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"})})})]}),E.jsx("div",{className:"text-base cursor-pointer",onClick:()=>S("replay"),children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",children:E.jsx("path",{fill:`${g=="replay"?"rgb(14 165 233)":"white"}`,d:"M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"})})})]}),E.jsxs("div",{className:"w-full",children:[E.jsxs("div",{className:"",children:[E.jsx("input",{type:"range",className:"w-full",name:"track",id:"",min:"0",max:f,value:n||0,onChange:O=>{r.seekTo(O.target.value),s(!0)}}),E.jsxs("div",{className:"flex w-full grow justify-between",children:[E.jsx("p",{children:e}),E.jsx("p",{children:b(f)})]})]}),E.jsxs("div",{className:"flex gap-2 mt-4",children:[m<1?E.jsx(E.Fragment,{children:E.jsxs("div",{className:"flex gap-2 shrink-0",children:[E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:E.jsx("path",{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"})}),E.jsxs("p",{children:[m," %"]})]})}):E.jsx(E.Fragment,{children:E.jsxs("div",{className:"flex gap-2 shrink-0",children:[E.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:[E.jsx("path",{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"}),E.jsx("path",{d:"M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"})]}),E.jsxs("p",{children:[m," %"]})]})}),E.jsx("input",{type:"range",className:"w-full",name:"volume",id:"",min:"0",max:"100",onChange:O=>{r.setVolume(O.target.value),v(parseInt(O.target.value))}})]})]})]})]})]}),E.jsx("div",{className:"rounded w-full p-4 text-white",children:E.jsx("div",{className:"flex flex-col gap-4",children:y.map(O=>E.jsxs("div",{className:"flex gap-4 items-center bg-[rgba(255,255,255,0.1)] p-2 cursor-pointer rounded shadow-md shadow-sky-500/10 group",onClick:()=>zt(O),children:[E.jsx("p",{className:"group-hover:hidden block w-8 text-center",children:O.snippet.position+1}),E.jsx("button",{className:"group-hover:flex hidden w-8 text-center justify-center",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:E.jsx("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",clipRule:"evenodd"})})}),E.jsxs("div",{className:"text-base",children:[E.jsx("p",{className:"font-bold",children:O.snippet.title}),E.jsx("p",{className:"text-sm",children:O.snippet.videoOwnerChannelTitle})]})]},O.id))})})]}):E.jsxs("p",{children:["Loading... . . . ",P]})}function bp(){return E.jsx("div",{className:"flex",children:E.jsx("main",{className:"w-full flex flex-col gap-4",children:E.jsx(Bp,{})})})}io.createRoot(document.getElementById("root")).render(E.jsx(ne.StrictMode,{children:E.jsx(bp,{})}));
