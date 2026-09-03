import requests
import json

url = "http://localhost:8000/api/ai/chat"
headers = {"Content-Type": "application/json"}

queries = [
    {
        "message": "What are FitZone membership plans?",
        "conversation_id": "test-001",
        "history": []
    },
    {
        "message": "How can I contact FitZone?",
        "conversation_id": "test-002",
        "history": []
    },
    {
        "message": "Who is the bodybuilding trainer?",
        "conversation_id": "test-003",
        "history": []
    }
]

for q in queries:
    print(f"Testing: {q['message']}")
    response = requests.post(url, json=q, headers=headers)
    print(f"Status: {response.status_code}")
    print(json.dumps(response.json(), indent=2))
    print("-" * 40)
