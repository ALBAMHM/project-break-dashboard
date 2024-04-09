const numberSelection= document.getElementById("numberSelection")
const passwordButton= document.getElementById("passwordButton")
const section=document.getElementById("section")
const togetherArrays={
    mayus: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    minus: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    number: [0,1,2,3,4,5,6,7,8,9],
    simbol: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"],
}

passwordButton.addEventListener("click", () => {
    
    let existingPassword = section.querySelector("p");


    if (existingPassword) {
        section.removeChild(existingPassword);
    }     
    let createdPassword=document.createElement("p");
    section.appendChild(createdPassword);
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




