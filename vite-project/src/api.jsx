const apiKey = "585bf75429eb808608a0d73471d3b0a2";
const host = 'https://api.openweathermap.org/data/2.5/forecast?';

export async function getWeatherCity(city){
   const response = await fetch(`${host}q=${city}&appid=${apiKey}&units=metric&lang=ru`);
   if(response.status === 404) {
      throw new Error("Произошла ошибка: Город не найден");
   }
   if(response.status === 500) {
      throw new Error("Произошла ошибка, сервер сломался");
   } 
   if(!navigator.onLine) {
      throw new Error("Отсутствует интернет соединение");
   }
    const res = response.json();
   return res
}