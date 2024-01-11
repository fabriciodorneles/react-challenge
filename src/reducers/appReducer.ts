import { Reducer } from 'redux'

import {
  SET_FIRST_DISPLAY_NAME,
  SET_LAST_DISPLAY_NAME
} from '../actions/actionTypes'
import { setFirstDisplayName, setLastDisplayName } from '../actions/appActions'

interface AppState {
  firstDisplayName: string[]
  lastDisplayName: string[]
}

const initialState: AppState = {
  firstDisplayName: ['', '', ''],
  lastDisplayName: ['', '', '']
}

type AppAction = ReturnType<
  typeof setFirstDisplayName | typeof setLastDisplayName
>

const appReducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_FIRST_DISPLAY_NAME:
      return {
        ...state,
        firstDisplayName: action.payload
      }
    case SET_LAST_DISPLAY_NAME:
      return {
        ...state,
        lastDisplayName: action.payload
      }
    default:
      return state
  }
}

export default appReducer
