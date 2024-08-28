// Login.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Pages/Styles/Login.css'; // Optional for further styling

const Login = () => {
  return (
    <motion.div
      className="login-page"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>Login</h1>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </motion.div>
  );
};

export default Login;
