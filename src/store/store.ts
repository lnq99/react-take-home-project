import { configureStore } from '@reduxjs/toolkit'
import conifgReducer from './slices/configSlice'
import { sidebarReducer } from './slices/sidebarSlice'

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        config: conifgReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch