'use strict'

const document = require('global/document')
const createElement = require('virtual-dom/create-element')
const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')

require('./ui/insert-styles')
const createWorker = require('./lib/worker')
const render = require('./ui')

const state = {
	worker: null,
	ready: false,
	frame: null
}

const onError = (err) => {
	console.error(err)
	// todo: show in UI
}

const onReady = () => {
	state.ready = true
	rerender()
}

const onFrame = (frame) => {
	state.frame = frame
	rerender()
}

const actions = {onError, onReady, onFrame}

setTimeout(() => {
	state.worker = createWorker(actions)
})

let tree = render(state, actions)
let root = createElement(tree)
document.body.appendChild(root)

const rerender = () => {
	const newTree = render(state, actions)
	root = patch(root, diff(tree, newTree))
	tree = newTree
}
