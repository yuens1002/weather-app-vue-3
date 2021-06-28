<template>
  <h1>Current Weather</h1>
  <form @submit.prevent="submitCity">
    <label for="weather" class="hidden-visually">weather</label>
    <input
      class="input"
      type="text"
      v-model.trim="city"
      placeholder="Enter City Name"
      name="weather"
    />
    <button class="btn" type="submit" :disabled="loading">
      {{ loading ? `Getting weather in ${input}...` : 'Go' }}
    </button>
  </form>
  <WeatherConditions :cityQuery="input" />
</template>

<script>
import WeatherConditions from './components/WeatherConditions.vue';
import { ref, provide } from 'vue';
export default {
  name: 'App',
  components: {
    WeatherConditions,
  },
  data: () => ({
    city: '',
    input: '',
  }),
  setup() {
    const loading = ref(false);
    const updateLoading = (value) => {
      loading.value = value;
    };
    provide('loading', loading);
    provide('updateLoading', updateLoading);
    return { loading };
  },
  methods: {
    submitCity() {
      if (!this.city) return;
      this.input = this.city;
      this.city = '';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hidden-visually {
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  height: 1px;
  width: 1px;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
}
.btn {
  margin-left: 12px;
  padding: 12px;
}
.input {
  padding: 12px;
}
</style>
