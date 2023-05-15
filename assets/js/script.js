//checked
const lista = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const tareas = []
const cantidad = document.querySelector("#total")


var total = 0;

btn.addEventListener("click", () => {
    let nuevaTarea = {id: Date.now(), nombre: input.value, realizada:false };
    tareas.push(nuevaTarea);
    input.value = "";
    let html = "";
    for (let tarea of tareas) {
        html += `<li>${tarea.nombre} <button onclick="borrarTarea('${tarea.id}')">x</button><input type='checkbox'></li>`;
    }
    lista.innerHTML = html;
    total++;
    cantidad.innerHTML = total

});

function borrarTarea (id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index,1);
    let html="";
    for (tarea of tareas){
        html += `<li>${tarea.nombre} <button onclick="borrarTarea('${tarea.id}')">x</button><input type= 'checkbox'></li>`
    }
    lista.innerHTML = html
    cantidad.innerHTML = total -1
}
function tareaLista (id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index,1);
    let html="";
    for (tarea of tareas){
        html += `<li>${tarea.nombre} <button onclick="borrarTarea('${tarea.id}')">x</button><button onclick= "tarealista(${tarea.realizada})">Tarea lista</button></li>`
    }
    lista.innerHTML = html
}