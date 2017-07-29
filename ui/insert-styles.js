'use strict'

const css = require('csjs/get-css')
const insertStyles = require('insert-styles')

const index = require('./indicator.css.js')
const graph = require('./graph.css.js')

insertStyles([
	css(index),
	css(graph)
].join('\n'))
