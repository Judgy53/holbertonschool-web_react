import { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite'

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    setEnableSubmit(email.length > 0 && password.length > 0);
  }, [email, password]);

  return (
    <>
      <form className={css(styles.login)} onSubmit={handleLoginSubmit}>
        <label className={css(styles.label)}>
          Email:
          <input type="email" autoComplete="email" className={css(styles.input)} value={email} onChange={handleChangeEmail} />
        </label>
        <label className={css(styles.label)}>
          Password:
          <input type="password" className={css(styles.input)} value={password} onChange={handleChangePassword} />
        </label>
        <input type="submit" className={css(styles.submit)} value="Ok" disabled={!enableSubmit}/>
      </form>
    </>
  );
}

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    '@media (max-width: 900px)': {
      flexDirection: 'column'
    }
  },
  label: {
    display: 'inline-flex',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      marginBottom: '.25rem'
    }
  },
  input: {
    margin: '0 .5rem',
    flexGrow: 1
  },
  submit: {
    width: 'fit-content'
  }
});

export default Login;
