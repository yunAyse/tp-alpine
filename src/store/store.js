import { configureStore } from '@reduxjs/toolkit'
import configuratorReducer from '../features/AlpineSlice';

const store = configureStore({
  reducer: {
    configurator: configuratorReducer,
  },
})

export default store;