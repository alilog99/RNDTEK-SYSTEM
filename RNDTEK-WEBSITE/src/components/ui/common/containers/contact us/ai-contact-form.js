import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageSquare, 
  BarChart3, 
  TrendingUp, 
  Cpu,
  Target,
  Send,
  CheckCircle
} from 'lucide-react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import Grid from "@material-ui/core/Grid";
import Btn from "../../button/button";
import arr from "../../../../../assets/imgs/arrowblack.png";

const AIContactForm = ({ onSubmit, formData, setFormData, isSubmitted }) => {
  const aiServices = [
    { id: 'ai-ml', label: 'AI & ML Integration', icon: Brain, color: '#667eea' },
    { id: 'data-analytics', label: 'Data Analytics', icon: BarChart3, color: '#764ba2' },
    { id: 'chatbots', label: 'Intelligent Chatbots', icon: MessageSquare, color: '#f093fb' },
    { id: 'predictions', label: 'AI Predictions', icon: TrendingUp, color: '#4facfe' },
    { id: 'automation', label: 'Process Automation', icon: Cpu, color: '#43e97b' },
    { id: 'innovation', label: 'Innovation Tools', icon: Target, color: '#fa709a' }
  ];

  const handleServiceToggle = (serviceId) => {
    const currentServices = formData.aiServices || [];
    const updatedServices = currentServices.includes(serviceId)
      ? currentServices.filter(id => id !== serviceId)
      : [...currentServices, serviceId];
    
    setFormData({
      ...formData,
      aiServices: updatedServices
    });
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          padding: '60px 40px',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <CheckCircle size={80} color="white" style={{ marginBottom: '20px' }} />
        <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>
          Thank You for Your Interest!
        </h3>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          We've received your AI services inquiry. Our team will review your requirements 
          and get back to you within 24 hours with a personalized solution.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        border: '2px solid #f0f0f0'
      }}
    >
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Fade bottom>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Brain size={40} color="white" />
            </div>
            <h3 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#333',
              marginBottom: '15px'
            }}>
              AI Services Inquiry
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              Tell us about your AI project requirements and we'll create a custom solution for you.
            </p>
          </div>
        </Fade>
      </ScrollAnimation>

      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                placeholder="Enter your full name"
              />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                placeholder="Enter your email address"
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Company/Organization
              </label>
              <input
                type="text"
                value={formData.company || ''}
                onChange={(e) => handleInputChange('company', e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                placeholder="Enter your company name"
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '15px'
              }}>
                AI Services of Interest *
              </label>
              <Grid container spacing={2}>
                {aiServices.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={service.id}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleServiceToggle(service.id)}
                      style={{
                        border: `2px solid ${(formData.aiServices || []).includes(service.id) ? service.color : '#e0e0e0'}`,
                        borderRadius: '12px',
                        padding: '15px',
                        cursor: 'pointer',
                        background: (formData.aiServices || []).includes(service.id) ? `${service.color}10` : 'white',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <service.icon 
                        size={20} 
                        color={(formData.aiServices || []).includes(service.id) ? service.color : '#666'} 
                      />
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: (formData.aiServices || []).includes(service.id) ? service.color : '#333'
                      }}>
                        {service.label}
                      </span>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Project Description *
              </label>
              <textarea
                required
                value={formData.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={5}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                placeholder="Describe your AI project requirements, goals, and timeline..."
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Budget Range
              </label>
              <select
                value={formData.budget || ''}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none',
                  background: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              >
                <option value="">Select budget range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-500k">$100,000 - $500,000</option>
                <option value="over-500k">Over $500,000</option>
                <option value="discuss">Let's discuss</option>
              </select>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ textAlign: 'center' }}>
              <Btn
                type="submit"
                Gname="Send AI Inquiry"
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
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </motion.div>
  );
};

export default AIContactForm; 