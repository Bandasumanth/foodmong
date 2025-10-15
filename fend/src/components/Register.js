import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, formData);
    alert('Registration successful! Please log in.');
    navigate('/login');
  } catch (err) {
    console.error(err.response?.data || err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="auth-container">
    


      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Register</h2>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
