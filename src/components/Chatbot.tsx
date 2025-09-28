import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "👋 Hi! I'm Tanishq's AI assistant. Ask me about my skills, projects, or experience!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    "What are your main skills?",
    "Tell me about your projects",
    "What's your experience?",
    "How can I contact you?"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);

    // Simple bot responses
    const responses = {
      skills: "I specialize in Machine Learning, Deep Learning, Computer Vision, and NLP. My tech stack includes Python, TensorFlow, PyTorch, OpenCV, and cloud platforms like AWS and Azure.",
      projects: "I've worked on exciting projects like Real-Time Object Detection with YOLOv8, Customer Churn Prediction using ANNs, and Intelligent Text Summarizers with NLP. Check out the Projects section for more details!",
      experience: "I have experience with Tata Group's Data Visualization program and have completed various ML/AI projects. I'm also Google Data Analytics certified and hold an IELTS Band 7.5.",
      contact: "You can reach me at tanishqbololu@gmail.com or +91 9764029249. I'm based in Hyderabad, India and always open to new opportunities!"
    };

    let botResponse = "That's an interesting question! Feel free to explore my portfolio sections above to learn more about my work in AI and machine learning.";

    if (inputValue.toLowerCase().includes('skill')) {
      botResponse = responses.skills;
    } else if (inputValue.toLowerCase().includes('project')) {
      botResponse = responses.projects;
    } else if (inputValue.toLowerCase().includes('experience') || inputValue.toLowerCase().includes('work')) {
      botResponse = responses.experience;
    } else if (inputValue.toLowerCase().includes('contact') || inputValue.toLowerCase().includes('email')) {
      botResponse = responses.contact;
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 1000);

    setInputValue('');
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse-glow"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[calc(100vw-3rem)] z-50 animate-slide-in-right">
          <Card className="card-elevated border-primary/20">
            <CardHeader className="pb-3 bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <CardTitle className="text-sm">AI Assistant</CardTitle>
                  <p className="text-xs opacity-90">Ask about Tanishq's portfolio</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="p-4 border-t border-border/20">
                  <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                  <div className="space-y-1">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full text-left p-2 text-xs hover:bg-muted/50 rounded transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-border/20">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything..."
                    className="text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-primary hover:bg-primary-dark"
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