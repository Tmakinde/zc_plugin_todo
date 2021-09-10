"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[765],{7006:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(3645),i=o.n(r)()((function(e){return e[1]}));i.push([e.id,".emoji-mart[data-v-237aab0c]{top:33px}.emoji-mart[data-v-237aab0c],.emoji-trigger[data-v-237aab0c]{position:absolute;right:10px}.emoji-trigger[data-v-237aab0c]{cursor:pointer;height:20px;top:10px}.emoji-trigger path[data-v-237aab0c]{transition:all .1s}.emoji-trigger:hover path[data-v-237aab0c]{fill:#000}.emoji-trigger.triggered path[data-v-237aab0c]{fill:darken(#fec84a,15%)}",""]);const n=i},112:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var r=o(5166),i={class:"w-full"},n={class:"flex flex-row justify-between items-center"},a=(0,r._)("p",{class:"text-green-500 font-bold "}," This is the todo details section, ",-1),s=(0,r._)("p",{class:"text-lg font-bold text-wrap text-red-500"},"Still under construction",-1);(0,r.dD)("data-v-237aab0c");var c={class:"textarea-emoji-picker relative mx-auto shadow-inner"},l=[(0,r._)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},[(0,r._)("path",{fill:"#888888",d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"})],-1)],d=["value"];(0,r.Cn)();const u={name:"TextArea",data:function(){return{showEmojiPicker:!1}},methods:{toggleEmojiPicker:function(){this.showEmojiPicker=!this.showEmojiPicker},addEmoji:function(e){var t=this.$refs.textarea,o=t.selectionEnd,r=this.value.substring(0,t.selectionStart),i=this.value.substring(t.selectionStart),n=r+e.native+i;this.$emit("input",n),t.focus(),this.$nextTick((function(){t.selectionEnd=o+e.native.length}))}},components:{}};var p=o(3379),h=o.n(p),f=o(7006),g={insert:"head",singleton:!1};h()(f.Z,g);f.Z.locals;u.render=function(e,t,o,i,n,a){return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("span",{class:(0,r.C_)(["emoji-trigger",{triggered:n.showEmojiPicker}]),onMousedown:t[0]||(t[0]=(0,r.iM)((function(){return a.toggleEmojiPicker&&a.toggleEmojiPicker.apply(a,arguments)}),["prevent"]))},l,34),(0,r._)("textarea",{ref:"textarea",class:"textarea pl-2 py-2 rounded w-full shadow-lg outline-none shadow-inner pr-7 border",value:e.value,onInput:t[1]||(t[1]=function(t){return e.$emit("input",t.target.value)})},null,40,d)])},u.__scopeId="data-v-237aab0c";const m=u;function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const j={name:"TodoDetails",data:function(){return{selectedTodo:""}},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},(0,o(894).Se)({allTodos:"todos/allTodos"})),components:{TextArea:m},methods:{close:function(){this.$emit("hideComment")},check:function(){var e=this.$route.params.id;this.selectedTodo=this.allTodos.find((function(t){return t.card_id.toLowerCase()===e.toLowerCase()})),(this.selectedTodo<=0||void 0===this.selectedTodo)&&(this.$emit("hideComment"),this.$router.push({path:"/main"})),console.log(this.selectedTodo)}},mounted:function(){this.check()},render:function(e,t,o,c,l,d){var u=(0,r.up)("TextArea");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",n,[(0,r.Uk)((0,r.zw)(this.$route.params.id)+" ",1),(0,r._)("div",{onClick:t[0]||(t[0]=function(){return d.close&&d.close.apply(d,arguments)}),class:"font-bold text-green-500"},"X")]),a,s,(0,r.Wm)(u)])}},w=j}}]);