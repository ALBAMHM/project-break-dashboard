const sectionDOM=document.getElementById("section")
const articleDOM=document.getElementById("article")
const textoDomm=document.getElementById("texto")

function reloj () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    let existingHora = sectionDOM.querySelector("p");


    if (existingHora) {
            sectionDOM.removeChild(existingHora);
    }     
    let relojDOM= ""
    relojDOM=document.createElement("p")
    sectionDOM.appendChild(relojDOM)
    
        relojDOM.innerHTML = `${hours}:${minutes}:${seconds}`
    
}



function fecha () {
    const date = new Date();
    const day=String(date.getDate()).padStart(2,"0")
    const month=String(date.getMonth()+1).padStart(2,"0")
    const year=String(date.getFullYear()).padStart(2,"0")
   
    let existingFecha = articleDOM.querySelector("p");


    if (existingFecha) {
        articleDOM.removeChild(existingFecha);
    }     
    let fechaDOM= ""
    fechaDOM=document.createElement("p")
    articleDOM.appendChild(fechaDOM)
    fechaDOM.innerHTML = `${day}/${month}/${year}`
}

let interval = setInterval(reloj, 1000) //Cada 1 segundo se refresca!!!!!
let intervalFecha = setInterval(fecha, 1000)



function texto (mayorQue,menorQue,textoIndicacion){
    const date = new Date()
    const hora = date.getHours()
    
    if (hora>=mayorQue && hora<menorQue  ){
        let existingTexto = textoDomm.querySelector("p");


        if (existingTexto) {
            textoDomm.removeChild(existingTexto);
        }     
        let textoDOM= ""
        textoDOM=document.createElement("p")
        textoDomm.appendChild(textoDOM)
        textoDOM.innerHTML = textoIndicacion
        }
   
}

function comprobacion (){
    texto(24,7,"Es hora de descansar. Apaga y sigue mañana")
    texto(7,12, "Buenos días, desayuna fuerte y a darle al código")
    texto(12,14, "Echa un rato más pero no olvides comer")
    texto(14,16, "Espero que hayas comido")
    texto(16,18, "Buenas tardes, el último empujón")
    texto(18,22, "Esto ya son horas extras, ... piensa en parar pronto")
    texto(22,24, "Buenas noches, es hora de pensar en parar y descansar")
    
}
let intervalTexto = setInterval(comprobacion(), 1000)

