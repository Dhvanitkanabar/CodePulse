# Architecture

```mermaid
graph TD;
    A[Browser Extension] -->|EventBus| B(Multi-Agent Orchestrator)
    B --> C{Memory Engine}
    B --> D{Knowledge Graph}
    C --> E[Offline IndexedDB]
    C --> F[Cloud Postgres]
```
