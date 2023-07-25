import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/Homepage.css'

const Homepage = () => {
    const navigate = useNavigate()
  return (
    <div className="home">
        <header>
            <h2>ReadmeWiz</h2>
            <div>
            <a href="https://github.com/Mhith/ReadmeWiz" target="_blank">Github</a>
            <a href="" onClick={()=>navigate("/create-readme")}>Create</a>
            </div>
        </header>
        <div className='home-center'>
            <div className='home-left'>
                <div className='main-title'>
                    Creating GitHub Profile Readme is now easy
                </div>
                <p>Ever thought how you can create those cool readme's you see on different profiles, but didn't know how to do it?<br></br> You're here at the right place!</p>
                <p>Hit Create to get started!</p>
                <button id="start" onClick={()=>navigate("/create-readme")}>Create Readme</button>
            </div>
            <img src="Landing.jpg" alt="landing" />
        </div>
    </div>

  )
}

export default Homepage