import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';

import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username, password)
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Fazer Login</h1>
            <div className='input-field'>
                <input type="email" placeholder='E-mail' 
                onChange={(e) => setUsername(e.target.value)}   />
                <FaUser className='icon' />
            </div>
            <div className='input-field'>
                <input type="password" placeholder='Senha' 
                onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icon' />
            </div>

            <div className="recall-forget">
              <label>
                <input type="checkbox" />
                Lembrar-me
              </label>

              <a href="/">Esqueci minha senha</a>
            </div>

            <button>Login</button>

            <div className="register">
              <p>Não tem conta? <a href="/">Registre-se</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login;
