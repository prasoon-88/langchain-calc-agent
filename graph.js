import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import { llmCall, shouldContinue, toolNode } from './nodes.js'

const agentBuilder = new StateGraph(MessagesAnnotation)
	// Nodes
	.addNode('llmCall', llmCall)
	.addNode('tools', toolNode)
	// Edges
	.addEdge('__start__', 'llmCall')
	.addConditionalEdges('llmCall', shouldContinue, {
		Action: 'tools',
		__end__: '__end__',
	})
	.addEdge('tools', 'llmCall')
	// Compile
	.compile()

export default agentBuilder
