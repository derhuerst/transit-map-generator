'use strict'

const h = require('virtual-dom/h')

const renderIndicator = require('./indicator')
const renderGraph = require('./graph')

const render = (state, actions) => {
	return h('div', {
		className: 'todo'
	}, [
		renderIndicator(state, actions),
		renderGraph(state, actions)
	])
}

module.exports = render
