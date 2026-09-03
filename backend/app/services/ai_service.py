import os
from abc import ABC, abstractmethod
from typing import List, Tuple, Optional

from app.schemas import Message, ChatAction
from app.services.fitzone_knowledge import FITZONE_KNOWLEDGE

class BaseAIProvider(ABC):
    @abstractmethod
    async def generate_response(
        self,
        history: List[Message],
        current_message: str
    ) -> Tuple[str, str, List[str], Optional[ChatAction]]:
        pass

class IntelligentMockProvider(BaseAIProvider):
    async def generate_response(
        self,
        history: List[Message],
        current_message: str
    ) -> Tuple[str, str, List[str], Optional[ChatAction]]:
        msg = current_message.lower()
        
        # 1. Check conversation memory (Context)
        if len(history) > 0:
            last_msg = history[-1]
            if last_msg.role == "assistant":
                last_ai = last_msg.content.lower()
                if "age, height, weight" in last_ai and any(char.isdigit() for char in msg):
                    if "program" in msg or "fitzone" in msg:
                        return (
                            "Thanks. Based on those details, our 'Weight Loss' program would be perfect for you. It provides structured workouts and nutrition for sustainable fat loss tailored to your metrics.",
                            "mixed_fitness_fitzone",
                            ["conversation_context", "fitzone_knowledge"],
                            ChatAction(label="Explore Programs", path="/programs")
                        )
                    return (
                        "Thanks. Based on those details, your estimated maintenance calories are around 2500 kcal. To lose weight, aim for a 300-500 calorie deficit. Would you like to check out FitZone's specific weight loss program?",
                        "general_fitness",
                        ["conversation_context"],
                        ChatAction(label="Open Fitness Calculators", path="/calculators")
                    )
        
        # 2. Check FitZone Specific Intents
        is_fitzone_query = "fitzone" in msg or "your" in msg or "you have" in msg or "cost" in msg or "price" in msg

        if "membership" in msg or "cost" in msg or "price" in msg or "plan" in msg:
            plans = "\\n".join([f"- {p['name']}: {p['price']} ({p['details']})" for p in FITZONE_KNOWLEDGE["membership"]])
            return (
                f"FitZone currently offers the following membership plans:\\n{plans}\\n\\nYou can view the full membership details and sign up on our Membership page.",
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="View Memberships", path="/membership")
            )
        elif "trial" in msg or "free" in msg:
            return (
                FITZONE_KNOWLEDGE["trial"],
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="Claim Free Trial", path="/membership")
            )
        elif "trainer" in msg or "coach" in msg:
            trainers = "\\n".join([f"- {t['name']} ({t['specialty']}, {t['experience']} experience)" for t in FITZONE_KNOWLEDGE["trainers"]])
            return (
                f"We have an elite team of certified personal trainers:\\n{trainers}\\n\\nYou can choose from our available trainers and book a session from the Trainers page.",
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="View Trainers", path="/trainers")
            )
        elif "program" in msg or ("weight loss" in msg and is_fitzone_query):
            progs = "\\n".join([f"- {p['name']}: {p['focus']}" for p in FITZONE_KNOWLEDGE["programs"]])
            
            if "weight loss" in msg:
                return (
                    "FitZone definitely has a weight-loss program! It features structured workouts and nutrition for sustainable fat loss. We also offer several other programs:\\n" + progs,
                    "mixed_fitness_fitzone",
                    ["fitzone_knowledge", "general_fitness"],
                    ChatAction(label="Explore Programs", path="/programs")
                )
            
            return (
                f"FitZone offers scientifically backed training programs tailored to your goals:\\n{progs}",
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="Explore Programs", path="/programs")
            )
        elif "time" in msg or "timing" in msg or "open" in msg or "hour" in msg:
            return (
                f"FitZone's operating hours are: {FITZONE_KNOWLEDGE['gym']['timings']}.",
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="Contact FitZone", path="/contact")
            )
        elif "facility" in msg or "facilities" in msg or "equipment" in msg:
            facs = "\\n".join([f"- {f}" for f in FITZONE_KNOWLEDGE["facilities"]])
            return (
                f"FitZone provides world-class amenities, including:\\n{facs}",
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="About FitZone", path="/about")
            )
        elif "location" in msg or "where" in msg or "address" in msg:
            return (
                f"FitZone is located at {FITZONE_KNOWLEDGE['gym']['location']}. You can find our full contact information and map on the Contact page.",
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="Contact FitZone", path="/contact")
            )
        elif "contact" in msg or "phone" in msg or "email" in msg:
            return (
                f"You can reach us by phone at {FITZONE_KNOWLEDGE['gym']['phone']} or email us at {FITZONE_KNOWLEDGE['gym']['email']}.",
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="Contact FitZone", path="/contact")
            )
        elif "rule" in msg or "policy" in msg:
            rules = "\\n".join([f"- {r}" for r in FITZONE_KNOWLEDGE["rules"]])
            return (
                f"Our gym policies ensure a great environment for everyone:\\n{rules}",
                "fitzone_specific",
                ["fitzone_knowledge"],
                None
            )
        elif msg == "tell me about fitzone gym." or "about fitzone" in msg:
            return (
                f"{FITZONE_KNOWLEDGE['gym']['name']} is {FITZONE_KNOWLEDGE['gym']['description']} We are located at {FITZONE_KNOWLEDGE['gym']['location']}.",
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="About FitZone", path="/about")
            )
            
        # 3. Check General Fitness Intents
        if "5-day" in msg or "5 day" in msg or "workout plan" in msg:
            return (
                "**5-Day Workout Plan:**\\n\\nDay 1: Upper Body (Push)\\nDay 2: Lower Body (Quad)\\nDay 3: Active Recovery\\nDay 4: Upper Body (Pull)\\nDay 5: Lower Body (Hamstring)\\n\\nMake sure to rest 60-90s between sets! If you have any injuries, please consult a qualified healthcare professional before starting.",
                "general_fitness",
                ["general_fitness"],
                None
            )
        elif "muscle gain" in msg or "protein" in msg:
            return (
                "For muscle gain, you need a caloric surplus and adequate protein. Aim for 1.6-2.2g of protein per kg of body weight. Good sources include chicken breast, eggs, lentils, tofu, and whey protein.",
                "general_fitness",
                ["general_fitness"],
                ChatAction(label="Open Fitness Calculators", path="/calculators")
            )
        elif "beginner workout" in msg:
            return (
                "A great beginner workout focuses on full-body compound movements 3 days a week. Try this:\\n\\n1. Goblet Squats: 3x12\\n2. Dumbbell Press: 3x12\\n3. Lat Pulldowns: 3x12\\n4. Plank: 3x30s\\n\\nIf you're unsure about form, consider booking a FitZone personal trainer!",
                "general_fitness",
                ["general_fitness"],
                ChatAction(label="View Trainers", path="/trainers")
            )
        elif "lose weight" in msg or "fat loss" in msg:
            return (
                "Great goal! To help you lose weight effectively and safely, I need to personalize your plan. What's your age, height, weight and activity level?",
                "general_fitness",
                ["conversation_context"],
                None
            )
        elif "bmi" in msg:
            return (
                "BMI (Body Mass Index) is a quick calculation (weight in kg divided by height in meters squared) used to categorize weight into underweight, normal, overweight, or obese. You can use our Fitness Calculators page to find yours!",
                "general_fitness",
                ["general_fitness"],
                ChatAction(label="Open Fitness Calculators", path="/calculators")
            )
        elif "chest" in msg:
            return (
                "For a complete chest workout, target all parts of the pectorals:\\n\\n1. Barbell Bench Press: 4x8\\n2. Incline Dumbbell Press: 3x10\\n3. Cable Crossovers: 3x15\\n4. Pushups: 3 to failure.",
                "general_fitness",
                ["general_fitness"],
                None
            )
        elif "recover" in msg or "recovery" in msg:
            return (
                "Proper recovery is essential! Prioritize sleep (7-9 hours), hydration, and sufficient protein. FitZone also has a dedicated Recovery Zone with a Sauna and Ice baths you can utilize!",
                "mixed_fitness_fitzone",
                ["general_fitness", "fitzone_knowledge"],
                None
            )
        elif "injury" in msg or "pain" in msg or "hurt" in msg:
            return (
                "I cannot provide medical advice or diagnose injuries. Please consult an appropriately qualified healthcare professional or physical therapist for serious medical conditions or concerning symptoms.",
                "general_fitness",
                ["general_fitness"],
                None
            )

        # 4. Fallback for unrecognized FitZone queries
        if is_fitzone_query:
            return (
                "I don't have that specific FitZone information right now. You can check our website pages or contact the FitZone team directly for assistance.",
                "fitzone_specific",
                ["fitzone_knowledge"],
                ChatAction(label="Contact FitZone", path="/contact")
            )

        return (
            "I'm Pulse AI, your fitness assistant. I can help you with workout plans, nutrition advice, or explain fitness concepts. What would you like to focus on today?",
            "general_fitness",
            ["general_fitness"],
            None
        )

class LLMProvider(BaseAIProvider):
    def __init__(self, api_key: str):
        self.api_key = api_key

    async def generate_response(
        self,
        history: List[Message],
        current_message: str
    ) -> Tuple[str, str, List[str], Optional[ChatAction]]:
        # In a real app, you would pass FITZONE_KNOWLEDGE as system context
        return (
            f"[Real LLM Response using history of {len(history)} messages. Received: {current_message}]",
            "general_fitness",
            ["llm"],
            None
        )

def get_ai_service() -> BaseAIProvider:
    provider_type = os.getenv("AI_PROVIDER", "mock").lower()
    api_key = os.getenv("AI_API_KEY")

    if provider_type == "mock" or not api_key:
        return IntelligentMockProvider()
    else:
        return LLMProvider(api_key=api_key)
