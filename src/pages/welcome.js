import LoginButton from '../context/authO/authOlogin.js';
import LogoutButton from '../context/authO/authOlogout.js';

function WelcomePage() {

  return (
    <>
      <h1>Welcome Page</h1>

      <h1>Auth O Login</h1>
      <LoginButton/>

      <h1>Auth O Logout</h1>
      <LogoutButton />

    </>
  )
}

export default WelcomePage