🚀 AI Calculator Agent

My first step into Agentic AI — experimenting with LangChain, LangGraph, and LangSmith to build a simple but structured AI Calculator Agent in JavaScript/Node.js.

💡 About This Project

I’m deeply interested in agentic AI — systems that can reason, plan, and act with autonomy.
This repository is my starting point: a small AI Calculator Agent that demonstrates how an AI can:

🧩 Use LangChain to connect reasoning with tools

🔗 Structure workflows with LangGraph

🛠️ Monitor, debug, and trace runs with LangSmith

While this project is simple, it’s the foundation for exploring more advanced AI agent architectures in the future.

⚙️ Setup
1. Clone the repo
git clone https://github.com/your-username/langchain-calc-agent.git
cd langchain-calc-agent

2. Install dependencies
npm install
# or
yarn install

3. Configure environment variables

Create a .env file in the project root and add:

DEEPSEEK_API_KEY=your_deepseek_api_key_here
LANGSMITH_TRACING="true"
LANGSMITH_ENDPOINT="https://api.smith.langchain.com"
LANGSMITH_API_KEY=your_langsmith_api_key_here
LANGSMITH_PROJECT=ai-calculator-agent

▶️ Usage

Run the agent:

yarn run dev

Example:

>> What is (23 * 7) + 15 ?
= 176

🔮 Future Plans

Extend the agent beyond calculations

Experiment with multi-step reasoning and planning

Connect external tools/APIs for richer workflows

Explore evaluation and observability with LangSmith

📚 Learning Journey

This repo is a log of my first experiments with agentic AI.
I’ll keep iterating, learning, and pushing toward more advanced AI agent systems 🚀
