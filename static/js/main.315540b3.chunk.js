(this["webpackJsonppizza-store"]=this["webpackJsonppizza-store"]||[]).push([[0],{58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n,r=a(1),s=a.n(r),c=a(24),o=a.n(c),i=a(18),l=a(26),u=a(45),m="GET_PIZZAS_LIST",d=a(5),f=a(9),p=a(10),v=a(40),h={apiKey:"AIzaSyBPWZIwv-G1xAO3F9NdAWFcXxgM6rPTLxw",authDomain:"coolpizzasstore.firebaseapp.com",databaseURL:"https://coolpizzasstore.firebaseio.com",projectId:"coolpizzasstore",storageBucket:"coolpizzasstore.appspot.com",messagingSenderId:"660399626549",appId:"1:660399626549:web:698939cb3f0eeb6207147c"},b={getPizzasList:{url:"/pizzas",mapResponse:function(e){return e?e.val():null}},getSessionData:{url:"/sessions/{sessionId}",mapResponse:function(e){return e?e.val():null}},setSessionData:{url:"/sessions/{sessionId}"},createSessionId:{url:"/sessions/",mapResponse:function(e){return e?String(e.numChildren()+1):null}},changeCurrency:{url:"/sessions/{sessionId}/currency"},updateCart:{url:"/sessions/{sessionId}/cart"},authorizeAndGetUserData:{url:"/users/{userId}",mapResponse:function(e,t){if(!e)return null;var a=e.val();return Boolean(null===a||void 0===a?void 0:a.password)&&String(null===a||void 0===a?void 0:a.password)===String(t)?a:null}},setUserData:{url:"/users/{userId}"},checkIfUserExists:{url:"/users/{userId}",mapResponse:function(e){return e?Boolean(e.val()):null}},getUserData:{url:"/users/{userId}",mapResponse:function(e){return e?e.val():null}},addToOrderHistory:{url:"/users/{userId}/orders/{orderId}",mapResponse:function(e){return e?e.val():null}}},E="GET_SESSION_DATA",O=function(e){return{type:E,payload:{session:e}}},y=a(32),g=a.n(y),j="sessionId",z="userId",C=function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,null,[{key:"getSessionId",value:function(){return g.a.get(j)}},{key:"setSessionId",value:function(e){g.a.set(j,e,{expires:7})}},{key:"getUserId",value:function(){return g.a.get(z)}},{key:"setUserId",value:function(e){g.a.set(z,e,{expires:7})}}]),e}(),N=a(16),S=function(e,t){var a;return a={},Object(N.a)(a,n.EURO,e),Object(N.a)(a,n.DOLLAR,t),a};!function(e){e[e.EURO=0]="EURO",e[e.DOLLAR=1]="DOLLAR"}(n||(n={}));var A={id:void 0,cart:{items:{},totalQty:0,totalPrice:S(0,0)},currency:n.EURO},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(d.a)(Object(d.a)({},e),t.payload.session);default:return e}},T=function(){function e(){Object(f.a)(this,e),this.database=void 0,v.a.apps.length||(this.database=v.a.initializeApp(h).database())}return Object(p.a)(e,[{key:"getPizzasList",value:function(){var e=this,t=b.getPizzasList,a=t.url,n=t.mapResponse;return new Promise((function(t,r){e.database.ref(a).once("value").then((function(e){t(n(e))})).catch((function(e){r(e)}))}))}},{key:"getSessionData",value:function(e){var t=this,a=b.getSessionData,n=a.url,r=a.mapResponse,s=n.replace("{sessionId}",e);return new Promise((function(e,a){t.database.ref(s).once("value").then((function(t){e(r(t))})).catch((function(e){a(e)}))}))}},{key:"changeCurrency",value:function(e,t){var a=this,n=b.changeCurrency.url.replace("{sessionId}",e);return new Promise((function(r,s){a.database.ref(n).set(t,(function(t){t&&s(t),a.getSessionData(e).then((function(e){r(e)})).catch((function(e){s(e)}))}))}))}},{key:"createSession",value:function(){var e=this,t=b.createSessionId,a=t.url,n=t.mapResponse;return new Promise((function(t,r){e.database.ref(a).once("value").then((function(a){var s=n(a);s||r(),e.setSessionData(s,Object(d.a)(Object(d.a)({},A),{},{id:s})).then((function(e){t(e)})).catch((function(e){r(e)}))})).catch((function(e){r(e)}))}))}},{key:"setSessionData",value:function(e,t){var a=this,n=b.setSessionData.url.replace("{sessionId}",e);return new Promise((function(r,s){a.database.ref(n).set(t,(function(t){t&&s(t),a.getSessionData(e).then((function(e){r(e)})).catch((function(e){s(e)}))}))}))}},{key:"updateCart",value:function(e,t){var a=this,n=b.updateCart.url.replace("{sessionId}",e);return new Promise((function(r,s){a.database.ref("".concat(n)).set(t,(function(t){t&&s(t),a.getSessionData(e).then((function(e){r(e)})).catch((function(e){s(e)}))}))}))}},{key:"authorizeAndGetUserData",value:function(e,t){var a=this,n=b.getUserData,r=n.url,s=n.mapResponse,c=null===e||void 0===e?void 0:e.replace(/\./g,"*"),o=r.replace("{userId}",c);return new Promise((function(e,n){a.database.ref(o).once("value").then((function(a){e(s(a,t))})).catch((function(e){n(e)}))}))}},{key:"getUserData",value:function(e,t){var a=this,n=b.getUserData,r=n.url,s=n.mapResponse,c=null===e||void 0===e?void 0:e.replace(/\./g,"*"),o=r.replace("{userId}",c);return new Promise((function(e,n){a.database.ref(o).once("value").then((function(a){e(s(a,t))})).catch((function(e){n(e)}))}))}},{key:"setUserData",value:function(e,t,a,n){var r=this,s=b.setUserData.url,c=null===e||void 0===e?void 0:e.replace(/\./g,"*"),o=s.replace("{userId}",c);return new Promise((function(s,i){r.database.ref("".concat(o)).set({id:c,email:e,password:t,name:a,surname:n},(function(e){e&&i(e),s(c)}))}))}},{key:"checkIfUserExists",value:function(e){var t=this,a=b.checkIfUserExists,n=a.url,r=a.mapResponse,s=null===e||void 0===e?void 0:e.replace(/\./g,"*"),c=n.replace("{userId}",s);return new Promise((function(e,a){t.database.ref(c).once("value").then((function(t){e(r(t))})).catch((function(e){a(e)}))}))}},{key:"addToOrderHistory",value:function(e,t){var a=this,n=b.addToOrderHistory.url,r=String(Date.now()),s=n.replace("{userId}",e).replace("{orderId}",r);return new Promise((function(e,n){a.database.ref("".concat(s)).set(t,(function(t){t&&n(t),e()}))}))}}],[{key:"GET_INSTANCE",value:function(){return this._instance||(this._instance=new this)}}]),e}();T._instance=void 0;var U,I,x=T.GET_INSTANCE(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.payload.pizzasList;default:return e}},D="GET_USER_DATA",_="USER_NOT_FOUND",w="USER_ALREADY_EXISTS",L="CLEAR_FORMS_ERRORS",P=function(e){return{type:D,payload:{user:e}}},M=function(){return{type:L}},G={id:void 0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(d.a)(Object(d.a)({},e),t.payload.user);case _:return Object(d.a)({},G);default:return e}};!function(e){e[e.AUTH=0]="AUTH",e[e.REG=1]="REG"}(I||(I={}));var B,F,q=(U={},Object(N.a)(U,I.AUTH,{error:null}),Object(N.a)(U,I.REG,{error:null}),U),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(d.a)(Object(d.a)({},e),{},Object(N.a)({},I.AUTH,{error:null}));case _:return Object(d.a)(Object(d.a)({},e),{},Object(N.a)({},I.AUTH,{error:"E-mail or password does not match"}));case w:return Object(d.a)(Object(d.a)({},e),{},Object(N.a)({},I.REG,{error:"Email is already registered"}));case L:return Object(d.a)({},q);default:return e}},V=Object(l.c)({pizzas:R,session:k,user:H,forms:Q}),Y=Object(l.d)(V,Object(l.a)(u.a)),X=a(35),Z=a(34),$=a(27),J=a(13),W=(a(58),function(){return s.a.createElement($.b,{to:"/pizza-store/",className:"logo"},"Cool Pizzas store")}),K=Object(r.memo)(W),ee=(a(60),B={},Object(N.a)(B,n.EURO,"\u20ac"),Object(N.a)(B,n.DOLLAR,"$"),B),te=function(e){var t=e.type;return s.a.createElement("span",null,ee[t])},ae=Object(r.memo)(te),ne=(a(61),function(e){var t=e.user,a=e.chosenCurrency,r=e.cartItemsQty,c=e.openAuthModalHandler,o=e.changeCurrency,i=Boolean(t.id),l=function(e,t){e.preventDefault(),a!==t&&o(t)};return s.a.createElement("header",{className:"header"},s.a.createElement(Z.a,null,s.a.createElement("div",{className:"header-content"},s.a.createElement(K,null),s.a.createElement("div",{className:"currency-switch"},s.a.createElement("a",{href:"#",className:"link".concat(a===n.EURO?" disabled":""),role:"button",onClick:function(e){l(e,n.EURO)}},s.a.createElement(ae,{type:n.EURO})),"/",s.a.createElement("a",{href:"#",className:"link".concat(a===n.DOLLAR?" disabled":""),role:"button",onClick:function(e){l(e,n.DOLLAR)}},s.a.createElement(ae,{type:n.DOLLAR}))),s.a.createElement("nav",{className:"nav"},s.a.createElement("ul",{className:"nav-list"},s.a.createElement("li",{className:"nav-list-item"},i?s.a.createElement($.b,{to:"/pizza-store/order-history",className:"nav-link"},"Order history"):s.a.createElement("a",{href:"#",className:"nav-link",onClick:c},"Sign in")),s.a.createElement("li",{className:"nav-list-item"},s.a.createElement($.b,{to:"/pizza-store/checkout",className:"nav-link cart-link"},"Cart",r>0&&s.a.createElement("span",{className:"cart-qty"},r))))))))}),re=Object(r.memo)(ne),se=(a(62),function(){return s.a.createElement("footer",{className:"footer fixed-bottom"},"Cool pizzas store")}),ce=Object(r.memo)(se),oe=a(15),ie=a(14),le=a(29),ue=a(28),me=(a(63),function(e){var t=e.onClick,a=void 0===t?null:t,n=e.children;return r.createElement("button",{className:"button",onClick:a},n)}),de=a(46),fe=(a(64),{type:"text"}),pe=function(e){var t=Object(d.a)(Object(d.a)({},fe),e),a=t.label,n=t.errorText,r=t.className,c=Object(de.a)(t,["label","errorText","className"]),o="input-row".concat(r?" ".concat(r):"");return s.a.createElement("div",{className:o},a&&s.a.createElement("label",{className:"input-label"},a),s.a.createElement("input",Object.assign({className:"input"},c)),Boolean(n)&&s.a.createElement("div",{className:"input-error"},n))},ve=a(20),he=(a(65),function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).handleQtyChange=n.handleQtyChange.bind(Object(ve.a)(n)),n.handleAddToCart=n.handleAddToCart.bind(Object(ve.a)(n)),n}return Object(p.a)(a,[{key:"handleQtyChange",value:function(e){var t,a=this.props,n=a.id,r=a.updateCartHandler,s=Number(null===(t=e.currentTarget)||void 0===t?void 0:t.value);s>=0&&r(n,s)}},{key:"handleAddToCart",value:function(){var e=this.props,t=e.id;(0,e.updateCartHandler)(t,1)}}]),a}(s.a.PureComponent)),be=(a(66),function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.price,n=e.img,r=e.isInCart,c=e.cartQty,o=e.chosenCurrency;return s.a.createElement("article",{className:"pizza"},s.a.createElement("p",{className:"pizza-title"},t),s.a.createElement("div",{className:"pizza-img-wrapper"},s.a.createElement("img",{className:"pizza-img",src:n,alt:t})),s.a.createElement("p",{className:"pizza-price"},a[o]," ",s.a.createElement(ae,{type:o})),r?s.a.createElement(pe,{className:"pizza-qty-input",name:"qty",type:"number",min:"0",defaultValue:c,onChange:this.handleQtyChange}):s.a.createElement(me,{className:"pizza-button",onClick:this.handleAddToCart},"Add"))}}]),a}(he)),Ee=(a(67),function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).updateCart=n.updateCart.bind(Object(ve.a)(n)),n}return Object(p.a)(a,[{key:"updateCart",value:function(e,t){var a=this.props,r=a.cart,s=a.pizzas,c=a.updateCart,o=Object(d.a)({},r);if(0===t){var i;null===(i=o.items)||void 0===i||delete i[e]}else{var l=s[e];o.items=Object(d.a)(Object(d.a)({},null===o||void 0===o?void 0:o.items),{},Object(N.a)({},e,Object(d.a)(Object(d.a)({},l),{},{qty:t,totalPrice:S(Number(l.price[n.EURO])*t,Number(l.price[n.DOLLAR])*t)})))}var u=this.getTotals(Object(d.a)({},o.items)),m=u.qty,f=u.price;c(Object(d.a)(Object(d.a)({},o),{},{totalQty:m,totalPrice:f}))}},{key:"getTotals",value:function(e){var t=Object.keys(e),a={qty:0,price:S(0,0)};return t.reduce((function(t,a){var r=Number(e[a].qty),s=e[a].price,c=s[n.EURO],o=s[n.DOLLAR];return{qty:t.qty+r,price:S(t.price[n.EURO]+c*r,t.price[n.DOLLAR]+o*r)}}),a)}}]),a}(s.a.PureComponent)),Oe=(a(68),function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.getPizzasList;e&&e()}},{key:"render",value:function(){var e=this,t=this.props,a=t.pizzas,n=t.cart,r=t.chosenCurrency,c=Object.keys(a),o=null===n||void 0===n?void 0:n.items;return s.a.createElement(s.a.Fragment,null,Boolean((null===c||void 0===c?void 0:c.length)>0)&&s.a.createElement(le.a,{className:"pizzas-list"},c.map((function(t){var n=Boolean(null===o||void 0===o?void 0:o[t]),c=n?null===o||void 0===o?void 0:o[t].qty:0,i=Object(d.a)(Object(d.a)({},a[t]),{},{isInCart:n,cartQty:c});return s.a.createElement(ue.a,{className:"pizzas-list-item",sm:4,xs:12,key:t},s.a.createElement(be,Object.assign({},i,{chosenCurrency:r,updateCartHandler:e.updateCart})))}))))}}]),a}(Ee)),ye=T.GET_INSTANCE(),ge=function(e){return function(t){var a=C.getSessionId();ye.updateCart(a,e).then((function(e){t(O(e))})).catch((function(e){console.log("Error: ",e)}))}},je=Object(i.b)((function(e){return{pizzas:e.pizzas,cart:e.session.cart,chosenCurrency:e.session.currency}}),{getPizzasList:function(){return function(e){x.getPizzasList().then((function(t){e(function(e){return{type:m,payload:{pizzasList:e}}}(t))})).catch((function(e){console.log("Error: ",e)}))}},updateCart:ge})(Oe);a(69);!function(e){e.SM="sm",e.MD="md",e.LG="lg"}(F||(F={}));var ze,Ce=function(e){var t=e.tag,a=void 0===t?"p":t,n=e.size,r=void 0===n?"md":n,c=e.className,o=e.children,i="".concat(c?"".concat(c," "):"","title title-").concat(r);return s.a.createElement(a,{className:i},o)},Ne=Object(r.memo)(Ce),Se=function(){return s.a.createElement("section",null,s.a.createElement(Ne,{tag:"h1",size:F.LG},"Choose one of our cool pizzas"),s.a.createElement(je,null))},Ae=Object(r.memo)(Se),ke=(a(70),a(71),function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.price,n=e.img,r=e.isInCart,c=e.cartQty,o=e.chosenCurrency,i=e.noCartAction;return s.a.createElement("article",{className:"pizza ordered-pizza"},s.a.createElement("p",{className:"pizza-title"},t),s.a.createElement("div",{className:"pizza-details"},s.a.createElement("div",{className:"pizza-img-wrapper"},s.a.createElement("img",{className:"pizza-img",src:n,alt:t})),s.a.createElement("p",{className:"pizza-price"},a[o]," ",s.a.createElement(ae,{type:o})),i?s.a.createElement("p",{className:"pizza-qty"},"Amount: ",c):r?s.a.createElement(pe,{className:"pizza-qty-input",name:"qty",type:"number",min:"0",defaultValue:c,onChange:this.handleQtyChange}):s.a.createElement(me,{className:"pizza-button",onClick:this.handleAddToCart},"Add")))}}]),a}(he)),Te=function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.pizzas,n=t.chosenCurrency,r=t.noCartAction;if(!a)return null;var c=Object.keys(a);return s.a.createElement(s.a.Fragment,null,Boolean((null===c||void 0===c?void 0:c.length)>0)&&c.map((function(t){var c=Object(d.a)(Object(d.a)({},a[t]),{},{isInCart:!0,cartQty:a[t].qty});return s.a.createElement(ke,Object.assign({},c,{key:t,chosenCurrency:n,noCartAction:r,updateCartHandler:e.updateCart}))})))}}]),a}(Ee),Ue=(a(72),S(4,9)),Ie=function(e){var t=e.cart,a=e.chosenCurrency,n=Number(t.totalPrice[a])+Number(Ue[a]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(Ne,{size:F.SM},"Total:"),s.a.createElement("p",{className:"totals-text"},"Items in cart: ",t.totalQty),s.a.createElement("p",{className:"totals-text"},"Price: ",t.totalPrice[a]," ",s.a.createElement(ae,{type:a})),s.a.createElement("p",{className:"totals-hint-text"},"+ additional ",Ue[a]," ",s.a.createElement(ae,{type:a})," for delivery service"),s.a.createElement("p",{className:"totals-text totals-text-overall"},"Overall: ",n," ",s.a.createElement(ae,{type:a})))},xe=Object(r.memo)(Ie),Re=(a(73),function(e){var t=e.cart,a=e.chosenCurrency,n=e.noCartAction,r=e.updateCart;return t?s.a.createElement(s.a.Fragment,null,s.a.createElement(le.a,{className:"order"},s.a.createElement(ue.a,{sm:8,xs:12},s.a.createElement(Te,{cart:t,pizzas:t.items,chosenCurrency:a,noCartAction:n,updateCart:r})),s.a.createElement(ue.a,{sm:4,xs:12},s.a.createElement(xe,{cart:t,chosenCurrency:a})))):null}),De=Object(r.memo)(Re),_e=Object(i.b)((function(e){return{cart:e.session.cart,chosenCurrency:e.session.currency}}),{updateCart:ge})(De),we=(a(74),function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).fieldsValidationRules=void 0,n.handleValueChange=n.handleValueChange.bind(Object(ve.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ve.a)(n)),n.validateForm=n.validateForm.bind(Object(ve.a)(n)),n.sendForm=n.sendForm.bind(Object(ve.a)(n)),n}return Object(p.a)(a,[{key:"handleValueChange",value:function(e){var t,a,n=null===(t=e.currentTarget)||void 0===t?void 0:t.name,r=this.state.fields[n],s=null===(a=e.currentTarget)||void 0===a?void 0:a.value;s!==r.value&&this.setState({fields:Object(d.a)(Object(d.a)({},this.state.fields),{},Object(N.a)({},n,Object(d.a)(Object(d.a)({},r),{},{value:s,errorText:""})))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.validateForm(this.sendForm)}},{key:"validateForm",value:function(e){var t=this.state.fields,a={},n=!1;for(var r in t){var s=this.fieldsValidationRules[r];if(s){var c=s(t[r].value);console.log(r,t[r].value,t[r].defaultValue),a[r]=Object(d.a)(Object(d.a)({},t[r]),{},{errorText:c}),n||(n=Boolean(c))}}Object(d.a)(Object(d.a)({},t),a);this.setState({fields:Object(d.a)(Object(d.a)({},t),a)}),!n&&e&&e()}}]),a}(s.a.PureComponent)),Le={MIN_SYMBOLS_COUNT:2,MAX_SYMBOLS_COUNT:30,REG_EXP:/[a-zA-Z]+[\s\-]*[a-zA-Z]+/i},Pe={MIN_SYMBOLS_COUNT:2,MAX_SYMBOLS_COUNT:30,REG_EXP:/[a-zA-Z]+[\s\-]*[a-zA-Z]+/i},Me={REG_EXP:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i},Ge=6,He=30,Be=function(e){return(null===e||void 0===e?void 0:e.length)>=Le.MIN_SYMBOLS_COUNT},Fe=function(e){return(null===e||void 0===e?void 0:e.length)<Le.MAX_SYMBOLS_COUNT},qe=function(e){return Le.REG_EXP.test(e)},Qe=function(e){return(null===e||void 0===e?void 0:e.length)>=Pe.MIN_SYMBOLS_COUNT},Ve=function(e){return(null===e||void 0===e?void 0:e.length)<Pe.MAX_SYMBOLS_COUNT},Ye=function(e){return Pe.REG_EXP.test(e)},Xe=function(e){return Me.REG_EXP.test(e)},Ze=function(e){return(null===e||void 0===e?void 0:e.length)>=Ge},$e=function(e){return(null===e||void 0===e?void 0:e.length)<He},Je=function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,null,[{key:"getNameError",value:function(e){return Be(e)?Fe(e)?qe(e)?"":"Please enter a valid name with alphabet symbols only":"Name must contain ".concat(Le.MAX_SYMBOLS_COUNT," maximum symbols amount"):"Name must contain at least ".concat(Le.MIN_SYMBOLS_COUNT," symbol")}},{key:"getSurnameError",value:function(e){return Qe(e)?Ve(e)?Ye(e)?"":"Please enter a valid surname with alphabet symbols only":"Surname must contain ".concat(Pe.MAX_SYMBOLS_COUNT," maximum symbols amount"):"Surname must contain at least ".concat(Pe.MIN_SYMBOLS_COUNT," symbol")}},{key:"getEmailError",value:function(e){return Xe(e)?"":"Please enter a valid e-mail address"}},{key:"getRegistrationPasswordError",value:function(e){return Ze(e)?$e(e)?"":"Password must contain ".concat(He," maximum symbols amount"):"Password must contain at least ".concat(Ge," symbols")}},{key:"getAuthPasswordError",value:function(e){return e&&0!==e.length?Ze(e)?"":"Password must contain at least ".concat(Ge," symbols"):"Password is required"}},{key:"getAddressError",value:function(e){return e&&0!==e.length?"":"Address is required"}}]),e}(),We=function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).isUserDataApplied=!1,n.state={fields:{name:{label:"Name:",errorText:""},surname:{label:"Surname:",errorText:""},address:{label:"Address:",type:"text",errorText:""},email:{label:"E-mail:",errorText:""}}},n.fieldsValidationRules={name:Je.getNameError,surname:Je.getSurnameError,email:Je.getEmailError,address:Je.getAddressError},n}return Object(p.a)(a,[{key:"sendForm",value:function(){var e=this.props,t=e.user,a=e.cart,n=e.addToOrderHistory,r=null===t||void 0===t?void 0:t.id;r&&n(r,a)}},{key:"applyUserData",value:function(){var e=this.props.user;if(null===e||void 0===e?void 0:e.id){var t=this.state.fields,a=t.name,n=t.surname,r=t.email;this.isUserDataApplied=!0,this.setState({fields:Object(d.a)(Object(d.a)({},this.state.fields),{},{name:Object(d.a)(Object(d.a)({},a),{},{value:a.value||e.name}),surname:Object(d.a)(Object(d.a)({},n),{},{value:n.value||e.surname}),email:Object(d.a)(Object(d.a)({},r),{},{value:r.value||e.email})})})}}},{key:"componentDidUpdate",value:function(){this.isUserDataApplied||this.applyUserData()}},{key:"componentDidMount",value:function(){this.isUserDataApplied||this.applyUserData()}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.user,r=a.cart,c=this.state.fields,o=Object.keys(c),i=null===n||void 0===n?void 0:n.id;return Boolean(null===(e=r.items)||void 0===e?void 0:e.length)?s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},o.map((function(e){var a=c[e],r=i?n[e]:"";return s.a.createElement(pe,Object.assign({name:e,key:e},a,{defaultValue:r,onChange:t.handleValueChange}))})),s.a.createElement(me,{type:"submit"},"Checkout")):s.a.createElement(Ne,{size:F.MD},"No items in cart")}}]),a}(we),Ke=Object(i.b)((function(e){return{user:e.user,cart:e.session.cart,chosenCurrency:e.session.currency}}),{addToOrderHistory:function(e,t){return function(e){var a=T.GET_INSTANCE(),n=C.getUserId();a.addToOrderHistory(n,t).then((function(){a.getUserData(n).then((function(t){(null===t||void 0===t?void 0:t.id)&&e(P(t))})).catch((function(e){console.log("Error: ",e)}))})).catch((function(e){console.log("Error: ",e)}))}}})(We),et=function(){return s.a.createElement("section",null,s.a.createElement(Ne,{tag:"h1",size:F.LG},"Your order"),s.a.createElement(Ke,null),s.a.createElement(_e,null))},tt=Object(r.memo)(et),at=a(47),nt=function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={fields:{email:{label:"E-mail:",value:"",errorText:""},password:{label:"Password:",value:"",type:"password",errorText:""}}},n.fieldsValidationRules={email:Je.getEmailError,password:Je.getAuthPasswordError},n.sendForm=n.sendForm.bind(Object(ve.a)(n)),n}return Object(p.a)(a,[{key:"sendForm",value:function(){var e,t=this.props.authorizeUser,a=this.state.fields,n=a.email,r=a.password;t(null===(e=n.value)||void 0===e?void 0:e.toLowerCase(),r.value)}},{key:"render",value:function(){var e=this,t=this.props.formState,a=this.state.fields,n=Object.keys(a);return s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.map((function(t){var n=a[t];return s.a.createElement(pe,Object.assign({name:t,key:t},n,{onChange:e.handleValueChange}))})),Boolean(null===t||void 0===t?void 0:t.error)&&s.a.createElement("p",{className:"form-error"},t.error),s.a.createElement(me,{type:"submit"},"Submit"))}}]),a}(we),rt=Object(i.b)((function(e){return{formState:e.forms[I.AUTH]}}),{authorizeUser:function(e,t){return function(a){var n=T.GET_INSTANCE();a(M()),n.authorizeAndGetUserData(e,t).then((function(e){(null===e||void 0===e?void 0:e.id)?(C.setUserId(e.id),a(P(e))):a({type:_})})).catch((function(e){console.log("Error: ",e)}))}}})(nt),st=function(e){Object(oe.a)(a,e);var t=Object(ie.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={fields:{name:{label:"Name:",value:"",errorText:""},surname:{label:"Surname:",value:"",errorText:""},email:{label:"E-mail:",value:"",errorText:""},password:{label:"Password:",value:"",type:"password",errorText:""}}},n.fieldsValidationRules={name:Je.getNameError,surname:Je.getSurnameError,email:Je.getEmailError,password:Je.getRegistrationPasswordError},n}return Object(p.a)(a,[{key:"sendForm",value:function(){var e,t=this.props.registerUser,a=this.state.fields,n=a.email,r=a.password,s=a.name,c=a.surname;t(null===(e=n.value)||void 0===e?void 0:e.toLowerCase(),r.value,s.value,c.value)}},{key:"render",value:function(){var e=this,t=this.props.formState,a=this.state.fields,n=Object.keys(a);return s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.map((function(t){var n=a[t];return s.a.createElement(pe,Object.assign({name:t,key:t},n,{onChange:e.handleValueChange}))})),Boolean(null===t||void 0===t?void 0:t.error)&&s.a.createElement("p",{className:"form-error"},t.error),s.a.createElement(me,{type:"submit"},"Submit"))}}]),a}(we),ct=Object(i.b)((function(e){return{formState:e.forms[I.REG]}}),{registerUser:function(e,t,a,n){return function(r){var s=T.GET_INSTANCE();r(M()),s.checkIfUserExists(e).then((function(c){c?r({type:w}):s.setUserData(e,t,a,n).then((function(s){C.setUserId(s),r(P({id:s,email:e,password:t,name:a,surname:n}))})).catch((function(e){console.log("Error: ",e)}))})).catch((function(e){console.log("Error: ",e)}))}}})(st);a(75);!function(e){e[e.AUTH=0]="AUTH",e[e.REG=1]="REG"}(ze||(ze={}));var ot=function(e){var t=e.isModalOpen,a=e.onHideHandler,n=Object(r.useState)(ze.AUTH),c=Object(X.a)(n,2),o=c[0],i=c[1],l=function(){o===ze.AUTH?i(ze.REG):i(ze.AUTH)};return s.a.createElement(at.a,{className:"auth-modal",show:t,onHide:a,centered:!0},o===ze.AUTH?s.a.createElement(rt,null):s.a.createElement(ct,null),s.a.createElement("p",{className:"form-type-toggle"},o===ze.AUTH?s.a.createElement(s.a.Fragment,null,"Not registered yet? ",s.a.createElement("a",{href:"#",className:"link",onClick:l},"Sign up")):s.a.createElement(s.a.Fragment,null,"Already have an account? ",s.a.createElement("a",{href:"#",className:"link",onClick:l},"Sign in"))))},it=Object(r.memo)(ot),lt=(a(77),function(e){var t=e.orders,a=e.chosenCurrency;if(!t)return null;var n=Object.keys(t);return s.a.createElement(s.a.Fragment,null,n.map((function(e){return s.a.createElement("article",{key:e,className:"order-list-item"},s.a.createElement(le.a,null,s.a.createElement(ue.a,{xs:12},s.a.createElement(Ne,{size:F.SM,className:"order-date"},function(e){var t=new Date(Number(e));return"".concat(t.getDay(),".").concat(t.getMonth(),".").concat(t.getFullYear())}(e)))),s.a.createElement(De,{cart:t[e],chosenCurrency:a,noCartAction:!0}))})))}),ut=Object(r.memo)(lt),mt=Object(i.b)((function(e){return{orders:e.user.orders,chosenCurrency:e.session.currency}}))(ut),dt=function(){return s.a.createElement("section",null,s.a.createElement(Ne,{tag:"h1",size:F.LG},"Order history"),s.a.createElement(mt,null))},ft=Object(r.memo)(dt),pt=(a(78),function(e){var t=e.session,a=e.user,n=e.getSessionData,c=e.changeCurrency,o=e.getUserData,i=Object(r.useState)(!1),l=Object(X.a)(i,2),u=l[0],m=l[1];Object(r.useEffect)((function(){n&&n(),o&&o()}),[]);return s.a.createElement($.a,null,s.a.createElement(re,{user:a,chosenCurrency:t.currency,cartItemsQty:t.cart.totalQty,changeCurrency:c,openAuthModalHandler:function(){m(!0)}}),s.a.createElement("main",null,s.a.createElement(Z.a,null,s.a.createElement(J.a,{exact:!0,path:"/pizza-store",component:Ae}),s.a.createElement(J.a,{path:"/pizza-store/checkout",component:tt}),s.a.createElement(J.a,{path:"/pizza-store/order-history",component:ft}))),s.a.createElement(ce,null),s.a.createElement(it,{isModalOpen:u&&!(null===a||void 0===a?void 0:a.id),onHideHandler:function(){m(!1)}}))}),vt=Object(i.b)((function(e){return{session:e.session,user:e.user}}),{getSessionData:function(){return function(e){var t=T.GET_INSTANCE(),a=C.getSessionId();a?t.getSessionData(a).then((function(t){e(O(t))})).catch((function(e){console.log("Error: ",e)})):t.createSession().then((function(t){C.setSessionId(t.id),e(O(t))}))}},getUserData:function(){return function(e){var t=T.GET_INSTANCE(),a=C.getUserId();Boolean(a)&&t.getUserData(a).then((function(t){(null===t||void 0===t?void 0:t.id)&&(C.setUserId(t.id),e(P(t)))})).catch((function(e){console.log("Error: ",e)}))}},changeCurrency:function(e){return function(t){var a=T.GET_INSTANCE(),n=C.getSessionId();n?a.changeCurrency(n,e).then((function(e){t(O(e))})).catch((function(e){console.log("Error: ",e)})):a.createSession().then((function(e){C.setSessionId(e.id),t(O(e))}))}}})(pt);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(i.a,{store:Y},s.a.createElement(vt,null))),document.getElementById("pizza-app"))}},[[79,1,2]]]);
//# sourceMappingURL=main.315540b3.chunk.js.map