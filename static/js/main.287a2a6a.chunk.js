(this.webpackJsonp446final=this.webpackJsonp446final||[]).push([[0],{17:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(2),a=n.n(s),d=n(28),i=n.n(d),o=(n(38),n(26)),l=n(7),r=n(8),j=n(10),u=n(9),h=(n(39),n(16)),p=n(3),b=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).getStyle=function(){return{background:"#E3EFFF",padding:"40px",border:"1px black solid",textDecoration:e.props.todo.completed?"line-through":"none",margin:"1%"}},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{style:this.getStyle(),children:[Object(c.jsx)("p",{style:m,children:this.props.todo.title}),Object(c.jsxs)("p",{style:x,children:[Object(c.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,this.props.todo.id)})," Done"]})," "," ",Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:this.props.todo.subtask1}),Object(c.jsx)("li",{children:this.props.todo.subtask2}),Object(c.jsx)("li",{children:this.props.todo.subtask3})]}),Object(c.jsxs)("p",{style:O,children:[Object(c.jsx)("button",{onClick:this.props.delTodo.bind(this,this.props.todo.id),style:k,children:"x"})," Remove Task"]})]})}}]),n}(s.Component),m={textAlign:"left",marginTop:"-3%"},x={float:"right"},O={marginBottom:"-3%",fontSize:"12px"},k={background:"#7CB1FF",color:"#fff",border:"none",borderRadius:"50%",padding:"5px 9px"},C=b,f=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return Object(c.jsx)(C,{todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo},t.id)}))}}]),n}(s.Component),g=n(29),v=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={title:"",sub1:"",sub2:"",sub3:""},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title,e.state.sub1,e.state.sub2,e.state.sub3)},e.onChange=function(t){return e.setState(Object(g.a)({},t.target.name,t.target.value))},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(c.jsx)("input",{type:"text",name:"title",style:{flex:"10",padding:"3px"},placeholder:"Add Task...",value:this.state.task,onChange:this.onChange}),Object(c.jsx)("input",{type:"text",name:"sub1",style:{flex:"3",padding:"3px"},placeholder:"Add Subtask...",value:this.state.sub1,onChange:this.onChange}),Object(c.jsx)("input",{type:"text",name:"sub2",style:{flex:"3",padding:"3px"},placeholder:"Add Subtask...",value:this.state.sub2,onChange:this.onChange}),Object(c.jsx)("input",{type:"text",name:"sub3",style:{flex:"3",padding:"3px"},placeholder:"Add Subtask...",value:this.state.sub3,onChange:this.onChange}),Object(c.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"2"}})]})})}}]),n}(s.Component),y=n(19),T=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).changeMsg=function(e){e.preventDefault(),c.setState({msg:"You : "+c.state.temp})},c.state={msg:"",temp:""},c.handleChange=c.handleChange.bind(Object(y.a)(c)),c}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState({temp:e.target.value})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{style:E,children:"Chatbox - User"}),Object(c.jsxs)("section",{className:"chatArea",children:[Object(c.jsx)("p",{children:"\xa0"}),Object(c.jsx)("p",{children:"\xa0"}),Object(c.jsx)("p",{children:"\xa0"}),Object(c.jsx)("p",{children:"\xa0"}),Object(c.jsx)("p",{children:"\xa0"}),Object(c.jsx)("p",{children:"\xa0"}),Object(c.jsx)("p",{children:"\xa0"}),Object(c.jsx)("p",{children:"\xa0"}),Object(c.jsx)("p",{children:"Tim : Have we finished the first task yet?"}),Object(c.jsx)("p",{children:this.state.msg})]}),Object(c.jsx)("section",{className:"textArea",children:Object(c.jsxs)("form",{onSubmit:this.changeMsg,children:[Object(c.jsx)("input",{type:"text",id:"chats",className:"chatTextArea",value:this.state.value,name:"chatbox",placeholder:"type here...",onChange:this.handleChange}),Object(c.jsx)("input",{className:"buttons",type:"submit",value:"Submit"})]})})]})}}]),n}(s.Component),E={border:"#7CB1FF solid 0.25rem",padding:"10px",margin:"0px",width:"88%"},N=T;var F=n.p+"static/media/Calendar.73e37b42.png";var S=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Messenger"}),Object(c.jsx)("p",{children:"work in progress page... go send messeges somwhere else..."})]})},A=(n(17),n(32)),M=n(20),I=n(15),D=function(){return Object(c.jsxs)("div",{className:"form-comp cfb",children:[Object(c.jsx)("h1",{children:"Sign in to your account"}),Object(c.jsxs)("form",{className:"sign-up-form cfb",children:[Object(c.jsx)("label",{children:Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)("div",{className:"search__bar",children:[Object(c.jsx)(M.a,{className:"fa"}),Object(c.jsx)("input",{className:"input",placeholder:"Email"})]})})}),Object(c.jsx)("label",{children:Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)("div",{className:"search__bar",children:[Object(c.jsx)(I.a,{className:"fa"}),Object(c.jsx)("input",{className:"input",placeholder:"Password"})]})})}),Object(c.jsx)("br",{}),Object(c.jsx)(h.b,{to:"../",children:Object(c.jsx)("button",{className:"button1",children:"Sign In"})})]})]})},B=n(31),H=function(){return Object(c.jsxs)("div",{className:"form-comp cfb",children:[Object(c.jsx)("h1",{children:"Create your account"}),Object(c.jsxs)("form",{className:"sign-up-form cfb",children:[Object(c.jsx)("label",{children:Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)("div",{className:"search__bar",children:[Object(c.jsx)(B.a,{className:"fa"}),Object(c.jsx)("input",{className:"input",placeholder:"Your Name"})]})})}),Object(c.jsx)("label",{children:Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)("div",{className:"search__bar",children:[Object(c.jsx)(M.a,{className:"fa"}),Object(c.jsx)("input",{className:"input",placeholder:"Email"})]})})}),Object(c.jsx)("label",{children:Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)("div",{className:"search__bar",children:[Object(c.jsx)(I.a,{className:"fa"}),Object(c.jsx)("input",{className:"input",placeholder:"Password"})]})})}),Object(c.jsx)("label",{children:Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)("div",{className:"search__bar",children:[Object(c.jsx)(I.a,{className:"fa"}),Object(c.jsx)("input",{className:"input",placeholder:"Confirm Password"})]})})}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"button1",children:"Sign Up"})]})]})},L=n(25),w=function(){var e=Object(s.useState)(!1),t=Object(A.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"Container cfb",children:[Object(c.jsxs)("div",{className:function(){var e=["banner-side cfb"];return n&&e.push("send-right"),e.join(" ")}(),children:[Object(c.jsx)(L.a,{className:"icon"}),n?Object(c.jsx)("h2",{children:"Already have an account?"}):Object(c.jsx)("h2",{children:"Do not have an account? "}),Object(c.jsx)("button",{className:"button1",onClick:function(){return a(!n)},children:n?"Sign In":"Create Account"})]}),Object(c.jsx)("div",{className:function(){var e=["form-side cfb"];return n&&e.push("send-left"),e.join(" ")}(),children:n?Object(c.jsx)(H,{}):Object(c.jsx)(D,{})})]})},_=function(){return Object(c.jsx)("div",{className:"App cfb",children:Object(c.jsx)(w,{})})},P=(n(45),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).task="",e.addtotask1=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct1").appendChild(c).appendChild(s),e.task=""},e.addtotask2=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct2").appendChild(c).appendChild(s),e.task=""},e.addtotask3=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct3").appendChild(c).appendChild(s),e.task=""},e.addtotask4=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct4").appendChild(c).appendChild(s),e.task=""},e.addtotask5=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct5").appendChild(c).appendChild(s),e.task=""},e.addtotask6=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct6").appendChild(c).appendChild(s),e.task=""},e.addtotask7=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct7").appendChild(c).appendChild(s),e.task=""},e.addtotask8=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct8").appendChild(c).appendChild(s),e.task=""},e.addtotask9=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct9").appendChild(c).appendChild(s),e.task=""},e.addtotask10=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct10").appendChild(c).appendChild(s),e.task=""},e.addtotask11=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct11").appendChild(c).appendChild(s),e.task=""},e.addtotask12=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct12").appendChild(c).appendChild(s),e.task=""},e.addtotask13=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct13").appendChild(c).appendChild(s),e.task=""},e.addtotask14=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct14").appendChild(c).appendChild(s),e.task=""},e.addtotask15=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct15").appendChild(c).appendChild(s),e.task=""},e.addtotask16=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct16").appendChild(c).appendChild(s),e.task=""},e.addtotask17=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct17").appendChild(c).appendChild(s),e.task=""},e.addtotask18=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct18").appendChild(c).appendChild(s),e.task=""},e.addtotask19=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct19").appendChild(c).appendChild(s),e.task=""},e.addtotask20=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct20").appendChild(c).appendChild(s),e.task=""},e.addtotask21=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct21").appendChild(c).appendChild(s),e.task=""},e.addtotask22=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct22").appendChild(c).appendChild(s),e.task=""},e.addtotask23=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct23").appendChild(c).appendChild(s),e.task=""},e.addtotask24=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct24").appendChild(c).appendChild(s),e.task=""},e.addtotask25=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct25").appendChild(c).appendChild(s),e.task=""},e.addtotask26=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct26").appendChild(c).appendChild(s),e.task=""},e.addtotask27=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct27").appendChild(c).appendChild(s),e.task=""},e.addtotask28=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct28").appendChild(c).appendChild(s),e.task=""},e.addtotask29=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct29").appendChild(c).appendChild(s),e.task=""},e.addtotask30=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct30").appendChild(c).appendChild(s),e.task=""},e.addtotask31=function(t){t.preventDefault();var n=document.createTextNode(e.task),c=document.createElement("li"),s=document.createElement("button");s.innerHTML="x",s.onclick=e.onClick,c.appendChild(n),c.append(" "),document.getElementById("oct31").appendChild(c).appendChild(s),e.task=""},e.onChnage=function(t){t.preventDefault(),e.task=t.target.value},e.onFocus=function(e){e.target.value=""},e.onClick=function(e){e.target.parentNode.remove()},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"month",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Sun"}),Object(c.jsx)("th",{children:"Mon"}),Object(c.jsx)("th",{children:"Tue"}),Object(c.jsx)("th",{children:"Wed"}),Object(c.jsx)("th",{children:"Thu"}),Object(c.jsx)("th",{children:"Fri"}),Object(c.jsx)("th",{children:"Sat"})]})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"27"}),Object(c.jsx)("td",{children:"28"}),Object(c.jsx)("td",{children:"29"}),Object(c.jsx)("td",{children:"30"}),Object(c.jsxs)("td",{children:["1",Object(c.jsx)("ul",{id:"oct1",children:Object(c.jsxs)("li",{children:["Task 1 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:this.addtotask1,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})})]}),Object(c.jsxs)("td",{children:["2",Object(c.jsx)("ul",{id:"oct2"}),Object(c.jsxs)("form",{onSubmit:this.addtotask2,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["3",Object(c.jsx)("ul",{id:"oct3"}),Object(c.jsxs)("form",{onSubmit:this.addtotask3,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:["4",Object(c.jsx)("ul",{id:"oct4"}),Object(c.jsxs)("form",{onSubmit:this.addtotask4,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["5",Object(c.jsx)("ul",{id:"oct5",children:Object(c.jsxs)("li",{children:["Task 2 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})}),Object(c.jsxs)("form",{onSubmit:this.addtotask5,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["6",Object(c.jsx)("ul",{id:"oct6"}),Object(c.jsxs)("form",{onSubmit:this.addtotask6,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["7",Object(c.jsx)("ul",{id:"oct7",children:Object(c.jsxs)("li",{children:["Task 3 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})}),Object(c.jsxs)("form",{onSubmit:this.addtotask7,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["8",Object(c.jsx)("ul",{id:"oct8"}),Object(c.jsxs)("form",{onSubmit:this.addtotask8,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["9",Object(c.jsx)("ul",{id:"oct9",children:Object(c.jsxs)("li",{children:["Task 4 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})}),Object(c.jsxs)("form",{onSubmit:this.addtotask9,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["10",Object(c.jsx)("ul",{id:"oct10"}),Object(c.jsxs)("form",{onSubmit:this.addtotask10,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:["11",Object(c.jsx)("ul",{id:"oct11"}),Object(c.jsxs)("form",{onSubmit:this.addtotask11,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["12",Object(c.jsx)("ul",{id:"oct12"}),Object(c.jsxs)("form",{onSubmit:this.addtotask12,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["13",Object(c.jsxs)("ul",{id:"oct13",children:[Object(c.jsxs)("li",{children:["Task 5 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]}),Object(c.jsxs)("li",{children:["Task 6 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})]}),Object(c.jsxs)("form",{onSubmit:this.addtotask13,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["14",Object(c.jsx)("ul",{id:"oct14"}),Object(c.jsxs)("form",{onSubmit:this.addtotask14,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["15",Object(c.jsx)("ul",{id:"oct15"}),Object(c.jsxs)("form",{onSubmit:this.addtotask15,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["16",Object(c.jsx)("ul",{id:"oct16",children:Object(c.jsxs)("li",{children:["Task 7 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})}),Object(c.jsxs)("form",{onSubmit:this.addtotask16,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["17",Object(c.jsx)("ul",{id:"oct17"}),Object(c.jsxs)("form",{onSubmit:this.addtotask17,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:["18",Object(c.jsx)("ul",{id:"oct18"}),Object(c.jsxs)("form",{onSubmit:this.addtotask18,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["19",Object(c.jsx)("ul",{id:"oct19",children:Object(c.jsxs)("li",{children:["Task 8 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})}),Object(c.jsxs)("form",{onSubmit:this.addtotask19,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["20",Object(c.jsx)("ul",{id:"oct20"}),Object(c.jsxs)("form",{onSubmit:this.addtotask20,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["21",Object(c.jsx)("ul",{id:"oct21",children:Object(c.jsxs)("li",{children:["Task 9 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})}),Object(c.jsxs)("form",{onSubmit:this.addtotask21,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["22",Object(c.jsx)("ul",{id:"oct22"}),Object(c.jsxs)("form",{onSubmit:this.addtotask22,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["23",Object(c.jsx)("ul",{id:"oct23"}),Object(c.jsxs)("form",{onSubmit:this.addtotask23,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["24",Object(c.jsx)("ul",{id:"oct24"}),Object(c.jsxs)("form",{onSubmit:this.addtotask24,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:["25",Object(c.jsx)("ul",{id:"oct25"}),Object(c.jsxs)("form",{onSubmit:this.addtotask25,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["26",Object(c.jsx)("ul",{id:"oct26"}),Object(c.jsxs)("form",{onSubmit:this.addtotask26,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["27",Object(c.jsx)("ul",{id:"oct27",children:Object(c.jsxs)("li",{children:["Task 10 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})}),Object(c.jsxs)("form",{onSubmit:this.addtotask27,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["28",Object(c.jsx)("ul",{id:"oct28"}),Object(c.jsxs)("form",{onSubmit:this.addtotask28,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["29",Object(c.jsx)("ul",{id:"oct29",children:Object(c.jsxs)("li",{children:["Task 11 ",Object(c.jsx)("button",{onClick:this.onClick,children:"x"})," "]})}),Object(c.jsxs)("form",{onSubmit:this.addtotask29,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["30",Object(c.jsx)("ul",{id:"oct30"}),Object(c.jsxs)("form",{onSubmit:this.addtotask30,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]}),Object(c.jsxs)("td",{children:["31",Object(c.jsx)("ul",{id:"oct31"}),Object(c.jsxs)("form",{onSubmit:this.addtotask31,children:[Object(c.jsx)("input",{type:"text",name:"task",onChange:this.onChnage,onFocus:this.onFocus}),Object(c.jsx)("input",{type:"submit",value:"Add Task"})]})]})]})]})]})})}}]),n}(s.Component)),J=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={todos:[{id:1+99*Math.random(),title:"Task 1",subtask1:"File Sharing",subtask2:"Backend management",subtask3:"Whats this then",completed:!1},{id:1+99*Math.random(),title:"Task 2",subtask1:"Color picking",subtask2:"Css management",subtask3:"HTML Implementation",completed:!1},{id:1+99*Math.random(),title:"Task 3",subtask1:"Front end framework",subtask2:"Javascript",subtask3:"Optimizing",completed:!1}],usermessage:[{msg:"You : "}]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(o.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t,n,c,s){var a={id:1+99*Math.random(),title:t,subtask1:n,subtask2:c,subtask3:s,completed:!1};e.setState({todos:[].concat(Object(o.a)(e.state.todos),[a])})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{children:Object(c.jsxs)(h.a,{children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:"leftItems",children:Object(c.jsx)("a",{href:"/TaskManagementDemo",children:"Home"})}),Object(c.jsx)("li",{className:"leftItems",children:Object(c.jsx)("a",{href:"/components/Month",children:"Scheduler"})}),Object(c.jsx)("li",{className:"leftItems",children:Object(c.jsx)("a",{href:"#",children:"Group"})}),Object(c.jsx)("li",{className:"leftItems",children:Object(c.jsx)(h.b,{to:"./messenger",children:"Messenger"})})]})}),Object(c.jsx)(p.a,{exact:!0,path:"/TaskManagementDemo",render:function(t){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("aside",{className:"aside1",children:Object(c.jsx)("a",{href:"/components/Month",children:Object(c.jsx)("img",{src:F,alt:"Calendar"})})}),Object(c.jsx)("aside",{className:"aside2",children:Object(c.jsx)(N,{usermessage:e.state.usermessage})}),Object(c.jsx)("section",{className:"section1",children:Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:"leftItems",children:Object(c.jsx)("a",{href:"#",children:"P1"})}),Object(c.jsx)("li",{className:"leftItems",children:Object(c.jsx)("a",{href:"#",children:"P2"})}),Object(c.jsx)("li",{className:"leftItems",children:Object(c.jsx)("a",{href:"#",children:"P3"})}),Object(c.jsx)("li",{className:"leftItems",children:Object(c.jsx)("a",{href:"#",children:"P4"})})]})})}),Object(c.jsxs)("section",{className:"section2",children:[Object(c.jsx)(f,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}),Object(c.jsx)(v,{addTodo:e.addTodo})]})]})}}),Object(c.jsx)(p.a,{path:"/messenger",component:S}),Object(c.jsx)(p.a,{path:"/App1",component:_}),Object(c.jsx)(p.a,{path:"/components/Month",component:P})]})})}}]),n}(a.a.Component),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,d=t.getTTFB;n(e),c(e),s(e),a(e),d(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root")),Y()}},[[46,1,2]]]);
//# sourceMappingURL=main.287a2a6a.chunk.js.map