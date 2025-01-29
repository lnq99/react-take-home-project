import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './slices/sidebarSlice';
import conifgReducer from './slices/configSlice';

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        config: conifgReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;