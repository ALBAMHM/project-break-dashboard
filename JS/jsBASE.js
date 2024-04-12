export function clockGeneral (section,article){


    function reloj () {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
    
        let existingHora = section.querySelector("p");
    
    
        if (existingHora) {
                section.removeChild(existingHora);
        }     
        let relojDOM= ""
        relojDOM=document.createElement("p")
        section.appendChild(relojDOM)
        
            relojDOM.innerHTML = `
          
          ${hours}:${minutes}:${seconds}`
        
    }
    
    
    
    function fecha () {
        const date = new Date();
        const day=String(date.getDate()).padStart(2,"0")
        const month=String(date.getMonth()+1).padStart(2,"0")
        const year=String(date.getFullYear()).padStart(2,"0")
       
        let existingFecha = article.querySelector("p");
    
    
        if (existingFecha) {
            article.removeChild(existingFecha);
        }     
        let fechaDOM= ""
        fechaDOM=document.createElement("p")
        article.appendChild(fechaDOM)
        fechaDOM.innerHTML = `${day}/${month}/${year}`
    }
    
    let interval = setInterval(reloj, 1000) //Cada 1 segundo se refresca!!!!!
    let intervalFecha = setInterval(fecha, 1000)
    
    }


export function linkGeneral (sectionG,nombreG,urlG,button){
    
    function limitarTexto(texto, longitudMaxima) {
        if (texto.length > longitudMaxima) {
            return texto.substring(0, longitudMaxima) + "...";
        } else {
            return texto;
        }
    }
    
    function eventListener (elemento, accion){
        elemento.addEventListener(accion, function() {
        
            let enlacesGuardados = JSON.parse(localStorage.getItem("enlaces")) || [];
        
            enlacesGuardados.push({
                nombre: nombreG.value,
                url: urlG.value
            });
        
            localStorage.setItem("enlaces", JSON.stringify(enlacesGuardados));
        
            sectionG.innerHTML = ""; 
        
            enlacesGuardados.forEach(function(enlace) {
                 if(enlace.nombre && enlace.url){      
                
                let enlaceElement = document.createElement("div"); 
        
                let nombreEnlace = document.createElement("p");
                nombreEnlace.textContent = enlace.nombre; 
                enlaceElement.appendChild(nombreEnlace); 
        
                let urlEnlace = document.createElement("p");
                let aElement = document.createElement("a");
                aElement.href = enlace.url;
                aElement.textContent =  limitarTexto(enlace.url, 20);
                aElement.target = "_blank";
                urlEnlace.appendChild(aElement); 
                enlaceElement.appendChild(urlEnlace); 
        
                let borrarButton = document.createElement("input");
                borrarButton.type = "button";
                borrarButton.value = "Borrar enlace";
                borrarButton.className = "borrarButton";
                enlaceElement.appendChild(borrarButton);
                borrarButton.addEventListener("click", function() {
                    
    
            let indice = enlacesGuardados.findIndex(function(enlaceGuardado) {
                return enlaceGuardado.nombre === enlace.nombre && enlaceGuardado.url === enlace.url;
            });
            
            if (indice !== -1) {
                enlacesGuardados.splice(indice, 1); 
                localStorage.setItem("enlaces", JSON.stringify(enlacesGuardados));
                enlaceElement.remove();
            }
                });
               
                sectionG.appendChild(enlaceElement); 
            } 
            });
        
        });
        
    }
    eventListener(button,"click")
    eventListener(window,"load")
}

export const getWeather = async(sectionM)=> {
    try{
        const response= await fetch ("https://api.weatherapi.com/v1/forecast.json?key=3f610ddf704b4ec8a57101551240904&q=Jaén&aqi=no");
        if(!response.ok){
            throw new Error ("Ha surgido un error", response.status);
        }
        const data= await response.json();
        
        let currentWeather=document.createElement("p")
        sectionM.appendChild(currentWeather)
        currentWeather.innerHTML =
            `<p>${data.current.condition.text} <img src=${data.current.condition.icon}></p>
             ${data.current.temp_c}ºC
             <p>Precipitaciones:${data.current.precip_mm} mm</p>
             <p>Humedad:${data.current.humidity}%</p>
             <p>Viento:${data.current.wind_kph} km/h</p> `
        
    } catch (error){
        console.log('Error al obtener los datos', error);
    }
}

export const getHours = async(forecastDayULM)=> {
    try{
        const response= await fetch ("https://api.weatherapi.com/v1/forecast.json?key=3f610ddf704b4ec8a57101551240904&q=Jaén&aqi=no");
        if(!response.ok){
            throw new Error ("Ha surgido un error", response.status);
        }
        const data= await response.json();
        
        
        let hour= data.forecast.forecastday[0].hour

       hour.forEach((indice)=> {
        
        let forecastDay=document.createElement("li")
        
        forecastDayULM.appendChild(forecastDay)
            forecastDay.innerHTML =
            `  <p>${indice.time}</p>
            <p><img src=${indice.condition.icon}></p>
            <p>${indice.temp_c} ºC</p> `
        });
       
        
        
    } catch (error){
        console.log('Error al obtener los datos', error);
    }
}
   
 export function passwordGeneral(sectionP,togetherArrays){
    passwordButton.addEventListener("click", () => {
    
    let existingPassword = sectionP.querySelector("p");


    if (existingPassword) {
        sectionP.removeChild(existingPassword);
    }     
    let createdPassword=document.createElement("p");
    sectionP.appendChild(createdPassword);
    createdPassword.innerHTML="<p><b>Contraseña Generada:</b> <p>" +"<p>"+generarContrasena(numberSelection.value)+"</p>" 
    
         
})

function getElementoAleatorio(array) {
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}
function generarContrasena(longitud) {
    let password = "";
    let typeofElements = Object.keys(togetherArrays); 
    //console.log(typeofElements)
    for (let i = 0; i < longitud; i++) {
        let typeofElement = typeofElements[Math.floor(Math.random() * typeofElements.length)]; 
        let selectionedArray = togetherArrays[typeofElement]; 
        password += getElementoAleatorio(selectionedArray); 
    }
    
    
    return password;
}

}
   
    
    