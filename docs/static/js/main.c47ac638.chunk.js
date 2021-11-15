(this["webpackJsonpmultiple-url-opener"]=this["webpackJsonpmultiple-url-opener"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(7),i=n.n(r),l=(n(13),n(2)),c=n(3),u=n(5),o=n(4),d=(n(14),n(8)),b=n(0);function j(e){e.fixed;var t=s.a.useState(!1),n=Object(d.a)(t,2),a=n[0],r=n[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-10",children:Object(b.jsx)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between max-w-6xl",children:Object(b.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(b.jsx)("a",{className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white",href:"#",children:"Multiple URL Opener"}),Object(b.jsx)("button",{className:"text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return r(!a)},children:Object(b.jsx)("i",{className:"fas fa-bars"})})]})})})})}var h=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({value:e.target.value}),a.state.updateValue(e.target.value)},a.state={value:0,updateValue:e.updateValue},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{class:"slidecontainer text-white",children:[Object(b.jsx)("p",{children:"Wait time between each url"}),Object(b.jsxs)("div",{className:"pt-2 flex justify-start align-middle items-center",children:[Object(b.jsx)("input",{type:"range",min:"0",max:"100",value:this.state.value,onChange:this.handleChange,class:"slider",id:"myRange"}),Object(b.jsxs)("label",{className:"pl-3 text-white",children:[this.state.value," seconds"]})]})]})}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={urls:[],number_of_urls:0,number_of_valid_urls:0,wait_time:0},a.sum=function(e){return e.reduce((function(e,t){return e+t}),0)},a.setWaitTimer=function(e){a.setState({wait_time:e})},a.isValidURL=function(e){return e=e.trim(),!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},a.addProtocolIfMissing=function(e){return e.toLowerCase().startsWith("http")?e:"https://"+e},a.open=function(){for(var e=a.state.urls,t=0,n=function(){var n=a.addProtocolIfMissing(e[s]);a.isValidURL(n)&&(setTimeout((function(){window.open(n,"_blank").blur(),window.focus()}),1e3*a.state.wait_time*t),t+=1)},s=0;s<e.length;s++)n()},a.formatTextarea=function(e){a.isValidURL(e.textContent)?e.style.color="green":e.style.color="red";for(var t=0;t<e.children.length;t++)a.isValidURL(e.children[t].textContent)?e.children[t].style.color="green":e.children[t].style.color="red"},a.handleInput=function(e){a.setState({urls:e.currentTarget.innerText.split(" ").join("").split("\n").filter((function(e){return e}))}),a.setState({number_of_urls:a.state.urls.length}),a.setState({number_of_valid_urls:a.sum(a.state.urls.map(a.isValidURL))}),a.formatTextarea(e.currentTarget),a.forceUpdate()},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"w-full",children:[Object(b.jsx)("div",{className:"mb-4",children:Object(b.jsx)("div",{className:"bg-white h-96 p-2  bg-gray-300 overflow-auto",contentEditable:!0,onInput:this.handleInput})}),Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(h,{updateValue:this.setWaitTimer})}),Object(b.jsxs)("label",{className:"block text-gray-400 text-sm mb-2 mt-2",children:[this.state.number_of_urls," URLs (",this.state.number_of_valid_urls," valid, not valid ones will be skipped)"]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline ",type:"button",onClick:this.open,children:"Open"})})]})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.title="MultiUrlOpener v1.0"}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)(j,{}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)("div",{className:" flex justify-center",children:Object(b.jsxs)("div",{className:"w-11/12 lg:w-5/6 xl:w-4/6 2xl:w-3/6 ",children:[Object(b.jsx)("h1",{className:"text-xl mb-4 text-gray-400",children:"Enter URLs you want to open"}),Object(b.jsx)(x,{})]})})})]})}}]),n}(s.a.Component),m=f;i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c47ac638.chunk.js.map