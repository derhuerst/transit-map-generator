'use strict'

const h = require('virtual-dom/h')

const styles = require('./indicator.css.js')

const render = (state, actions) => {
	return h('div', {
		className: styles.indicator + (state.ready ? ' ' + styles.ready : '')
	})
}

module.exports = render
