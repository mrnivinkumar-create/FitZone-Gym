from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Message(BaseModel):
    role: str
    content: str
    id: Optional[str] = None
    timestamp: Optional[str] = None

class ChatRequest(BaseModel):
    message: str
    conversation_id: Optional[str] = None
    history: List[Message] = []

class ChatAction(BaseModel):
    label: str
    path: str

class ChatResponse(BaseModel):
    message: str
    conversation_id: str
    intent: str
    sources: List[str]
    action: Optional[ChatAction] = None

# Contact Schemas
class ContactCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str

class ContactMessageOut(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    message: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
