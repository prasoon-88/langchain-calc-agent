import { tool } from '@langchain/core/tools'
import z from 'zod'

const multiply = tool(async ({ a, b }) => a * b, {
	name: 'multiply',
	description: 'it multiplies two numbers',
	schema: z.object({
		a: z.number().describe('First Number'),
		b: z.number().describe('Second Number'),
	}),
})

const divide = tool(async ({ a, b }) => a / b, {
	name: 'divide',
	description: 'it divides two numbers',
	schema: z.object({
		a: z.number().describe('First Number'),
		b: z.number().describe('Second Number'),
	}),
})

const add = tool(async ({ a, b }) => a + b, {
	name: 'add',
	description: 'it adds two numbers',
	schema: z.object({
		a: z.number().describe('First Number'),
		b: z.number().describe('Second Number'),
	}),
})

const subtract = tool(async ({ a, b }) => a - b, {
	name: 'subtract',
	description: 'it subtracts two numbers',
	schema: z.object({
		a: z.number().describe('First Number'),
		b: z.number().describe('Second Number'),
	}),
})

const tools = [add, subtract, multiply, divide]

const toolsByName = Object.fromEntries(tools.map((tool) => [tool.name, tool]))

export { tools, toolsByName }
