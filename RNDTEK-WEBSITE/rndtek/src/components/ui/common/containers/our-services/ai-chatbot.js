import React, { useState, useRef, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  MessageCircle, 
  Zap,
  Brain,
  TrendingUp,
  Shield
} from 'lucide-react';

const ChatMessage = ({ message, isUser, timestamp }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: '15px'
      }}
    >
      <div style={{
        maxWidth: '70%',
        padding: '12px 16px',
        borderRadius: '18px',
        background: isUser 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : '#f1f3f4',
        color: isUser ? 'white' : '#333',
        position: 'relative',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          {isUser ? (
            <User size={16} style={{ marginRight: '8px' }} />
          ) : (
            <Bot size={16} style={{ marginRight: '8px' }} />
          )}
          <span style={{ fontSize: '12px', opacity: 0.7 }}>
            {isUser ? 'You' : 'AI Assistant'}
          </span>
        </div>
        <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
          {message}
        </div>
        <div style={{ 
          fontSize: '10px', 
          opacity: 0.6, 
          marginTop: '5px',
          textAlign: 'right'
        }}>
          {timestamp}
        </div>
      </div>
    </motion.div>
  );
};

const QuickResponse = ({ text, onClick, isActive }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        padding: '8px 16px',
        borderRadius: '20px',
        border: 'none',
        background: isActive 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'white',
        color: isActive ? 'white' : '#666',
        cursor: 'pointer',
        fontSize: '12px',
        margin: '5px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      {text}
    </motion.button>
  );
};

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickResponses = [
    "Tell me about AI services",
    "How can AI help my business?",
    "What are your pricing plans?",
    "Show me a demo"
  ];

  const aiResponses = {
    "tell me about ai services": "We offer comprehensive AI services including machine learning integration, data analytics, intelligent chatbots, predictive modeling, and automation solutions. Our team specializes in custom AI implementations that drive business growth.",
    "how can ai help my business": "AI can transform your business by automating repetitive tasks, providing data-driven insights, improving customer experience through chatbots, optimizing operations with predictive analytics, and enabling better decision-making through advanced analytics.",
    "what are your pricing plans": "Our pricing is customized based on your specific needs and project scope. We offer flexible packages starting from basic AI integration to comprehensive enterprise solutions. Contact us for a personalized quote.",
    "show me a demo": "I'd be happy to show you a demo! Our team can schedule a personalized demonstration of our AI solutions. Would you like me to connect you with our sales team?"
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
    const userMessage = {
      id: Date.now(),
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: aiResponses[message.toLowerCase()] || "I understand your question. Let me connect you with our AI experts who can provide detailed information about our services.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickResponse = (response) => {
    handleSendMessage(response);
  };

  return (
    <div style={{ padding: '60px 0', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Fade bottom>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#333',
                  marginBottom: '20px'
                }}>
                  AI Chatbot Demo
                </h2>
                <p style={{
                  fontSize: '20px',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Experience our intelligent chatbot technology in action
                </p>
              </motion.div>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'start'
            }}>
              {/* Chatbot Interface */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  height: '600px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Chat Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  paddingBottom: '15px',
                  borderBottom: '1px solid #eee'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}>
                    <Bot size={20} color="white" />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '18px', color: '#333' }}>
                      AI Assistant
                    </h3>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      Online • Ready to help
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div style={{
                  flex: 1,
                  overflowY: 'auto',
                  marginBottom: '20px',
                  padding: '10px'
                }}>
                  <AnimatePresence>
                    {messages.map((message) => (
                      <ChatMessage
                        key={message.id}
                        message={message.text}
                        isUser={message.isUser}
                        timestamp={message.timestamp}
                      />
                    ))}
                  </AnimatePresence>
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '15px'
                      }}
                    >
                      <div style={{
                        padding: '12px 16px',
                        borderRadius: '18px',
                        background: '#f1f3f4',
                        color: '#666',
                        fontSize: '14px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Bot size={16} style={{ marginRight: '8px' }} />
                          AI Assistant is typing...
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Responses */}
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                    Quick responses:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {quickResponses.map((response, index) => (
                      <QuickResponse
                        key={index}
                        text={response}
                        onClick={() => handleQuickResponse(response)}
                      />
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #ddd',
                  borderRadius: '25px',
                  padding: '8px',
                  background: '#f8f9fa'
                }}>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && inputValue.trim()) {
                        handleSendMessage(inputValue.trim());
                      }
                    }}
                    placeholder="Type your message..."
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      fontSize: '14px',
                      padding: '8px 12px'
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => inputValue.trim() && handleSendMessage(inputValue.trim())}
                    disabled={!inputValue.trim()}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                      opacity: inputValue.trim() ? 1 : 0.5
                    }}
                  >
                    <Send size={16} color="white" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 style={{
                  fontSize: '32px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '30px'
                }}>
                  Chatbot Features
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    {
                      icon: Brain,
                      title: "Natural Language Processing",
                      description: "Advanced NLP capabilities for understanding context and intent"
                    },
                    {
                      icon: Zap,
                      title: "Real-time Responses",
                      description: "Instant replies with intelligent conversation flow"
                    },
                    {
                      icon: TrendingUp,
                      title: "Learning & Improvement",
                      description: "Continuously learns from interactions to provide better service"
                    },
                    {
                      icon: Shield,
                      title: "Secure & Reliable",
                      description: "Enterprise-grade security with 99.9% uptime guarantee"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        padding: '20px',
                        background: 'white',
                        borderRadius: '15px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                      }}
                    >
                      <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px',
                        flexShrink: 0
                      }}>
                        <feature.icon size={24} color="white" />
                      </div>
                      <div>
                        <h4 style={{
                          margin: '0 0 8px 0',
                          fontSize: '18px',
                          color: '#333',
                          fontWeight: '600'
                        }}>
                          {feature.title}
                        </h4>
                        <p style={{
                          margin: 0,
                          fontSize: '14px',
                          color: '#666',
                          lineHeight: '1.5'
                        }}>
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Fade>
      </ScrollAnimation>
    </div>
  );
};

export default AIChatbot; 