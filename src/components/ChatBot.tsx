"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, MessageCircle } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialResponses = [
  "Thank you for reaching out! I'd be happy to help you learn about dental implant options. What's your primary concern — comfort, appearance, or functionality?",
  "Great question! Dental implants can solve many denture-related issues. Would you like to know about single implants, implant-supported dentures, or full arch solutions?",
  "Our free consultation can help determine the best solution for your specific needs. Would you like to schedule one, or do you have more questions?",
];

const knowledgeBase = {
  "cost": "We offer competitive pricing on all implant solutions. Our LeClerq-Martinez Bridge — the premium fixed full-arch option — is available for less than half what you'd find elsewhere in the US, thanks to our in-house implant laboratory. Fees vary by treatment: 2 Implant Overdenture starts around $3,000-$6,500 per arch, Hybrid on 4 implants is around $8,700 per arch, and our LM Bridge is also $8,700 per arch with minor grafting included. During your free consultation, we'll create a personalized treatment plan with transparent pricing. Would you like to schedule one?",
  "pain": "Most patients report minimal discomfort during implant procedures, thanks to modern anesthesia and sedation options. We offer both IV and oral conscious sedation so you can have invasive procedures with little to no memory of the appointment. Any post-procedure soreness typically subsides within a few days. Our team will ensure you're comfortable throughout the entire process.",
  "time": "Implants typically take 4-6 months to heal depending on whether they're placed in extraction sites or healed bone. Temporary restorations are often provided at various stages. For the LM Bridge and 4-implant hybrid, most patients leave with a temporary restoration within a week of surgery. The final restoration is delivered after healing is complete — typically 3 weeks to 3 months after that.",
  "all-on-4": "The 4-implant approach has limitations that the LeClerq-Martinez Bridge solves. What if one implant fails? What if a crown chips? What do patients wear during repairs? Our LM Bridge uses 6-10 implants for superior support, less bone/gum shrinkage issues, and easy individual crown repair — no expensive temporaries needed. It's the restoration of choice for durability, aesthetics, repairability, and maximum comfort. We offer the 4-implant hybrid at $8,700 per arch, but the LM Bridge at the same price point is the superior choice.",
  "consultation": "Our free consultation includes a review of your dental history, thorough examination, discussion of your goals and concerns, explanation of all treatment options, and a personalized treatment plan. There's no obligation — just honest answers about which solution is right for you. Schedule by calling 331.287.3420 or filling out our contact form.",
  "insurance": "We understand cost is a major factor. We work with most insurance plans and offer flexible financing options. Because we handle both surgical and restorative procedures in-house, we're able to offer lower prices than most dental offices. Call us at 331.287.3420 to discuss payment options.",
  "lm bridge": "The LeClerq-Martinez Implant Bridge is our signature solution. Perfected by Dr. Philippe LeClerq of Paris and his master technician Jean-François Martinez, it features a screw-retained implant framework with individually cemented crowns. Key benefits: 6-10 implants for maximum support, individual crown repair without removing the entire bridge, less tissue shrinkage, no need for expensive temporaries during repairs, and a natural feel without bulky plastic. And at $8,700 per arch, it's the best value in the US.",
  "sedation": "We offer both IV and oral conscious sedation for your comfort. This allows invasive procedures to be accomplished with little to no memory of the appointment. Another benefit is that more can be accomplished in fewer appointments. Sedation can be safely administered to most patients — just follow the special pre-op instructions. Many patients say they wouldn't have been able to complete their treatment without sedation.",
  "warranty": "Unlike other providers, we include a 3-year limited warranty on all final restorations at no additional cost. The peace of mind from knowing your implant surgery and reconstruction were done properly is priceless. Plus, with the LM Bridge, repairs are simple — almost any dentist can replace a single crown without removing the entire bridge.",
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm here to help answer your questions about dental implants. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(key)) {
        return value;
      }
    }

    if (lowerMessage.includes("schedule") || lowerMessage.includes("appointment") || lowerMessage.includes("book")) {
      return "Great! You can schedule your free consultation by calling 331.287.3420, emailing info@halcyon.dental, filling out the contact form on this page, or clicking the 'Get Free Consultation' button. What time works best for you?";
    }

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! I'm here to help you explore dental implant options. Whether you have questions about procedures, costs, or want to schedule a consultation, I'm happy to assist. What would you like to know?";
    }

    return initialResponses[Math.floor(Math.random() * initialResponses.length)];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[500px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-500 to-amber-400 p-4 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white">Dental Implant Assistant</h3>
          <p className="text-xs text-white/80">Typically replies in seconds</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex items-start space-x-2 max-w-[80%] ${
                message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "user"
                    ? "bg-sky-500"
                    : "bg-gradient-to-br from-sky-500 to-amber-400"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-sky-500 text-white rounded-tr-sm"
                    : "bg-slate-100 text-slate-800 rounded-tl-sm"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-amber-400 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-amber-400 flex items-center justify-center text-white hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-center space-x-1 text-xs text-slate-400">
          <MessageCircle className="w-3 h-3" />
          <span>Powered by AI — for informational purposes only</span>
        </div>
      </form>
    </div>
  );
}