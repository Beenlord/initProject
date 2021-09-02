
(function(global,factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}})(typeof window!=="undefined"?window:this,function(window,noGlobal){"use strict";var arr=[];var getProto=Object.getPrototypeOf;var slice=arr.slice;var flat=arr.flat?function(array){return arr.flat.call(array);}:function(array){return arr.concat.apply([],array);};var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){return typeof obj==="function"&&typeof obj.nodeType!=="number"&&typeof obj.item!=="function";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var document=window.document;var preservedScriptAttributes={type:true,src:true,nonce:true,noModule:true};function DOMEval(code,node,doc){doc=doc||document;var i,val,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){val=node[i]||node.getAttribute&&node.getAttribute(i);if(val){script.setAttribute(i,val);}}}
doc.head.appendChild(script).parentNode.removeChild(script);}
function toType(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}
var
version="3.6.0",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,length:0,toArray:function(){return slice.call(this);},get:function(num){if(num==null){return slice.call(this);}
return num<0?this[num+this.length]:this[num];},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},even:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return(i+1)%2;}));},odd:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return i%2;}));},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){copy=options[name];if(name==="__proto__"||target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){src=target[name];if(copyIsArray&&!Array.isArray(src)){clone=[];}else if(!copyIsArray&&!jQuery.isPlainObject(src)){clone={};}else{clone=src;}
copyIsArray=false;target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isPlainObject:function(obj){var proto,Ctor;if(!obj||toString.call(obj)!=="[object Object]"){return false;}
proto=getProto(obj);if(!proto){return true;}
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},globalEval:function(code,options,doc){DOMEval(code,{nonce:options&&options.nonce},doc);},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
return obj;},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return flat(ret);},guid:1,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(_i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length"in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),nonnativeSelectorCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,pushNative=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|"+"ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+
whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+
whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rdescend=new RegExp(whitespace+"|>"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+
whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+
whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rhtml=/HTML$/i,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,runescape=new RegExp("\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\([^\\r\\n\\f])","g"),funescape=function(escape,nonHex){var high="0x"+escape.slice(1)-0x10000;return nonHex?nonHex:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD";}
return ch.slice(0,-1)+"\\"+
ch.charCodeAt(ch.length-1).toString(16)+" ";}
return"\\"+ch;},unloadHandler=function(){setDocument();},inDisabledFieldset=addCombinator(function(elem){return elem.disabled===true&&elem.nodeName.toLowerCase()==="fieldset";},{dir:"parentNode",next:"legend"});try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){pushNative.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed){setDocument(context);context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&!nonnativeSelectorCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))&&(nodeType!==1||context.nodeName.toLowerCase()!=="object")){newSelector=selector;newContext=context;if(nodeType===1&&(rdescend.test(selector)||rcombinators.test(selector))){newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;if(newContext!==context||!support.scope){if((nid=context.getAttribute("id"))){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",(nid=expando));}}
groups=tokenize(selector);i=groups.length;while(i--){groups[i]=(nid?"#"+nid:":scope")+" "+
toSelector(groups[i]);}
newSelector=groups.join(",");}
try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){nonnativeSelectorCache(selector,true);}finally{if(nid===expando){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{if(el.parentNode){el.parentNode.removeChild(el);}
el=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createDisabledPseudo(disabled){return function(elem){if("form"in elem){if(elem.parentNode&&elem.disabled===false){if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}
return elem.isDisabled===disabled||elem.isDisabled!==!disabled&&inDisabledFieldset(elem)===disabled;}
return elem.disabled===disabled;}else if("label"in elem){return elem.disabled===disabled;}
return false;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var namespace=elem&&elem.namespaceURI,docElem=elem&&(elem.ownerDocument||elem).documentElement;return!rhtml.test(namespace||docElem&&docElem.nodeName||"HTML");};setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;if(doc==document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if(preferredDoc!=document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}
support.scope=assert(function(el){docElem.appendChild(el).appendChild(document.createElement("div"));return typeof el.querySelectorAll!=="undefined"&&!el.querySelectorAll(":scope fieldset div").length;});support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}
elems=context.getElementsByName(id);i=0;while((elem=elems[i++])){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}
return[];}};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(el){var input;docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
input=document.createElement("input");input.setAttribute("name","");el.appendChild(input);if(!el.querySelectorAll("[name='']").length){rbuggyQSA.push("\\["+whitespace+"*name"+whitespace+"*="+
whitespace+"*(?:''|\"\")");}
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}
el.querySelectorAll("\\\f");rbuggyQSA.push("[\\r\\n\\f]");});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(el){support.disconnectedMatch=matches.call(el,"*");matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)==(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a==document||a.ownerDocument==preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b==document||b.ownerDocument==preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a==document?-1:b==document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]==preferredDoc?-1:bp[i]==preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){setDocument(elem);if(support.matchesSelector&&documentIsHTML&&!nonnativeSelectorCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){nonnativeSelectorCache(expr,true);}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!=document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!=document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,_argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,_context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}
if(node===elem){break;}}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,_context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,_context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(_matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(_matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument>length?length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}
return false;}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{uniqueCache[key]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}
return false;};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context==document||context||outermost;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!=document){setDocument(elem);xml=!documentIsHTML;}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(el){return el.compareDocumentPosition(document.createElement("fieldset"))&1;});if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,_name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();}
var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not;});}
return jQuery.filter(qualifier,elements,not);}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}
return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
return len>1?jQuery.uniqueSort(ret):ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem){this[0]=elem;this.length=1;}
return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this[0]=selector;this.length=1;return this;}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery);}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(targets?targets.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}
return indexOf.call(this,elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,_i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,_i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,_i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){if(elem.contentDocument!=null&&getProto(elem.contentDocument)){return elem.contentDocument;}
if(nodeName(elem,"template")){elem=elem.content||elem;}
return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=locked||options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
if(!options.memory){memory=false;}
firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=queue=[];if(!memory&&!firing){list=memory="";}
return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};function Identity(v){return v;}
function Thrower(ex){throw ex;}
function adoptValue(value,resolve,reject,noValue){var method;try{if(value&&isFunction((method=value.promise))){method.call(value).done(resolve).fail(reject);}else if(value&&isFunction((method=value.then))){method.call(value,resolve,reject);}else{resolve.apply(undefined,[value].slice(noValue));}}catch(value){reject.apply(undefined,[value]);}}
jQuery.extend({Deferred:function(func){var tuples=[["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},"catch":function(fn){return promise.then(null,fn);},pipe:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(_i,tuple){var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;if(depth<maxDepth){return;}
returned=handler.apply(that,args);if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}
then=returned&&(typeof returned==="object"||typeof returned==="function")&&returned.then;if(isFunction(then)){if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));}else{maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}}else{if(handler!==Identity){that=undefined;args=[returned];}
(special||deferred.resolveWith)(that,args);}},process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}
if(depth+1>=maxDepth){if(handler!==Thrower){that=undefined;args=[e];}
deferred.rejectWith(that,args);}}};if(depth){process();}else{if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}
window.setTimeout(process);}};}
return jQuery.Deferred(function(newDefer){tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[3-i][2].disable,tuples[3-i][3].disable,tuples[0][2].lock,tuples[0][3].lock);}
list.add(tuple[3].fire);deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(singleValue){var
remaining=arguments.length,i=remaining,resolveContexts=Array(i),resolveValues=slice.call(arguments),primary=jQuery.Deferred(),updateFunc=function(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(!(--remaining)){primary.resolveWith(resolveContexts,resolveValues);}};};if(remaining<=1){adoptValue(singleValue,primary.done(updateFunc(i)).resolve,primary.reject,!remaining);if(primary.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return primary.then();}}
while(i--){adoptValue(resolveValues[i],updateFunc(i),primary.reject);}
return primary.promise();}});var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn).catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({isReady:false,readyWait:1,ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}
if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,_key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
if(chainable){return elems;}
if(bulk){return fn.call(elems);}
return len?fn(elems[0],key):emptyGet;};var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;function fcamelCase(_all,letter){return letter.toUpperCase();}
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}
var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){this.expando=jQuery.expando+Data.uid++;}
Data.uid=1;Data.prototype={cache:function(owner){var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}
return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[camelCase(data)]=value;}else{for(prop in data){cache[camelCase(prop)]=data[prop];}}
return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function(owner,key,value){if(key===undefined||((key&&typeof key==="string")&&value===undefined)){return this.get(owner,key);}
this.set(owner,key,value);return value!==undefined?value:key;},remove:function(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}
if(key!==undefined){if(Array.isArray(key)){key=key.map(camelCase);}else{key=camelCase(key);key=key in cache?[key]:(key.match(rnothtmlwhite)||[]);}
i=key.length;while(i--){delete cache[key[i]];}}
if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}
if(data==="false"){return false;}
if(data==="null"){return null;}
if(data===+data+""){return+data;}
if(rbrace.test(data)){return JSON.parse(data);}
return data;}
function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}
dataUser.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
dataPriv.set(elem,"hasDataAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}
return access(this,function(value){var data;if(elem&&value===undefined){data=dataUser.get(elem,key);if(data!==undefined){return data;}
data=dataAttr(elem,key);if(data!==undefined){return data;}
return;}
this.each(function(){dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var documentElement=document.documentElement;var isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem);},composed={composed:true};if(documentElement.getRootNode){isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem)||elem.getRootNode(composed)===elem.ownerDocument;};}
var isHiddenWithinTree=function(elem,el){elem=el||elem;return elem.style.display==="none"||elem.style.display===""&&isAttached(elem)&&jQuery.css(elem,"display")==="none";};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=elem.nodeType&&(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){initial=initial/2;unit=unit||initialInUnit[3];initialInUnit=+initial||1;while(maxIterations--){jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}
initialInUnit=initialInUnit/scale;}
initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);valueParts=valueParts||[];}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
return adjusted;}
var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}
temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}
defaultDisplayMap[nodeName]=display;return display;}
function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
display=elem.style.display;if(show){if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}
if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";dataPriv.set(elem,"display",display);}}}
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}
return elements;}
jQuery.fn.extend({show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);var rscriptType=(/^$|^module$|\/(?:java|ecma)script/i);(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;div.innerHTML="<option></option>";support.option=!!div.lastChild;})();var wrapMap={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!support.option){wrapMap.optgroup=wrapMap.option=[1,"<select multiple='multiple'>","</select>"];}
function getAll(context,tag){var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}
if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}
return ret;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}
var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,attached,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(toType(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent="";}}}
fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
continue;}
attached=isAttached(elem);tmp=getAll(fragment.appendChild(elem),"script");if(attached){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;}
var rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
function returnFalse(){return false;}
function expectSync(elem,type){return(elem===safeActiveElement())===(type==="focus");}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){on(elem,type,selector,data,types[type],one);}
return elem;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return elem;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!acceptData(elem)){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(selector){jQuery.find.matchesSelector(documentElement,selector);}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events=Object.create(null);}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(nativeEvent){var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),event=jQuery.event.fix(nativeEvent),handlers=(dataPriv.get(this,"events")||Object.create(null))[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}
event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||handleObj.namespace===false||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}
if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}
cur=this;if(delegateCount<handlers.length){handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{noBubble:true},click:{setup:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click",returnTrue);}
return false;},trigger:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click");}
return true;},_default:function(event){var target=event.target;return rcheckableType.test(target.type)&&target.click&&nodeName(target,"input")&&dataPriv.get(target,"click")||nodeName(target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};function leverageNative(el,type,expectSync){if(!expectSync){if(dataPriv.get(el,type)===undefined){jQuery.event.add(el,type,returnTrue);}
return;}
dataPriv.set(el,type,false);jQuery.event.add(el,type,{namespace:false,handler:function(event){var notAsync,result,saved=dataPriv.get(this,type);if((event.isTrigger&1)&&this[type]){if(!saved.length){saved=slice.call(arguments);dataPriv.set(this,type,saved);notAsync=expectSync(this,type);this[type]();result=dataPriv.get(this,type);if(saved!==result||notAsync){dataPriv.set(this,type,false);}else{result={};}
if(saved!==result){event.stopImmediatePropagation();event.preventDefault();return result&&result.value;}}else if((jQuery.event.special[type]||{}).delegateType){event.stopPropagation();}}else if(saved.length){dataPriv.set(this,type,{value:jQuery.event.trigger(jQuery.extend(saved[0],jQuery.Event.prototype),saved.slice(1),this)});event.stopImmediatePropagation();}}});}
jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;this.target=(src.target&&src.target.nodeType===3)?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||Date.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,code:true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:true},jQuery.event.addProp);jQuery.each({focus:"focusin",blur:"focusout"},function(type,delegateType){jQuery.event.special[type]={setup:function(){leverageNative(this,type,expectSync);return false;},trigger:function(){leverageNative(this,type);return true;},_default:function(){return true;},delegateType:delegateType};});jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var
rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}
return elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}
return elem;}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(dataPriv.hasData(src)){pdataOld=dataPriv.get(src);events=pdataOld.events;if(events){dataPriv.remove(dest,"handle events");for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
function domManip(collection,args,callback,ignored){args=flat(args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);if(valueIsFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}
domManip(self,args,callback,ignored);});}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(collection[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){if(jQuery._evalUrl&&!node.noModule){jQuery._evalUrl(node.src,{nonce:node.nonce||node.getAttribute("nonce")},doc);}}else{DOMEval(node.textContent.replace(rcleanScript,""),node,doc);}}}}}}
return collection;}
function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
if(node.parentNode){if(keepData&&isAttached(node)){setGlobalEval(getAll(node,"script"));}
node.parentNode.removeChild(node);}}
return elem;}
jQuery.extend({htmlPrefilter:function(html){return html;},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=isAttached(elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
elem[dataPriv.expando]=undefined;}
if(elem[dataUser.expando]){elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}
return view.getComputedStyle(elem);};var swap=function(elem,options,callback){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.call(elem);for(name in options){elem.style[name]=old[name];}
return ret;};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){function computeStyleTests(){if(!div){return;}
container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;div.style.position="absolute";scrollboxSizeVal=roundPixelMeasures(div.offsetWidth/3)===12;documentElement.removeChild(container);div=null;}
function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}
var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableTrDimensionsVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function(){computeStyleTests();return scrollboxSizeVal;},reliableTrDimensions:function(){var table,tr,trChild,trStyle;if(reliableTrDimensionsVal==null){table=document.createElement("table");tr=document.createElement("tr");trChild=document.createElement("div");table.style.cssText="position:absolute;left:-11111px;border-collapse:separate";tr.style.cssText="border:1px solid";tr.style.height="1px";trChild.style.height="9px";trChild.style.display="block";documentElement.appendChild(table).appendChild(tr).appendChild(trChild);trStyle=window.getComputedStyle(tr);reliableTrDimensionsVal=(parseInt(trStyle.height,10)+
parseInt(trStyle.borderTopWidth,10)+
parseInt(trStyle.borderBottomWidth,10))===tr.offsetHeight;documentElement.removeChild(table);}
return reliableTrDimensionsVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!isAttached(elem)){ret=jQuery.style(elem,name);}
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
var cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style,vendorProps={};function vendorPropName(name){var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
function finalPropName(name){var final=jQuery.cssProps[name]||vendorProps[name];if(final){return final;}
if(name in emptyStyle){return name;}
return vendorProps[name]=vendorPropName(name)||name;}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"};function setPositiveNumber(_elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}
function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0;if(box===(isBorderBox?"border":"content")){return 0;}
for(;i<4;i+=2){if(box==="margin"){delta+=jQuery.css(elem,box+cssExpand[i],true,styles);}
if(!isBorderBox){delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
if(!isBorderBox&&computedVal>=0){delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
computedVal-
delta-
extra-
0.5))||0;}
return delta;}
function getWidthOrHeight(elem,dimension,extra){var styles=getStyles(elem),boxSizingNeeded=!support.boxSizingReliable()||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox,val=curCSS(elem,dimension,styles),offsetProp="offset"+dimension[0].toUpperCase()+dimension.slice(1);if(rnumnonpx.test(val)){if(!extra){return val;}
val="auto";}
if((!support.boxSizingReliable()&&isBorderBox||!support.reliableTrDimensions()&&nodeName(elem,"tr")||val==="auto"||!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline")&&elem.getClientRects().length){isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";valueIsBorderBox=offsetProp in elem;if(valueIsBorderBox){val=elem[offsetProp];}}
val=parseFloat(val)||0;return(val+
boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,val))+"px";}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"gridArea":true,"gridColumn":true,"gridColumnEnd":true,"gridColumnStart":true,"gridRow":true,"gridRowEnd":true,"gridRowStart":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
if(value==null||value!==value){return;}
if(type==="number"&&!isCustomProp){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(_i,dimension){jQuery.cssHooks[dimension]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function(elem,value,extra){var matches,styles=getStyles(elem),scrollboxSizeBuggy=!support.scrollboxSize()&&styles.position==="absolute",boxSizingNeeded=scrollboxSizeBuggy||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra?boxModelAdjustment(elem,dimension,extra,isBorderBox,styles):0;if(isBorderBox&&scrollboxSizeBuggy){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
parseFloat(styles[dimension])-
boxModelAdjustment(elem,dimension,"border",false,styles)-
0.5);}
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}
return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(jQuery.cssHooks[tween.prop]||tween.elem.style[finalPropName(tween.prop)]!=null)){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}
jQuery.fx.tick();}}
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=Date.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}
if(isBox&&elem.nodeType===1){opts.overflow=[style.overflow,style.overflowX,style.overflowY];restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}
display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}
style.display="inline-block";}}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}
propTween=false;for(prop in orig){if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){showHide([elem],true);}
anim.done(function(){if(!hidden){showHide([elem]);}
dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}
if(!length){deferred.notifyWith(elem,[animation,1,0]);}
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}
return result;}}
jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}
if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHiddenWithinTree).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(_i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}
inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
elem.setAttribute(name,value+"");return value;}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},removeAttr:function(elem,value){var name,i=0,attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){elem.removeAttribute(name);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(_i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
return(elem[name]=value);}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}
if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}
return-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}
function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}
function classesToArray(value){if(Array.isArray(value)){return value;}
if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}
return[];}
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
if(!arguments.length){return this.attr("class","");}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isValidValue=type==="string"||Array.isArray(value);if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}
if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
return this.each(function(){var className,i,self,classNames;if(isValidValue){i=0;self=jQuery(this);classNames=classesToArray(value);while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}
return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;if(typeof ret==="string"){return ret.replace(rreturn,"");}
return ret==null?"":ret;}
return;}
valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:stripAndCollapse(jQuery.text(elem));}},select:{get:function(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}
for(;i<max;i++){option=options[i];if((option.selected||i===index)&&!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(Array.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});support.focusin="onfocusin"in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||Object.create(null))[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&isFunction(elem[type])&&!isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}
elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this.document||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this.document||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}
var location=window.location;var nonce={guid:Date.now()};var rquery=(/\?/);jQuery.parseXML=function(data){var xml,parserErrorElem;if(!data||typeof data!=="string"){return null;}
try{xml=(new window.DOMParser()).parseFromString(data,"text/xml");}catch(e){}
parserErrorElem=xml&&xml.getElementsByTagName("parsererror")[0];if(!xml||parserErrorElem){jQuery.error("Invalid XML: "+(parserErrorElem?jQuery.map(parserErrorElem.childNodes,function(el){return el.textContent;}).join("\n"):data));}
return xml;};var
rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+
encodeURIComponent(value==null?"":value);};if(a==null){return"";}
if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(_i,elem){var val=jQuery(this).val();if(val==null){return null;}
if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var
r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":JSON.parse,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,completed,fireGlobals,i,uncached,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()+" "]=(responseHeaders[match[1].toLowerCase()+" "]||[]).concat(match[2]);}}
match=responseHeaders[key.toLowerCase()+" "];}
return match==null?null:match.join(", ");},getAllResponseHeaders:function(){return completed?responseHeadersString:null;},setRequestHeader:function(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(completed==null){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(completed){jqXHR.always(map[jqXHR.status]);}else{for(code in map){statusCode[code]=[statusCode[code],map[code]];}}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR);s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){s.crossDomain=true;}}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(completed){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url.replace(rhash,"");if(!s.hasContent){uncached=s.url.slice(cacheURL.length);if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;delete s.data;}
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce.guid++)+
uncached;}
s.url=cacheURL+uncached;}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){return jqXHR.abort();}
strAbort="abort";completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(completed){return jqXHR;}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{completed=false;transport.send(requestHeaders,done);}catch(e){if(completed){throw e;}
done(-1,e);}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(completed){return;}
completed=true;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
if(!isSuccess&&jQuery.inArray("script",s.dataTypes)>-1&&jQuery.inArray("json",s.dataTypes)<0){s.converters["text script"]=function(){};}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(_i,method){jQuery[method]=function(url,data,callback,type){if(isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery.ajaxPrefilter(function(s){var i;for(i in s.headers){if(i.toLowerCase()==="content-type"){s.contentType=s.headers[i]||"";}}});jQuery._evalUrl=function(url,options,doc){return jQuery.ajax({url:url,type:"GET",dataType:"script",cache:true,async:false,global:false,converters:{"text script":function(){}},dataFilter:function(response){jQuery.globalEval(response,options,doc);}});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){xhr.setRequestHeader(i,headers[i]);}
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback();}});}};}
callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var script,callback;return{send:function(_,complete){script=jQuery("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce.guid++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});support.createHTMLDocument=(function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;})();jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}
if(typeof context==="boolean"){keepScripts=context;context=false;}
var base,parsed,scripts;if(!context){if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}
parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}
if(isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}
return this;};jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var rect,win,elem=this[0];if(!elem){return;}
if(!elem.getClientRects().length){return{top:0,left:0};}
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},position:function(){if(!this[0]){return;}
var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offset=this.offset();doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}
if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}
return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}
if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});jQuery.each(["top","left"],function(_i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(_i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(_i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});var rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){var type=jQuery.type(obj);return(type==="number"||type==="string")&&!isNaN(obj-parseFloat(obj));};jQuery.trim=function(text){return text==null?"":(text+"").replace(rtrim,"");};if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(typeof noGlobal==="undefined"){window.jQuery=window.$=jQuery;}
return jQuery;});(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global=global||self,global.Vue=factory());}(this,function(){'use strict';var emptyObject=Object.freeze({});function isUndef(v){return v===undefined||v===null}
function isDef(v){return v!==undefined&&v!==null}
function isTrue(v){return v===true}
function isFalse(v){return v===false}
function isPrimitive(value){return(typeof value==='string'||typeof value==='number'||typeof value==='symbol'||typeof value==='boolean')}
function isObject(obj){return obj!==null&&typeof obj==='object'}
var _toString=Object.prototype.toString;function toRawType(value){return _toString.call(value).slice(8,-1)}
function isPlainObject(obj){return _toString.call(obj)==='[object Object]'}
function isRegExp(v){return _toString.call(v)==='[object RegExp]'}
function isValidArrayIndex(val){var n=parseFloat(String(val));return n>=0&&Math.floor(n)===n&&isFinite(val)}
function isPromise(val){return(isDef(val)&&typeof val.then==='function'&&typeof val.catch==='function')}
function toString(val){return val==null?'':Array.isArray(val)||(isPlainObject(val)&&val.toString===_toString)?JSON.stringify(val,null,2):String(val)}
function toNumber(val){var n=parseFloat(val);return isNaN(n)?val:n}
function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}
return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];}}
var isBuiltInTag=makeMap('slot,component',true);var isReservedAttribute=makeMap('key,ref,slot,slot-scope,is');function remove(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1)}}}
var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key)}
function cached(fn){var cache=Object.create(null);return(function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str))})}
var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';})});var capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1)});var hyphenateRE=/\B([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'-$1').toLowerCase()});function polyfillBind(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx)}
boundFn._length=fn.length;return boundFn}
function nativeBind(fn,ctx){return fn.bind(ctx)}
var bind=Function.prototype.bind?nativeBind:polyfillBind;function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}
return ret}
function extend(to,_from){for(var key in _from){to[key]=_from[key];}
return to}
function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}
return res}
function noop(a,b,c){}
var no=function(a,b,c){return false;};var identity=function(_){return _;};function genStaticKeys(modules){return modules.reduce(function(keys,m){return keys.concat(m.staticKeys||[])},[]).join(',')}
function looseEqual(a,b){if(a===b){return true}
var isObjectA=isObject(a);var isObjectB=isObject(b);if(isObjectA&&isObjectB){try{var isArrayA=Array.isArray(a);var isArrayB=Array.isArray(b);if(isArrayA&&isArrayB){return a.length===b.length&&a.every(function(e,i){return looseEqual(e,b[i])})}else if(a instanceof Date&&b instanceof Date){return a.getTime()===b.getTime()}else if(!isArrayA&&!isArrayB){var keysA=Object.keys(a);var keysB=Object.keys(b);return keysA.length===keysB.length&&keysA.every(function(key){return looseEqual(a[key],b[key])})}else{return false}}catch(e){return false}}else if(!isObjectA&&!isObjectB){return String(a)===String(b)}else{return false}}
function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++){if(looseEqual(arr[i],val)){return i}}
return-1}
function once(fn){var called=false;return function(){if(!called){called=true;fn.apply(this,arguments);}}}
var SSR_ATTR='data-server-rendered';var ASSET_TYPES=['component','directive','filter'];var LIFECYCLE_HOOKS=['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated','errorCaptured','serverPrefetch'];var config=({optionMergeStrategies:Object.create(null),silent:false,productionTip:"development"!=='production',devtools:"development"!=='production',performance:false,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:no,isReservedAttr:no,isUnknownElement:no,getTagNamespace:noop,parsePlatformTagName:identity,mustUseProp:no,async:true,_lifecycleHooks:LIFECYCLE_HOOKS});var unicodeRegExp=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F}
function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}
var bailRE=new RegExp(("[^"+(unicodeRegExp.source)+".$_\\d]"));function parsePath(path){if(bailRE.test(path)){return}
var segments=path.split('.');return function(obj){for(var i=0;i<segments.length;i++){if(!obj){return}
obj=obj[segments[i]];}
return obj}}
var hasProto='__proto__'in{};var inBrowser=typeof window!=='undefined';var inWeex=typeof WXEnvironment!=='undefined'&&!!WXEnvironment.platform;var weexPlatform=inWeex&&WXEnvironment.platform.toLowerCase();var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&/msie|trident/.test(UA);var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isEdge=UA&&UA.indexOf('edge/')>0;var isAndroid=(UA&&UA.indexOf('android')>0)||(weexPlatform==='android');var isIOS=(UA&&/iphone|ipad|ipod|ios/.test(UA))||(weexPlatform==='ios');var isChrome=UA&&/chrome\/\d+/.test(UA)&&!isEdge;var isPhantomJS=UA&&/phantomjs/.test(UA);var isFF=UA&&UA.match(/firefox\/(\d+)/);var nativeWatch=({}).watch;var supportsPassive=false;if(inBrowser){try{var opts={};Object.defineProperty(opts,'passive',({get:function get(){supportsPassive=true;}}));window.addEventListener('test-passive',null,opts);}catch(e){}}
var _isServer;var isServerRendering=function(){if(_isServer===undefined){if(!inBrowser&&!inWeex&&typeof global!=='undefined'){_isServer=global['process']&&global['process'].env.VUE_ENV==='server';}else{_isServer=false;}}
return _isServer};var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function isNative(Ctor){return typeof Ctor==='function'&&/native code/.test(Ctor.toString())}
var hasSymbol=typeof Symbol!=='undefined'&&isNative(Symbol)&&typeof Reflect!=='undefined'&&isNative(Reflect.ownKeys);var _Set;if(typeof Set!=='undefined'&&isNative(Set)){_Set=Set;}else{_Set=(function(){function Set(){this.set=Object.create(null);}
Set.prototype.has=function has(key){return this.set[key]===true};Set.prototype.add=function add(key){this.set[key]=true;};Set.prototype.clear=function clear(){this.set=Object.create(null);};return Set;}());}
var warn=noop;var tip=noop;var generateComponentTrace=(noop);var formatComponentName=(noop);{var hasConsole=typeof console!=='undefined';var classifyRE=/(?:^|[-_])(\w)/g;var classify=function(str){return str.replace(classifyRE,function(c){return c.toUpperCase();}).replace(/[-_]/g,'');};warn=function(msg,vm){var trace=vm?generateComponentTrace(vm):'';if(config.warnHandler){config.warnHandler.call(null,msg,vm,trace);}else if(hasConsole&&(!config.silent)){console.error(("[Vue warn]: "+msg+trace));}};tip=function(msg,vm){if(hasConsole&&(!config.silent)){console.warn("[Vue tip]: "+msg+(vm?generateComponentTrace(vm):''));}};formatComponentName=function(vm,includeFile){if(vm.$root===vm){return'<Root>'}
var options=typeof vm==='function'&&vm.cid!=null?vm.options:vm._isVue?vm.$options||vm.constructor.options:vm;var name=options.name||options._componentTag;var file=options.__file;if(!name&&file){var match=file.match(/([^/\\]+)\.vue$/);name=match&&match[1];}
return((name?("<"+(classify(name))+">"):"<Anonymous>")+
(file&&includeFile!==false?(" at "+file):''))};var repeat=function(str,n){var res='';while(n){if(n%2===1){res+=str;}
if(n>1){str+=str;}
n>>=1;}
return res};generateComponentTrace=function(vm){if(vm._isVue&&vm.$parent){var tree=[];var currentRecursiveSequence=0;while(vm){if(tree.length>0){var last=tree[tree.length-1];if(last.constructor===vm.constructor){currentRecursiveSequence++;vm=vm.$parent;continue}else if(currentRecursiveSequence>0){tree[tree.length-1]=[last,currentRecursiveSequence];currentRecursiveSequence=0;}}
tree.push(vm);vm=vm.$parent;}
return'\n\nfound in\n\n'+tree.map(function(vm,i){return(""+(i===0?'---> ':repeat(' ',5+i*2))+(Array.isArray(vm)?((formatComponentName(vm[0]))+"... ("+(vm[1])+" recursive calls)"):formatComponentName(vm)));}).join('\n')}else{return("\n\n(found in "+(formatComponentName(vm))+")")}};}
var uid=0;var Dep=function Dep(){this.id=uid++;this.subs=[];};Dep.prototype.addSub=function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub=function removeSub(sub){remove(this.subs,sub);};Dep.prototype.depend=function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify=function notify(){var subs=this.subs.slice();if(!config.async){subs.sort(function(a,b){return a.id-b.id;});}
for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};Dep.target=null;var targetStack=[];function pushTarget(target){targetStack.push(target);Dep.target=target;}
function popTarget(){targetStack.pop();Dep.target=targetStack[targetStack.length-1];}
var VNode=function VNode(tag,data,children,text,elm,context,componentOptions,asyncFactory){this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=undefined;this.context=context;this.fnContext=undefined;this.fnOptions=undefined;this.fnScopeId=undefined;this.key=data&&data.key;this.componentOptions=componentOptions;this.componentInstance=undefined;this.parent=undefined;this.raw=false;this.isStatic=false;this.isRootInsert=true;this.isComment=false;this.isCloned=false;this.isOnce=false;this.asyncFactory=asyncFactory;this.asyncMeta=undefined;this.isAsyncPlaceholder=false;};var prototypeAccessors={child:{configurable:true}};prototypeAccessors.child.get=function(){return this.componentInstance};Object.defineProperties(VNode.prototype,prototypeAccessors);var createEmptyVNode=function(text){if(text===void 0)text='';var node=new VNode();node.text=text;node.isComment=true;return node};function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val))}
function cloneVNode(vnode){var cloned=new VNode(vnode.tag,vnode.data,vnode.children&&vnode.children.slice(),vnode.text,vnode.elm,vnode.context,vnode.componentOptions,vnode.asyncFactory);cloned.ns=vnode.ns;cloned.isStatic=vnode.isStatic;cloned.key=vnode.key;cloned.isComment=vnode.isComment;cloned.fnContext=vnode.fnContext;cloned.fnOptions=vnode.fnOptions;cloned.fnScopeId=vnode.fnScopeId;cloned.asyncMeta=vnode.asyncMeta;cloned.isCloned=true;return cloned}
var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto);var methodsToPatch=['push','pop','shift','unshift','splice','sort','reverse'];methodsToPatch.forEach(function(method){var original=arrayProto[method];def(arrayMethods,method,function mutator(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':case'unshift':inserted=args;break
case'splice':inserted=args.slice(2);break}
if(inserted){ob.observeArray(inserted);}
ob.dep.notify();return result});});var arrayKeys=Object.getOwnPropertyNames(arrayMethods);var shouldObserve=true;function toggleObserving(value){shouldObserve=value;}
var Observer=function Observer(value){this.value=value;this.dep=new Dep();this.vmCount=0;def(value,'__ob__',this);if(Array.isArray(value)){if(hasProto){protoAugment(value,arrayMethods);}else{copyAugment(value,arrayMethods,arrayKeys);}
this.observeArray(value);}else{this.walk(value);}};Observer.prototype.walk=function walk(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){defineReactive$$1(obj,keys[i]);}};Observer.prototype.observeArray=function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};function protoAugment(target,src){target.__proto__=src;}
function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}
function observe(value,asRootData){if(!isObject(value)||value instanceof VNode){return}
var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(shouldObserve&&!isServerRendering()&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}
if(asRootData&&ob){ob.vmCount++;}
return ob}
function defineReactive$$1(obj,key,val,customSetter,shallow){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return}
var getter=property&&property.get;var setter=property&&property.set;if((!getter||setter)&&arguments.length===2){val=obj[key];}
var childOb=!shallow&&observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();if(Array.isArray(value)){dependArray(value);}}}
return value},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal===value||(newVal!==newVal&&value!==value)){return}
if(customSetter){customSetter();}
if(getter&&!setter){return}
if(setter){setter.call(obj,newVal);}else{val=newVal;}
childOb=!shallow&&observe(newVal);dep.notify();}});}
function set(target,key,val){if(isUndef(target)||isPrimitive(target)){warn(("Cannot set reactive property on undefined, null, or primitive value: "+((target))));}
if(Array.isArray(target)&&isValidArrayIndex(key)){target.length=Math.max(target.length,key);target.splice(key,1,val);return val}
if(key in target&&!(key in Object.prototype)){target[key]=val;return val}
var ob=(target).__ob__;if(target._isVue||(ob&&ob.vmCount)){warn('Avoid adding reactive properties to a Vue instance or its root $data '+'at runtime - declare it upfront in the data option.');return val}
if(!ob){target[key]=val;return val}
defineReactive$$1(ob.value,key,val);ob.dep.notify();return val}
function del(target,key){if(isUndef(target)||isPrimitive(target)){warn(("Cannot delete reactive property on undefined, null, or primitive value: "+((target))));}
if(Array.isArray(target)&&isValidArrayIndex(key)){target.splice(key,1);return}
var ob=(target).__ob__;if(target._isVue||(ob&&ob.vmCount)){warn('Avoid deleting properties on a Vue instance or its root $data '+'- just set it to null.');return}
if(!hasOwn(target,key)){return}
delete target[key];if(!ob){return}
ob.dep.notify();}
function dependArray(value){for(var e=(void 0),i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();if(Array.isArray(e)){dependArray(e);}}}
var strats=config.optionMergeStrategies;{strats.el=strats.propsData=function(parent,child,vm,key){if(!vm){warn("option \""+key+"\" can only be used during instance "+'creation with the `new` keyword.');}
return defaultStrat(parent,child)};}
function mergeData(to,from){if(!from){return to}
var key,toVal,fromVal;var keys=hasSymbol?Reflect.ownKeys(from):Object.keys(from);for(var i=0;i<keys.length;i++){key=keys[i];if(key==='__ob__'){continue}
toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(toVal!==fromVal&&isPlainObject(toVal)&&isPlainObject(fromVal)){mergeData(toVal,fromVal);}}
return to}
function mergeDataOrFn(parentVal,childVal,vm){if(!vm){if(!childVal){return parentVal}
if(!parentVal){return childVal}
return function mergedDataFn(){return mergeData(typeof childVal==='function'?childVal.call(this,this):childVal,typeof parentVal==='function'?parentVal.call(this,this):parentVal)}}else{return function mergedInstanceDataFn(){var instanceData=typeof childVal==='function'?childVal.call(vm,vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm,vm):parentVal;if(instanceData){return mergeData(instanceData,defaultData)}else{return defaultData}}}}
strats.data=function(parentVal,childVal,vm){if(!vm){if(childVal&&typeof childVal!=='function'){warn('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal}
return mergeDataOrFn(parentVal,childVal)}
return mergeDataOrFn(parentVal,childVal,vm)};function mergeHook(parentVal,childVal){var res=childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;return res?dedupeHooks(res):res}
function dedupeHooks(hooks){var res=[];for(var i=0;i<hooks.length;i++){if(res.indexOf(hooks[i])===-1){res.push(hooks[i]);}}
return res}
LIFECYCLE_HOOKS.forEach(function(hook){strats[hook]=mergeHook;});function mergeAssets(parentVal,childVal,vm,key){var res=Object.create(parentVal||null);if(childVal){assertObjectType(key,childVal,vm);return extend(res,childVal)}else{return res}}
ASSET_TYPES.forEach(function(type){strats[type+'s']=mergeAssets;});strats.watch=function(parentVal,childVal,vm,key){if(parentVal===nativeWatch){parentVal=undefined;}
if(childVal===nativeWatch){childVal=undefined;}
if(!childVal){return Object.create(parentVal||null)}
{assertObjectType(key,childVal,vm);}
if(!parentVal){return childVal}
var ret={};extend(ret,parentVal);for(var key$1 in childVal){var parent=ret[key$1];var child=childVal[key$1];if(parent&&!Array.isArray(parent)){parent=[parent];}
ret[key$1]=parent?parent.concat(child):Array.isArray(child)?child:[child];}
return ret};strats.props=strats.methods=strats.inject=strats.computed=function(parentVal,childVal,vm,key){if(childVal&&"development"!=='production'){assertObjectType(key,childVal,vm);}
if(!parentVal){return childVal}
var ret=Object.create(null);extend(ret,parentVal);if(childVal){extend(ret,childVal);}
return ret};strats.provide=mergeDataOrFn;var defaultStrat=function(parentVal,childVal){return childVal===undefined?parentVal:childVal};function checkComponents(options){for(var key in options.components){validateComponentName(key);}}
function validateComponentName(name){if(!new RegExp(("^[a-zA-Z][\\-\\.0-9_"+(unicodeRegExp.source)+"]*$")).test(name)){warn('Invalid component name: "'+name+'". Component names '+'should conform to valid custom element name in html5 specification.');}
if(isBuiltInTag(name)||config.isReservedTag(name)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+name);}}
function normalizeProps(options,vm){var props=options.props;if(!props){return}
var res={};var i,val,name;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=camelize(val);res[name]={type:null};}else{warn('props must be strings when using array syntax.');}}}else if(isPlainObject(props)){for(var key in props){val=props[key];name=camelize(key);res[name]=isPlainObject(val)?val:{type:val};}}else{warn("Invalid value for option \"props\": expected an Array or an Object, "+"but got "+(toRawType(props))+".",vm);}
options.props=res;}
function normalizeInject(options,vm){var inject=options.inject;if(!inject){return}
var normalized=options.inject={};if(Array.isArray(inject)){for(var i=0;i<inject.length;i++){normalized[inject[i]]={from:inject[i]};}}else if(isPlainObject(inject)){for(var key in inject){var val=inject[key];normalized[key]=isPlainObject(val)?extend({from:key},val):{from:val};}}else{warn("Invalid value for option \"inject\": expected an Array or an Object, "+"but got "+(toRawType(inject))+".",vm);}}
function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def$$1=dirs[key];if(typeof def$$1==='function'){dirs[key]={bind:def$$1,update:def$$1};}}}}
function assertObjectType(name,value,vm){if(!isPlainObject(value)){warn("Invalid value for option \""+name+"\": expected an Object, "+"but got "+(toRawType(value))+".",vm);}}
function mergeOptions(parent,child,vm){{checkComponents(child);}
if(typeof child==='function'){child=child.options;}
normalizeProps(child,vm);normalizeInject(child,vm);normalizeDirectives(child);if(!child._base){if(child.extends){parent=mergeOptions(parent,child.extends,vm);}
if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){parent=mergeOptions(parent,child.mixins[i],vm);}}}
var options={};var key;for(key in parent){mergeField(key);}
for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}
function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}
return options}
function resolveAsset(options,type,id,warnMissing){if(typeof id!=='string'){return}
var assets=options[type];if(hasOwn(assets,id)){return assets[id]}
var camelizedId=camelize(id);if(hasOwn(assets,camelizedId)){return assets[camelizedId]}
var PascalCaseId=capitalize(camelizedId);if(hasOwn(assets,PascalCaseId)){return assets[PascalCaseId]}
var res=assets[id]||assets[camelizedId]||assets[PascalCaseId];if(warnMissing&&!res){warn('Failed to resolve '+type.slice(0,-1)+': '+id,options);}
return res}
function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key];var booleanIndex=getTypeIndex(Boolean,prop.type);if(booleanIndex>-1){if(absent&&!hasOwn(prop,'default')){value=false;}else if(value===''||value===hyphenate(key)){var stringIndex=getTypeIndex(String,prop.type);if(stringIndex<0||booleanIndex<stringIndex){value=true;}}}
if(value===undefined){value=getPropDefaultValue(vm,prop,key);var prevShouldObserve=shouldObserve;toggleObserving(true);observe(value);toggleObserving(prevShouldObserve);}
{assertProp(prop,key,value,vm,absent);}
return value}
function getPropDefaultValue(vm,prop,key){if(!hasOwn(prop,'default')){return undefined}
var def=prop.default;if(isObject(def)){warn('Invalid default value for prop "'+key+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);}
if(vm&&vm.$options.propsData&&vm.$options.propsData[key]===undefined&&vm._props[key]!==undefined){return vm._props[key]}
return typeof def==='function'&&getType(prop.type)!=='Function'?def.call(vm):def}
function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){warn('Missing required prop: "'+name+'"',vm);return}
if(value==null&&!prop.required){return}
var type=prop.type;var valid=!type||type===true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}
for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i],vm);expectedTypes.push(assertedType.expectedType||'');valid=assertedType.valid;}}
var haveExpectedTypes=expectedTypes.some(function(t){return t;});if(!valid&&haveExpectedTypes){warn(getInvalidTypeMessage(name,value,expectedTypes),vm);return}
var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}
var simpleCheckRE=/^(String|Number|Boolean|Function|Symbol|BigInt)$/;function assertType(value,type,vm){var valid;var expectedType=getType(type);if(simpleCheckRE.test(expectedType)){var t=typeof value;valid=t===expectedType.toLowerCase();if(!valid&&t==='object'){valid=value instanceof type;}}else if(expectedType==='Object'){valid=isPlainObject(value);}else if(expectedType==='Array'){valid=Array.isArray(value);}else{try{valid=value instanceof type;}catch(e){warn('Invalid prop type: "'+String(type)+'" is not a constructor',vm);valid=false;}}
return{valid:valid,expectedType:expectedType}}
var functionTypeCheckRE=/^\s*function (\w+)/;function getType(fn){var match=fn&&fn.toString().match(functionTypeCheckRE);return match?match[1]:''}
function isSameType(a,b){return getType(a)===getType(b)}
function getTypeIndex(type,expectedTypes){if(!Array.isArray(expectedTypes)){return isSameType(expectedTypes,type)?0:-1}
for(var i=0,len=expectedTypes.length;i<len;i++){if(isSameType(expectedTypes[i],type)){return i}}
return-1}
function getInvalidTypeMessage(name,value,expectedTypes){var message="Invalid prop: type check failed for prop \""+name+"\"."+" Expected "+(expectedTypes.map(capitalize).join(', '));var expectedType=expectedTypes[0];var receivedType=toRawType(value);if(expectedTypes.length===1&&isExplicable(expectedType)&&isExplicable(typeof value)&&!isBoolean(expectedType,receivedType)){message+=" with value "+(styleValue(value,expectedType));}
message+=", got "+receivedType+" ";if(isExplicable(receivedType)){message+="with value "+(styleValue(value,receivedType))+".";}
return message}
function styleValue(value,type){if(type==='String'){return("\""+value+"\"")}else if(type==='Number'){return(""+(Number(value)))}else{return(""+value)}}
var EXPLICABLE_TYPES=['string','number','boolean'];function isExplicable(value){return EXPLICABLE_TYPES.some(function(elem){return value.toLowerCase()===elem;})}
function isBoolean(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];return args.some(function(elem){return elem.toLowerCase()==='boolean';})}
function handleError(err,vm,info){pushTarget();try{if(vm){var cur=vm;while((cur=cur.$parent)){var hooks=cur.$options.errorCaptured;if(hooks){for(var i=0;i<hooks.length;i++){try{var capture=hooks[i].call(cur,err,vm,info)===false;if(capture){return}}catch(e){globalHandleError(e,cur,'errorCaptured hook');}}}}}
globalHandleError(err,vm,info);}finally{popTarget();}}
function invokeWithErrorHandling(handler,context,args,vm,info){var res;try{res=args?handler.apply(context,args):handler.call(context);if(res&&!res._isVue&&isPromise(res)&&!res._handled){res.catch(function(e){return handleError(e,vm,info+" (Promise/async)");});res._handled=true;}}catch(e){handleError(e,vm,info);}
return res}
function globalHandleError(err,vm,info){if(config.errorHandler){try{return config.errorHandler.call(null,err,vm,info)}catch(e){if(e!==err){logError(e,null,'config.errorHandler');}}}
logError(err,vm,info);}
function logError(err,vm,info){{warn(("Error in "+info+": \""+(err.toString())+"\""),vm);}
if((inBrowser||inWeex)&&typeof console!=='undefined'){console.error(err);}else{throw err}}
var isUsingMicroTask=false;var callbacks=[];var pending=false;function flushCallbacks(){pending=false;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++){copies[i]();}}
var timerFunc;if(typeof Promise!=='undefined'&&isNative(Promise)){var p=Promise.resolve();timerFunc=function(){p.then(flushCallbacks);if(isIOS){setTimeout(noop);}};isUsingMicroTask=true;}else if(!isIE&&typeof MutationObserver!=='undefined'&&(isNative(MutationObserver)||MutationObserver.toString()==='[object MutationObserverConstructor]')){var counter=1;var observer=new MutationObserver(flushCallbacks);var textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:true});timerFunc=function(){counter=(counter+1)%2;textNode.data=String(counter);};isUsingMicroTask=true;}else if(typeof setImmediate!=='undefined'&&isNative(setImmediate)){timerFunc=function(){setImmediate(flushCallbacks);};}else{timerFunc=function(){setTimeout(flushCallbacks,0);};}
function nextTick(cb,ctx){var _resolve;callbacks.push(function(){if(cb){try{cb.call(ctx);}catch(e){handleError(e,ctx,'nextTick');}}else if(_resolve){_resolve(ctx);}});if(!pending){pending=true;timerFunc();}
if(!cb&&typeof Promise!=='undefined'){return new Promise(function(resolve){_resolve=resolve;})}}
var mark;var measure;{var perf=inBrowser&&window.performance;if(perf&&perf.mark&&perf.measure&&perf.clearMarks&&perf.clearMeasures){mark=function(tag){return perf.mark(tag);};measure=function(name,startTag,endTag){perf.measure(name,startTag,endTag);perf.clearMarks(startTag);perf.clearMarks(endTag);};}}
var initProxy;{var allowedGlobals=makeMap('Infinity,undefined,NaN,isFinite,isNaN,'+'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,'+'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,'+'require');var warnNonPresent=function(target,key){warn("Property or method \""+key+"\" is not defined on the instance but "+'referenced during render. Make sure that this property is reactive, '+'either in the data option, or for class-based components, by '+'initializing the property. '+'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',target);};var warnReservedPrefix=function(target,key){warn("Property \""+key+"\" must be accessed with \"$data."+key+"\" because "+'properties starting with "$" or "_" are not proxied in the Vue instance to '+'prevent conflicts with Vue internals. '+'See: https://vuejs.org/v2/api/#data',target);};var hasProxy=typeof Proxy!=='undefined'&&isNative(Proxy);if(hasProxy){var isBuiltInModifier=makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');config.keyCodes=new Proxy(config.keyCodes,{set:function set(target,key,value){if(isBuiltInModifier(key)){warn(("Avoid overwriting built-in modifier in config.keyCodes: ."+key));return false}else{target[key]=value;return true}}});}
var hasHandler={has:function has(target,key){var has=key in target;var isAllowed=allowedGlobals(key)||(typeof key==='string'&&key.charAt(0)==='_'&&!(key in target.$data));if(!has&&!isAllowed){if(key in target.$data){warnReservedPrefix(target,key);}
else{warnNonPresent(target,key);}}
return has||!isAllowed}};var getHandler={get:function get(target,key){if(typeof key==='string'&&!(key in target)){if(key in target.$data){warnReservedPrefix(target,key);}
else{warnNonPresent(target,key);}}
return target[key]}};initProxy=function initProxy(vm){if(hasProxy){var options=vm.$options;var handlers=options.render&&options.render._withStripped?getHandler:hasHandler;vm._renderProxy=new Proxy(vm,handlers);}else{vm._renderProxy=vm;}};}
var seenObjects=new _Set();function traverse(val){_traverse(val,seenObjects);seenObjects.clear();}
function _traverse(val,seen){var i,keys;var isA=Array.isArray(val);if((!isA&&!isObject(val))||Object.isFrozen(val)||val instanceof VNode){return}
if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return}
seen.add(depId);}
if(isA){i=val.length;while(i--){_traverse(val[i],seen);}}else{keys=Object.keys(val);i=keys.length;while(i--){_traverse(val[keys[i]],seen);}}}
var normalizeEvent=cached(function(name){var passive=name.charAt(0)==='&';name=passive?name.slice(1):name;var once$$1=name.charAt(0)==='~';name=once$$1?name.slice(1):name;var capture=name.charAt(0)==='!';name=capture?name.slice(1):name;return{name:name,once:once$$1,capture:capture,passive:passive}});function createFnInvoker(fns,vm){function invoker(){var arguments$1=arguments;var fns=invoker.fns;if(Array.isArray(fns)){var cloned=fns.slice();for(var i=0;i<cloned.length;i++){invokeWithErrorHandling(cloned[i],null,arguments$1,vm,"v-on handler");}}else{return invokeWithErrorHandling(fns,null,arguments,vm,"v-on handler")}}
invoker.fns=fns;return invoker}
function updateListeners(on,oldOn,add,remove$$1,createOnceHandler,vm){var name,def$$1,cur,old,event;for(name in on){def$$1=cur=on[name];old=oldOn[name];event=normalizeEvent(name);if(isUndef(cur)){warn("Invalid handler for event \""+(event.name)+"\": got "+String(cur),vm);}else if(isUndef(old)){if(isUndef(cur.fns)){cur=on[name]=createFnInvoker(cur,vm);}
if(isTrue(event.once)){cur=on[name]=createOnceHandler(event.name,cur,event.capture);}
add(event.name,cur,event.capture,event.passive,event.params);}else if(cur!==old){old.fns=cur;on[name]=old;}}
for(name in oldOn){if(isUndef(on[name])){event=normalizeEvent(name);remove$$1(event.name,oldOn[name],event.capture);}}}
function mergeVNodeHook(def,hookKey,hook){if(def instanceof VNode){def=def.data.hook||(def.data.hook={});}
var invoker;var oldHook=def[hookKey];function wrappedHook(){hook.apply(this,arguments);remove(invoker.fns,wrappedHook);}
if(isUndef(oldHook)){invoker=createFnInvoker([wrappedHook]);}else{if(isDef(oldHook.fns)&&isTrue(oldHook.merged)){invoker=oldHook;invoker.fns.push(wrappedHook);}else{invoker=createFnInvoker([oldHook,wrappedHook]);}}
invoker.merged=true;def[hookKey]=invoker;}
function extractPropsFromVNodeData(data,Ctor,tag){var propOptions=Ctor.options.props;if(isUndef(propOptions)){return}
var res={};var attrs=data.attrs;var props=data.props;if(isDef(attrs)||isDef(props)){for(var key in propOptions){var altKey=hyphenate(key);{var keyInLowerCase=key.toLowerCase();if(key!==keyInLowerCase&&attrs&&hasOwn(attrs,keyInLowerCase)){tip("Prop \""+keyInLowerCase+"\" is passed to component "+
(formatComponentName(tag||Ctor))+", but the declared prop name is"+" \""+key+"\". "+"Note that HTML attributes are case-insensitive and camelCased "+"props need to use their kebab-case equivalents when using in-DOM "+"templates. You should probably use \""+altKey+"\" instead of \""+key+"\".");}}
checkProp(res,props,key,altKey,true)||checkProp(res,attrs,key,altKey,false);}}
return res}
function checkProp(res,hash,key,altKey,preserve){if(isDef(hash)){if(hasOwn(hash,key)){res[key]=hash[key];if(!preserve){delete hash[key];}
return true}else if(hasOwn(hash,altKey)){res[key]=hash[altKey];if(!preserve){delete hash[altKey];}
return true}}
return false}
function simpleNormalizeChildren(children){for(var i=0;i<children.length;i++){if(Array.isArray(children[i])){return Array.prototype.concat.apply([],children)}}
return children}
function normalizeChildren(children){return isPrimitive(children)?[createTextVNode(children)]:Array.isArray(children)?normalizeArrayChildren(children):undefined}
function isTextNode(node){return isDef(node)&&isDef(node.text)&&isFalse(node.isComment)}
function normalizeArrayChildren(children,nestedIndex){var res=[];var i,c,lastIndex,last;for(i=0;i<children.length;i++){c=children[i];if(isUndef(c)||typeof c==='boolean'){continue}
lastIndex=res.length-1;last=res[lastIndex];if(Array.isArray(c)){if(c.length>0){c=normalizeArrayChildren(c,((nestedIndex||'')+"_"+i));if(isTextNode(c[0])&&isTextNode(last)){res[lastIndex]=createTextVNode(last.text+(c[0]).text);c.shift();}
res.push.apply(res,c);}}else if(isPrimitive(c)){if(isTextNode(last)){res[lastIndex]=createTextVNode(last.text+c);}else if(c!==''){res.push(createTextVNode(c));}}else{if(isTextNode(c)&&isTextNode(last)){res[lastIndex]=createTextVNode(last.text+c.text);}else{if(isTrue(children._isVList)&&isDef(c.tag)&&isUndef(c.key)&&isDef(nestedIndex)){c.key="__vlist"+nestedIndex+"_"+i+"__";}
res.push(c);}}}
return res}
function initProvide(vm){var provide=vm.$options.provide;if(provide){vm._provided=typeof provide==='function'?provide.call(vm):provide;}}
function initInjections(vm){var result=resolveInject(vm.$options.inject,vm);if(result){toggleObserving(false);Object.keys(result).forEach(function(key){{defineReactive$$1(vm,key,result[key],function(){warn("Avoid mutating an injected value directly since the changes will be "+"overwritten whenever the provided component re-renders. "+"injection being mutated: \""+key+"\"",vm);});}});toggleObserving(true);}}
function resolveInject(inject,vm){if(inject){var result=Object.create(null);var keys=hasSymbol?Reflect.ownKeys(inject):Object.keys(inject);for(var i=0;i<keys.length;i++){var key=keys[i];if(key==='__ob__'){continue}
var provideKey=inject[key].from;var source=vm;while(source){if(source._provided&&hasOwn(source._provided,provideKey)){result[key]=source._provided[provideKey];break}
source=source.$parent;}
if(!source){if('default'in inject[key]){var provideDefault=inject[key].default;result[key]=typeof provideDefault==='function'?provideDefault.call(vm):provideDefault;}else{warn(("Injection \""+key+"\" not found"),vm);}}}
return result}}
function resolveSlots(children,context){if(!children||!children.length){return{}}
var slots={};for(var i=0,l=children.length;i<l;i++){var child=children[i];var data=child.data;if(data&&data.attrs&&data.attrs.slot){delete data.attrs.slot;}
if((child.context===context||child.fnContext===context)&&data&&data.slot!=null){var name=data.slot;var slot=(slots[name]||(slots[name]=[]));if(child.tag==='template'){slot.push.apply(slot,child.children||[]);}else{slot.push(child);}}else{(slots.default||(slots.default=[])).push(child);}}
for(var name$1 in slots){if(slots[name$1].every(isWhitespace)){delete slots[name$1];}}
return slots}
function isWhitespace(node){return(node.isComment&&!node.asyncFactory)||node.text===' '}
function isAsyncPlaceholder(node){return node.isComment&&node.asyncFactory}
function normalizeScopedSlots(slots,normalSlots,prevSlots){var res;var hasNormalSlots=Object.keys(normalSlots).length>0;var isStable=slots?!!slots.$stable:!hasNormalSlots;var key=slots&&slots.$key;if(!slots){res={};}else if(slots._normalized){return slots._normalized}else if(isStable&&prevSlots&&prevSlots!==emptyObject&&key===prevSlots.$key&&!hasNormalSlots&&!prevSlots.$hasNormal){return prevSlots}else{res={};for(var key$1 in slots){if(slots[key$1]&&key$1[0]!=='$'){res[key$1]=normalizeScopedSlot(normalSlots,key$1,slots[key$1]);}}}
for(var key$2 in normalSlots){if(!(key$2 in res)){res[key$2]=proxyNormalSlot(normalSlots,key$2);}}
if(slots&&Object.isExtensible(slots)){(slots)._normalized=res;}
def(res,'$stable',isStable);def(res,'$key',key);def(res,'$hasNormal',hasNormalSlots);return res}
function normalizeScopedSlot(normalSlots,key,fn){var normalized=function(){var res=arguments.length?fn.apply(null,arguments):fn({});res=res&&typeof res==='object'&&!Array.isArray(res)?[res]:normalizeChildren(res);var vnode=res&&res[0];return res&&(!vnode||(res.length===1&&vnode.isComment&&!isAsyncPlaceholder(vnode)))?undefined:res};if(fn.proxy){Object.defineProperty(normalSlots,key,{get:normalized,enumerable:true,configurable:true});}
return normalized}
function proxyNormalSlot(slots,key){return function(){return slots[key];}}
function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val)||typeof val==='string'){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if(isObject(val)){if(hasSymbol&&val[Symbol.iterator]){ret=[];var iterator=val[Symbol.iterator]();var result=iterator.next();while(!result.done){ret.push(render(result.value,ret.length));result=iterator.next();}}else{keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}}
if(!isDef(ret)){ret=[];}
(ret)._isVList=true;return ret}
function renderSlot(name,fallbackRender,props,bindObject){var scopedSlotFn=this.$scopedSlots[name];var nodes;if(scopedSlotFn){props=props||{};if(bindObject){if(!isObject(bindObject)){warn('slot v-bind without argument expects an Object',this);}
props=extend(extend({},bindObject),props);}
nodes=scopedSlotFn(props)||(typeof fallbackRender==='function'?fallbackRender():fallbackRender);}else{nodes=this.$slots[name]||(typeof fallbackRender==='function'?fallbackRender():fallbackRender);}
var target=props&&props.slot;if(target){return this.$createElement('template',{slot:target},nodes)}else{return nodes}}
function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true)||identity}
function isKeyNotMatch(expect,actual){if(Array.isArray(expect)){return expect.indexOf(actual)===-1}else{return expect!==actual}}
function checkKeyCodes(eventKeyCode,key,builtInKeyCode,eventKeyName,builtInKeyName){var mappedKeyCode=config.keyCodes[key]||builtInKeyCode;if(builtInKeyName&&eventKeyName&&!config.keyCodes[key]){return isKeyNotMatch(builtInKeyName,eventKeyName)}else if(mappedKeyCode){return isKeyNotMatch(mappedKeyCode,eventKeyCode)}else if(eventKeyName){return hyphenate(eventKeyName)!==key}
return eventKeyCode===undefined}
function bindObjectProps(data,tag,value,asProp,isSync){if(value){if(!isObject(value)){warn('v-bind without argument expects an Object or Array value',this);}else{if(Array.isArray(value)){value=toObject(value);}
var hash;var loop=function(key){if(key==='class'||key==='style'||isReservedAttribute(key)){hash=data;}else{var type=data.attrs&&data.attrs.type;hash=asProp||config.mustUseProp(tag,type,key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});}
var camelizedKey=camelize(key);var hyphenatedKey=hyphenate(key);if(!(camelizedKey in hash)&&!(hyphenatedKey in hash)){hash[key]=value[key];if(isSync){var on=data.on||(data.on={});on[("update:"+key)]=function($event){value[key]=$event;};}}};for(var key in value)loop(key);}}
return data}
function renderStatic(index,isInFor){var cached=this._staticTrees||(this._staticTrees=[]);var tree=cached[index];if(tree&&!isInFor){return tree}
tree=cached[index]=this.$options.staticRenderFns[index].call(this._renderProxy,null,this);markStatic(tree,("__static__"+index),false);return tree}
function markOnce(tree,index,key){markStatic(tree,("__once__"+index+(key?("_"+key):"")),true);return tree}
function markStatic(tree,key,isOnce){if(Array.isArray(tree)){for(var i=0;i<tree.length;i++){if(tree[i]&&typeof tree[i]!=='string'){markStaticNode(tree[i],(key+"_"+i),isOnce);}}}else{markStaticNode(tree,key,isOnce);}}
function markStaticNode(node,key,isOnce){node.isStatic=true;node.key=key;node.isOnce=isOnce;}
function bindObjectListeners(data,value){if(value){if(!isPlainObject(value)){warn('v-on without argument expects an Object value',this);}else{var on=data.on=data.on?extend({},data.on):{};for(var key in value){var existing=on[key];var ours=value[key];on[key]=existing?[].concat(existing,ours):ours;}}}
return data}
function resolveScopedSlots(fns,res,hasDynamicKeys,contentHashKey){res=res||{$stable:!hasDynamicKeys};for(var i=0;i<fns.length;i++){var slot=fns[i];if(Array.isArray(slot)){resolveScopedSlots(slot,res,hasDynamicKeys);}else if(slot){if(slot.proxy){slot.fn.proxy=true;}
res[slot.key]=slot.fn;}}
if(contentHashKey){(res).$key=contentHashKey;}
return res}
function bindDynamicKeys(baseObj,values){for(var i=0;i<values.length;i+=2){var key=values[i];if(typeof key==='string'&&key){baseObj[values[i]]=values[i+1];}else if(key!==''&&key!==null){warn(("Invalid value for dynamic directive argument (expected string or null): "+key),this);}}
return baseObj}
function prependModifier(value,symbol){return typeof value==='string'?symbol+value:value}
function installRenderHelpers(target){target._o=markOnce;target._n=toNumber;target._s=toString;target._l=renderList;target._t=renderSlot;target._q=looseEqual;target._i=looseIndexOf;target._m=renderStatic;target._f=resolveFilter;target._k=checkKeyCodes;target._b=bindObjectProps;target._v=createTextVNode;target._e=createEmptyVNode;target._u=resolveScopedSlots;target._g=bindObjectListeners;target._d=bindDynamicKeys;target._p=prependModifier;}
function FunctionalRenderContext(data,props,children,parent,Ctor){var this$1=this;var options=Ctor.options;var contextVm;if(hasOwn(parent,'_uid')){contextVm=Object.create(parent);contextVm._original=parent;}else{contextVm=parent;parent=parent._original;}
var isCompiled=isTrue(options._compiled);var needNormalization=!isCompiled;this.data=data;this.props=props;this.children=children;this.parent=parent;this.listeners=data.on||emptyObject;this.injections=resolveInject(options.inject,parent);this.slots=function(){if(!this$1.$slots){normalizeScopedSlots(data.scopedSlots,this$1.$slots=resolveSlots(children,parent));}
return this$1.$slots};Object.defineProperty(this,'scopedSlots',({enumerable:true,get:function get(){return normalizeScopedSlots(data.scopedSlots,this.slots())}}));if(isCompiled){this.$options=options;this.$slots=this.slots();this.$scopedSlots=normalizeScopedSlots(data.scopedSlots,this.$slots);}
if(options._scopeId){this._c=function(a,b,c,d){var vnode=createElement(contextVm,a,b,c,d,needNormalization);if(vnode&&!Array.isArray(vnode)){vnode.fnScopeId=options._scopeId;vnode.fnContext=parent;}
return vnode};}else{this._c=function(a,b,c,d){return createElement(contextVm,a,b,c,d,needNormalization);};}}
installRenderHelpers(FunctionalRenderContext.prototype);function createFunctionalComponent(Ctor,propsData,data,contextVm,children){var options=Ctor.options;var props={};var propOptions=options.props;if(isDef(propOptions)){for(var key in propOptions){props[key]=validateProp(key,propOptions,propsData||emptyObject);}}else{if(isDef(data.attrs)){mergeProps(props,data.attrs);}
if(isDef(data.props)){mergeProps(props,data.props);}}
var renderContext=new FunctionalRenderContext(data,props,children,contextVm,Ctor);var vnode=options.render.call(null,renderContext._c,renderContext);if(vnode instanceof VNode){return cloneAndMarkFunctionalResult(vnode,data,renderContext.parent,options,renderContext)}else if(Array.isArray(vnode)){var vnodes=normalizeChildren(vnode)||[];var res=new Array(vnodes.length);for(var i=0;i<vnodes.length;i++){res[i]=cloneAndMarkFunctionalResult(vnodes[i],data,renderContext.parent,options,renderContext);}
return res}}
function cloneAndMarkFunctionalResult(vnode,data,contextVm,options,renderContext){var clone=cloneVNode(vnode);clone.fnContext=contextVm;clone.fnOptions=options;{(clone.devtoolsMeta=clone.devtoolsMeta||{}).renderContext=renderContext;}
if(data.slot){(clone.data||(clone.data={})).slot=data.slot;}
return clone}
function mergeProps(to,from){for(var key in from){to[camelize(key)]=from[key];}}
var componentVNodeHooks={init:function init(vnode,hydrating){if(vnode.componentInstance&&!vnode.componentInstance._isDestroyed&&vnode.data.keepAlive){var mountedNode=vnode;componentVNodeHooks.prepatch(mountedNode,mountedNode);}else{var child=vnode.componentInstance=createComponentInstanceForVnode(vnode,activeInstance);child.$mount(hydrating?vnode.elm:undefined,hydrating);}},prepatch:function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.componentInstance=oldVnode.componentInstance;updateChildComponent(child,options.propsData,options.listeners,vnode,options.children);},insert:function insert(vnode){var context=vnode.context;var componentInstance=vnode.componentInstance;if(!componentInstance._isMounted){componentInstance._isMounted=true;callHook(componentInstance,'mounted');}
if(vnode.data.keepAlive){if(context._isMounted){queueActivatedComponent(componentInstance);}else{activateChildComponent(componentInstance,true);}}},destroy:function destroy(vnode){var componentInstance=vnode.componentInstance;if(!componentInstance._isDestroyed){if(!vnode.data.keepAlive){componentInstance.$destroy();}else{deactivateChildComponent(componentInstance,true);}}}};var hooksToMerge=Object.keys(componentVNodeHooks);function createComponent(Ctor,data,context,children,tag){if(isUndef(Ctor)){return}
var baseCtor=context.$options._base;if(isObject(Ctor)){Ctor=baseCtor.extend(Ctor);}
if(typeof Ctor!=='function'){{warn(("Invalid Component definition: "+(String(Ctor))),context);}
return}
var asyncFactory;if(isUndef(Ctor.cid)){asyncFactory=Ctor;Ctor=resolveAsyncComponent(asyncFactory,baseCtor);if(Ctor===undefined){return createAsyncPlaceholder(asyncFactory,data,context,children,tag)}}
data=data||{};resolveConstructorOptions(Ctor);if(isDef(data.model)){transformModel(Ctor.options,data);}
var propsData=extractPropsFromVNodeData(data,Ctor,tag);if(isTrue(Ctor.options.functional)){return createFunctionalComponent(Ctor,propsData,data,context,children)}
var listeners=data.on;data.on=data.nativeOn;if(isTrue(Ctor.options.abstract)){var slot=data.slot;data={};if(slot){data.slot=slot;}}
installComponentHooks(data);var name=Ctor.options.name||tag;var vnode=new VNode(("vue-component-"+(Ctor.cid)+(name?("-"+name):'')),data,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children},asyncFactory);return vnode}
function createComponentInstanceForVnode(vnode,parent){var options={_isComponent:true,_parentVnode:vnode,parent:parent};var inlineTemplate=vnode.data.inlineTemplate;if(isDef(inlineTemplate)){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}
return new vnode.componentOptions.Ctor(options)}
function installComponentHooks(data){var hooks=data.hook||(data.hook={});for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var existing=hooks[key];var toMerge=componentVNodeHooks[key];if(existing!==toMerge&&!(existing&&existing._merged)){hooks[key]=existing?mergeHook$1(toMerge,existing):toMerge;}}}
function mergeHook$1(f1,f2){var merged=function(a,b){f1(a,b);f2(a,b);};merged._merged=true;return merged}
function transformModel(options,data){var prop=(options.model&&options.model.prop)||'value';var event=(options.model&&options.model.event)||'input';(data.attrs||(data.attrs={}))[prop]=data.model.value;var on=data.on||(data.on={});var existing=on[event];var callback=data.model.callback;if(isDef(existing)){if(Array.isArray(existing)?existing.indexOf(callback)===-1:existing!==callback){on[event]=[callback].concat(existing);}}else{on[event]=callback;}}
var SIMPLE_NORMALIZE=1;var ALWAYS_NORMALIZE=2;function createElement(context,tag,data,children,normalizationType,alwaysNormalize){if(Array.isArray(data)||isPrimitive(data)){normalizationType=children;children=data;data=undefined;}
if(isTrue(alwaysNormalize)){normalizationType=ALWAYS_NORMALIZE;}
return _createElement(context,tag,data,children,normalizationType)}
function _createElement(context,tag,data,children,normalizationType){if(isDef(data)&&isDef((data).__ob__)){warn("Avoid using observed data object as vnode data: "+(JSON.stringify(data))+"\n"+'Always create fresh vnode data objects in each render!',context);return createEmptyVNode()}
if(isDef(data)&&isDef(data.is)){tag=data.is;}
if(!tag){return createEmptyVNode()}
if(isDef(data)&&isDef(data.key)&&!isPrimitive(data.key)){{warn('Avoid using non-primitive value as key, '+'use string/number value instead.',context);}}
if(Array.isArray(children)&&typeof children[0]==='function'){data=data||{};data.scopedSlots={default:children[0]};children.length=0;}
if(normalizationType===ALWAYS_NORMALIZE){children=normalizeChildren(children);}else if(normalizationType===SIMPLE_NORMALIZE){children=simpleNormalizeChildren(children);}
var vnode,ns;if(typeof tag==='string'){var Ctor;ns=(context.$vnode&&context.$vnode.ns)||config.getTagNamespace(tag);if(config.isReservedTag(tag)){if(isDef(data)&&isDef(data.nativeOn)&&data.tag!=='component'){warn(("The .native modifier for v-on is only valid on components but it was used on <"+tag+">."),context);}
vnode=new VNode(config.parsePlatformTagName(tag),data,children,undefined,undefined,context);}else if((!data||!data.pre)&&isDef(Ctor=resolveAsset(context.$options,'components',tag))){vnode=createComponent(Ctor,data,context,children,tag);}else{vnode=new VNode(tag,data,children,undefined,undefined,context);}}else{vnode=createComponent(tag,data,context,children);}
if(Array.isArray(vnode)){return vnode}else if(isDef(vnode)){if(isDef(ns)){applyNS(vnode,ns);}
if(isDef(data)){registerDeepBindings(data);}
return vnode}else{return createEmptyVNode()}}
function applyNS(vnode,ns,force){vnode.ns=ns;if(vnode.tag==='foreignObject'){ns=undefined;force=true;}
if(isDef(vnode.children)){for(var i=0,l=vnode.children.length;i<l;i++){var child=vnode.children[i];if(isDef(child.tag)&&(isUndef(child.ns)||(isTrue(force)&&child.tag!=='svg'))){applyNS(child,ns,force);}}}}
function registerDeepBindings(data){if(isObject(data.style)){traverse(data.style);}
if(isObject(data.class)){traverse(data.class);}}
function initRender(vm){vm._vnode=null;vm._staticTrees=null;var options=vm.$options;var parentVnode=vm.$vnode=options._parentVnode;var renderContext=parentVnode&&parentVnode.context;vm.$slots=resolveSlots(options._renderChildren,renderContext);vm.$scopedSlots=emptyObject;vm._c=function(a,b,c,d){return createElement(vm,a,b,c,d,false);};vm.$createElement=function(a,b,c,d){return createElement(vm,a,b,c,d,true);};var parentData=parentVnode&&parentVnode.data;{defineReactive$$1(vm,'$attrs',parentData&&parentData.attrs||emptyObject,function(){!isUpdatingChildComponent&&warn("$attrs is readonly.",vm);},true);defineReactive$$1(vm,'$listeners',options._parentListeners||emptyObject,function(){!isUpdatingChildComponent&&warn("$listeners is readonly.",vm);},true);}}
var currentRenderingInstance=null;function renderMixin(Vue){installRenderHelpers(Vue.prototype);Vue.prototype.$nextTick=function(fn){return nextTick(fn,this)};Vue.prototype._render=function(){var vm=this;var ref=vm.$options;var render=ref.render;var _parentVnode=ref._parentVnode;if(_parentVnode){vm.$scopedSlots=normalizeScopedSlots(_parentVnode.data.scopedSlots,vm.$slots,vm.$scopedSlots);}
vm.$vnode=_parentVnode;var vnode;try{currentRenderingInstance=vm;vnode=render.call(vm._renderProxy,vm.$createElement);}catch(e){handleError(e,vm,"render");if(vm.$options.renderError){try{vnode=vm.$options.renderError.call(vm._renderProxy,vm.$createElement,e);}catch(e){handleError(e,vm,"renderError");vnode=vm._vnode;}}else{vnode=vm._vnode;}}finally{currentRenderingInstance=null;}
if(Array.isArray(vnode)&&vnode.length===1){vnode=vnode[0];}
if(!(vnode instanceof VNode)){if(Array.isArray(vnode)){warn('Multiple root nodes returned from render function. Render function '+'should return a single root node.',vm);}
vnode=createEmptyVNode();}
vnode.parent=_parentVnode;return vnode};}
function ensureCtor(comp,base){if(comp.__esModule||(hasSymbol&&comp[Symbol.toStringTag]==='Module')){comp=comp.default;}
return isObject(comp)?base.extend(comp):comp}
function createAsyncPlaceholder(factory,data,context,children,tag){var node=createEmptyVNode();node.asyncFactory=factory;node.asyncMeta={data:data,context:context,children:children,tag:tag};return node}
function resolveAsyncComponent(factory,baseCtor){if(isTrue(factory.error)&&isDef(factory.errorComp)){return factory.errorComp}
if(isDef(factory.resolved)){return factory.resolved}
var owner=currentRenderingInstance;if(owner&&isDef(factory.owners)&&factory.owners.indexOf(owner)===-1){factory.owners.push(owner);}
if(isTrue(factory.loading)&&isDef(factory.loadingComp)){return factory.loadingComp}
if(owner&&!isDef(factory.owners)){var owners=factory.owners=[owner];var sync=true;var timerLoading=null;var timerTimeout=null;(owner).$on('hook:destroyed',function(){return remove(owners,owner);});var forceRender=function(renderCompleted){for(var i=0,l=owners.length;i<l;i++){(owners[i]).$forceUpdate();}
if(renderCompleted){owners.length=0;if(timerLoading!==null){clearTimeout(timerLoading);timerLoading=null;}
if(timerTimeout!==null){clearTimeout(timerTimeout);timerTimeout=null;}}};var resolve=once(function(res){factory.resolved=ensureCtor(res,baseCtor);if(!sync){forceRender(true);}else{owners.length=0;}});var reject=once(function(reason){warn("Failed to resolve async component: "+(String(factory))+
(reason?("\nReason: "+reason):''));if(isDef(factory.errorComp)){factory.error=true;forceRender(true);}});var res=factory(resolve,reject);if(isObject(res)){if(isPromise(res)){if(isUndef(factory.resolved)){res.then(resolve,reject);}}else if(isPromise(res.component)){res.component.then(resolve,reject);if(isDef(res.error)){factory.errorComp=ensureCtor(res.error,baseCtor);}
if(isDef(res.loading)){factory.loadingComp=ensureCtor(res.loading,baseCtor);if(res.delay===0){factory.loading=true;}else{timerLoading=setTimeout(function(){timerLoading=null;if(isUndef(factory.resolved)&&isUndef(factory.error)){factory.loading=true;forceRender(false);}},res.delay||200);}}
if(isDef(res.timeout)){timerTimeout=setTimeout(function(){timerTimeout=null;if(isUndef(factory.resolved)){reject("timeout ("+(res.timeout)+"ms)");}},res.timeout);}}}
sync=false;return factory.loading?factory.loadingComp:factory.resolved}}
function getFirstComponentChild(children){if(Array.isArray(children)){for(var i=0;i<children.length;i++){var c=children[i];if(isDef(c)&&(isDef(c.componentOptions)||isAsyncPlaceholder(c))){return c}}}}
function initEvents(vm){vm._events=Object.create(null);vm._hasHookEvent=false;var listeners=vm.$options._parentListeners;if(listeners){updateComponentListeners(vm,listeners);}}
var target;function add(event,fn){target.$on(event,fn);}
function remove$1(event,fn){target.$off(event,fn);}
function createOnceHandler(event,fn){var _target=target;return function onceHandler(){var res=fn.apply(null,arguments);if(res!==null){_target.$off(event,onceHandler);}}}
function updateComponentListeners(vm,listeners,oldListeners){target=vm;updateListeners(listeners,oldListeners||{},add,remove$1,createOnceHandler,vm);target=undefined;}
function eventsMixin(Vue){var hookRE=/^hook:/;Vue.prototype.$on=function(event,fn){var vm=this;if(Array.isArray(event)){for(var i=0,l=event.length;i<l;i++){vm.$on(event[i],fn);}}else{(vm._events[event]||(vm._events[event]=[])).push(fn);if(hookRE.test(event)){vm._hasHookEvent=true;}}
return vm};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}
on.fn=fn;vm.$on(event,on);return vm};Vue.prototype.$off=function(event,fn){var vm=this;if(!arguments.length){vm._events=Object.create(null);return vm}
if(Array.isArray(event)){for(var i$1=0,l=event.length;i$1<l;i$1++){vm.$off(event[i$1],fn);}
return vm}
var cbs=vm._events[event];if(!cbs){return vm}
if(!fn){vm._events[event]=null;return vm}
var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){cbs.splice(i,1);break}}
return vm};Vue.prototype.$emit=function(event){var vm=this;{var lowerCaseEvent=event.toLowerCase();if(lowerCaseEvent!==event&&vm._events[lowerCaseEvent]){tip("Event \""+lowerCaseEvent+"\" is emitted in component "+
(formatComponentName(vm))+" but the handler is registered for \""+event+"\". "+"Note that HTML attributes are case-insensitive and you cannot use "+"v-on to listen to camelCase events when using in-DOM templates. "+"You should probably use \""+(hyphenate(event))+"\" instead of \""+event+"\".");}}
var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;var args=toArray(arguments,1);var info="event handler for \""+event+"\"";for(var i=0,l=cbs.length;i<l;i++){invokeWithErrorHandling(cbs[i],vm,args,vm,info);}}
return vm};}
var activeInstance=null;var isUpdatingChildComponent=false;function setActiveInstance(vm){var prevActiveInstance=activeInstance;activeInstance=vm;return function(){activeInstance=prevActiveInstance;}}
function initLifecycle(vm){var options=vm.$options;var parent=options.parent;if(parent&&!options.abstract){while(parent.$options.abstract&&parent.$parent){parent=parent.$parent;}
parent.$children.push(vm);}
vm.$parent=parent;vm.$root=parent?parent.$root:vm;vm.$children=[];vm.$refs={};vm._watcher=null;vm._inactive=null;vm._directInactive=false;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}
function lifecycleMixin(Vue){Vue.prototype._update=function(vnode,hydrating){var vm=this;var prevEl=vm.$el;var prevVnode=vm._vnode;var restoreActiveInstance=setActiveInstance(vm);vm._vnode=vnode;if(!prevVnode){vm.$el=vm.__patch__(vm.$el,vnode,hydrating,false);}else{vm.$el=vm.__patch__(prevVnode,vnode);}
restoreActiveInstance();if(prevEl){prevEl.__vue__=null;}
if(vm.$el){vm.$el.__vue__=vm;}
if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return}
callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options.abstract){remove(parent.$children,vm);}
if(vm._watcher){vm._watcher.teardown();}
var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}
if(vm._data.__ob__){vm._data.__ob__.vmCount--;}
vm._isDestroyed=true;vm.__patch__(vm._vnode,null);callHook(vm,'destroyed');vm.$off();if(vm.$el){vm.$el.__vue__=null;}
if(vm.$vnode){vm.$vnode.parent=null;}};}
function mountComponent(vm,el,hydrating){vm.$el=el;if(!vm.$options.render){vm.$options.render=createEmptyVNode;{if((vm.$options.template&&vm.$options.template.charAt(0)!=='#')||vm.$options.el||el){warn('You are using the runtime-only build of Vue where the template '+'compiler is not available. Either pre-compile the templates into '+'render functions, or use the compiler-included build.',vm);}else{warn('Failed to mount component: template or render function not defined.',vm);}}}
callHook(vm,'beforeMount');var updateComponent;if(config.performance&&mark){updateComponent=function(){var name=vm._name;var id=vm._uid;var startTag="vue-perf-start:"+id;var endTag="vue-perf-end:"+id;mark(startTag);var vnode=vm._render();mark(endTag);measure(("vue "+name+" render"),startTag,endTag);mark(startTag);vm._update(vnode,hydrating);mark(endTag);measure(("vue "+name+" patch"),startTag,endTag);};}else{updateComponent=function(){vm._update(vm._render(),hydrating);};}
new Watcher(vm,updateComponent,noop,{before:function before(){if(vm._isMounted&&!vm._isDestroyed){callHook(vm,'beforeUpdate');}}},true);hydrating=false;if(vm.$vnode==null){vm._isMounted=true;callHook(vm,'mounted');}
return vm}
function updateChildComponent(vm,propsData,listeners,parentVnode,renderChildren){{isUpdatingChildComponent=true;}
var newScopedSlots=parentVnode.data.scopedSlots;var oldScopedSlots=vm.$scopedSlots;var hasDynamicScopedSlot=!!((newScopedSlots&&!newScopedSlots.$stable)||(oldScopedSlots!==emptyObject&&!oldScopedSlots.$stable)||(newScopedSlots&&vm.$scopedSlots.$key!==newScopedSlots.$key)||(!newScopedSlots&&vm.$scopedSlots.$key));var needsForceUpdate=!!(renderChildren||vm.$options._renderChildren||hasDynamicScopedSlot);vm.$options._parentVnode=parentVnode;vm.$vnode=parentVnode;if(vm._vnode){vm._vnode.parent=parentVnode;}
vm.$options._renderChildren=renderChildren;vm.$attrs=parentVnode.data.attrs||emptyObject;vm.$listeners=listeners||emptyObject;if(propsData&&vm.$options.props){toggleObserving(false);var props=vm._props;var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];var propOptions=vm.$options.props;props[key]=validateProp(key,propOptions,propsData,vm);}
toggleObserving(true);vm.$options.propsData=propsData;}
listeners=listeners||emptyObject;var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;updateComponentListeners(vm,listeners,oldListeners);if(needsForceUpdate){vm.$slots=resolveSlots(renderChildren,parentVnode.context);vm.$forceUpdate();}
{isUpdatingChildComponent=false;}}
function isInInactiveTree(vm){while(vm&&(vm=vm.$parent)){if(vm._inactive){return true}}
return false}
function activateChildComponent(vm,direct){if(direct){vm._directInactive=false;if(isInInactiveTree(vm)){return}}else if(vm._directInactive){return}
if(vm._inactive||vm._inactive===null){vm._inactive=false;for(var i=0;i<vm.$children.length;i++){activateChildComponent(vm.$children[i]);}
callHook(vm,'activated');}}
function deactivateChildComponent(vm,direct){if(direct){vm._directInactive=true;if(isInInactiveTree(vm)){return}}
if(!vm._inactive){vm._inactive=true;for(var i=0;i<vm.$children.length;i++){deactivateChildComponent(vm.$children[i]);}
callHook(vm,'deactivated');}}
function callHook(vm,hook){pushTarget();var handlers=vm.$options[hook];var info=hook+" hook";if(handlers){for(var i=0,j=handlers.length;i<j;i++){invokeWithErrorHandling(handlers[i],vm,null,vm,info);}}
if(vm._hasHookEvent){vm.$emit('hook:'+hook);}
popTarget();}
var MAX_UPDATE_COUNT=100;var queue=[];var activatedChildren=[];var has={};var circular={};var waiting=false;var flushing=false;var index=0;function resetSchedulerState(){index=queue.length=activatedChildren.length=0;has={};{circular={};}
waiting=flushing=false;}
var currentFlushTimestamp=0;var getNow=Date.now;if(inBrowser&&!isIE){var performance=window.performance;if(performance&&typeof performance.now==='function'&&getNow()>document.createEvent('Event').timeStamp){getNow=function(){return performance.now();};}}
function flushSchedulerQueue(){currentFlushTimestamp=getNow();flushing=true;var watcher,id;queue.sort(function(a,b){return a.id-b.id;});for(index=0;index<queue.length;index++){watcher=queue[index];if(watcher.before){watcher.before();}
id=watcher.id;has[id]=null;watcher.run();if(has[id]!=null){circular[id]=(circular[id]||0)+1;if(circular[id]>MAX_UPDATE_COUNT){warn('You may have an infinite update loop '+(watcher.user?("in watcher with expression \""+(watcher.expression)+"\""):"in a component render function."),watcher.vm);break}}}
var activatedQueue=activatedChildren.slice();var updatedQueue=queue.slice();resetSchedulerState();callActivatedHooks(activatedQueue);callUpdatedHooks(updatedQueue);if(devtools&&config.devtools){devtools.emit('flush');}}
function callUpdatedHooks(queue){var i=queue.length;while(i--){var watcher=queue[i];var vm=watcher.vm;if(vm._watcher===watcher&&vm._isMounted&&!vm._isDestroyed){callHook(vm,'updated');}}}
function queueActivatedComponent(vm){vm._inactive=false;activatedChildren.push(vm);}
function callActivatedHooks(queue){for(var i=0;i<queue.length;i++){queue[i]._inactive=true;activateChildComponent(queue[i],true);}}
function queueWatcher(watcher){var id=watcher.id;if(has[id]==null){has[id]=true;if(!flushing){queue.push(watcher);}else{var i=queue.length-1;while(i>index&&queue[i].id>watcher.id){i--;}
queue.splice(i+1,0,watcher);}
if(!waiting){waiting=true;if(!config.async){flushSchedulerQueue();return}
nextTick(flushSchedulerQueue);}}}
var uid$2=0;var Watcher=function Watcher(vm,expOrFn,cb,options,isRenderWatcher){this.vm=vm;if(isRenderWatcher){vm._watcher=this;}
vm._watchers.push(this);if(options){this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.sync=!!options.sync;this.before=options.before;}else{this.deep=this.user=this.lazy=this.sync=false;}
this.cb=cb;this.id=++uid$2;this.active=true;this.dirty=this.lazy;this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();this.expression=expOrFn.toString();if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=parsePath(expOrFn);if(!this.getter){this.getter=noop;warn("Failed watching path: \""+expOrFn+"\" "+'Watcher only accepts simple dot-delimited paths. '+'For full control, use a function instead.',vm);}}
this.value=this.lazy?undefined:this.get();};Watcher.prototype.get=function get(){pushTarget(this);var value;var vm=this.vm;try{value=this.getter.call(vm,vm);}catch(e){if(this.user){handleError(e,vm,("getter for watcher \""+(this.expression)+"\""));}else{throw e}}finally{if(this.deep){traverse(value);}
popTarget();this.cleanupDeps();}
return value};Watcher.prototype.addDep=function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};Watcher.prototype.cleanupDeps=function cleanupDeps(){var i=this.deps.length;while(i--){var dep=this.deps[i];if(!this.newDepIds.has(dep.id)){dep.removeSub(this);}}
var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};Watcher.prototype.update=function update(){if(this.lazy){this.dirty=true;}else if(this.sync){this.run();}else{queueWatcher(this);}};Watcher.prototype.run=function run(){if(this.active){var value=this.get();if(value!==this.value||isObject(value)||this.deep){var oldValue=this.value;this.value=value;if(this.user){var info="callback for watcher \""+(this.expression)+"\"";invokeWithErrorHandling(this.cb,this.vm,[value,oldValue],this.vm,info);}else{this.cb.call(this.vm,value,oldValue);}}}};Watcher.prototype.evaluate=function evaluate(){this.value=this.get();this.dirty=false;};Watcher.prototype.depend=function depend(){var i=this.deps.length;while(i--){this.deps[i].depend();}};Watcher.prototype.teardown=function teardown(){if(this.active){if(!this.vm._isBeingDestroyed){remove(this.vm._watchers,this);}
var i=this.deps.length;while(i--){this.deps[i].removeSub(this);}
this.active=false;}};var sharedPropertyDefinition={enumerable:true,configurable:true,get:noop,set:noop};function proxy(target,sourceKey,key){sharedPropertyDefinition.get=function proxyGetter(){return this[sourceKey][key]};sharedPropertyDefinition.set=function proxySetter(val){this[sourceKey][key]=val;};Object.defineProperty(target,key,sharedPropertyDefinition);}
function initState(vm){vm._watchers=[];var opts=vm.$options;if(opts.props){initProps(vm,opts.props);}
if(opts.methods){initMethods(vm,opts.methods);}
if(opts.data){initData(vm);}else{observe(vm._data={},true);}
if(opts.computed){initComputed(vm,opts.computed);}
if(opts.watch&&opts.watch!==nativeWatch){initWatch(vm,opts.watch);}}
function initProps(vm,propsOptions){var propsData=vm.$options.propsData||{};var props=vm._props={};var keys=vm.$options._propKeys=[];var isRoot=!vm.$parent;if(!isRoot){toggleObserving(false);}
var loop=function(key){keys.push(key);var value=validateProp(key,propsOptions,propsData,vm);{var hyphenatedKey=hyphenate(key);if(isReservedAttribute(hyphenatedKey)||config.isReservedAttr(hyphenatedKey)){warn(("\""+hyphenatedKey+"\" is a reserved attribute and cannot be used as component prop."),vm);}
defineReactive$$1(props,key,value,function(){if(!isRoot&&!isUpdatingChildComponent){warn("Avoid mutating a prop directly since the value will be "+"overwritten whenever the parent component re-renders. "+"Instead, use a data or computed property based on the prop's "+"value. Prop being mutated: \""+key+"\"",vm);}});}
if(!(key in vm)){proxy(vm,"_props",key);}};for(var key in propsOptions)loop(key);toggleObserving(true);}
function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?getData(data,vm):data||{};if(!isPlainObject(data)){data={};warn('data functions should return an object:\n'+'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',vm);}
var keys=Object.keys(data);var props=vm.$options.props;var methods=vm.$options.methods;var i=keys.length;while(i--){var key=keys[i];{if(methods&&hasOwn(methods,key)){warn(("Method \""+key+"\" has already been defined as a data property."),vm);}}
if(props&&hasOwn(props,key)){warn("The data property \""+key+"\" is already declared as a prop. "+"Use prop default value instead.",vm);}else if(!isReserved(key)){proxy(vm,"_data",key);}}
observe(data,true);}
function getData(data,vm){pushTarget();try{return data.call(vm,vm)}catch(e){handleError(e,vm,"data()");return{}}finally{popTarget();}}
var computedWatcherOptions={lazy:true};function initComputed(vm,computed){var watchers=vm._computedWatchers=Object.create(null);var isSSR=isServerRendering();for(var key in computed){var userDef=computed[key];var getter=typeof userDef==='function'?userDef:userDef.get;if(getter==null){warn(("Getter is missing for computed property \""+key+"\"."),vm);}
if(!isSSR){watchers[key]=new Watcher(vm,getter||noop,noop,computedWatcherOptions);}
if(!(key in vm)){defineComputed(vm,key,userDef);}else{if(key in vm.$data){warn(("The computed property \""+key+"\" is already defined in data."),vm);}else if(vm.$options.props&&key in vm.$options.props){warn(("The computed property \""+key+"\" is already defined as a prop."),vm);}else if(vm.$options.methods&&key in vm.$options.methods){warn(("The computed property \""+key+"\" is already defined as a method."),vm);}}}}
function defineComputed(target,key,userDef){var shouldCache=!isServerRendering();if(typeof userDef==='function'){sharedPropertyDefinition.get=shouldCache?createComputedGetter(key):createGetterInvoker(userDef);sharedPropertyDefinition.set=noop;}else{sharedPropertyDefinition.get=userDef.get?shouldCache&&userDef.cache!==false?createComputedGetter(key):createGetterInvoker(userDef.get):noop;sharedPropertyDefinition.set=userDef.set||noop;}
if(sharedPropertyDefinition.set===noop){sharedPropertyDefinition.set=function(){warn(("Computed property \""+key+"\" was assigned to but it has no setter."),this);};}
Object.defineProperty(target,key,sharedPropertyDefinition);}
function createComputedGetter(key){return function computedGetter(){var watcher=this._computedWatchers&&this._computedWatchers[key];if(watcher){if(watcher.dirty){watcher.evaluate();}
if(Dep.target){watcher.depend();}
return watcher.value}}}
function createGetterInvoker(fn){return function computedGetter(){return fn.call(this,this)}}
function initMethods(vm,methods){var props=vm.$options.props;for(var key in methods){{if(typeof methods[key]!=='function'){warn("Method \""+key+"\" has type \""+(typeof methods[key])+"\" in the component definition. "+"Did you reference the function correctly?",vm);}
if(props&&hasOwn(props,key)){warn(("Method \""+key+"\" has already been defined as a prop."),vm);}
if((key in vm)&&isReserved(key)){warn("Method \""+key+"\" conflicts with an existing Vue instance method. "+"Avoid defining component methods that start with _ or $.");}}
vm[key]=typeof methods[key]!=='function'?noop:bind(methods[key],vm);}}
function initWatch(vm,watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,key,handler[i]);}}else{createWatcher(vm,key,handler);}}}
function createWatcher(vm,expOrFn,handler,options){if(isPlainObject(handler)){options=handler;handler=handler.handler;}
if(typeof handler==='string'){handler=vm[handler];}
return vm.$watch(expOrFn,handler,options)}
function stateMixin(Vue){var dataDef={};dataDef.get=function(){return this._data};var propsDef={};propsDef.get=function(){return this._props};{dataDef.set=function(){warn('Avoid replacing instance root $data. '+'Use nested data properties instead.',this);};propsDef.set=function(){warn("$props is readonly.",this);};}
Object.defineProperty(Vue.prototype,'$data',dataDef);Object.defineProperty(Vue.prototype,'$props',propsDef);Vue.prototype.$set=set;Vue.prototype.$delete=del;Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;if(isPlainObject(cb)){return createWatcher(vm,expOrFn,cb,options)}
options=options||{};options.user=true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){var info="callback for immediate watcher \""+(watcher.expression)+"\"";pushTarget();invokeWithErrorHandling(cb,vm,[watcher.value],vm,info);popTarget();}
return function unwatchFn(){watcher.teardown();}};}
var uid$3=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;vm._uid=uid$3++;var startTag,endTag;if(config.performance&&mark){startTag="vue-perf-start:"+(vm._uid);endTag="vue-perf-end:"+(vm._uid);mark(startTag);}
vm._isVue=true;if(options&&options._isComponent){initInternalComponent(vm,options);}else{vm.$options=mergeOptions(resolveConstructorOptions(vm.constructor),options||{},vm);}
{initProxy(vm);}
vm._self=vm;initLifecycle(vm);initEvents(vm);initRender(vm);callHook(vm,'beforeCreate');initInjections(vm);initState(vm);initProvide(vm);callHook(vm,'created');if(config.performance&&mark){vm._name=formatComponentName(vm,false);mark(endTag);measure(("vue "+(vm._name)+" init"),startTag,endTag);}
if(vm.$options.el){vm.$mount(vm.$options.el);}};}
function initInternalComponent(vm,options){var opts=vm.$options=Object.create(vm.constructor.options);var parentVnode=options._parentVnode;opts.parent=options.parent;opts._parentVnode=parentVnode;var vnodeComponentOptions=parentVnode.componentOptions;opts.propsData=vnodeComponentOptions.propsData;opts._parentListeners=vnodeComponentOptions.listeners;opts._renderChildren=vnodeComponentOptions.children;opts._componentTag=vnodeComponentOptions.tag;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}
function resolveConstructorOptions(Ctor){var options=Ctor.options;if(Ctor.super){var superOptions=resolveConstructorOptions(Ctor.super);var cachedSuperOptions=Ctor.superOptions;if(superOptions!==cachedSuperOptions){Ctor.superOptions=superOptions;var modifiedOptions=resolveModifiedOptions(Ctor);if(modifiedOptions){extend(Ctor.extendOptions,modifiedOptions);}
options=Ctor.options=mergeOptions(superOptions,Ctor.extendOptions);if(options.name){options.components[options.name]=Ctor;}}}
return options}
function resolveModifiedOptions(Ctor){var modified;var latest=Ctor.options;var sealed=Ctor.sealedOptions;for(var key in latest){if(latest[key]!==sealed[key]){if(!modified){modified={};}
modified[key]=latest[key];}}
return modified}
function Vue(options){if(!(this instanceof Vue)){warn('Vue is a constructor and should be called with the `new` keyword');}
this._init(options);}
initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);renderMixin(Vue);function initUse(Vue){Vue.use=function(plugin){var installedPlugins=(this._installedPlugins||(this._installedPlugins=[]));if(installedPlugins.indexOf(plugin)>-1){return this}
var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else if(typeof plugin==='function'){plugin.apply(null,args);}
installedPlugins.push(plugin);return this};}
function initMixin$1(Vue){Vue.mixin=function(mixin){this.options=mergeOptions(this.options,mixin);return this};}
function initExtend(Vue){Vue.cid=0;var cid=1;Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var SuperId=Super.cid;var cachedCtors=extendOptions._Ctor||(extendOptions._Ctor={});if(cachedCtors[SuperId]){return cachedCtors[SuperId]}
var name=extendOptions.name||Super.options.name;if(name){validateComponentName(name);}
var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;if(Sub.options.props){initProps$1(Sub);}
if(Sub.options.computed){initComputed$1(Sub);}
Sub.extend=Super.extend;Sub.mixin=Super.mixin;Sub.use=Super.use;ASSET_TYPES.forEach(function(type){Sub[type]=Super[type];});if(name){Sub.options.components[name]=Sub;}
Sub.superOptions=Super.options;Sub.extendOptions=extendOptions;Sub.sealedOptions=extend({},Sub.options);cachedCtors[SuperId]=Sub;return Sub};}
function initProps$1(Comp){var props=Comp.options.props;for(var key in props){proxy(Comp.prototype,"_props",key);}}
function initComputed$1(Comp){var computed=Comp.options.computed;for(var key in computed){defineComputed(Comp.prototype,key,computed[key]);}}
function initAssetRegisters(Vue){ASSET_TYPES.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id]}else{if(type==='component'){validateComponentName(id);}
if(type==='component'&&isPlainObject(definition)){definition.name=definition.name||id;definition=this.options._base.extend(definition);}
if(type==='directive'&&typeof definition==='function'){definition={bind:definition,update:definition};}
this.options[type+'s'][id]=definition;return definition}};});}
function getComponentName(opts){return opts&&(opts.Ctor.options.name||opts.tag)}
function matches(pattern,name){if(Array.isArray(pattern)){return pattern.indexOf(name)>-1}else if(typeof pattern==='string'){return pattern.split(',').indexOf(name)>-1}else if(isRegExp(pattern)){return pattern.test(name)}
return false}
function pruneCache(keepAliveInstance,filter){var cache=keepAliveInstance.cache;var keys=keepAliveInstance.keys;var _vnode=keepAliveInstance._vnode;for(var key in cache){var entry=cache[key];if(entry){var name=entry.name;if(name&&!filter(name)){pruneCacheEntry(cache,key,keys,_vnode);}}}}
function pruneCacheEntry(cache,key,keys,current){var entry=cache[key];if(entry&&(!current||entry.tag!==current.tag)){entry.componentInstance.$destroy();}
cache[key]=null;remove(keys,key);}
var patternTypes=[String,RegExp,Array];var KeepAlive={name:'keep-alive',abstract:true,props:{include:patternTypes,exclude:patternTypes,max:[String,Number]},methods:{cacheVNode:function cacheVNode(){var ref=this;var cache=ref.cache;var keys=ref.keys;var vnodeToCache=ref.vnodeToCache;var keyToCache=ref.keyToCache;if(vnodeToCache){var tag=vnodeToCache.tag;var componentInstance=vnodeToCache.componentInstance;var componentOptions=vnodeToCache.componentOptions;cache[keyToCache]={name:getComponentName(componentOptions),tag:tag,componentInstance:componentInstance,};keys.push(keyToCache);if(this.max&&keys.length>parseInt(this.max)){pruneCacheEntry(cache,keys[0],keys,this._vnode);}
this.vnodeToCache=null;}}},created:function created(){this.cache=Object.create(null);this.keys=[];},destroyed:function destroyed(){for(var key in this.cache){pruneCacheEntry(this.cache,key,this.keys);}},mounted:function mounted(){var this$1=this;this.cacheVNode();this.$watch('include',function(val){pruneCache(this$1,function(name){return matches(val,name);});});this.$watch('exclude',function(val){pruneCache(this$1,function(name){return!matches(val,name);});});},updated:function updated(){this.cacheVNode();},render:function render(){var slot=this.$slots.default;var vnode=getFirstComponentChild(slot);var componentOptions=vnode&&vnode.componentOptions;if(componentOptions){var name=getComponentName(componentOptions);var ref=this;var include=ref.include;var exclude=ref.exclude;if((include&&(!name||!matches(include,name)))||(exclude&&name&&matches(exclude,name))){return vnode}
var ref$1=this;var cache=ref$1.cache;var keys=ref$1.keys;var key=vnode.key==null?componentOptions.Ctor.cid+(componentOptions.tag?("::"+(componentOptions.tag)):''):vnode.key;if(cache[key]){vnode.componentInstance=cache[key].componentInstance;remove(keys,key);keys.push(key);}else{this.vnodeToCache=vnode;this.keyToCache=key;}
vnode.data.keepAlive=true;}
return vnode||(slot&&slot[0])}};var builtInComponents={KeepAlive:KeepAlive};function initGlobalAPI(Vue){var configDef={};configDef.get=function(){return config;};{configDef.set=function(){warn('Do not replace the Vue.config object, set individual fields instead.');};}
Object.defineProperty(Vue,'config',configDef);Vue.util={warn:warn,extend:extend,mergeOptions:mergeOptions,defineReactive:defineReactive$$1};Vue.set=set;Vue.delete=del;Vue.nextTick=nextTick;Vue.observable=function(obj){observe(obj);return obj};Vue.options=Object.create(null);ASSET_TYPES.forEach(function(type){Vue.options[type+'s']=Object.create(null);});Vue.options._base=Vue;extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}
initGlobalAPI(Vue);Object.defineProperty(Vue.prototype,'$isServer',{get:isServerRendering});Object.defineProperty(Vue.prototype,'$ssrContext',{get:function get(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(Vue,'FunctionalRenderContext',{value:FunctionalRenderContext});Vue.version='2.6.14';var isReservedAttr=makeMap('style,class');var acceptValue=makeMap('input,textarea,option,select,progress');var mustUseProp=function(tag,type,attr){return((attr==='value'&&acceptValue(tag))&&type!=='button'||(attr==='selected'&&tag==='option')||(attr==='checked'&&tag==='input')||(attr==='muted'&&tag==='video'))};var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isValidContentEditableValue=makeMap('events,caret,typing,plaintext-only');var convertEnumeratedValue=function(key,value){return isFalsyAttrValue(value)||value==='false'?'false':key==='contenteditable'&&isValidContentEditableValue(value)?value:'true'};var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+'required,reversed,scoped,seamless,selected,sortable,'+'truespeed,typemustmatch,visible');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink'};var getXlinkProp=function(name){return isXlink(name)?name.slice(6,name.length):''};var isFalsyAttrValue=function(val){return val==null||val===false};function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(isDef(childNode.componentInstance)){childNode=childNode.componentInstance._vnode;if(childNode&&childNode.data){data=mergeClassData(childNode.data,data);}}
while(isDef(parentNode=parentNode.parent)){if(parentNode&&parentNode.data){data=mergeClassData(data,parentNode.data);}}
return renderClass(data.staticClass,data.class)}
function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:isDef(child.class)?[child.class,parent.class]:parent.class}}
function renderClass(staticClass,dynamicClass){if(isDef(staticClass)||isDef(dynamicClass)){return concat(staticClass,stringifyClass(dynamicClass))}
return''}
function concat(a,b){return a?b?(a+' '+b):a:(b||'')}
function stringifyClass(value){if(Array.isArray(value)){return stringifyArray(value)}
if(isObject(value)){return stringifyObject(value)}
if(typeof value==='string'){return value}
return''}
function stringifyArray(value){var res='';var stringified;for(var i=0,l=value.length;i<l;i++){if(isDef(stringified=stringifyClass(value[i]))&&stringified!==''){if(res){res+=' ';}
res+=stringified;}}
return res}
function stringifyObject(value){var res='';for(var key in value){if(value[key]){if(res){res+=' ';}
res+=key;}}
return res}
var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,'+'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,'+'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+'s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+'embed,object,param,source,canvas,script,noscript,del,ins,'+'caption,col,colgroup,table,thead,tbody,td,th,tr,'+'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+'output,progress,select,textarea,'+'details,dialog,menu,menuitem,summary,'+'content,element,shadow,template,blockquote,iframe,tfoot');var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,'+'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isPreTag=function(tag){return tag==='pre';};var isReservedTag=function(tag){return isHTMLTag(tag)||isSVG(tag)};function getTagNamespace(tag){if(isSVG(tag)){return'svg'}
if(tag==='math'){return'math'}}
var unknownElementCache=Object.create(null);function isUnknownElement(tag){if(!inBrowser){return true}
if(isReservedTag(tag)){return false}
tag=tag.toLowerCase();if(unknownElementCache[tag]!=null){return unknownElementCache[tag]}
var el=document.createElement(tag);if(tag.indexOf('-')>-1){return(unknownElementCache[tag]=(el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement))}else{return(unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString()))}}
var isTextInputType=makeMap('text,number,password,search,email,tel,url');function query(el){if(typeof el==='string'){var selected=document.querySelector(el);if(!selected){warn('Cannot find element: '+el);return document.createElement('div')}
return selected}else{return el}}
function createElement$1(tagName,vnode){var elm=document.createElement(tagName);if(tagName!=='select'){return elm}
if(vnode.data&&vnode.data.attrs&&vnode.data.attrs.multiple!==undefined){elm.setAttribute('multiple','multiple');}
return elm}
function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName)}
function createTextNode(text){return document.createTextNode(text)}
function createComment(text){return document.createComment(text)}
function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}
function removeChild(node,child){node.removeChild(child);}
function appendChild(node,child){node.appendChild(child);}
function parentNode(node){return node.parentNode}
function nextSibling(node){return node.nextSibling}
function tagName(node){return node.tagName}
function setTextContent(node,text){node.textContent=text;}
function setStyleScope(node,scopeId){node.setAttribute(scopeId,'');}
var nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,setStyleScope:setStyleScope});var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref!==vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!isDef(key)){return}
var vm=vnode.context;var ref=vnode.componentInstance||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(!Array.isArray(refs[key])){refs[key]=[ref];}else if(refs[key].indexOf(ref)<0){refs[key].push(ref);}}else{refs[key]=ref;}}}
var emptyNode=new VNode('',{},[]);var hooks=['create','activate','update','remove','destroy'];function sameVnode(a,b){return(a.key===b.key&&a.asyncFactory===b.asyncFactory&&((a.tag===b.tag&&a.isComment===b.isComment&&isDef(a.data)===isDef(b.data)&&sameInputType(a,b))||(isTrue(a.isAsyncPlaceholder)&&isUndef(b.asyncFactory.error))))}
function sameInputType(a,b){if(a.tag!=='input'){return true}
var i;var typeA=isDef(i=a.data)&&isDef(i=i.attrs)&&i.type;var typeB=isDef(i=b.data)&&isDef(i=i.attrs)&&i.type;return typeA===typeB||isTextInputType(typeA)&&isTextInputType(typeB)}
function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key)){map[key]=i;}}
return map}
function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks.length;++i){cbs[hooks[i]]=[];for(j=0;j<modules.length;++j){if(isDef(modules[j][hooks[i]])){cbs[hooks[i]].push(modules[j][hooks[i]]);}}}
function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm)}
function createRmCb(childElm,listeners){function remove$$1(){if(--remove$$1.listeners===0){removeNode(childElm);}}
remove$$1.listeners=listeners;return remove$$1}
function removeNode(el){var parent=nodeOps.parentNode(el);if(isDef(parent)){nodeOps.removeChild(parent,el);}}
function isUnknownElement$$1(vnode,inVPre){return(!inVPre&&!vnode.ns&&!(config.ignoredElements.length&&config.ignoredElements.some(function(ignore){return isRegExp(ignore)?ignore.test(vnode.tag):ignore===vnode.tag}))&&config.isUnknownElement(vnode.tag))}
var creatingElmInVPre=0;function createElm(vnode,insertedVnodeQueue,parentElm,refElm,nested,ownerArray,index){if(isDef(vnode.elm)&&isDef(ownerArray)){vnode=ownerArray[index]=cloneVNode(vnode);}
vnode.isRootInsert=!nested;if(createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){return}
var data=vnode.data;var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){{if(data&&data.pre){creatingElmInVPre++;}
if(isUnknownElement$$1(vnode,creatingElmInVPre)){warn('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.',vnode.context);}}
vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag,vnode);setScope(vnode);{createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}
insert(parentElm,vnode.elm,refElm);}
if(data&&data.pre){creatingElmInVPre--;}}else if(isTrue(vnode.isComment)){vnode.elm=nodeOps.createComment(vnode.text);insert(parentElm,vnode.elm,refElm);}else{vnode.elm=nodeOps.createTextNode(vnode.text);insert(parentElm,vnode.elm,refElm);}}
function createComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i=vnode.data;if(isDef(i)){var isReactivated=isDef(vnode.componentInstance)&&i.keepAlive;if(isDef(i=i.hook)&&isDef(i=i.init)){i(vnode,false);}
if(isDef(vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);insert(parentElm,vnode.elm,refElm);if(isTrue(isReactivated)){reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm);}
return true}}}
function initComponent(vnode,insertedVnodeQueue){if(isDef(vnode.data.pendingInsert)){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);vnode.data.pendingInsert=null;}
vnode.elm=vnode.componentInstance.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else{registerRef(vnode);insertedVnodeQueue.push(vnode);}}
function reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i;var innerNode=vnode;while(innerNode.componentInstance){innerNode=innerNode.componentInstance._vnode;if(isDef(i=innerNode.data)&&isDef(i=i.transition)){for(i=0;i<cbs.activate.length;++i){cbs.activate[i](emptyNode,innerNode);}
insertedVnodeQueue.push(innerNode);break}}
insert(parentElm,vnode.elm,refElm);}
function insert(parent,elm,ref$$1){if(isDef(parent)){if(isDef(ref$$1)){if(nodeOps.parentNode(ref$$1)===parent){nodeOps.insertBefore(parent,elm,ref$$1);}}else{nodeOps.appendChild(parent,elm);}}}
function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){{checkDuplicateKeys(children);}
for(var i=0;i<children.length;++i){createElm(children[i],insertedVnodeQueue,vnode.elm,null,true,children,i);}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(String(vnode.text)));}}
function isPatchable(vnode){while(vnode.componentInstance){vnode=vnode.componentInstance._vnode;}
return isDef(vnode.tag)}
function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,vnode);}
i=vnode.data.hook;if(isDef(i)){if(isDef(i.create)){i.create(emptyNode,vnode);}
if(isDef(i.insert)){insertedVnodeQueue.push(vnode);}}}
function setScope(vnode){var i;if(isDef(i=vnode.fnScopeId)){nodeOps.setStyleScope(vnode.elm,i);}else{var ancestor=vnode;while(ancestor){if(isDef(i=ancestor.context)&&isDef(i=i.$options._scopeId)){nodeOps.setStyleScope(vnode.elm,i);}
ancestor=ancestor.parent;}}
if(isDef(i=activeInstance)&&i!==vnode.context&&i!==vnode.fnContext&&isDef(i=i.$options._scopeId)){nodeOps.setStyleScope(vnode.elm,i);}}
function addVnodes(parentElm,refElm,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){createElm(vnodes[startIdx],insertedVnodeQueue,parentElm,refElm,false,vnodes,startIdx);}}
function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}
for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}
if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}
function removeVnodes(vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else{removeNode(ch.elm);}}}}
function removeAndInvokeRemoveHook(vnode,rm){if(isDef(rm)||isDef(vnode.data)){var i;var listeners=cbs.remove.length+1;if(isDef(rm)){rm.listeners+=listeners;}else{rm=createRmCb(vnode.elm,listeners);}
if(isDef(i=vnode.componentInstance)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}
for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}
if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeNode(vnode.elm);}}
function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,vnodeToMove,refElm;var canMove=!removeOnly;{checkDuplicateKeys(newCh);}
while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];}else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue,newCh,newEndIdx);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue,newCh,newEndIdx);canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}
idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:findIdxInOld(newStartVnode,oldCh,oldStartIdx,oldEndIdx);if(isUndef(idxInOld)){createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm,false,newCh,newStartIdx);}else{vnodeToMove=oldCh[idxInOld];if(sameVnode(vnodeToMove,newStartVnode)){patchVnode(vnodeToMove,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);oldCh[idxInOld]=undefined;canMove&&nodeOps.insertBefore(parentElm,vnodeToMove.elm,oldStartVnode.elm);}else{createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm,false,newCh,newStartIdx);}}
newStartVnode=newCh[++newStartIdx];}}
if(oldStartIdx>oldEndIdx){refElm=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,refElm,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(oldCh,oldStartIdx,oldEndIdx);}}
function checkDuplicateKeys(children){var seenKeys={};for(var i=0;i<children.length;i++){var vnode=children[i];var key=vnode.key;if(isDef(key)){if(seenKeys[key]){warn(("Duplicate keys detected: '"+key+"'. This may cause an update error."),vnode.context);}else{seenKeys[key]=true;}}}}
function findIdxInOld(node,oldCh,start,end){for(var i=start;i<end;i++){var c=oldCh[i];if(isDef(c)&&sameVnode(node,c)){return i}}}
function patchVnode(oldVnode,vnode,insertedVnodeQueue,ownerArray,index,removeOnly){if(oldVnode===vnode){return}
if(isDef(vnode.elm)&&isDef(ownerArray)){vnode=ownerArray[index]=cloneVNode(vnode);}
var elm=vnode.elm=oldVnode.elm;if(isTrue(oldVnode.isAsyncPlaceholder)){if(isDef(vnode.asyncFactory.resolved)){hydrate(oldVnode.elm,vnode,insertedVnodeQueue);}else{vnode.isAsyncPlaceholder=true;}
return}
if(isTrue(vnode.isStatic)&&isTrue(oldVnode.isStatic)&&vnode.key===oldVnode.key&&(isTrue(vnode.isCloned)||isTrue(vnode.isOnce))){vnode.componentInstance=oldVnode.componentInstance;return}
var i;var data=vnode.data;if(isDef(data)&&isDef(i=data.hook)&&isDef(i=i.prepatch)){i(oldVnode,vnode);}
var oldCh=oldVnode.children;var ch=vnode.children;if(isDef(data)&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}
if(isDef(i=data.hook)&&isDef(i=i.update)){i(oldVnode,vnode);}}
if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){{checkDuplicateKeys(ch);}
if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}
addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}
if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.postpatch)){i(oldVnode,vnode);}}}
function invokeInsertHook(vnode,queue,initial){if(isTrue(initial)&&isDef(vnode.parent)){vnode.parent.data.pendingInsert=queue;}else{for(var i=0;i<queue.length;++i){queue[i].data.hook.insert(queue[i]);}}}
var hydrationBailed=false;var isRenderedModule=makeMap('attrs,class,staticClass,staticStyle,key');function hydrate(elm,vnode,insertedVnodeQueue,inVPre){var i;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;inVPre=inVPre||(data&&data.pre);vnode.elm=elm;if(isTrue(vnode.isComment)&&isDef(vnode.asyncFactory)){vnode.isAsyncPlaceholder=true;return true}
{if(!assertNodeMatch(elm,vnode,inVPre)){return false}}
if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true);}
if(isDef(i=vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);return true}}
if(isDef(tag)){if(isDef(children)){if(!elm.hasChildNodes()){createChildren(vnode,children,insertedVnodeQueue);}else{if(isDef(i=data)&&isDef(i=i.domProps)&&isDef(i=i.innerHTML)){if(i!==elm.innerHTML){if(typeof console!=='undefined'&&!hydrationBailed){hydrationBailed=true;console.warn('Parent: ',elm);console.warn('server innerHTML: ',i);console.warn('client innerHTML: ',elm.innerHTML);}
return false}}else{var childrenMatch=true;var childNode=elm.firstChild;for(var i$1=0;i$1<children.length;i$1++){if(!childNode||!hydrate(childNode,children[i$1],insertedVnodeQueue,inVPre)){childrenMatch=false;break}
childNode=childNode.nextSibling;}
if(!childrenMatch||childNode){if(typeof console!=='undefined'&&!hydrationBailed){hydrationBailed=true;console.warn('Parent: ',elm);console.warn('Mismatching childNodes vs. VNodes: ',elm.childNodes,children);}
return false}}}}
if(isDef(data)){var fullInvoke=false;for(var key in data){if(!isRenderedModule(key)){fullInvoke=true;invokeCreateHooks(vnode,insertedVnodeQueue);break}}
if(!fullInvoke&&data['class']){traverse(data['class']);}}}else if(elm.data!==vnode.text){elm.data=vnode.text;}
return true}
function assertNodeMatch(node,vnode,inVPre){if(isDef(vnode.tag)){return vnode.tag.indexOf('vue-component')===0||(!isUnknownElement$$1(vnode,inVPre)&&vnode.tag.toLowerCase()===(node.tagName&&node.tagName.toLowerCase()))}else{return node.nodeType===(vnode.isComment?8:3)}}
return function patch(oldVnode,vnode,hydrating,removeOnly){if(isUndef(vnode)){if(isDef(oldVnode)){invokeDestroyHook(oldVnode);}
return}
var isInitialPatch=false;var insertedVnodeQueue=[];if(isUndef(oldVnode)){isInitialPatch=true;createElm(vnode,insertedVnodeQueue);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){patchVnode(oldVnode,vnode,insertedVnodeQueue,null,null,removeOnly);}else{if(isRealElement){if(oldVnode.nodeType===1&&oldVnode.hasAttribute(SSR_ATTR)){oldVnode.removeAttribute(SSR_ATTR);hydrating=true;}
if(isTrue(hydrating)){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode}else{warn('The client-side rendered virtual DOM tree is not matching '+'server-rendered content. This is likely caused by incorrect '+'HTML markup, for example nesting block-level elements inside '+'<p>, or missing <tbody>. Bailing hydration and performing '+'full client-side render.');}}
oldVnode=emptyNodeAt(oldVnode);}
var oldElm=oldVnode.elm;var parentElm=nodeOps.parentNode(oldElm);createElm(vnode,insertedVnodeQueue,oldElm._leaveCb?null:parentElm,nodeOps.nextSibling(oldElm));if(isDef(vnode.parent)){var ancestor=vnode.parent;var patchable=isPatchable(vnode);while(ancestor){for(var i=0;i<cbs.destroy.length;++i){cbs.destroy[i](ancestor);}
ancestor.elm=vnode.elm;if(patchable){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,ancestor);}
var insert=ancestor.data.hook.insert;if(insert.merged){for(var i$2=1;i$2<insert.fns.length;i$2++){insert.fns[i$2]();}}}else{registerRef(ancestor);}
ancestor=ancestor.parent;}}
if(isDef(parentElm)){removeVnodes([oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}
invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm}}
var directives={create:updateDirectives,update:updateDirectives,destroy:function unbindDirectives(vnode){updateDirectives(vnode,emptyNode);}};function updateDirectives(oldVnode,vnode){if(oldVnode.data.directives||vnode.data.directives){_update(oldVnode,vnode);}}
function _update(oldVnode,vnode){var isCreate=oldVnode===emptyNode;var isDestroy=vnode===emptyNode;var oldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context);var newDirs=normalizeDirectives$1(vnode.data.directives,vnode.context);var dirsWithInsert=[];var dirsWithPostpatch=[];var key,oldDir,dir;for(key in newDirs){oldDir=oldDirs[key];dir=newDirs[key];if(!oldDir){callHook$1(dir,'bind',vnode,oldVnode);if(dir.def&&dir.def.inserted){dirsWithInsert.push(dir);}}else{dir.oldValue=oldDir.value;dir.oldArg=oldDir.arg;callHook$1(dir,'update',vnode,oldVnode);if(dir.def&&dir.def.componentUpdated){dirsWithPostpatch.push(dir);}}}
if(dirsWithInsert.length){var callInsert=function(){for(var i=0;i<dirsWithInsert.length;i++){callHook$1(dirsWithInsert[i],'inserted',vnode,oldVnode);}};if(isCreate){mergeVNodeHook(vnode,'insert',callInsert);}else{callInsert();}}
if(dirsWithPostpatch.length){mergeVNodeHook(vnode,'postpatch',function(){for(var i=0;i<dirsWithPostpatch.length;i++){callHook$1(dirsWithPostpatch[i],'componentUpdated',vnode,oldVnode);}});}
if(!isCreate){for(key in oldDirs){if(!newDirs[key]){callHook$1(oldDirs[key],'unbind',oldVnode,oldVnode,isDestroy);}}}}
var emptyModifiers=Object.create(null);function normalizeDirectives$1(dirs,vm){var res=Object.create(null);if(!dirs){return res}
var i,dir;for(i=0;i<dirs.length;i++){dir=dirs[i];if(!dir.modifiers){dir.modifiers=emptyModifiers;}
res[getRawDirName(dir)]=dir;dir.def=resolveAsset(vm.$options,'directives',dir.name,true);}
return res}
function getRawDirName(dir){return dir.rawName||((dir.name)+"."+(Object.keys(dir.modifiers||{}).join('.')))}
function callHook$1(dir,hook,vnode,oldVnode,isDestroy){var fn=dir.def&&dir.def[hook];if(fn){try{fn(vnode.elm,dir,vnode,oldVnode,isDestroy);}catch(e){handleError(e,vnode.context,("directive "+(dir.name)+" "+hook+" hook"));}}}
var baseModules=[ref,directives];function updateAttrs(oldVnode,vnode){var opts=vnode.componentOptions;if(isDef(opts)&&opts.Ctor.options.inheritAttrs===false){return}
if(isUndef(oldVnode.data.attrs)&&isUndef(vnode.data.attrs)){return}
var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};if(isDef(attrs.__ob__)){attrs=vnode.data.attrs=extend({},attrs);}
for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){setAttr(elm,key,cur,vnode.data.pre);}}
if((isIE||isEdge)&&attrs.value!==oldAttrs.value){setAttr(elm,'value',attrs.value);}
for(key in oldAttrs){if(isUndef(attrs[key])){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}
function setAttr(el,key,value,isInPre){if(isInPre||el.tagName.indexOf('-')>-1){baseSetAttr(el,key,value);}else if(isBooleanAttr(key)){if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{value=key==='allowfullscreen'&&el.tagName==='EMBED'?'true':key;el.setAttribute(key,value);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,convertEnumeratedValue(key,value));}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else{el.setAttributeNS(xlinkNS,key,value);}}else{baseSetAttr(el,key,value);}}
function baseSetAttr(el,key,value){if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{if(isIE&&!isIE9&&el.tagName==='TEXTAREA'&&key==='placeholder'&&value!==''&&!el.__ieph){var blocker=function(e){e.stopImmediatePropagation();el.removeEventListener('input',blocker);};el.addEventListener('input',blocker);el.__ieph=true;}
el.setAttribute(key,value);}}
var attrs={create:updateAttrs,update:updateAttrs};function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticClass)&&isUndef(data.class)&&(isUndef(oldData)||(isUndef(oldData.staticClass)&&isUndef(oldData.class)))){return}
var cls=genClassForVnode(vnode);var transitionClass=el._transitionClasses;if(isDef(transitionClass)){cls=concat(cls,stringifyClass(transitionClass));}
if(cls!==el._prevClass){el.setAttribute('class',cls);el._prevClass=cls;}}
var klass={create:updateClass,update:updateClass};var validDivisionCharRE=/[\w).+\-_$\]]/;function parseFilters(exp){var inSingle=false;var inDouble=false;var inTemplateString=false;var inRegex=false;var curly=0;var square=0;var paren=0;var lastFilterIndex=0;var c,prev,i,expression,filters;for(i=0;i<exp.length;i++){prev=c;c=exp.charCodeAt(i);if(inSingle){if(c===0x27&&prev!==0x5C){inSingle=false;}}else if(inDouble){if(c===0x22&&prev!==0x5C){inDouble=false;}}else if(inTemplateString){if(c===0x60&&prev!==0x5C){inTemplateString=false;}}else if(inRegex){if(c===0x2f&&prev!==0x5C){inRegex=false;}}else if(c===0x7C&&exp.charCodeAt(i+1)!==0x7C&&exp.charCodeAt(i-1)!==0x7C&&!curly&&!square&&!paren){if(expression===undefined){lastFilterIndex=i+1;expression=exp.slice(0,i).trim();}else{pushFilter();}}else{switch(c){case 0x22:inDouble=true;break
case 0x27:inSingle=true;break
case 0x60:inTemplateString=true;break
case 0x28:paren++;break
case 0x29:paren--;break
case 0x5B:square++;break
case 0x5D:square--;break
case 0x7B:curly++;break
case 0x7D:curly--;break}
if(c===0x2f){var j=i-1;var p=(void 0);for(;j>=0;j--){p=exp.charAt(j);if(p!==' '){break}}
if(!p||!validDivisionCharRE.test(p)){inRegex=true;}}}}
if(expression===undefined){expression=exp.slice(0,i).trim();}else if(lastFilterIndex!==0){pushFilter();}
function pushFilter(){(filters||(filters=[])).push(exp.slice(lastFilterIndex,i).trim());lastFilterIndex=i+1;}
if(filters){for(i=0;i<filters.length;i++){expression=wrapFilter(expression,filters[i]);}}
return expression}
function wrapFilter(exp,filter){var i=filter.indexOf('(');if(i<0){return("_f(\""+filter+"\")("+exp+")")}else{var name=filter.slice(0,i);var args=filter.slice(i+1);return("_f(\""+name+"\")("+exp+(args!==')'?','+args:args))}}
function baseWarn(msg,range){console.error(("[Vue compiler]: "+msg));}
function pluckModuleFunction(modules,key){return modules?modules.map(function(m){return m[key];}).filter(function(_){return _;}):[]}
function addProp(el,name,value,range,dynamic){(el.props||(el.props=[])).push(rangeSetItem({name:name,value:value,dynamic:dynamic},range));el.plain=false;}
function addAttr(el,name,value,range,dynamic){var attrs=dynamic?(el.dynamicAttrs||(el.dynamicAttrs=[])):(el.attrs||(el.attrs=[]));attrs.push(rangeSetItem({name:name,value:value,dynamic:dynamic},range));el.plain=false;}
function addRawAttr(el,name,value,range){el.attrsMap[name]=value;el.attrsList.push(rangeSetItem({name:name,value:value},range));}
function addDirective(el,name,rawName,value,arg,isDynamicArg,modifiers,range){(el.directives||(el.directives=[])).push(rangeSetItem({name:name,rawName:rawName,value:value,arg:arg,isDynamicArg:isDynamicArg,modifiers:modifiers},range));el.plain=false;}
function prependModifierMarker(symbol,name,dynamic){return dynamic?("_p("+name+",\""+symbol+"\")"):symbol+name}
function addHandler(el,name,value,modifiers,important,warn,range,dynamic){modifiers=modifiers||emptyObject;if(warn&&modifiers.prevent&&modifiers.passive){warn('passive and prevent can\'t be used together. '+'Passive handler can\'t prevent default event.',range);}
if(modifiers.right){if(dynamic){name="("+name+")==='click'?'contextmenu':("+name+")";}else if(name==='click'){name='contextmenu';delete modifiers.right;}}else if(modifiers.middle){if(dynamic){name="("+name+")==='click'?'mouseup':("+name+")";}else if(name==='click'){name='mouseup';}}
if(modifiers.capture){delete modifiers.capture;name=prependModifierMarker('!',name,dynamic);}
if(modifiers.once){delete modifiers.once;name=prependModifierMarker('~',name,dynamic);}
if(modifiers.passive){delete modifiers.passive;name=prependModifierMarker('&',name,dynamic);}
var events;if(modifiers.native){delete modifiers.native;events=el.nativeEvents||(el.nativeEvents={});}else{events=el.events||(el.events={});}
var newHandler=rangeSetItem({value:value.trim(),dynamic:dynamic},range);if(modifiers!==emptyObject){newHandler.modifiers=modifiers;}
var handlers=events[name];if(Array.isArray(handlers)){important?handlers.unshift(newHandler):handlers.push(newHandler);}else if(handlers){events[name]=important?[newHandler,handlers]:[handlers,newHandler];}else{events[name]=newHandler;}
el.plain=false;}
function getRawBindingAttr(el,name){return el.rawAttrsMap[':'+name]||el.rawAttrsMap['v-bind:'+name]||el.rawAttrsMap[name]}
function getBindingAttr(el,name,getStatic){var dynamicValue=getAndRemoveAttr(el,':'+name)||getAndRemoveAttr(el,'v-bind:'+name);if(dynamicValue!=null){return parseFilters(dynamicValue)}else if(getStatic!==false){var staticValue=getAndRemoveAttr(el,name);if(staticValue!=null){return JSON.stringify(staticValue)}}}
function getAndRemoveAttr(el,name,removeFromMap){var val;if((val=el.attrsMap[name])!=null){var list=el.attrsList;for(var i=0,l=list.length;i<l;i++){if(list[i].name===name){list.splice(i,1);break}}}
if(removeFromMap){delete el.attrsMap[name];}
return val}
function getAndRemoveAttrByRegex(el,name){var list=el.attrsList;for(var i=0,l=list.length;i<l;i++){var attr=list[i];if(name.test(attr.name)){list.splice(i,1);return attr}}}
function rangeSetItem(item,range){if(range){if(range.start!=null){item.start=range.start;}
if(range.end!=null){item.end=range.end;}}
return item}
function genComponentModel(el,value,modifiers){var ref=modifiers||{};var number=ref.number;var trim=ref.trim;var baseValueExpression='$$v';var valueExpression=baseValueExpression;if(trim){valueExpression="(typeof "+baseValueExpression+" === 'string'"+"? "+baseValueExpression+".trim()"+": "+baseValueExpression+")";}
if(number){valueExpression="_n("+valueExpression+")";}
var assignment=genAssignmentCode(value,valueExpression);el.model={value:("("+value+")"),expression:JSON.stringify(value),callback:("function ("+baseValueExpression+") {"+assignment+"}")};}
function genAssignmentCode(value,assignment){var res=parseModel(value);if(res.key===null){return(value+"="+assignment)}else{return("$set("+(res.exp)+", "+(res.key)+", "+assignment+")")}}
var len,str,chr,index$1,expressionPos,expressionEndPos;function parseModel(val){val=val.trim();len=val.length;if(val.indexOf('[')<0||val.lastIndexOf(']')<len-1){index$1=val.lastIndexOf('.');if(index$1>-1){return{exp:val.slice(0,index$1),key:'"'+val.slice(index$1+1)+'"'}}else{return{exp:val,key:null}}}
str=val;index$1=expressionPos=expressionEndPos=0;while(!eof()){chr=next();if(isStringStart(chr)){parseString(chr);}else if(chr===0x5B){parseBracket(chr);}}
return{exp:val.slice(0,expressionPos),key:val.slice(expressionPos+1,expressionEndPos)}}
function next(){return str.charCodeAt(++index$1)}
function eof(){return index$1>=len}
function isStringStart(chr){return chr===0x22||chr===0x27}
function parseBracket(chr){var inBracket=1;expressionPos=index$1;while(!eof()){chr=next();if(isStringStart(chr)){parseString(chr);continue}
if(chr===0x5B){inBracket++;}
if(chr===0x5D){inBracket--;}
if(inBracket===0){expressionEndPos=index$1;break}}}
function parseString(chr){var stringQuote=chr;while(!eof()){chr=next();if(chr===stringQuote){break}}}
var warn$1;var RANGE_TOKEN='__r';var CHECKBOX_RADIO_TOKEN='__c';function model(el,dir,_warn){warn$1=_warn;var value=dir.value;var modifiers=dir.modifiers;var tag=el.tag;var type=el.attrsMap.type;{if(tag==='input'&&type==='file'){warn$1("<"+(el.tag)+" v-model=\""+value+"\" type=\"file\">:\n"+"File inputs are read only. Use a v-on:change listener instead.",el.rawAttrsMap['v-model']);}}
if(el.component){genComponentModel(el,value,modifiers);return false}else if(tag==='select'){genSelect(el,value,modifiers);}else if(tag==='input'&&type==='checkbox'){genCheckboxModel(el,value,modifiers);}else if(tag==='input'&&type==='radio'){genRadioModel(el,value,modifiers);}else if(tag==='input'||tag==='textarea'){genDefaultModel(el,value,modifiers);}else if(!config.isReservedTag(tag)){genComponentModel(el,value,modifiers);return false}else{warn$1("<"+(el.tag)+" v-model=\""+value+"\">: "+"v-model is not supported on this element type. "+'If you are working with contenteditable, it\'s recommended to '+'wrap a library dedicated for that purpose inside a custom component.',el.rawAttrsMap['v-model']);}
return true}
function genCheckboxModel(el,value,modifiers){var number=modifiers&&modifiers.number;var valueBinding=getBindingAttr(el,'value')||'null';var trueValueBinding=getBindingAttr(el,'true-value')||'true';var falseValueBinding=getBindingAttr(el,'false-value')||'false';addProp(el,'checked',"Array.isArray("+value+")"+"?_i("+value+","+valueBinding+")>-1"+(trueValueBinding==='true'?(":("+value+")"):(":_q("+value+","+trueValueBinding+")")));addHandler(el,'change',"var $$a="+value+","+'$$el=$event.target,'+"$$c=$$el.checked?("+trueValueBinding+"):("+falseValueBinding+");"+'if(Array.isArray($$a)){'+"var $$v="+(number?'_n('+valueBinding+')':valueBinding)+","+'$$i=_i($$a,$$v);'+"if($$el.checked){$$i<0&&("+(genAssignmentCode(value,'$$a.concat([$$v])'))+")}"+"else{$$i>-1&&("+(genAssignmentCode(value,'$$a.slice(0,$$i).concat($$a.slice($$i+1))'))+")}"+"}else{"+(genAssignmentCode(value,'$$c'))+"}",null,true);}
function genRadioModel(el,value,modifiers){var number=modifiers&&modifiers.number;var valueBinding=getBindingAttr(el,'value')||'null';valueBinding=number?("_n("+valueBinding+")"):valueBinding;addProp(el,'checked',("_q("+value+","+valueBinding+")"));addHandler(el,'change',genAssignmentCode(value,valueBinding),null,true);}
function genSelect(el,value,modifiers){var number=modifiers&&modifiers.number;var selectedVal="Array.prototype.filter"+".call($event.target.options,function(o){return o.selected})"+".map(function(o){var val = \"_value\" in o ? o._value : o.value;"+"return "+(number?'_n(val)':'val')+"})";var assignment='$event.target.multiple ? $$selectedVal : $$selectedVal[0]';var code="var $$selectedVal = "+selectedVal+";";code=code+" "+(genAssignmentCode(value,assignment));addHandler(el,'change',code,null,true);}
function genDefaultModel(el,value,modifiers){var type=el.attrsMap.type;{var value$1=el.attrsMap['v-bind:value']||el.attrsMap[':value'];var typeBinding=el.attrsMap['v-bind:type']||el.attrsMap[':type'];if(value$1&&!typeBinding){var binding=el.attrsMap['v-bind:value']?'v-bind:value':':value';warn$1(binding+"=\""+value$1+"\" conflicts with v-model on the same element "+'because the latter already expands to a value binding internally',el.rawAttrsMap[binding]);}}
var ref=modifiers||{};var lazy=ref.lazy;var number=ref.number;var trim=ref.trim;var needCompositionGuard=!lazy&&type!=='range';var event=lazy?'change':type==='range'?RANGE_TOKEN:'input';var valueExpression='$event.target.value';if(trim){valueExpression="$event.target.value.trim()";}
if(number){valueExpression="_n("+valueExpression+")";}
var code=genAssignmentCode(value,valueExpression);if(needCompositionGuard){code="if($event.target.composing)return;"+code;}
addProp(el,'value',("("+value+")"));addHandler(el,event,code,null,true);if(trim||number){addHandler(el,'blur','$forceUpdate()');}}
function normalizeEvents(on){if(isDef(on[RANGE_TOKEN])){var event=isIE?'change':'input';on[event]=[].concat(on[RANGE_TOKEN],on[event]||[]);delete on[RANGE_TOKEN];}
if(isDef(on[CHECKBOX_RADIO_TOKEN])){on.change=[].concat(on[CHECKBOX_RADIO_TOKEN],on.change||[]);delete on[CHECKBOX_RADIO_TOKEN];}}
var target$1;function createOnceHandler$1(event,handler,capture){var _target=target$1;return function onceHandler(){var res=handler.apply(null,arguments);if(res!==null){remove$2(event,onceHandler,capture,_target);}}}
var useMicrotaskFix=isUsingMicroTask&&!(isFF&&Number(isFF[1])<=53);function add$1(name,handler,capture,passive){if(useMicrotaskFix){var attachedTimestamp=currentFlushTimestamp;var original=handler;handler=original._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=attachedTimestamp||e.timeStamp<=0||e.target.ownerDocument!==document){return original.apply(this,arguments)}};}
target$1.addEventListener(name,handler,supportsPassive?{capture:capture,passive:passive}:capture);}
function remove$2(name,handler,capture,_target){(_target||target$1).removeEventListener(name,handler._wrapper||handler,capture);}
function updateDOMListeners(oldVnode,vnode){if(isUndef(oldVnode.data.on)&&isUndef(vnode.data.on)){return}
var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};target$1=vnode.elm;normalizeEvents(on);updateListeners(on,oldOn,add$1,remove$2,createOnceHandler$1,vnode.context);target$1=undefined;}
var events={create:updateDOMListeners,update:updateDOMListeners};var svgContainer;function updateDOMProps(oldVnode,vnode){if(isUndef(oldVnode.data.domProps)&&isUndef(vnode.data.domProps)){return}
var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps||{};var props=vnode.data.domProps||{};if(isDef(props.__ob__)){props=vnode.data.domProps=extend({},props);}
for(key in oldProps){if(!(key in props)){elm[key]='';}}
for(key in props){cur=props[key];if(key==='textContent'||key==='innerHTML'){if(vnode.children){vnode.children.length=0;}
if(cur===oldProps[key]){continue}
if(elm.childNodes.length===1){elm.removeChild(elm.childNodes[0]);}}
if(key==='value'&&elm.tagName!=='PROGRESS'){elm._value=cur;var strCur=isUndef(cur)?'':String(cur);if(shouldUpdateValue(elm,strCur)){elm.value=strCur;}}else if(key==='innerHTML'&&isSVG(elm.tagName)&&isUndef(elm.innerHTML)){svgContainer=svgContainer||document.createElement('div');svgContainer.innerHTML="<svg>"+cur+"</svg>";var svg=svgContainer.firstChild;while(elm.firstChild){elm.removeChild(elm.firstChild);}
while(svg.firstChild){elm.appendChild(svg.firstChild);}}else if(cur!==oldProps[key]){try{elm[key]=cur;}catch(e){}}}}
function shouldUpdateValue(elm,checkVal){return(!elm.composing&&(elm.tagName==='OPTION'||isNotInFocusAndDirty(elm,checkVal)||isDirtyWithModifiers(elm,checkVal)))}
function isNotInFocusAndDirty(elm,checkVal){var notInFocus=true;try{notInFocus=document.activeElement!==elm;}catch(e){}
return notInFocus&&elm.value!==checkVal}
function isDirtyWithModifiers(elm,newVal){var value=elm.value;var modifiers=elm._vModifiers;if(isDef(modifiers)){if(modifiers.number){return toNumber(value)!==toNumber(newVal)}
if(modifiers.trim){return value.trim()!==newVal.trim()}}
return value!==newVal}
var domProps={create:updateDOMProps,update:updateDOMProps};var parseStyleText=cached(function(cssText){var res={};var listDelimiter=/;(?![^(]*\))/g;var propertyDelimiter=/:(.+)/;cssText.split(listDelimiter).forEach(function(item){if(item){var tmp=item.split(propertyDelimiter);tmp.length>1&&(res[tmp[0].trim()]=tmp[1].trim());}});return res});function normalizeStyleData(data){var style=normalizeStyleBinding(data.style);return data.staticStyle?extend(data.staticStyle,style):style}
function normalizeStyleBinding(bindingStyle){if(Array.isArray(bindingStyle)){return toObject(bindingStyle)}
if(typeof bindingStyle==='string'){return parseStyleText(bindingStyle)}
return bindingStyle}
function getStyle(vnode,checkChild){var res={};var styleData;if(checkChild){var childNode=vnode;while(childNode.componentInstance){childNode=childNode.componentInstance._vnode;if(childNode&&childNode.data&&(styleData=normalizeStyleData(childNode.data))){extend(res,styleData);}}}
if((styleData=normalizeStyleData(vnode.data))){extend(res,styleData);}
var parentNode=vnode;while((parentNode=parentNode.parent)){if(parentNode.data&&(styleData=normalizeStyleData(parentNode.data))){extend(res,styleData);}}
return res}
var cssVarRE=/^--/;var importantRE=/\s*!important$/;var setProp=function(el,name,val){if(cssVarRE.test(name)){el.style.setProperty(name,val);}else if(importantRE.test(val)){el.style.setProperty(hyphenate(name),val.replace(importantRE,''),'important');}else{var normalizedName=normalize(name);if(Array.isArray(val)){for(var i=0,len=val.length;i<len;i++){el.style[normalizedName]=val[i];}}else{el.style[normalizedName]=val;}}};var vendorNames=['Webkit','Moz','ms'];var emptyStyle;var normalize=cached(function(prop){emptyStyle=emptyStyle||document.createElement('div').style;prop=camelize(prop);if(prop!=='filter'&&(prop in emptyStyle)){return prop}
var capName=prop.charAt(0).toUpperCase()+prop.slice(1);for(var i=0;i<vendorNames.length;i++){var name=vendorNames[i]+capName;if(name in emptyStyle){return name}}});function updateStyle(oldVnode,vnode){var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticStyle)&&isUndef(data.style)&&isUndef(oldData.staticStyle)&&isUndef(oldData.style)){return}
var cur,name;var el=vnode.elm;var oldStaticStyle=oldData.staticStyle;var oldStyleBinding=oldData.normalizedStyle||oldData.style||{};var oldStyle=oldStaticStyle||oldStyleBinding;var style=normalizeStyleBinding(vnode.data.style)||{};vnode.data.normalizedStyle=isDef(style.__ob__)?extend({},style):style;var newStyle=getStyle(vnode,true);for(name in oldStyle){if(isUndef(newStyle[name])){setProp(el,name,'');}}
for(name in newStyle){cur=newStyle[name];if(cur!==oldStyle[name]){setProp(el,name,cur==null?'':cur);}}}
var style={create:updateStyle,update:updateStyle};var whitespaceRE=/\s+/;function addClass(el,cls){if(!cls||!(cls=cls.trim())){return}
if(el.classList){if(cls.indexOf(' ')>-1){cls.split(whitespaceRE).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=" "+(el.getAttribute('class')||'')+" ";if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}
function removeClass(el,cls){if(!cls||!(cls=cls.trim())){return}
if(el.classList){if(cls.indexOf(' ')>-1){cls.split(whitespaceRE).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}
if(!el.classList.length){el.removeAttribute('class');}}else{var cur=" "+(el.getAttribute('class')||'')+" ";var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}
cur=cur.trim();if(cur){el.setAttribute('class',cur);}else{el.removeAttribute('class');}}}
function resolveTransition(def$$1){if(!def$$1){return}
if(typeof def$$1==='object'){var res={};if(def$$1.css!==false){extend(res,autoCssTransition(def$$1.name||'v'));}
extend(res,def$$1);return res}else if(typeof def$$1==='string'){return autoCssTransition(def$$1)}}
var autoCssTransition=cached(function(name){return{enterClass:(name+"-enter"),enterToClass:(name+"-enter-to"),enterActiveClass:(name+"-enter-active"),leaveClass:(name+"-leave"),leaveToClass:(name+"-leave-to"),leaveActiveClass:(name+"-leave-active")}});var hasTransition=inBrowser&&!isIE9;var TRANSITION='transition';var ANIMATION='animation';var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){transitionProp='WebkitTransition';transitionEndEvent='webkitTransitionEnd';}
if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){animationProp='WebkitAnimation';animationEndEvent='webkitAnimationEnd';}}
var raf=inBrowser?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(fn){return fn();};function nextFrame(fn){raf(function(){raf(fn);});}
function addTransitionClass(el,cls){var transitionClasses=el._transitionClasses||(el._transitionClasses=[]);if(transitionClasses.indexOf(cls)<0){transitionClasses.push(cls);addClass(el,cls);}}
function removeTransitionClass(el,cls){if(el._transitionClasses){remove(el._transitionClasses,cls);}
removeClass(el,cls);}
function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb()}
var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function(){el.removeEventListener(event,onEnd);cb();};var onEnd=function(e){if(e.target===el){if(++ended>=propCount){end();}}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}
var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);var transitionDelays=(styles[transitionProp+'Delay']||'').split(', ');var transitionDurations=(styles[transitionProp+'Duration']||'').split(', ');var transitionTimeout=getTimeout(transitionDelays,transitionDurations);var animationDelays=(styles[animationProp+'Delay']||'').split(', ');var animationDurations=(styles[animationProp+'Duration']||'').split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0;if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}
var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform}}
function getTimeout(delays,durations){while(delays.length<durations.length){delays=delays.concat(delays);}
return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i])}))}
function toMs(s){return Number(s.slice(0,-1).replace(',','.'))*1000}
function enter(vnode,toggleDisplay){var el=vnode.elm;if(isDef(el._leaveCb)){el._leaveCb.cancelled=true;el._leaveCb();}
var data=resolveTransition(vnode.data.transition);if(isUndef(data)){return}
if(isDef(el._enterCb)||el.nodeType!==1){return}
var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterToClass=data.enterToClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearToClass=data.appearToClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;var duration=data.duration;var context=activeInstance;var transitionNode=activeInstance.$vnode;while(transitionNode&&transitionNode.parent){context=transitionNode.context;transitionNode=transitionNode.parent;}
var isAppear=!context._isMounted||!vnode.isRootInsert;if(isAppear&&!appear&&appear!==''){return}
var startClass=isAppear&&appearClass?appearClass:enterClass;var activeClass=isAppear&&appearActiveClass?appearActiveClass:enterActiveClass;var toClass=isAppear&&appearToClass?appearToClass:enterToClass;var beforeEnterHook=isAppear?(beforeAppear||beforeEnter):beforeEnter;var enterHook=isAppear?(typeof appear==='function'?appear:enter):enter;var afterEnterHook=isAppear?(afterAppear||afterEnter):afterEnter;var enterCancelledHook=isAppear?(appearCancelled||enterCancelled):enterCancelled;var explicitEnterDuration=toNumber(isObject(duration)?duration.enter:duration);if(explicitEnterDuration!=null){checkDuration(explicitEnterDuration,'enter',vnode);}
var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(enterHook);var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,toClass);removeTransitionClass(el,activeClass);}
if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}
enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}
el._enterCb=null;});if(!vnode.data.show){mergeVNodeHook(vnode,'insert',function(){var parent=el.parentNode;var pendingNode=parent&&parent._pending&&parent._pending[vnode.key];if(pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}
enterHook&&enterHook(el,cb);});}
beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){removeTransitionClass(el,startClass);if(!cb.cancelled){addTransitionClass(el,toClass);if(!userWantsControl){if(isValidDuration(explicitEnterDuration)){setTimeout(cb,explicitEnterDuration);}else{whenTransitionEnds(el,type,cb);}}}});}
if(vnode.data.show){toggleDisplay&&toggleDisplay();enterHook&&enterHook(el,cb);}
if(!expectsCSS&&!userWantsControl){cb();}}
function leave(vnode,rm){var el=vnode.elm;if(isDef(el._enterCb)){el._enterCb.cancelled=true;el._enterCb();}
var data=resolveTransition(vnode.data.transition);if(isUndef(data)||el.nodeType!==1){return rm()}
if(isDef(el._leaveCb)){return}
var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveToClass=data.leaveToClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var duration=data.duration;var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(leave);var explicitLeaveDuration=toNumber(isObject(duration)?duration.leave:duration);if(isDef(explicitLeaveDuration)){checkDuration(explicitLeaveDuration,'leave',vnode);}
var cb=el._leaveCb=once(function(){if(el.parentNode&&el.parentNode._pending){el.parentNode._pending[vnode.key]=null;}
if(expectsCSS){removeTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveActiveClass);}
if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}
leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}
el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}
function performLeave(){if(cb.cancelled){return}
if(!vnode.data.show&&el.parentNode){(el.parentNode._pending||(el.parentNode._pending={}))[(vnode.key)]=vnode;}
beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){removeTransitionClass(el,leaveClass);if(!cb.cancelled){addTransitionClass(el,leaveToClass);if(!userWantsControl){if(isValidDuration(explicitLeaveDuration)){setTimeout(cb,explicitLeaveDuration);}else{whenTransitionEnds(el,type,cb);}}}});}
leave&&leave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}
function checkDuration(val,name,vnode){if(typeof val!=='number'){warn("<transition> explicit "+name+" duration is not a valid number - "+"got "+(JSON.stringify(val))+".",vnode.context);}else if(isNaN(val)){warn("<transition> explicit "+name+" duration is NaN - "+'the duration expression might be incorrect.',vnode.context);}}
function isValidDuration(val){return typeof val==='number'&&!isNaN(val)}
function getHookArgumentsLength(fn){if(isUndef(fn)){return false}
var invokerFns=fn.fns;if(isDef(invokerFns)){return getHookArgumentsLength(Array.isArray(invokerFns)?invokerFns[0]:invokerFns)}else{return(fn._length||fn.length)>1}}
function _enter(_,vnode){if(vnode.data.show!==true){enter(vnode);}}
var transition=inBrowser?{create:_enter,activate:_enter,remove:function remove$$1(vnode,rm){if(vnode.data.show!==true){leave(vnode,rm);}else{rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition];var modules=platformModules.concat(baseModules);var patch=createPatchFunction({nodeOps:nodeOps,modules:modules});if(isIE9){document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}
var directive={inserted:function inserted(el,binding,vnode,oldVnode){if(vnode.tag==='select'){if(oldVnode.elm&&!oldVnode.elm._vOptions){mergeVNodeHook(vnode,'postpatch',function(){directive.componentUpdated(el,binding,vnode);});}else{setSelected(el,binding,vnode.context);}
el._vOptions=[].map.call(el.options,getValue);}else if(vnode.tag==='textarea'||isTextInputType(el.type)){el._vModifiers=binding.modifiers;if(!binding.modifiers.lazy){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);el.addEventListener('change',onCompositionEnd);if(isIE9){el.vmodel=true;}}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);var prevOptions=el._vOptions;var curOptions=el._vOptions=[].map.call(el.options,getValue);if(curOptions.some(function(o,i){return!looseEqual(o,prevOptions[i]);})){var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,curOptions);}):binding.value!==binding.oldValue&&hasNoMatchingOption(binding.value,curOptions);if(needReset){trigger(el,'change');}}}}};function setSelected(el,binding,vm){actuallySetSelected(el,binding,vm);if(isIE||isEdge){setTimeout(function(){actuallySetSelected(el,binding,vm);},0);}}
function actuallySetSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value)){warn("<select multiple v-model=\""+(binding.expression)+"\"> "+"expects an Array value for its binding, but got "+(Object.prototype.toString.call(value).slice(8,-1)),vm);return}
var selected,option;for(var i=0,l=el.options.length;i<l;i++){option=el.options[i];if(isMultiple){selected=looseIndexOf(value,getValue(option))>-1;if(option.selected!==selected){option.selected=selected;}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i){el.selectedIndex=i;}
return}}}
if(!isMultiple){el.selectedIndex=-1;}}
function hasNoMatchingOption(value,options){return options.every(function(o){return!looseEqual(o,value);})}
function getValue(option){return'_value'in option?option._value:option.value}
function onCompositionStart(e){e.target.composing=true;}
function onCompositionEnd(e){if(!e.target.composing){return}
e.target.composing=false;trigger(e.target,'input');}
function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}
function locateNode(vnode){return vnode.componentInstance&&(!vnode.data||!vnode.data.transition)?locateNode(vnode.componentInstance._vnode):vnode}
var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;var originalDisplay=el.__vOriginalDisplay=el.style.display==='none'?'':el.style.display;if(value&&transition$$1){vnode.data.show=true;enter(vnode,function(){el.style.display=originalDisplay;});}else{el.style.display=value?originalDisplay:'none';}},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue;if(!value===!oldValue){return}
vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;if(transition$$1){vnode.data.show=true;if(value){enter(vnode,function(){el.style.display=el.__vOriginalDisplay;});}else{leave(vnode,function(){el.style.display='none';});}}else{el.style.display=value?el.__vOriginalDisplay:'none';}},unbind:function unbind(el,binding,vnode,oldVnode,isDestroy){if(!isDestroy){el.style.display=el.__vOriginalDisplay;}}};var platformDirectives={model:directive,show:show};var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options.abstract){return getRealChild(getFirstComponentChild(compOptions.children))}else{return vnode}}
function extractTransitionData(comp){var data={};var options=comp.$options;for(var key in options.propsData){data[key]=comp[key];}
var listeners=options._parentListeners;for(var key$1 in listeners){data[camelize(key$1)]=listeners[key$1];}
return data}
function placeholder(h,rawChild){if(/\d-keep-alive$/.test(rawChild.tag)){return h('keep-alive',{props:rawChild.componentOptions.propsData})}}
function hasParentTransition(vnode){while((vnode=vnode.parent)){if(vnode.data.transition){return true}}}
function isSameChild(child,oldChild){return oldChild.key===child.key&&oldChild.tag===child.tag}
var isNotTextNode=function(c){return c.tag||isAsyncPlaceholder(c);};var isVShowDirective=function(d){return d.name==='show';};var Transition={name:'transition',props:transitionProps,abstract:true,render:function render(h){var this$1=this;var children=this.$slots.default;if(!children){return}
children=children.filter(isNotTextNode);if(!children.length){return}
if(children.length>1){warn('<transition> can only be used on a single element. Use '+'<transition-group> for lists.',this.$parent);}
var mode=this.mode;if(mode&&mode!=='in-out'&&mode!=='out-in'){warn('invalid <transition> mode: '+mode,this.$parent);}
var rawChild=children[0];if(hasParentTransition(this.$vnode)){return rawChild}
var child=getRealChild(rawChild);if(!child){return rawChild}
if(this._leaving){return placeholder(h,rawChild)}
var id="__transition-"+(this._uid)+"-";child.key=child.key==null?child.isComment?id+'comment':id+child.tag:isPrimitive(child.key)?(String(child.key).indexOf(id)===0?child.key:id+child.key):child.key;var data=(child.data||(child.data={})).transition=extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild);if(child.data.directives&&child.data.directives.some(isVShowDirective)){child.data.show=true;}
if(oldChild&&oldChild.data&&!isSameChild(child,oldChild)&&!isAsyncPlaceholder(oldChild)&&!(oldChild.componentInstance&&oldChild.componentInstance._vnode.isComment)){var oldData=oldChild.data.transition=extend({},data);if(mode==='out-in'){this._leaving=true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving=false;this$1.$forceUpdate();});return placeholder(h,rawChild)}else if(mode==='in-out'){if(isAsyncPlaceholder(child)){return oldRawChild}
var delayedLeave;var performLeave=function(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave);mergeVNodeHook(data,'enterCancelled',performLeave);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;});}}
return rawChild}};var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,beforeMount:function beforeMount(){var this$1=this;var update=this._update;this._update=function(vnode,hydrating){var restoreActiveInstance=setActiveInstance(this$1);this$1.__patch__(this$1._vnode,this$1.kept,false,true);this$1._vnode=this$1.kept;restoreActiveInstance();update.call(this$1,vnode,hydrating);};},render:function render(h){var tag=this.tag||this.$vnode.data.tag||'span';var map=Object.create(null);var prevChildren=this.prevChildren=this.children;var rawChildren=this.$slots.default||[];var children=this.children=[];var transitionData=extractTransitionData(this);for(var i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag){if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){children.push(c);map[c.key]=c;(c.data||(c.data={})).transition=transitionData;}else{var opts=c.componentOptions;var name=opts?(opts.Ctor.options.name||opts.tag||''):c.tag;warn(("<transition-group> children must be keyed: <"+name+">"));}}}
if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData;c$1.data.pos=c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else{removed.push(c$1);}}
this.kept=h(tag,null,kept);this.removed=removed;}
return h(tag,null,children)},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass||((this.name||'v')+'-move');if(!children.length||!this.hasMove(children[0].elm,moveClass)){return}
children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation);this._reflow=document.body.offsetHeight;children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform=s.WebkitTransform=s.transitionDuration='';el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){if(e&&e.target!==el){return}
if(!e||/transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb=null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){if(!hasTransition){return false}
if(this._hasMove){return this._hasMove}
var clone=el.cloneNode();if(el._transitionClasses){el._transitionClasses.forEach(function(cls){removeClass(clone,cls);});}
addClass(clone,moveClass);clone.style.display='none';this.$el.appendChild(clone);var info=getTransitionInfo(clone);this.$el.removeChild(clone);return(this._hasMove=info.hasTransform)}}};function callPendingCbs(c){if(c.elm._moveCb){c.elm._moveCb();}
if(c.elm._enterCb){c.elm._enterCb();}}
function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect();}
function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=true;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";s.transitionDuration='0s';}}
var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};Vue.config.mustUseProp=mustUseProp;Vue.config.isReservedTag=isReservedTag;Vue.config.isReservedAttr=isReservedAttr;Vue.config.getTagNamespace=getTagNamespace;Vue.config.isUnknownElement=isUnknownElement;extend(Vue.options.directives,platformDirectives);extend(Vue.options.components,platformComponents);Vue.prototype.__patch__=inBrowser?patch:noop;Vue.prototype.$mount=function(el,hydrating){el=el&&inBrowser?query(el):undefined;return mountComponent(this,el,hydrating)};if(inBrowser){setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue);}else{console[console.info?'info':'log']('Download the Vue Devtools extension for a better development experience:\n'+'https://github.com/vuejs/vue-devtools');}}
if(config.productionTip!==false&&typeof console!=='undefined'){console[console.info?'info':'log']("You are running Vue in development mode.\n"+"Make sure to turn on production mode when deploying for production.\n"+"See more tips at https://vuejs.org/guide/deployment.html");}},0);}
var defaultTagRE=/\{\{((?:.|\r?\n)+?)\}\}/g;var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var buildRegex=cached(function(delimiters){var open=delimiters[0].replace(regexEscapeRE,'\\$&');var close=delimiters[1].replace(regexEscapeRE,'\\$&');return new RegExp(open+'((?:.|\\n)+?)'+close,'g')});function parseText(text,delimiters){var tagRE=delimiters?buildRegex(delimiters):defaultTagRE;if(!tagRE.test(text)){return}
var tokens=[];var rawTokens=[];var lastIndex=tagRE.lastIndex=0;var match,index,tokenValue;while((match=tagRE.exec(text))){index=match.index;if(index>lastIndex){rawTokens.push(tokenValue=text.slice(lastIndex,index));tokens.push(JSON.stringify(tokenValue));}
var exp=parseFilters(match[1].trim());tokens.push(("_s("+exp+")"));rawTokens.push({'@binding':exp});lastIndex=index+match[0].length;}
if(lastIndex<text.length){rawTokens.push(tokenValue=text.slice(lastIndex));tokens.push(JSON.stringify(tokenValue));}
return{expression:tokens.join('+'),tokens:rawTokens}}
function transformNode(el,options){var warn=options.warn||baseWarn;var staticClass=getAndRemoveAttr(el,'class');if(staticClass){var res=parseText(staticClass,options.delimiters);if(res){warn("class=\""+staticClass+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div class="{{ val }}">, use <div :class="val">.',el.rawAttrsMap['class']);}}
if(staticClass){el.staticClass=JSON.stringify(staticClass);}
var classBinding=getBindingAttr(el,'class',false);if(classBinding){el.classBinding=classBinding;}}
function genData(el){var data='';if(el.staticClass){data+="staticClass:"+(el.staticClass)+",";}
if(el.classBinding){data+="class:"+(el.classBinding)+",";}
return data}
var klass$1={staticKeys:['staticClass'],transformNode:transformNode,genData:genData};function transformNode$1(el,options){var warn=options.warn||baseWarn;var staticStyle=getAndRemoveAttr(el,'style');if(staticStyle){{var res=parseText(staticStyle,options.delimiters);if(res){warn("style=\""+staticStyle+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div style="{{ val }}">, use <div :style="val">.',el.rawAttrsMap['style']);}}
el.staticStyle=JSON.stringify(parseStyleText(staticStyle));}
var styleBinding=getBindingAttr(el,'style',false);if(styleBinding){el.styleBinding=styleBinding;}}
function genData$1(el){var data='';if(el.staticStyle){data+="staticStyle:"+(el.staticStyle)+",";}
if(el.styleBinding){data+="style:("+(el.styleBinding)+"),";}
return data}
var style$1={staticKeys:['staticStyle'],transformNode:transformNode$1,genData:genData$1};var decoder;var he={decode:function decode(html){decoder=decoder||document.createElement('div');decoder.innerHTML=html;return decoder.textContent}};var isUnaryTag=makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,'+'link,meta,param,source,track,wbr');var canBeLeftOpenTag=makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');var isNonPhrasingTag=makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,'+'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,'+'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,'+'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,'+'title,tr,track');var attribute=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;var dynamicArgAttribute=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;var ncname="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+(unicodeRegExp.source)+"]*";var qnameCapture="((?:"+ncname+"\\:)?"+ncname+")";var startTagOpen=new RegExp(("^<"+qnameCapture));var startTagClose=/^\s*(\/?)>/;var endTag=new RegExp(("^<\\/"+qnameCapture+"[^>]*>"));var doctype=/^<!DOCTYPE [^>]+>/i;var comment=/^<!\--/;var conditionalComment=/^<!\[/;var isPlainTextElement=makeMap('script,style,textarea',true);var reCache={};var decodingMap={'&lt;':'<','&gt;':'>','&quot;':'"','&amp;':'&','&#10;':'\n','&#9;':'\t','&#39;':"'"};var encodedAttr=/&(?:lt|gt|quot|amp|#39);/g;var encodedAttrWithNewLines=/&(?:lt|gt|quot|amp|#39|#10|#9);/g;var isIgnoreNewlineTag=makeMap('pre,textarea',true);var shouldIgnoreFirstNewline=function(tag,html){return tag&&isIgnoreNewlineTag(tag)&&html[0]==='\n';};function decodeAttr(value,shouldDecodeNewlines){var re=shouldDecodeNewlines?encodedAttrWithNewLines:encodedAttr;return value.replace(re,function(match){return decodingMap[match];})}
function parseHTML(html,options){var stack=[];var expectHTML=options.expectHTML;var isUnaryTag$$1=options.isUnaryTag||no;var canBeLeftOpenTag$$1=options.canBeLeftOpenTag||no;var index=0;var last,lastTag;while(html){last=html;if(!lastTag||!isPlainTextElement(lastTag)){var textEnd=html.indexOf('<');if(textEnd===0){if(comment.test(html)){var commentEnd=html.indexOf('-->');if(commentEnd>=0){if(options.shouldKeepComment){options.comment(html.substring(4,commentEnd),index,index+commentEnd+3);}
advance(commentEnd+3);continue}}
if(conditionalComment.test(html)){var conditionalEnd=html.indexOf(']>');if(conditionalEnd>=0){advance(conditionalEnd+2);continue}}
var doctypeMatch=html.match(doctype);if(doctypeMatch){advance(doctypeMatch[0].length);continue}
var endTagMatch=html.match(endTag);if(endTagMatch){var curIndex=index;advance(endTagMatch[0].length);parseEndTag(endTagMatch[1],curIndex,index);continue}
var startTagMatch=parseStartTag();if(startTagMatch){handleStartTag(startTagMatch);if(shouldIgnoreFirstNewline(startTagMatch.tagName,html)){advance(1);}
continue}}
var text=(void 0),rest=(void 0),next=(void 0);if(textEnd>=0){rest=html.slice(textEnd);while(!endTag.test(rest)&&!startTagOpen.test(rest)&&!comment.test(rest)&&!conditionalComment.test(rest)){next=rest.indexOf('<',1);if(next<0){break}
textEnd+=next;rest=html.slice(textEnd);}
text=html.substring(0,textEnd);}
if(textEnd<0){text=html;}
if(text){advance(text.length);}
if(options.chars&&text){options.chars(text,index-text.length,index);}}else{var endTagLength=0;var stackedTag=lastTag.toLowerCase();var reStackedTag=reCache[stackedTag]||(reCache[stackedTag]=new RegExp('([\\s\\S]*?)(</'+stackedTag+'[^>]*>)','i'));var rest$1=html.replace(reStackedTag,function(all,text,endTag){endTagLength=endTag.length;if(!isPlainTextElement(stackedTag)&&stackedTag!=='noscript'){text=text.replace(/<!\--([\s\S]*?)-->/g,'$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g,'$1');}
if(shouldIgnoreFirstNewline(stackedTag,text)){text=text.slice(1);}
if(options.chars){options.chars(text);}
return''});index+=html.length-rest$1.length;html=rest$1;parseEndTag(stackedTag,index-endTagLength,index);}
if(html===last){options.chars&&options.chars(html);if(!stack.length&&options.warn){options.warn(("Mal-formatted tag at end of template: \""+html+"\""),{start:index+html.length});}
break}}
parseEndTag();function advance(n){index+=n;html=html.substring(n);}
function parseStartTag(){var start=html.match(startTagOpen);if(start){var match={tagName:start[1],attrs:[],start:index};advance(start[0].length);var end,attr;while(!(end=html.match(startTagClose))&&(attr=html.match(dynamicArgAttribute)||html.match(attribute))){attr.start=index;advance(attr[0].length);attr.end=index;match.attrs.push(attr);}
if(end){match.unarySlash=end[1];advance(end[0].length);match.end=index;return match}}}
function handleStartTag(match){var tagName=match.tagName;var unarySlash=match.unarySlash;if(expectHTML){if(lastTag==='p'&&isNonPhrasingTag(tagName)){parseEndTag(lastTag);}
if(canBeLeftOpenTag$$1(tagName)&&lastTag===tagName){parseEndTag(tagName);}}
var unary=isUnaryTag$$1(tagName)||!!unarySlash;var l=match.attrs.length;var attrs=new Array(l);for(var i=0;i<l;i++){var args=match.attrs[i];var value=args[3]||args[4]||args[5]||'';var shouldDecodeNewlines=tagName==='a'&&args[1]==='href'?options.shouldDecodeNewlinesForHref:options.shouldDecodeNewlines;attrs[i]={name:args[1],value:decodeAttr(value,shouldDecodeNewlines)};if(options.outputSourceRange){attrs[i].start=args.start+args[0].match(/^\s*/).length;attrs[i].end=args.end;}}
if(!unary){stack.push({tag:tagName,lowerCasedTag:tagName.toLowerCase(),attrs:attrs,start:match.start,end:match.end});lastTag=tagName;}
if(options.start){options.start(tagName,attrs,unary,match.start,match.end);}}
function parseEndTag(tagName,start,end){var pos,lowerCasedTagName;if(start==null){start=index;}
if(end==null){end=index;}
if(tagName){lowerCasedTagName=tagName.toLowerCase();for(pos=stack.length-1;pos>=0;pos--){if(stack[pos].lowerCasedTag===lowerCasedTagName){break}}}else{pos=0;}
if(pos>=0){for(var i=stack.length-1;i>=pos;i--){if(i>pos||!tagName&&options.warn){options.warn(("tag <"+(stack[i].tag)+"> has no matching end tag."),{start:stack[i].start,end:stack[i].end});}
if(options.end){options.end(stack[i].tag,start,end);}}
stack.length=pos;lastTag=pos&&stack[pos-1].tag;}else if(lowerCasedTagName==='br'){if(options.start){options.start(tagName,[],true,start,end);}}else if(lowerCasedTagName==='p'){if(options.start){options.start(tagName,[],false,start,end);}
if(options.end){options.end(tagName,start,end);}}}}
var onRE=/^@|^v-on:/;var dirRE=/^v-|^@|^:|^#/;var forAliasRE=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;var forIteratorRE=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/;var stripParensRE=/^\(|\)$/g;var dynamicArgRE=/^\[.*\]$/;var argRE=/:(.*)$/;var bindRE=/^:|^\.|^v-bind:/;var modifierRE=/\.[^.\]]+(?=[^\]]*$)/g;var slotRE=/^v-slot(:|$)|^#/;var lineBreakRE=/[\r\n]/;var whitespaceRE$1=/[ \f\t\r\n]+/g;var invalidAttributeRE=/[\s"'<>\/=]/;var decodeHTMLCached=cached(he.decode);var emptySlotScopeToken="_empty_";var warn$2;var delimiters;var transforms;var preTransforms;var postTransforms;var platformIsPreTag;var platformMustUseProp;var platformGetTagNamespace;var maybeComponent;function createASTElement(tag,attrs,parent){return{type:1,tag:tag,attrsList:attrs,attrsMap:makeAttrsMap(attrs),rawAttrsMap:{},parent:parent,children:[]}}
function parse(template,options){warn$2=options.warn||baseWarn;platformIsPreTag=options.isPreTag||no;platformMustUseProp=options.mustUseProp||no;platformGetTagNamespace=options.getTagNamespace||no;var isReservedTag=options.isReservedTag||no;maybeComponent=function(el){return!!(el.component||el.attrsMap[':is']||el.attrsMap['v-bind:is']||!(el.attrsMap.is?isReservedTag(el.attrsMap.is):isReservedTag(el.tag)));};transforms=pluckModuleFunction(options.modules,'transformNode');preTransforms=pluckModuleFunction(options.modules,'preTransformNode');postTransforms=pluckModuleFunction(options.modules,'postTransformNode');delimiters=options.delimiters;var stack=[];var preserveWhitespace=options.preserveWhitespace!==false;var whitespaceOption=options.whitespace;var root;var currentParent;var inVPre=false;var inPre=false;var warned=false;function warnOnce(msg,range){if(!warned){warned=true;warn$2(msg,range);}}
function closeElement(element){trimEndingWhitespace(element);if(!inVPre&&!element.processed){element=processElement(element,options);}
if(!stack.length&&element!==root){if(root.if&&(element.elseif||element.else)){{checkRootConstraints(element);}
addIfCondition(root,{exp:element.elseif,block:element});}else{warnOnce("Component template should contain exactly one root element. "+"If you are using v-if on multiple elements, "+"use v-else-if to chain them instead.",{start:element.start});}}
if(currentParent&&!element.forbidden){if(element.elseif||element.else){processIfConditions(element,currentParent);}else{if(element.slotScope){var name=element.slotTarget||'"default"';(currentParent.scopedSlots||(currentParent.scopedSlots={}))[name]=element;}
currentParent.children.push(element);element.parent=currentParent;}}
element.children=element.children.filter(function(c){return!(c).slotScope;});trimEndingWhitespace(element);if(element.pre){inVPre=false;}
if(platformIsPreTag(element.tag)){inPre=false;}
for(var i=0;i<postTransforms.length;i++){postTransforms[i](element,options);}}
function trimEndingWhitespace(el){if(!inPre){var lastNode;while((lastNode=el.children[el.children.length-1])&&lastNode.type===3&&lastNode.text===' '){el.children.pop();}}}
function checkRootConstraints(el){if(el.tag==='slot'||el.tag==='template'){warnOnce("Cannot use <"+(el.tag)+"> as component root element because it may "+'contain multiple nodes.',{start:el.start});}
if(el.attrsMap.hasOwnProperty('v-for')){warnOnce('Cannot use v-for on stateful component root element because '+'it renders multiple elements.',el.rawAttrsMap['v-for']);}}
parseHTML(template,{warn:warn$2,expectHTML:options.expectHTML,isUnaryTag:options.isUnaryTag,canBeLeftOpenTag:options.canBeLeftOpenTag,shouldDecodeNewlines:options.shouldDecodeNewlines,shouldDecodeNewlinesForHref:options.shouldDecodeNewlinesForHref,shouldKeepComment:options.comments,outputSourceRange:options.outputSourceRange,start:function start(tag,attrs,unary,start$1,end){var ns=(currentParent&&currentParent.ns)||platformGetTagNamespace(tag);if(isIE&&ns==='svg'){attrs=guardIESVGBug(attrs);}
var element=createASTElement(tag,attrs,currentParent);if(ns){element.ns=ns;}
{if(options.outputSourceRange){element.start=start$1;element.end=end;element.rawAttrsMap=element.attrsList.reduce(function(cumulated,attr){cumulated[attr.name]=attr;return cumulated},{});}
attrs.forEach(function(attr){if(invalidAttributeRE.test(attr.name)){warn$2("Invalid dynamic argument expression: attribute names cannot contain "+"spaces, quotes, <, >, / or =.",{start:attr.start+attr.name.indexOf("["),end:attr.start+attr.name.length});}});}
if(isForbiddenTag(element)&&!isServerRendering()){element.forbidden=true;warn$2('Templates should only be responsible for mapping the state to the '+'UI. Avoid placing tags with side-effects in your templates, such as '+"<"+tag+">"+', as they will not be parsed.',{start:element.start});}
for(var i=0;i<preTransforms.length;i++){element=preTransforms[i](element,options)||element;}
if(!inVPre){processPre(element);if(element.pre){inVPre=true;}}
if(platformIsPreTag(element.tag)){inPre=true;}
if(inVPre){processRawAttrs(element);}else if(!element.processed){processFor(element);processIf(element);processOnce(element);}
if(!root){root=element;{checkRootConstraints(root);}}
if(!unary){currentParent=element;stack.push(element);}else{closeElement(element);}},end:function end(tag,start,end$1){var element=stack[stack.length-1];stack.length-=1;currentParent=stack[stack.length-1];if(options.outputSourceRange){element.end=end$1;}
closeElement(element);},chars:function chars(text,start,end){if(!currentParent){{if(text===template){warnOnce('Component template requires a root element, rather than just text.',{start:start});}else if((text=text.trim())){warnOnce(("text \""+text+"\" outside root element will be ignored."),{start:start});}}
return}
if(isIE&&currentParent.tag==='textarea'&&currentParent.attrsMap.placeholder===text){return}
var children=currentParent.children;if(inPre||text.trim()){text=isTextTag(currentParent)?text:decodeHTMLCached(text);}else if(!children.length){text='';}else if(whitespaceOption){if(whitespaceOption==='condense'){text=lineBreakRE.test(text)?'':' ';}else{text=' ';}}else{text=preserveWhitespace?' ':'';}
if(text){if(!inPre&&whitespaceOption==='condense'){text=text.replace(whitespaceRE$1,' ');}
var res;var child;if(!inVPre&&text!==' '&&(res=parseText(text,delimiters))){child={type:2,expression:res.expression,tokens:res.tokens,text:text};}else if(text!==' '||!children.length||children[children.length-1].text!==' '){child={type:3,text:text};}
if(child){if(options.outputSourceRange){child.start=start;child.end=end;}
children.push(child);}}},comment:function comment(text,start,end){if(currentParent){var child={type:3,text:text,isComment:true};if(options.outputSourceRange){child.start=start;child.end=end;}
currentParent.children.push(child);}}});return root}
function processPre(el){if(getAndRemoveAttr(el,'v-pre')!=null){el.pre=true;}}
function processRawAttrs(el){var list=el.attrsList;var len=list.length;if(len){var attrs=el.attrs=new Array(len);for(var i=0;i<len;i++){attrs[i]={name:list[i].name,value:JSON.stringify(list[i].value)};if(list[i].start!=null){attrs[i].start=list[i].start;attrs[i].end=list[i].end;}}}else if(!el.pre){el.plain=true;}}
function processElement(element,options){processKey(element);element.plain=(!element.key&&!element.scopedSlots&&!element.attrsList.length);processRef(element);processSlotContent(element);processSlotOutlet(element);processComponent(element);for(var i=0;i<transforms.length;i++){element=transforms[i](element,options)||element;}
processAttrs(element);return element}
function processKey(el){var exp=getBindingAttr(el,'key');if(exp){{if(el.tag==='template'){warn$2("<template> cannot be keyed. Place the key on real elements instead.",getRawBindingAttr(el,'key'));}
if(el.for){var iterator=el.iterator2||el.iterator1;var parent=el.parent;if(iterator&&iterator===exp&&parent&&parent.tag==='transition-group'){warn$2("Do not use v-for index as key on <transition-group> children, "+"this is the same as not using keys.",getRawBindingAttr(el,'key'),true);}}}
el.key=exp;}}
function processRef(el){var ref=getBindingAttr(el,'ref');if(ref){el.ref=ref;el.refInFor=checkInFor(el);}}
function processFor(el){var exp;if((exp=getAndRemoveAttr(el,'v-for'))){var res=parseFor(exp);if(res){extend(el,res);}else{warn$2(("Invalid v-for expression: "+exp),el.rawAttrsMap['v-for']);}}}
function parseFor(exp){var inMatch=exp.match(forAliasRE);if(!inMatch){return}
var res={};res.for=inMatch[2].trim();var alias=inMatch[1].trim().replace(stripParensRE,'');var iteratorMatch=alias.match(forIteratorRE);if(iteratorMatch){res.alias=alias.replace(forIteratorRE,'').trim();res.iterator1=iteratorMatch[1].trim();if(iteratorMatch[2]){res.iterator2=iteratorMatch[2].trim();}}else{res.alias=alias;}
return res}
function processIf(el){var exp=getAndRemoveAttr(el,'v-if');if(exp){el.if=exp;addIfCondition(el,{exp:exp,block:el});}else{if(getAndRemoveAttr(el,'v-else')!=null){el.else=true;}
var elseif=getAndRemoveAttr(el,'v-else-if');if(elseif){el.elseif=elseif;}}}
function processIfConditions(el,parent){var prev=findPrevElement(parent.children);if(prev&&prev.if){addIfCondition(prev,{exp:el.elseif,block:el});}else{warn$2("v-"+(el.elseif?('else-if="'+el.elseif+'"'):'else')+" "+"used on element <"+(el.tag)+"> without corresponding v-if.",el.rawAttrsMap[el.elseif?'v-else-if':'v-else']);}}
function findPrevElement(children){var i=children.length;while(i--){if(children[i].type===1){return children[i]}else{if(children[i].text!==' '){warn$2("text \""+(children[i].text.trim())+"\" between v-if and v-else(-if) "+"will be ignored.",children[i]);}
children.pop();}}}
function addIfCondition(el,condition){if(!el.ifConditions){el.ifConditions=[];}
el.ifConditions.push(condition);}
function processOnce(el){var once$$1=getAndRemoveAttr(el,'v-once');if(once$$1!=null){el.once=true;}}
function processSlotContent(el){var slotScope;if(el.tag==='template'){slotScope=getAndRemoveAttr(el,'scope');if(slotScope){warn$2("the \"scope\" attribute for scoped slots have been deprecated and "+"replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute "+"can also be used on plain elements in addition to <template> to "+"denote scoped slots.",el.rawAttrsMap['scope'],true);}
el.slotScope=slotScope||getAndRemoveAttr(el,'slot-scope');}else if((slotScope=getAndRemoveAttr(el,'slot-scope'))){if(el.attrsMap['v-for']){warn$2("Ambiguous combined usage of slot-scope and v-for on <"+(el.tag)+"> "+"(v-for takes higher priority). Use a wrapper <template> for the "+"scoped slot to make it clearer.",el.rawAttrsMap['slot-scope'],true);}
el.slotScope=slotScope;}
var slotTarget=getBindingAttr(el,'slot');if(slotTarget){el.slotTarget=slotTarget==='""'?'"default"':slotTarget;el.slotTargetDynamic=!!(el.attrsMap[':slot']||el.attrsMap['v-bind:slot']);if(el.tag!=='template'&&!el.slotScope){addAttr(el,'slot',slotTarget,getRawBindingAttr(el,'slot'));}}
{if(el.tag==='template'){var slotBinding=getAndRemoveAttrByRegex(el,slotRE);if(slotBinding){{if(el.slotTarget||el.slotScope){warn$2("Unexpected mixed usage of different slot syntaxes.",el);}
if(el.parent&&!maybeComponent(el.parent)){warn$2("<template v-slot> can only appear at the root level inside "+"the receiving component",el);}}
var ref=getSlotName(slotBinding);var name=ref.name;var dynamic=ref.dynamic;el.slotTarget=name;el.slotTargetDynamic=dynamic;el.slotScope=slotBinding.value||emptySlotScopeToken;}}else{var slotBinding$1=getAndRemoveAttrByRegex(el,slotRE);if(slotBinding$1){{if(!maybeComponent(el)){warn$2("v-slot can only be used on components or <template>.",slotBinding$1);}
if(el.slotScope||el.slotTarget){warn$2("Unexpected mixed usage of different slot syntaxes.",el);}
if(el.scopedSlots){warn$2("To avoid scope ambiguity, the default slot should also use "+"<template> syntax when there are other named slots.",slotBinding$1);}}
var slots=el.scopedSlots||(el.scopedSlots={});var ref$1=getSlotName(slotBinding$1);var name$1=ref$1.name;var dynamic$1=ref$1.dynamic;var slotContainer=slots[name$1]=createASTElement('template',[],el);slotContainer.slotTarget=name$1;slotContainer.slotTargetDynamic=dynamic$1;slotContainer.children=el.children.filter(function(c){if(!c.slotScope){c.parent=slotContainer;return true}});slotContainer.slotScope=slotBinding$1.value||emptySlotScopeToken;el.children=[];el.plain=false;}}}}
function getSlotName(binding){var name=binding.name.replace(slotRE,'');if(!name){if(binding.name[0]!=='#'){name='default';}else{warn$2("v-slot shorthand syntax requires a slot name.",binding);}}
return dynamicArgRE.test(name)?{name:name.slice(1,-1),dynamic:true}:{name:("\""+name+"\""),dynamic:false}}
function processSlotOutlet(el){if(el.tag==='slot'){el.slotName=getBindingAttr(el,'name');if(el.key){warn$2("`key` does not work on <slot> because slots are abstract outlets "+"and can possibly expand into multiple elements. "+"Use the key on a wrapping element instead.",getRawBindingAttr(el,'key'));}}}
function processComponent(el){var binding;if((binding=getBindingAttr(el,'is'))){el.component=binding;}
if(getAndRemoveAttr(el,'inline-template')!=null){el.inlineTemplate=true;}}
function processAttrs(el){var list=el.attrsList;var i,l,name,rawName,value,modifiers,syncGen,isDynamic;for(i=0,l=list.length;i<l;i++){name=rawName=list[i].name;value=list[i].value;if(dirRE.test(name)){el.hasBindings=true;modifiers=parseModifiers(name.replace(dirRE,''));if(modifiers){name=name.replace(modifierRE,'');}
if(bindRE.test(name)){name=name.replace(bindRE,'');value=parseFilters(value);isDynamic=dynamicArgRE.test(name);if(isDynamic){name=name.slice(1,-1);}
if(value.trim().length===0){warn$2(("The value for a v-bind expression cannot be empty. Found in \"v-bind:"+name+"\""));}
if(modifiers){if(modifiers.prop&&!isDynamic){name=camelize(name);if(name==='innerHtml'){name='innerHTML';}}
if(modifiers.camel&&!isDynamic){name=camelize(name);}
if(modifiers.sync){syncGen=genAssignmentCode(value,"$event");if(!isDynamic){addHandler(el,("update:"+(camelize(name))),syncGen,null,false,warn$2,list[i]);if(hyphenate(name)!==camelize(name)){addHandler(el,("update:"+(hyphenate(name))),syncGen,null,false,warn$2,list[i]);}}else{addHandler(el,("\"update:\"+("+name+")"),syncGen,null,false,warn$2,list[i],true);}}}
if((modifiers&&modifiers.prop)||(!el.component&&platformMustUseProp(el.tag,el.attrsMap.type,name))){addProp(el,name,value,list[i],isDynamic);}else{addAttr(el,name,value,list[i],isDynamic);}}else if(onRE.test(name)){name=name.replace(onRE,'');isDynamic=dynamicArgRE.test(name);if(isDynamic){name=name.slice(1,-1);}
addHandler(el,name,value,modifiers,false,warn$2,list[i],isDynamic);}else{name=name.replace(dirRE,'');var argMatch=name.match(argRE);var arg=argMatch&&argMatch[1];isDynamic=false;if(arg){name=name.slice(0,-(arg.length+1));if(dynamicArgRE.test(arg)){arg=arg.slice(1,-1);isDynamic=true;}}
addDirective(el,name,rawName,value,arg,isDynamic,modifiers,list[i]);if(name==='model'){checkForAliasModel(el,value);}}}else{{var res=parseText(value,delimiters);if(res){warn$2(name+"=\""+value+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div id="{{ val }}">, use <div :id="val">.',list[i]);}}
addAttr(el,name,JSON.stringify(value),list[i]);if(!el.component&&name==='muted'&&platformMustUseProp(el.tag,el.attrsMap.type,name)){addProp(el,name,'true',list[i]);}}}}
function checkInFor(el){var parent=el;while(parent){if(parent.for!==undefined){return true}
parent=parent.parent;}
return false}
function parseModifiers(name){var match=name.match(modifierRE);if(match){var ret={};match.forEach(function(m){ret[m.slice(1)]=true;});return ret}}
function makeAttrsMap(attrs){var map={};for(var i=0,l=attrs.length;i<l;i++){if(map[attrs[i].name]&&!isIE&&!isEdge){warn$2('duplicate attribute: '+attrs[i].name,attrs[i]);}
map[attrs[i].name]=attrs[i].value;}
return map}
function isTextTag(el){return el.tag==='script'||el.tag==='style'}
function isForbiddenTag(el){return(el.tag==='style'||(el.tag==='script'&&(!el.attrsMap.type||el.attrsMap.type==='text/javascript')))}
var ieNSBug=/^xmlns:NS\d+/;var ieNSPrefix=/^NS\d+:/;function guardIESVGBug(attrs){var res=[];for(var i=0;i<attrs.length;i++){var attr=attrs[i];if(!ieNSBug.test(attr.name)){attr.name=attr.name.replace(ieNSPrefix,'');res.push(attr);}}
return res}
function checkForAliasModel(el,value){var _el=el;while(_el){if(_el.for&&_el.alias===value){warn$2("<"+(el.tag)+" v-model=\""+value+"\">: "+"You are binding v-model directly to a v-for iteration alias. "+"This will not be able to modify the v-for source array because "+"writing to the alias is like modifying a function local variable. "+"Consider using an array of objects and use v-model on an object property instead.",el.rawAttrsMap['v-model']);}
_el=_el.parent;}}
function preTransformNode(el,options){if(el.tag==='input'){var map=el.attrsMap;if(!map['v-model']){return}
var typeBinding;if(map[':type']||map['v-bind:type']){typeBinding=getBindingAttr(el,'type');}
if(!map.type&&!typeBinding&&map['v-bind']){typeBinding="("+(map['v-bind'])+").type";}
if(typeBinding){var ifCondition=getAndRemoveAttr(el,'v-if',true);var ifConditionExtra=ifCondition?("&&("+ifCondition+")"):"";var hasElse=getAndRemoveAttr(el,'v-else',true)!=null;var elseIfCondition=getAndRemoveAttr(el,'v-else-if',true);var branch0=cloneASTElement(el);processFor(branch0);addRawAttr(branch0,'type','checkbox');processElement(branch0,options);branch0.processed=true;branch0.if="("+typeBinding+")==='checkbox'"+ifConditionExtra;addIfCondition(branch0,{exp:branch0.if,block:branch0});var branch1=cloneASTElement(el);getAndRemoveAttr(branch1,'v-for',true);addRawAttr(branch1,'type','radio');processElement(branch1,options);addIfCondition(branch0,{exp:"("+typeBinding+")==='radio'"+ifConditionExtra,block:branch1});var branch2=cloneASTElement(el);getAndRemoveAttr(branch2,'v-for',true);addRawAttr(branch2,':type',typeBinding);processElement(branch2,options);addIfCondition(branch0,{exp:ifCondition,block:branch2});if(hasElse){branch0.else=true;}else if(elseIfCondition){branch0.elseif=elseIfCondition;}
return branch0}}}
function cloneASTElement(el){return createASTElement(el.tag,el.attrsList.slice(),el.parent)}
var model$1={preTransformNode:preTransformNode};var modules$1=[klass$1,style$1,model$1];function text(el,dir){if(dir.value){addProp(el,'textContent',("_s("+(dir.value)+")"),dir);}}
function html(el,dir){if(dir.value){addProp(el,'innerHTML',("_s("+(dir.value)+")"),dir);}}
var directives$1={model:model,text:text,html:html};var baseOptions={expectHTML:true,modules:modules$1,directives:directives$1,isPreTag:isPreTag,isUnaryTag:isUnaryTag,mustUseProp:mustUseProp,canBeLeftOpenTag:canBeLeftOpenTag,isReservedTag:isReservedTag,getTagNamespace:getTagNamespace,staticKeys:genStaticKeys(modules$1)};var isStaticKey;var isPlatformReservedTag;var genStaticKeysCached=cached(genStaticKeys$1);function optimize(root,options){if(!root){return}
isStaticKey=genStaticKeysCached(options.staticKeys||'');isPlatformReservedTag=options.isReservedTag||no;markStatic$1(root);markStaticRoots(root,false);}
function genStaticKeys$1(keys){return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap'+
(keys?','+keys:''))}
function markStatic$1(node){node.static=isStatic(node);if(node.type===1){if(!isPlatformReservedTag(node.tag)&&node.tag!=='slot'&&node.attrsMap['inline-template']==null){return}
for(var i=0,l=node.children.length;i<l;i++){var child=node.children[i];markStatic$1(child);if(!child.static){node.static=false;}}
if(node.ifConditions){for(var i$1=1,l$1=node.ifConditions.length;i$1<l$1;i$1++){var block=node.ifConditions[i$1].block;markStatic$1(block);if(!block.static){node.static=false;}}}}}
function markStaticRoots(node,isInFor){if(node.type===1){if(node.static||node.once){node.staticInFor=isInFor;}
if(node.static&&node.children.length&&!(node.children.length===1&&node.children[0].type===3)){node.staticRoot=true;return}else{node.staticRoot=false;}
if(node.children){for(var i=0,l=node.children.length;i<l;i++){markStaticRoots(node.children[i],isInFor||!!node.for);}}
if(node.ifConditions){for(var i$1=1,l$1=node.ifConditions.length;i$1<l$1;i$1++){markStaticRoots(node.ifConditions[i$1].block,isInFor);}}}}
function isStatic(node){if(node.type===2){return false}
if(node.type===3){return true}
return!!(node.pre||(!node.hasBindings&&!node.if&&!node.for&&!isBuiltInTag(node.tag)&&isPlatformReservedTag(node.tag)&&!isDirectChildOfTemplateFor(node)&&Object.keys(node).every(isStaticKey)))}
function isDirectChildOfTemplateFor(node){while(node.parent){node=node.parent;if(node.tag!=='template'){return false}
if(node.for){return true}}
return false}
var fnExpRE=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;var fnInvokeRE=/\([^)]*?\);*$/;var simplePathRE=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;var keyCodes={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,'delete':[8,46]};var keyNames={esc:['Esc','Escape'],tab:'Tab',enter:'Enter',space:[' ','Spacebar'],up:['Up','ArrowUp'],left:['Left','ArrowLeft'],right:['Right','ArrowRight'],down:['Down','ArrowDown'],'delete':['Backspace','Delete','Del']};var genGuard=function(condition){return("if("+condition+")return null;");};var modifierCode={stop:'$event.stopPropagation();',prevent:'$event.preventDefault();',self:genGuard("$event.target !== $event.currentTarget"),ctrl:genGuard("!$event.ctrlKey"),shift:genGuard("!$event.shiftKey"),alt:genGuard("!$event.altKey"),meta:genGuard("!$event.metaKey"),left:genGuard("'button' in $event && $event.button !== 0"),middle:genGuard("'button' in $event && $event.button !== 1"),right:genGuard("'button' in $event && $event.button !== 2")};function genHandlers(events,isNative){var prefix=isNative?'nativeOn:':'on:';var staticHandlers="";var dynamicHandlers="";for(var name in events){var handlerCode=genHandler(events[name]);if(events[name]&&events[name].dynamic){dynamicHandlers+=name+","+handlerCode+",";}else{staticHandlers+="\""+name+"\":"+handlerCode+",";}}
staticHandlers="{"+(staticHandlers.slice(0,-1))+"}";if(dynamicHandlers){return prefix+"_d("+staticHandlers+",["+(dynamicHandlers.slice(0,-1))+"])"}else{return prefix+staticHandlers}}
function genHandler(handler){if(!handler){return'function(){}'}
if(Array.isArray(handler)){return("["+(handler.map(function(handler){return genHandler(handler);}).join(','))+"]")}
var isMethodPath=simplePathRE.test(handler.value);var isFunctionExpression=fnExpRE.test(handler.value);var isFunctionInvocation=simplePathRE.test(handler.value.replace(fnInvokeRE,''));if(!handler.modifiers){if(isMethodPath||isFunctionExpression){return handler.value}
return("function($event){"+(isFunctionInvocation?("return "+(handler.value)):handler.value)+"}")}else{var code='';var genModifierCode='';var keys=[];for(var key in handler.modifiers){if(modifierCode[key]){genModifierCode+=modifierCode[key];if(keyCodes[key]){keys.push(key);}}else if(key==='exact'){var modifiers=(handler.modifiers);genModifierCode+=genGuard(['ctrl','shift','alt','meta'].filter(function(keyModifier){return!modifiers[keyModifier];}).map(function(keyModifier){return("$event."+keyModifier+"Key");}).join('||'));}else{keys.push(key);}}
if(keys.length){code+=genKeyFilter(keys);}
if(genModifierCode){code+=genModifierCode;}
var handlerCode=isMethodPath?("return "+(handler.value)+".apply(null, arguments)"):isFunctionExpression?("return ("+(handler.value)+").apply(null, arguments)"):isFunctionInvocation?("return "+(handler.value)):handler.value;return("function($event){"+code+handlerCode+"}")}}
function genKeyFilter(keys){return("if(!$event.type.indexOf('key')&&"+
(keys.map(genFilterCode).join('&&'))+")return null;")}
function genFilterCode(key){var keyVal=parseInt(key,10);if(keyVal){return("$event.keyCode!=="+keyVal)}
var keyCode=keyCodes[key];var keyName=keyNames[key];return("_k($event.keyCode,"+
(JSON.stringify(key))+","+
(JSON.stringify(keyCode))+","+"$event.key,"+""+(JSON.stringify(keyName))+")")}
function on(el,dir){if(dir.modifiers){warn("v-on without argument does not support modifiers.");}
el.wrapListeners=function(code){return("_g("+code+","+(dir.value)+")");};}
function bind$1(el,dir){el.wrapData=function(code){return("_b("+code+",'"+(el.tag)+"',"+(dir.value)+","+(dir.modifiers&&dir.modifiers.prop?'true':'false')+(dir.modifiers&&dir.modifiers.sync?',true':'')+")")};}
var baseDirectives={on:on,bind:bind$1,cloak:noop};var CodegenState=function CodegenState(options){this.options=options;this.warn=options.warn||baseWarn;this.transforms=pluckModuleFunction(options.modules,'transformCode');this.dataGenFns=pluckModuleFunction(options.modules,'genData');this.directives=extend(extend({},baseDirectives),options.directives);var isReservedTag=options.isReservedTag||no;this.maybeComponent=function(el){return!!el.component||!isReservedTag(el.tag);};this.onceId=0;this.staticRenderFns=[];this.pre=false;};function generate(ast,options){var state=new CodegenState(options);var code=ast?(ast.tag==='script'?'null':genElement(ast,state)):'_c("div")';return{render:("with(this){return "+code+"}"),staticRenderFns:state.staticRenderFns}}
function genElement(el,state){if(el.parent){el.pre=el.pre||el.parent.pre;}
if(el.staticRoot&&!el.staticProcessed){return genStatic(el,state)}else if(el.once&&!el.onceProcessed){return genOnce(el,state)}else if(el.for&&!el.forProcessed){return genFor(el,state)}else if(el.if&&!el.ifProcessed){return genIf(el,state)}else if(el.tag==='template'&&!el.slotTarget&&!state.pre){return genChildren(el,state)||'void 0'}else if(el.tag==='slot'){return genSlot(el,state)}else{var code;if(el.component){code=genComponent(el.component,el,state);}else{var data;if(!el.plain||(el.pre&&state.maybeComponent(el))){data=genData$2(el,state);}
var children=el.inlineTemplate?null:genChildren(el,state,true);code="_c('"+(el.tag)+"'"+(data?(","+data):'')+(children?(","+children):'')+")";}
for(var i=0;i<state.transforms.length;i++){code=state.transforms[i](el,code);}
return code}}
function genStatic(el,state){el.staticProcessed=true;var originalPreState=state.pre;if(el.pre){state.pre=el.pre;}
state.staticRenderFns.push(("with(this){return "+(genElement(el,state))+"}"));state.pre=originalPreState;return("_m("+(state.staticRenderFns.length-1)+(el.staticInFor?',true':'')+")")}
function genOnce(el,state){el.onceProcessed=true;if(el.if&&!el.ifProcessed){return genIf(el,state)}else if(el.staticInFor){var key='';var parent=el.parent;while(parent){if(parent.for){key=parent.key;break}
parent=parent.parent;}
if(!key){state.warn("v-once can only be used inside v-for that is keyed. ",el.rawAttrsMap['v-once']);return genElement(el,state)}
return("_o("+(genElement(el,state))+","+(state.onceId++)+","+key+")")}else{return genStatic(el,state)}}
function genIf(el,state,altGen,altEmpty){el.ifProcessed=true;return genIfConditions(el.ifConditions.slice(),state,altGen,altEmpty)}
function genIfConditions(conditions,state,altGen,altEmpty){if(!conditions.length){return altEmpty||'_e()'}
var condition=conditions.shift();if(condition.exp){return("("+(condition.exp)+")?"+(genTernaryExp(condition.block))+":"+(genIfConditions(conditions,state,altGen,altEmpty)))}else{return(""+(genTernaryExp(condition.block)))}
function genTernaryExp(el){return altGen?altGen(el,state):el.once?genOnce(el,state):genElement(el,state)}}
function genFor(el,state,altGen,altHelper){var exp=el.for;var alias=el.alias;var iterator1=el.iterator1?(","+(el.iterator1)):'';var iterator2=el.iterator2?(","+(el.iterator2)):'';if(state.maybeComponent(el)&&el.tag!=='slot'&&el.tag!=='template'&&!el.key){state.warn("<"+(el.tag)+" v-for=\""+alias+" in "+exp+"\">: component lists rendered with "+"v-for should have explicit keys. "+"See https://vuejs.org/guide/list.html#key for more info.",el.rawAttrsMap['v-for'],true);}
el.forProcessed=true;return(altHelper||'_l')+"(("+exp+"),"+"function("+alias+iterator1+iterator2+"){"+"return "+((altGen||genElement)(el,state))+'})'}
function genData$2(el,state){var data='{';var dirs=genDirectives(el,state);if(dirs){data+=dirs+',';}
if(el.key){data+="key:"+(el.key)+",";}
if(el.ref){data+="ref:"+(el.ref)+",";}
if(el.refInFor){data+="refInFor:true,";}
if(el.pre){data+="pre:true,";}
if(el.component){data+="tag:\""+(el.tag)+"\",";}
for(var i=0;i<state.dataGenFns.length;i++){data+=state.dataGenFns[i](el);}
if(el.attrs){data+="attrs:"+(genProps(el.attrs))+",";}
if(el.props){data+="domProps:"+(genProps(el.props))+",";}
if(el.events){data+=(genHandlers(el.events,false))+",";}
if(el.nativeEvents){data+=(genHandlers(el.nativeEvents,true))+",";}
if(el.slotTarget&&!el.slotScope){data+="slot:"+(el.slotTarget)+",";}
if(el.scopedSlots){data+=(genScopedSlots(el,el.scopedSlots,state))+",";}
if(el.model){data+="model:{value:"+(el.model.value)+",callback:"+(el.model.callback)+",expression:"+(el.model.expression)+"},";}
if(el.inlineTemplate){var inlineTemplate=genInlineTemplate(el,state);if(inlineTemplate){data+=inlineTemplate+",";}}
data=data.replace(/,$/,'')+'}';if(el.dynamicAttrs){data="_b("+data+",\""+(el.tag)+"\","+(genProps(el.dynamicAttrs))+")";}
if(el.wrapData){data=el.wrapData(data);}
if(el.wrapListeners){data=el.wrapListeners(data);}
return data}
function genDirectives(el,state){var dirs=el.directives;if(!dirs){return}
var res='directives:[';var hasRuntime=false;var i,l,dir,needRuntime;for(i=0,l=dirs.length;i<l;i++){dir=dirs[i];needRuntime=true;var gen=state.directives[dir.name];if(gen){needRuntime=!!gen(el,dir,state.warn);}
if(needRuntime){hasRuntime=true;res+="{name:\""+(dir.name)+"\",rawName:\""+(dir.rawName)+"\""+(dir.value?(",value:("+(dir.value)+"),expression:"+(JSON.stringify(dir.value))):'')+(dir.arg?(",arg:"+(dir.isDynamicArg?dir.arg:("\""+(dir.arg)+"\""))):'')+(dir.modifiers?(",modifiers:"+(JSON.stringify(dir.modifiers))):'')+"},";}}
if(hasRuntime){return res.slice(0,-1)+']'}}
function genInlineTemplate(el,state){var ast=el.children[0];if(el.children.length!==1||ast.type!==1){state.warn('Inline-template components must have exactly one child element.',{start:el.start});}
if(ast&&ast.type===1){var inlineRenderFns=generate(ast,state.options);return("inlineTemplate:{render:function(){"+(inlineRenderFns.render)+"},staticRenderFns:["+(inlineRenderFns.staticRenderFns.map(function(code){return("function(){"+code+"}");}).join(','))+"]}")}}
function genScopedSlots(el,slots,state){var needsForceUpdate=el.for||Object.keys(slots).some(function(key){var slot=slots[key];return(slot.slotTargetDynamic||slot.if||slot.for||containsSlotChild(slot))});var needsKey=!!el.if;if(!needsForceUpdate){var parent=el.parent;while(parent){if((parent.slotScope&&parent.slotScope!==emptySlotScopeToken)||parent.for){needsForceUpdate=true;break}
if(parent.if){needsKey=true;}
parent=parent.parent;}}
var generatedSlots=Object.keys(slots).map(function(key){return genScopedSlot(slots[key],state);}).join(',');return("scopedSlots:_u(["+generatedSlots+"]"+(needsForceUpdate?",null,true":"")+(!needsForceUpdate&&needsKey?(",null,false,"+(hash(generatedSlots))):"")+")")}
function hash(str){var hash=5381;var i=str.length;while(i){hash=(hash*33)^str.charCodeAt(--i);}
return hash>>>0}
function containsSlotChild(el){if(el.type===1){if(el.tag==='slot'){return true}
return el.children.some(containsSlotChild)}
return false}
function genScopedSlot(el,state){var isLegacySyntax=el.attrsMap['slot-scope'];if(el.if&&!el.ifProcessed&&!isLegacySyntax){return genIf(el,state,genScopedSlot,"null")}
if(el.for&&!el.forProcessed){return genFor(el,state,genScopedSlot)}
var slotScope=el.slotScope===emptySlotScopeToken?"":String(el.slotScope);var fn="function("+slotScope+"){"+"return "+(el.tag==='template'?el.if&&isLegacySyntax?("("+(el.if)+")?"+(genChildren(el,state)||'undefined')+":undefined"):genChildren(el,state)||'undefined':genElement(el,state))+"}";var reverseProxy=slotScope?"":",proxy:true";return("{key:"+(el.slotTarget||"\"default\"")+",fn:"+fn+reverseProxy+"}")}
function genChildren(el,state,checkSkip,altGenElement,altGenNode){var children=el.children;if(children.length){var el$1=children[0];if(children.length===1&&el$1.for&&el$1.tag!=='template'&&el$1.tag!=='slot'){var normalizationType=checkSkip?state.maybeComponent(el$1)?",1":",0":"";return(""+((altGenElement||genElement)(el$1,state))+normalizationType)}
var normalizationType$1=checkSkip?getNormalizationType(children,state.maybeComponent):0;var gen=altGenNode||genNode;return("["+(children.map(function(c){return gen(c,state);}).join(','))+"]"+(normalizationType$1?(","+normalizationType$1):''))}}
function getNormalizationType(children,maybeComponent){var res=0;for(var i=0;i<children.length;i++){var el=children[i];if(el.type!==1){continue}
if(needsNormalization(el)||(el.ifConditions&&el.ifConditions.some(function(c){return needsNormalization(c.block);}))){res=2;break}
if(maybeComponent(el)||(el.ifConditions&&el.ifConditions.some(function(c){return maybeComponent(c.block);}))){res=1;}}
return res}
function needsNormalization(el){return el.for!==undefined||el.tag==='template'||el.tag==='slot'}
function genNode(node,state){if(node.type===1){return genElement(node,state)}else if(node.type===3&&node.isComment){return genComment(node)}else{return genText(node)}}
function genText(text){return("_v("+(text.type===2?text.expression:transformSpecialNewlines(JSON.stringify(text.text)))+")")}
function genComment(comment){return("_e("+(JSON.stringify(comment.text))+")")}
function genSlot(el,state){var slotName=el.slotName||'"default"';var children=genChildren(el,state);var res="_t("+slotName+(children?(",function(){return "+children+"}"):'');var attrs=el.attrs||el.dynamicAttrs?genProps((el.attrs||[]).concat(el.dynamicAttrs||[]).map(function(attr){return({name:camelize(attr.name),value:attr.value,dynamic:attr.dynamic});})):null;var bind$$1=el.attrsMap['v-bind'];if((attrs||bind$$1)&&!children){res+=",null";}
if(attrs){res+=","+attrs;}
if(bind$$1){res+=(attrs?'':',null')+","+bind$$1;}
return res+')'}
function genComponent(componentName,el,state){var children=el.inlineTemplate?null:genChildren(el,state,true);return("_c("+componentName+","+(genData$2(el,state))+(children?(","+children):'')+")")}
function genProps(props){var staticProps="";var dynamicProps="";for(var i=0;i<props.length;i++){var prop=props[i];var value=transformSpecialNewlines(prop.value);if(prop.dynamic){dynamicProps+=(prop.name)+","+value+",";}else{staticProps+="\""+(prop.name)+"\":"+value+",";}}
staticProps="{"+(staticProps.slice(0,-1))+"}";if(dynamicProps){return("_d("+staticProps+",["+(dynamicProps.slice(0,-1))+"])")}else{return staticProps}}
function transformSpecialNewlines(text){return text.replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029')}
var prohibitedKeywordRE=new RegExp('\\b'+('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,'+'super,throw,while,yield,delete,export,import,return,switch,default,'+'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b')+'\\b');var unaryOperatorsRE=new RegExp('\\b'+('delete,typeof,void').split(',').join('\\s*\\([^\\)]*\\)|\\b')+'\\s*\\([^\\)]*\\)');var stripStringRE=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;function detectErrors(ast,warn){if(ast){checkNode(ast,warn);}}
function checkNode(node,warn){if(node.type===1){for(var name in node.attrsMap){if(dirRE.test(name)){var value=node.attrsMap[name];if(value){var range=node.rawAttrsMap[name];if(name==='v-for'){checkFor(node,("v-for=\""+value+"\""),warn,range);}else if(name==='v-slot'||name[0]==='#'){checkFunctionParameterExpression(value,(name+"=\""+value+"\""),warn,range);}else if(onRE.test(name)){checkEvent(value,(name+"=\""+value+"\""),warn,range);}else{checkExpression(value,(name+"=\""+value+"\""),warn,range);}}}}
if(node.children){for(var i=0;i<node.children.length;i++){checkNode(node.children[i],warn);}}}else if(node.type===2){checkExpression(node.expression,node.text,warn,node);}}
function checkEvent(exp,text,warn,range){var stripped=exp.replace(stripStringRE,'');var keywordMatch=stripped.match(unaryOperatorsRE);if(keywordMatch&&stripped.charAt(keywordMatch.index-1)!=='$'){warn("avoid using JavaScript unary operator as property name: "+"\""+(keywordMatch[0])+"\" in expression "+(text.trim()),range);}
checkExpression(exp,text,warn,range);}
function checkFor(node,text,warn,range){checkExpression(node.for||'',text,warn,range);checkIdentifier(node.alias,'v-for alias',text,warn,range);checkIdentifier(node.iterator1,'v-for iterator',text,warn,range);checkIdentifier(node.iterator2,'v-for iterator',text,warn,range);}
function checkIdentifier(ident,type,text,warn,range){if(typeof ident==='string'){try{new Function(("var "+ident+"=_"));}catch(e){warn(("invalid "+type+" \""+ident+"\" in expression: "+(text.trim())),range);}}}
function checkExpression(exp,text,warn,range){try{new Function(("return "+exp));}catch(e){var keywordMatch=exp.replace(stripStringRE,'').match(prohibitedKeywordRE);if(keywordMatch){warn("avoid using JavaScript keyword as property name: "+"\""+(keywordMatch[0])+"\"\n  Raw expression: "+(text.trim()),range);}else{warn("invalid expression: "+(e.message)+" in\n\n"+"    "+exp+"\n\n"+"  Raw expression: "+(text.trim())+"\n",range);}}}
function checkFunctionParameterExpression(exp,text,warn,range){try{new Function(exp,'');}catch(e){warn("invalid function parameter expression: "+(e.message)+" in\n\n"+"    "+exp+"\n\n"+"  Raw expression: "+(text.trim())+"\n",range);}}
var range=2;function generateCodeFrame(source,start,end){if(start===void 0)start=0;if(end===void 0)end=source.length;var lines=source.split(/\r?\n/);var count=0;var res=[];for(var i=0;i<lines.length;i++){count+=lines[i].length+1;if(count>=start){for(var j=i-range;j<=i+range||end>count;j++){if(j<0||j>=lines.length){continue}
res.push((""+(j+1)+(repeat$1(" ",3-String(j+1).length))+"|  "+(lines[j])));var lineLength=lines[j].length;if(j===i){var pad=start-(count-lineLength)+1;var length=end>count?lineLength-pad:end-start;res.push("   |  "+repeat$1(" ",pad)+repeat$1("^",length));}else if(j>i){if(end>count){var length$1=Math.min(end-count,lineLength);res.push("   |  "+repeat$1("^",length$1));}
count+=lineLength+1;}}
break}}
return res.join('\n')}
function repeat$1(str,n){var result='';if(n>0){while(true){if(n&1){result+=str;}
n>>>=1;if(n<=0){break}
str+=str;}}
return result}
function createFunction(code,errors){try{return new Function(code)}catch(err){errors.push({err:err,code:code});return noop}}
function createCompileToFunctionFn(compile){var cache=Object.create(null);return function compileToFunctions(template,options,vm){options=extend({},options);var warn$$1=options.warn||warn;delete options.warn;{try{new Function('return 1');}catch(e){if(e.toString().match(/unsafe-eval|CSP/)){warn$$1('It seems you are using the standalone build of Vue.js in an '+'environment with Content Security Policy that prohibits unsafe-eval. '+'The template compiler cannot work in this environment. Consider '+'relaxing the policy to allow unsafe-eval or pre-compiling your '+'templates into render functions.');}}}
var key=options.delimiters?String(options.delimiters)+template:template;if(cache[key]){return cache[key]}
var compiled=compile(template,options);{if(compiled.errors&&compiled.errors.length){if(options.outputSourceRange){compiled.errors.forEach(function(e){warn$$1("Error compiling template:\n\n"+(e.msg)+"\n\n"+
generateCodeFrame(template,e.start,e.end),vm);});}else{warn$$1("Error compiling template:\n\n"+template+"\n\n"+
compiled.errors.map(function(e){return("- "+e);}).join('\n')+'\n',vm);}}
if(compiled.tips&&compiled.tips.length){if(options.outputSourceRange){compiled.tips.forEach(function(e){return tip(e.msg,vm);});}else{compiled.tips.forEach(function(msg){return tip(msg,vm);});}}}
var res={};var fnGenErrors=[];res.render=createFunction(compiled.render,fnGenErrors);res.staticRenderFns=compiled.staticRenderFns.map(function(code){return createFunction(code,fnGenErrors)});{if((!compiled.errors||!compiled.errors.length)&&fnGenErrors.length){warn$$1("Failed to generate render function:\n\n"+
fnGenErrors.map(function(ref){var err=ref.err;var code=ref.code;return((err.toString())+" in\n\n"+code+"\n");}).join('\n'),vm);}}
return(cache[key]=res)}}
function createCompilerCreator(baseCompile){return function createCompiler(baseOptions){function compile(template,options){var finalOptions=Object.create(baseOptions);var errors=[];var tips=[];var warn=function(msg,range,tip){(tip?tips:errors).push(msg);};if(options){if(options.outputSourceRange){var leadingSpaceLength=template.match(/^\s*/)[0].length;warn=function(msg,range,tip){var data={msg:msg};if(range){if(range.start!=null){data.start=range.start+leadingSpaceLength;}
if(range.end!=null){data.end=range.end+leadingSpaceLength;}}
(tip?tips:errors).push(data);};}
if(options.modules){finalOptions.modules=(baseOptions.modules||[]).concat(options.modules);}
if(options.directives){finalOptions.directives=extend(Object.create(baseOptions.directives||null),options.directives);}
for(var key in options){if(key!=='modules'&&key!=='directives'){finalOptions[key]=options[key];}}}
finalOptions.warn=warn;var compiled=baseCompile(template.trim(),finalOptions);{detectErrors(compiled.ast,warn);}
compiled.errors=errors;compiled.tips=tips;return compiled}
return{compile:compile,compileToFunctions:createCompileToFunctionFn(compile)}}}
var createCompiler=createCompilerCreator(function baseCompile(template,options){var ast=parse(template.trim(),options);if(options.optimize!==false){optimize(ast,options);}
var code=generate(ast,options);return{ast:ast,render:code.render,staticRenderFns:code.staticRenderFns}});var ref$1=createCompiler(baseOptions);var compile=ref$1.compile;var compileToFunctions=ref$1.compileToFunctions;var div;function getShouldDecode(href){div=div||document.createElement('div');div.innerHTML=href?"<a href=\"\n\"/>":"<div a=\"\n\"/>";return div.innerHTML.indexOf('&#10;')>0}
var shouldDecodeNewlines=inBrowser?getShouldDecode(false):false;var shouldDecodeNewlinesForHref=inBrowser?getShouldDecode(true):false;var idToTemplate=cached(function(id){var el=query(id);return el&&el.innerHTML});var mount=Vue.prototype.$mount;Vue.prototype.$mount=function(el,hydrating){el=el&&query(el);if(el===document.body||el===document.documentElement){warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");return this}
var options=this.$options;if(!options.render){var template=options.template;if(template){if(typeof template==='string'){if(template.charAt(0)==='#'){template=idToTemplate(template);if(!template){warn(("Template element not found or is empty: "+(options.template)),this);}}}else if(template.nodeType){template=template.innerHTML;}else{{warn('invalid template option:'+template,this);}
return this}}else if(el){template=getOuterHTML(el);}
if(template){if(config.performance&&mark){mark('compile');}
var ref=compileToFunctions(template,{outputSourceRange:"development"!=='production',shouldDecodeNewlines:shouldDecodeNewlines,shouldDecodeNewlinesForHref:shouldDecodeNewlinesForHref,delimiters:options.delimiters,comments:options.comments},this);var render=ref.render;var staticRenderFns=ref.staticRenderFns;options.render=render;options.staticRenderFns=staticRenderFns;if(config.performance&&mark){mark('compile end');measure(("vue "+(this._name)+" compile"),'compile','compile end');}}}
return mount.call(this,el,hydrating)};function getOuterHTML(el){if(el.outerHTML){return el.outerHTML}else{var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML}}
Vue.compile=compileToFunctions;return Vue;}));