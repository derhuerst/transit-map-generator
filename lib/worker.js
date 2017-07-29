'use strict'

const WebSocket = require('reconnecting-websocket')

const createWorker = (actions) => {
	const onWorkerMessage = (msg) => {
		const data = JSON.parse(msg.data)
		if (data.error) actions.onError(new Error(data.msg))
		else if (data.msg) console.info(data.msg)
		else actions.onFrame(data) // assume it's a frame
	}

	const ws = new WebSocket('ws://localhost:3000', undefined, {maxRetries: 3})
	ws.addEventListener('open', () => actions.onReady())
	ws.addEventListener('error', (err) => actions.onError(err))
	ws.addEventListener('message', onWorkerMessage)

	return {} // todo: expose methods
}

module.exports = createWorker
