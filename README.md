# 🧠 NeuroLens AI

> An intelligent Chrome Extension that understands webpages, extracts meaningful content, answers questions, supports voice interaction, remembers previous learning, and adapts itself based on website type.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion |
| **Extension** | Manifest V3, Content Script, Service Worker, Side Panel |
| **Backend** | Node.js, Express, TypeScript, MongoDB, Mongoose |
| **AI** | Gemini, Ollama (fallback) |
| **State** | Zustand, TanStack Query |

## Monorepo Structure

```
neurolens-ai/
├── apps/
│   ├── extension/     # Chrome Extension (Manifest V3)
│   ├── web/           # React Dashboard
│   └── backend/       # Express API Server
├── packages/
│   ├── types/         # Shared TypeScript types
│   ├── shared/        # Shared constants & config
│   ├── utils/         # Shared utilities
│   └── ui/            # Shared UI components
└── docs/              # Documentation
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run web dashboard
pnpm dev:web

# Run backend server
pnpm dev:backend

# Build extension
pnpm build:extension
```

## License

MIT