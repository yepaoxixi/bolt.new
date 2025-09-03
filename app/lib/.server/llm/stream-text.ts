import { streamText as _streamText, convertToCoreMessages } from 'ai';
import { getQwenModel } from '~/lib/.server/llm/model';

import { MAX_TOKENS } from './constants';
import { getSystemPrompt } from './prompts';

interface ToolResult<Name extends string, Args, Result> {
  toolCallId: string;
  toolName: Name;
  args: Args;
  result: Result;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  toolInvocations?: ToolResult<string, unknown, unknown>[];
}

export type Messages = Message[];

export type StreamingOptions = Omit<Parameters<typeof _streamText>[0], 'model'>;

export function streamText(messages: Messages, env: Env, options?: StreamingOptions) {
  return _streamText({
    model: getQwenModel() as any,
    system: getSystemPrompt(),
    maxTokens: MAX_TOKENS,
    messages: convertToCoreMessages(messages),
    ...options,
  });
}
