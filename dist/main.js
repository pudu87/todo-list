(()=>{"use strict";class e{constructor(e){this.title=e.title,this.description=e.description,this.dueDate=e.dueDate,this.priority=e.priority,this.projectId=e.projectId,this.id=e.id}}class t{constructor(e){this.name=e.name,this.id=e.id}}const o=[{name:"default",id:0}],i=[];function n(e){e.id=o.length?o[o.length-1].id+1:0;let i=new t(e);o.push(i)}function d(t){t.id=i.length?i[i.length-1].id+1:0;let o=new e(t);return i.push(o),o}function c(e){return o.find((t=>t.id==e))}function r(e){let t=[];return i.forEach((o=>{o.projectId==e&&t.push(o)})),t}function l(e){return i.find((t=>t.id==e))}function u(){document.querySelector("#project").textContent=""}function a(){document.querySelector("#todo").textContent=""}function s(e,t,o,i=0){let n=document.createElement(t);return n.textContent=o,i&&n.classList.add(i),e.appendChild(n)}const p=document.querySelector("#todo");function m(e){a(),function(e){let t=s(p,"header","",`todo_${e.id}`);s(t,"h1","");let o=s(t,"div","");["o","x"].forEach((e=>{s(o,"span",e,e)}))}(e),function(e){let t=s(p,"form","","display-none");t.id="update-todo",["title","description"].forEach((o=>{let i=o.charAt(0).toUpperCase()+o.slice(1)+":";s(t,"label",i).htmlFor=`update-todo-${o}`;let n=s(t,"input","");n.type="text",n.id=`update-todo-${o}`,n.value=null==e[o]?"":e[o]})),s(t,"label","Due Date:");let o=s(t,"div","");o.id="dueDate";let i=s(o,"input","");i.type="date",i.id="update-todo-dueDate",i.value=null==e.dueDate?"":e.dueDate,s(t,"label","Priority:");let n=s(t,"div","");n.id="priorities",["low","medium","high"].forEach((t=>{let o=s(n,"input","");o.type="radio",o.id=`${t}-priority`,o.name="priority",o.value=t,e.priority?e.priority==t&&(o.checked=!0):"low"==t&&(o.checked=!0);let i=s(n,"label","");i.htmlFor=`${t}-priority`;let d=s(i,"span",""),c=s(d,"img","");c.src="img/checked-icon.svg",c.alt="Checked Icon"}));let d=s(t,"input","");d.type="submit",d.value="Change"}(e),function(e){let t=s(p,"article","");s(t,"h2",e.title),s(t,"p",e.description),s(t,"div",e.dueDate)}(e),document.querySelector("#todo .o").addEventListener("click",y),document.querySelector("#todo .x").addEventListener("click",f),document.querySelector("#update-todo").addEventListener("submit",h)}function y(){let e=document.querySelector("#todo article"),t=document.querySelector("#update-todo");e.classList.toggle("display-none"),t.classList.toggle("display-none")}function f(){let e=document.querySelector("#todo header").classList[0].split("_")[1],t=document.querySelector("#project header").classList[0].split("_")[1];if(function(e){let t=i.findIndex((t=>e==t.id));i.splice(t,1)}(e),a(),"undefined"!=e){let e=c(t);j(e,r(e.id))}}function h(t){t.preventDefault();let o=function(){let t,o=document.querySelector("#todo header").classList[0].split("_")[1],n=l(o),c=document.querySelector("#update-todo-title").value,r=document.querySelector("#update-todo-description").value,u=document.querySelector("#update-todo-dueDate").value,a=document.querySelector('#update-todo input[type="radio"]:checked').value;return"undefined"==o?(t=document.querySelector("#project header").classList[0].split("_")[1],n=d({title:c,description:r,dueDate:u,priority:a,projectId:t})):(t=n.projectId,n=function(t){let o=i.findIndex((e=>t.id==e.id)),n=new e(t);return i.splice(o,1,n),n}({title:c,description:r,dueDate:u,priority:a,projectId:t,id:o})),n}();y(),m(o);let n=c(o.projectId);j(n,r(n.id))}const v=document.querySelector("#project");function j(e,n){u(),a(),function(e){let t=s(v,"header","",`project_${e.id}`);s(t,"h1",e.name),function(e,t){let o=s(e,"form","","display-none");o.id="update-project";let i=s(o,"input","");i.type="text",i.id="update-project-name",i.value=t.name;let n=s(o,"input","");n.type="submit",n.value="Change"}(t,e);let o=s(t,"div","");["o","x"].forEach((e=>{s(o,"span",e,e)}))}(e),function(e,t){let o=s(v,"ul","");0==e.id&&(t=i),t.forEach((e=>{let t=s(o,"li","",`todo_${e.id}`);t.classList.add(`${e.priority}-priority`),s(t,"h2",e.title),s(t,"div",e.dueDate)}))}(e,n),s(v,"button","New Todo").id="new-todo-button",document.querySelectorAll("#project li").forEach((e=>{e.addEventListener("click",q)})),document.querySelector("#project .o").addEventListener("click",S),document.querySelector("#project .x").addEventListener("click",g),document.querySelector("#update-project").addEventListener("submit",(e=>function(e,i){e.preventDefault(),function(e){let i=o.findIndex((t=>e.id==t.id)),n=new t(e);o.splice(i,1,n)}({name:document.querySelector("#update-project-name").value,id:document.querySelector("#project header").classList[0].split("_")[1]}),S(),I(),j(c(e.target.parentNode.classList[0].split("_")[1]),i)}(e,n))),document.querySelector("#new-todo-button").addEventListener("click",L)}function q(e){m(l(e.currentTarget.classList[0].split("_")[1]))}function S(){let e=document.querySelector("#project header h1"),t=document.querySelector("#update-project");e.classList.toggle("display-none"),t.classList.toggle("display-none")}function g(){let e=document.querySelector("#project header").classList[0].split("_")[1];0==e?alert("Default map cannot be deleted!"):(function(e){let t=o.findIndex((t=>e==t.id));o.splice(t,1),function(e){let t=[];i.forEach(((o,i)=>{o.projectId==e&&t.unshift(i)})),t.forEach((e=>{i.splice(e,1)}))}(e)}(e),u(),I())}function L(){m(0),document.querySelector("#todo .o").classList.toggle("display-none"),document.querySelector("#todo input:last-child").value="Create",y()}const D=document.querySelector("#projects button"),E=document.querySelector("#new-project");function I(){!function(){let e=document.querySelector("#projects ul");e.textContent="",o.forEach((t=>{s(e,"li",t.name,`project_${t.id}`)}))}(),document.querySelectorAll("#projects li").forEach((e=>{e.addEventListener("click",b)})),document.querySelector("#projects button").addEventListener("click",w),document.querySelector("#new-project").addEventListener("submit",x)}function b(e){let t=c(e.target.classList[0].split("_")[1]),o=r(t.id);D.classList.contains("display-none")&&w(),j(t,o)}function w(){D.classList.toggle("display-none"),E.classList.toggle("display-none")}function x(e){e.preventDefault(),n({name:document.querySelector("#new-project-name").value}),w(),I();let t=o[o.length-1];j(t,r(t))}d({title:"a",description:"a",dueDate:void 0,priority:"low",projectId:"0"}),d({title:"b",description:"b",dueDate:void 0,priority:"medium",projectId:"0"}),d({title:"c",description:"c",dueDate:void 0,priority:"high",projectId:"1"}),d({title:"d",description:"d",dueDate:void 0,priority:"low",projectId:"2"}),d({title:"e",description:"e",dueDate:void 0,priority:"medium",projectId:"3"}),d({title:"f",description:"f",dueDate:void 0,priority:"high",projectId:"4"}),n({name:"p"}),n({name:"q"}),n({name:"r"}),n({name:"s"}),I()})();