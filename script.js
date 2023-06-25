document.addEventListener('DOMContentLoaded', () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd0f0fb036amshdf6693bd5b1e737p1fb963jsn3bf8df29469a',
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    const co = document.getElementById('co');
    const no2 = document.getElementById('no2');
    const o3 = document.getElementById('o3');
    const pm25 = document.getElementById('pm2.5');
    const pm10 = document.getElementById('pm10');
    const so2 = document.getElementById('so2');
    const overallAqi = document.getElementById('overall-aqi');
  
    const getAqi = (city) => {
        cityInput.innerHTML = city
      fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`, options)
        .then(response => response.json())
        .then(data => {
          if (data.CO) {
            co.textContent = `${data.CO.concentration} (${data.CO.aqi})`;
          }
          if (data.NO2) {
            no2.textContent = `${data.NO2.concentration} (${data.NO2.aqi})`;
          }
          if (data.O3) {
            o3.textContent = `${data.O3.concentration} (${data.O3.aqi})`;
          }
          if (data.PM25) {
            pm25.textContent = `${data.PM25.concentration} (${data.PM25.aqi})`;
          }
          if (data.PM10) {
            pm10.textContent = `${data.PM10.concentration} (${data.PM10.aqi})`;
          }
          if (data.SO2) {
            so2.textContent = `${data.SO2.concentration} (${data.SO2.aqi})`;
          }
          if (data.overall_aqi) {
            overallAqi.textContent = data.overall_aqi;
          }
        })
        .catch(err => console.error(err));
    };
  
    const form = document.getElementById('search-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const cityInput = document.getElementById('city');
      const city = cityInput.value;
      getAqi(city);
    });
  
    getAqi('delhi');
  });
  