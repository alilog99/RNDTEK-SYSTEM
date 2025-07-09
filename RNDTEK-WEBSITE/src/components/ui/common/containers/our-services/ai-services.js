import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  FileText, 
  Lightbulb,
  Database,
  Cpu,
  Zap,
  Target
} from 'lucide-react';
import Grid from "@material-ui/core/Grid";
import Btn from "../../button/button";
import arr from "../../../../../assets/imgs/arrowblack.png";

const AIServiceCard = ({ icon: Icon, title, description, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        padding: '30px',
        margin: '20px 0',
        color: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px'
        }}
      >
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '15px'
        }}>
          <Icon size={30} color="white" />
        </div>
        <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '600' }}>{title}</h3>
      </motion.div>
      <p style={{ 
        lineHeight: '1.6', 
        fontSize: '16px',
        opacity: 0.9,
        margin: 0
      }}>
        {description}
      </p>
    </motion.div>
  );
};

const AIServices = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI & ML Integration",
      description: "Seamlessly integrate cutting-edge artificial intelligence and machine learning models into your existing systems. Our expert team specializes in custom AI solutions that drive business growth and operational efficiency.",
      color: "#667eea"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Visualization",
      description: "Transform raw data into actionable insights with our advanced analytics solutions. We create interactive dashboards and predictive models that help you make data-driven decisions.",
      color: "#764ba2"
    },
    {
      icon: MessageSquare,
      title: "Intelligent Chatbots",
      description: "Build conversational AI that enhances customer experience. Our chatbots provide 24/7 support, handle complex queries, and integrate seamlessly with your existing platforms.",
      color: "#f093fb"
    },
    {
      icon: TrendingUp,
      title: "AI Predictions & Forecasting",
      description: "Leverage predictive analytics to forecast trends, optimize operations, and identify opportunities. Our models provide accurate predictions for sales, demand, and market trends.",
      color: "#4facfe"
    },
    {
      icon: FileText,
      title: "IPO & Patent Support",
      description: "AI-powered tools to streamline your IPO process and patent registration. We provide intelligent document analysis, compliance checking, and automated filing assistance.",
      color: "#43e97b"
    },
    {
      icon: Lightbulb,
      title: "Innovation to Inventor",
      description: "From concept to commercialization, our AI tools support inventors throughout their journey. We offer idea validation, market analysis, and intellectual property guidance.",
      color: "#fa709a"
    }
  ];

  return (
    <div style={{ padding: '60px 0', background: '#f8f9fa' }}>
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
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  AI-Powered Solutions
                </h2>
                <p style={{
                  fontSize: '20px',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Transform your business with cutting-edge artificial intelligence solutions. 
                  From data analytics to intelligent automation, we help you stay ahead of the curve.
                </p>
              </motion.div>
            </div>

            <Grid container spacing={4}>
              {aiServices.map((service, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
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
            </motion.div>
          </div>
        </Fade>
      </ScrollAnimation>
    </div>
  );
};

export default AIServices; 