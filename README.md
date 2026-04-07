# AI Resume Analyzer

> Built by BuildON for JustXend

Upload your resume and get an instant ATS score, extracted skills, experience summary, missing keywords, and actionable improvement suggestions — in seconds.

---

## Live Demo

| Service | URL |
|---|---|
| Backend API | _Coming soon_  |
| Frontend | _Coming soon_ |

---

## What It Does

- Upload a PDF or DOCX resume, or paste resume text directly
- Get an ATS score (0-100) based on formatting, keywords, and structure
- Extract all skills mentioned in the resume
- Get a concise experience summary
- See missing keywords that could improve ATS ranking
- Receive specific, actionable improvement suggestions

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, FastAPI |
| AI | OpenAI GPT-4o |
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Hosting | Render (backend), Vercel (frontend) |

---

## Project Structure

```

ai-resume-analyzer/
├── backend/
│   ├── main.py              # FastAPI routes
│   ├── parser.py            # PDF/DOCX text extraction
│   ├── analyzer.py          # OpenAI GPT-4o integration
│   ├── prompt_builder.py    # AI system instructions
│   └── config.py            # API Keys & Env vars
├── frontend/                # Next.js 14+ App Router
│   ├── src/
│   │   ├── app/             # Routes & Layouts
│   │   │   ├── layout.tsx   # Global Fonts/Root
│   │   │   ├── page.tsx     # Landing page with UploadZone
│   │   │   └── globals.css  # Tailwind directives
│   │   ├── components/      # UI Components
│   │   │   ├── shared/      # Reusable UI (Button, Card)
│   │   │   └── upload/      # UploadZone.tsx & Dashboard
│   │   ├── hooks/           # Custom hooks (e.g., useAnalysis)
│   │   └── lib/             # Utils (e.g., api-client.ts)
│   ├── public/              # Static assets (Logos, Icons)
│   ├── tailwind.config.ts   # UI Theme & Colors
│   ├── next.config.mjs
│   └── package.json
├── render.yaml              # Multi-service deployment config
├── requirements.txt         # Backend dependencies
└── README.md

```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/analyze` | Upload PDF or DOCX resume file |
| POST | `/analyze/text` | Paste resume as plain text |

### Example Response
```json
{
  "ats_score": 78,
  "skills": ["Python", "FastAPI", "SQL", "Docker"],
  "experience_summary": "5 years of experience in backend development...",
  "missing_keywords": ["CI/CD", "Kubernetes", "Agile"],
  "improvements": [
    "Add quantifiable achievements to each role",
    "Include a skills section at the top",
    "Use more action verbs"
  ]
}
```

---

## Running Locally
```bash
# Clone the repo
git clone https://github.com/PerceptronCipher/ai-resume-analyzer.git
cd ai-resume-analyzer

# Set up backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run backend (OPENAI_API_KEY must be set in your shell)
cd backend
python -m uvicorn main:app --reload

# Run frontend
cd frontend
npm install
npm run dev
```

---

## License

MIT © 2025 BuilON
