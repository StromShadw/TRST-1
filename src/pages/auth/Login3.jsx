import { useEffect } from 'react';
import './style.css';

function Login3() {
  useEffect(() => {
    const showHiddenPass = (loginPass, LoginEye) => {
      const input = document.getElementById(loginPass);
      const iconEye = document.getElementById(LoginEye);

      iconEye.addEventListener('click', () => {
        // Change password to text 
        if (input.type === 'password') {
          // Switch to text 
          input.type = 'text';

          // Icon change
          iconEye.classList.add('ri-eye-line');
          iconEye.classList.remove('ri-eye-off-line');
        } else {
          // Change to password
          input.type = 'password';

          // Icon change
          iconEye.classList.remove('ri-eye-line');
          iconEye.classList.add('ri-eye-off-line');
        }
      });
    };

    showHiddenPass('login-pass', 'login-eye');
  }, []);

  return (
    <div className="login">
      <img src="login-bg.png" alt="login background" className="login__img" />

      <form action="" className="login__form">
        <h1 className="login__title">Login</h1>

        <div className="login__content">
          <div className="login__box">
            <i className="bx bx-lock-alt"></i>

            <div className="login__box-input">
              <input type="email" required className="login__input" placeholder=""/>
              <label className="login__label">Username</label>
            </div>
          </div>

          <div className="login__box">
            <i className="ri-lock-2-line login__icon"></i>

            <div className="login__box-input">
              <input type="password" required className="login__input" id="login-pass" placeholder=""/>
              <label className="login__label">Password</label>
              <i className="ri-eye-off-line login__eye" id="login-eye"></i>
            </div>
          </div>
        </div>

        <div className="login__check">
          <div className="login__check-group">
            <input type="checkbox" className="login__check-input"/>
            <label className="login__check-label">Remember me</label>
          </div>
          <a href="#" className="login__forgot">Forgot Password?</a>
        </div>

        <button type="submit" className="login__button">Login</button>
        <p className="login__register">
          Don't have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login3;
