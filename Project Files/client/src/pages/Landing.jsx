import React, { useEffect } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3>SB Works</h3>
              <button onClick={()=> navigate('/authenticate')} >Sign In</button>
            </div>

            <div className="landing-hero-text">

                <h1>Ignite Your Passion. Thrive with SB Works.</h1>
                 <p>Step into a world where talent meets opportunity. At <strong>SB Works</strong>, we empower creators, innovators, and freelancers to showcase their craft, connect with visionary clients, and bring ambitious projects to life. Whether you're here to build, collaborate, or grow — your journey starts now.</p>
                <button onClick={() => navigate('/authenticate')}>Get Started</button>

            </div>

        </div>

    </div>
  )
}

export default Landing