import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Rocket, 
  Target, 
  TrendingUp, 
  Shield, 
  Users,
  FileText,
  Award,
  Globe,
  Zap
} from 'lucide-react';
import Grid from "@material-ui/core/Grid";
import Btn from "../../button/button";
import arr from "../../../../../assets/imgs/arrowblack.png";

const InnovationStep = ({ step, icon: Icon, title, description, delay, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      style={{
        background: isActive 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'white',
        borderRadius: '20px',
        padding: '30px',
        margin: '20px 0',
        color: isActive ? 'white' : '#333',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        position: 'relative',
        border: isActive ? 'none' : '2px solid #f0f0f0',
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{
          background: isActive 
            ? 'rgba(255,255,255,0.2)' 
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '15px',
          position: 'relative'
        }}>
          <Icon size={30} color={isActive ? 'white' : 'white'} />
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: '#10b981',
            color: 'white',
            borderRadius: '50%',
            width: '25px',
            height: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {step}
          </div>
        </div>
        <h3 style={{ 
          margin: 0, 
          fontSize: '24px', 
          fontWeight: '600',
          color: isActive ? 'white' : '#333'
        }}>
          {title}
        </h3>
      </div>
      <p style={{ 
        lineHeight: '1.6', 
        fontSize: '16px',
        opacity: isActive ? 0.9 : 0.8,
        margin: 0
      }}>
        {description}
      </p>
    </motion.div>
  );
};

const AIInnovation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const innovationSteps = [
    {
      step: 1,
      icon: Lightbulb,
      title: "Idea Generation & Validation",
      description: "Our AI tools analyze market trends, identify opportunities, and validate your innovative concepts. We use advanced algorithms to assess market potential and competitive landscape."
    },
    {
      step: 2,
      icon: Target,
      title: "Market Analysis & Research",
      description: "Comprehensive market research powered by AI to understand customer needs, market gaps, and potential demand. Our predictive models help identify the most promising opportunities."
    },
    {
      step: 3,
      icon: FileText,
      title: "Patent Research & Filing",
      description: "AI-assisted patent research to ensure your innovation is unique. We help with patent drafting, filing, and prosecution using intelligent document analysis tools."
    },
    {
      step: 4,
      icon: Rocket,
      title: "Prototype Development",
      description: "Rapid prototyping with AI-driven design optimization. Our tools help create functional prototypes that demonstrate your invention's potential."
    },
    {
      step: 5,
      icon: Users,
      title: "Market Testing & Feedback",
      description: "AI-powered market testing and user feedback collection. We analyze responses to refine your invention and prepare for commercialization."
    },
    {
      step: 6,
      icon: Award,
      title: "Commercialization Strategy",
      description: "Complete go-to-market strategy with AI-driven insights. From licensing to manufacturing partnerships, we guide you through successful commercialization."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Advanced analytics and machine learning provide deep market insights and trend predictions"
    },
    {
      icon: Shield,
      title: "IP Protection",
      description: "Comprehensive intellectual property strategy with AI-assisted patent research and filing"
    },
    {
      icon: TrendingUp,
      title: "Market Success",
      description: "Data-driven approach increases the likelihood of successful market entry and adoption"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to international markets with AI-powered market analysis and localization strategies"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % innovationSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [innovationSteps.length]);

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
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Innovation to Inventor
                </h2>
                <p style={{
                  fontSize: '20px',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Transform your innovative ideas into successful inventions with AI-powered tools and expert guidance
                </p>
              </motion.div>
            </div>

            {/* Innovation Process */}
            <div style={{ marginBottom: '80px' }}>
              <h3 style={{
                textAlign: 'center',
                fontSize: '36px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '50px'
              }}>
                The Innovation Journey
              </h3>
              
              <Grid container spacing={4}>
                {innovationSteps.map((step, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <InnovationStep
                      step={step.step}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      delay={index * 0.1}
                      isActive={activeStep === index}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>

            {/* Benefits Section */}
            <div style={{ marginBottom: '60px' }}>
              <h3 style={{
                textAlign: 'center',
                fontSize: '36px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '50px'
              }}>
                Why Choose AI-Powered Innovation?
              </h3>
              
              <Grid container spacing={4}>
                {benefits.map((benefit, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      style={{
                        background: 'white',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        height: '100%'
                      }}
                    >
                      <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '50%',
                        width: '80px',
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px auto'
                      }}>
                        <benefit.icon size={40} color="white" />
                      </div>
                      <h4 style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '15px'
                      }}>
                        {benefit.title}
                      </h4>
                      <p style={{
                        fontSize: '16px',
                        color: '#666',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {benefit.description}
                      </p>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: '40px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '60px'
              }}
            >
              <h3 style={{ fontSize: '32px', marginBottom: '30px' }}>
                Success Metrics
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '30px'
              }}>
                <div>
                  <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>
                    85%
                  </div>
                  <div style={{ fontSize: '18px' }}>Patent Success Rate</div>
                </div>
                <div>
                  <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>
                    92%
                  </div>
                  <div style={{ fontSize: '18px' }}>Market Validation Success</div>
                </div>
                <div>
                  <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>
                    78%
                  </div>
                  <div style={{ fontSize: '18px' }}>Commercialization Success</div>
                </div>
                <div>
                  <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>
                    500+
                  </div>
                  <div style={{ fontSize: '18px' }}>Innovations Supported</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ textAlign: 'center' }}
            >
              <h3 style={{
                fontSize: '32px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '20px'
              }}>
                Ready to Transform Your Innovation?
              </h3>
              <p style={{
                fontSize: '18px',
                color: '#666',
                marginBottom: '30px',
                maxWidth: '600px',
                margin: '0 auto 30px auto'
              }}>
                Let our AI-powered tools and expert team guide you from concept to successful commercialization
              </p>
              <Btn
                Gname="Start Your Innovation Journey"
                imgarr={arr}
                style={{
                  position: "relative",
                  maxHeight: "123px",
                  color: "white",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  minHeight: "59px",
                  width: "300px",
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

export default AIInnovation; 