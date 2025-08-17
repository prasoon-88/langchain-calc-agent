import agentBuilder from './graph.js'

const messages = [
    {
        role: 'user',
        content: 'Subtract 3 and 4 and add 10 to it and than multiple that by -11.',
    },
]

const result = await agentBuilder.invoke({ messages })

console.log(result.messages.at(-1)?.content)