# Weather App Built with VueJS 3

Fetches current weather of a city. Includes loading and error handling.

- Vue3 composition API
  - custom use hook
  - provider/inject
  - ref, reactive, toRefs, watch
- fetches weather from openweathermap.org

  - updates current weather per user request
  - displays loading state during api request
  - displays error when (city) is not found
  - displays an icon of the current weather

  ##### Installation

  1. clone repo
  2. cd to local directory of the cloned repo
  3. `npm install`
  4. register for a free api account from openweathermap.org
  5. create a _.env_ file in root directory with the following:
     `VUE_APP_OW_API_KEY=(your_api_key)`

  ##### Run

  `npm run serve`
