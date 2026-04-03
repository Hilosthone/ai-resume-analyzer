import os
from io import BytesIO
from PyPDF2 import PdfReader
from docx import Document
from config import SUPPORTED_FORMATS


def extract_text(filename: str, content: bytes) -> str:
    ext = os.path.splitext(filename)[-1].lower()

    if ext not in SUPPORTED_FORMATS:
        raise ValueError(f"Unsupported format: {ext}. Supported: {SUPPORTED_FORMATS}")

    if ext == ".pdf":
        reader = PdfReader(BytesIO(content))
        return "\n".join(page.extract_text() or "" for page in reader.pages)

    if ext == ".docx":
        doc = Document(BytesIO(content))
        return "\n".join(p.text for p in doc.paragraphs)