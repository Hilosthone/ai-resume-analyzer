# AI Resume Analyzer

> Built by [BuildON](https://builon.com) for [JustXend](https://justxend.com)

Upload your resume and get an instant ATS score, extracted skills, experience summary, missing keywords, and actionable improvement suggestions — in seconds.

---

## Live Demo

| Service | URL |
|---|---|
| Backend API | _Coming soon_ |
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
│   ├── main.py              # API routes
│   ├── parser.py            # Extracts text from PDF and DOCX
│   ├── analyzer.py          # Calls GPT-4o to analyze resume
│   ├── prompt_builder.py    # Builds the analysis instruction prompt
│   └── config.py            # Environment config
├── frontend/                # Next.js app
├── render.yaml              # Render deployment config
├── requirements.txt
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