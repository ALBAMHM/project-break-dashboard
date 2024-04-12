const sectionDOM=document.getElementById("section")
const articleDOM=document.getElementById("article")
const textoDomm=document.getElementById("texto")


import { clockGeneral } from "./jsBASE.js"
clockGeneral(sectionDOM,articleDOM)


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

