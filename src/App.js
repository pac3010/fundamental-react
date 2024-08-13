import './App.css';
import ForgotPassword from './components/ForgotPassword/RequestForgotPassword';
import NewPassword from './components/ForgotPassword/NewPassword';

function App() {
  const url = window.location.href;

  // Check if the URL contains "/reset-password"
  const isResetPassword = url.includes('/reset-password');

  return (
    <div className="App">
      {isResetPassword ? <NewPassword /> : <ForgotPassword />}
    </div>
  );
}

export default App;