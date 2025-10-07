import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import '../Auth.css';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const { login, signup } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!isLogin) {
      // Signup logic
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      // Auto-generate username from email
      const username = formData.email.split('@')[0] + Math.floor(Math.random() * 1000);
      
      const signupData = {
        ...formData,
        username: username,
        phone: '' // Add empty phone field as it's optional
      };

      const { confirmPassword, ...dataToSend } = signupData;
      
      const result = await signup(dataToSend);
      
      if (!result.success) {
        setError(result.message);
      } else {
        setSuccess('Account created successfully!');
      }
    } else {
      // Login logic
      const result = await login(formData.email, formData.password);
      
      if (!result.success) {
        setError(result.message);
      } else {
        setSuccess('Login successful!');
      }
    }
    
    setLoading(false);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
    // Clear form when switching
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-modal-content">
        {/* Toggle Buttons */}
        <div className="auth-toggle">
          <button 
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        <div className="auth-header">
          <h2>{isLogin ? 'Login to Your Account' : 'Create Your Account'}</h2>
          <p>{isLogin ? 'Welcome back! Please enter your credentials' : 'Join thousands of investors on Equityze'}</p>
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className={`auth-form ${isLogin ? 'login-padded' : ''}`}>
          {!isLogin && (
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required={!isLogin}
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required={!isLogin}
                  placeholder="Last name"
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder={isLogin ? "Enter your password" : "Create password"}
              minLength="6"
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={!isLogin}
                placeholder="Confirm password"
                minLength="6"
              />
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="/forgot-password" style={{ color: '#5e96a4', textDecoration: 'none' }}>
                Forgot password?
              </a>
            </div>
          )}

          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? (isLogin ? 'Logging in...' : 'Creating Account...') : (isLogin ? 'Login' : 'Signup')}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {isLogin ? "Not a member? " : "Already have an account? "}
            <span 
              onClick={switchMode} 
              className="switch-button"
              style={{ cursor: 'pointer' }}
            >
              {isLogin ? 'Signup now' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;