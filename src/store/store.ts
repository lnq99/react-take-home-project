import { configureStore } from '@reduxjs/toolkit'
import conifgReducer from './slices/configSlice'
import { sidebarReducer } from './slices/sidebarSlice'
import workflowReducer from './slices/workflowSlice'

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        config: conifgReducer,
        workflow: workflowReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch