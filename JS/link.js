const sectionDOM = document.getElementById("section");
const nombreEnlaceDOM = document.getElementById("nombreEnlace");
const urlEnlaceDOM = document.getElementById("urlEnlace");
const buttonEnlaceDOM = document.getElementById("buttonEnlace");

buttonEnlaceDOM.addEventListener("click", function() {
    
    let enlacesGuardados = JSON.parse(localStorage.getItem("enlaces")) || [];

    enlacesGuardados.push({
        nombre: nombreEnlaceDOM.value,
        url: urlEnlaceDOM.value
    });

    localStorage.setItem("enlaces", JSON.stringify(enlacesGuardados));

    let urlEnlace = document.createElement("p");
    let nombreEnlace = document.createElement("p");
    urlEnlace.innerHTML=""
    nombreEnlace.innerHTML=""
   
    enlacesGuardados.forEach(function(enlacesGuardados) {
        urlEnlace.innerHTML = `<a href="${enlacesGuardados.url}" target="_blank">${enlacesGuardados.url}</a> <input type="button" class="borrarButton" value="Borrar enlace">`;
        sectionDOM.appendChild(urlEnlace);

        nombreEnlace.innerHTML = `<p class="borrarButton"> ${enlacesGuardados.nombre}</p>`;
        sectionDOM.appendChild(nombreEnlace);
    });
});


window.addEventListener("load", function() {
    let enlacesGuardados = JSON.parse(localStorage.getItem("enlaces")) || [];

    enlacesGuardados.forEach(function(enlacesGuardados) {
        let urlEnlace = document.createElement("p");
        urlEnlace.innerHTML = `<a href="${enlacesGuardados.url}" target="_blank">${enlacesGuardados.url}</a> <input type="button" class="borrarButton" value="Borrar enlace">`;
        sectionDOM.appendChild(urlEnlace);

        let nombreEnlace = document.createElement("p");
        nombreEnlace.textContent = enlacesGuardados.nombre;
        sectionDOM.appendChild(nombreEnlace);
    });
});

