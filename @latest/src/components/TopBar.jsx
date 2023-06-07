import { useState, useEffect } from 'react'
import { ImLinkedin } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'

import '../App.css';
import './ref.css';

const TopBar = () => {
  return (
    <div className="bg-transparent z-[1000] flex flex-row w-full fixed justify-end items-center h-min max-h-[12vh] md:h-[6vh] md:max-h-min p-2 md:p-10 border-box">
{/*
      <div className="scale-[150%] min-h-min">
        <ImLinkedin />
      </div>

      <div className="scale-[150%] min-h-min">
        <FaGithub />
      </div> */}
      <div className="shadow-lg w-full rounded-[20px] glassy p-2 px-2 md:px-4 justify-center md:justify-between items-center flex flex-row gap-4">
        {/* <ul className="menu menu-horizontal bg-transparent rounded-box">
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
        </ul> */}
        <div className="flex flex-row gap-2">

          <button className="justify-self-end rounded-[1000px] bg-black text-[12px] md:text-xs px-2 py-2 md:px-3 md:py-3 text-white hover:bg-green-400 hover:text-black transition-all">Get in touch</button>
          <button className="justify-self-end rounded-[1000px] bg-black text-[12px] md:text-xs px-2 py-2 md:px-3 md:py-3 text-white hover:bg-green-400 hover:text-black transition-all">View resume</button>
        </div>
      </div>
    </div>
  )
}

export default TopBar;



/*

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


    <div className="bg-transparent z-[1000] flex flex-row w-full fixed justify-end items-center h-[6vh] p-2 md:p-10 border-box">
{/*
      <div className="scale-[150%] min-h-min">
        <ImLinkedin />
      </div>

      <div className="scale-[150%] min-h-min">
        <FaGithub />
      </div> */
    //   <div className="shadow-lg rounded-[1000px] bg-white p-2 px-4 items-center flex flex-row gap-4">
    //     <ul className="menu menu-horizontal bg-transparent rounded-box">
    //       <li>
    //         <a className="rounded-[10000px] w-12 h-12">
    //           <div className="scale-[150%] min-h-min">
    //             <ImLinkedin color="black" />
    //           </div>
    //         </a>
    //       </li>
    //       <li>
    //         <a className="rounded-[10000px] w-12 h-12">
    //           <div className="scale-[150%] min-h-min">
    //             <FaGithub color="black" />
    //           </div>
    //         </a>
    //       </li>
    //     </ul>

    //     <button className="justify-self-end rounded-[1000px]">Get in touch</button>
    //     <button className="justify-self-end rounded-[1000px]">View resume</button>
    //   </div>
    // </div>
