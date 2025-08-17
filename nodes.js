import { ToolMessage } from "@langchain/core/messages"
import llmWithTools from "./llmWithTools.js"
import { toolsByName } from "./tools.js"

const llmCall = async (state) => {
    const result = await llmWithTools.invoke([
        {
            role: 'system',
            content:
                'You are an helpful ai agent calculator with some basic operation but they are special.',
        },
        ...state.messages,
    ])

    return {
        messages: [result],
    }
}

const toolNode = async (state) => {
    const results = []
    const lastMessage = state?.messages?.at(-1)

    if (lastMessage?.tool_calls?.length) {
        for (const toolCall of lastMessage?.tool_calls) {
            const tool = toolsByName[toolCall.name]
            const observation = await tool.invoke(toolCall.args)

            results.push(
                new ToolMessage({
                    content: String(observation),
                    tool_call_id: toolCall.id,
                })
            )
        }
    }

    return {
        messages: results,
    }
}

const shouldContinue = (state) => {
    const { messages } = state
    const lastMessage = messages.at(-1)

    if (lastMessage?.tool_calls?.length) {
        return 'Action'
    }
    return '__end__'
}


export {
    llmCall,
    toolNode,
    shouldContinue
}