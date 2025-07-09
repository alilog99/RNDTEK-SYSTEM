import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import { motion, useAnimation } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  Target,
  Zap
} from 'lucide-react';

const AnalyticsCard = ({ icon: Icon, title, value, change, color, delay }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay }}
      style={{
        background: 'white',
        borderRadius: '15px',
        padding: '25px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        border: `2px solid ${color}20`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ 
            margin: '0 0 10px 0', 
            fontSize: '16px', 
            color: '#666',
            fontWeight: '500'
          }}>
            {title}
          </h3>
          <div style={{ 
            fontSize: '32px', 
            fontWeight: '700', 
            color: color,
            marginBottom: '5px'
          }}>
            {value}
          </div>
          <div style={{ 
            fontSize: '14px', 
            color: change >= 0 ? '#10b981' : '#ef4444',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <TrendingUp size={16} />
            {change >= 0 ? '+' : ''}{change}%
          </div>
        </div>
        <div style={{
          background: `${color}20`,
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon size={30} color={color} />
        </div>
      </div>
    </motion.div>
  );
};

const SimpleChart = ({ data, type = 'bar', height = 200 }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  if (type === 'bar') {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'end', 
        height: height, 
        gap: '10px',
        padding: '20px 0'
      }}>
        {data.map((item, index) => (
          <div key={index} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              height: `${(item.value / maxValue) * 100}%`,
              borderRadius: '4px 4px 0 0',
              minHeight: '10px',
              transition: 'height 0.5s ease',
              animation: `growBar 1s ease-out ${index * 0.1}s both`
            }} />
            <div style={{ 
              fontSize: '12px', 
              color: '#666', 
              marginTop: '8px',
              fontWeight: '500'
            }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  return null;
};

const AIAnalytics = () => {
  const [activeChart, setActiveChart] = useState('revenue');

  // Sample data for charts
  const revenueData = [
    { label: 'Jan', value: 40 },
    { label: 'Feb', value: 30 },
    { label: 'Mar', value: 20 },
    { label: 'Apr', value: 28 },
    { label: 'May', value: 19 },
    { label: 'Jun', value: 24 },
    { label: 'Jul', value: 35 }
  ];

  const userData = [
    { label: 'Jan', value: 24 },
    { label: 'Feb', value: 22 },
    { label: 'Mar', value: 23 },
    { label: 'Apr', value: 20 },
    { label: 'May', value: 22 },
    { label: 'Jun', value: 25 },
    { label: 'Jul', value: 21 }
  ];

  const aiServicesData = [
    { label: 'ML Models', value: 35 },
    { label: 'Data Analytics', value: 25 },
    { label: 'Chatbots', value: 20 },
    { label: 'Predictions', value: 15 },
    { label: 'Automation', value: 5 }
  ];

  const performanceData = [
    { label: 'Accuracy', value: 92 },
    { label: 'Speed', value: 88 },
    { label: 'Efficiency', value: 95 },
    { label: 'Scalability', value: 90 }
  ];

  const analyticsCards = [
    {
      icon: DollarSign,
      title: "AI Revenue Growth",
      value: "$2.4M",
      change: 24.5,
      color: "#10b981"
    },
    {
      icon: Users,
      title: "AI Users",
      value: "12.5K",
      change: 18.2,
      color: "#3b82f6"
    },
    {
      icon: Activity,
      title: "Model Accuracy",
      value: "94.2%",
      change: 8.7,
      color: "#8b5cf6"
    },
    {
      icon: Target,
      title: "Cost Reduction",
      value: "32%",
      change: -15.3,
      color: "#f59e0b"
    }
  ];

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
                  AI Analytics Dashboard
                </h2>
                <p style={{
                  fontSize: '20px',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Real-time insights and predictive analytics powered by artificial intelligence
                </p>
              </motion.div>
            </div>

            {/* Analytics Cards */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '60px'
            }}>
              {analyticsCards.map((card, index) => (
                <AnalyticsCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  value={card.value}
                  change={card.change}
                  color={card.color}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* Chart Navigation */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}>
              {[
                { id: 'revenue', label: 'Revenue Analytics' },
                { id: 'users', label: 'User Growth' },
                { id: 'services', label: 'AI Services' },
                { id: 'performance', label: 'Performance Comparison' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveChart(tab.id)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '25px',
                    border: 'none',
                    background: activeChart === tab.id 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'white',
                    color: activeChart === tab.id ? 'white' : '#666',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '500',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Charts */}
            <motion.div
              key={activeChart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                marginBottom: '40px'
              }}
            >
              {activeChart === 'revenue' && (
                <div>
                  <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                    Revenue Growth with AI Integration
                  </h3>
                  <SimpleChart data={revenueData} type="bar" height={300} />
                </div>
              )}

              {activeChart === 'users' && (
                <div>
                  <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                    User Growth Analysis
                  </h3>
                  <SimpleChart data={userData} type="bar" height={300} />
                </div>
              )}

              {activeChart === 'services' && (
                <div>
                  <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                    AI Services Distribution
                  </h3>
                  <SimpleChart data={aiServicesData} type="bar" height={300} />
                </div>
              )}

              {activeChart === 'performance' && (
                <div>
                  <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                    Performance Comparison: Traditional vs AI-Enhanced
                  </h3>
                  <SimpleChart data={performanceData} type="bar" height={300} />
                </div>
              )}
            </motion.div>

            {/* Key Insights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: '40px',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>
                Key Insights
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '30px',
                marginTop: '30px'
              }}>
                <div>
                  <Zap size={40} style={{ marginBottom: '15px' }} />
                  <h4>94.2% Accuracy</h4>
                  <p>AI models outperform traditional methods</p>
                </div>
                <div>
                  <TrendingUp size={40} style={{ marginBottom: '15px' }} />
                  <h4>24.5% Growth</h4>
                  <p>Revenue increase with AI integration</p>
                </div>
                <div>
                  <Users size={40} style={{ marginBottom: '15px' }} />
                  <h4>12.5K Users</h4>
                  <p>Active AI-powered platform users</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Fade>
      </ScrollAnimation>
      
      <style jsx>{`
        @keyframes growBar {
          from {
            height: 0;
          }
          to {
            height: var(--target-height);
          }
        }
      `}</style>
    </div>
  );
};

export default AIAnalytics; 