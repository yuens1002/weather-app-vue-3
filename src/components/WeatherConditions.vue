<template>
  <div class="current" v-show="cityQuery && !error && !isLoading">
    <div>
      Current Weather in
      <span class="city-name capitalize">{{ cityQuery }}</span>
    </div>
    <div class="weather">
      <img :src="weather.imgSrc" />
      <span class="capitalize">{{ weather.summary }}</span
      >, {{ weather.temp }} &deg;C
    </div>
  </div>
  <div v-if="error" class="current capitalize">
    city <b>{{ cityQuery }}</b> not found. pls try again.
  </div>
  <div v-if="isLoading" class="current capitalize">momento...</div>
</template>

<script>
import useWeather from '../useWeather';
import { toRefs, watch, inject } from 'vue';
export default {
  name: 'WeatherConditions',
  props: {
    cityQuery: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const updateLoading = inject('updateLoading');
    const isLoading = inject('loading');
    const { cityQuery } = toRefs(props);
    const { weather, getWeather, error, loading } = useWeather(cityQuery);
    watch(cityQuery, getWeather);
    watch(loading, (cur) => {
      updateLoading(cur);
    });
    return { weather, error, isLoading };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.current {
  margin: 40px;
  padding: 24px;
  padding-top: 32px;
  border-radius: 12px;
  border: 1px solid #eaeaea;
}
.city-name {
  font-weight: bold;
  font-size: 20px;
}
.capitalize {
  text-transform: capitalize;
}
.weather {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
