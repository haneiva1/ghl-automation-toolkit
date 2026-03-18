# ghl-automation-toolkit

A toolkit for building serious automations on top of Go High Level. Webhook handlers, AI response generation, contact management, and pipeline automation — battle-tested from real client work.

## What's Inside

```
ghl-automation-toolkit/
├── webhooks/          # Typed handlers for every GHL webhook event
├── ai-responder/      # Auto-respond to inbound leads with GPT-4o
├── pipeline-mover/    # Move contacts through pipelines based on rules
├── appointment-bot/   # AI appointment booking via SMS/email
└── templates/         # Reusable workflow templates
```

## Built From Real Client Work

This toolkit was extracted from production automations built for call centers and sales teams in Bolivia and Latin America. Every module handles real edge cases.

## Tech Stack

- Node.js + TypeScript
- Go High Level REST API v2
- OpenAI GPT-4o
- Fastify (webhook server)
- Supabase (state management)

## Webhook Events Supported

| Event | Handler |
|---|---|
| Contact Created | Auto-tag + assign to pipeline |
| Inbound Message | AI response generation |
| Appointment Booked | Confirmation + reminders |
| Opportunity Stage Changed | Trigger follow-up sequence |
| Form Submitted | Lead qualification + routing |

## Quick Start

```bash
git clone https://github.com/haneiva1/ghl-automation-toolkit
cd ghl-automation-toolkit && npm install
cp .env.example .env
npm run dev
```

## Real-World Use Cases

- Auto-qualify inbound leads from Facebook ads
- Send AI-generated follow-up messages based on pipeline stage
- Sync appointment data to external calendars
- Route hot leads to human reps instantly

---
Built by **Hans Aneiva** — worked with GHL for 1+ year building client automations.
La Paz, Bolivia · haneivag@gmail.com