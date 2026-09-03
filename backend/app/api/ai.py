from fastapi import APIRouter, HTTPException, Depends
from app.schemas import ChatRequest, ChatResponse
from app.services.ai_service import get_ai_service, BaseAIProvider
import uuid

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest, ai_service: BaseAIProvider = Depends(get_ai_service)):
    try:
        # Validate message
        if not request.message or len(request.message.strip()) == 0:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        if len(request.message) > 1000:
            raise HTTPException(status_code=400, detail="Message is too long (limit 1000 characters)")

        conv_id = request.conversation_id or str(uuid.uuid4())

        # Generate response using history
        message, intent, sources, action = await ai_service.generate_response(request.history, request.message)

        # The message strings from the mock contain explicit literal '\n', which need to be properly escaped
        # wait, if I used "\\n" in python, it means the python string literally has backslash n. 
        # I'll just do a quick replace if it literally contains "\\n" to make sure it's correct.
        message = message.replace('\\n', '\n')

        return ChatResponse(
            message=message,
            conversation_id=conv_id,
            intent=intent,
            sources=sources,
            action=action
        )
    except Exception as e:
        print(f"Error in chat endpoint: {e}")
        raise HTTPException(status_code=500, detail="Failed to process AI chat request")
