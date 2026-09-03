from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import ai

app = FastAPI(
    title="FitZone Gym API",
    description="Backend API for FitZone Gym Management Platform",
    version="1.0.0"
)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.api import ai, contact
from app.database import engine, Base
from app.models import ContactMessage

# Create tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(ai.router, prefix="/api/ai", tags=["AI Coach"])
app.include_router(contact.router, prefix="/api/contact", tags=["Contact"])
app.include_router(contact.admin_router, prefix="/api/admin", tags=["Admin Contact"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the FitZone Gym API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
