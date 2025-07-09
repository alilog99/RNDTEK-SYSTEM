import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  Zap,
  Cpu,
  Target,
  Globe
} from 'lucide-react';
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import Btn from "../../button/button";
import arr from "../../../../../assets/imgs/arrowblack.png";

const AIServiceCard = ({ icon: Icon, title, description, delay, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      style={{
        background: 'white',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: `2px solid ${color}20`,
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        background: `linear-gradient(135deg, ${color} 0%, ${color}80 100%)`,
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <Icon size={30} color="white" />
      </div>
      <h3 style={{
        fontSize: '20px',
        fontWeight: '600',
        color: '#333',
        marginBottom: '15px'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '14px',
        color: '#666',
        lineHeight: '1.6',
        margin: 0
      }}>
        {description}
      </p>
    </motion.div>
  );
};

const AIHomeSection = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI & ML Integration",
      description: "Seamlessly integrate cutting-edge artificial intelligence and machine learning models into your existing systems.",
      color: "#667eea"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics and visualization solutions.",
      color: "#764ba2"
    },
    {
      icon: MessageSquare,
      title: "Intelligent Chatbots",
      description: "Build conversational AI that enhances customer experience with 24/7 support and intelligent responses.",
      color: "#f093fb"
    },
    {
      icon: TrendingUp,
      title: "AI Predictions",
      description: "Leverage predictive analytics to forecast trends and optimize operations with machine learning models.",
      color: "#4facfe"
    },
    {
      icon: Cpu,
      title: "Process Automation",
      description: "Automate complex business processes with AI-powered workflows and intelligent decision systems.",
      color: "#43e97b"
    },
    {
      icon: Target,
      title: "Innovation Tools",
      description: "From concept to commercialization, our AI tools support inventors throughout their journey.",
      color: "#fa709a"
    }
  ];

  return (
    <div style={{ 
      padding: '80px 0', 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <Fade bottom>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '25px',
                  padding: '8px 20px',
                  marginBottom: '20px'
                }}>
                  <Zap size={20} color="white" style={{ marginRight: '10px' }} />
                  <span style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>
                    AI-Powered Solutions
                  </span>
                </div>
                
                <h2 style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#333',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Future-Ready AI Services
                </h2>
                
                <p style={{
                  fontSize: '20px',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Transform your business with cutting-edge artificial intelligence solutions. 
                  From predictive analytics to intelligent automation, we help you stay ahead of the curve.
                </p>
              </motion.div>
            </div>
          </Fade>
        </ScrollAnimation>

        <Grid container spacing={4}>
          {aiServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AIServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                delay={index * 0.1}
              />
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <NavLink
            exact
            to="/ai-services-page"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Btn
              Gname="Explore AI Solutions"
              imgarr={arr}
              style={{
                position: "relative",
                maxHeight: "123px",
                color: "white",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                minHeight: "59px",
                width: "250px",
                borderRadius: "43px",
                marginTop: "20px",
                outline: "0px",
                border: "none",
                fontSize: "18px",
                fontWeight: "600"
              }}
            />
          </NavLink>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            padding: '40px',
            marginTop: '60px',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '32px', marginBottom: '30px' }}>
            AI Success Metrics
          </h3>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>
                94%
              </div>
              <div style={{ fontSize: '18px' }}>Accuracy Rate</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>
                24.5%
              </div>
              <div style={{ fontSize: '18px' }}>Revenue Growth</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>
                12.5K
              </div>
              <div style={{ fontSize: '18px' }}>AI Users</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>
                500+
              </div>
              <div style={{ fontSize: '18px' }}>Projects Delivered</div>
            </Grid>
          </Grid>
        </motion.div>
      </div>
    </div>
  );
};

export default AIHomeSection; 