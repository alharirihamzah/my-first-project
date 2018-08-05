'use strict'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

import store from 'utils/store'

const history = syncHistoryWithStore(browserHistory, store)

class Application extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}
	
	render() {
		return (
			<div className={'my-first-project-application'}>
				My first project 😎
			</div>
		)
	}
}

Application = connect(state => {
	return {

	}
})(Application)

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Application} />
		</Router>
	</Provider>
), document.getElementById('my-first-project'))