const sectionDOM=document.getElementById("section")
const articleDOM=document.getElementById("article")
let forecastDayUL=document.createElement("ul")
articleDOM.appendChild(forecastDayUL)
let currentWeather=document.createElement("p")
    

import { getWeather } from "./jsBASE.js"
getWeather(sectionDOM);



import { getHours } from "./jsBASE.js"
getHours(forecastDayUL);


import { imgRandom } from "./jsBASE.js"
imgRandom("../")