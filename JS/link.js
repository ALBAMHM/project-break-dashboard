const sectionDOM = document.getElementById("section");
const nombreEnlaceDOM = document.getElementById("nombreEnlace");
const urlEnlaceDOM = document.getElementById("urlEnlace");
const buttonEnlaceDOM = document.getElementById("buttonEnlace");


import { linkGeneral } from "./jsBASE.js";
linkGeneral(sectionDOM,nombreEnlaceDOM,urlEnlaceDOM,buttonEnlaceDOM)

import { imgRandom } from "./jsBASE.js"
imgRandom("../")