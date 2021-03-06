/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'

import language from 'containers/LanguageProvider/reducer'
import me from 'modules/me'
import route from 'modules/route'

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route,
    me,
    form,
    language,
    ...asyncReducers,
  })
}
