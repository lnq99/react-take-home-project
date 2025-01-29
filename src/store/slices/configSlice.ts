import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '@/store/store'

interface AppVersion {
  title: string
  url: string
}

interface AppConfig {
  [key: string]: {
    title: string
    versions: AppVersion[]
    defaultVersion: string
    menuItems: string[]
  }
}

interface ConfigState {
  config: AppConfig | null
  currentApp: {
    name: string
    version: string
  } | null
}

const initialState: ConfigState = {
  config: null,
  currentApp: null,
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig(state, action: PayloadAction<AppConfig>) {
      state.config = action.payload
    },
    setCurrentApp(state, action: PayloadAction<{ name: string; version: string }>) {
      state.currentApp = action.payload
    },
  },
})

export const { setConfig, setCurrentApp } = configSlice.actions

export default configSlice.reducer
