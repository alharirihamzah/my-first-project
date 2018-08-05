'use strict'

import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from '@/reducers/root'

const composeEnhancers = composeWithDevTools({
	name: 'my-first-project'
})

const routerHistoryMiddleware = routerMiddleware(browserHistory)

export default createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(
			thunkMiddleware, routerHistoryMiddleware
		)
	)
)