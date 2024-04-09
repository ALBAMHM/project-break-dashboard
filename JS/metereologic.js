const sectionDOM=document.getElementById("section")


const getWeather = async()=> {
    try{
        const response= await fetch ("https://api.weatherapi.com/v1/forecast.json?key=3f610ddf704b4ec8a57101551240904&q=Jaén&aqi=no");
        if(!response.ok){
            throw new Error ("Ha surgido un error", response.status);
        }
        const data= await response.json();
        let existingWeather = sectionDOM.querySelector("p");
        if (existingWeather) {
                sectionDOM.removeChild(existingWeather);
        }     
        let currentWeather= ""
        currentWeather=document.createElement("p")
        sectionDOM.appendChild(currentWeather)
        currentWeather.innerHTML =
            `<p>${data.current.condition.text} <img src=${data.current.condition.icon}></p>
             ${data.current.temp_c}ºC
             <p>Precipitaciones:${data.current.precip_mm} mm</p>
             <p>Humedad:${data.current.humidity}%</p>
             <p>Viento:${data.current.wind_kph} km/h</p> `
        //console.log(data)
    } catch (error){
        console.log('Error al obtener los datos', error);
    }
}
getWeather();