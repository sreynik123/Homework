import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import movieReducer from './features/movie/MovieSlice'
import authReducer from './features/auth/authSlice'
import peopleReducer from './features/People/PeopleSlice'
export const store = configureStore({
  reducer: {
           counter: counterReducer,
           movie:movieReducer, 
           auth: authReducer,
           people:peopleReducer
  },
})