!function(){!async function(){try{const a="/api/tareas?id="+n(),o=await fetch(a),r=await o.json();e=r.tareas,t()}catch(e){console.log(e)}}();let e=[];function t(){if(function(){const e=document.querySelector("#listado-tareas");for(;e.firstChild;)e.removeChild(e.firstChild)}(),0===e.length){const e=document.querySelector("#listado-tareas"),t=document.createElement("LI");return t.textContent="No hay tareas",t.classList.add("no-tareas"),void e.appendChild(t)}const a={0:"Pendiente",1:"Completa"};e.forEach(o=>{const r=document.createElement("LI");r.dataset.tareaId=o.id,r.classList.add("tarea");const c=document.createElement("P");c.textContent=o.nombre;const d=document.createElement("DIV");d.classList.add("opciones");const i=document.createElement("BUTTON");i.classList.add("estado-tarea"),i.classList.add(""+a[o.estado].toLowerCase()),i.textContent=a[o.estado],i.dataset.estadoTarea=o.estado,i.onclick=function(){!function(a){const o="1"===a.estado?"0":"1";a.estado=o,async function(a){const{estado:o,id:r,nombre:c,proyectoId:d}=a,i=new FormData;i.append("id",r),i.append("nombre",c),i.append("estado",o),i.append("proyectoId",n());try{const a="http://localhost:3000/api/tarea/actualizar",n=await fetch(a,{method:"POST",body:i});"exito"===(await n.json()).respuesta.tipo&&(e=e.map(e=>(e.id===r&&(e.estado=o),e)),t())}catch(e){console.log(e)}}(a)}({...o})};const s=document.createElement("BUTTON");s.classList.add("eliminar-tarea"),s.dataset.idTarea=o.id,s.textContent="Eliminar",s.onclick=function(){!function(a){Swal.fire({title:"¿Eliminar tarea?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si",cancelButtonText:"No"}).then(o=>{o.isConfirmed&&async function(a){const{estado:o,id:r,nombre:c}=a,d=new FormData;d.append("id",r),d.append("nombre",c),d.append("estado",o),d.append("proyectoId",n());try{const n="http://localhost:3000/api/tarea/eliminar",o=await fetch(n,{method:"POST",body:d}),r=await o.json();r.resultado&&(Swal.fire("Eliminado",r.mensaje,"success"),e=e.filter(e=>e.id!==a.id),t())}catch(e){console.log(e)}}(a)})}({...o})},d.appendChild(i),d.appendChild(s),r.appendChild(c),r.appendChild(d);document.querySelector("#listado-tareas").appendChild(r)})}function a(e,t,a){const n=document.querySelector(".alerta");n&&n.remove();const o=document.createElement("DIV");o.classList.add("alerta",t),o.textContent=e,a.parentElement.insertBefore(o,a.nextElementSibling),setTimeout(()=>{o.remove()},5e3)}function n(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}document.querySelector("#agregar-tarea").addEventListener("click",(function(){const o=document.createElement("DIV");o.classList.add("modal"),o.innerHTML='\n            <form class="formulario nueva-tarea">\n                <legend>Añade una nueva tarea</legend>\n                <div class="campo">\n                    <label>Tarea</label>\n                    <input\n                        type="text"\n                        name="tarea"\n                        placeholder="Añadir tarea al proyecto actual"\n                        id="tarea"\n                    />\n                </div>\n                <div class="opciones">\n                    <input \n                        type="submit" \n                        class="submit-nueva-tarea" \n                        value="Añadir tarea"\n                    />\n                    <button type="button" class="cerrar-modal">Cancelar</button>\n                </div>\n            </form>\n        ',setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},300),o.addEventListener("click",(function(r){if(r.preventDefault(),r.target.classList.contains("cerrar-modal")){document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{o.remove()},600)}r.target.classList.contains("submit-nueva-tarea")&&function(){const o=document.querySelector("#tarea").value.trim();if(""===o)return void a("Ingrese el nombre de la tarea","error",document.querySelector(".formulario legend"));!async function(o){const r=new FormData;r.append("nombre",o),r.append("proyectoId",n());try{const n="http://localhost:3000/api/tarea",c=await fetch(n,{method:"POST",body:r}),d=await c.json();if(a(d.mensaje,d.tipo,document.querySelector(".formulario legend")),"exito"===d.tipo){const a=document.querySelector(".modal");setTimeout(()=>{a.remove()},3e3);const n={id:String(d.id),nombre:o,estado:"0",proyectoId:d.proyectoId};e=[...e,n],t()}}catch(e){console.log(e)}}(o)}()})),document.querySelector(".dashboard").appendChild(o)}))}();