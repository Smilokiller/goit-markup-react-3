(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a(80)},4:function(e,t,a){e.exports={cont:"styles_cont__23xdq",App:"styles_App__2C_fz",Searchbar:"styles_Searchbar__1Ol_Y",SearchForm:"styles_SearchForm__6NFTF",SearchFormButton:"styles_SearchFormButton__BqK35",SearchFormButtonLabel:"styles_SearchFormButtonLabel__22QDx",SearchFormInput:"styles_SearchFormInput__Fyv07",ImageGallery:"styles_ImageGallery__2743j",ImageGalleryItem:"styles_ImageGalleryItem__2PJEb",ImageGalleryItemImage:"styles_ImageGalleryItemImage__nlZeI","ImageGalleryItem-image":"styles_ImageGalleryItem-image__1K33S",Overlay:"styles_Overlay__33ssn",Modal:"styles_Modal__J7tbE",Button:"styles_Button__37Nmv"}},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=a(6),s=a(8),m=a(11),i=a(12),u=a(14),g=a(13),h=a(108);function d(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{style:{width:200,margin:10},id:"outlined-basic",label:e.name,variant:"outlined",name:e.name,onChange:e.onChange,value:e.value}))}function b(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{key:e.contactsList.id},e.contactsList.name,": ",e.contactsList.number,r.a.createElement("button",{onClick:function(){return e.onClick(e.contactsList.id)}},"DELETE")))}function f(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{style:{width:200},id:"outlined-basic",label:"filter",variant:"outlined",name:"filter",onChange:e.onChange}))}var y=a(109),p=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={contacts:JSON.parse(localStorage.getItem("contacts")),filter:"",name:"",number:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(s.a)({},n,r))},e.handleSubmit=function(t){(t.preventDefault(),null!==e.state.contacts)?e.state.contacts.find((function(t){return t.name===e.state.name}))?(alert("This user already in contact list"),e.setState({name:"",number:""})):(localStorage.setItem("contacts",JSON.stringify([].concat(Object(o.a)(e.state.contacts),[{id:Object(y.a)(),name:e.state.name,number:e.state.number}]))),e.setState({contacts:JSON.parse(localStorage.getItem("contacts"))}),e.setState({name:"",number:""})):(e.setState({contacts:[]}),localStorage.setItem("contacts",JSON.stringify([].concat(Object(o.a)(e.state.contacts),[{id:Object(y.a)(),name:e.state.name,number:e.state.number}]))),e.setState({contacts:JSON.parse(localStorage.getItem("contacts"))}))},e.handleFilter=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(s.a)({},n,r),e.findContact)},e.handleDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.contacts.filter((function(t){localStorage.setItem("contacts",JSON.stringify(e.state.contacts));var a=t.name.toLowerCase(),n=e.state.filter.toLowerCase();if(a.includes(n))return t}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Name"),r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement(d,{name:"name",onChange:this.handleChange,value:this.state.name}),r.a.createElement(d,{name:"number",onChange:this.handleChange,value:this.state.number}),r.a.createElement("button",{type:"input"},"Add contact")),r.a.createElement("h2",null,"Contacts"),r.a.createElement("h3",null,"Find contacts by name"),r.a.createElement(f,{onChange:this.handleFilter}),r.a.createElement("ul",null,t.map((function(t){return r.a.createElement(b,{contactsList:t,onClick:e.handleDelete})}))))}}]),a}(n.Component),S=a(16),E=a.n(S),_=a(4),v=a.n(_);function I(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:v.a.Searchbar},r.a.createElement("form",{className:v.a.SearchForm,onSubmit:e.onSubmit},r.a.createElement("button",{type:"submit",className:v.a.SearchFormButton},r.a.createElement("span",{className:v.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:v.a.SearchFormInput,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",name:"keyWord",onChange:e.onChange,value:e.value}))))}var C=a(31),F=a(29),O=a.n(F);function L(e){var t=e.img,a=e.toggler;e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{toggler:a,sources:[t]}))}function k(e){var t=e.item,a=Object(n.useState)(!1),l=Object(C.a)(a,2),c=l[0],o=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:v.a.ImageGalleryItem,key:t.id,onClick:function(){return o(!c)}},r.a.createElement("img",{src:t.webformatURL,alt:"",className:v.a.ImageGalleryItemImage}),r.a.createElement(L,{img:t.largeImageURL,item:t,toggler:c,id:void 0})))}function j(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:v.a.ImageGallery},e.gallery.map((function(t){return r.a.createElement(k,{item:t,toogleModal:e.toogleModal})}))))}function N(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:v.a.Button,onClick:e.onClick},"Load more"))}var w=a(30),B=a.n(w);E.a.defaults.baseURL="https://pixabay.com/api";var G=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={imageList:[],keyWord:"",searchWord:"",page:1,isLoading:!1,isVisible:!1},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(s.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault(),e.setState({searchWord:e.state.keyWord},e.drawImages),e.setState({keyWord:""}),e.setState({page:1})},e.drawImages=function(){e.setState({isLoading:!0}),E.a.get("/?key=17937639-afdfa4080eb94060ee59a5ab1&q=".concat(e.state.searchWord,"&per_page=12&image_type=photo&page=").concat(e.state.page)).then((function(t){1===e.state.page?e.setState({imageList:t.data.hits}):(e.setState({imageList:[].concat(Object(o.a)(e.state.imageList),Object(o.a)(t.data.hits))}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))})).finally((function(){e.setState({isLoading:!1}),e.setState({isVisible:!0})}))},e.handleClick=function(){e.setState((function(e){return{page:e.page+1}}),e.drawImages)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.imageList,t=this.state.isLoading,a=this.state.isVisible;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:v.a.cont},r.a.createElement(I,{onChange:this.handleChange,onSubmit:this.handleSubmit,value:this.state.keyWord}),r.a.createElement(j,{gallery:e,toogleModal:this.toogleModal}),a&&r.a.createElement(N,{onClick:this.handleClick}),t&&r.a.createElement(B.a,{type:"Hearts",color:"#00BFFF",height:80,width:80,timeout:3e3})))}}]),a}(n.Component);var J=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(p,null),r.a.createElement(G,null))};c.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.1c4a02f5.chunk.js.map