import { motion } from 'framer-motion';
import { Bot, Send, User, Trash2, AlertCircle, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface ChatAction {
  label: string;
  path: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  action?: ChatAction;
}

const AICoach = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 'init-1', 
      role: 'assistant', 
      content: 'Hello! I am Pulse AI, your personal fitness assistant. How can I help you transform today?',
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    const text = textToSend.trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversation_id: conversationId,
          history: messages.filter(m => m.id !== 'init-1')
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      
      if (data.conversation_id) {
        setConversationId(data.conversation_id);
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date().toISOString(),
        action: data.action
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      console.error(err);
      setError("Sorry, I'm having trouble connecting right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  const clearChat = () => {
    setMessages([{ 
      id: Date.now().toString(), 
      role: 'assistant', 
      content: 'Hello! I am Pulse AI, your personal fitness assistant. How can I help you transform today?',
      timestamp: new Date().toISOString()
    }]);
    setConversationId(null);
    setError(null);
  };

  const quickPrompts = [
    "Create a 5-day workout plan", 
    "What should I eat for muscle gain?", 
    "Give me a beginner workout",
    "How can I lose weight?",
    "What is BMI?",
    "How should I recover after training?",
    "Tell me about FitZone Gym.",
    "What membership plans do you have?",
    "Who are your trainers?",
    "What are your gym timings?"
  ];

  return (
    <div className="bg-zinc-950 min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] max-h-[85vh]">
        
        {/* Sidebar Info */}
        <div className="hidden md:flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-lg"><Bot className="h-6 w-6 text-white" /></div>
              <h2 className="text-xl font-bold text-white">Pulse AI</h2>
            </div>
            <button 
              onClick={clearChat}
              className="text-zinc-500 hover:text-red-500 transition-colors p-2"
              title="Clear Chat"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            Your 24/7 personal AI fitness coach. Ask about workouts, nutrition planning, FitZone facilities, or tracking progress.
          </p>
          <div className="mt-auto overflow-hidden flex flex-col">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 shrink-0">Try Asking</h3>
            <ul className="space-y-2 overflow-y-auto flex-1 hide-scrollbar pr-2 pb-4">
              {quickPrompts.map((q, i) => (
                <li 
                  key={i} 
                  onClick={() => handleSend(q)}
                  className="text-sm text-zinc-300 bg-zinc-950 border border-zinc-800 p-3 rounded-lg hover:border-orange-500 cursor-pointer transition-colors"
                >
                  "{q}"
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chat Area */}
        <div className="md:col-span-2 flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative">
          
          {/* Header */}
          <div className="bg-zinc-950 border-b border-zinc-800 p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="h-6 w-6 text-orange-500" />
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-zinc-950"></span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Pulse AI Coach</h3>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <button onClick={clearChat} className="md:hidden text-zinc-500 hover:text-red-500 p-2">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-6"
          >
            {messages.map((msg) => (
              <motion.div 
                key={msg.id} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${msg.role === 'assistant' ? 'bg-orange-500/10' : 'bg-zinc-800'}`}>
                  {msg.role === 'assistant' ? <Bot className="h-5 w-5 text-orange-500" /> : <User className="h-5 w-5 text-zinc-300" />}
                </div>
                <div className="max-w-[80%] flex flex-col items-start">
                  <div className={`w-full rounded-2xl p-4 text-sm whitespace-pre-wrap leading-relaxed ${msg.role === 'assistant' ? 'bg-zinc-800 text-zinc-200 rounded-tl-none' : 'bg-orange-500 text-white rounded-tr-none'}`}>
                    {msg.content}
                  </div>
                  {msg.action && (
                    <Link 
                      to={msg.action.path}
                      className="mt-2 inline-block rounded-md bg-zinc-950 border border-orange-500/30 px-4 py-2 text-xs font-bold text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      {msg.action.label}
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-orange-500/10">
                  <Bot className="h-5 w-5 text-orange-500" />
                </div>
                <div className="bg-zinc-800 rounded-2xl rounded-tl-none p-4 flex items-center gap-2 h-[52px]">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </motion.div>
            )}

            {/* Error Message inside chat */}
            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20 mx-10"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </motion.div>
            )}
          </div>

          {/* Input Form */}
          <div className="p-4 bg-zinc-950 border-t border-zinc-800 shrink-0">
            <form onSubmit={onSubmit} className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={isLoading}
                placeholder="Ask about workouts, diet, or FitZone..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-orange-500 text-white hover:bg-orange-400 transition-colors disabled:opacity-50 flex items-center justify-center"
                disabled={!input.trim() || isLoading}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AICoach;