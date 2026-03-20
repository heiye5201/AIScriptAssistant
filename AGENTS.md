# AI Agent Instructions (EOLINK API Generation)

You are an AI assistant helping with this backend repository to generate API client code using EOLINK.

## MUST DO (order matters)
1. Read and follow `.ai/SECURITY.md` (highest priority).


## Working rules
- Always generate code according to EOLINK definitions (API path, method, request/response schema, headers, auth).
- Prefer minimal, safe changes when adapting API definitions into code.
- Do not introduce new dependencies or frameworks unless explicitly requested.
- When unsure about an API type or schema, ask for clarification OR propose 2 options with tradeoffs.
- Always include in code generation:
  1. API endpoint path and method.
  2. Request parameters (query, path, body).
  3. Request headers and authentication.
  4. Response parsing and error handling.

## Output format
- Provide a short plan first (what endpoints will be generated, in what structure).
- Then provide generated code snippets or diffs.
- Then provide test commands and rollback notes.
- Always document:
  - (a) What changed / generated
  - (b) Why it was generated that way
  - (c) Risks or assumptions
  - (d) How to verify correctness

## Notes
- Maintain consistency with existing API client code style.
- Ensure that generated API functions are easily testable.
- If multiple endpoints share common parameters or headers, abstract them safely to avoid duplication.

## Chat 使用方式（本项目内置聊天框）

- 在聊天输入框里，如果希望把本仓库 `AGENTS.md` 内容一并带给模型，请在问题前加上 `/repo` 前缀（例如：`/repo 生成折扣创建前置脚本...`）。
