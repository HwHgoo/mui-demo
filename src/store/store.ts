import { configureStore } from '@reduxjs/toolkit'
import imgReducer from './imgcards'

const store = configureStore({
  reducer: {
    imgs: imgReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;