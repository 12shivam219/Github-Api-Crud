import React from 'react'
import UserAvatar from '../GET/User_Avatar/UserAvatar'


export default function Header() {
    return (
        <>
            <div className="header block w-full bg-[#161b22] fixed py-1.5 shadow-xl">
                <div className="navContainer flex w-11/12 m-auto justify-between">
                    <div className="left-info flex items-center">
                        <div className="nav-img">
                            <img src="./assets/git-logo.jpg" alt="git-logo.jpg" className='rounded-full w-12'/>
                        </div>
                        <div className="nav-Search mx-5 w-[240px]">
                            <input type="search" name="navsearch" placeholder='Search or jump to...' id="navSearch" className='w-full rounded-sm px-1 outline-none'/>
                        </div>
                        <div className="nav">
                            <ul className='flex'>
                                <li className='text-white mx-2 font-semibold'>Pull requests</li>
                                <li className='text-white mx-2 font-semibold'>Issues</li>
                                <li className='text-white mx-2 font-semibold'>Codespaces</li>
                                <li className='text-white mx-2 font-semibold'>Marketplace</li>
                                <li className='text-white mx-2 font-semibold'>Explore</li>
                            </ul>
                        </div>
                    </div>

                    <div className="right-info flex">
                        <div className="rightContainer flex items-center">
                            <div className="newRepo text-white text-3xl mx-2.5">
                                +
                            </div>
                            <div className="avatar">
                                <UserAvatar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
