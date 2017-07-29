'use strict'

const document = require('global/document')
const createElement = require('virtual-dom/create-element')
const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')

require('./ui/insert-styles')
const render = require('./ui')

const state = {
	todo: null
}

const todo = () => {
	state.todo = 'todo'
	rerender()
}

const actions = {todo}

let tree = render(state, actions)
let root = createElement(tree)
document.body.appendChild(root)

const rerender = () => {
	const newTree = render(state, actions)
	root = patch(root, diff(tree, newTree))
	tree = newTree
}
