import React, { useState } from 'react'
import CommonContainer from '../../CommonContainer/CommonContainer';
import Profile from '../ProfilePage/Profile';
import "./style.css"

export default function Authentication() {

  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIN") || "false")

  // const handleButtonClick =  () => {
  //   setIsAuthenticated(true);
  //   setLoggedIn("true");
  //   localStorage.setItem("loggedIN", "true")
  //   const github_data = {
  //     "userName": userName.trim(),
  //     "token": token.trim()
  //   }

  //   localStorage.setItem("data", JSON.stringify(github_data))


  //   setUserName('');
  //   setToken('');
  // }


  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://api.github.com', {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (response.status === 401) {
        throw new Error('Invalid token');
      }

      setIsAuthenticated(true);
      setLoggedIn('true');
      localStorage.setItem('loggedIN', 'true');

      const github_data = {
        userName: userName.trim(),
        token: token.trim(),
      };

      localStorage.setItem('data', JSON.stringify(github_data));

      setUserName('');
      setToken('');
    } catch (error) {
      console.error(error);
      alert('Error: Invalid token');
    }
  };



  if (isAuthenticated || isLoggedIn == "true") {

    return (
      <CommonContainer>
        <Profile />
      </CommonContainer>

    );
  }


  else {
    return (
      <>
        <div className="authentication-page">
          <div className="container block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 m-auto mb-2.5 shadow-sm">
            <div className="git-img">
              <img src="./assets/git-logo.jpg" alt="" width="50" height="50" className='rounded-full m-auto' />
            </div>
            <form className="git-access-container">
              <div className="git-username">
                <label htmlFor="username" className='block text-white my-1.5'>
                  Username :
                </label>
                <input type="text" value={userName} name="" id="username" required className='w-full outline-blue-500 rounded-md bg-[#ffffff5e]' onChange={(e) => setUserName(e.target.value.trim())} />
              </div>
              <div className="git-access-token">
                <label htmlFor="token" className='block text-white my-1.5'>
                  Token :
                </label>
                <input type="text" value={token} name="" id="token" required className='w-full outline-blue-500 rounded-md bg-[#ffffff5e]'
                  onChange={(e) => setToken(e.target.value.trim())} />
              </div>
              <div className="token-info mt-3 text-white text-justify text-xs">
                To get a token you need a GitHub account. On your profile, go to Settings, at the left side of the page click at Developer Settings, then Personal access tokens, and finally click on Generate new token button.

              </div>
              <div className="access-button my-5 text-center">
                <button type='submit' onClick={handleButtonClick}>Access</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}
