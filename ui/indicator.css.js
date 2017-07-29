'use strict'

const css = require('csjs')

module.exports = css `
.indicator {
	position: fixed;
	bottom: .3rem;
	right: .3rem;
	width: .8rem;
	height: .8rem;
	background-color: #333;
	border-radius: .8rem;
}

.ready {
	background-color: #2ecc71;
}
`
