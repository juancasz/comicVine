(this.webpackJsonpcomicvine=this.webpackJsonpcomicvine||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),l=a(26),n=a.n(l),s=a(3),o=a(9),i=a.n(o),m=a(7),u=a(15),d=function(e){var t=e.details,a=e.menuColors,c=e.viewHome,l=e.toggleSelected;if(t)return r.a.createElement("div",null,r.a.createElement(m.b,{to:"/",onClick:c,style:{textAlign:"center",color:"black"}},r.a.createElement("h1",{style:{fontFamily:"Monospace"}},"ComicBook")));var n={fontFamily:"Monospace"},s=a.list,o=a.grid;return r.a.createElement("div",null,r.a.createElement(m.b,{to:"/",onClick:c,style:{textAlign:"center",color:"black"}},r.a.createElement("h1",{style:{fontFamily:"Monospace"}},"ComicBook")),r.a.createElement("div",{className:"row border-right border-left mt-4 div-header"},r.a.createElement("div",{className:"col-md-2 col-sm-12 col-12"},r.a.createElement("p",{style:n},r.a.createElement("b",null,"Latest Issues"))),r.a.createElement("div",{className:"offset-md-8 offset-sm-8 col-md-2 col-sm-12 col-12"},r.a.createElement("p",{style:n},"\xa0\xa0",r.a.createElement(m.b,{to:"/list",id:"list",style:{color:s},onClick:l},r.a.createElement(u.b,null),"List"),"\xa0",r.a.createElement(m.b,{to:"/",id:"grid",style:{color:o},onClick:l},r.a.createElement(u.a,null),"Grid")))))},g=function(){return r.a.createElement("div",{className:"row justify-content-center",style:{marginTop:"100px"}},r.a.createElement("div",{className:"spinner-border",style:{width:"100px",height:"100px"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},f=function(e){var t=e.errorMessage;return r.a.createElement("div",{className:"row justify-content-center",style:{marginTop:"100px"}},r.a.createElement("h1",{style:{textAlign:"center"}},t))},E=function(e){var t=e.comic,a=e.viewDetails;if(void 0===t)return r.a.createElement(g,null);var c=new Date(t.date_added).toDateString().split(" ").slice(1).join(" ");return r.a.createElement(m.b,{to:"/".concat(t.id),onClick:a,id:t.api_detail_url,style:{color:"black"}},r.a.createElement("div",{className:"card border-0 "},r.a.createElement("img",{className:"card-img-top img-border",src:t.image.original_url,alt:"Comic",height:"350"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title",style:{textAlign:"center"}},t.name," #",t.issue_number),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted",style:{textAlign:"center"}},c))))},v=function(e){var t=e.isLoading,a=e.data,l=e.error,n=e.errorMessage,s=e.viewDetails,o=e.goBack;if(Object(c.useEffect)((function(){localStorage.setItem("urlDetails","")})),t||void 0===a)return r.a.createElement(g,null);if(l)return r.a.createElement(f,{errorMessage:n});var i=a.map((function(e){return r.a.createElement("div",{className:"col-md-3 col-sm-6 col-6",key:e.id},r.a.createElement(E,{comic:e,viewDetails:s}))}));return r.a.createElement("div",{className:"row",style:{marginTop:"100px"},onLoad:o},i)},b=function(e){var t=e.comic,a=e.viewDetails;if(void 0===t)return r.a.createElement(g,null);var c=new Date(t.date_added).toDateString().split(" ").slice(1).join(" ");return r.a.createElement(m.b,{id:t.api_detail_url,onClick:a,to:"/".concat(t.id),style:{color:"black"}},r.a.createElement("div",{className:"media position-relative"},r.a.createElement("img",{className:"align-self-center img-border",src:t.image.original_url,alt:"Comic",height:"375",width:"250"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h6",{className:"mt-2",style:{textAlign:"center"}},t.name," #",t.issue_number),r.a.createElement("h6",{className:"text-muted",style:{textAlign:"center"}},c))))},p=function(e){var t=e.isLoading,a=e.data,l=e.error,n=e.errorMessage,s=e.viewDetails,o=e.goBack;if(Object(c.useEffect)((function(){localStorage.setItem("urlDetails","")})),t||void 0===a)return r.a.createElement(g,null);if(l)return r.a.createElement(f,{errorMessage:n});var i=a.map((function(e){return r.a.createElement("div",{className:"offset-md-1 col-md-10 col-sm-12 col-12",key:e.id},r.a.createElement(b,{comic:e,viewDetails:s}))}));return r.a.createElement("div",{className:"row",style:{marginTop:"50px"},onLoad:o},i)},h=function(e){var t=e.urlImage,a=e.name;return r.a.createElement("div",{className:"col-md-6 col-sm-12 mt-3"},r.a.createElement("img",{className:"rounded img-fluid",src:t,alt:"Character",height:"25",width:"25"}),r.a.createElement("span",{className:"ml-3",style:{color:"green"}},a))},_=function(e){var t=e.urlDetails,a="8c08d824c714765b46f7f10fd9e5c0f72213b1d0",l="https://cors-anywhere.herokuapp.com/",n="".concat(t,"?api_key=").concat(a,"&format=json&field_list=image,character_credits,team_credits,location_credits,concept_credits"),o=Object(c.useState)([]),m=Object(s.a)(o,2),u=m[0],d=m[1],E=Object(c.useState)([]),v=Object(s.a)(E,2),b=v[0],p=v[1],_=Object(c.useState)([]),j=Object(s.a)(_,2),y=j[0],N=j[1],O=Object(c.useState)([]),k=Object(s.a)(O,2),S=k[0],w=k[1],x=Object(c.useState)([]),D=Object(s.a)(x,2),I=D[0],C=D[1],M=Object(c.useState)(!0),L=Object(s.a)(M,2),A=L[0],B=L[1],T=Object(c.useState)(!1),J=Object(s.a)(T,2),P=J[0],F=J[1],H=Object(c.useState)(""),G=Object(s.a)(H,2),q=G[0],z=G[1];if(Object(c.useEffect)((function(){""!==localStorage.getItem("urlDetails")&&(n=localStorage.getItem("urlDetails")),i.a.get(l+n).then((function(e){d(e.data.results),B(!1),console.log("sucess data");var t=[];e.data.results.character_credits.forEach((function(e){var c="".concat(e.api_detail_url,"?api_key=").concat(a,"&format=json&field_list=image");t.push(i.a.get(l+c))})),Promise.all(t).then((function(e){var t=[];e.forEach((function(e){t.push(e.data.results.image.original_url)})),p(t),console.log("sucess characters")})).catch((function(e){F(!0),B(!1),z(e.message),console.log(e.message)}));var c=[];e.data.results.team_credits.forEach((function(e){var t="".concat(e.api_detail_url,"?api_key=").concat(a,"&format=json&field_list=image");c.push(i.a.get(l+t))})),Promise.all(c).then((function(e){var t=[];e.forEach((function(e){t.push(e.data.results.image.original_url)})),N(t),console.log("sucess teams")})).catch((function(e){F(!0),B(!1),z(e.message),console.log(e.message)}));var r=[];e.data.results.location_credits.forEach((function(e){var t="".concat(e.api_detail_url,"?api_key=").concat(a,"&format=json&field_list=image");r.push(i.a.get(l+t))})),Promise.all(r).then((function(e){var t=[];e.forEach((function(e){t.push(e.data.results.image.original_url)})),w(t),console.log("sucess locations")})).catch((function(e){F(!0),B(!1),z(e.message),console.log(e.message)}));var n=[];e.data.results.concept_credits.forEach((function(e){var t="".concat(e.api_detail_url,"?api_key=").concat(a,"&format=json&field_list=image");n.push(i.a.get(l+t))})),Promise.all(n).then((function(e){var t=[];e.forEach((function(e){t.push(e.data.results.image.original_url)})),C(t),console.log("sucess concepts")})).catch((function(e){F(!0),B(!1),z(e.message),console.log(e.message)}))})).catch((function(e){F(!0),B(!1),z(e.message),console.log(e.message)}))}),[]),Object(c.useEffect)((function(){localStorage.setItem("urlDetails",n)})),A||void 0===u||void 0===u.image||void 0===u.character_credits)return r.a.createElement(g,null);if(P)return r.a.createElement(f,{errorMessage:q});var K=u.character_credits.map((function(e,t){return r.a.createElement(h,{key:t,urlImage:b[t],name:e.name})})),Q=u.team_credits.map((function(e,t){return r.a.createElement(h,{key:t,urlImage:y[t],name:e.name})})),R=u.location_credits.map((function(e,t){return r.a.createElement(h,{key:t,urlImage:S[t],name:e.name})})),U=u.concept_credits.map((function(e,t){return r.a.createElement(h,{key:t,urlImage:I[t],name:e.name})}));return r.a.createElement("div",{className:"row d-flex flex-nowrap",style:{marginTop:"25px"}},r.a.createElement("div",{className:"col-md-5 col-sm-12 col-12 "},r.a.createElement("img",{className:"m-1 img-fluid",src:u.image.original_url,alt:"Comic"})),r.a.createElement("div",{className:"col-md-7 col-sm-12 col-12 order-md-first"},r.a.createElement("h4",{className:"border-headers"},r.a.createElement("b",null,"Characters")),r.a.createElement("div",{className:"row"},K),r.a.createElement("h4",{className:"border-headers mt-5"},r.a.createElement("b",null,"Teams")),r.a.createElement("div",{className:"row"},Q),r.a.createElement("h4",{className:"border-headers mt-5"},r.a.createElement("b",null,"Locations")),r.a.createElement("div",{className:"row"},R),r.a.createElement("h4",{className:"border-headers mt-5"},r.a.createElement("b",null,"Concepts")),r.a.createElement("div",{className:"row"},U)))},j=a(1),y=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],n=Object(c.useState)({grid:"black",list:"green"}),o=Object(s.a)(n,2),m=o[0],u=o[1],g=Object(c.useState)(!0),f=Object(s.a)(g,2),E=f[0],b=f[1],h=Object(c.useState)(!1),y=Object(s.a)(h,2),N=y[0],O=y[1],k=Object(c.useState)(""),S=Object(s.a)(k,2),w=S[0],x=S[1],D=Object(c.useState)(!1),I=Object(s.a)(D,2),C=I[0],M=I[1],L=Object(c.useState)(""),A=Object(s.a)(L,2),B=A[0],T=A[1],J="https://comicvine.gamespot.com/api/issues/?api_key=".concat("8c08d824c714765b46f7f10fd9e5c0f72213b1d0","&format=json&field_list=name,image,issue_number,date_added,id,api_detail_url");Object(c.useEffect)((function(){var e=localStorage.getItem("colors");e&&u(JSON.parse(e));var t=localStorage.getItem("details");t&&M(t);var a=localStorage.getItem("urlDetails");a&&T(a),i.a.get("https://cors-anywhere.herokuapp.com/"+J).then((function(e){!1!==e.data.sucess&&(l(e.data.results),b(!1),console.log("sucess"))})).catch((function(e){O(!0),b(!1),x(e.message),console.log(e.message)}))}),[]),Object(c.useEffect)((function(){localStorage.setItem("colors",JSON.stringify(m)),localStorage.setItem("details",C)}));var P=function(e){M(!0),T(e.currentTarget.id)},F=function(e){M(!1),u({grid:"black",list:"green"})};return r.a.createElement("div",{className:"div-background"},r.a.createElement("div",{className:"container mt-0"},r.a.createElement(d,{details:C,menuColors:m,viewHome:function(e){return F()},toggleSelected:function(e){return function(e){"list"===e.target.id?u({grid:"green",list:"black"}):u({grid:"black",list:"green"})}(e)}}),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/"},r.a.createElement(v,{isLoading:E,data:a,error:N,errorMessage:w,viewDetails:function(e){return P(e)},details:C,goBack:function(e){return F()}})),r.a.createElement(j.a,{path:"/list"},r.a.createElement(p,{isLoading:E,data:a,error:N,errorMessage:w,viewDetails:function(e){return P(e)},details:C,goBack:function(e){return M(!1),void u(JSON.parse(localStorage.getItem("colors")))}})),r.a.createElement(j.a,{path:"/:id"},r.a.createElement(_,{urlDetails:B})))))};a(55),a(56);n.a.render(r.a.createElement(m.a,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f156bbf5.chunk.js.map