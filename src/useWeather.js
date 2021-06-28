import { reactive, ref } from 'vue';
import axios from 'axios';

export default function useWeather(city) {
  const error = ref(false);
  const loading = ref(false);
  const weather = reactive({ temp: '', summary: '', imgSrc: '' });
  const apiKey = process.env.VUE_APP_OC_API_KEY;
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  async function getWeather() {
    try {
      error.value = false;
      loading.value = true;
      const { data } = await axios(
        `${url}?q=${city.value}&appid=${apiKey}&units=metric`
      );
      weather.temp = data.main.temp;
      weather.summary = data.weather[0].description;
      weather.imgSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      loading.value = false;
    } catch (err) {
      loading.value = false;
      error.value = true;
    }
  }

  return { weather, getWeather, error, loading };
}
