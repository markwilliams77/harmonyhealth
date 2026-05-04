import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { io, Socket } from 'socket.io-client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'concierge';
  timestamp: Date;
}

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const socketRef = useRef<Socket | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const CONCIERGE_QUESTIONS = [
    "Welcome. I am your Digital Patient Advisor. To initiate your secure case review, may I have your full name?",
    "Thank you. Which specialized treatment or wellness procedure are you interested in? (e.g., Cardiac Surgery, IVF, Oncology, or Wellness Retreat)",
    "Understood. In which country are you currently located?",
    "Excellent. What is your estimated timeline for travel? (e.g., Immediate, 3-6 months, or preliminary exploration)",
    "Finally, please provide your WhatsApp or mobile number including country code for our board to reach you directly.",
    "Thank you. Your dossier has been successfully transferred to our medical board. An advisor will contact you within 24 hours. For record-keeping, your inquiry is logged to care@harmonycura.com."
  ];

  const submitInquiry = async (allResponses: string[]) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: allResponses[0],
          treatment: allResponses[1],
          location: allResponses[2],
          timeline: allResponses[3],
          phone: allResponses[4],
          responses: allResponses,
          sentTo: 'care@harmonycura.com'
        }),
      });
      
      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Add a specialized confirmation from the concierge
        setTimeout(() => {
          const confirmationMsg: Message = {
            id: crypto.randomUUID(),
            text: "✅ Your file has been successfully synchronized with our medical board. Reference ID: " + Math.random().toString(36).substring(7).toUpperCase(),
            sender: 'concierge',
            timestamp: new Date()
          };
          setChat(prev => [...prev, confirmationMsg]);
        }, 800);
      } else {
        // Handle validation or server errors by showing a message in the chat
        const errorMsg: Message = {
          id: crypto.randomUUID(),
          text: `⚠️ System Note: ${result.error || "The inquiry couldn't be sent."} ${result.tip || ""}`,
          sender: 'concierge',
          timestamp: new Date()
        };
        setChat(prev => [...prev, errorMsg]);
      }
    } catch (err) {
      console.error("Failed to submit inquiry:", err);
      const networkError: Message = {
        id: crypto.randomUUID(),
        text: "❌ Network error. Please check your internet connection or try again later.",
        sender: 'concierge',
        timestamp: new Date()
      };
      setChat(prev => [...prev, networkError]);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Initialize socket
    socketRef.current = io();

    socketRef.current.on('connect', () => {
      setIsConnected(true);
      // Only send the first question if empty
      setChat(prev => {
        if (prev.length === 0) {
          return [{
            id: 'welcome',
            text: CONCIERGE_QUESTIONS[0],
            sender: 'concierge',
            timestamp: new Date()
          }];
        }
        return prev;
      });
    });

    socketRef.current.on('message', (msg: Message) => {
      setChat(prev => {
        if (prev.find(m => m.id === msg.id)) return prev;
        return [...prev, { ...msg, timestamp: new Date(msg.timestamp) }];
      });
    });

    socketRef.current.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !socketRef.current) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    // Emit to server
    socketRef.current.emit('message', userMsg);
    
    // Update local chat
    setChat(prev => [...prev, userMsg]);
    const updatedResponses = [...responses, message];
    setResponses(updatedResponses);
    setMessage('');

    // Trigger next automated question if available
    const nextIndex = questionIndex + 1;
    if (nextIndex < CONCIERGE_QUESTIONS.length) {
      setQuestionIndex(nextIndex);
      
      // If it was the last answer, trigger the submission
      if (nextIndex === CONCIERGE_QUESTIONS.length - 1) {
        submitInquiry(updatedResponses);
      }

      setTimeout(() => {
        const botMsg: Message = {
          id: crypto.randomUUID(),
          text: CONCIERGE_QUESTIONS[nextIndex],
          sender: 'concierge',
          timestamp: new Date()
        };
        setChat(prev => [...prev, botMsg]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary-teal p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Medical Concierge</h3>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-gray-400'}`} />
                    <span className="text-[10px] uppercase tracking-widest text-white/70">
                      {isConnected ? 'Live Support' : 'Connecting...'}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50/50">
              {chat.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary-teal text-white rounded-tr-none' 
                      : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                    <div className={`text-[8px] mt-1 opacity-50 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isSubmitting && (
                <div className="flex justify-center">
                  <div className="bg-primary-teal/10 text-primary-teal text-[10px] px-3 py-1 rounded-full animate-pulse font-medium">
                    Sending inquiry to Harmony Cura...
                  </div>
                </div>
              )}

              {isSubmitted && (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-green-100 text-green-700 text-[10px] px-3 py-1 rounded-full flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      Inquiry successfully logged
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 p-2">
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setQuestionIndex(0);
                        setResponses([]);
                        setChat([{
                          id: 'restart',
                          text: CONCIERGE_QUESTIONS[0],
                          sender: 'concierge',
                          timestamp: new Date()
                        }]);
                      }}
                      className="w-full py-2.5 bg-primary-teal text-white rounded-xl text-xs font-medium hover:bg-primary-teal/90 transition-all shadow-sm"
                    >
                      New Inquiry
                    </button>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="w-full py-2.5 bg-white text-primary-teal border border-gray-100 rounded-xl text-xs font-medium hover:bg-gray-50 transition-all shadow-sm"
                    >
                      Return to Website
                    </button>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2.5 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-primary-teal/20 transition-all text-sm"
              />
              <button 
                type="submit"
                disabled={!message.trim()}
                className="w-10 h-10 bg-primary-teal text-white rounded-xl flex items-center justify-center hover:bg-primary-teal/90 transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-accent-gold text-primary-teal rounded-full shadow-xl flex items-center justify-center relative hover:bg-white transition-all group border-2 border-accent-gold"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-teal text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce shadow-lg">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
};
