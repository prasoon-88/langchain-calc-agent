import dotenv from 'dotenv'
dotenv.configDotenv()

import { ChatDeepSeek } from "@langchain/deepseek"
import { tools } from "./tools.js"

const llm = new ChatDeepSeek({
    apiKey: process.env.DEEPSEEK_API_KEY,
    model: 'deepseek-chat',
})

const llmWithTools = llm.bindTools(tools)

export default llmWithTools