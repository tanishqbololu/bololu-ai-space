import { useState } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "🚀 Hey there! I'm Tanishq's AI assistant. Ask me anything about his skills, projects, or experience!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "What are your main AI skills?",
    "Tell me about your best projects",
    "What's your ML experience?",
    "How can I contact you?"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Enhanced bot responses
    const responses = {
      skills: "🧠 I specialize in Machine Learning, Deep Learning, Computer Vision, and NLP. My tech arsenal includes Python, TensorFlow, PyTorch, OpenCV, YOLOv8, and cloud platforms like AWS and Azure. I'm particularly strong in neural networks and real-time AI systems!",
      projects: "🎯 My standout projects include a Real-Time Object Detection System using YOLOv8, an AI-powered Customer Churn Prediction platform, and an Intelligent Text Summarizer with NLP. Each project showcases different aspects of AI - from computer vision to predictive analytics!",
      experience: "💼 I've gained valuable experience through Tata Group's Data Visualization program and various cutting-edge ML/AI projects. I'm Google Data Analytics certified and achieved IELTS Band 7.5. Currently working on revolutionary AI solutions that push the boundaries of technology!",
      contact: "📧 Ready to collaborate? Reach me at tanishqbololu@gmail.com or +91 9764029249. Based in Hyderabad, India, and always excited about new AI opportunities and innovative projects!"
    };

    let botResponse = "🤔 That's a fascinating question! Feel free to explore my portfolio sections above to dive deeper into my AI and machine learning expertise. What specific area interests you most?";

    if (inputValue.toLowerCase().includes('skill') || inputValue.toLowerCase().includes('ai') || inputValue.toLowerCase().includes('tech')) {
      botResponse = responses.skills;
    } else if (inputValue.toLowerCase().includes('project') || inputValue.toLowerCase().includes('work') || inputValue.toLowerCase().includes('portfolio')) {
      botResponse = responses.projects;
    } else if (inputValue.toLowerCase().includes('experience') || inputValue.toLowerCase().includes('background') || inputValue.toLowerCase().includes('career')) {
      botResponse = responses.experience;
    } else if (inputValue.toLowerCase().includes('contact') || inputValue.toLowerCase().includes('email') || inputValue.toLowerCase().includes('hire')) {
      botResponse = responses.contact;
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 1500);

    setInputValue('');
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Enhanced Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent hover:scale-110 transition-all duration-500 shadow-glow animate-pulse-glow futuristic-border group"
        >
          <div className="relative">
            {isOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <>
                <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-accent animate-pulse" />
              </>
            )}
          </div>
        </Button>
      </div>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-96 max-w-[calc(100vw-3rem)] z-50 animate-slide-in-right">
          <Card className="card-futuristic border-primary/30 holographic">
            <CardHeader className="pb-3 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 text-white rounded-t-lg holographic">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-base font-semibold">AI Assistant</CardTitle>
                  <p className="text-sm opacity-90 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Tanishq's Portfolio Guide
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0 bg-card/95 backdrop-blur-md">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-sm transition-all duration-300 hover:scale-105 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow'
                          : 'bg-muted/70 text-foreground border border-border/20 hover:bg-muted'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-fade-in-up">
                    <div className="bg-muted/70 p-3 rounded-2xl border border-border/20">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="p-4 border-t border-border/20 bg-muted/30">
                  <p className="text-xs text-muted-foreground mb-3 font-medium">Quick questions:</p>
                  <div className="space-y-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full text-left p-3 text-xs bg-card/50 hover:bg-primary/10 hover:text-primary rounded-lg border border-border/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Input */}
              <div className="p-4 border-t border-border/20 bg-muted/20">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything about AI..."
                    className="text-sm bg-card/50 border-border/30 focus:border-primary transition-all duration-300"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:scale-110 transition-all duration-300 shadow-glow"
                    disabled={isTyping || !inputValue.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;