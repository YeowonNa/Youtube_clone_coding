(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{23:function(e,t,a){e.exports={videos:"video_list_videos__1VCw_"}},3:function(e,t,a){e.exports={container:"video_item_container__15oji",liet:"video_item_liet__2UGDx",grid:"video_item_grid__2iJDD",video:"video_item_video__37dg9",thumbnails:"video_item_thumbnails__38zQE",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},31:function(e,t,a){},4:function(e,t,a){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",title:"search_header_title__2RdR8",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl"}},5:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},52:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(22),s=a.n(c),r=(a(31),a(12)),o=a(5),l=a.n(o),u=a(4),d=a.n(u),_=a(0),h=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),i=function(){var e=a.current.value;t(e)};return Object(_.jsxs)("header",{className:d.a.header,children:[Object(_.jsxs)("div",{className:d.a.logo,children:[Object(_.jsx)("img",{className:d.a.img,src:"/images/logo.png",alt:"logo"}),Object(_.jsx)("h1",{className:d.a.title,onClick:function(){window.location.reload()},children:"Youtube"})]}),Object(_.jsx)("input",{ref:a,className:d.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(_.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){i()},children:Object(_.jsx)("img",{className:d.a.buttonImg,src:"/images/search.png",alt:"search"})})]})})),p=a(9),m=a.n(p),j=function(e){var t=e.video,a=e.video.snippet;return Object(_.jsxs)("section",{className:m.a.detail,children:[Object(_.jsx)("iframe",{className:m.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(_.jsx)("h2",{children:a.title}),Object(_.jsx)("h3",{children:a.channelTitle}),Object(_.jsx)("pre",{className:m.a.description,children:a.description})]})},b=a(3),v=a.n(b),O=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,i="list"===e.display?v.a.list:v.a.grid;return Object(_.jsx)("li",{className:"".concat(v.a.container," ").concat(i),onClick:function(){return n(t)},children:Object(_.jsxs)("div",{className:v.a.video,children:[Object(_.jsx)("img",{className:v.a.thumbnails,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(_.jsxs)("div",{className:v.a.metadata,children:[Object(_.jsx)("p",{className:v.a.title,children:a.title}),Object(_.jsx)("p",{className:v.a.channel,children:a.channelTitle})]})]})})})),x=a(23),f=a.n(x),g=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(_.jsx)("ul",{className:f.a.videos,children:t.map((function(e){return Object(_.jsx)(O,{video:e,onVideoClick:a,display:n},e.id)}))})};var y=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(r.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(null),u=Object(r.a)(o,2),d=u[0],p=u[1],m=Object(n.useCallback)((function(e){t.search(e).then((function(e){s(e),p(null)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(_.jsxs)("div",{className:l.a.app,children:[Object(_.jsx)(h,{onSearch:m}),Object(_.jsxs)("section",{className:l.a.content,children:[d&&Object(_.jsx)("div",{className:l.a.detail,children:Object(_.jsx)(j,{video:d})}),Object(_.jsx)("div",{className:l.a.list,children:Object(_.jsx)(g,{videos:c,onVideoClick:function(e){p(e)},display:d?"list":"grid"})})]})]})},N=a(13),w=a(6),k=a.n(w),C=a(11),I=a(24),S=a(25),R=a(26),E=a.n(R),P=new(function(){function e(t){Object(I.a)(this,e),this.youtube=E.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:t}})}return Object(S.a)(e,[{key:"mostPopular",value:function(){var e=Object(C.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(C.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyABcq00Z8ynH9WFEg_41RnL8YCw5X-4-CQ");s.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(y,{youtube:P})}),document.getElementById("root"))},9:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r"}}},[[52,1,2]]]);
//# sourceMappingURL=main.97feac5a.chunk.js.map