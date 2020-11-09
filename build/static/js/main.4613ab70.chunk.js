(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{120:function(e,t,a){e.exports=a(179)},125:function(e,t,a){},126:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},174:function(e,t,a){},176:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(32),l=a.n(c),i=(a(125),a(126),a(10)),o=a(119),s=r.a.forwardRef((function(e,t){var a=r.a.useState(!1),n=Object(o.a)(a,2),c=n[0],i=n[1];r.a.useImperativeHandle(t,(function(){return{openNavBar:function(){return s()},closeNavBar:function(){return u()}}}));var s=function(){i(!0)},u=function(){i(!1)};return c?l.a.createPortal(r.a.createElement("div",{className:"modal-wrapper"},r.a.createElement("div",{onClick:u,className:"modal-backdrop"}),r.a.createElement("div",{className:"modal-box"},e.children)),document.getElementById("root")):null})),u=a(19),m=a(117);a(149);var p=function(){var e=r.a.useRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.c,{size:"2x",className:"icon",onClick:function(){e.current.openNavBar()},icon:"bars"}),r.a.createElement(s,{ref:e},r.a.createElement("div",{className:"div-nav-bar"},r.a.createElement("div",{className:"div-nav-elements"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.c,{exact:!0,activeClassName:"current",to:"/RecipesWeb/"},"Home")),r.a.createElement("li",null,r.a.createElement(u.c,{exact:!0,activeClassName:"current",to:"/RecipesWeb/recipes"},"Recipes")),r.a.createElement("li",null,r.a.createElement(u.c,{exact:!0,activeClassName:"current",to:"/RecipesWeb/create"},"Create")))))))},d=(a(150),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"recipes"},"Recipes"))))}),v=a(23),E=a(24),h=a(28),f=a(26),b=(a(151),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){t.preventDefault(),document.getElementById("input-bar").checkValidity()&&e.props.value(document.getElementById("input-bar").value)},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{autoComplete:"off"},r.a.createElement("div",{className:"tb"},r.a.createElement("div",{className:"td"},r.a.createElement("input",{id:"input-bar",className:"input-bar",type:"text",placeholder:"Search",required:!0})),r.a.createElement("div",{className:"td",id:"cover"},r.a.createElement("button",{className:"button-bar",type:"submit",onClick:this.handleClick},r.a.createElement("div",{className:"circle"}),r.a.createElement("span",{className:"button-span"})))))))}}]),a}(n.Component)),g=a(43),y=a.n(g),k=a(68),w=a(6),N=a(48),C=a(184),j=a(82),O=a.n(j),x=a(44),B=a.n(x);a(170);function I(e){return 0===e.counter?r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"No matching recipes")):r.a.createElement("p",null)}var D=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={myArray:[]},e}return Object(E.a)(a,[{key:"getData",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("https://recipes-backend-web.herokuapp.com/api/recipes/").then((function(e){var t=[[]],a=0,n=0;for(var r in e.data)3===n&&(n=0,t[++a]=[]),t[a].push(e.data[r]),n++;return t}));case 2:t=e.sent,this.setState({myArray:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDataCustom",value:function(){var e=Object(k.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("https://recipes-backend-web.herokuapp.com/api/recipes/").then((function(e){var a=[[]],n=0,r=0;for(var c in e.data)3===r&&(r=0,a[++n]=[]),e.data[c].title.includes(t)&&(a[n].push(e.data[c]),r++);return a}));case 2:a=e.sent,this.setState({myArray:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.getDataCustom(this.props.value)}},{key:"componentDidMount",value:function(){O()(".recipe").hover((function(){O()(this).animate({marginTop:"-=1%",marginBottom:"1%"},200)}),(function(){O()(this).animate({marginTop:"0%",marginBottom:"0%"},200)})),this.getData()}},{key:"render",value:function(){var e=0;return r.a.createElement(r.a.Fragment,null,this.state.myArray.map((function(t,a){return r.a.createElement(C.a,{className:"deck",key:a},t.map((function(t,a){var n=t.steps.substr(0,25);t.steps.substr(25)&&(n+="..."),e++;var c="/RecipesWeb/info/"+t.id;return c=c.replace(" ",""),r.a.createElement(w.a,{className:"recipe",key:a},r.a.createElement(w.a.Img,{variant:"top",src:t.image}),r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,t.title),r.a.createElement(w.a.Text,null,n),r.a.createElement(u.c,{exact:!0,activeClassName:"current",to:c},r.a.createElement(N.a,{variant:"primary"},"View More"))))})),function(e){var t=e%3;return 1===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:"recipe_hidden"},r.a.createElement(w.a.Img,{variant:"top"}),r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null),r.a.createElement(w.a.Text,null),r.a.createElement(N.a,{variant:"primary"},"View More"))),r.a.createElement(w.a,{className:"recipe_hidden"},r.a.createElement(w.a.Img,{variant:"top"}),r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null),r.a.createElement(w.a.Text,null),r.a.createElement(N.a,{variant:"primary"},"View More")))):2===t?r.a.createElement(w.a,{className:"recipe_hidden"},r.a.createElement(w.a.Img,{variant:"top"}),r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null),r.a.createElement(w.a.Text,null),r.a.createElement(N.a,{variant:"primary"},"View More"))):r.a.createElement("p",null)}(e))})),r.a.createElement("div",{className:"wrap"},r.a.createElement(I,{counter:e})))}}]),a}(n.Component),S=(a(171),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleValue=function(t){e.setState({value:t})},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(b,{value:this.handleValue}),r.a.createElement("div",{className:"recipe-card"},r.a.createElement(D,{value:this.state.value})))}}]),a}(n.Component)),F=a(14),R=a(70),A=a(113),W=a.n(A),T=a(118),V=a(62),M=a(89),L=a.n(M),_=(a(173),a(174),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){W.a.init()}},{key:"render",value:function(){var e,t=new FormData,a=V.a({title:V.b().required("Write a title for your recipe"),category:V.b().oneOf(["Appetizers","Breakfast","Lunch","Dinner","Dessert","Beverage"],"Select one category").required("Select one category"),steps:V.b().required("Write some steps"),image:V.b().required()});return r.a.createElement(w.a,{className:"custom-card"},r.a.createElement(w.a.Header,null,"Create new recipe"),r.a.createElement(w.a.Body,null,r.a.createElement(T.a,{validationSchema:a,onSubmit:function(a){t.append("title",a.title),t.append("category",a.category),t.append("steps",a.steps),t.append("image",e,a.image),B.a.post("https://recipes-backend-web.herokuapp.com/api/recipes/",t).then((function(){L.a.fire({title:"Good job!",text:"Your recipe has been submited",icon:"success",onClose:function(){window.location.reload(!1)}})})).catch((function(e){L.a.fire({title:"Oops...",text:"Something went wrong",icon:"error",onClose:function(){window.location.reload(!1)}})}))},initialValues:{title:"",category:"",steps:"",image:""}},(function(t){var a=t.handleSubmit,n=t.handleChange,c=t.values,l=t.errors;return r.a.createElement(F.a,{noValidate:!0,onSubmit:a},r.a.createElement(F.a.Row,null,r.a.createElement(F.a.Group,{as:R.a,controlId:"form-grid-name"},r.a.createElement(F.a.Label,{className:"label"},"Name"),r.a.createElement(F.a.Control,{name:"title",value:c.title,onChange:n,isInvalid:!!l.title,placeholder:"Recipe's name"}),r.a.createElement(F.a.Control.Feedback,{type:"invalid"},l.title)),r.a.createElement(F.a.Group,{as:R.a,controlId:"form-grid-category"},r.a.createElement(F.a.Label,{className:"label"},"Category"),r.a.createElement(F.a.Control,{name:"category",value:c.category,onChange:n,isInvalid:!!l.category,as:"select"},r.a.createElement("option",null,"Select category"),r.a.createElement("option",null,"Appetizers"),r.a.createElement("option",null,"Breakfast"),r.a.createElement("option",null,"Lunch"),r.a.createElement("option",null,"Dinner"),r.a.createElement("option",null,"Dessert"),r.a.createElement("option",null,"Beverage")),r.a.createElement(F.a.Control.Feedback,{type:"invalid"},l.category))),r.a.createElement(F.a.Group,{controlId:"form-grid-steps"},r.a.createElement(F.a.Label,{className:"label"},"List the steps"),r.a.createElement(F.a.Control,{as:"textarea",rows:"5",name:"steps",value:c.steps,onChange:n,isInvalid:!!l.steps,placeholder:"1."}),r.a.createElement(F.a.Control.Feedback,{type:"invalid"},l.steps)),r.a.createElement(F.a.Group,{controlId:"form-grid-image"},r.a.createElement(F.a.File,{id:"image",name:"image",value:c.image,onChange:function(t){n(t),function(t){e=t.target.files[0]}(t)},isInvalid:!!l.image,label:"Upload your recipe's image",accept:".jpg,.png",custom:!0})),r.a.createElement(N.a,{variant:"warning",type:"submit"},"Submit"))}))))}}]),a}(n.Component)),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(_,null))},G=(a(176),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recipe:[],steps_splitted:[]},e}return Object(E.a)(a,[{key:"getData",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("https://recipes-backend-web.herokuapp.com/api/recipes/"+this.props.recipe.params.id).then((function(e){return e.data}));case 2:t=e.sent,this.setState({recipe:t}),a=this.state.recipe.steps.split("\n"),this.setState({steps_splitted:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,this.state.recipe.title),r.a.createElement("h3",null,this.state.recipe.category),this.state.steps_splitted.map((function(e,t){return r.a.createElement("h5",{key:t},e)}))))}}]),a}(n.Component)),z=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(G,{recipe:this.props.match}))}}]),a}(n.Component);a(177),a(178);var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/RecipesWeb/",component:d}),r.a.createElement(i.a,{exact:!0,path:"/RecipesWeb/recipes",component:S}),r.a.createElement(i.a,{exact:!0,path:"/RecipesWeb/create",component:q}),r.a.createElement(i.a,{exact:!0,path:"/RecipesWeb/info/:id",component:z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(u.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[120,1,2]]]);
//# sourceMappingURL=main.4613ab70.chunk.js.map