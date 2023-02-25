import React, { useState } from 'react'
import "./style.css"

export default function Authentication() {

  const [userName, setUserName] = useState(' ');
  const [token, setToken] = useState(' ');

  //"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"  
  const handleSubmit = (e) => {

    e.preventDefault();

    const github_data = {
      "userName": userName,
      "token": token
    }

    console.log(github_data);

    setUserName(' ');
    setToken(' ');

  }

  return (
    <>
      <div className="authentication-page">
        <div className="container block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 m-auto mb-2.5 shadow-sm">
          <div className="git-img">
            <img src="./assets/git-logo.jpg" alt="" width="50" height="50" className='rounded-full m-auto' />
          </div>
          <form className="git-access-container" onSubmit={handleSubmit}>
            <div className="git-username">
              <label htmlFor="username" className='block text-white my-1.5'>
                Username :
              </label>
              <input type="text" value={userName} name="" id="username" required className='w-full outline-blue-500 p-2 rounded-md bg-[#ffffff5e]' onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="git-access-token">
              <label htmlFor="token" className='block text-white my-1.5'>
                Token :
              </label>
              <input type="text" value={token} name="" id="token" required className='w-full outline-blue-500 p-2 rounded-md bg-[#ffffff5e]'
                onChange={(e) => setToken(e.target.value)} />
            </div>
            <div className="token-info mt-3 text-white text-justify text-xs">
              To get a token you need a GitHub account. On your profile, go to Settings, at the left side of the page click at Developer Settings, then Personal access tokens, and finally click on Generate new token button.

            </div>
            <div className="access-button my-5 text-center">
              <button type='submit'>Access</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
