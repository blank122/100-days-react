import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Card.css'

function App() {
  const [count, setCount] = useState(0)

  const name = "Joshua";
  const age = 23;
  const hobby = "Singing";

  //lets try to create an object also (for advanced peps only) then destructure the object and show to the component

  const me = { name: "Joshua", age: 23, hobby: "Singing" };



  return (
    <>

      <h1>Profile Card <br /> Using Variable</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}

      <div className="profile-card">
        <div className="profile-image">
          <img src="https://i.pravatar.cc/150?img=1" alt="User" />
        </div>
        <h2>{name}</h2>
        <p>{hobby}</p>
        <p>{age}</p>

        <div className="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </>
  )
}

export default App
