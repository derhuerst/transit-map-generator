'use strict'

const generate = require('generate-vbb-transit-map')
const svg = require('virtual-dom/virtual-hyperscript/svg')
const h = require('virtual-dom/h')

const styles = require('./graph.css.js')

const renderGraph = (state, actions) => {
	return state.frame ? generate(state.frame) : null
}

const render = (state, actions) => {
	return h('div', {
		className: styles.wrapper + ''
	}, renderGraph(state, actions))
}

module.exports = render
