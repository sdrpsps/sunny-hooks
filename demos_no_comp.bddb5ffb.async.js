(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"82LI":function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("L2hj");t["default"]=()=>{var e=Object(l["a"])(),t=Object(n["a"])(e,2),a=t[0],r=t[1],u=r.toggle,o=r.setLeft,i=r.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects: ","".concat(a)),c.a.createElement("div",{style:{display:"flex",gap:"10px"}},c.a.createElement("button",{onClick:u},"Toggle"),c.a.createElement("button",{onClick:o},"Set False"),c.a.createElement("button",{onClick:i},"Set True")))}},"CyT/":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("iojd"),r=a("ahKI"),c=a("L2hj");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c["a"])(!!e),a=Object(n["a"])(t,2),l=a[0],u=a[1],o=u.set,i=u.toggle,s=Object(r["useMemo"])((()=>{var e=()=>o(!0),t=()=>o(!1);return{setTrue:e,setFalse:t,set:e=>o(!!e),toggle:i}}),[]);return[l,s]}},DnNy:function(e,t,a){"use strict";var n=a("ahKI");function r(e,t){return!Object.is(e,t)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a=Object(n["useRef"])(),c=Object(n["useRef"])();return t(c.current,e)&&(a.current=c.current,c.current=e),a.current}t["a"]=c},"Dr+N":function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("L2hj");t["default"]=()=>{var e=Object(l["a"])("Hello","World"),t=Object(n["a"])(e,2),a=t[0],r=t[1],u=r.toggle,o=r.set,i=r.setLeft,s=r.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects: ","".concat(a)),c.a.createElement("div",{style:{display:"flex",gap:"10px"}},c.a.createElement("button",{onClick:u},"Toggle"),c.a.createElement("button",{onClick:()=>{o("Hello")}},"Set Hello"),c.a.createElement("button",{onClick:()=>{o("World")}},"Set World"),c.a.createElement("button",{onClick:i},"Set Left"),c.a.createElement("button",{onClick:s},"Set Right")))}},HgnT:function(e,t,a){"use strict";a.r(t);var n=a("G3cz"),r=a("iojd"),c=a("ahKI"),l=a.n(c),u=a("DnNy"),o=(e,t)=>!e||e.name!==t.name,i=(e,t)=>!e||e.age!==t.age;t["default"]=()=>{var e=Object(c["useState"])({name:"Jack",age:18}),t=Object(r["a"])(e,2),a=t[0],s=t[1],v=Object(c["useState"])("Jack"),b=Object(r["a"])(v,2),j=b[0],d=b[1],f=Object(c["useState"])(18),m=Object(r["a"])(f,2),O=m[0],E=m[1],p=Object(u["a"])(a,o),g=Object(u["a"])(a,i);return l.a.createElement("div",null,l.a.createElement("p",null,"Current name: ",a.name),l.a.createElement("p",null,"Current age: ",a.age),l.a.createElement("p",null,"Previous name: ",null===p||void 0===p?void 0:p.name),l.a.createElement("p",null,"Previous age: ",null===g||void 0===g?void 0:g.age),l.a.createElement("input",{type:"text",value:j,onChange:e=>d(e.target.value),placeholder:"Typed name"}),l.a.createElement("button",{onClick:()=>s(Object(n["a"])(Object(n["a"])({},a),{},{name:j}))},"Update name"),l.a.createElement("input",{type:"text",value:O,onChange:e=>E(Number(e.target.value)),placeholder:"Typed age"}),l.a.createElement("button",{onClick:()=>s(Object(n["a"])(Object(n["a"])({},a),{},{age:O}))},"Update age"))}},L2hj:function(e,t,a){"use strict";var n=a("iojd"),r=a("ahKI");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=Object(r["useState"])(e),c=Object(n["a"])(a,2),l=c[0],u=c[1],o=Object(r["useMemo"])((()=>{var a=t||!e,n=()=>{u((t=>t===e?a:e))},r=e=>u(e),c=()=>r(e),l=()=>r(a);return{toggle:n,set:r,setLeft:c,setRight:l}}),[]);return[l,o]}t["a"]=c},OCTU:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("sJN1");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(n["a"])(e,2),a=t[0],u=t[1],o=Object(l["a"])(a);return Object(r["useEffect"])((()=>{var e=setInterval((()=>{u(o.current+1)}),1e3);return()=>clearInterval(e)}),[]),c.a.createElement("div",null,c.a.createElement("p",null,"Effects: ",a))}},aFWa:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("inn8");function u(e,t){var a=Object(r["useState"])(e),c=Object(n["a"])(a,2),u=c[0],o=c[1],i=Object(l["a"])((()=>o(e)),t),s=i.run;return Object(r["useEffect"])((()=>{s()}),[e]),u}var o=u;t["default"]=()=>{var e=Object(r["useState"])(""),t=Object(n["a"])(e,2),a=t[0],l=t[1],u=o(a,{wait:500});return c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:a,onChange:e=>l(e.target.value),placeholder:"Typed value"}),c.a.createElement("p",null,"ThrottledValue: ",u))}},eWij:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("hsQr");function u(e,t){var a=Object(r["useState"])(e),c=Object(n["a"])(a,2),u=c[0],o=c[1],i=Object(l["a"])((()=>o(e)),t),s=i.run;return Object(r["useEffect"])((()=>{s()}),[e]),u}var o=u;t["default"]=()=>{var e=Object(r["useState"])(),t=Object(n["a"])(e,2),a=t[0],l=t[1],u=o(a,{wait:500});return c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:a,onChange:e=>l(e.target.value),placeholder:"Typed value"}),c.a.createElement("p",null,"DebouncedValue: ",u))}},hsQr:function(e,t,a){"use strict";var n=a("ahKI"),r=a("sJN1"),c=a("YArd");function l(e,t){var a=Object(r["a"])(e),l=(null===t||void 0===t?void 0:t.wait)||1e3,u=Object(n["useMemo"])((()=>Object(c["a"])((function(){return a.current(...arguments)}),l,t)),[]);return{run:u,cancel:u.cancel(),flush:u.flush()}}t["a"]=l},inn8:function(e,t,a){"use strict";var n=a("jX87"),r=a("ahKI"),c=a("sJN1");function l(e,t){var a,l=Object(c["a"])(e),u=null!==(a=null===t||void 0===t?void 0:t.wait)&&void 0!==a?a:1e3,o=Object(r["useMemo"])((()=>Object(n["a"])((function(){return l.current(...arguments)}),u,t)),[]);return{run:o,cancel:o.cancel,flush:o.flush}}t["a"]=l},rXjo:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("inn8");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(n["a"])(e,2),a=t[0],u=t[1],o=Object(l["a"])((()=>u(a+1)),{wait:500}),i=o.run;return c.a.createElement("div",null,c.a.createElement("p",null,"Clicked count: ",a),c.a.createElement("button",{onClick:i},"Click fast!"))}},sJN1:function(e,t,a){"use strict";var n=a("ahKI");function r(e){var t=Object(n["useRef"])(e);return t.current=e,t}t["a"]=r},tHpm:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("hsQr");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(n["a"])(e,2),a=t[0],u=t[1],o=Object(l["a"])((()=>u(a+1)),{wait:500}),i=o.run;return c.a.createElement("div",null,c.a.createElement("p",null,"Count: ",a),c.a.createElement("button",{onClick:i},"Click fast!"))}},y7Gi:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("sJN1");function u(e){var t=Object(l["a"])(e);Object(r["useEffect"])((()=>()=>t.current()),[])}var o=u,i=a("CyT/"),s=a("E+u+"),v=()=>(o((()=>{s["a"].info("\u7ec4\u4ef6\u5378\u8f7d\u4e86")})),c.a.createElement("p",null,"MyComponent"));t["default"]=()=>{var e=Object(i["a"])(!0),t=Object(n["a"])(e,2),a=t[0],r=t[1].toggle;return c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:r},a?"unmount":"mount"),a&&c.a.createElement(v,null))}},ynmm:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("DnNy");t["default"]=()=>{var e=Object(r["useState"])(""),t=Object(n["a"])(e,2),a=t[0],u=t[1],o=Object(l["a"])(a);return c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:a,onChange:e=>u(e.target.value),placeholder:"Typed value"}),c.a.createElement("p",null,"Current Value: ",a),c.a.createElement("p",null,"Previous Value: ",o))}},yoie:function(e,t,a){"use strict";a.r(t);var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("CyT/");t["default"]=()=>{var e=Object(l["a"])(),t=Object(n["a"])(e,2),a=t[0],r=t[1],u=r.toggle,o=r.setTrue,i=r.setFalse;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects: ","".concat(a)),c.a.createElement("div",{style:{display:"flex",gap:"10px"}},c.a.createElement("button",{onClick:u},"Toggle"),c.a.createElement("button",{onClick:o},"Set True"),c.a.createElement("button",{onClick:i},"Set False")))}}}]);