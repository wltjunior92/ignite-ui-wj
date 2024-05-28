import{R as g,r as $}from"./index-lToYTJ1z.js";import{$ as me,a as q,_ as D,b as Pe,c as ne,d as Le,e as Me,f as Ae,g as se}from"./index-DYxCdORw.js";import{j as B}from"./jsx-runtime-CsGkrc1M.js";var x="colors",z="sizes",d="space",be={gap:d,gridGap:d,columnGap:d,gridColumnGap:d,rowGap:d,gridRowGap:d,inset:d,insetBlock:d,insetBlockEnd:d,insetBlockStart:d,insetInline:d,insetInlineEnd:d,insetInlineStart:d,margin:d,marginTop:d,marginRight:d,marginBottom:d,marginLeft:d,marginBlock:d,marginBlockEnd:d,marginBlockStart:d,marginInline:d,marginInlineEnd:d,marginInlineStart:d,padding:d,paddingTop:d,paddingRight:d,paddingBottom:d,paddingLeft:d,paddingBlock:d,paddingBlockEnd:d,paddingBlockStart:d,paddingInline:d,paddingInlineEnd:d,paddingInlineStart:d,top:d,right:d,bottom:d,left:d,scrollMargin:d,scrollMarginTop:d,scrollMarginRight:d,scrollMarginBottom:d,scrollMarginLeft:d,scrollMarginX:d,scrollMarginY:d,scrollMarginBlock:d,scrollMarginBlockEnd:d,scrollMarginBlockStart:d,scrollMarginInline:d,scrollMarginInlineEnd:d,scrollMarginInlineStart:d,scrollPadding:d,scrollPaddingTop:d,scrollPaddingRight:d,scrollPaddingBottom:d,scrollPaddingLeft:d,scrollPaddingX:d,scrollPaddingY:d,scrollPaddingBlock:d,scrollPaddingBlockEnd:d,scrollPaddingBlockStart:d,scrollPaddingInline:d,scrollPaddingInlineEnd:d,scrollPaddingInlineStart:d,fontSize:"fontSizes",background:x,backgroundColor:x,backgroundImage:x,borderImage:x,border:x,borderBlock:x,borderBlockEnd:x,borderBlockStart:x,borderBottom:x,borderBottomColor:x,borderColor:x,borderInline:x,borderInlineEnd:x,borderInlineStart:x,borderLeft:x,borderLeftColor:x,borderRight:x,borderRightColor:x,borderTop:x,borderTopColor:x,caretColor:x,color:x,columnRuleColor:x,fill:x,outline:x,outlineColor:x,stroke:x,textDecorationColor:x,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:z,minBlockSize:z,maxBlockSize:z,inlineSize:z,minInlineSize:z,maxInlineSize:z,width:z,minWidth:z,maxWidth:z,height:z,minHeight:z,maxHeight:z,flexBasis:z,gridTemplateColumns:z,gridTemplateRows:z,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},_e=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,V=()=>{const e=Object.create(null);return(t,r,...n)=>{const i=(o=>JSON.stringify(o,_e))(t);return i in e?e[i]:e[i]=r(t,...n)}},M=Symbol.for("sxs.internal"),oe=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),le=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Te}=Object.prototype,re=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Oe=/\s+(?![^()]*\))/,N=e=>t=>e(...typeof t=="string"?String(t).split(Oe):[t]),ce={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:N((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:N((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:N((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:N((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:N((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:N((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},te=/([\d.]+)([^]*)/,Fe=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(i=>i.includes("&")?i.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(i)?`:is(${n})`:n):n+" "+i)),r),[]):t,Ne=(e,t)=>e in He&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,i,o)=>n+(i==="stretch"?`-moz-available${o};${re(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${re(e)}:${n}fit-content`)+o):String(t),He={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},P=e=>e?e+"-":"",$e=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,i,o,c,s)=>c=="$"==!!o?n:(i||c=="--"?"calc(":"")+"var(--"+(c==="$"?P(t)+(s.includes("$")?"":P(r))+s.replace(/\$/g,"-"):s)+")"+(i||c=="--"?"*"+(i||"")+(o||"1")+")":"")),De=/\s*,\s*(?![^()]*\))/,Ve=Object.prototype.toString,H=(e,t,r,n,i)=>{let o,c,s;const a=(u,h,f)=>{let l,p;const b=y=>{for(l in y){const S=l.charCodeAt(0)===64,E=S&&Array.isArray(y[l])?y[l]:[y[l]];for(p of E){const C=/[A-Z]/.test(m=l)?m:m.replace(/-[^]/g,w=>w[1].toUpperCase()),G=typeof p=="object"&&p&&p.toString===Ve&&(!n.utils[C]||!h.length);if(C in n.utils&&!G){const w=n.utils[C];if(w!==c){c=w,b(w(p)),c=null;continue}}else if(C in ce){const w=ce[C];if(w!==s){s=w,b(w(p)),s=null;continue}}if(S&&(k=l.slice(1)in n.media?"@media "+n.media[l.slice(1)]:l,l=k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(w,I,j,L,R,W)=>{const F=te.test(I),K=.0625*(F?-1:1),[Z,ae]=F?[L,I]:[I,L];return"("+(j[0]==="="?"":j[0]===">"===F?"max-":"min-")+Z+":"+(j[0]!=="="&&j.length===1?ae.replace(te,(We,Q,ee)=>Number(Q)+K*(j===">"?1:-1)+ee):ae)+(R?") and ("+(R[0]===">"?"min-":"max-")+Z+":"+(R.length===1?W.replace(te,(We,Q,ee)=>Number(Q)+K*(R===">"?-1:1)+ee):W):"")+")"})),G){const w=S?f.concat(l):[...f],I=S?[...h]:Fe(h,l.split(De));o!==void 0&&i(de(...o)),o=void 0,a(p,I,w)}else o===void 0&&(o=[[],h,f]),l=S||l.charCodeAt(0)!==36?l:`--${P(n.prefix)}${l.slice(1).replace(/\$/g,"-")}`,p=G?p:typeof p=="number"?p&&C in Ge?String(p)+"px":String(p):$e(Ne(C,p??""),n.prefix,n.themeMap[C]),o[0].push(`${S?`${l} `:`${re(l)}:`}${p}`)}}var k,m};b(u),o!==void 0&&i(de(...o)),o=void 0};a(e,t,r)},de=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,Ge={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ue=e=>String.fromCharCode(e+(e>25?39:97)),A=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=ue(r%52)+n;return ue(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),Y=["themed","global","styled","onevar","resonevar","allvar","inline"],Ue=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},Ye=e=>{let t;const r=()=>{const{cssRules:i}=t.sheet;return[].map.call(i,(o,c)=>{const{cssText:s}=o;let a="";if(s.startsWith("--sxs"))return"";if(i[c-1]&&(a=i[c-1].cssText).startsWith("--sxs")){if(!o.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===o)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${s}`;return o.cssRules.length?`${a}${s}`:""}return s}).join("")},n=()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const u in s)delete s[u]}const i=Object(e).styleSheets||[];for(const s of i)if(Ue(s)){for(let a=0,u=s.cssRules;u[a];++a){const h=Object(u[a]);if(h.type!==1)continue;const f=Object(u[a+1]);if(f.type!==4)continue;++a;const{cssText:l}=h;if(!l.startsWith("--sxs"))continue;const p=l.slice(14,-3).trim().split(/\s+/),b=Y[p[0]];b&&(t||(t={sheet:s,reset:n,rules:{},toString:r}),t.rules[b]={group:f,index:a,cache:new Set(p)})}if(t)break}if(!t){const s=(a,u)=>({type:u,cssRules:[],insertRule(h,f){this.cssRules.splice(f,0,s(h,{import:3,undefined:1}[(h.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,h=>h.cssText).join("")}}`:a}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:n,toString:r}}const{sheet:o,rules:c}=t;for(let s=Y.length-1;s>=0;--s){const a=Y[s];if(!c[a]){const u=Y[s+1],h=c[u]?c[u].index:o.cssRules.length;o.insertRule("@media{}",h),o.insertRule(`--sxs{--sxs:${s}}`,h),c[a]={group:o.cssRules[h+1],index:h,cache:new Set([s])}}qe(c[a])}};return n(),t},qe=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},U=Symbol(),Ke=V(),fe=(e,t)=>Ke(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const i of r)if(i!=null)if(i[M]){n.type==null&&(n.type=i[M].type);for(const o of i[M].composers)n.composers.add(o)}else i.constructor!==Object||i.$$typeof?n.type==null&&(n.type=i):n.composers.add(Ze(i,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),Je(e,n,t)}),Ze=({variants:e,compoundVariants:t,defaultVariants:r,...n},i)=>{const o=`${P(i.prefix)}c-${A(n)}`,c=[],s=[],a=Object.create(null),u=[];for(const l in r)a[l]=String(r[l]);if(typeof e=="object"&&e)for(const l in e){h=a,f=l,Te.call(h,f)||(a[l]="undefined");const p=e[l];for(const b in p){const y={[l]:String(b)};String(b)==="undefined"&&u.push(l);const k=p[b],m=[y,k,!le(k)];c.push(m)}}var h,f;if(typeof t=="object"&&t)for(const l of t){let{css:p,...b}=l;p=typeof p=="object"&&p||{};for(const k in b)b[k]=String(b[k]);const y=[b,p,!le(p)];s.push(y)}return[o,n,c,s,a,u]},Je=(e,t,r)=>{const[n,i,o,c]=Xe(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(f=>{function l(){for(let p=0;p<l[U].length;p++){const[b,y]=l[U][p];f.rules[b].apply(y)}return l[U]=[],null}return l[U]=[],l.rules={},Y.forEach(p=>l.rules[p]={apply:b=>l[U].push([p,b])}),l})(r):null,a=(s||r).rules,u=`.${n}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,h=f=>{f=typeof f=="object"&&f||Qe;const{css:l,...p}=f,b={};for(const m in o)if(delete p[m],m in f){let S=f[m];typeof S=="object"&&S?b[m]={"@initial":o[m],...S}:(S=String(S),b[m]=S!=="undefined"||c.has(m)?S:o[m])}else b[m]=o[m];const y=new Set([...i]);for(const[m,S,E,C]of t.composers){r.rules.styled.cache.has(m)||(r.rules.styled.cache.add(m),H(S,[`.${m}`],[],e,I=>{a.styled.apply(I)}));const G=ge(E,b,e.media),w=ge(C,b,e.media,!0);for(const I of G)if(I!==void 0)for(const[j,L,R]of I){const W=`${m}-${A(L)}-${j}`;y.add(W);const F=(R?r.rules.resonevar:r.rules.onevar).cache,K=R?a.resonevar:a.onevar;F.has(W)||(F.add(W),H(L,[`.${W}`],[],e,Z=>{K.apply(Z)}))}for(const I of w)if(I!==void 0)for(const[j,L]of I){const R=`${m}-${A(L)}-${j}`;y.add(R),r.rules.allvar.cache.has(R)||(r.rules.allvar.cache.add(R),H(L,[`.${R}`],[],e,W=>{a.allvar.apply(W)}))}}if(typeof l=="object"&&l){const m=`${n}-i${A(l)}-css`;y.add(m),r.rules.inline.cache.has(m)||(r.rules.inline.cache.add(m),H(l,[`.${m}`],[],e,S=>{a.inline.apply(S)}))}for(const m of String(f.className||"").trim().split(/\s+/))m&&y.add(m);const k=p.className=[...y].join(" ");return{type:t.type,className:k,selector:u,props:p,toString:()=>k,deferredInjector:s}};return oe(h,{className:n,selector:u,[M]:t,toString:()=>(r.rules.styled.cache.has(n)||h(),n)})},Xe=e=>{let t="";const r=[],n={},i=[];for(const[o,,,,c,s]of e){t===""&&(t=o),r.push(o),i.push(...s);for(const a in c){const u=c[a];(n[a]===void 0||u!=="undefined"||s.includes(u))&&(n[a]=u)}}return[t,r,n,new Set(i)]},ge=(e,t,r,n)=>{const i=[];e:for(let[o,c,s]of e){if(s)continue;let a,u=0,h=!1;for(a in o){const f=o[a];let l=t[a];if(l!==f){if(typeof l!="object"||!l)continue e;{let p,b,y=0;for(const k in l){if(f===String(l[k])){if(k!=="@initial"){const m=k.slice(1);(b=b||[]).push(m in r?r[m]:k.replace(/^@media ?/,"")),h=!0}u+=y,p=!0}++y}if(b&&b.length&&(c={["@media "+b.join(", ")]:c}),!p)continue e}}}(i[u]=i[u]||[]).push([n?"cv":`${a}-${o[a]}`,c,h])}return i},Qe={},et=V(),tt=(e,t)=>et(e,()=>(...r)=>{const n=()=>{for(let i of r){i=typeof i=="object"&&i||{};let o=A(i);if(!t.rules.global.cache.has(o)){if(t.rules.global.cache.add(o),"@import"in i){let c=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(i["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,c++);delete i["@import"]}H(i,[],[],e,c=>{t.rules.global.apply(c)})}}return""};return oe(n,{toString:n})}),rt=V(),nt=(e,t)=>rt(e,()=>r=>{const n=`${P(e.prefix)}k-${A(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const o=[];H(r,[],[],e,s=>o.push(s));const c=`@keyframes ${n}{${o.join("")}}`;t.rules.global.apply(c)}return n};return oe(i,{get name(){return i()},toString:i})}),ot=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+P(this.prefix)+P(this.scale)+this.token}toString(){return this.computedValue}},it=V(),at=(e,t)=>it(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const i=`.${r=(r=typeof r=="string"?r:"")||`${P(e.prefix)}t-${A(n)}`}`,o={},c=[];for(const a in n){o[a]={};for(const u in n[a]){const h=`--${P(e.prefix)}${a}-${u}`,f=$e(String(n[a][u]),e.prefix,a);o[a][u]=new ot(u,f,a,e.prefix),c.push(`${h}:${f}`)}}const s=()=>{if(c.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const a=`${n===e.theme?":root,":""}.${r}{${c.join(";")}}`;t.rules.themed.apply(a)}return r};return{...o,get className(){return s()},selector:i,toString:s}}),st=V(),lt=V(),ct=e=>{const t=(r=>{let n=!1;const i=st(r,o=>{n=!0;const c="prefix"in(o=typeof o=="object"&&o||{})?String(o.prefix):"",s=typeof o.media=="object"&&o.media||{},a=typeof o.root=="object"?o.root||null:globalThis.document||null,u=typeof o.theme=="object"&&o.theme||{},h={prefix:c,media:s,theme:u,themeMap:typeof o.themeMap=="object"&&o.themeMap||{...be},utils:typeof o.utils=="object"&&o.utils||{}},f=Ye(a),l={css:fe(h,f),globalCss:tt(h,f),keyframes:nt(h,f),createTheme:at(h,f),reset(){f.reset(),l.theme.toString()},theme:{},sheet:f,config:h,prefix:c,getCssText:f.toString,toString:f.toString};return String(l.theme=l.createTheme(u)),l});return n||i.reset(),i})(e);return t.styled=(({config:r,sheet:n})=>lt(r,()=>{const i=fe(r,n);return(...o)=>{const c=i(...o),s=c[M].type,a=g.forwardRef((u,h)=>{const f=u&&u.as||s,{props:l,deferredInjector:p}=c(u);return delete l.as,l.ref=h,p?g.createElement(g.Fragment,null,g.createElement(f,l),g.createElement(p,null)):g.createElement(f,l)});return a.className=c.className,a.displayName=`Styled.${s.displayName||s.name||s}`,a.selector=c.selector,a.toString=()=>c.selector,a[M]=c[M],a}}))(t),t},dt=$.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),xe=function(t,r,n){var i=n.get(t);return i?i(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function pe(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var ie=$.forwardRef(function(e,t){var r=e.alt,n=e.color,i=e.size,o=e.weight,c=e.mirrored,s=e.children,a=e.renderPath,u=pe(e,["alt","color","size","weight","mirrored","children","renderPath"]),h=$.useContext(dt),f=h.color,l=f===void 0?"currentColor":f,p=h.size,b=h.weight,y=b===void 0?"regular":b,k=h.mirrored,m=k===void 0?!1:k,S=pe(h,["color","size","weight","mirrored"]);return g.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i??p,height:i??p,fill:n??l,viewBox:"0 0 256 256",transform:c||m?"scale(-1, 1)":void 0},S,u),!!r&&g.createElement("title",null,r),s,g.createElement("rect",{width:"256",height:"256",fill:"none"}),a(o??y,n??l))});ie.displayName="IconBase";var T=new Map;T.set("bold",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});T.set("duotone",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});T.set("fill",function(){return g.createElement(g.Fragment,null,g.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});T.set("light",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});T.set("thin",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});T.set("regular",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ut=function(t,r){return xe(t,r,T)},ke=$.forwardRef(function(e,t){return g.createElement(ie,Object.assign({ref:t},e,{renderPath:ut}))});ke.displayName="Check";var O=new Map;O.set("bold",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return g.createElement(g.Fragment,null,g.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});O.set("light",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ft=function(t,r){return xe(t,r,O)},ye=$.forwardRef(function(e,t){return g.createElement(ie,Object.assign({ref:t},e,{renderPath:ft}))});ye.displayName="User";const Se="Avatar",[gt,hr]=me(Se),[pt,ve]=gt(Se),ht=$.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[i,o]=$.useState("idle");return $.createElement(pt,{scope:r,imageLoadingStatus:i,onImageLoadingStatusChange:o},$.createElement(q.span,D({},n,{ref:t})))}),mt="AvatarImage",bt=$.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:i=()=>{},...o}=e,c=ve(mt,r),s=kt(n),a=Pe(u=>{i(u),c.onImageLoadingStatusChange(u)});return ne(()=>{s!=="idle"&&a(s)},[s,a]),s==="loaded"?$.createElement(q.img,D({},o,{ref:t,src:n})):null}),$t="AvatarFallback",xt=$.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...i}=e,o=ve($t,r),[c,s]=$.useState(n===void 0);return $.useEffect(()=>{if(n!==void 0){const a=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(a)}},[n]),c&&o.imageLoadingStatus!=="loaded"?$.createElement(q.span,D({},i,{ref:t})):null});function kt(e){const[t,r]=$.useState("idle");return ne(()=>{if(!e){r("error");return}let n=!0;const i=new window.Image,o=c=>()=>{n&&r(c)};return r("loading"),i.onload=o("loaded"),i.onerror=o("error"),i.src=e,()=>{n=!1}},[e]),t}const yt=ht,St=bt,vt=xt;function Ct(e){const t=$.useRef({value:e,previous:e});return $.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function Et(e){const[t,r]=$.useState(void 0);return ne(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let c,s;if("borderBoxSize"in o){const a=o.borderBoxSize,u=Array.isArray(a)?a[0]:a;c=u.inlineSize,s=u.blockSize}else c=e.offsetWidth,s=e.offsetHeight;r({width:c,height:s})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}const Ce="Checkbox",[zt,mr]=me(Ce),[wt,Bt]=zt(Ce),It=$.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:i,defaultChecked:o,required:c,disabled:s,value:a="on",onCheckedChange:u,...h}=e,[f,l]=$.useState(null),p=Me(t,E=>l(E)),b=$.useRef(!1),y=f?!!f.closest("form"):!0,[k=!1,m]=Ae({prop:i,defaultProp:o,onChange:u}),S=$.useRef(k);return $.useEffect(()=>{const E=f==null?void 0:f.form;if(E){const C=()=>m(S.current);return E.addEventListener("reset",C),()=>E.removeEventListener("reset",C)}},[f,m]),$.createElement(wt,{scope:r,state:k,disabled:s},$.createElement(q.button,D({type:"button",role:"checkbox","aria-checked":_(k)?"mixed":k,"aria-required":c,"data-state":Ee(k),"data-disabled":s?"":void 0,disabled:s,value:a},h,{ref:p,onKeyDown:se(e.onKeyDown,E=>{E.key==="Enter"&&E.preventDefault()}),onClick:se(e.onClick,E=>{m(C=>_(C)?!0:!C),y&&(b.current=E.isPropagationStopped(),b.current||E.stopPropagation())})})),y&&$.createElement(Wt,{control:f,bubbles:!b.current,name:n,value:a,checked:k,required:c,disabled:s,style:{transform:"translateX(-100%)"}}))}),Rt="CheckboxIndicator",jt=$.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...i}=e,o=Bt(Rt,r);return $.createElement(Le,{present:n||_(o.state)||o.state===!0},$.createElement(q.span,D({"data-state":Ee(o.state),"data-disabled":o.disabled?"":void 0},i,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Wt=e=>{const{control:t,checked:r,bubbles:n=!0,...i}=e,o=$.useRef(null),c=Ct(r),s=Et(t);return $.useEffect(()=>{const a=o.current,u=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(u,"checked").set;if(c!==r&&f){const l=new Event("click",{bubbles:n});a.indeterminate=_(r),f.call(a,_(r)?!1:r),a.dispatchEvent(l)}},[c,r,n]),$.createElement("input",D({type:"checkbox","aria-hidden":!0,defaultChecked:_(r)?!1:r},i,{tabIndex:-1,ref:o,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function _(e){return e==="indeterminate"}function Ee(e){return _(e)?"indeterminate":e?"checked":"unchecked"}const Pt=It;var Lt=Object.defineProperty,Mt=Object.defineProperties,At=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,he=(e,t,r)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))ze.call(t,r)&&he(e,r,t[r]);if(J)for(var r of J(t))we.call(t,r)&&he(e,r,t[r]);return e},Be=(e,t)=>Mt(e,At(t)),_t=(e,t)=>{var r={};for(var n in e)ze.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&J)for(var n of J(e))t.indexOf(n)<0&&we.call(e,n)&&(r[n]=e[n]);return r},Tt={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D",test:"#85a4df"},Ot={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},Ft={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},Nt={default:"Roboto, sans-serif",code:"monospace"},Ht={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},Dt={regular:"400",medium:"500",bold:"700"},Vt={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:v,css:br,globalCss:$r,keyframes:Ie,getCssText:xr,theme:kr,createTheme:yr,config:Sr}=ct({themeMap:Be(X({},be),{height:"space",width:"space"}),theme:{colors:Tt,fontSizes:Ht,fontWeights:Dt,fonts:Nt,lineHeights:Vt,radii:Ft,space:Ot}}),Gt=v("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});Gt.displayName="Box";var Re=v("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Re.displayName="Text";var Ut=v("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Ut.displayName="Heading";var Yt=v(yt,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),qt=v(St,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),Kt=v(vt,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function Zt(e){return B.jsxs(Yt,{children:[B.jsx(qt,X({},e)),B.jsx(Kt,{delayMs:600,children:B.jsx(ye,{})})]})}Zt.displayName="Avatar";var Jt=v("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",padding:"0 $4",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",backgroundColor:"$ignite500","&:not(:disabled):hover":{backgroundColor:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{backgroundColor:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});Jt.displayName="Button";var Xt=v("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),Qt=v("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"$regular"}),er=v("input",{fontFamily:"$default",fontSize:"$sm",fontWeight:"$regular",color:"$white",border:0,background:"transparent",width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),je=$.forwardRef((e,t)=>{var r=e,{prefix:n,size:i}=r,o=_t(r,["prefix","size"]);return B.jsxs(Xt,{size:i,children:[!!n&&B.jsx(Qt,{children:n}),B.jsx(er,X({ref:t},o))]})});je.displayName="TextInput";var tr=v("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}});tr.displayName="TextArea";var rr=v(Pt,{all:"unset",width:"$6",height:"$6",borderRadius:"$xs",backgroundColor:"$gray900",border:"2px solid $gray900",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),nr=Ie({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),or=Ie({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),ir=v(jt,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${nr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${or} 200ms ease-out`}});function ar(e){return B.jsx(rr,Be(X({},e),{children:B.jsx(ir,{asChild:!0,children:B.jsx(ke,{weight:"bold"})})}))}ar.displayName="Checkbox";var sr=v("div",{}),lr=v(Re,{color:"$gray200",defaultVariants:{size:"xs"}}),cr=v("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),dr=v("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function ur({size:e,currentStep:t=1}){return B.jsxs(sr,{children:[B.jsxs(lr,{children:["Passo ",t," de ",e]}),B.jsx(cr,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>B.jsx(dr,{active:t>=r},r))})]})}ur.displayName="Multistep";je.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{Zt as A,Gt as B,ar as C,Ut as H,ie as I,ur as M,Re as T,tr as a,je as b,Jt as c,xe as r};