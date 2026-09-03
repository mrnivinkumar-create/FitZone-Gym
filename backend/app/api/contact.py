from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks, Header
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import ContactMessage, MessageStatus
from app.schemas import ContactCreate, ContactResponse, ContactMessageOut
from app.services.email_service import send_contact_notification
from typing import List, Optional
import re

router = APIRouter()

# Placeholder for admin auth dependency. In Phase 2, integrate JWT.
def get_current_admin(authorization: Optional[str] = Header(None)):
    # Currently allowing through for development of the dashboard, 
    # but establishes the protected dependency structure.
    # if not authorization: raise HTTPException(status_code=401)
    return True

@router.post("", response_model=ContactResponse)
def create_contact_message(
    contact: ContactCreate, 
    background_tasks: BackgroundTasks, 
    db: Session = Depends(get_db)
):
    first_name = contact.first_name.strip()
    last_name = contact.last_name.strip()
    email = contact.email.strip()
    message = contact.message.strip()

    # Validation
    if not first_name or not last_name or not message:
        raise HTTPException(status_code=400, detail="First name, last name, and message are required.")
    
    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        raise HTTPException(status_code=400, detail="Invalid email format.")
        
    if len(message) > 2000:
        raise HTTPException(status_code=400, detail="Message too long (limit 2000 chars).")

    new_msg = ContactMessage(
        first_name=first_name,
        last_name=last_name,
        email=email,
        message=message
    )
    db.add(new_msg)
    db.commit()
    db.refresh(new_msg)

    # Send email in background (failure inside won't affect db commit or response)
    background_tasks.add_task(
        send_contact_notification, 
        new_msg.first_name, 
        new_msg.last_name, 
        new_msg.email, 
        new_msg.message
    )

    return {"success": True, "message": "Your message has been sent successfully."}


admin_router = APIRouter(dependencies=[Depends(get_current_admin)])

@admin_router.get("/contact-messages", response_model=List[ContactMessageOut])
def get_messages(db: Session = Depends(get_db)):
    return db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).all()

@admin_router.get("/contact-messages/{msg_id}", response_model=ContactMessageOut)
def get_message(msg_id: int, db: Session = Depends(get_db)):
    msg = db.query(ContactMessage).filter(ContactMessage.id == msg_id).first()
    if not msg:
        raise HTTPException(status_code=404, detail="Message not found")
    return msg

@admin_router.patch("/contact-messages/{msg_id}/read", response_model=ContactMessageOut)
def mark_read(msg_id: int, db: Session = Depends(get_db)):
    msg = db.query(ContactMessage).filter(ContactMessage.id == msg_id).first()
    if not msg:
        raise HTTPException(status_code=404, detail="Message not found")
    
    msg.status = MessageStatus.read
    db.commit()
    db.refresh(msg)
    return msg

@admin_router.patch("/contact-messages/{msg_id}/unread", response_model=ContactMessageOut)
def mark_unread(msg_id: int, db: Session = Depends(get_db)):
    msg = db.query(ContactMessage).filter(ContactMessage.id == msg_id).first()
    if not msg:
        raise HTTPException(status_code=404, detail="Message not found")
    
    msg.status = MessageStatus.unread
    db.commit()
    db.refresh(msg)
    return msg

@admin_router.delete("/contact-messages/{msg_id}")
def delete_message(msg_id: int, db: Session = Depends(get_db)):
    msg = db.query(ContactMessage).filter(ContactMessage.id == msg_id).first()
    if not msg:
        raise HTTPException(status_code=404, detail="Message not found")
    
    db.delete(msg)
    db.commit()
    return {"success": True, "message": "Message deleted"}
