const sectionDOM = document.getElementById("section");
const nombreEnlaceDOM = document.getElementById("nombreEnlace");
const urlEnlaceDOM = document.getElementById("urlEnlace");
const buttonEnlaceDOM = document.getElementById("buttonEnlace");

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
            nombre: nombreEnlaceDOM.value,
            url: urlEnlaceDOM.value
        });
    
        localStorage.setItem("enlaces", JSON.stringify(enlacesGuardados));
    
        sectionDOM.innerHTML = ""; 
    
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
           
            sectionDOM.appendChild(enlaceElement); 
        } 
        });
    
    });
    
}

eventListener(buttonEnlaceDOM,"click")
eventListener(window,"load")