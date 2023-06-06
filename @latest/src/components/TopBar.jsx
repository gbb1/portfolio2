import { useState, useEffect } from 'react'
import { ImLinkedin } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'

import '../App.css';

const TopBar = () => {
  return (
    <div className="bg-transparent z-[1000] flex flex-row w-full fixed justify-end b-10 items-center h-[6vh] p-10 border-box">
{/*
      <div className="scale-[150%] min-h-min">
        <ImLinkedin />
      </div>

      <div className="scale-[150%] min-h-min">
        <FaGithub />
      </div> */}
      <div className="shadow-lg rounded-[1000px] bg-white p-2 px-4 items-center flex flex-row gap-4">
        <ul className="menu menu-horizontal bg-transparent rounded-box">
          <li>
            <a className="rounded-[10000px] w-12 h-12">
              <div className="scale-[150%] min-h-min">
                <ImLinkedin color="black" />
              </div>
            </a>
          </li>
          <li>
            <a className="rounded-[10000px] w-12 h-12">
              <div className="scale-[150%] min-h-min">
                <FaGithub color="black" />
              </div>
            </a>
          </li>
        </ul>

        <button className="btn justify-self-end rounded-[1000px] bg-black">Get in touch</button>
        <button className="btn justify-self-end rounded-[1000px] bg-black">View resume</button>
      </div>
    </div>
  )
}

export default TopBar;