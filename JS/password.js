const numberSelection= document.getElementById("numberSelection")
const passwordButton= document.getElementById("passwordButton")
const section=document.getElementById("section")
const togetherArrays={
    mayus: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    minus: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    number: [0,1,2,3,4,5,6,7,8,9],
    simbol: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"],
}

import { passwordGeneral } from "./jsBASE.js"

passwordGeneral(section,togetherArrays)

