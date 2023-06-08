import { useState, useEffect } from 'react'

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';

import '../App.css';


export default function Project({ prompt, image, tags, flip, title, description, link }) {
  return (
    <div className="flex flex-col w-full">
      <div className={`flex flex-col gap-2 bg-white rounded-[20px] w-full shadow-lg p-4 md:p-6`}>

          {/* <div className="bg-white rounded-[20px] w-[50%] shadow-lg p-6"> */}
            {/* <div className="w-fullrounded-[20px] shadow-lg">
              <Tilt className="w-full h-full rounded-[20px]">
                <div options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                className = "rounded-[20px] w-full h-full">

                  <img src={image} className="rounded-[20px]" />

                </div>
              </Tilt>
            </div> */}
          {/* </div> */}
        {/* <div className="w-full h-full justify-center">

          <Tilt className="w-full h-full rounded-[20px] justify-center">
            <div options={{
              max: 45,
              scale: 1,
              speed: 30,
            }}
            className = "rounded-[20px] w-full h-full justify-center">

            <img src={image} className="rounded-lg justify-center shadow-lg hover:w-[95%] hover:mb-4" />

            </div>
          </Tilt>
        </div> */}

        <div className="font-normal text-base md:text-2xl mb-2 mt-2">
          {prompt}
        </div>

        <div className="font-bold text-md md:text-2xl mb-0">
            {title}
          </div>

        {/* <div className="flex flex-row gap-2 w-full mt-0 mb-2">
            {
              tags.map((t, i) => {
                return (
                  <div key={t[0] + ',' + i} className="badge text-[10px] md:text-[16px]">{t}</div>
                )
              })
            }
          </div> */}



          <img src={image} className="rounded-lg shadow-lg" />

          {/* <div className="font-bold text-2xl mb-2">
            {title}
          </div> */}
          <div className="flex flex-row gap-2 w-full mt-2">
            {
              tags.map((t, i) => {
                return (
                  <div key={t[0] + ',' + i} className="badge text-[10px] md:text-[16px]">{t}</div>
                )
              })
            }
          </div>

          <div className="font-normal text-[12px] md:text-xl mb-2 ">
            {description}
          </div>

          {
            link.length > 0
              ? <button className="bg-black text-[12px] md:text-sm px-4 py-2 md:px-3 md:py-3 text-white hover:bg-green-400 hover:text-black transition-all self-end rounded-[1000px] bg-black">
                  <a href={`${link}`}>
                    See details
                  </a>
                </button>
              : <button className="disabled opacity-70 bg-gray-200 text-[12px] md:text-sm px-4 py-2 md:px-3 md:py-3 text-black hover:bg-gray-400 text-black transition-all self-end rounded-[1000px] bg-black">Launching soon!</button>
          }
        {/* <div className="bg-white rounded-[20px] w-full shadow-lg p-6 flex flex-col">

          <img src={image} className="rounded-lg" />

          <div className="font-bold text-2xl mb-2 mt-2">
            {title}
          </div>

          <div className="font-normal text-xl mb-2 mt-2">
            {description}
          </div>

          <button className="btn justify-self-end rounded-[1000px] bg-black">Get in touch</button>


        </div> */}

      </div>
    </div>
  )
}

/*

    <div className="flex flex-col w-full">
      <div className={`flex ${flip ? 'flex-row-reverse' : 'flex-row'} gap-2 hover:gap-6 transition-all duration-100`}>

        {/* <div className="bg-white rounded-[20px] w-[50%] shadow-lg p-6">
        <div className="w-[60%] rounded-[20px] shadow-lg">
        <Tilt className="w-full h-full rounded-[20px]">
          <div options={{
            max: 45,
            scale: 1,
            speed: 30,
          }}
          className = "rounded-[20px] w-full h-full">

            <img src={image} className="rounded-[20px]" />

          </div>
        </Tilt>
      </div>


    <div className="bg-white rounded-[20px] w-[40%] shadow-lg p-6">

    </div>

  </div>
</div>

*/