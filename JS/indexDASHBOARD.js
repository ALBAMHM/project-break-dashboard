const sectionClock=document.getElementById("section1-clock")
const articleClock=document.getElementById("article1-clock")
import { clockGeneral } from "./jsBASE.js"
clockGeneral(sectionClock,articleClock)



const sectionLink=document.getElementById("section2-link")
const nombreEnlace=document.getElementById("nombreEnlace")
const urlEnlace=document.getElementById("urlEnlace")
const buttonEnlace=document.getElementById("buttonEnlace")
                
import { linkGeneral } from "./jsBASE.js";
linkGeneral(sectionLink,nombreEnlace,urlEnlace,buttonEnlace)

const sectionMetereologic=document.getElementById("section3-metereologic")
const articleMetereologic=document.getElementById("article3")
let forecastDayUL=document.createElement("ul")
articleMetereologic.appendChild(forecastDayUL)
let currentWeather=document.createElement("p")

import { getWeather } from "./jsBASE.js"
getWeather(sectionMetereologic);

import { getHours } from "./jsBASE.js"
getHours(forecastDayUL);



const sectionPassword=document.getElementById("section4-password")
const numberSelection=document.getElementById("numberSelection")
const passwordButton=document.getElementById("passwordButton")
const togetherArrays={
    mayus: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    minus: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    number: [0,1,2,3,4,5,6,7,8,9],
    simbol: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"],
}
import { passwordGeneral } from "./jsBASE.js"
passwordGeneral(sectionPassword,togetherArrays)


