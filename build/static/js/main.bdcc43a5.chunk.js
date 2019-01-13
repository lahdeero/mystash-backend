(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),s=n.n(c),i=n(23),o=n(53),u=n(12),l=n(46),p=n(2),m=n.n(p),h=n(4),d=n(6),f=n(7),v=n(9),g=n(8),E=n(10),b=n(29),O=n(28),y=(n(42),n(3)),x=n(33),w=n(52),j=function(e){function t(){return Object(d.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement("input",{onChange:this.props.handleChange,value:this.props.filter}))}}]),t}(r.a.Component),k=Object(u.b)(function(e){return{filter:e.filter}})(j),C=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={currentPage:1,handleSelect:e.handleSelect,redirect:!1},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement("div",null,r.a.createElement(w.a,{to:"/login"})):r.a.createElement("div",null,r.a.createElement(y.Navbar,{className:"indigo",brand:"my-stash",right:!0},r.a.createElement(x.IndexLinkContainer,{to:"/create"},r.a.createElement(y.NavItem,{eventkey:2},r.a.createElement(y.Icon,null,"note_add"))),r.a.createElement(x.IndexLinkContainer,{to:"/settings"},r.a.createElement(y.NavItem,{eventkey:3},r.a.createElement(y.Icon,null,"settings"))),r.a.createElement(x.IndexLinkContainer,{to:"/logout"},r.a.createElement(y.NavItem,{onClick:this.props.handleLogout},r.a.createElement(y.Icon,null,"logout")))),r.a.createElement(k,{handleChange:this.props.handleChange}))}}]),t}(r.a.Component),I=n(20),S=n(18),N=n.n(S),R={register:function(){var e=Object(h.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/register",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(h.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},T=null,L={},D=null,F={getAll:function(){var e=Object(h.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=D){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,N.a.get("/api/notes/directory/"+D+"/all",L);case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getOne:function(){var e=Object(h.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/notes/directory/note/"+t,L);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(h.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/notes/directory",t,L);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),modify:function(){var e=Object(h.a)(m.a.mark(function e(t){var n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.id;case 2:return n=e.sent,e.next=5,N.a.put("/api/notes/directory/note/"+n,t,L);case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),erase:function(){var e=Object(h.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("".concat("/api/notes/directory","/note/").concat(t),L);case 2:return n=e.sent,console.log("response "+n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),setToken:function(e,t){D=e,T="bearer ".concat(t),L={headers:{Authorization:T}}}},M=function(e){return F.setToken(e.id,e.token),function(){var t=Object(h.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"LOGIN",data:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER":case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},P=function(){return function(){var e=Object(h.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getAll();case 2:n=e.sent,t({type:"INIT_NOTES",data:n});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},B=function(e){return console.log(e),function(){var t=Object(h.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CREATE",data:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE":return e.concat(t.data);case"MODIFY":return e.map(function(e){return e.id===t.data[0].id?t.data[0]:e});case"REMOVE":return e.filter(function(e){return e.id!==t.data});case"INIT_NOTES":return t.data;case"CLEAR":return[];default:return e}},_=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(v.a)(this,Object(g.a)(t).call(this))).handleRegister=function(){var t=Object(h.a)(m.a.mark(function t(n){var a,r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,e.props.actionForRegister({realname:e.state.firstname+" "+e.state.lastname,username:e.state.username,password:e.state.password,email:e.state.email});case 4:return a=t.sent,t.next=7,a[0];case 7:return r=t.sent,t.next=10,B(a[1]);case 10:return t.next=12,window.localStorage.setItem("loggedMystashappUser",JSON.stringify(r));case 12:return t.next=14,M(r);case 14:return t.next=16,window.location.reload();case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(1),e.setState({error:"Username already in use or contains illegal characters"}),setTimeout(function(){e.setState({error:null})},5e3);case 22:case"end":return t.stop()}},t,this,[[1,18]])}));return function(e){return t.apply(this,arguments)}}(),e.handleRegisterFieldChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.state={firstname:"",lastname:"",username:"",password:"",email:"",error:null,redirect:!1},e}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.Navbar,{className:"indigo",brand:"my-stash",right:!0}),r.a.createElement("div",{className:"container"},r.a.createElement("div",null,this.state.error),r.a.createElement("form",{onSubmit:this.handleRegister},r.a.createElement(y.Row,null,r.a.createElement(y.Input,{onChange:this.handleRegisterFieldChange,name:"firstname",label:"First Name"},r.a.createElement(y.Icon,null,"accessibility")),r.a.createElement(y.Input,{onChange:this.handleRegisterFieldChange,name:"lastname",s:6,label:"Last Name"},r.a.createElement(y.Icon,null,"accessibility_new")),r.a.createElement(y.Input,{onChange:this.handleRegisterFieldChange,name:"username",s:12,label:"Username"},r.a.createElement(y.Icon,null,"account_circle")),r.a.createElement(y.Input,{onChange:this.handleRegisterFieldChange,name:"password",type:"password",label:"password",s:12},r.a.createElement(y.Icon,null,"https")),r.a.createElement(y.Input,{onChange:this.handleRegisterFieldChange,name:"email",type:"email",label:"Email",s:12},r.a.createElement(y.Icon,null,"email"))),r.a.createElement(y.Button,{type:"submit"},"Register"))))}}]),t}(a.Component),G={actionForRegister:function(e){return Object(h.a)(m.a.mark(function t(){var n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.register(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)}))},setLogin:M,createButDontSave:B,noteInitialization:P},W=Object(u.b)(null,G)(_),H=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(v.a)(this,Object(g.a)(t).call(this))).handleLogin=function(){var t=Object(h.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,e.props.actionForLogin({username:e.state.username,password:e.state.password});case 4:return a=t.sent,t.next=7,e.props.noteInitialization(a);case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),e.setState({error:"Bad credentials"}),setTimeout(function(){e.setState({error:null})},5e3);case 13:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e){return t.apply(this,arguments)}}(),e.handleLoginFieldChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.handleRegisterRedirect=function(){var t=Object(h.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.setState({register:!0});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.state={username:"",password:"",user:null,error:null,register:!1},e}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.state.register?r.a.createElement("div",null,r.a.createElement(W,null)):r.a.createElement("div",null,r.a.createElement(y.Navbar,{className:"indigo",brand:"my-stash",right:!0}),r.a.createElement("div",{className:"container centered"},r.a.createElement("div",null,this.state.error),r.a.createElement("form",{onSubmit:this.handleLogin},r.a.createElement("div",null,"username:",r.a.createElement(y.Input,{type:"text",name:"username",value:this.state.username,onChange:this.handleLoginFieldChange},r.a.createElement(y.Icon,null,"account_circle"))),r.a.createElement("div",null,"password:",r.a.createElement(y.Input,{type:"password",name:"password",value:this.state.password,onChange:this.handleLoginFieldChange},r.a.createElement(y.Icon,null,"https"))),r.a.createElement(y.Button,{type:"submit"},"Login")),r.a.createElement("div",null,r.a.createElement("br",null),"Dont have account? ",r.a.createElement("a",{onClick:this.handleRegisterRedirect,href:"/register"},"Register here"))))}}]),t}(a.Component),z={actionForLogin:function(e){return function(){var t=Object(h.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.login(e);case 2:return a=t.sent,F.setToken(a.id,a.token),t.next=6,window.localStorage.setItem("loggedMystashappUser",JSON.stringify(a));case 6:return n({type:"LOGIN",data:a}),t.abrupt("return",a);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},noteInitialization:P},J=Object(u.b)(null,z)(H),Y=function(e){return{type:"FILTER",filter:e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;"FILTER"===t.type&&(e=t.filter);return e},K=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"handleClick",value:function(e){this.props.handleChange(e.tag)}},{key:"render",value:function(){var e=this,t=this.props.note;if(void 0===t||void 0===t.id)return r.a.createElement("div",null);var n=t.tags;void 0===n&&(n=["EI TAGIA","HUOM"]);var a=t.content.length<=150?t.content:t.content.substring(0,150)+"...";return r.a.createElement("div",{className:"card-panel deep-purple lighten-4"},r.a.createElement(y.Row,null,r.a.createElement(y.Col,null,r.a.createElement(O.a,{to:"/notes/".concat(t.id)}," ",r.a.createElement("span",{s:12,className:"blue-text text-darken-2"},t.title," ")," ")),r.a.createElement(y.Col,null,n.join(",").split(",").map(function(t){return r.a.createElement(y.Chip,{key:t,onClick:function(){e.handleClick({tag:t})}}," ",t," ")}))),r.a.createElement("div",null,a.split("\n").map(function(e,t){return r.a.createElement("span",{key:t}," ",e," ",r.a.createElement("br",null)," ")})))}}]),t}(r.a.Component),q=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).handleSelect=function(){var e=Object(h.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t&&null===t){e.next=2;break}return e.abrupt("return",n.setState({page:t}));case 2:return e.abrupt("return",n.setState({}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.removeDuplicatesUsingSet=function(e){return Array.from(new Set(e))},n.state={page:1,notesPerPage:10},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componenWillMount",value:function(){P(this.props.user)}},{key:"render",value:function(){var e=this,t=1,n=this.props.filter,a=this.props.notes,c=a;if(n&&void 0!==n)try{var s=a.filter(function(e){return e.title.toLowerCase().includes(n.toLowerCase())}),i=a.filter(function(e){return e.tags.join(" ").toLowerCase().includes(n.toLowerCase())});c=this.removeDuplicatesUsingSet(s.concat(i))}catch(l){console.log(l)}var o=(this.state.page-1)*this.state.notesPerPage,u=o+this.state.notesPerPage;return c=c.slice(o,u),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement(y.Pagination,{items:Math.ceil(this.props.notes.length/this.state.notesPerPage),activePage:this.state.page,maxButtons:10,onSelect:this.handleSelect})),r.a.createElement("ul",null,c.map(function(n){return r.a.createElement("li",{key:t++},r.a.createElement("div",null,r.a.createElement(K,{note:n,Link:e.props.Link,Key:t,handleChange:e.props.actionForFilter})))})),r.a.createElement("div",{className:"center"},r.a.createElement(y.Pagination,{items:Math.ceil(this.props.notes.length/this.state.notesPerPage),activePage:this.state.page,maxButtons:10,onSelect:this.handleSelect})))}}]),t}(r.a.Component),Q={noteInitialization:P,actionForFilter:Y,createButDontSave:B},X=Object(u.b)(function(e){return{user:e.user,notes:e.notes,filter:e.filter}},Q)(q),Z=function(e,t){return function(){var n=Object(h.a)(m.a.mark(function n(a){return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"NOTIFY",data:e}),setTimeout(function(){a({type:"HIDE_NOTIFICATION"})},1e3*t);case 2:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},$=function(e,t){return function(){var n=Object(h.a)(m.a.mark(function n(a){return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"ERROR",data:e}),setTimeout(function(){a({type:"HIDE_ERROR"})},1e3*t);case 2:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTIFY":case"ERROR":return[e=t.data,t.data];case"HIDE_NOTIFICATION":case"HIDE_ERROR":return e="";default:return e}},te=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).deleteNote=function(){var e=Object(h.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),window.confirm("Are you sure you want to delete '".concat(n.state.title,"' ?"))){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,n.props.removeNote(n.state.id);case 7:if(a=e.sent,console.log("DEL ID = "+a),"number"!==typeof a){e.next=14;break}return e.next=12,n.props.notify("you deleted '".concat(n.state.title,"'"),10);case 12:return e.next=14,n.setState({redirect:!0});case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.state={redirect:!1,id:"",title:"",content:"",tags:[]},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.getOne(this.props.match.params.id);case 3:return t=e.sent,e.next=6,this.setState({id:t[0].id,title:t[0].title,content:t[0].content,tags:t[0].tags});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),this.props.errormessage("Couldn't find note '".concat(this.props.match.params.id,"'"),5),this.setState({redirect:!0});case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.redirect)return r.a.createElement("div",null,r.a.createElement(w.a,{to:"/"}));var e=this.state.tags.join(),t=this.state.content,n="/notes/edit/"+this.state.id;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,this.state.title),r.a.createElement("p",null,"[",e,"]"),r.a.createElement("div",null,t.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))})),r.a.createElement("div",null,r.a.createElement(O.a,{to:n},r.a.createElement(y.Button,{className:"deep orange"},"EDIT"),"\xa0"),r.a.createElement(y.Button,{className:"red accent-2",onClick:this.deleteNote},"DELETE")))}}]),t}(r.a.Component),ne={removeNote:function(e){return function(){var t=Object(h.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.erase(e);case 2:return a=t.sent,n({type:"REMOVE",data:e}),t.abrupt("return",a);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},notify:Z,errormessage:$},ae=Object(u.b)(null,ne)(te),re=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).handleSubmit=function(){var e=Object(h.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,{id:n.state.id,title:n.state.title,content:n.state.content,tags:n.state.tags};case 4:return a=e.sent,e.next=7,n.props.modifyNote(a);case 7:return e.next=9,n.props.notify("you modified '".concat(a.title,"'"),10);case 9:return n.setState({title:"",content:"",tags:[]}),e.next=12,n.setState({redirect:!0});case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),n.props.errormessage("ERROR WHILE EDITING NOTE",10);case 18:case"end":return e.stop()}},e,this,[[1,14]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){n.state.isMounted&&n.setState(Object(I.a)({},e.target.name,e.target.value))},n.handleContent=function(e){n.setState({content:e.target.value})},n.addTag=function(){var e=Object(h.a)(m.a.mark(function e(t){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,4;case 3:if(a=e.sent,0!==n.state.tagText.length&&!n.state.tags.includes(n.state.tagText)){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,n.state.tags;case 8:return r=e.sent,e.next=11,r.push(n.state.tagText);case 11:if(!(r.length>a)){e.next=15;break}n.props.notify("Maxium number of tags is '".concat(a,"'"),10),e.next=23;break;case 15:return e.prev=15,e.next=18,n.setState({tags:r,tagText:""});case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(15),n.props.errormessage("ERROR WHILE ADDING TAG",10);case 23:case"end":return e.stop()}},e,this,[[15,20]])}));return function(t){return e.apply(this,arguments)}}(),n.state={isMounted:!1,redirect:!1,tagText:"",id:"",title:"",content:"",tags:[]},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){var e=Object(h.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getOne(this.props.match.params.id);case 2:return t=e.sent,e.prev=3,e.next=6,this.setState({id:t[0].id,title:t[0].title,content:t[0].content,tags:t[0].tags.filter(function(e){return null!==e})});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),this.props.errormessage("Couldn't find note '".concat(this.props.match.params.id,"'"),5),this.setState({redirect:!0});case 12:case"end":return e.stop()}},e,this,[[3,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isMounted:!0});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(h.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isMounted:!1});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"removeTag",value:function(e){this.setState({tags:this.state.tags.filter(function(t){return t!==e})})}},{key:"render",value:function(){var e=this;if(this.state.redirect){return r.a.createElement("div",null,r.a.createElement(w.a,{to:"/"}))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h3",null,"Note tags\xa0"),r.a.createElement(y.Button,{className:"indigo",position:"right",delay:"50",tooltip:"Click tag name to remove"},"[?]")),r.a.createElement("div",null,r.a.createElement(y.Row,null,r.a.createElement(y.Col,{s:12},this.state.tags.map(function(t){return r.a.createElement(y.Chip,{key:t,onClick:function(){e.removeTag(t)}}," ",t," ")})))),r.a.createElement("div",null,r.a.createElement("form",{id:"tagform",onSubmit:this.addTag},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("input",{name:"tagText",value:this.state.tagText,onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement(y.Button,{className:"deep orange",type:"submit",form:"tagform"},"Add tag"))),r.a.createElement("h2",null,"Edit note"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,"Title",r.a.createElement("br",null),r.a.createElement("input",{name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Content",r.a.createElement("br",null),r.a.createElement(y.Input,{type:"textarea",value:this.state.content,onChange:this.handleContent,rows:"20",cols:"60"}))),r.a.createElement("br",null),r.a.createElement(y.Button,{className:"red accent-2",type:"submit"},"Save")))}}]),t}(r.a.Component),ce={modifyNote:function(e){return function(){var t=Object(h.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.modify(e);case 2:return t.next=4,F.getOne(e.id);case 4:return a=t.sent,t.next=7,n({type:"MODIFY",data:a});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},notify:Z,errormessage:$},se=Object(u.b)(null,ce)(re),ie=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){n.state.isMounted&&n.setState(Object(I.a)({},e.target.name,e.target.value))},n.handleContent=function(e){n.setState({content:e.target.value})},n.addTag=function(){var e=Object(h.a)(m.a.mark(function e(t){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=4,0!==n.state.tagText.length&&!n.state.tags.includes(n.state.tagText)){e.next=4;break}return e.abrupt("return");case 4:if((r=n.state.tags).push(n.state.tagText),!(r.length>a)){e.next=9;break}return n.props.notify("Maxium number of tags is '".concat(a,"'"),10),e.abrupt("return");case 9:return e.prev=9,e.next=12,n.setState({tags:r,tagText:""});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),n.props.errormessage("ERROR WHILE ADDING TAG",10);case 17:case"end":return e.stop()}},e,this,[[9,14]])}));return function(t){return e.apply(this,arguments)}}(),n.handleSubmit=function(){var e=Object(h.a)(m.a.mark(function e(t){var a,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("click"),void 0!==n.state.tags&&0!==n.state.tags.length||!(n.state.tagText.length>0)){e.next=8;break}return e.next=5,[n.state.tagText];case 5:return a=e.sent,e.next=8,n.setState({tags:a});case 8:return e.prev=8,e.next=11,{title:n.state.title,content:n.state.content,tags:n.state.tags};case 11:return r=e.sent,e.next=14,n.props.createNote(r);case 14:return c=e.sent,e.next=17,n.props.notify("you created '".concat(r.title,"'"),10);case 17:return n.setState({title:"",content:"",tag_id:""}),e.next=20,n.setState({redirect_url:"/notes/"+c});case 20:return e.next=22,n.setState({redirect:!0});case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(8),n.props.errormessage("ERROR WHILE ADDING NOTE",10);case 27:case"end":return e.stop()}},e,this,[[8,24]])}));return function(t){return e.apply(this,arguments)}}(),n.state={isMounted:!1,redirect:!1,redirect_url:"",tagText:"",title:"",content:"",tags:[]},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.setState({isMounted:!0})}},{key:"componentWillUnmount",value:function(){this.setState({isMounted:!1})}},{key:"removeTag",value:function(e){this.setState({tags:this.state.tags.filter(function(t){return t!==e})})}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement("div",null,r.a.createElement(w.a,{to:this.state.redirect_url})):r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Create new note"),r.a.createElement("form",{id:"noteform",onSubmit:this.handleSubmit},r.a.createElement("div",null,"Title",r.a.createElement("br",null),r.a.createElement("input",{name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Content",r.a.createElement("br",null),r.a.createElement(y.Input,{type:"textarea",value:this.state.content,onChange:this.handleContent}))),r.a.createElement("br",null)),r.a.createElement("div",null,this.state.tags.map(function(t){return r.a.createElement(y.Button,{key:t,onClick:function(){e.removeTag(t)}}," ",t," ")})),r.a.createElement("form",{id:"tagform",onSubmit:this.addTag},r.a.createElement(y.Button,{className:"deep orange",type:"submit",form:"tagform"},"Add tag"),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("input",{name:"tagText",value:this.state.tagText,onChange:this.handleChange}))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(y.Button,{form:"noteform",className:"red accent-2",type:"submit"},"Create")))}}]),t}(r.a.Component),oe={createNote:function(e){return function(){var t=Object(h.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.create(e);case 2:return a=t.sent,console.log(a[0]),n({type:"CREATE",data:a[0]}),t.abrupt("return",a[0].id);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},notify:Z,errormessage:$},ue=Object(u.b)(null,oe)(ie),le=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={username:"",realname:"",tier:"",email:""},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){this.setState({username:this.props.user.username,realname:this.props.user.realname,tier:1===this.props.user.tier?"User":"Unknown",email:this.props.user.email})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(y.Row,null,r.a.createElement(y.Col,{s:12,m:5},r.a.createElement(y.CardPanel,{className:"red accent-2 black-text"},r.a.createElement("span",null,"Currently can't change your information"))),r.a.createElement(y.Col,{s:12,m:7},r.a.createElement(y.CardPanel,{className:"blue lighten-3 black-text"},r.a.createElement(y.Row,null,r.a.createElement(y.Col,null,"Username: "),r.a.createElement(y.Col,null,this.state.username)),r.a.createElement(y.Row,null,r.a.createElement(y.Col,null,"Name: "),r.a.createElement(y.Col,null,this.state.realname)),r.a.createElement(y.Row,null,r.a.createElement(y.Col,null,"Level: "),r.a.createElement(y.Col,null,this.state.tier)),r.a.createElement(y.Row,null,r.a.createElement(y.Col,null,"Email: "),r.a.createElement(y.Col,null,this.state.email))))))}}]),t}(a.Component),pe=Object(u.b)(function(e){return{user:e.user}})(le),me=function(e){function t(){return Object(d.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.notification[0];return void 0===e||e.length<=1?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement("strong",null,e))}}]),t}(r.a.Component),he=Object(u.b)(function(e){return{notification:e.notification}})(me),de=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(v.a)(this,Object(g.a)(t).call(this))).init=function(t){var n=JSON.parse(t);e.props.setLogin(n),e.props.noteInitialization(n)},e.handleChange=function(t){t.preventDefault();var n=t.target.value;e.props.actionForFilter(n)},e.handleLogout=function(){var t=Object(h.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.preventDefault();case 2:return t.next=4,window.localStorage.removeItem("loggedMystashappUser");case 4:return t.next=6,e.props.actionForFilter("");case 6:return t.next=8,e.props.clearNotes();case 8:return t.next=10,e.props.actionForLogout();case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.handleSelect=function(t){return function(){switch(t){case 1:return e.setState({navigation:1});case 2:return e.setState({navigation:2});case 3:return e.setState({navigation:3});default:return e.state}}},e.state={navigation:1},e}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){var e=window.localStorage.getItem("loggedMystashappUser");!e||this.props.user&&!this.props.user.token||(this.init(e),this.setState({first:!1})),document.title="my-stash"}},{key:"render",value:function(){var e=this;return this.props.user?r.a.createElement("div",null,r.a.createElement(he,null),r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(C,{currentPage:this.state.navigation,handleSelect:this.handleSelect,handleChange:this.handleChange,handleLogout:this.handleLogout}),r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(X,{Link:O.a,Route:b.a,handleChange:e.handleChange})}}),r.a.createElement(b.a,{path:"/login",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(b.a,{path:"/create",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(b.a,{path:"/settings",render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(b.a,{exact:!0,path:"/notes/:id",component:ae}),r.a.createElement(b.a,{exact:!0,path:"/notes/edit/:id",component:se})))):r.a.createElement(J,null)}}]),t}(a.Component),fe={noteInitialization:P,actionForFilter:Y,setLogin:M,actionForLogout:function(){return function(){var e=Object(h.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT",data:null});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},clearNotes:function(){return function(){var e=Object(h.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR",data:[]});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},ve=Object(u.b)(function(e){return{notes:e.notes,filter:e.filter,user:e.user}},fe)(de),ge=Object(i.c)({user:A,notes:U,filter:V,notification:ee}),Ee=Object(i.d)(ge,Object(i.a)(o.a));s.a.render(r.a.createElement(l.a,null,r.a.createElement(u.a,{store:Ee},r.a.createElement(ve,null))),document.getElementById("root"))},42:function(e,t,n){},57:function(e,t,n){e.exports=n(128)}},[[57,2,1]]]);
//# sourceMappingURL=main.bdcc43a5.chunk.js.map