const sectionDOM=document.getElementById("section")
const articleDOM=document.getElementById("article")
const textoDomm=document.getElementById("texto")

function reloj () {
    const date = new Date();
    const relojInput = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];
    let existingHora = sectionDOM.querySelector("p");


    if (existingHora) {
            sectionDOM.removeChild(existingHora);
    }     
    let relojDOM= ""
    relojDOM=document.createElement("p")
    sectionDOM.appendChild(relojDOM)
    relojDOM.innerHTML = `${relojInput[0]}:${relojInput[1]}:${relojInput[2]}`
}



function fecha () {
    const dateFecha = new Date();
    const fechaInput = [
        dateFecha.getDate(),
        dateFecha.getMonth()+1,
        dateFecha.getFullYear(),
      ]
    let existingFecha = articleDOM.querySelector("p");


    if (existingFecha) {
        articleDOM.removeChild(existingFecha);
    }     
    let fechaDOM= ""
    fechaDOM=document.createElement("p")
    articleDOM.appendChild(fechaDOM)
    fechaDOM.innerHTML = `${fechaInput[0]}/${fechaInput[1]}/${fechaInput[2]}`
}

let interval = setInterval(reloj, 1000) //Cada 1 segundo se refresca????
let intervalFecha = setInterval(fecha, 1000)



function texto (mayorQue,menorQue,textoIndicacion){
    const date = new Date()
    const hora = date.getHours()
    
    if (hora>mayorQue || hora<=menorQue  ){
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

