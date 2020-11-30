(()=>{"use strict";class t{constructor(t){this.name=t.name,this.id=t.id}}class e{constructor(t){this.title=t.title,this.description=t.description,this.dueDate=new Date(t.dueDate),this.priority=t.priority,this.projectId=t.projectId,this.id=t.id}}const n=[],r=[],a=[new t({name:"Default",id:0}),new t({name:"Feed the cat",id:1})],o=[new e({title:"Buy cat food",description:"I go to the store and buy cat food",dueDate:"2019-05-14",priority:"medium",projectId:1,id:0}),new e({title:"Buy a cat",description:"I can get it for free though probably",dueDate:"2031-01-24",priority:"low",projectId:1,id:1}),new e({title:"Feed it",description:"I position the cat next to the cat food",dueDate:"2040-01-28",priority:"high",projectId:1,id:2})];function i(t=!1){let e;e=t?{projects:a,todos:o}:{projects:n,todos:r},localStorage.setItem("data",JSON.stringify(e))}function u(t){return n.find((e=>e.id==t))}function c(t){let e=[];return r.forEach((n=>{n.projectId==t&&e.push(n)})),e}function d(t){return r.find((e=>e.id==t))}function s(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function l(t){s(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function h(t){s(1,arguments);var e=l(t);return!isNaN(e)}var f={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function m(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var g,p={date:m({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:m({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:m({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},w={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function v(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=r.match(i);if(!u)return null;var c,d=u[0],s=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(d))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(d))return n}(s),c=t.valueCallback?t.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(d.length)}}}const b={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof f[t]?f[t]:1===e?f[t].one:f[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:p,formatRelative:function(t,e,n,r){return w[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(g={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(g.matchPattern);if(!a)return null;var o=a[0],i=n.match(g.parsePattern);if(!i)return null;var u=g.valueCallback?g.valueCallback(i[0]):i[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(o.length)}}),era:v({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:v({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:v({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:v({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function T(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function C(t,e){s(2,arguments);var n=l(t).getTime(),r=T(e);return new Date(n+r)}function S(t,e){s(2,arguments);var n=T(e);return C(t,-n)}function D(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const M=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return D("yy"===e?r%100:r,e.length)},x=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):D(n+1,2)},k=function(t,e){return D(t.getUTCDate(),e.length)},q=function(t,e){return D(t.getUTCHours()%12||12,e.length)},P=function(t,e){return D(t.getUTCHours(),e.length)},E=function(t,e){return D(t.getUTCMinutes(),e.length)},j=function(t,e){return D(t.getUTCSeconds(),e.length)},U=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return D(Math.floor(r*Math.pow(10,n-3)),e.length)};var L=864e5;function W(t){s(1,arguments);var e=1,n=l(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function Y(t){s(1,arguments);var e=l(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=W(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=W(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function O(t){s(1,arguments);var e=Y(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=W(n);return r}var N=6048e5;function I(t,e){s(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:T(a),i=null==n.weekStartsOn?o:T(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=l(t),c=u.getUTCDay(),d=(c<i?7:0)+c-i;return u.setUTCDate(u.getUTCDate()-d),u.setUTCHours(0,0,0,0),u}function z(t,e){s(1,arguments);var n=l(t,e),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:T(i),c=null==a.firstWeekContainsDate?u:T(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(r+1,0,c),d.setUTCHours(0,0,0,0);var h=I(d,e),f=new Date(0);f.setUTCFullYear(r,0,c),f.setUTCHours(0,0,0,0);var m=I(f,e);return n.getTime()>=h.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function F(t,e){s(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:T(a),i=null==n.firstWeekContainsDate?o:T(n.firstWeekContainsDate),u=z(t,e),c=new Date(0);c.setUTCFullYear(u,0,i),c.setUTCHours(0,0,0,0);var d=I(c,e);return d}var X=6048e5;function H(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+D(o,2)}function Q(t,e){return t%60==0?(t>0?"-":"+")+D(Math.abs(t)/60,2):B(t,e)}function B(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+D(Math.floor(a/60),2)+n+D(a%60,2)}const G={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return M(t,e)},Y:function(t,e,n,r){var a=z(t,r),o=a>0?a:1-a;return"YY"===e?D(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):D(o,e.length)},R:function(t,e){return D(Y(t),e.length)},u:function(t,e){return D(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return x(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){s(1,arguments);var n=l(t),r=I(n,e).getTime()-F(n,e).getTime();return Math.round(r/X)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):D(a,e.length)},I:function(t,e,n){var r=function(t){s(1,arguments);var e=l(t),n=W(e).getTime()-O(e).getTime();return Math.round(n/N)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):D(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):k(t,e)},D:function(t,e,n){var r=function(t){s(1,arguments);var e=l(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/L)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):D(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return D(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return D(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return D(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return q(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):P(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):E(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):j(t,e)},S:function(t,e){return U(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return Q(a);case"XXXX":case"XX":return B(a);case"XXXXX":case"XXX":default:return B(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return Q(a);case"xxxx":case"xx":return B(a);case"xxxxx":case"xxx":default:return B(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+H(a,":");case"OOOO":default:return"GMT"+B(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+H(a,":");case"zzzz":default:return"GMT"+B(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return D(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return D((r._originalDate||t).getTime(),e.length)}};function _(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function A(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const R={p:A,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return _(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",_(a,e)).replace("{{time}}",A(o,e))}};var $=6e4;function J(t){return t.getTime()%$}function V(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?($+J(e))%$:J(e);return n*$+r}var K=["D","DD"],Z=["YY","YYYY"];function tt(t){return-1!==K.indexOf(t)}function et(t){return-1!==Z.indexOf(t)}function nt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ot=/^'([^]*?)'?$/,it=/''/g,ut=/[a-zA-Z]/;function ct(t){return t.match(ot)[1].replace(it,"'")}function dt(){document.querySelector("#project").textContent=""}function st(){document.querySelector("#todo").textContent=""}function lt(t,e,n,r=0){let a=document.createElement(e);return a.textContent=n,r&&a.classList.add(r),t.appendChild(a)}function ht(t){return function(t,e,n){s(2,arguments);var r=String(e),a=n||{},o=a.locale||b,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:T(i),c=null==a.firstWeekContainsDate?u:T(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=o.options&&o.options.weekStartsOn,f=null==d?0:T(d),m=null==a.weekStartsOn?f:T(a.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=l(t);if(!h(g))throw new RangeError("Invalid time value");var p=V(g),w=S(g,p),y={firstWeekContainsDate:c,weekStartsOn:m,locale:o,_originalDate:g};return r.match(at).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,R[e])(t,o.formatLong,y):t})).join("").match(rt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return ct(n);var i=G[r];if(i)return!a.useAdditionalWeekYearTokens&&et(n)&&nt(n,e,t),!a.useAdditionalDayOfYearTokens&&tt(n)&&nt(n,e,t),i(w,n,o.localize,y);if(r.match(ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(t,"yyyy-MM-dd")}const ft=document.querySelector("#todo");function mt(t){st(),function(t){let e=lt(ft,"header","",`todo_${t.id}`);lt(e,"h1","");let n=lt(e,"div","");["o","x"].forEach((t=>{lt(n,"span",t,t)}))}(t),function(t){let e=lt(ft,"form","","display-none");e.id="update-todo",["title","description"].forEach((n=>{let r=n.charAt(0).toUpperCase()+n.slice(1)+":";lt(e,"label",r).htmlFor=`update-todo-${n}`;let a=lt(e,"input","");a.type="text",a.id=`update-todo-${n}`,a.value=null==t[n]?"":t[n]})),lt(e,"label","Due Date:");let n=lt(e,"div","");n.id="dueDate";let r=lt(n,"input","");r.type="date",r.id="update-todo-dueDate",r.value=ht(t.dueDate),lt(e,"label","Priority:");let a=lt(e,"div","");a.id="priorities",["low","medium","high"].forEach((e=>{let n=lt(a,"input","");n.type="radio",n.id=`${e}-priority`,n.name="priority",n.value=e,t.priority?t.priority==e&&(n.checked=!0):"low"==e&&(n.checked=!0);let r=lt(a,"label","");r.htmlFor=`${e}-priority`;let o=lt(r,"span",""),i=lt(o,"img","");i.src="img/checked-icon.svg",i.alt="Checked Icon"}));let o=lt(e,"input","");o.type="submit",o.value="Change"}(t),function(t){let e=lt(ft,"article","");lt(e,"h2",t.title),lt(e,"p",t.description),lt(e,"div",ht(t.dueDate))}(t),document.querySelector("#todo .o").addEventListener("click",gt),document.querySelector("#todo .x").addEventListener("click",(()=>{window.confirm("Do you really want to delete this todo?")&&function(){let t=document.querySelector("#todo header").classList[0].split("_")[1],e=document.querySelector("#project header").classList[0].split("_")[1];if(function(t){let e=r.findIndex((e=>t==e.id));r.splice(e,1),i()}(t),st(),"undefined"!=t){let t=u(e);yt(t,c(t.id))}}()})),document.querySelector("#update-todo").addEventListener("submit",pt)}function gt(){let t=document.querySelector("#todo article"),e=document.querySelector("#update-todo");t.classList.toggle("display-none"),e.classList.toggle("display-none")}function pt(t){t.preventDefault();let n=function(){let t,n=document.querySelector("#todo header").classList[0].split("_")[1],a=d(n),o=document.querySelector("#update-todo-title").value,u=document.querySelector("#update-todo-description").value,c=document.querySelector("#update-todo-dueDate").value,s=document.querySelector('#update-todo input[type="radio"]:checked').value;return"undefined"==n?(t=document.querySelector("#project header").classList[0].split("_")[1],a=function(t){t.id=r.length?r[r.length-1].id+1:0;let n=new e(t);return r.push(n),i(),n}({title:o,description:u,dueDate:c,priority:s,projectId:t})):(t=a.projectId,a=function(t){let n=r.findIndex((e=>t.id==e.id)),a=new e(t);return r.splice(n,1,a),i(),a}({title:o,description:u,dueDate:c,priority:s,projectId:t,id:n})),a}();gt(),mt(n);let a=u(n.projectId);yt(a,c(a.id))}const wt=document.querySelector("#project");function yt(e,a){dt(),st(),function(t){let e=lt(wt,"header","",`project_${t.id}`);lt(e,"h1",t.name),function(t,e){let n=lt(t,"form","","display-none");n.id="update-project";let r=lt(n,"input","");r.type="text",r.id="update-project-name",r.value=e.name;let a=lt(n,"input","");a.type="submit",a.value="Change"}(e,t);let n=lt(e,"div","");["o","x"].forEach((t=>{lt(n,"span",t,t)}))}(e),function(t,e){let n=lt(wt,"ul","");0==t.id&&(e=r),function(t){return t.sort(((t,e)=>t.dueDate>e.dueDate)),t}(e).forEach((t=>{let e=lt(n,"li","",`todo_${t.id}`);e.classList.add(`${t.priority}-priority`),lt(e,"h2",t.title),lt(e,"div",ht(t.dueDate))}))}(e,a),lt(wt,"button","New Todo").id="new-todo-button",document.querySelectorAll("#project li").forEach((t=>{t.addEventListener("click",vt)})),document.querySelector("#project .o").addEventListener("click",bt),document.querySelector("#project .x").addEventListener("click",(()=>{window.confirm("Do you really want to delete this project?")&&function(){let t=document.querySelector("#project header").classList[0].split("_")[1];0==t?alert("Default map cannot be deleted!"):(function(t){let e=n.findIndex((e=>t==e.id));n.splice(e,1),function(t){let e=[];r.forEach(((n,r)=>{n.projectId==t&&e.unshift(r)})),e.forEach((t=>{r.splice(t,1)}))}(t),i()}(t),dt(),Dt())}()})),document.querySelector("#update-project").addEventListener("submit",(e=>function(e,r){e.preventDefault(),function(e){let r=n.findIndex((t=>e.id==t.id)),a=new t(e);n.splice(r,1,a),i()}({name:document.querySelector("#update-project-name").value,id:document.querySelector("#project header").classList[0].split("_")[1]}),bt(),Dt(),yt(u(e.target.parentNode.classList[0].split("_")[1]),r)}(e,a))),document.querySelector("#new-todo-button").addEventListener("click",Tt)}function vt(t){mt(d(t.currentTarget.classList[0].split("_")[1]))}function bt(){let t=document.querySelector("#project header h1"),e=document.querySelector("#update-project");t.classList.toggle("display-none"),e.classList.toggle("display-none")}function Tt(){mt({dueDate:new Date}),document.querySelector("#todo .o").classList.toggle("display-none"),document.querySelector("#todo input:last-child").value="Create",gt()}const Ct=document.querySelector("#projects button"),St=document.querySelector("#new-project");function Dt(){!function(){let t=document.querySelector("#projects ul");t.textContent="",n.forEach((e=>{lt(t,"li",e.name,`project_${e.id}`)}))}(),document.querySelectorAll("#projects li").forEach((t=>{t.addEventListener("click",Mt)})),document.querySelector("#projects button").addEventListener("click",xt),document.querySelector("#new-project").addEventListener("submit",kt)}function Mt(t){let e=u(t.target.classList[0].split("_")[1]),n=c(e.id);Ct.classList.contains("display-none")&&xt(),yt(e,n)}function xt(){Ct.classList.toggle("display-none"),St.classList.toggle("display-none")}function kt(e){e.preventDefault(),function(e){e.id=n.length?n[n.length-1].id+1:0;let r=new t(e);n.push(r),i()}({name:document.querySelector("#new-project-name").value}),xt(),Dt();let r=n[n.length-1];yt(r,c(r))}localStorage.getItem("data")||i(!0),function(){let a=JSON.parse(localStorage.getItem("data"));a.projects.forEach((e=>{n.push(new t(e))})),a.todos.forEach((t=>{r.push(new e(t))}))}(),Dt()})();