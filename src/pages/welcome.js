import { Link } from "react-router-dom";


function WelcomePage() {

  return (
    <>
      <h1>Welcome Page</h1>


      <ul>
        <li>
          <Link to='/homepage'> Home Page</Link>
        </li>
      </ul>
    </>
  )
}

export default WelcomePage