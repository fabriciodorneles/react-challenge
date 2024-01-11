import { Action } from 'redux'

import { SET_FIRST_DISPLAY_NAME, SET_LAST_DISPLAY_NAME } from './actionTypes'

export interface SetFirstDisplayNameAction
  extends Action<typeof SET_FIRST_DISPLAY_NAME> {
  payload: string[]
}

export interface SetLastDisplayNameAction
  extends Action<typeof SET_LAST_DISPLAY_NAME> {
  payload: string[]
}

export const setFirstDisplayName = (
  displayName: string[]
): SetFirstDisplayNameAction => ({
  type: SET_FIRST_DISPLAY_NAME,
  payload: displayName
})

export const setLastDisplayName = (
  displayName: string[]
): SetLastDisplayNameAction => ({
  type: SET_LAST_DISPLAY_NAME,
  payload: displayName
})
