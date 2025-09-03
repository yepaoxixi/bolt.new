import { createAnthropic } from '@ai-sdk/anthropic';
import { createQwen } from "qwen-ai-provider"

export function getQwenModel() {
  const qwen = createQwen({
    apiKey: "sk-a1c78acf7a9e43c4b608402af1d9b30f",
    baseURL:'https://dashscope.aliyuncs.com/compatible-mode/v1',
    headers: { "Custom-Header": "value" },
  })
  return qwen('qwen3-coder-plus-2025-07-22');
}

export function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    apiKey,
  });

  return anthropic('claude-3-5-sonnet-20240620');
}
