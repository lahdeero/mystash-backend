(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(37),c=n.n(i),s=n(2),u=n.n(s),o=n(4),l=n(8),p=n(9),h=n(11),f=n(10),d=n(12),m=n(49),v=n(27),g=n(26),b=n(16),E=(n(73),n(5)),O=n(39),x=function(t){function e(){return Object(l.a)(this,e),Object(h.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement("input",{onChange:this.props.handleChange}))}}]),e}(r.a.Component),y=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={currentPage:1,handleSelect:t.handleSelect},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.Navbar,{className:"indigo",brand:"mystash",right:!0},r.a.createElement(O.IndexLinkContainer,{to:"/create"},r.a.createElement(E.NavItem,{eventkey:2},r.a.createElement(E.Icon,null,"note_add"))),r.a.createElement(O.IndexLinkContainer,{to:"/about"},r.a.createElement(E.NavItem,{eventkey:3},r.a.createElement(E.Icon,null,"settings")))),r.a.createElement(x,{handleChange:this.props.handleChange}))}}]),e}(r.a.Component),k=function(t){var e=t.note,n=t.Link;t.key;if(void 0===e||void 0===e.id)return r.a.createElement("div",null);var a=e.tagit;void 0===a&&(a=["EI TAGIA","HUOM"]);var i=e.sisalto;return r.a.createElement("div",{className:"card-panel deep-purple lighten-4"},r.a.createElement("h2",null,r.a.createElement(n,{to:"/notes/".concat(e.id)},e.otsikko)," | ",a.join(", ")," |"),r.a.createElement("div",null,i.split("\n").map(function(t,e){return r.a.createElement("span",{key:e},t,r.a.createElement("br",null))})))},j=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).handleSelect=function(){var t=Object(o.a)(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&null===e){t.next=2;break}return t.abrupt("return",n.setState({page:e}));case 2:return t.abrupt("return",n.setState({}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.state={page:1,notesPerPage:10},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=1,n=this.props.filter,a=this.props.notes.filter(function(t){return void 0!==t.otsikko||null}),i=[];if(n&&void 0!==n)try{var c=a.filter(function(t){return t.otsikko.toLowerCase().includes(n.toLowerCase())}).slice(0,10);i=a.filter(function(t){return void 0!==t.tagit[0]&&t.tagit.join(" ").includes(n)}).concat(c).slice().sort(function(t,e){return t.id>e.id}).filter(function(t,e,n){return e===n.indexOf(t)})}catch(o){console.log(o)}else i=a;var s=(this.state.page-1)*this.state.notesPerPage,u=s+this.state.notesPerPage;return i=i.slice(s,u),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement(E.Pagination,{items:Math.ceil(this.props.notes.length/this.state.notesPerPage),activePage:this.state.page,maxButtons:10,onSelect:this.handleSelect})),r.a.createElement("ul",null,i.map(function(n){return r.a.createElement("li",{key:e++},r.a.createElement("div",null,r.a.createElement(k,{note:n,Link:t.props.Link,Key:e})))})),r.a.createElement("div",{className:"center"},r.a.createElement(E.Pagination,{items:Math.ceil(this.props.notes.length/this.state.notesPerPage),activePage:this.state.page,maxButtons:10,onSelect:this.handleSelect})))}}]),e}(r.a.Component),w=n(55),S=n(18),T=n.n(S),C="/api/notes/directory",I={getAll:function(){var t=Object(o.a)(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.get(C+"/all");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getOne:function(){var t=Object(o.a)(u.a.mark(function t(e){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.get(C+"/note/"+e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),create:function(){var t=Object(o.a)(u.a.mark(function t(e){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.post(C,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),modify:function(){var t=Object(o.a)(u.a.mark(function t(e){var n,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.id;case 2:return n=t.sent,t.next=5,T.a.put(C+"/note/"+n,e);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),erase:function(t){return T.a.delete("".concat(C,"/note/").concat(t)).then(function(t){return t.data})}},N=n(40),R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CREATE":return[].concat(Object(N.a)(t),[{id:e.data.id,title:e.data.otsikko,sisalto:e.data.sisalto,tagit:e.data.tagit}]);case"MODIFY":return t.map(function(t){return t.id===e.data[0].id?e.data[0]:t});case"REMOVE":return[].concat(Object(N.a)(t.filter(function(t){return t.id!==e.data})),[e.data]);case"INIT_NOTES":return e.data;default:return t}},M=function(t,e){return function(){var n=Object(o.a)(u.a.mark(function n(a){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"NOTIFY",data:t}),setTimeout(function(){a({type:"HIDE_NOTIFICATION"})},1e3*e);case 2:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}()},D=function(t,e){return function(){var n=Object(o.a)(u.a.mark(function n(a){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"ERROR",data:t}),setTimeout(function(){a({type:"HIDE_ERROR"})},1e3*e);case 2:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}()},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"NOTIFY":case"ERROR":return[t=e.data,e.data];case"HIDE_NOTIFICATION":case"HIDE_ERROR":return t="";default:return t}},P=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).deleteNote=function(){var t=Object(o.a)(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),window.confirm("Are you sure you want to delete '".concat(n.state.title,"' ?"))){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,n.setState({deletethis:!0});case 7:return t.next=9,n.setState({redirect:!0});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.state={redirect:!1,deletethis:!1,id:"",title:"",content:"",tags:[]},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=Object(o.a)(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(this.props.match),console.log(this.props.match.params.id),this.state.redirect){t.next=17;break}return t.prev=3,t.next=6,I.getOne(this.props.match.params.id);case 6:return e=t.sent,console.log(e),t.next=10,this.setState({id:e[0].id,title:e[0].otsikko,content:e[0].sisalto,tags:e[0].tagit});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(3),this.props.errormessage("Couldn't find note '".concat(this.props.match.params.id,"'"),5),this.setState({redirect:!0}),console.log(t.t0);case 17:case"end":return t.stop()}},t,this,[[3,12]])}));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var t=Object(o.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.redirect||!this.state.deletethis){t.next=5;break}return t.next=3,this.props.removeNote(this.state.id);case 3:return t.next=5,this.props.notify("you deleted '".concat(this.state.title,"'"),10);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.redirect)return r.a.createElement("div",null,r.a.createElement(w.a,{to:"/"}));var t=this.state.tags.join(),e=this.state.content,n="/notes/edit/"+this.state.id;return r.a.createElement("div",null,r.a.createElement("h2",null,this.state.title),r.a.createElement("p",null,"[",t,"]"),r.a.createElement("div",null,e.split("\n").map(function(t,e){return r.a.createElement("span",{key:e},t,r.a.createElement("br",null))})),r.a.createElement("div",null,r.a.createElement(g.a,{to:n},r.a.createElement(E.Button,null,"EDIT"),"\xa0"),r.a.createElement(E.Button,{onClick:this.deleteNote},"DELETE")))}}]),e}(r.a.Component),L={removeNote:function(t){return function(){var e=Object(o.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.erase(t);case 2:n({type:"REMOVE",data:t});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},notify:M,errormessage:D},B=Object(b.b)(null,L)(P),F=n(33),_=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).handleSubmit=function(){var t=Object(o.a)(u.a.mark(function t(e){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,{id:n.state.id,otsikko:n.state.title,sisalto:n.state.content,tagit:n.state.tags};case 4:return a=t.sent,t.next=7,n.props.modifyNote(a);case 7:return t.next=9,n.props.notify("you modified '".concat(a.otsikko,"'"),10);case 9:return n.setState({title:"",content:"",tags:[]}),t.next=12,n.setState({redirect:!0});case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),n.props.errormessage("ERROR WHILE EDITING NOTE",10);case 18:case"end":return t.stop()}},t,this,[[1,14]])}));return function(e){return t.apply(this,arguments)}}(),n.handleChange=function(t){n.state.isMounted&&n.setState(Object(F.a)({},t.target.name,t.target.value))},n.handleContent=function(t){n.state.isMounted&&n.setState({content:t.target.value})},n.addTag=function(){var t=Object(o.a)(u.a.mark(function t(e){var a,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,4;case 3:if(a=t.sent,0!==n.state.tagText.length&&!n.state.tags.includes(n.state.tagText)){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,n.state.tags;case 8:return r=t.sent,t.next=11,r.push(n.state.tagText);case 11:if(!(r.length>a)){t.next=15;break}n.props.notify("Maxium number of tags is '".concat(a,"'"),10),t.next=23;break;case 15:return t.prev=15,t.next=18,n.setState({tags:r,tagText:""});case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(15),n.props.errormessage("ERROR WHILE ADDING TAG",10);case 23:case"end":return t.stop()}},t,this,[[15,20]])}));return function(e){return t.apply(this,arguments)}}(),n.state={isMounted:!1,redirect:!1,tagText:"",id:"",title:"",content:"",tags:[]},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=Object(o.a)(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isMounted:!0}),t.next=3,I.getOne(this.props.match.params.id);case 3:return e=t.sent,t.prev=4,t.next=7,this.setState({id:e[0].id,title:e[0].otsikko,content:e[0].sisalto,tags:e[0].tagit.filter(function(t){return null!==t})});case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(4),this.props.errormessage("Couldn't find note '".concat(this.props.match.params.id,"'"),5),this.setState({redirect:!0});case 13:case"end":return t.stop()}},t,this,[[4,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var t=Object(o.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({isMounted:!1});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"removeTag",value:function(t){this.setState({tags:this.state.tags.filter(function(e){return e!==t})})}},{key:"render",value:function(){var t=this;if(this.state.redirect){return r.a.createElement("div",null,r.a.createElement(w.a,{to:"/"}))}return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"Note tags\xa0"),r.a.createElement(E.Button,null,"[?]")),r.a.createElement("div",null,this.state.tags.map(function(e){return r.a.createElement(E.Button,{key:e,onClick:function(){t.removeTag(e)}}," ",e," ")})),r.a.createElement("div",null,r.a.createElement("form",{id:"tagform",onSubmit:this.addTag},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("input",{name:"tagText",value:this.state.tagText,onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement(E.Button,{type:"submit",form:"tagform"},"Add tag"))),r.a.createElement("h2",null,"Edit note"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,"Title",r.a.createElement("br",null),r.a.createElement("input",{name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Content",r.a.createElement("br",null),r.a.createElement(E.Input,{type:"textarea",value:this.state.content,onChange:this.handleContent,rows:"20",cols:"60"}))),r.a.createElement("br",null),r.a.createElement(E.Button,{type:"submit"},"Edit Note")))}}]),e}(r.a.Component),W={modifyNote:function(t){return function(){var e=Object(o.a)(u.a.mark(function e(n){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.modify(t);case 2:return e.next=4,I.getOne(t.id);case 4:return a=e.sent,e.next=7,n({type:"MODIFY",data:a});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},notify:M,errormessage:D},H=Object(b.b)(null,W)(_),G=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).handleChange=function(t){n.state.isMounted&&n.setState(Object(F.a)({},t.target.name,t.target.value))},n.handleContent=function(t){n.setState({content:t.target.value})},n.addTag=function(){var t=Object(o.a)(u.a.mark(function t(e){var a,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),a=4,0!==n.state.tagText.length&&!n.state.tags.includes(n.state.tagText)){t.next=4;break}return t.abrupt("return");case 4:if((r=n.state.tags).push(n.state.tagText),!(r.length>a)){t.next=9;break}return n.props.notify("Maxium number of tags is '".concat(a,"'"),10),t.abrupt("return");case 9:return t.prev=9,t.next=12,n.setState({tags:r,tagText:""});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(9),n.props.errormessage("ERROR WHILE ADDING TAG",10);case 17:case"end":return t.stop()}},t,this,[[9,14]])}));return function(e){return t.apply(this,arguments)}}(),n.handleSubmit=function(){var t=Object(o.a)(u.a.mark(function t(e){var a,r,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),void 0!==n.state.tags&&0!==n.state.tags.length||!(n.state.tagText.length>0)){t.next=7;break}return t.next=4,[n.state.tagText];case 4:return a=t.sent,t.next=7,n.setState({tags:a});case 7:return t.prev=7,t.next=10,{otsikko:n.state.title,sisalto:n.state.content,tagit:n.state.tags};case 10:return r=t.sent,t.next=13,n.props.createNote(r);case 13:return i=t.sent,t.next=16,n.props.notify("you created '".concat(r.otsikko,"'"),10);case 16:return n.setState({title:"",content:"",tag_id:""}),t.next=19,n.setState({redirect_url:"/notes/"+i});case 19:return t.next=21,n.setState({redirect:!0});case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(7),n.props.errormessage("ERROR WHILE ADDING NOTE",10);case 26:case"end":return t.stop()}},t,this,[[7,23]])}));return function(e){return t.apply(this,arguments)}}(),n.state={isMounted:!1,redirect:!1,redirect_url:"",tagText:"",title:"",content:"",tags:[]},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.setState({isMounted:!0})}},{key:"componentWillUnmount",value:function(){this.setState({isMounted:!1})}},{key:"removeTag",value:function(t){this.setState({tags:this.state.tags.filter(function(e){return e!==t})})}},{key:"render",value:function(){var t=this;return this.state.redirect?r.a.createElement("div",null,r.a.createElement(w.a,{to:this.state.redirect_url})):r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Create new note"),r.a.createElement("form",{id:"noteform",onSubmit:this.handleSubmit},r.a.createElement("div",null,"Title",r.a.createElement("br",null),r.a.createElement("input",{name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Content",r.a.createElement("br",null),r.a.createElement(E.Input,{type:"textarea",value:this.state.content,onChange:this.handleContent}))),r.a.createElement("br",null)),r.a.createElement("div",null,this.state.tags.map(function(e){return r.a.createElement(E.Button,{key:e,onClick:function(){t.removeTag(e)}}," ",e," ")})),r.a.createElement("form",{id:"tagform",onSubmit:this.addTag},r.a.createElement(E.Button,{type:"submit",form:"tagform"},"Add tag"),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("input",{name:"tagText",value:this.state.tagText,onChange:this.handleChange}))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(E.Button,{type:"submit",form:"noteform"},"Create Note")))}}]),e}(r.a.Component),U={createNote:function(t){return function(){var e=Object(o.a)(u.a.mark(function e(n){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.create(t);case 2:return a=e.sent,n({type:"CREATE",data:a[0]}),e.abrupt("return",a[0].id);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},notify:M,errormessage:D},Y=Object(b.b)(null,U)(G),z=function(){return T.a.get("/api/systeminfo").then(function(t){return t.data})},J=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={isMounted:!1,sysinfo:[]},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentWillMount",value:function(){var t=Object(o.a)(u.a.mark(function t(){var e=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:z().then(function(t){return e.setState({isMounted:!0,sysinfo:t})});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var t=Object(o.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({isMounted:!1});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"),r.a.createElement("br",null),this.state.sysinfo[0],r.a.createElement("br",null),this.state.sysinfo[1])}}]),e}(a.Component),V=function(t){function e(){return Object(l.a)(this,e),Object(h.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props.notification[0];return void 0===t||t.length<=1?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement("strong",null,t))}}]),e}(r.a.Component),K=Object(b.b)(function(t){return{notification:t.notification}})(V),q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;"FILTER"===e.type&&(t=e.filter);return t},Q=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(h.a)(this,Object(f.a)(e).call(this))).handleSelect=function(e){return function(){switch(e){case 1:return t.setState({navigation:1});case 2:return t.setState({navigation:2});case 3:return t.setState({navigation:3});default:return t.state}}},t.handleChange=function(e){e.preventDefault();var n=e.target.value;t.props.actionForFilter(n)},t.state={isMounted:!1,navigation:1},t}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=Object(o.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.isMounted){t.next=6;break}return t.next=3,this.props.noteInitialization();case 3:return t.next=5,this.setState({isMounted:!0});case 5:document.title="my-stash";case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var t=Object(o.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({isMounted:!1});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(y,{currentPage:this.state.navigation,handleSelect:this.handleSelect,handleChange:this.handleChange}),r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,{Link:g.a,Route:v.a,notes:t.props.notes,filter:t.props.filter})}}),r.a.createElement(v.a,{path:"/create",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(v.a,{path:"/about",render:function(){return r.a.createElement(J,null)}}),r.a.createElement("br",null),r.a.createElement(v.a,{exact:!0,path:"/notes/:id",component:B}),r.a.createElement(v.a,{exact:!0,path:"/notes/edit/:id",component:H}))))}}]),e}(a.Component),X={noteInitialization:function(){return function(){var t=Object(o.a)(u.a.mark(function t(e){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.getAll();case 2:n=t.sent,e({type:"INIT_NOTES",data:n});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},actionForFilter:function(t){return{type:"FILTER",filter:t}}},Z=Object(b.b)(function(t){return{notes:t.notes,filter:t.filter}},X)(Q),$=n(21),tt=n(58),et=Object($.c)({notes:R,filter:q,notification:A}),nt=Object($.d)(et,Object($.a)(tt.a));c.a.render(r.a.createElement(m.a,null,r.a.createElement(b.a,{store:nt},r.a.createElement(Z,null))),document.getElementById("root"))},59:function(t,e,n){t.exports=n(134)},73:function(t,e,n){}},[[59,2,1]]]);
//# sourceMappingURL=main.2e06b4c4.chunk.js.map