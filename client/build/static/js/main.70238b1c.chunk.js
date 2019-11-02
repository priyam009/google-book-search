(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(61)},6:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(29),l=n.n(r),c=(n(6),n(31)),i=n(7);var s=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"Searchtopia"),o.a.createElement("div",{className:"collapse navbar-collapse d-flex justify-content-end",id:"navbarNavAltMarkup"},o.a.createElement("div",{className:"navbar-nav"},o.a.createElement("a",{className:"nav-item nav-link",href:"/"},"Search"),o.a.createElement("a",{className:"nav-item nav-link ml-5 mr-5",href:"/save"},"Save"))))},u=n(30),m=n(9),d=n(10),h=n(12),f=n(11),v=n(13);var k=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center header-content"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Google Books Search"),o.a.createElement("p",{className:"lead"},"Search for and Save Books of your Interest ")))},g=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).onInputChange=function(e){var t=e.target.value,a=e.target.name;n.props.handleChange(a,t)},n.onFormSubmit=function(e){e.preventDefault(),n.props.handleClick()},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container search-content"},o.a.createElement("h4",null,"Book Search"),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",name:"title",value:this.props.title,onChange:this.onInputChange,className:"form-control",id:"inputBook","aria-describedby":"bookHelp",placeholder:"Enter Book"})),o.a.createElement("button",{type:"submit",className:"btn btn-dark d-flex d-block justify-content-end",onClick:this.onFormSubmit},"Search")))}}]),t}(o.a.Component);var b=function(e){return o.a.createElement("div",{className:"card mt-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"w-50"},o.a.createElement("h5",{className:"card-title"},e.title),o.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.subtitle),o.a.createElement("p",{className:"card-subtitle mb-2 text-muted"},e.authors)),o.a.createElement("div",null,o.a.createElement("button",{className:"card-link btn btn-dark"},o.a.createElement("a",{rel:"noopener noreferrer",href:e.link,className:"text-light books-anchor",target:"_blank"},"View")),o.a.createElement("button",{className:"card-link btn btn-dark",onClick:function(){return e.handleBook(e)}},e.action))),o.a.createElement("div",{className:"d-flex"},o.a.createElement("img",{src:e.image,className:"card-img-top",alt:e.title}),o.a.createElement("p",{className:"card-text ml-3"},e.description))))};var p=function(e){return o.a.createElement("div",{className:"container mt-5 result-content"},o.a.createElement("h2",null,e.heading),o.a.createElement("div",null,e.children))},E=n(15),N=n.n(E),w={googleBooks:function(e){return N.a.get("/api/books/google",{params:{q:e}})},saveBook:function(e){return N.a.post("/api/books",e)},getBooks:function(){return N.a.get("/api/books")},deleteBook:function(e){return N.a.delete("/api/books/"+e)}},B=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",books:[]},n.handleChange=function(e,t){n.setState(Object(u.a)({},e,t))},n.handleClick=function(){w.googleBooks(n.state.title).then(function(e){for(var t=e.data.items,a=[],o=0;o<10;o++)if(t[o].volumeInfo.imageLinks){var r={authors:t[o].volumeInfo.authors.join(","),description:t[o].volumeInfo.description,image:t[o].volumeInfo.imageLinks.smallThumbnail,link:t[o].volumeInfo.infoLink,title:t[o].volumeInfo.title,subtitle:t[o].volumeInfo.subtitle};a.push(r)}n.setState({books:a})}).catch(function(e){return console.log(e)})},n.handleBook=function(e){console.log("book",e),w.saveBook({title:e.title||"",subtitle:e.subtitle||"",authors:e.authors||"",description:e.description||"",image:e.image||"",link:e.link||""}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null),o.a.createElement(g,{title:this.state.title,handleChange:this.handleChange,handleClick:this.handleClick}),o.a.createElement(p,{heading:"Results"},this.state.books.map(function(t,n){return o.a.createElement(b,{key:n,action:"Save",id:n,title:t.title,subtitle:t.subtitle,description:t.description,image:t.image,authors:t.authors,link:t.link,handleBook:e.handleBook})})))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},n.loadBooks=function(){w.getBooks().then(function(e){return n.setState({savedBooks:e.data})}).catch(function(e){return console.log(e)})},n.handleBook=function(e){w.deleteBook(e.id).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null),o.a.createElement(p,{heading:"Saved"},this.state.savedBooks.length?o.a.createElement(o.a.Fragment,null,this.state.savedBooks.map(function(t,n){return o.a.createElement(b,{key:n,action:"Delete",id:t._id,title:t.title,subtitle:t.subtitle,description:t.description,image:t.image,authors:t.authors,link:t.link,handleBook:e.handleBook})})):o.a.createElement("h5",null,"No Results to Display")))}}]),t}(a.Component);var y=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))};var C=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:B}),o.a.createElement(i.a,{exact:!0,path:"/save",component:j}),o.a.createElement(i.a,{component:y}))))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):x(e)})}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.70238b1c.chunk.js.map