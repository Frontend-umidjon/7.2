import { configureStore } from '@reduxjs/toolkit'
import crud from './feautures/user.crud'


export const store = configureStore({
  reducer: {
    crud,

  },
})

console.log(store);
