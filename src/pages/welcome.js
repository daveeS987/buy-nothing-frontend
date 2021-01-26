import Signup from '../pages/signup/signup.js';
import Login from '../context/auth/login.js';


function WelcomePage() {

  return (
    <>
      <h1>Welcome Page</h1>
      <Signup />
      <Login />

    </>
  )
}

export default WelcomePage