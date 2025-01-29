import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// interface ComponentState {
//     version: 'default' | 'alternative';
// }

// const initialComponentState: ComponentState = {
//     version: 'default',
// };

// const componentSlice = createSlice({
//     name: 'component',
//     initialState: initialComponentState,
//     reducers: {
//         setVersion(state, action: PayloadAction<'default' | 'alternative'>) {
//             state.version = action.payload;
//         },
//     },
// });

// export const { setVersion } = componentSlice.actions;
// export const componentReducer = componentSlice.reducer;


interface SidebarState {
    data: Record<string, any> | null
}

const initialSidebarState: SidebarState = {
    data: null,
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: initialSidebarState,
    reducers: {
        setSidebarData(state, action: PayloadAction<Record<string, any>>) {
            state.data = action.payload
        },
    },
})

export const { setSidebarData } = sidebarSlice.actions
export const sidebarReducer = sidebarSlice.reducer
