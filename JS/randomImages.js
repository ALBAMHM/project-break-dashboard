document.addEventListener("DOMContentLoaded", function() {
    let backgrounds = ['/img/1.jpg', '/img/2.jpg', '/img/3.jpg','/img/4.jpg','/img/5.jpg','/img/6.jpg','/img/7.jpg','/img/8.jpg','/img/9.jpg','/img/10.jpg','/img/11.jpg','/img/12.jpg']; 
    let index = 0; 
   

    function cambiarFondo() {
    let indexRandom= Math.floor(Math.random()*backgrounds.length)
    let fondoElegido=backgrounds[indexRandom]
    document.body.style.backgroundImage = `url(${fondoElegido})`
    
    index=indexRandom

    }

    cambiarFondo()
    setInterval(cambiarFondo, 5000);
});