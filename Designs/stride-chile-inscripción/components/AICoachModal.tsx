import React, { useState, useRef, useEffect } from 'react';
import { askCoachAI } from '../services/geminiService';

interface AICoachModalProps {
  onClose: () => void;
}

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export const AICoachModal: React.FC<AICoachModalProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: '¡Hola! Soy tu Coach IA de Stride. ¿En qué puedo ayudarte hoy con tu entrenamiento?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await askCoachAI(userMsg);
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-surface-darker border border-[#38292e] rounded-2xl w-full max-w-md h-[600px] flex flex-col shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#38292e] flex justify-between items-center bg-[#261c20]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-purple-400">smart_toy</span>
            <h3 className="font-bold text-white">Coach Stride AI</h3>
          </div>
          <button onClick={onClose} className="text-text-secondary hover:text-white">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-surface-dark border border-[#38292e] text-gray-200 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-surface-dark border border-[#38292e] p-3 rounded-2xl rounded-bl-none flex gap-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-[#38292e] bg-[#261c20]">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pregunta sobre tips, ritmos..."
              className="w-full bg-surface-dark border border-[#38292e] text-white rounded-full pl-4 pr-12 py-3 text-sm focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all"
            />
            <button 
              type="submit"
              disabled={isLoading || !query.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-purple-500 text-white rounded-full hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span className="material-symbols-outlined text-lg">arrow_upward</span>
            </button>
          </div>
          <p className="text-[10px] text-center text-text-secondary mt-2">
            AI puede cometer errores. Verifica la información importante.
          </p>
        </form>
      </div>
    </div>
  );
};