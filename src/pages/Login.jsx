import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const emailRegex = /.*@[a-z0-9.-]*/i;
    const passwordRegex = /^[0-9a-zA-Z]{6,}$/i;
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      setDisable(false);
    } else {
      setDisable(true);
    }

    console.log(emailRegex.test(email), passwordRegex.test(password));
  }, [email, password]);

  const checkValue = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div>
      <div>
        <input
          type="email"
          name="email"
          id="email-login"
          placeholder="Email"
          data-testid="email-input"
          onChange={ (e) => checkValue(e) }
        />
        <input
          type="password"
          name="password"
          id="password-login"
          placeholder="Senha"
          data-testid="password-input"
          onChange={ (e) => checkValue(e) }
        />
      </div>
      <Link to="/">
        <input
          type="button"
          value="Enter"
          data-testid="login-submit-btn"
          disabled={ disable }
        />
      </Link>
    </div>
  );
}

export default Login;
