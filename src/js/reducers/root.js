'use strict'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const root = combineReducers({
	routing: routerReducer
})

export default root
