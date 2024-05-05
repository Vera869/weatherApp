const apiKey = "585bf75429eb808608a0d73471d3b0a2";
const host = 'https://api.openweathermap.org/data/2.5/weather?';

export async function getWeatherCity(city){
   const response = await fetch(`${host}q=${city}&appid=${apiKey}&units=metric`)
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
    const res = response.json();
   return res
}