import { Agent } from "@mastra/core";

async function main() {
  const agent = new Agent({
    name: "story-writer",
    model: {
      provider: "GOOGLE",
      name: "gemini-1.5-flash-latest",
      toolChoice: "auto",
    },
    instructions: "You are a helpful assistant who writes creative stories.",
  });

  const result = await agent.text({
    messages: ["Write a short story about a robot learning to paint."],
  });

  console.log("Agent response:", result.text);
}

main();
