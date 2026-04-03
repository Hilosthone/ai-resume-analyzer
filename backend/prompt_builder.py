def build_analysis_prompt(resume_text: str) -> str:
    return f"""You are an expert ATS (Applicant Tracking System) resume analyst. Analyze the resume below and return a JSON object only — no extra text, no markdown, no backticks.

Resume:
\"\"\"{resume_text}\"\"\"

Analyze and return:
- ats_score: integer 0-100 based on formatting, keywords, structure, and clarity
- skills: list of technical and soft skills found in the resume
- experience_summary: concise 3-5 sentence summary of the candidate's experience
- missing_keywords: list of common industry keywords and skills that are absent
- improvements: list of specific, actionable suggestions to improve the resume

Return ONLY this JSON structure:
{{
  "ats_score": 0,
  "skills": [],
  "experience_summary": "",
  "missing_keywords": [],
  "improvements": []
}}"""