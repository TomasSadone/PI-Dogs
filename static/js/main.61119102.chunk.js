(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports={inputError:"form_inputError__231P2",select:"form_select__fet47"}},,function(e,t,a){e.exports={navbar:"navbar_navbar__2hbsx",navlink:"navbar_navlink__1M0Fg",activeNavlink:"navbar_activeNavlink__3LgNU",logo:"navbar_logo__1A-1U",title:"navbar_title__3vzca"}},,,,function(e,t,a){e.exports={card:"card_card__2ilM7",img:"card_img__1Psl3",imgContainer:"card_imgContainer__3RLrw",defaultImage:"card_defaultImage__38F5L",imgText:"card_imgText__tc8Pb"}},,,,,function(e,t,a){e.exports={search:"search_search__2VCuB",label:"search_label__3WfSe",form:"search_form__3oDuZ",input:"search_input__gcMWF",deleteSearch:"search_deleteSearch__1Ey1Q"}},,,,,,,,,,,,,,function(e,t,a){e.exports={logo:"landing_logo__sDz8W",buttonException:"landing_buttonException__d0Q1s"}},function(e,t,a){e.exports={loaderContainer:"loading_loaderContainer__3noO_",loader:"loading_loader__bLnAU",spin:"loading_spin__5qV6Q","p-p-l-cart-content":"loading_p-p-l-cart-content__9U_en"}},function(e,t,a){e.exports={filters:"filters_filters__XL4Ch",layout:"filters_layout__DJExD"}},function(e,t,a){e.exports={container:"detail_container__1kFzP",img:"detail_img__DcotU",temperaments:"detail_temperaments__2IBQB"}},,,,function(e,t,a){e.exports={errorContainer:"error_errorContainer__d8vNo"}},function(e,t,a){e.exports={layout:"cards_layout__h7-8w"}},function(e,t,a){e.exports={pagination:"pagination_pagination__14d_l"}},function(e,t,a){e.exports={homeHeroImg:"home_homeHeroImg__11akA"}},function(e,t,a){e.exports={temperaments:"tag_temperaments__3pBhl"}},,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(30),s=a.n(r),o=(a(58),a(4)),i=a(11),l=a(16),m=a(42),j=a.n(m),u=a.p+"static/media/bg-landing.8badd3e1.png",d=a.p+"static/media/logo-landing.08c3805c.png",b=a(1),p=function(){return Object(b.jsxs)("div",{className:"imgContainer",children:[Object(b.jsx)("img",{className:"heroImg heroFullHeight",src:u,alt:"dog in the background"}),Object(b.jsx)("div",{className:"heroContent",children:Object(b.jsxs)("div",{className:"flow textAlignCenter colorTitlesWhite",children:[Object(b.jsx)("img",{className:"".concat(j.a.logo),src:d,alt:"logo"}),Object(b.jsx)("h1",{className:"fsXxl",children:"Doggypedia"}),Object(b.jsx)("p",{className:"fw500 fsXl",children:"\xa1Encuentra a tu compa\xf1ero ideal!"}),Object(b.jsx)(l.b,{className:" button ".concat(j.a.buttonException),to:"/home",children:"Conocer m\xe1s"})]})})]})},g=a(38),h=a(48),x=a(10),O="SET_ALL_DOGS",f="SET_DOGS_PAGES",v="GET_ALL_TEMPS",_="SET_NEXT_PAGE",N="SET_PREV_PAGE",C="SET_PAGE_TO_ONE",w="SET_SEARCH",E={allDogs:[],dogPages:[],temperaments:[],currentPage:1,search:[]},y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.b,T=Object(g.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(x.a)(Object(x.a)({},e),{},{allDogs:t.payload});case f:return Object(x.a)(Object(x.a)({},e),{},{dogPages:t.payload});case v:return Object(x.a)(Object(x.a)({},e),{},{temperaments:t.payload});case _:return Object(x.a)(Object(x.a)({},e),{},{currentPage:e.currentPage+1});case N:return Object(x.a)(Object(x.a)({},e),{},{currentPage:e.currentPage-1});case C:return Object(x.a)(Object(x.a)({},e),{},{currentPage:1});case w:return Object(x.a)(Object(x.a)({},e),{},{search:t.payload});default:return e}}),y(Object(g.a)(h.a))),P=T,S=a(19),k=a.n(S),A=function(){return Object(b.jsx)("header",{className:k.a.navbar,children:Object(b.jsxs)("div",{className:"container flex flexBetween",children:[Object(b.jsxs)("div",{className:"flex ".concat(k.a.logoContainer),children:[Object(b.jsx)("img",{className:k.a.logo,src:"./PI-Dogs/logo-landing.png",alt:"logo"}),Object(b.jsx)("h2",{className:k.a.title,children:"Doggypedia"})]}),Object(b.jsxs)("nav",{className:"flex ",children:[Object(b.jsx)(l.b,{to:"/home",className:function(e){return e.isActive?k.a.activeNavlink:k.a.navlink},children:"Home"}),Object(b.jsx)(l.b,{to:"/post",className:function(e){return e.isActive?k.a.activeNavlink:k.a.navlink},children:"Post"})]})]})})},L=a(6),D=a(23),I=a.n(D),F=function(e){var t=e.dog,a=t.id,n=t.name,c=t.image,r=t.weight,s=t.user_created,i=t.temperament,l=Object(o.n)();return Object(b.jsxs)("div",{className:"".concat(I.a.card," flow"),children:[Object(b.jsxs)("div",{className:I.a.imgContainer,children:[Object(b.jsx)("img",{className:"".concat(I.a.img," ").concat(!c&&I.a.defaultImage),src:c?c.url?c.url:c:"./dogs-default.jpg",alt:"".concat(n)}),!c&&Object(b.jsx)("p",{className:I.a.imgText,children:"IMAGEN NO ENCONTRADA"})]}),Object(b.jsx)("h2",{children:n}),Object(b.jsx)("span",{children:"Peso ".concat(r.metric," kg")}),Object(b.jsx)("p",{className:"fw300",children:i?"Este perro es: ".concat(s?i.map((function(e){return e.name})).join(", "):i):"No conocemos los temperamentos de este perro"}),Object(b.jsx)("button",{className:"button",onClick:function(){return l("/dog/".concat(a))},children:"Ver m\xe1s"})]})},H=a(43),W=a.n(H),M=function(){return Object(b.jsx)("div",{className:W.a.loaderContainer,children:Object(b.jsx)("div",{className:W.a.loader})})},X=a(49),B=a.n(X),z=function(){return Object(b.jsxs)("div",{className:"".concat(B.a.errorContainer," grid placeContentCenter textAlignCenter flow"),children:[Object(b.jsx)("h1",{className:"",children:"Lo sentimos, algo sali\xf3 mal."}),Object(b.jsx)("p",{className:"colorText fw300",children:"Intenta realizar otra b\xfasqueda o cambiar los filtros."})]})},G=a(50),R=a.n(G),q=function(e){var t=e.error,a=e.loading,n=Object(i.c)((function(e){return e})),c=n.dogPages,r=n.currentPage;return Object(b.jsxs)(b.Fragment,{children:[t.error&&Object(b.jsx)(z,{}),a&&Object(b.jsx)(M,{}),!a&&!t.error&&Object(b.jsx)("div",{className:" mb2 gridAutoColumns ".concat(R.a.layout),children:c[r-1]?c[r-1].map((function(e){return Object(b.jsx)(F,{dog:e},e.id)})):null})]})},U=a(5),$=a(8),V=a(73),Q=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,a=[],n=0;n<e.length;n+=t){var c=e.slice(n,n+t);a.push(c)}return a},J="https://doggypedia-backend.onrender.com",Z=function(e){return{type:f,payload:e}},K=function(){return function(){var e=Object($.a)(Object(U.a)().mark((function e(t,a){var n,c;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object($.a)(Object(U.a)().mark((function e(t){var a,n;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(V.a)("".concat(J,"/dogs"));case 3:return a=e.sent,n=a.data,e.abrupt("return",t({type:O,payload:n}));case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching dogs:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}());case 2:(n=e.sent)&&(c=Q(n.payload),t(Z(c))),t(Y());case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Y=function(){return function(){var e=Object($.a)(Object(U.a)().mark((function e(t){var a,n;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(V.a)("".concat(J,"/temperaments"));case 3:return a=e.sent,n=a.data,e.abrupt("return",t({type:v,payload:n}));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},ee=function(e){return console.log(e),{type:w,payload:e}},te=function(){return{type:C}},ae=a(51),ne=a.n(ae),ce=function(){var e=Object(i.c)((function(e){return e})),t=e.currentPage,a=e.dogPages,n=Object(i.b)();return Object(b.jsxs)("div",{className:ne.a.pagination,children:[Object(b.jsx)("button",{className:"button buttonPagination",disabled:1===t,onClick:function(){return n({type:N})},children:"<"}),Object(b.jsx)("span",{children:t}),Object(b.jsx)("button",{className:"button buttonPagination",disabled:t===a.length,onClick:function(){return n({type:_})},children:">"})]})},re=a(28),se=a.n(re),oe="https://doggypedia-backend.onrender.com/dogs",ie=function(e){var t=e.setError,a=e.setLoading,c=Object(n.useState)(!1),r=Object(L.a)(c,2),s=r[0],o=r[1],l=Object(n.useState)(""),m=Object(L.a)(l,2),j=m[0],u=m[1],d=Object(n.useState)(!1),p=Object(L.a)(d,2),g=p[0],h=p[1],x=Object(i.b)(),O=function(e){var t;return e.length?(/^\d+$/.test(e)?(t="numbers",o(!1)):/^[a-zA-Z\s]+$/.test(e)?(t="letters",o(!1)):(t="error",o(!0)),t):o(!1)},f=function(){var e=Object($.a)(Object(U.a)().mark((function e(n){var c,r,s,o,i,l;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),h(!0),c=n.target[0].value,"numbers"!==(r=O(c))){e.next=23;break}return a(!0),t({error:!1,message:""}),e.prev=7,e.next=10,Object(V.a)("".concat(oe,"/").concat(c));case 10:s=e.sent,o=s.data,x(te()),x(ee(o)),a(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(7),a(!1),t({error:!0,message:e.t0.message});case 21:e.next=42;break;case 23:if("letters"!==r){e.next=42;break}return a(!0),t({error:!1,message:""}),e.prev=26,console.log(c),e.next=30,V.a.get(oe,{params:{breed:c}});case 30:i=e.sent,l=i.data,x(te()),x(ee(l)),a(!1),e.next=42;break;case 37:e.prev=37,e.t1=e.catch(26),console.log("...............",e.t1.message),a(!1),t({error:!0,message:e.t1.message});case 42:case"end":return e.stop()}}),e,null,[[7,17],[26,37]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"flow",children:[Object(b.jsxs)("div",{className:"".concat(se.a.search),children:[Object(b.jsx)("label",{className:se.a.label,children:"Encuentra a tu compa\xf1ero ideal:"}),Object(b.jsx)("form",{className:se.a.form,onSubmit:f,action:"",children:Object(b.jsx)("input",{placeholder:"Buscar...",className:"input",value:j,onChange:function(e){u(e.target.value),O(e.target.value)},type:"text"})})]}),s?Object(b.jsx)("p",{className:"errorMessagge",children:"La busqueda debe ser de solo letras, o solo numeros"}):null,g?Object(b.jsx)("button",{className:se.a.deleteSearch,onClick:function(){h(!1),u(""),t({error:!1,message:""}),o(!1),x(te()),x(ee([]))},children:"Borrar b\xfasqueda"}):null]})},le=a(9),me=a(44),je=a.n(me),ue=function(e){var t=e.setError,a=e.setLoading,c=Object(i.c)((function(e){return e})),r=c.allDogs,s=c.temperaments,o=c.search,l=Object(n.useState)({temperaments:"Todos",user_created:"Todos",order:"Alfabetico ascendente"}),m=Object(L.a)(l,2),j=m[0],u=m[1],d=Object(i.b)();Object(n.useEffect)((function(){g()}),[o,r]);var p=function(e){var t=Object(x.a)(Object(x.a)({},j),{},Object(le.a)({},e.target.name,e.target.value));u(t),g(t)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=e.user_created,c=e.order,s=o.length?o:r;s.length&&a(!1),"Todos"!==e.temperaments&&(s=s.filter((function(t){return!!t.temperament&&(t.user_created?t.temperament.some((function(t){return t.name===e.temperaments})):t.temperament.toLowerCase().includes(e.temperaments.toLowerCase()))}))),"Todos"!==n&&(s="user"===n?s.filter((function(e){return e.user_created})):s.filter((function(e){return!e.user_created}))),"Alfabetico ascendente"===c?s.sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())})):"Alfabetico descendente"===c?s.sort((function(e,t){return t.name.toLowerCase().localeCompare(e.name.toLowerCase())})):"Peso ascendente"===c?s.sort((function(e,t){var a=parseInt(e.weight.metric.split(" ")[0]),n=parseInt(t.weight.metric.split(" ")[0]);return a<n?-1:a>n?1:0})):"Peso descendente"===c&&s.sort((function(e,t){var a=parseInt(e.weight.metric.split(" ")[0]),n=parseInt(t.weight.metric.split(" ")[0]);return a>n?-1:a<n?1:0})),r.length&&!s.length?t({error:!0,message:"No hay perros que coincidan con tu busqueda"}):t({error:!1,message:""});var i=Q(s);d(te()),d(Z(i))};return Object(b.jsxs)("div",{className:je.a.layout,children:[Object(b.jsxs)("div",{className:je.a.filters,children:[Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("label",{className:"fw500 ",htmlFor:"temperament",children:"Filtrar por temperamento"}),Object(b.jsxs)("select",{className:"fsSmall colorText select",placeholder:"Temperamento",value:j.temperaments,onChange:p,name:"temperaments",id:"",children:[Object(b.jsx)("option",{children:"Todos"}),s.map((function(e){return Object(b.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("label",{className:"fw500 ",htmlFor:"user_created",children:"Filtrar segun origen"}),Object(b.jsxs)("select",{className:"fsSmall colorText select",value:j.user_created,onChange:p,name:"user_created",id:"",children:[Object(b.jsx)("option",{value:"Todos",children:"Todos"}),Object(b.jsx)("option",{value:"database",children:"Base de datos"}),Object(b.jsx)("option",{value:"user",children:"Creados por el usuario"})]})]})]}),Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("label",{className:"fw500 ",htmlFor:"alphabeticOrder",children:"Orden"}),Object(b.jsxs)("select",{className:"fsSmall colorText select",onChange:p,name:"order",id:"",children:[Object(b.jsx)("option",{value:"Alfabetico ascendente",children:"Alfabetico ascendente"}),Object(b.jsx)("option",{value:"Alfabetico descendente",children:"Alfabetico descendente"}),Object(b.jsx)("option",{value:"Peso ascendente",children:"Peso ascendente"}),Object(b.jsx)("option",{value:"Peso descendente",children:"Peso descendente"})]})]})]})},de=a(52),be=a.n(de),pe=function(){var e=Object(i.b)();Object(n.useEffect)((function(){e(K())}),[e]);var t=Object(i.c)((function(e){return e})).dogPages,a=Object(n.useState)({error:!1,message:""}),c=Object(L.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(!0),l=Object(L.a)(o,2),m=l[0],j=l[1];return Object(b.jsxs)("main",{className:"flow ",children:[Object(b.jsxs)("header",{className:"imgContainer",children:[Object(b.jsx)("img",{className:"".concat(be.a.homeHeroImg," heroImg"),src:"./PI-Dogs/bg-landing.png",alt:"perro de fondo"}),Object(b.jsxs)("div",{className:"heroContent  textAlignCenter flow colorTitlesWhite",children:[Object(b.jsx)("h2",{children:"\xbfEst\xe1s en b\xfasqueda de un amigo peludito?"}),Object(b.jsx)("p",{children:"\xa1Conoce todo sobre razas de perros en Doggypedia!"})]})]}),Object(b.jsxs)("div",{className:"container mt1 flow",children:[Object(b.jsx)(ie,{setError:s,setLoading:j}),Object(b.jsx)(ue,{setError:s,setLoading:j}),Object(b.jsx)(q,{loading:m,error:r}),t.length>1&&!r.error&&!m?Object(b.jsx)(ce,{}):null]})]})},ge=a(14),he=/^[a-zA-Z\s]+$/,xe=/^\d+$/,Oe=/^https?:\/\/[^\s/$.?#].[^\s]*\.(?:jpg|jpeg|png|gif)$/i,fe=function(e,t){var a=e.name,n=e.minHeight,c=e.maxHeight,r=e.minWeight,s=e.maxWeight,o=e.min_life_span,i=e.max_life_span,l=(e.temperaments,e.image),m={};return n.length&&c.length&&(xe.test(n)&&xe.test(c)?Number(n)>=Number(c)?m.height="La altura m\xednima debe ser mayor a la m\xe1xima":delete m.height:m.height="Altura m\xednima y altura m\xe1xima deben ser numeros"),r.length&&s.length&&(Number(r)>=Number(s)?m.weight="El peso m\xednimo debe ser mayor al m\xe1ximo":xe.test(r)&&xe.test(s)?delete m.weight:m.weight="Peso m\xednimo y peso m\xe1ximo deben ser numeros"),o.length&&i.length&&(Number(o)>=Number(i)?m.life_span="Expectativa m\xednima debe ser mayor a la m\xe1xima":xe.test(o)&&xe.test(i)?delete m.life_span:m.life_span="Expectativa m\xednima y expectativa m\xe1xima deben ser numeros"),a.length&&(he.test(a)?delete m.name:m.name="Raza debe contener letras y espacios"),l.length&&(Oe.test(l)?delete m.image:m.image="Debe introducir un URL de una imagen"),m},ve=a(17),_e=a.n(ve),Ne=a(53),Ce=a.n(Ne),we=function(e){var t=e.temperament;return Object(b.jsx)("span",{className:Ce.a.temperaments,children:t})},Ee=function(e){var t=e.temperaments,a=e.userCreated;return console.log(t),Object(b.jsx)("div",{className:"flex wrap gap1",children:t.map((function(e){return Object(b.jsx)(we,{temperament:a?e.name:e},a?e.id:e)}))})},ye=function(){var e={name:"",minHeight:"",maxHeight:"",minWeight:"",maxWeight:"",min_life_span:"",max_life_span:"",image:""},t=Object(n.useState)(e),a=Object(L.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),o=Object(L.a)(s,2),l=o[0],m=o[1],j=Object(n.useState)({}),u=Object(L.a)(j,2),d=u[0],p=u[1],g=Object(n.useState)(!1),h=Object(L.a)(g,2),O=h[0],f=h[1],v=Object(n.useState)(!1),_=Object(L.a)(v,2),N=_[0],C=_[1],w=Object(n.useState)(!1),E=Object(L.a)(w,2),y=E[0],T=E[1],P=Object(i.b)();Object(n.useEffect)((function(){P(Y())}),[P]);var S=Object(i.c)((function(e){return e})),k=S.temperaments,A=function(e){r(Object(x.a)(Object(x.a)({},c),{},Object(le.a)({},e.target.name,e.target.value))),p(fe(Object(x.a)(Object(x.a)({},c),{},Object(le.a)({},e.target.name,e.target.value)),e))},D=function(){var t=Object($.a)(Object(U.a)().mark((function t(a){var n,s,o,i,j,u,d,b,p,g,h;return Object(U.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),T(!0),n=c.name,s=c.minHeight,o=c.maxHeight,i=c.minWeight,j=c.maxWeight,u=c.min_life_span,d=c.max_life_span,b=c.image,p={imperial:"".concat(s/2.54," - ").concat(o/2.54),metric:"".concat(s," - ").concat(o)},g={imperial:"".concat(2.205*i," - ").concat(2.205*j),metric:"".concat(i," - ").concat(j)},h={name:n.toLowerCase(),image:b,life_span:"".concat(u," - ").concat(d," years"),height:p,weight:g,temperaments:l},t.prev=6,t.next=9,V.a.post("https://doggypedia-backend.onrender.com/dogs",h);case 9:r(e),T(!1),C(!0),m([]),O&&f(!1),P(K()),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(6),f(!0),T(!1);case 21:case"end":return t.stop()}}),t,null,[[6,17]])})));return function(e){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){setTimeout((function(){C(!1)}),3e3)}),[N]);return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{className:"flow",onSubmit:D,action:"",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Raza:"}),Object(b.jsx)("input",{className:"input ".concat(d.name?_e.a.inputError:null),value:c.name,autoComplete:"off",onChange:A,name:"name",type:"text"})]}),d.name&&Object(b.jsx)("span",{className:"errorMessagge",children:d.name}),Object(b.jsxs)("div",{className:"grid gap1 gridAutoColumns",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"minHeight",children:"Altura m\xednima"}),Object(b.jsx)("span",{className:"fsXs fw300 colorText",children:" (cm)"}),Object(b.jsx)("input",{className:"input ".concat(d.height?_e.a.inputError:null),value:c.minHeight,autoComplete:"off",onChange:A,name:"minHeight",type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"maxHeight",children:"Altura m\xe1xima"}),Object(b.jsx)("span",{className:"fsXs fw300 colorText",children:" (cm)"}),Object(b.jsx)("input",{className:"input ".concat(d.height?_e.a.inputError:null),value:c.maxHeight,autoComplete:"off",onChange:A,name:"maxHeight",type:"text"})]})]}),d.height&&Object(b.jsx)("span",{className:"errorMessagge",children:d.height}),Object(b.jsxs)("div",{className:"grid gap1 gridAutoColumns",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"minWeight",children:"Peso m\xednimo"}),Object(b.jsx)("span",{className:"fsXs fw300 colorText",children:" (kg)"}),Object(b.jsx)("input",{className:"input ".concat(d.weight?_e.a.inputError:null),value:c.minWeight,autoComplete:"off",onChange:A,name:"minWeight",type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"maxWeight",children:"Peso m\xe1ximo"}),Object(b.jsx)("span",{className:"fsXs fw300 colorText",children:" (kg)"}),Object(b.jsx)("input",{className:"input ".concat(d.weight?_e.a.inputError:null),value:c.maxWeight,autoComplete:"off",onChange:A,name:"maxWeight",type:"text"})]})]}),d.weight&&Object(b.jsx)("span",{className:"errorMessagge",children:d.weight}),Object(b.jsxs)("div",{className:"grid gap1 gridAutoColumns",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"min_life_span",children:"Expectativa de vida m\xednima"}),Object(b.jsx)("span",{className:"fsXs fw300 colorText",children:" (a\xf1os)"}),Object(b.jsx)("input",{className:"input ".concat(d.life_span?_e.a.inputError:null),value:c.min_life_span,autoComplete:"off",onChange:A,name:"min_life_span",type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"max_life_span",children:"Expectativa de vida m\xe1xima"}),Object(b.jsx)("span",{className:"fsXs fw300 colorText",children:" (a\xf1os)"}),Object(b.jsx)("input",{className:"input ".concat(d.life_span?_e.a.inputError:null),value:c.max_life_span,autoComplete:"off",onChange:A,name:"max_life_span",type:"text"})]})]}),d.life_span&&Object(b.jsx)("span",{className:"errorMessagge",children:d.life_span}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"temperaments",children:"Temperamentos"}),Object(b.jsxs)("select",{className:"".concat(_e.a.select," fsSmall colorText select"),placeholder:"Temperamento",onChange:function(e){l.some((function(t){return t===e.target.value}))||m([].concat(Object(ge.a)(l),[e.target.value]))},name:"temperaments",id:"",children:[Object(b.jsx)("option",{children:"Todos"}),k.map((function(e){return Object(b.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),Object(b.jsx)("p",{children:"Temperamentos seleccionados:"}),l.length?Object(b.jsx)(Ee,{temperaments:l}):Object(b.jsx)(Ee,{temperaments:["Seleccionar"]}),d.temperaments&&Object(b.jsx)("span",{className:"errorMessagge",children:d.temperaments}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"image",children:"Imagen:"}),Object(b.jsx)("span",{className:"fsXs fw300 colorText",children:" (url)"}),Object(b.jsx)("input",{className:"input ".concat(d.image?_e.a.inputError:null),value:c.image,type:"text",autoComplete:"off",onChange:A,name:"image"})]}),d.image&&Object(b.jsx)("p",{className:"errorMessagge",children:d.image}),Object(b.jsx)("button",{className:"button mb1",disabled:function(){if(Object.keys(d).length)return!0;for(var e in c)if(""===c[e])return!0;return!1}(),children:"Postear perro"}),y&&Object(b.jsx)("p",{className:"colorText fsLarge fw600",children:"Procesando..."}),O&&Object(b.jsx)("p",{className:"errorMessagge fsLarge fw600",children:"Error al postear"}),N&&Object(b.jsx)("p",{className:"successMessagge fsLarge fw600",children:"Posteo exitoso"})]})})},Te=a(45),Pe=a.n(Te),Se=function(){var e=Object(o.p)().id,t=Object(n.useState)({}),a=Object(L.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),i=Object(L.a)(s,2),l=i[0],m=i[1],j=Object(n.useState)(!0),u=Object(L.a)(j,2),d=u[0],p=u[1];console.log("probando build");var g=Object(n.useCallback)(Object($.a)(Object(U.a)().mark((function t(){var a,n;return Object(U.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(V.a)("https://doggypedia-backend.onrender.com/dogs/".concat(e));case 3:a=t.sent,n=a.data,r(n[0]),p(!1),m(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),m(!0),p(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])}))),[e]);return Object(n.useEffect)((function(){g()}),[g]),Object(b.jsxs)("div",{className:Pe.a.container,children:[l&&Object(b.jsx)(z,{}),d&&Object(b.jsx)(M,{}),!d&&!l&&Object(b.jsxs)("div",{className:"grid gridAutoColumns gridAutoColumnsItemLarge gap2 mt25 mb25  flow container ",children:[c.image&&Object(b.jsx)("img",{className:Pe.a.img,src:c.image.url?c.image.url:c.image,alt:"".concat(c.name)}),Object(b.jsxs)("div",{className:"flow ",children:[Object(b.jsx)("h1",{children:c.name}),Object(b.jsx)("span",{className:"colorText fw300",children:"ID: ".concat(c.id)}),Object(b.jsx)("hr",{}),Object(b.jsx)("h2",{children:"Temperamento:"}),c.temperament?c.user_created?Object(b.jsx)(Ee,{temperaments:c.temperament,userCreated:!0}):Object(b.jsx)(Ee,{temperaments:c.temperament.split(", "),userCreated:!1}):"No conocemos los temperamentos de este perro",Object(b.jsxs)("div",{className:"flex mt25",children:[Object(b.jsx)("img",{src:"/PI-Dogs/uil_weight.svg",alt:""}),Object(b.jsx)("span",{className:"fwSmall colorText",children:"Entre ".concat(c.weight.metric," kg")})]}),Object(b.jsxs)("div",{className:"flex mt2",children:[Object(b.jsx)("img",{src:"/PI-Dogs/ritmo-cardiaco.svg",alt:""}),Object(b.jsx)("span",{className:"fwSmall colorText",children:"".concat(c.life_span)})]}),Object(b.jsxs)("div",{className:"flex mt2",children:[Object(b.jsx)("img",{src:"/PI-Dogs/height.svg",alt:""}),Object(b.jsx)("span",{className:"fwSmall colorText",children:"Entre ".concat(c.height.metric," cm")})]})]})]})]})};a(67),a(68),a(69),a(70);var ke=function(){var e=Object(o.l)().pathname;return Object(b.jsxs)(i.a,{store:P,children:["/"!==e&&Object(b.jsx)(A,{}),Object(b.jsx)("div",{className:"App flow bgColorBackground",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(p,{})}),Object(b.jsx)(o.a,{path:"/home",element:Object(b.jsx)(pe,{})}),Object(b.jsx)(o.a,{path:"/post",element:Object(b.jsx)(ye,{})}),Object(b.jsx)(o.a,{path:"/dog/:id",element:Object(b.jsx)(Se,{})})]})})]})},Ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(ke,{})})}),document.getElementById("root")),Ae()}],[[71,1,2]]]);
//# sourceMappingURL=main.61119102.chunk.js.map